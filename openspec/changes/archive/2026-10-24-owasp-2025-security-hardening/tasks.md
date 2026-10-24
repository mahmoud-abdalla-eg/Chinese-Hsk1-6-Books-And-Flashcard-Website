# Tasks

## 1. Database Isolation & Row Level Security

- [x] 1.1 Create `supabase/migrations/20261024_enable_rls.sql` enabling RLS across all tables and granting least-privilege `SELECT` on public course tables to `anon`. Verify SQL file syntax and update `supabase/schema.sql`.
- [x] 1.2 Add `token_version` integer column (default 1) to `users` table definition in `supabase/schema.sql` and the migration script. Verify schema includes `token_version`.

## 2. Session Hardening & Invalidation

- [x] 2.1 Update `lib/auth/session.js` and `lib/auth/admin-session.js` to eliminate hardcoded fallback secrets and throw a fail-fast error if `AUTH_SECRET` is missing. Verify error is thrown when `AUTH_SECRET` is empty.
- [x] 2.2 Update session token generation and parsing in `lib/auth/session.js` to include `token_version`. Verify session parses and checks token version against user record.
- [x] 2.3 Update `changeUserPassword` in `lib/auth/users.js` to increment `token_version` on successful password change. Verify prior session tokens fail authentication after password update.

## 3. Redirect Validation & Error Sanitization

- [x] 3.1 Create safe redirect path validator utility and apply it in `app/api/auth/login/route.js` and `app/api/auth/register/route.js`. Verify protocol-relative paths (`//evil.com`) are rejected and fall back to `/dashboard`.
- [x] 3.2 Refactor error sanitization in `app/api/auth/register/route.js` and `app/api/health/db/route.js` so raw exception messages under 120 characters are never reflected to clients. Verify internal database exceptions return opaque messages.
- [x] 3.3 Add path traversal normalization in `lib/admin/course-settings.js` for audio file paths to disallow `..` sequences. Verify paths containing traversal sequences are rejected.

## 4. HTTP Headers & Supply Chain Upgrades

- [x] 4.1 Update `next.config.mjs` to add production security headers (`Content-Security-Policy`, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Strict-Transport-Security`). Verify headers configuration in `next.config.mjs`.
- [x] 4.2 Upgrade `next` in `chinese-hsk-website/package.json` to `>=16.4.3` and run `npm audit fix` to remediate critical Windows RCE and high-severity supply chain CVEs. Verify with `npm audit --prefix chinese-hsk-website --audit-level=high`.
- [x] 4.3 Run `npm run build` and `npm run lint` within `chinese-hsk-website` to verify application integrity and clean compilation.
