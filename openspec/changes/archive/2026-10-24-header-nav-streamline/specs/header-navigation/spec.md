# Spec Delta

## Purpose

Provides a streamlined, spacious desktop and tablet site header with direct Dashboard access, a centralized Learn study modes dropdown, a compact language picker, and a unified user account menu.

## ADDED Requirements

### Requirement: Streamlined Header Center Navigation
The desktop header SHALL provide a streamlined center navigation bar consisting of a prominent direct Dashboard link and a categorized Learn study modes dropdown.

#### Scenario: Center navigation links layout
- **WHEN** a user visits any page on a desktop viewport (>= 1024px)
- **THEN** the center navigation bar MUST display exactly two primary controls: "Dashboard" and "Learn ▾"
- **AND** MUST NOT display a separate "Home" pill button.

#### Scenario: Active state on dashboard
- **WHEN** the current route is `/dashboard`
- **THEN** the "Dashboard" pill MUST be visually highlighted with active styling.

#### Scenario: Active state on learning routes
- **WHEN** the current route begins with `/hsk`, `/flashcards`, `/conversations`, or `/grammar`
- **THEN** the "Learn ▾" trigger pill MUST be visually highlighted with active styling.

### Requirement: Study Modes Dropdown
The system SHALL provide an interactive Learn dropdown menu grouping the four core learning modules with titles and descriptive subtitles.

#### Scenario: Opening the Learn dropdown
- **WHEN** the user clicks or activates the "Learn ▾" trigger
- **THEN** the system MUST display a dropdown card containing options for Vocabulary, Flashcards, Conversations, and Grammar
- **AND** each option MUST display its title, an icon, and a short explanatory subtitle.

#### Scenario: Navigating from the Learn dropdown
- **WHEN** the user selects any learning mode option in the dropdown
- **THEN** the system MUST navigate to the corresponding destination (`/hsk/1`, `/flashcards`, `/conversations`, or `/grammar`)
- **AND** the dropdown menu MUST immediately close.

### Requirement: Unified User Account Dropdown
The header SHALL display a unified user account dropdown for authenticated learners that consolidates profile details, links, and session actions into a single control.

#### Scenario: Authenticated user menu trigger
- **WHEN** a learner is logged into an account
- **THEN** the header right area MUST display a single user menu trigger containing the learner's name and user icon
- **AND** MUST NOT display a separate standalone "Log out" button in the top bar.

#### Scenario: Opening user account menu
- **WHEN** an authenticated user clicks their user menu trigger
- **THEN** the system MUST display a dropdown menu presenting the user's name, email, direct links to "Dashboard" and "Account Settings", and a "Log out" button.

#### Scenario: Guest user header display
- **WHEN** a visitor is unauthenticated (guest)
- **THEN** the header right area MUST display direct "Log in" and "Sign up" action buttons.

### Requirement: Dropdown Dismissal and Accessibility
All header dropdowns SHALL support accessible keyboard navigation and close reliably on user dismissal.

#### Scenario: Dismissing dropdown by clicking outside
- **WHEN** a dropdown menu is open and the user clicks outside the menu boundaries
- **THEN** the dropdown MUST close immediately.

#### Scenario: Dismissing dropdown with Escape key
- **WHEN** a dropdown menu is open and the user presses the Escape key
- **THEN** the dropdown MUST close immediately and return focus to the trigger.

#### Scenario: Bidirectional dropdown alignment
- **WHEN** the active language is Arabic (RTL)
- **THEN** dropdown menus MUST align to the start edge and preserve right-to-left layout conventions.

### Requirement: Compact Language Selector
The header SHALL display a compact language switcher badge to preserve horizontal space.

#### Scenario: Compact language button presentation
- **WHEN** rendered in the header
- **THEN** the language trigger MUST display a globe icon alongside the active language code or short label (e.g., `🌐 EN ▾`) without exceeding a width of 110px.
