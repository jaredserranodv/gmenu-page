import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

function patchFile(filePath, transform) {
  if (!fs.existsSync(filePath)) return { filePath, status: "missing" };
  const before = fs.readFileSync(filePath, "utf8");
  const after = transform(before);
  if (after === before) return { filePath, status: "unchanged" };
  fs.writeFileSync(filePath, after, "utf8");
  return { filePath, status: "patched" };
}

function patchTransitioner(src, reactIdent) {
  if (src.includes("originalStartTransition") && src.includes("router.startTransition = (fn) => {")) {
    return src;
  }

  // Replace the inline assignment that toggles React state with a useEffect wrapper
  // that only delegates to React.startTransition, and restores on cleanup.
  const from = new RegExp(
    String.raw`router\.startTransition\s*=\s*\(fn\)\s*=>\s*\{\s*setIsTransitioning\(true\);\s*${reactIdent}\.startTransition\(\(\)\s*=>\s*\{\s*fn\(\);\s*setIsTransitioning\(false\);\s*\}\);\s*\};`,
    "m",
  );

  const to = `\n\t${reactIdent}.useEffect(() => {\n\t\tconst originalStartTransition = router.startTransition;\n\t\trouter.startTransition = (fn) => {\n\t\t\t${reactIdent}.startTransition(() => {\n\t\t\t\tfn();\n\t\t\t});\n\t\t};\n\t\treturn () => {\n\t\t\trouter.startTransition = originalStartTransition;\n\t\t};\n\t}, [router]);\n`;

  const next = src.replace(from, to.trimEnd());
  return next;
}

function main() {
  let pkgRoot;
  try {
    pkgRoot = path.dirname(require.resolve("@tanstack/react-router/package.json"));
  } catch {
    process.stdout.write("[patch-tanstack-react-router] @tanstack/react-router not installed, skipping.\n");
    return;
  }

  const results = [];

  results.push(
    patchFile(path.join(pkgRoot, "dist/esm/Transitioner.js"), (src) => patchTransitioner(src, "React$1")),
  );

  results.push(
    patchFile(path.join(pkgRoot, "dist/cjs/Transitioner.cjs"), (src) => patchTransitioner(src, "react")),
  );

  const patchedCount = results.filter((r) => r.status === "patched").length;
  process.stdout.write(
    `[patch-tanstack-react-router] ${patchedCount} patched, ${results.length - patchedCount} unchanged/missing.\n`,
  );
}

main();

