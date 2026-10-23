# Tasks

## 1. Navigation and Localization

- [x] 1.1 Add authentication translations (login, signup, switch links, form placeholders, and error messages) in English and Arabic to `chinese-hsk-website/lib/i18n/dictionaries.js`.
- [x] 1.2 Update `chinese-hsk-website/components/auth/account-menu.jsx` to replace "Guest Mode" and "Account" with distinct "Log in" (secondary/ghost style) and "Sign up" (teal pill style) action buttons when unauthenticated.
- [x] 1.3 Verify `chinese-hsk-website/components/layout/site-header.jsx` renders authentication buttons cleanly on both desktop and mobile viewports in English and Arabic.

## 2. Dedicated Login Experience

- [x] 2.1 Create `chinese-hsk-website/components/auth/login-card.jsx` with email and password inputs, loading indicators, inline error handling, and a switch link to `/signup`.
- [x] 2.2 Create `chinese-hsk-website/app/login/page.js` rendering the login experience, submitting JSON to `POST /api/auth/login`, hydrating `useAuth().login(...)`, and routing to `/dashboard` (or `?redirect=` target).

## 3. Dedicated Sign-Up Experience

- [x] 3.1 Create `chinese-hsk-website/components/auth/signup-card.jsx` with name, email, password (min 8 chars), confirm password inputs, client-side validation, inline error handling, and a switch link to `/login`.
- [x] 3.2 Create `chinese-hsk-website/app/signup/page.js` rendering the registration experience, submitting JSON to `POST /api/auth/register`, hydrating `useAuth().login(...)`, and routing to `/dashboard`.

## 4. Route Protection and Guest Link Alignment

- [x] 4.1 Update `chinese-hsk-website/app/account/page.js` so unauthenticated visitors are automatically redirected to `/login`.
- [x] 4.2 Update guest CTA links in `chinese-hsk-website/components/auth/login-prompt-modal.jsx`, `chinese-hsk-website/components/dashboard/dashboard-client.jsx`, and `chinese-hsk-website/components/flashcards/flashcard-deck.jsx` to link directly to `/login` or `/signup`.
- [x] 4.3 Update server-side form error fallbacks in `chinese-hsk-website/app/api/auth/login/route.js` and `chinese-hsk-website/app/api/auth/register/route.js` to redirect to `/login` and `/signup` respectively instead of `/account`.

## 5. Verification & Testing

- [x] 5.1 Verify complete sign-up flow on `/signup` (invalid email, mismatched password, password under 8 characters, and successful user creation with instant session hydration).
- [x] 5.2 Verify complete login flow on `/login` (invalid credentials error, successful authentication, redirect to `/dashboard`, and appearance of user profile in navbar).
- [x] 5.3 Verify `/account` route protection (redirecting unauthenticated requests to `/login`, and displaying profile details and stats when logged in).
