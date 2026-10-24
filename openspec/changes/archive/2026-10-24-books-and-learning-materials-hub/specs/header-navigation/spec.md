# Spec Delta: header-navigation

## MODIFIED Requirements

### Requirement: Streamlined Header Center Navigation
The desktop header SHALL provide a streamlined center navigation bar consisting of a prominent direct Dashboard link, a categorized Learn study modes dropdown, and a direct Books hub link.

#### Scenario: Center navigation links layout
- **WHEN** a user visits any page on a desktop viewport (>= 1024px)
- **THEN** the center navigation bar MUST display three primary controls: "Dashboard", "Learn ▾", and "Books"
- **AND** MUST NOT display a separate "Home" pill button.

#### Scenario: Active state on dashboard
- **WHEN** the current route is `/dashboard`
- **THEN** the "Dashboard" pill MUST be visually highlighted with active styling.

#### Scenario: Active state on learning routes
- **WHEN** the current route begins with `/hsk`, `/flashcards`, `/conversations`, or `/grammar`
- **THEN** the "Learn ▾" trigger pill MUST be visually highlighted with active styling.

#### Scenario: Active state on books route
- **WHEN** the current route begins with `/books`
- **THEN** the "Books" pill MUST be visually highlighted with active styling.
