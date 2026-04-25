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

function main() {
  let framerMotionRoot;
  try {
    framerMotionRoot = path.dirname(require.resolve("framer-motion/package.json"));
  } catch {
    process.stdout.write("[patch-framer-motion] framer-motion not installed, skipping.\n");
    return;
  }

  const targets = [
    {
      rel: "dist/es/motion/utils/use-visual-element.mjs",
      transform: (src) =>
        src
          .replace(
            "import { useContext, useRef, useInsertionEffect, useEffect } from 'react';",
            "import { useContext, useRef, useEffect } from 'react';",
          )
          .replace("useInsertionEffect(() => {", "useIsomorphicLayoutEffect(() => {"),
    },
    {
      rel: "dist/es/utils/use-motion-value-event.mjs",
      transform: (src) =>
        src
          .replace("import { useInsertionEffect } from 'react';", "import { useLayoutEffect } from 'react';")
          .replace("useInsertionEffect(() => value.on(event, callback)", "useLayoutEffect(() => value.on(event, callback)"),
    },
    {
      rel: "dist/es/value/use-follow-value.mjs",
      transform: (src) =>
        src
          .replace("import { useContext, useInsertionEffect } from 'react';", "import { useContext, useLayoutEffect } from 'react';")
          .replace("useInsertionEffect(() => {", "useLayoutEffect(() => {"),
    },
  ];

  const results = targets.map(({ rel, transform }) =>
    patchFile(path.join(framerMotionRoot, rel), transform),
  );

  const patchedCount = results.filter((r) => r.status === "patched").length;
  process.stdout.write(
    `[patch-framer-motion] ${patchedCount} patched, ${results.length - patchedCount} unchanged/missing.\n`,
  );
}

main();

