# Spec Delta

## MODIFIED Requirements

### Requirement: Session Cookie Persistence
The authentication system MUST maintain login sessions using secure, tamper-resistant HTTP-only cookies that automatically invalidate whenever a user changes their credentials.

#### Scenario: User logs in successfully
- **Given** valid user credentials submitted via login form or API
- **When** the authentication succeeds
- **Then** a session cookie named `mandarin_flow_session` MUST be set with `httpOnly: true`, `sameSite: 'lax'`, `path: '/'`, `maxAge: 2592000` (30 days), and matching `expires` date.
- **And** the session payload MUST include a token version tied to the user record.

#### Scenario: User changes password
- **Given** an authenticated user who updates their password via `/api/auth/password`
- **When** the password update succeeds
- **Then** the user's `token_version` in the database MUST increment
- **And** all previous session cookies bearing outdated token versions MUST be rejected as unauthorized on subsequent requests.

### Requirement: Dedicated Authentication Pages
The application MUST provide dedicated `/login` and `/signup` pages with input fields connected to backend authentication endpoints and safe redirection guards.

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

#### Scenario: Safe redirect parameter processing
- **Given** an authentication request containing a `redirect` query parameter
- **When** the parameter is processed on login or registration
- **Then** the application MUST verify the target path begins with a single slash followed by alphanumeric characters or dashes
- **And** MUST reject protocol-relative URLs (`//`) and external hostnames, falling back to `/dashboard`.

### Requirement: Sanitized Authentication Error Messages
The system MUST sanitize authentication and registration error responses so that raw internal exception details, database connection errors, driver error strings, and server-side configuration messages are never returned to client requests or displayed to end users under any condition.

#### Scenario: Database or service unconfigured during registration
- **WHEN** registration fails due to an unconfigured database or connection failure
- **THEN** the system MUST respond with a user-friendly error message indicating that account services are temporarily unavailable
- **AND** MUST NOT expose environment variable names, database connection strings, or internal stack traces.

#### Scenario: Database or service unconfigured during login
- **WHEN** login fails due to an unconfigured database or connection failure
- **THEN** the system MUST respond with a user-friendly error message indicating that account services are temporarily unavailable
- **AND** MUST NOT expose environment variable names, database connection strings, or internal stack traces.

#### Scenario: Unexpected short exception in authentication handlers
- **WHEN** an unexpected database driver exception or query error of any length occurs
- **THEN** the system MUST return a standardized, opaque client-facing error message
- **AND** MUST NOT reflect raw exception strings, database table names, or constraint identifiers to the client.
