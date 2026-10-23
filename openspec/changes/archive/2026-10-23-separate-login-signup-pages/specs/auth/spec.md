# Spec Delta

## MODIFIED Requirements

### Requirement: Guest vs. Authenticated User Separation
The application MUST clearly distinguish between guests and logged-in users across headers, dashboards, and study interactions, presenting direct authentication actions in navigation.

#### Scenario: Guest accesses the site
- **Given** an unauthenticated visitor
- **When** viewing the site header or dashboard
- **Then** the site header MUST display distinct "Log in" and "Sign up" navigation controls linking to `/login` and `/signup` without "Guest Mode" indicator badges, and the dashboard MUST display a friendly guest banner explaining that daily streaks and cloud sync require logging in or creating an account.

## ADDED Requirements

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
