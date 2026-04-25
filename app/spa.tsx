"use client";

import { RouterProvider } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { getRouter } from "../src/router";

export default function Spa() {
  const [router, setRouter] = useState<ReturnType<typeof getRouter> | null>(null);

  useEffect(() => {
    // Defer TanStack Router initialization until after Next's initial commit.
    // This avoids `history.replaceState` running during the commit/insertion phase.
    let cancelled = false;
    const rafId = window.requestAnimationFrame(() => {
      queueMicrotask(() => {
        if (!cancelled) setRouter(getRouter());
      });
    });

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  // TanStack Router isn't configured for SSR in this incremental migration.
  // Rendering only after client init avoids SSR-time crashes and avoids commit-time history writes.
  if (!router) return null;

  return <RouterProvider router={router} />;
}
