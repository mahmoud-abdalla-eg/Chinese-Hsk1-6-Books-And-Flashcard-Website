# Tasks

## 1. Vocabulary Expansion & Data Ingestion

- [x] 1.1 Ingest the 7 missing official HSK 3.0 words into `source-data/hsk/hsk-2.json` with complete Hanzi, Pinyin, English, Arabic, POS, and examples, and verify the file count reaches 217.
- [x] 1.2 Ingest the 57 missing official HSK 3.0 words into `source-data/hsk/hsk-3.json` with complete Hanzi, Pinyin, English, Arabic, POS, and examples, and verify the file count reaches 538.
- [x] 1.3 Ingest the 305 missing official HSK 3.0 words into `source-data/hsk/hsk-4.json` with complete Hanzi, Pinyin, English, Arabic, POS, and examples, and verify the file count reaches 1,139.
- [x] 1.4 Update `EXPECTED_HSK_COUNTS` in `lib/data/schema.js` and verify word validation script passes with new counts (1: 319, 2: 217, 3: 538, 4: 1,139).
- [x] 1.5 Update `scripts/seed-supabase.js` and verify database seed scripts read and upsert the expanded vocabulary correctly.

## 2. Unit Page Redesign & Flashcard Separation

- [x] 2.1 Refactor `app/hsk/[level]/unit/[unitId]/page.js` to remove the side-by-side `<FlashcardDeck>` and render `<VocabularyList>` and `<ConversationLesson>` in a full-width container.
- [x] 2.2 Add a prominent `Practice Flashcards (Unit X)` call-to-action button with real-time unit progress (`X / Y words learned`) in the unit hero header.
- [x] 2.3 Verify `UnitPage` renders with full-width breathing room and zero answer spoilers on both desktop and mobile viewports.

## 3. Dedicated Unit Flashcards Experience

- [x] 3.1 Implement `app/flashcards/hsk/[level]/unit/[unitId]/page.js` supporting `generateStaticParams()`, fetching unit words, and rendering a dedicated focused flashcard deck with back-navigation to the unit.
- [x] 3.2 Verify navigating to `/flashcards/hsk/1/unit/1` loads the exact unit words and connects seamlessly to persistent progress tracking.

## 4. Iconography Refinement & Shortcuts Popover

- [x] 4.1 Replace audio speed emojis (`⚡`, `🐢`) in `components/flashcards/flashcard-deck.jsx` with a clean monochrome audio/speaker SVG icon and speed indicator (`1.0x` / `0.75x`).
- [x] 4.2 Replace `🔀` with an SVG shuffle icon, `❤`/`🤍` with SVG heart icons, and `✓` with an SVG checkmark.
- [x] 4.3 Replace the raw footer text `Keys: Space = flip · 1-4 = rate · Arrows = prev/next` with a compact `ⓘ Shortcuts` popover displaying styled `<kbd>` keycaps.
- [x] 4.4 Audit and replace remaining emojis in `conversation-lesson.jsx`, `vocabulary-list.jsx`, `account-menu.jsx`, and `login-prompt-modal.jsx` with monochrome SVGs.

## 5. Unit Customization & Integration Verification

- [x] 5.1 Implement unit chunking view preference (50 words, 25 words, or by textbook lesson) and verify word-level progress calculates accurately across all view modes.
- [x] 5.2 Run `npm run build` or test suite to verify no compile errors, TypeScript/JavaScript warnings, or hydration mismatches.
