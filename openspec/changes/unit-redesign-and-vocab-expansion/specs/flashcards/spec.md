# Spec Delta: Flashcards

## ADDED Requirements

### Requirement: Dedicated Unit Flashcard Practice
The system SHALL provide dedicated routes for practicing flashcards restricted to a specific unit of an HSK level.

#### Scenario: Navigating to unit flashcards
- **WHEN** a learner navigates to `/flashcards/hsk/[level]/unit/[unitId]` or clicks the practice flashcards button from a unit page
- **THEN** the flashcard deck MUST initialize containing only the words belonging to that specific unit
- **AND** the page MUST display unit progress and provide a return link to the unit study page

### Requirement: Professional Iconography and Shortcut Help
The system SHALL display clean monochrome vector SVG icons for controls and present keyboard shortcut guidance inside an accessible help popover.

#### Scenario: Viewing audio speed control
- **WHEN** the flashcard deck controls are displayed
- **THEN** the audio speed toggle MUST display a monochrome audio speaker SVG icon and numerical speed indicator (`1.0x` / `0.75x`) without colorful emojis

#### Scenario: Opening keyboard shortcuts help
- **WHEN** a user hovers over or activates the keyboard shortcuts help icon (`ⓘ` or `!`)
- **THEN** an accessible popover MUST display formatted keycaps explaining <kbd>Space</kbd> for flip, <kbd>←</kbd>/<kbd>→</kbd> for navigation, and <kbd>1</kbd>–<kbd>4</kbd> for rating
- **AND** the card footer MUST NOT contain long raw inline shortcut text
