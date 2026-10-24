# Proposal

## Why

A comprehensive security exploration against the official OWASP Top 10:2025 standard identified critical architectural and operational vulnerabilities across the application, including exposed database tables without Row Level Security (A01), open redirect vectors (A01), missing HTTP security headers (A02), hardcoded HMAC fallback signing secrets (A02/A04), critical Next.js Windows RCE advisories (A03), lack of session revocation on password reset (A07), and partial error message disclosure (A10). Hardening these areas now establishes defense-in-depth, protects user learner profiles and administrative access, and aligns the application with 2025 industry security standards.

## What Changes

- **Row Level Security (RLS)**: Enforce RLS across all Supabase PostgreSQL tables (`users`, `admins`, `user_progress`, `course_settings`, `site_content`, etc.), revoking unauthorized `anon` role access to sensitive learner and administrative tables.
- **Safe Navigation & Redirect Validation**: Eliminate open redirect vulnerabilities by strictly validating `redirect` query parameters against local relative paths and disallowing protocol-relative URLs (`//`).
- **HTTP Security Headers & Environment Hardening**: Configure production security headers in Next.js (`Content-Security-Policy`, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Strict-Transport-Security`, `Referrer-Policy`) and remove hardcoded fallback HMAC signing secrets so startup fails fast if credentials are not configured.
- **Session Revocation & Lifespan Hardening**: Add token versioning (`token_version`) to ensure changing a user password instantly invalidates all previously issued active session cookies.
- **Error Response Sanitization**: Ensure authentication and registration handlers strictly mask raw database driver exceptions and internal schema details under all conditions.
- **Software Supply Chain Upgrades**: Upgrade `next` and vulnerable transitive dependencies (`postcss`, `sharp`, `nanoid`) to remediate known high and critical CVEs (including Windows-hosted RCE GHSA-p293-qw3h-jr36).

## Capabilities

### New Capabilities
- `database-security`: Durable requirements for Supabase PostgreSQL Row Level Security policies, table permissions, and anonymous key restrictions.
- `http-security-hardening`: Durable requirements for HTTP security headers (CSP, HSTS, frame protection) and safe asset path resolution.

### Modified Capabilities
- `auth`: Modified requirements for session cookie revocation upon credential modification, strict open-redirect rejection, and error message sanitization.

## Impact

- **Database**: `supabase/schema.sql` and migration scripts update table definitions to enable RLS and add `token_version` to `users`.
- **Backend APIs**: `app/api/auth/*`, `app/api/adminbase/*`, and `app/api/health/*` enforce tightened input validation, session checks, and error masking.
- **Dependencies**: `package.json` updates Next.js and dependency tree.
- **Backward Compatibility**: Fully backward-compatible for legitimate learners and administrators; no breaking changes to study progression data format.
