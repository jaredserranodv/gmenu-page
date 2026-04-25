import Spa from "./spa";

export default function NotFound() {
  // Keep incremental migration behavior: fall back to the existing SPA router.
  return <Spa />;
}

