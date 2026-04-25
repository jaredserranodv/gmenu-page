import SpaShell from "./spa-shell";

export default function NotFound() {
  // Keep incremental migration behavior: fall back to the existing SPA router.
  return <SpaShell />;
}
