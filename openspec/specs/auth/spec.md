# Authentication & Session Specification

## Purpose
Manage user authentication, session persistence, client-side auth caching, and guest vs. authenticated user state separation.

## Requirements

### Requirement: Session Cookie Persistence
The authentication system MUST maintain long-lived login sessions so users do not repeatedly log in across browser restarts.

#### Scenario: User logs in successfully
- **Given** valid user credentials submitted via login form or API
- **When** the authentication succeeds
- **Then** a session cookie named `mandarin_flow_session` MUST be set with `httpOnly: true`, `sameSite: 'lax'`, `path: '/'`, `maxAge: 31536000` (1 year), and matching `expires` date.

### Requirement: Client Auth State Caching
The application MUST cache authenticated user profiles on the client to prevent unauthenticated UI flicker on page reload.

#### Scenario: Page load with active session
- **Given** a user has previously authenticated and their profile exists in `localStorage` under `mandarin_flow_user_cache`
- **When** any page or component hydrates
- **Then** the `AuthProvider` MUST immediately initialize `user` state with the cached user without waiting for `/api/auth/me` network latency.
- **And** background-validate with `/api/auth/me` to ensure session validity.

### Requirement: Guest vs. Authenticated User Separation
The application MUST clearly distinguish between guests and logged-in users across headers, dashboards, and study interactions, presenting direct authentication actions in navigation.

#### Scenario: Guest accesses the site
- **Given** an unauthenticated visitor
- **When** viewing the site header or dashboard
- **Then** the site header MUST display distinct "Log in" and "Sign up" navigation controls linking to `/login` and `/signup` without "Guest Mode" indicator badges, and the dashboard MUST display a friendly guest banner explaining that daily streaks and cloud sync require logging in or creating an account.

### Requirement: Dedicated Authentication Pages
The application MUST provide dedicated `/login` and `/signup` pages with input fields connected to backend authentication endpoints.

#### Scenario: User visits login page
- **Given** an unauthenticated visitor navigating to `/login`
- **When** the page renders
- **Then** the page MUST display email and password inputs, an action to submit credentials to `/api/auth/login`, error feedback for invalid credentials, and a navigation link to `/signup`.

#### Scenario: User visits sign-up page
- **Given** a visitor navigating to `/signup`
- **When** the page renders
- **Then** the page MUST display name, email, and password inputs (minimum 8 characters), an action to submit credentials to `/api/auth/register`, validation error feedback, and a navigation link to `/login`.

#### Scenario: Unauthenticated visitor navigates to account profile
- **Given** an unauthenticated visitor
- **When** navigating directly to `/account`
- **Then** the application MUST redirect the visitor to `/login`.
