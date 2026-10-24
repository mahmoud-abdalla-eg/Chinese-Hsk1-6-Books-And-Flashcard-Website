# Design

## Context

See `proposal.md` for motivation and vulnerability audit context. The application currently utilizes Next.js 16 (App Router) and Supabase PostgreSQL. Tables in `supabase/schema.sql` lack Row Level Security (RLS) definitions, leaving tables accessible directly to the anonymous public API key. Stateless HMAC session cookies currently span 365 days with no database-backed revocation mechanism, and redirects check only for a leading slash, leaving the app vulnerable to protocol-relative open redirect attacks (`//evil.com`). Furthermore, production response headers omit basic clickjacking and MIME sniffing protections.

## Goals / Non-Goals

**Goals:**
- Provide database-level isolation by enabling RLS across all tables and restricting `anon` access.
- Prevent protocol-relative and external URL redirections on authentication routes.
- Enforce standard defensive HTTP response headers (`CSP`, `X-Frame-Options`, `X-Content-Type-Options`, `HSTS`, `Referrer-Policy`).
- Introduce `token_version` to invalidate existing sessions across devices upon password change.
- Eliminate hardcoded fallback HMAC keys to fail fast if required secrets are missing.
- Resolve critical and high severity dependency advisories in the Next.js stack.

**Non-Goals:**
- Replacing Supabase with self-hosted PostgreSQL or SQLite.
- Implementing complex Multi-Factor Authentication (MFA/2FA) or WebAuthn in this release.
- Modifying learner flashcard progression schemas or HSK vocabulary data structures.

## Decisions

### Decision 1: Database Isolation via Explicit Supabase Migration
- **Choice**: Create `supabase/migrations/20261024_enable_rls.sql` enabling RLS on all tables, granting `SELECT` on public course tables to `anon` and `authenticated`, and restricting `users`, `admins`, `user_progress`, `import_batches`, and `course_settings` exclusively to `service_role`.
- **Rationale**: Keeps database access safe even if public anon keys are exposed in client bundles.
- **Alternatives Considered**: Relying solely on API-level middleware. Rejected because anyone can inspect client code, extract `NEXT_PUBLIC_SUPABASE_ANON_KEY`, and query Supabase REST directly.

### Decision 2: Strict Safe Redirection Validator
- **Choice**: Replace simple `redirect.startsWith("/")` with a validator that verifies the URL begins with a single slash followed by path characters, rejecting any input beginning with `//` or `/\`.
- **Rationale**: Closes CWE-601 Open Redirects without breaking internal deep links.
- **Alternatives Considered**: Complete disallowance of redirects. Rejected because guest-prompt-to-login flows require returning to the active study unit.

### Decision 3: Next.js Response Headers in `next.config.mjs`
- **Choice**: Implement the `headers()` async configuration in `next.config.mjs` providing `Content-Security-Policy`, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, and `Referrer-Policy`.
- **Rationale**: Applied at the Next.js edge/server level for all routes, statically and dynamically.
- **Alternatives Considered**: Custom Express server or reverse proxy header injection. Rejected to maintain Vercel and Node standalone deployment parity.

### Decision 4: User `token_version` Invalidation Pattern
- **Choice**: Add an integer `token_version` column (default `1`) to the `users` table. The signed session payload becomes `${userId}.${tokenId}.${issuedAt}.${tokenVersion}.${signature}`. On `changeUserPassword`, increment `token_version`.
- **Rationale**: Gives stateless HMAC cookies full revocation capabilities without requiring a heavy persistent session table.
- **Alternatives Considered**: In-memory Redis token blacklist. Rejected because it adds operational overhead for single-instance or serverless setups.

### Decision 5: Fail-Fast Secret Enforcement
- **Choice**: Throw an explicit configuration error in `lib/auth/session.js` and `lib/auth/admin-session.js` if `AUTH_SECRET` is unset, removing `"chinese-hsk-user-secret"` and `"chinese-hsk-admin-secret"`.
- **Rationale**: Adheres to OWASP fail-safe defaults; prevents systems running with insecure known defaults.

## Risks / Trade-offs

- **[Risk] RLS blocks legitimate client queries**: If a component unexpectedly queries Supabase directly from the browser instead of route handlers, RLS could block it.  
  → *Mitigation*: The app architecture already routes state mutations and user lookups through `/api/` endpoints backed by `getSupabaseAdmin()`. Public course tables remain readable to `anon`.
- **[Risk] Next.js 16 update introduces compilation regressions**: Updating Next.js to patch CVEs might conflict with React Compiler or Turbopack.  
  → *Mitigation*: Run `npm run build` and `npm run lint` immediately following `npm audit fix` to verify compilation stability.
- **[Risk] Active users forced to log in once**: Changing the session payload structure to include `token_version` will invalidate old 4-part session cookies.  
  → *Mitigation*: Acceptable one-time security reset; users simply re-enter credentials once.

## Migration Plan

1. Execute `supabase/migrations/20261024_enable_rls.sql` in Supabase SQL editor.
2. Update backend authentication utilities (`session.js`, `users.js`, `passwords.js`).
3. Update route handlers for redirect validation and error masking.
4. Update `next.config.mjs` for security headers.
5. Upgrade dependencies via `npm install next@16.4.3`.
6. Run full verification suite (`npm run build`, `npm run lint`).
