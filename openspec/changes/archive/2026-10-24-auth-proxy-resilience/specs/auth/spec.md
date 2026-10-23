# Spec Delta: Auth Proxy Resilience

## ADDED Requirements

### Requirement: Proxy-Aware Backend Connectivity
The backend authentication and database clients MUST automatically respect proxy settings defined in the environment (`HTTP_PROXY`, `HTTPS_PROXY`, `ALL_PROXY`) so that requests to remote authentication services operate reliably across forward proxies without manual runtime intervention.

#### Scenario: Backend authentication in forward proxy environment
- **WHEN** authentication operations execute in an environment where `HTTPS_PROXY` or `HTTP_PROXY` is defined
- **THEN** outgoing requests to the authentication database service MUST route through the designated proxy
- **AND** MUST NOT fail with unhandled connection reset (`ECONNRESET`) or network abort errors.

#### Scenario: Backend authentication in direct environment
- **WHEN** authentication operations execute in an environment without proxy variables configured
- **THEN** outgoing requests to the authentication database service MUST connect directly to the service endpoint without overhead or failure.

#### Scenario: Database health diagnostic endpoint
- **WHEN** an administrator or developer requests `/api/health/db`
- **THEN** the system MUST test connectivity to the configured database
- **AND** MUST return a structured response indicating whether the database is online, latency in milliseconds, and sanitized error classification without leaking database keys or secrets.
