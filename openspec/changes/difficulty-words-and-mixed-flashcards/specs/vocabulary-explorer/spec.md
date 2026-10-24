# Spec Delta

## Purpose

Enable learners to browse, filter, search, inspect, and select vocabulary words across all HSK levels according to their difficulty classification, review metrics, and favorite status.

## ADDED Requirements

### Requirement: Multi-Criteria Vocabulary Filtering
The system SHALL allow users to filter vocabulary across difficulty classifications (Hard, Mid, Easy, All), user favorites, spaced repetition due status, and HSK levels 1 through 5.

#### Scenario: Filter by difficulty and level
- **WHEN** a user selects a difficulty tab (e.g., "Hard") and an HSK level (e.g., "HSK 2")
- **THEN** the word catalog MUST display only words matching both the "Hard" classification and HSK level 2
- **AND** display the count of matching words.

#### Scenario: Text search across languages
- **WHEN** a user types a query into the vocabulary search input
- **THEN** the list MUST filter in real time matching Hanzi, Pinyin, English meaning, or Arabic meaning
- **AND** provide a clear button to reset the search query.

### Requirement: Dashboard Deep-Link Pre-filtering
The system SHALL parse URL query parameters on navigation to `/dashboard/words` and automatically initialize the active filter state and deck mixer selection.

#### Scenario: Deep-link from dashboard metric card
- **WHEN** a user clicks the "Hard Words" card on `/dashboard`
- **THEN** the browser MUST navigate to `/dashboard/words?difficulty=hard`
- **AND** the page MUST initialize with the "Hard" filter tab active and Hard words selected in the deck mixer.

#### Scenario: Deep-link from level-specific overflow badge
- **WHEN** a user clicks the `+N` badge under "Words by Level" for a specific HSK level and category
- **THEN** the browser MUST navigate to `/dashboard/words` with `level` and `difficulty` parameters pre-populated
- **AND** the list MUST display all matching words for that level and category.

### Requirement: Interactive Word Actions
The system SHALL provide interactive controls for each vocabulary item including audio playback, favorite state toggle, selection checkbox for custom decks, and navigation to the word detail view.

#### Scenario: Toggling favorite state
- **WHEN** a user clicks the favorite toggle on a word card or table row
- **THEN** the word's favorite status MUST be updated in user progress
- **AND** changes MUST synchronize according to authentication state.

#### Scenario: Selecting individual words for custom deck
- **WHEN** a user checkmarks individual words in the explorer list
- **THEN** the selected words MUST be staged for inclusion in the custom flashcard deck
- **AND** the selection count indicator MUST update immediately.
