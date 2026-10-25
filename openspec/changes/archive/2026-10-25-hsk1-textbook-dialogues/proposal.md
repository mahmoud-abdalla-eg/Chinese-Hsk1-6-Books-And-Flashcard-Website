# Proposal

## Why

The platform's conversation engine and UI components are fully implemented, but all 72 conversation units across HSK 1–5 currently remain empty authoring scaffolds, causing `/conversations/hsk/[level]` pages to display a "Conversation pending" placeholder. Starting with HSK 1 as a focused, high-accuracy pilot, this change authors and activates the complete authentic textbook dialogues from the official HSK 1 Standard Course curriculum across all 15 lessons, providing learners with contextual spoken practice, synchronized audio, bilingual English/Arabic translations, and target vocabulary grounding.

## What Changes

- **Curate Full HSK 1 Textbook Dialogues:** Author accurate dialogues for all 15 lessons of the official HSK 1 Standard Course textbook (units 1 through 15, encompassing 3–4 dialogues per lesson).
- **Multilingual Dialogue Lines:** Provide precise simplified Chinese characters (Hanzi), standard Hanyu Pinyin with tone marks, idiomatic English translations, and natural Arabic translations for every speaker turn.
- **Target Vocabulary Linkage:** Associate each lesson's dialogues with specific HSK 1 syllabus vocabulary word IDs in the database, enabling interactive word lookups within conversation bubbles.
- **Audio Integration:** Configure each dialogue line with audio playback support, prioritizing textbook audio track metadata alongside browser Web Speech API pronunciation fallback.
- **Pedagogical Notes & Quizzes:** Include grammar focus notes, cultural context annotations, and comprehension check questions for each unit.
- **Dialogue vs. Passage Separation:** Establish a clean schema distinction between multi-speaker Dialogues (used in HSK 1–3) and continuous Reading Passages (introduced in HSK 4–6), preparing the architecture for future advanced reading texts.
- **Database & Data Store Sync:** Seed the 15 HSK 1 conversation units into Supabase (`course_conversations`) and maintain local source data records in `source-data/conversations/hsk-1/`.

## Capabilities

### New Capabilities
- `course-conversations`: Curriculum-aligned interactive dialogue lessons featuring speaker turns, line-by-line audio and speech synthesis, pinyin visibility toggling, bilingual (English & Arabic) translations, target vocabulary tooltips, and comprehension checks.

### Modified Capabilities
<!-- No existing capability requirements are changing -->

## Impact

- **Data Files:** Populates `chinese-hsk-website/source-data/conversations/hsk-1/unit-1.json` through `unit-15.json` with complete structured lesson dialogue trees.
- **Database:** Inserts/upserts 15 complete conversation lesson records into Supabase `course_conversations`.
- **Frontend Pages:** Eliminates the "Conversation pending" placeholder state on `/conversations/hsk/1`, delivering interactive lessons to learners.
- **Components:** Exercises existing `ConversationLesson`, `ConversationLevelHero`, and `ConversationsView` components with verified real-world data.
