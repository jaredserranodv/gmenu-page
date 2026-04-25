# Migration Status: Vite -> Next.js

**Last update:** 2026-04-25

## Summary
This repository was migrated **incrementally** from a Vite-based React + TypeScript setup to **Next.js (App Router)** with a minimal-risk approach. The current goal is to keep the app behavior unchanged while running it under Next.js as a temporary SPA container.

## Current Status
- Incremental migration: **Yes**
- Build working (`npm run build`): **Yes**
- Dev working (`npm run dev`): **Yes**
- Production-ready: **No**

## Current Architecture
- **Next.js App Router** acts as the application container (`/app`).
- The existing app remains a **SPA based on TanStack Router**, rendered as a **Client Component**.

## Key Technical Decisions
- **Catch-all route:** `app/[[...slug]]/page.tsx` routes all paths to the SPA, preserving current routing behavior.
- **Client-only mount:** the SPA is rendered only after client mount to avoid SSR-time crashes while TanStack Router is not configured for SSR.
- **Vite dependencies kept temporarily:** Vite-related packages and scripts remain as a fallback until Phase 2 removes them safely.

## Known Issues / Limitations
- No real SSR for the SPA yet (client-only render).
- SEO is limited (single metadata entry in `app/layout.tsx`; no per-route metadata).
- ESLint is currently ignored during `next build` to avoid blocking the incremental migration.
- Temporary patch applied to `framer-motion` for React 19 compatibility (see 2026-04-25 entry below).

## 2026-04-25: Fix for “useInsertionEffect must not schedule updates.”

### Cause found
- The console error was triggered by **`framer-motion`** running non-style work inside `useInsertionEffect` under **React 19**, which must not lead to React updates (directly or indirectly).
- Specifically:
  - `node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs` called `visualElement.update(...)` inside `useInsertionEffect`.
  - `node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs` created subscriptions via `value.on(...)` inside `useInsertionEffect`.
  - `node_modules/framer-motion/dist/es/value/use-follow-value.mjs` attached follow behavior inside `useInsertionEffect`.

### Files modified
- `app/not-found.tsx`
- `node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs`
- `node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs`
- `node_modules/framer-motion/dist/es/value/use-follow-value.mjs`
- `scripts/patch-framer-motion-react19.mjs`
- `package.json`
- `migration_status.md`

### Solution applied
- Moved the above `useInsertionEffect` usages to safer effect phases:
  - `useInsertionEffect` -> `useIsomorphicLayoutEffect` for `visualElement.update(...)`
  - `useInsertionEffect` -> `useLayoutEffect` for motion value subscriptions/follow behavior
- Added a `postinstall` patch so this survives reinstalls: `node scripts/patch-framer-motion-react19.mjs`
- Added `app/not-found.tsx` to satisfy Next.js' internal `/_not-found` build output while keeping SPA fallback behavior.

### Commands executed
- `npm run build`
- `npm run dev -- -p 3001` (smoke test: start + request `/` + stop)

### Final status
- Fix applied: **Yes**
- `npm run build`: **Pass**
- `npm run dev`: **Pass** (smoke tested on port 3001)

## 2026-04-25: Next App Router x TanStack Router/history console error

### Cause found
- The console error “useInsertionEffect must not schedule updates” was also reproducible from the **TanStack Router/history** integration when running inside **Next.js App Router**.
- Root cause in this repo: `app/spa.tsx` created the TanStack router during render (`useMemo(() => getRouter(), [])`) even on the initial render that returned `null`. Router initialization can touch browser history (`replaceState`) and/or schedule transitions during Next's initial commit/insertion phase, which React 19 flags.

### Files modified
- `app/spa.tsx`
- `app/spa-shell.tsx`
- `app/[[...slug]]/page.tsx`
- `app/not-found.tsx`
- `migration_status.md`

### Solution applied
- Ensured the SPA mounts **client-only** and avoids commit-time history writes:
  - Load SPA via `dynamic(() => import("./spa"), { ssr: false })` in `app/spa-shell.tsx`
  - Defer TanStack router creation to a post-commit `useEffect` (`requestAnimationFrame` + `queueMicrotask`) in `app/spa.tsx`
  - Use `SpaShell` from both `app/[[...slug]]/page.tsx` and `app/not-found.tsx`

### Final status
- SPA still client-only: **Yes**
- `npm run build`: **Pass**

## Phase 2 TODOs
- Remove Vite completely (scripts, config, and dependencies) once no longer needed.
- Migrate routes to **native Next.js App Router** (create `app/.../page.tsx` pages and move route-level metadata).
- Migrate images/assets to Next conventions (`/public` and/or `next/image`).
- Restore SSR and SEO (route-level metadata, server rendering strategy).
- Re-enable ESLint during `next build` after formatting/lint baseline is clean.

## How To Run
```bash
npm install
npm run dev
npm run build
npm run start
```
