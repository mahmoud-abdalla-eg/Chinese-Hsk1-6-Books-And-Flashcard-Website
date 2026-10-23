# Flashcard Deck & Study Specification

## Purpose
Provide spaced-repetition flashcard study with keyboard shortcuts, study filters, Web Speech Mandarin TTS fallback, and non-blocking guest gating.

## Requirements

### Requirement: Open Flashcard Practice
The system MUST allow both guests and authenticated users to practice flashcards without requiring upfront registration.

#### Scenario: Guest opens flashcard deck
- **Given** an unauthenticated visitor
- **When** visiting `/flashcards` or level-specific deck routes
- **Then** the deck MUST load words, permit flipping cards via click or <kbd>Space</kbd>, playing Mandarin audio, and navigating between cards.

### Requirement: Word Rating & Progress Gating
The system MUST prevent unauthenticated users from persisting word difficulty (Hard/Easy/Good/Again) or accumulating streaks, while allowing them to dismiss/ignore the login prompt.

#### Scenario: Guest attempts to rate a card
- **Given** a guest practicing flashcards
- **When** the guest clicks a rating button (Again, Hard, Good, Easy) or presses keys 1–4
- **Then** the system MUST display a prompt dialog explaining that recording progress and streaks requires an account.
- **And** provide a "Continue as guest (Ignore)" action that dismisses the prompt and advances the deck without saving to the database.
- **And** provide a "Don't ask again this session" option to suppress future prompts during the active session.

#### Scenario: Authenticated user rates a card
- **Given** a logged-in user
- **When** rating a flashcard
- **Then** the system MUST record the review in `reviewHistory`, update `hardWords` or `learnedWords`, calculate the next review date, and sync progress to Supabase.

### Requirement: Audio Pronunciation Fallback
The system MUST provide audible Mandarin pronunciation for every vocabulary word and example sentence.

#### Scenario: Audio file missing or unconfigured
- **Given** a word without an audio URL or when the audio file fails to load
- **When** the audio button is clicked
- **Then** the application MUST synthesize speech using the browser's native Web Speech API (`zh-CN` voice).

### Requirement: Touch-Swipe Gesture Navigation
The flashcard deck SHALL support native touch swipe gestures to navigate cards on touch-enabled devices.

#### Scenario: Swiping left to advance card
- **WHEN** a user swipes horizontally to the left by at least 50px across the flashcard surface
- **AND** horizontal travel exceeds vertical movement
- **THEN** the deck MUST advance to the next card
- **AND** flip state MUST reset to front.

#### Scenario: Swiping right to return to previous card
- **WHEN** a user swipes horizontally to the right by at least 50px across the flashcard surface
- **AND** horizontal travel exceeds vertical movement
- **THEN** the deck MUST return to the previous card
- **AND** flip state MUST reset to front.

#### Scenario: Vertical scrolling past flashcards
- **WHEN** a user swipes vertically over the flashcard area
- **THEN** the flashcard deck MUST allow native page scrolling without triggering card navigation.

### Requirement: Responsive Mobile Flashcard Layout
The flashcard interface SHALL adapt typography, toolbar controls, and review action buttons for mobile screens.

#### Scenario: Multi-character Hanzi scaling
- **WHEN** a flashcard displays a Chinese term with 3 or more characters on a mobile screen (< 640px)
- **THEN** the Hanzi font size MUST scale responsively (down to `text-5xl`) to prevent horizontal text overflow outside card padding.

#### Scenario: Mobile controls toolbar
- **WHEN** the deck is displayed on mobile viewports
- **THEN** the deck filters, mode toggles, and audio rate controls MUST fit into a compact, scrollable or wrap-optimized toolbar that keeps the flashcard visible above the fold.
