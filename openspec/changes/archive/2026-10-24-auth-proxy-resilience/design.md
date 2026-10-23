# Design: Auth Proxy Resilience and Development Connectivity

## Context

See [proposal.md](file:///E:/Chinese%20Website/Chinese-Hsk1-5-Books-And-Flashcard-Website/openspec/changes/auth-proxy-resilience/proposal.md) for motivation. The frontend authentication forms communicate with `/api/auth/login` and `/api/auth/register`, which call `createUser` and `authenticateUser` in `lib/auth/users.js` via the Supabase Admin client (`lib/db/supabase.js`). In Node.js >= 20.17 / 22+ / 25, the native `fetch` client (undici) ignores system environment proxies (`HTTP_PROXY`, `HTTPS_PROXY`) unless launched with `--use-env-proxy`. Without this flag, calls to Cloudflare-hosted Supabase endpoints from firewalled or proxy-dependent developer environments immediately abort with `ECONNRESET`, presenting a generic "Account service is temporarily unavailable" banner to users.

## Goals / Non-Goals

**Goals:**
- Provide zero-config proxy support for local development across Windows, macOS, and Linux without requiring developers to manually configure terminal environment variables before running `npm run dev`.
- Ensure Node.js and Next.js dev, build, start, and seeding scripts automatically respect `HTTPS_PROXY` / `HTTP_PROXY`.
- Provide a dedicated `/api/health/db` endpoint to easily diagnose database connectivity and latency directly from the browser or curl.
- Add root-level workspace script delegation so running `npm run dev` from the repository root correctly targets `chinese-hsk-website` and its `.env.local`.

**Non-Goals:**
- Replace Supabase with an offline mock or SQLite for authenticated users (guest mode already handles offline local storage).
- Bundle a local proxy server or alter user operating system network settings.
- Expose raw database connection strings, tokens, or internal stack traces in client responses.

## Decisions

### Decision 1: Use Node.js built-in `--use-env-proxy` in package.json scripts
- **Rationale**: Node.js v20.17+, v22+, and v25+ provide native `--use-env-proxy` support. When set, Node's built-in `fetch` parses `HTTP_PROXY`, `HTTPS_PROXY`, and `NO_PROXY` without requiring third-party libraries (like `proxy-agent` or `undici` monkeypatching). If no proxy variables exist, it connects directly with zero performance overhead.
- **Alternatives Considered**:
  - *Third-party proxy agents (`http-proxy-agent` / `undici.ProxyAgent`)*: Requires adding extra dependencies and custom fetch wrappers for the Supabase client.
  - *Manual shell export instructions*: Error-prone; developers frequently forget to set `$env:NODE_OPTIONS` when opening a new terminal window or IDE session.

### Decision 2: Self-bootstrapping proxy check in `next.config.mjs` and `supabase.js`
- **Rationale**: To ensure proxy support even when developers execute `npx next dev` directly instead of `npm run dev`, `next.config.mjs` will verify whether proxy environment variables are present and ensure `NODE_OPTIONS` includes `--use-env-proxy`.

### Decision 3: Root-level workspace delegation
- **Rationale**: Developers frequently run commands from the git repository root (`E:\Chinese Website\Chinese-Hsk1-5-Books-And-Flashcard-Website\`) rather than navigating into `chinese-hsk-website/`. A root `package.json` proxying `dev`, `build`, and `start` commands prevents missing package errors and ensures proper working directory resolution.

### Decision 4: Lightweight `/api/health/db` diagnostic route
- **Rationale**: When auth fails, users need an unambiguous way to determine if the issue is invalid credentials vs. database unreachability. A dedicated health check endpoint verifies Supabase connectivity and returns response latency without leaking credentials.

## Risks / Trade-offs

- **[Risk]** Old Node.js versions (< 20.17) might not recognize the `--use-env-proxy` flag.
  → **Mitigation**: The project's `package.json` already specifies engines `"node": ">=22.0.0"`. Node 22 and 25 fully support this flag.
- **[Risk]** Cloud deployments (e.g. Vercel) where proxy is not used.
  → **Mitigation**: When neither `HTTP_PROXY` nor `HTTPS_PROXY` is present, `--use-env-proxy` is a complete no-op and makes direct outgoing connections.

## Migration Plan

1. Update `chinese-hsk-website/package.json` scripts with `--use-env-proxy`.
2. Add runtime proxy detection in `chinese-hsk-website/next.config.mjs` and `chinese-hsk-website/lib/db/supabase.js`.
3. Create root `package.json` with delegation scripts.
4. Implement `/api/health/db` route.
5. Verify build, dev server startup, and Supabase connectivity.
