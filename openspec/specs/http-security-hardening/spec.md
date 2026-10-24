# HTTP Security Hardening Specification

## Purpose

Enforces defensive HTTP response headers, fail-fast environment secret validation, and path traversal defenses across application runtime endpoints.

## Requirements

### Requirement: Production HTTP Security Headers
The web application MUST configure defensive HTTP headers on all outgoing page and asset responses to mitigate clickjacking, cross-site scripting, and MIME sniffing attacks.

#### Scenario: Browser loads application document
- **WHEN** any user navigates to any application page or route
- **THEN** the response headers MUST include `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, and `Content-Security-Policy` restricting script, connect, and media sources.

#### Scenario: Subresource integrity on HTTPS connections
- **WHEN** requests arrive over HTTPS in production environments
- **THEN** the application MUST return a `Strict-Transport-Security` header with a minimum `max-age` of 31,536,000 seconds (1 year).

### Requirement: Fail-Fast Secret Configuration
The authentication subsystems MUST require explicit environment secrets and refuse to start or generate tokens with insecure default or fallback keys.

#### Scenario: Session token signing without configured secret
- **WHEN** the authentication service initializes in an environment where `AUTH_SECRET` is unset or empty
- **THEN** the application MUST throw a configuration error and halt
- **AND** MUST NOT fall back to hardcoded string constants or reuse database service keys.

### Requirement: Path Normalization for Media Assets
The audio and media management subsystems MUST sanitize and normalize asset file paths to prevent directory traversal outside designated media directories.

#### Scenario: Administrative bulk audio matching or record creation
- **WHEN** an audio path is submitted containing relative directory traversal sequences (`..`) or unauthorized protocols
- **THEN** the system MUST normalize the path and restrict the asset path to approved local audio folders under `/audio/`
- **AND** MUST reject traversal attempts with an invalid path validation error.
