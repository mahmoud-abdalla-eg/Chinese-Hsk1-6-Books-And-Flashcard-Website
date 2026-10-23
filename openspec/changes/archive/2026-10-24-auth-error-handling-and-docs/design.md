# Design

## Context

See proposal.md - Why.

The application runs on Next.js 16.2.6 (App Router) and React 19.2.4. Authentication endpoints live at `/api/auth/register` and `/api/auth/login`, rendering client pages at `/signup` and `/login`. The database layer relies on `@supabase/supabase-js` using service-role credentials for administrative user records and progress sync. Currently, internal errors such as missing Supabase credentials throw directly through the API routes into client UI alerts. In addition, the guest prompt modal (`LoginPromptModal`) unmounts prematurely when its navigation link is clicked, cancelling client-side route transitions in React 19.

## Goals / Non-Goals

**Goals:**
- Guarantee that internal server, environment, or database errors never leak to end-users in UI messages.
- Provide clear, localized error responses across English and Arabic for registration and login.
- Fix navigation from the guest prompt modal so learners are redirected cleanly to `/login` or `/signup` while preserving their return destination.
- Allow guest learners who choose "Continue as guest" to persist study actions locally.
- Fully align `README.md` with the current Supabase + Next.js 16 stack and establish `CONTRIBUTING.md`.

**Non-Goals:**
- Implementing OAuth / social sign-in (e.g. Google, GitHub) — existing email/password auth remains the scope.
- Replacing the session cookie architecture or changing password hashing.

## Decisions

### Decision 1: Two-Tier Error Classification in Auth Handlers
- **Approach**: Create a helper `sanitizeAuthError(error, defaultMessage)` in auth routes.
  - Allowed client errors (safe for display): validation issues like *"Email already registered"*, *"Invalid email or password"*, *"Password must be at least 8 characters"*.
  - Infrastructure errors: check for terms like `Supabase`, `database`, `fetch failed`, `ETIMEDOUT`, or missing config. When detected, log full diagnostic info on the server via `console.error` and return: `"Account service is temporarily unavailable. Please try again shortly or continue learning in guest mode."`
- **Alternatives considered**: Passing errors verbatim (causes the current leak); returning generic 500 without guidance (poor UX).

### Decision 2: Multi-Key Supabase Environment Resolution
- **Approach**: In `lib/db/supabase.js`, check `process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_KEY`.
- **Rationale**: Cloud hosts and developers frequently configure Supabase using slightly varying key naming conventions. Supporting these aliases prevents configuration failures.

### Decision 3: Programmatic Modal Navigation with Return Path
- **Approach**: In `components/auth/login-prompt-modal.jsx`:
  - Use `router.push('/login?redirect=' + encodeURIComponent(currentPath))` triggered from a dedicated button handler.
  - Close modal state after initiating navigation rather than racing the click event on an unmounting `<Link>`.
  - Provide both "Log In" and "Sign Up" links so users can navigate to either screen.
- **Alternatives considered**: Retaining `<Link>` with `setTimeout` (fragile and prone to flicker).

### Decision 4: Local Progress Recording for Guest Learners
- **Approach**: In `usePersistentProgress`, support persisting word and unit completions to `localStorage` under `mandarin-flow-guest-session` when `isGuest` is true.
- **Rationale**: Clicking "Continue as guest" should not result in a silent failure; learners expect their active session to remember what they marked as learned or favorite.

### Decision 5: Complete Documentation Synchronization
- **Approach**:
  - Overhaul `README.md`: replace legacy MongoDB references with authentic Supabase keys, document Node `>=22.0.0`, accurate live demo links, and script references.
  - Create `CONTRIBUTING.md`: outline repository layout, Node 22 setup, Biome checks (`npm run lint`, `npm run format`), data validation scripts (`npm run validate`, `npm run coverage`), and PR conventions.

## Risks / Trade-offs

- **[Risk]** Sanitizing errors might mask misconfiguration during local development.  
  → **Mitigation**: Server routes will log detailed technical errors to stdout (`console.error`), and developer documentation will explain how to verify Supabase connections.
- **[Risk]** Guest progress stored locally may diverge from account progress upon subsequent login.  
  → **Mitigation**: Existing `mergeProgress()` logic in `usePersistentProgress` already merges local cached records with server records upon user login.
