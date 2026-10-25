# Proposal

## Why

Following the complete activation of HSK 1 authentic dialogues, HSK 2 currently has 0 records in the Supabase `course_conversations` table and only 4 empty scaffold files locally, causing `/conversations/hsk/2` to display a "Conversation pending" placeholder notice. Authoring and activating the complete official HSK 2 Standard Course textbook dialogues across all 15 lessons provides continuous curriculum progression for learners, grounding intermediate beginner vocabulary and grammar in authentic multi-turn conversational contexts with full Arabic and English support.

## What Changes

- **Curate Full HSK 2 Textbook Dialogues:** Author authentic dialogues for all 15 lessons of the official HSK 2 Standard Course textbook (units 1 through 15, encompassing 3–4 dialogues per lesson).
- **Multilingual Dialogue Lines:** Provide precise simplified Chinese characters (Hanzi), standard Hanyu Pinyin with tone marks, idiomatic English translations, and natural Arabic translations for every speaker turn.
- **Target Vocabulary Linkage:** Associate each lesson's dialogues with specific HSK 2 syllabus vocabulary word IDs in the database, enabling interactive word lookups within conversation bubbles.
- **Audio Integration:** Configure each dialogue line with audio playback support, prioritizing textbook audio track metadata alongside browser Web Speech API pronunciation fallback.
- **Pedagogical Notes & Quizzes:** Include grammar focus notes (e.g., comparative 比, dynamic aspect 着, directional complements), cultural context annotations, and comprehension check questions for each unit.
- **Database & Data Store Sync:** Seed the 15 HSK 2 conversation units into Supabase (`course_conversations`) and maintain local source data records in `source-data/conversations/hsk-2/`.

## Capabilities

### New Capabilities
<!-- No new capability path needed; extending existing course-conversations capability -->

### Modified Capabilities
- `course-conversations`: Extend coverage to HSK 2 curriculum dialogue lessons with HSK 2 syllabus vocabulary grounding and intermediate conversational patterns.

## Impact

- **Data Files:** Populates `chinese-hsk-website/source-data/conversations/hsk-2/unit-1.json` through `unit-15.json` with complete structured lesson dialogue trees.
- **Database:** Inserts 15 complete conversation lesson records into Supabase `course_conversations` for `hsk_level = 2`.
- **Frontend Pages:** Eliminates the "Conversation pending" placeholder state on `/conversations/hsk/2`, delivering interactive lessons to learners.
- **Components:** Exercises existing `ConversationLesson`, `ConversationLevelHero`, and `ConversationsView` components with verified real-world HSK 2 data.
