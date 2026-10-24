# Spec Delta

## ADDED Requirements

### Requirement: Mixed and Custom Flashcard Sessions
The system SHALL support assembling and launching flashcard study sessions with dynamic, multi-category mixed decks filtered by difficulty classifications, favorite status, and HSK levels.

#### Scenario: Launching a mixed flashcard session
- **WHEN** a user selects one or more difficulty categories (e.g., Hard and Favorites) and one or more HSK levels in the mixer
- **AND** clicks "Start Mixed Flashcards"
- **THEN** the system MUST construct a flashcard deck containing only words matching the combined criteria
- **AND** apply any user-selected session limit (e.g., 15, 25, 50, or All) and shuffle option.

#### Scenario: Launching session with individually selected words
- **WHEN** a user selects a subset of individual words via checkboxes and clicks "Start Session"
- **THEN** the flashcard session MUST initialize containing precisely the selected words.

### Requirement: In-Place Dual-Mode Study View
The system SHALL support toggling between catalog browsing and an in-place active flashcard study interface without leaving `/dashboard/words`.

#### Scenario: Switching into flashcard practice mode
- **WHEN** a user initiates a study session from the deck mixer or word list
- **THEN** the view MUST switch into active flashcard mode mounting the interactive `FlashcardDeck` component
- **AND** provide an exit action allowing the user to return to the word list without losing page state.

#### Scenario: Recording reviews in mixed sessions
- **WHEN** an authenticated user scores a card (Again, Hard, Good, Easy) within a mixed flashcard session
- **THEN** the review MUST be saved to `reviewHistory` and `wordStats`
- **AND** user progress counters MUST update dynamically.
