# Design

## Context

The current Chinese learning platform uses Next.js with React server components, Tailwind CSS, and Supabase. Vocabulary datasets live in `source-data/hsk/hsk-{1..6}.json`. `schema.js` dictates `UNIT_SIZE = 50` and `EXPECTED_HSK_COUNTS`. 

Currently, `app/hsk/[level]/unit/[unitId]/page.js` renders a two-column grid where `<VocabularyList>` is squeezed into `1fr` and `<FlashcardDeck>` is pinned into a 430px column. This causes two issues: answers are directly visible in the table while studying flashcards, and horizontal space is cramped. Furthermore, levels 2, 3, and 4 miss certain official HSK 3.0 exam words that are omitted by the textbooks, and components contain colorful emojis.

## Goals / Non-Goals

**Goals:**
- Provide a clean, full-width Unit page layout without answer spoilers.
- Deliver a dedicated `/flashcards/hsk/[level]/unit/[unitId]` route for focused unit flashcard sessions.
- Ingest all missing official HSK 3.0 exam words for levels 2, 3, and 4 while preserving all textbook proper nouns and phrases.
- Replace all colorful emojis with uniform monochrome SVG icons and audio speaker speed indicators.
- Replace raw keyboard shortcut footer text with an accessible `ⓘ Shortcuts` popover.
- Ensure 100% accurate unit progress tracking based on word IDs with support for customizable unit chunking.

**Non-Goals:**
- Re-extracting HSK 5 or HSK 6 (they remain on their current datasets).
- Altering the user authentication or database schemas in Supabase.

## Decisions

### 1. Data Ingestion & Vocabulary Merge
- **Approach**: Merge missing official HSK 3.0 words (7 for Level 2, 57 for Level 3, 305 for Level 4) directly into `source-data/hsk/hsk-{2,3,4}.json`.
- **Fields**: Every entry will include `id`, `hskLevel`, `hanzi`, `traditional`, `pinyin`, `meaning.en`, `meaning.ar`, `partOfSpeech`, and `example` sentences.
- **Counts Update**: Update `EXPECTED_HSK_COUNTS` in `schema.js`:
  - Level 1: 319
  - Level 2: 217
  - Level 3: 538
  - Level 4: 1,139
- **Alternatives Considered**: Keeping a separate `exam-words.json` file. Rejected because having a single unified source of truth simplifies flashcards, vocabulary search, and progress tracking.

### 2. Unit Page & Flashcard Decoupling
- **Approach**: In `app/hsk/[level]/unit/[unitId]/page.js`, remove `<FlashcardDeck>` and the two-column grid. The Vocabulary table and Conversation lesson occupy the full container.
- **Hero Call-to-Action**: The unit hero card will feature a prominent button: `Practice Flashcards (X words)` with a dynamic progress bar indicating `learnedWordsInUnit / totalWordsInUnit`.
- **Route**: Clicking the button links to `/flashcards/hsk/[level]/unit/[unitId]`.
- **Alternatives Considered**: In-page modal for flashcards. Rejected because dedicated URL routing allows bookmarking, direct navigation, and browser history back/forward support.

### 3. Dedicated Unit Flashcard Route
- **Approach**: Implement `app/flashcards/hsk/[level]/unit/[unitId]/page.js`.
- **Behavior**: Retrieves `unit.words` via `getManagedUnit(level, unitId)` and renders `FlashcardDeck` in a focused, distraction-free container with a breadcrumb link back to the unit.
- **Static Generation**: Implement `generateStaticParams()` dynamically mapping all valid units for each HSK level.

### 4. Iconography & Shortcut Help Refinement
- **Audio Speed Indicator**: Replace `⚡` and `🐢` with an SVG speaker/volume icon:
  - Default: Speaker icon with `1.0x`
  - Slowed: Speaker icon with `0.75x`
- **Shuffle & Actions**: Replace `🔀` with an SVG shuffle arrows icon, `❤`/`🤍` with SVG outline/filled hearts, and `✓` with SVG checkmark.
- **Shortcut Popover**: In `flashcard-deck.jsx`, replace the middle `Keys: Space = flip...` text with a compact `ⓘ Shortcuts` trigger button. Hovering or clicking reveals a styled popover explaining keybindings (<kbd>Space</kbd>, <kbd>←</kbd>/<kbd>→</kbd>, <kbd>1</kbd>–<kbd>4</kbd>).

### 5. Dynamic Progress & Unit Chunking
- **Approach**: Unit progress is calculated by filtering `learnedWords` against the word IDs belonging to the active unit.
- **User Preference**: Provide a unit view selector (50 words, 25 words, or by textbook lesson) stored in local preferences, allowing learners to view units as fixed chunks or textbook lessons without altering word IDs or database records.

## Risks / Trade-offs

- **[Risk]** Newly added words lack audio recordings.  
  → **Mitigation**: The system's existing Web Speech API fallback (`zh-CN` speech synthesis) automatically provides audio pronunciation for any word without a static MP3 file.
- **[Risk]** Larger HSK 4 vocabulary count (1,139 words) increases build or render times.  
  → **Mitigation**: Words are already paginated and chunked into units of 50. Data reads are cached via Next.js `unstable_cache`.
