# Proposal

## Why

When infrastructure or database credentials are missing or experiencing issues on deployment platforms like Render, backend authentication errors leak internal configuration details (such as `"Supabase is not configured. Please set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local"`) directly to end users in red warning banners. Furthermore, when guest learners encounter the guest prompt modal during study actions, clicking "Log in or sign up" unmounts the modal synchronously before Next.js completes navigation, stranding the user on the current page, and continuing as guest fails to save progress locally. Additionally, project documentation contains obsolete MongoDB configuration references, inaccurate deployment links, and lacks a formal contributing guide.

## What Changes

- **Sanitize Authentication Error Responses**: Ensure API routes (`/api/auth/register`, `/api/auth/login`) never leak internal database or environment configuration errors to the UI. Return friendly, localized error messages while logging technical details securely on the server.
- **Robust Guest Prompt Navigation & Continuation**: Replace fragile unmounting link behavior in `LoginPromptModal` with programmatic routing that preserves the current URL as a redirect query parameter (`/login?redirect=...`), and allow guest learners to persist actions locally in `localStorage` when choosing to continue as a guest.
- **Support Flexible Supabase Environment Keys**: Update database client initialization to check common alternative key naming conventions (`SUPABASE_SERVICE_ROLE_KEY`, `SUPABASE_SECRET_KEY`, `SUPABASE_SERVICE_KEY`).
- **Comprehensive README Overhaul**: Modernize `README.md` with accurate Next.js 16 / React 19 / Supabase / Tailwind 4 architecture, correct `.env.local` Supabase parameters, Node.js `>=22.0.0` requirement, HSK 1–6 coverage metrics, and development scripts.
- **Add CONTRIBUTING.md**: Introduce comprehensive contribution guidelines covering repository structure, local environment setup, Biome linting and formatting, data validation checks, branching, and pull request conventions.

## Capabilities

### New Capabilities
*(None)*

### Modified Capabilities
- `auth`: Add requirements for sanitized user-facing error messages (no raw developer or infrastructure exceptions) and reliable guest prompt modal navigation with redirect preservation.

## Impact

- `chinese-hsk-website/app/api/auth/register/route.js`: Error sanitization and localized message mapping.
- `chinese-hsk-website/app/api/auth/login/route.js`: Error sanitization for login failures.
- `chinese-hsk-website/lib/db/supabase.js`: Expanded service key fallback and safe error boundary.
- `chinese-hsk-website/components/auth/login-prompt-modal.jsx`: Programmatic navigation with redirect query param and safe dismissal.
- `chinese-hsk-website/lib/progress/use-progress.js` and study components: Guest progress persistence in `localStorage`.
- `README.md`: Updated setup, tech stack, and environment documentation.
- `CONTRIBUTING.md`: New contribution guide.
