# AGENTS.md

## Cursor Cloud specific instructions

### Overview
This repo is **Mundo da Teca**, a single frontend-only SPA (no backend, no database, no env vars). Stack: React 18 + TypeScript + Vite 5, package manager **npm** (`package-lock.json`). All content is static mock data under `src/` — there is intentionally no checkout/login/persistence backend (see `PROJECT_STATE.md`).

### Service: Vite dev server (the whole app)
Standard scripts live in `package.json`:
- Run (dev, primary): `npm run dev` — Vite dev server on `http://localhost:5173` (default port, HMR enabled).
- Build: `npm run build` — outputs to `dist/` (note: `build` runs `vite build` only, with no separate `tsc` typecheck step).
- Preview a production build: `npm run preview`.

### Non-obvious caveats
- **No lint script / ESLint not installed.** `eslint.config.js` exists, but ESLint and its plugins are not listed in `package.json` and there is no `lint` script, so `npm run lint`/`eslint` will not work out of the box. Don't assume lint is runnable.
- **Type-check is manual and currently not clean.** The build does not invoke `tsc`, so `npm run build` passes regardless of type errors. Running `npx tsc -b` currently reports several **pre-existing** type errors (e.g. `setScreen` type mismatches in `src/App.tsx`, and a missing `node` types definition). These do not block `npm run dev` or `npm run build`; don't treat a failing `tsc` as something you introduced.
- **Testing is manual/GUI only.** There is no automated test suite. Verify changes by clicking through the SPA screens (Início, Clube, Brincadeiras, Minha Coleção, Ateliê). Stateful flows worth exercising: adding an Ateliê good to "minha caixa", and the Diário "guardar" entry flow.
