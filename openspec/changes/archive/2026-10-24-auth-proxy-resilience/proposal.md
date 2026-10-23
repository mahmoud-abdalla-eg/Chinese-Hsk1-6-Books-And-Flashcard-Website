# Proposal: Auth Proxy Resilience and Development Connectivity

## Why

In environments subject to network filtering or requiring HTTP/HTTPS forward proxies (such as developer workstations in mainland China running Clash or local proxy clients on `127.0.0.1:7897`), Node.js's native `fetch` ignores system proxy environment variables by default. Consequently, backend authentication queries to Supabase (`*.supabase.co`) trigger `ECONNRESET` / `fetch failed`, which the application masks as "Account service is temporarily unavailable. Please try again shortly or continue learning as a guest." even when database credentials are fully configured and accounts exist.

Enabling Node.js proxy environment parsing and resilient client fallbacks ensures local development, testing, and production deployments behind proxies connect to the database reliably with zero manual shell variable exports.

## What Changes

- **Automatic Proxy Environment Awareness**: Configure Next.js server runtime and dev scripts to parse `HTTP_PROXY`, `HTTPS_PROXY`, and `ALL_PROXY` via Node's `--use-env-proxy` option.
- **Supabase Client Proxy Resilience**: Ensure database client initialization in `lib/db/supabase.js` gracefully handles proxied fetch configurations and connection timeouts.
- **Root Environment & Script Convenience**: Support starting and running development servers smoothly without requiring manual `$env:NODE_OPTIONS` exports in developer terminals.
- **Diagnostic Database Health Route**: Provide a lightweight authenticated/admin-safe diagnostics endpoint (`/api/health/db`) to quickly inspect database connectivity status without exposing sensitive keys.

## Capabilities

### Modified Capabilities
- `auth`: Add requirement for proxy-aware backend connectivity and graceful network failure handling so regional proxy networks do not trigger false service-unavailable failures.

## Impact

- `chinese-hsk-website/package.json`: Update `"dev"` and related server scripts to include `--use-env-proxy`.
- `chinese-hsk-website/next.config.mjs`: Configure runtime proxy and origin safety settings.
- `chinese-hsk-website/lib/db/supabase.js`: Ensure proxy-aware fetch runtime behavior.
- `chinese-hsk-website/app/api/health/db/route.js`: Add diagnostic connectivity endpoint.
- Zero risk to production deployments where no proxy environment variables are set (Node simply connects directly).
