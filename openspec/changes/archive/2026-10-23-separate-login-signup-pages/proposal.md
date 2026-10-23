# Proposal

## Why

Currently, unauthenticated visitors see a passive "Guest Mode" badge and a generic "Account" button in the navigation bar. Clicking "Account" opens a single `/account` page containing both the login and sign-up forms simultaneously, which creates visual clutter and confuses new learners trying to register vs. returning learners trying to sign in. Introducing dedicated `/login` and `/signup` pages and prominent header authentication actions provides a clear, standard user onboarding and authentication experience.

## What Changes

- Replace the "Guest Mode" indicator badge and "Account" button in the navigation header with direct "Log in" and "Sign up" action buttons for unauthenticated visitors.
- Create a dedicated `/login` page with email and password inputs, error feedback, and a link to `/signup`.
- Create a dedicated `/signup` page with name, email, password inputs, client-side validation, error feedback, and a link to `/login`.
- Retain `/account` as the authenticated user's profile and progress management page; automatically redirect unauthenticated visits on `/account` to `/login`.
- Ensure client-side authentication (`useAuth`) and backend endpoints (`/api/auth/login`, `/api/auth/register`) correctly exchange credentials, issue session cookies, update cache, and route users upon completion.
- Provide bilingual internationalization (English and Arabic) for all new navigation buttons, form labels, placeholders, and switch links.

## Capabilities

### Modified Capabilities

- `auth`: Update requirement for guest vs. authenticated navigation indicators to mandate distinct "Log in" and "Sign up" actions in the site header, and introduce dedicated `/login` and `/signup` routes for authentication.

## Impact

- **UI Components**:
  - `components/auth/account-menu.jsx`: Update unauthenticated state to display "Log in" and "Sign up" buttons.
  - `components/layout/site-header.jsx`: Ensure responsive mobile and desktop presentation of auth actions.
  - `components/auth/login-prompt-modal.jsx`, `components/dashboard/dashboard-client.jsx`, and `components/flashcards/flashcard-deck.jsx`: Update guest prompts to link to `/login` and `/signup`.
- **Routes & Pages**:
  - New route: `app/login/page.js`
  - New route: `app/signup/page.js`
  - Existing route: `app/account/page.js` (redirect guests to `/login`).
- **Translations**:
  - `lib/i18n/dictionaries.js`: Ensure `logIn`, `signUp`, and relevant authentication prompt keys have English and Arabic translations.
- **Backend / APIs**:
  - `app/api/auth/login/route.js` & `app/api/auth/register/route.js`: Verify fallback redirects point to `/login` and `/signup` instead of `/account`.
