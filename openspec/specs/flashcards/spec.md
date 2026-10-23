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
