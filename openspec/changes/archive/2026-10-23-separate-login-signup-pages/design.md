# Design

## Context

The application runs on Next.js App Router with Supabase and signed HTTP-only cookies (`mandarin_flow_session`). User state is synchronized on the client through `AuthProvider` and cached in `localStorage`. Currently, unauthenticated users see a "Guest Mode" pill and "Account" button in `components/auth/account-menu.jsx`, and a combined form in `components/auth/account-form.jsx` rendered at `/account`.

See `proposal.md` for background and problem motivation.

## Goals / Non-Goals

**Goals:**
- Replace the "Guest Mode" badge and "Account" button in the site header with distinct, standard "Log in" and "Sign up" action buttons.
- Create dedicated routes: `/login` (returning learners) and `/signup` (new learners) with clean, accessible cards and switch links.
- Include proper input fields: Email & Password for Login; Name, Email, Password, and Confirm Password for Sign Up.
- Connect forms to `POST /api/auth/login` and `POST /api/auth/register` with immediate client-side `AuthProvider` state synchronization and redirect handling.
- Protect `/account` so unauthenticated visitors are redirected to `/login`.
- Maintain full English and Arabic (RTL) dictionary parity for all authentication UI.

**Non-Goals:**
- Third-party OAuth (Google, Apple, GitHub) or social logins.
- Email verification / magic link workflows.
- Altering the database schema or the existing scrypt password hashing mechanism.

## Decisions

### 1. Dedicated Page Routes (`/login` and `/signup`)
- **Decision**: Provide separate top-level route segments `app/login/page.js` and `app/signup/page.js` rather than query-param tabs (`/account?tab=login`).
- **Rationale**: Clean, canonical URLs that follow standard web architecture. Makes direct linking from study prompts and guest banners intuitive.
- **Alternatives Considered**: In-page toggle tabs on `/account`—rejected because it preserves cognitive clutter and doesn't solve the expectation of `/login` and `/signup` URLs.

### 2. Header Navigation Styling
- **Decision**: In `components/auth/account-menu.jsx`, render "Log in" as a subtle/secondary button and "Sign up" as a prominent teal pill button.
- **Rationale**: Prioritizes onboarding for new visitors while keeping login accessible for returning users without crowding the navigation bar.
- **Alternatives Considered**: Dropdown menu—rejected because it adds an unnecessary click.

### 3. Client Submission with `useAuth` Hydration
- **Decision**: Submit credentials via async JSON `fetch`, validate client-side before submission, and call `login(data.user)` on HTTP 200 before routing to `/dashboard` (or `?redirect=` target).
- **Rationale**: Ensures the client auth state updates immediately in `localStorage` and `AuthProvider`, eliminating post-redirect layout flicker or stale guest banners.
- **Alternatives Considered**: Native full-page HTML form POST—rejected because it causes a full page reload and brief delay before the client cache hydrates.

### 4. Input Validation & Registration Fields
- **Decision**: Sign up requires Name, Email, Password (min 8 chars), and Confirm Password. Login requires Email and Password. Both forms feature inline error messages and disabled loading states.
- **Rationale**: Confirm Password protects learners from accidental typing errors during account creation since email password reset is not currently active.

### 5. Protected `/account` Route
- **Decision**: In `app/account/page.js`, if `getSessionUserId()` returns null, issue a server redirect to `/login`.
- **Rationale**: `/account` becomes purely the user profile and study settings view, streamlining its responsibility.

## Risks / Trade-offs

- **[Header Overflow on Small Screens]** → Mitigation: Use compact padding (`px-3 py-1.5 text-xs`) and flex-wrap-safe containers so Arabic and English text fit cleanly alongside language switchers.
- **[Stale Guest References in Study Modals]** → Mitigation: Audit components (`login-prompt-modal.jsx`, `dashboard-client.jsx`, `flashcard-deck.jsx`) and update CTA links to point directly to `/login` or `/signup`.
