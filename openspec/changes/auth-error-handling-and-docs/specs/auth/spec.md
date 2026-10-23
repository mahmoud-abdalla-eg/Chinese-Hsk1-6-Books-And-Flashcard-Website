# Spec Delta

## ADDED Requirements

### Requirement: Sanitized Authentication Error Messages
The system MUST sanitize authentication error responses so that raw internal exception details, database connection errors, and server-side configuration messages are never returned to client requests or displayed to end users.

#### Scenario: Database or service unconfigured during registration
- **WHEN** registration fails due to an unconfigured database or connection failure
- **THEN** the system MUST respond with a user-friendly error message indicating that account services are temporarily unavailable
- **AND** MUST NOT expose environment variable names, database connection strings, or internal stack traces.

#### Scenario: Database or service unconfigured during login
- **WHEN** login fails due to an unconfigured database or connection failure
- **THEN** the system MUST respond with a user-friendly error message indicating that account services are temporarily unavailable
- **AND** MUST NOT expose environment variable names, database connection strings, or internal stack traces.

### Requirement: Reliable Guest Prompt Modal Navigation
The application MUST ensure that initiating authentication from the guest prompt modal seamlessly transitions the user to the authentication page while preserving the return destination and allowing guest action continuation.

#### Scenario: Guest clicks authentication action in guest prompt modal
- **WHEN** an unauthenticated visitor clicks the login or sign-up option within the guest prompt modal
- **THEN** the application MUST navigate to the target authentication page without the transition being aborted by modal unmounting
- **AND** MUST include the current page path as a redirect parameter so the user can return upon completing authentication.

#### Scenario: Guest chooses to continue as guest
- **WHEN** an unauthenticated visitor chooses to continue as guest in the guest prompt modal
- **THEN** the prompt MUST close and allow the triggered learning action to complete with local progress recorded in client storage.
