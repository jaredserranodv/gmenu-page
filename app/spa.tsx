"use client";

import { RouterProvider } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";

import { getRouter } from "../src/router";

export default function Spa() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Keep a stable router instance for the whole SPA lifetime.
  const router = useMemo(() => getRouter(), []);

  // TanStack Router isn't configured for SSR in this incremental migration.
  // Rendering it only after mount avoids SSR-time crashes while keeping the app behavior.
  if (!mounted) return null;

  return <RouterProvider router={router} />;
}
