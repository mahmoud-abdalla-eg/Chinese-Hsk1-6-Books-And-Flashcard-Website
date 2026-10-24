# Proposal

## Why

Learners currently see summary statistics on their dashboard (e.g. counts of Hard Words, Favorites, Learned Words, and level completion), but cannot click into them to view the actual words. Furthermore, flashcards are restricted to fixed HSK levels or individual units, preventing learners from studying custom mixed decks to target their weak spots (Hard + Favorites) or drill across multiple HSK levels.

Providing a dedicated Vocabulary & Difficulty Hub with a dual-mode interface (word browsing and in-place mixed flashcard practice) closes this loop, turning passive metrics into actionable learning.

## What Changes

- **Vocabulary & Difficulty Hub (`/dashboard/words`)**: Create a dedicated dashboard page with a dual-mode interface toggling between "Browse & Mix" and "In-Place Flashcard Practice".
- **Mixed Flashcards Builder**: A configurable deck creator supporting:
  - Multi-select difficulty categories (Hard, Mid/Good, Easy, Favorites, Due for Review).
  - Multi-select HSK levels (HSK 1 to 5).
  - Session controls (deck limits: 15, 25, 50, All; shuffle; recognition vs recall mode).
  - Real-time matching word counter with a one-click session launch.
- **Word Explorer & Catalog**: A filterable, searchable list of words with:
  - Filtering by difficulty tabs (All, Hard, Mid, Easy, Favorites, Due) and HSK levels.
  - Text search by Hanzi, Pinyin, English, and Arabic.
  - Interactive audio pronunciation button (`AudioButton`).
  - Favorite star toggle persisting to user progress.
  - Difficulty badges and review counts.
  - Individual word checkboxes for cherry-picking words into custom decks.
  - Links to individual word detail pages (`/hsk/[level]/word/[wordId]`).
- **Dashboard Deep-Linking**:
  - Transform dashboard metric cards (`Hard Words`, `Favorites`, `Learned Words`) into clickable links navigating to `/dashboard/words` with active filters pre-selected.
  - Make `+N` badges in "Words by Level" clickable links targeting `/dashboard/words?level=[level]&difficulty=[diff]`.
  - Add a prominent CTA card on `/dashboard` promoting custom mixed flashcards.
- **Flashcards Page Integration**: Add a custom practice card on `/flashcards` linking learners directly to the Mixed Flashcard Hub.
- **Internationalization**: Add complete English and Arabic translations for all new UI components, buttons, and status labels.

## Capabilities

### New Capabilities
- `vocabulary-explorer`: Browse, filter, search, inspect, and select vocabulary words by difficulty status, favorite state, and HSK level.

### Modified Capabilities
- `flashcards`: Support custom and mixed flashcard sessions generated from arbitrary word selections across difficulties and levels.

## Impact

- **Routes**: New page `app/dashboard/words/page.js`.
- **Components**:
  - `components/dashboard/vocabulary-studio.jsx` (Hub controller, mode switcher, and word explorer).
  - `components/dashboard/mixed-flashcard-builder.jsx` (Deck mixer controls and real-time counter).
  - Updates to `components/dashboard/dashboard-client.jsx` (interactive links and hero card).
  - Updates to `components/flashcards/flashcards-view.jsx` (custom deck prompt).
- **Internationalization**: New translation keys in `lib/i18n/dictionaries.js` for English and Arabic.
- **Data & Progress**: Consumes existing `usePersistentProgress()` hook and `getManagedHskWords()` data without database schema migrations.
