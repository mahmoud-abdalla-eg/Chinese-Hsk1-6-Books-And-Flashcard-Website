# mobile-navigation Specification

## Purpose
Provides responsive, accessible mobile navigation through a streamlined header and slide-out navigation drawer with full bidirectional support (LTR and RTL).

## Requirements

### Requirement: Responsive Mobile Header
The site header SHALL adapt its layout for viewports narrower than 1024px to prevent element wrapping, clipping, or horizontal crowding.

#### Scenario: Viewport narrower than 1024px header display
- **WHEN** a user visits any page on a viewport narrower than 1024px
- **THEN** the system MUST display a hamburger menu toggle button alongside the app branding
- **AND** the desktop center navigation bar MUST be hidden
- **AND** the brand subtitle MUST be hidden on screens <= 640px so the hamburger trigger and logo mark fit without horizontal overflow.

#### Scenario: Viewport narrower than 640px right-hand control streamlining
- **WHEN** a user visits any page on a viewport narrower than 640px
- **THEN** the right-hand header controls MUST be streamlined to prevent clipping
- **AND** guest authentication actions in the top bar MUST NOT push elements offscreen or force horizontal scroll
- **AND** full language switching and complete authentication controls MUST remain accessible in the slide-out navigation drawer.

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
