# Tasks

## 1. Proxy Environment Configuration & Scripts

- [x] 1.1 Update `chinese-hsk-website/package.json` scripts (`dev`, `start`, `build`, `seed:supabase`) to pass `--use-env-proxy` to Node.js, and verify the scripts execute with proxy settings enabled.
- [x] 1.2 Update `chinese-hsk-website/next.config.mjs` to auto-detect `HTTP_PROXY` or `HTTPS_PROXY` and ensure proxy routing is active during Turbopack and runtime compilation.
- [x] 1.3 Create a root `package.json` with workspace delegation scripts (`dev`, `build`, `start`), and verify running `npm run dev` works from the repository root as well as from `chinese-hsk-website/`.

## 2. Supabase Client Resilience & Diagnostics

- [x] 2.1 Refine `chinese-hsk-website/lib/db/supabase.js` with structured error handling, connection timeout management, and clear proxy diagnostic logs.
- [x] 2.2 Implement `/api/health/db` diagnostic endpoint in `chinese-hsk-website/app/api/health/db/route.js` returning sanitized connectivity status, response latency, and database health.

## 3. Verification & Testing

- [x] 3.1 Verify `/api/health/db` endpoint returns `{ status: "ok", online: true }` and reports response time in milliseconds.
- [x] 3.2 Verify login with existing account (`www@gg.com` and `123456aa`) succeeds and issues the `mandarin_flow_session` cookie.
- [x] 3.3 Verify login with an incorrect password returns `Invalid email or password.` instead of falling back to the generic `Account service is temporarily unavailable` banner.
