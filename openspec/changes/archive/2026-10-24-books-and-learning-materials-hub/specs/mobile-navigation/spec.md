# Spec Delta: mobile-navigation

## MODIFIED Requirements

### Requirement: Slide-out Navigation Drawer
The system SHALL provide an accessible slide-out navigation drawer containing all primary site destinations categorized by purpose.

#### Scenario: Opening the drawer
- **WHEN** the user activates the mobile hamburger menu toggle
- **THEN** the navigation drawer MUST slide smoothly into view over a dimmed backdrop
- **AND** background page scrolling MUST be disabled while the drawer is open
- **AND** focus MUST be placed within the drawer.

#### Scenario: Categorized mobile navigation hierarchy
- **WHEN** the drawer is opened
- **THEN** the drawer MUST display direct links to "Dashboard" and "Books", followed by a "Learn" section containing Vocabulary, Flashcards, Conversations, and Grammar, followed by quick HSK level filters and user account actions.

#### Scenario: Closing the drawer
- **WHEN** the user clicks the close button, clicks the backdrop, presses the Escape key, or selects a navigation link
- **THEN** the drawer MUST close with an exit animation
- **AND** background scrolling MUST be restored.

#### Scenario: Bidirectional drawer positioning
- **WHEN** the active language is Arabic (RTL)
- **THEN** the drawer MUST slide in from the right edge of the viewport
- **WHEN** the active language is English or Chinese (LTR)
- **THEN** the drawer MUST slide in from the left edge of the viewport.
