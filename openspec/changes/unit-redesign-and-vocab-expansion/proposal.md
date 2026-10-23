# Proposal

## Why

Students currently experience layout crowding and spoiled answers because unit pages display the full vocabulary table directly alongside an embedded flashcard deck. Furthermore, while HSK 1–4 vocabulary reflects the new 2024 *New HSK Course* (《新HSK教程》) textbooks, levels 2, 3, and 4 omit certain official HSK 3.0 test syllabus words, creating gaps for learners preparing for the standardized exam. Finally, the UI contains inconsistent colorful emojis (such as lightning bolts for audio speed and emoji shuffle icons) that detract from a clean, professional learning experience.

## What Changes

- **Vocabulary Dataset Expansion**:
  - Retain all existing textbook proper nouns and colloquial dialogue phrases across HSK 1–4.
  - Integrate all missing official HSK 3.0 syllabus words: 7 words for HSK 2, 57 words for HSK 3, and 305 words for HSK 4, complete with simplified/traditional Hanzi, tone-marked Pinyin, English, Arabic, parts of speech, and contextual example sentences.
  - Update `EXPECTED_HSK_COUNTS` and Supabase seed scripts to account for the full hybrid vocabulary pool.
- **Unit Page Redesign**:
  - Remove the cramped side-by-side flashcard deck from `UnitPage` (`/hsk/[level]/unit/[unitId]`).
  - Make the Vocabulary table and Conversation lessons full-width, readable, and uncrowded.
  - Add a prominent `Practice Flashcards` action button in the unit hero displaying real-time unit progress (`X / Y words learned`).
- **Dedicated Unit Flashcards Experience**:
  - Add dedicated unit flashcard practice routes (`/flashcards/hsk/[level]/unit/[unitId]`), allowing focused active recall without spoiling answers.
- **Unit Chunking Customization**:
  - Maintain the default of 50 words per unit while introducing a user preference for chunking (50 words, 25 words, or by textbook lesson).
  - Ensure 100% accurate unit and level progress tracking anchored to unique word IDs.
- **Iconography and Polish**:
  - Replace all colorful emojis (`⚡`, `🐢`, `🔀`, `❤`, `🤍`, `✓`, `👤`, `👋`) with clean, consistent monochrome SVG icons.
  - Replace the lightning/turtle audio speed toggle with a clean audio/speaker SVG icon and speed indicator (`1.0x` / `0.75x`).
  - Replace the raw keyboard shortcut text on flashcards with an accessible `ⓘ Shortcuts` popover.

## Capabilities

### New Capabilities
- `course-vocabulary`: Manages official HSK 3.0 and textbook curriculum vocabulary definitions, proper nouns, multilingual translations, and level-by-level word distributions.

### Modified Capabilities
- `flashcards`: Adds dedicated unit-level practice routing, replaces audio speed emojis with an audio icon, and moves shortcut instructions into an interactive help popover.
- `progress`: Computes unit-level completion dynamically based on unique word IDs across customizable unit chunk sizes (50, 25, or textbook lessons).

## Impact

- **Source Data**: `chinese-hsk-website/source-data/hsk/hsk-{2,3,4}.json` and `lib/data/schema.js`.
- **Database / Seeding**: `chinese-hsk-website/scripts/seed-supabase.js` and `supabase/schema.sql` data.
- **Routes**: `chinese-hsk-website/app/hsk/[level]/unit/[unitId]/page.js` and new route `chinese-hsk-website/app/flashcards/hsk/[level]/unit/[unitId]/page.js`.
- **Components**: `chinese-hsk-website/components/flashcards/flashcard-deck.jsx`, `components/vocabulary/vocabulary-list.jsx`, `components/conversations/conversation-lesson.jsx`.
