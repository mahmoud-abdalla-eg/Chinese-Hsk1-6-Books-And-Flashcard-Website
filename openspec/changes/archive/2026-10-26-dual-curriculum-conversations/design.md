# Design

## Context
The application currently renders 15 lessons for HSK 1 and 15 lessons for HSK 2 from the classic HSK Standard Course (BLCU Press). The user repository includes the complete 2025/2026 New HSK 3.0 Course textbooks and audio files (`hsk 1/New Books And resources/` and `hsk 2/New Books And resources/`). Supporting both curricula side-by-side empowers learners to study both classic examination standards and modern real-world HSK 3.0 Chinese.

## Goals / Non-Goals

**Goals:**
- Provide a dual-curriculum experience where users can view all lessons or filter by "HSK 3.0 (New)" and "Standard Course".
- Author the full 15-unit New HSK 3.0 dialogues for HSK 1 and HSK 2 with complete 4-layer translations (Hanzi, Pinyin with tone marks, English, and Arabic), grammar points, cultural notes, and comprehension checks.
- Keep Supabase database (`course_conversations`) synchronized with all authored lessons across both curricula.
- Ensure 100% static site generation (SSG) in Next.js without hydration errors or layout shifts.

**Non-Goals:**
- Modifying HSK 3, 4, 5, or 6 conversation structures in this specific change.
- Replacing or deprecating the classic Standard Course lessons.

## Decisions

### 1. Curriculum Field & Primary Key Convention
- **Decision**: Add a `curriculum` string field (`"standard"` | `"hsk3"`) to all conversation objects and Supabase rows.
- **ID Strategy**:
  - Classic Standard Course: `hsk-${level}-standard-unit-${unitId}` (retaining compatibility with `hsk-${level}-unit-${unitId}`).
  - New HSK 3.0 Course: `hsk-${level}-hsk3-unit-${unitId}`.
- **Alternative considered**: Storing in separate tables. *Rejected* because the schema (dialogue turns, grammar notes, vocabulary IDs) is identical, and unified querying simplifies filtering and maintenance.

### 2. Client-Side Curriculum Filter Component
- **Decision**: Implement a fast, accessible client component `ConversationCurriculumFilter` that wraps the lesson list and provides a smooth tab switcher:
  - `全部 (All)`
  - `新 HSK 3.0 (New 3.0 Edition)`
  - `标准教程 (Standard Course)`
- **Badge Indicator**: Each `ConversationLesson` header displays an accent pill identifying its edition.

### 3. Data File Organization
- Author HSK 3.0 lessons into:
  - `chinese-hsk-website/source-data/conversations/hsk-1/hsk3/unit-[1-15].json`
  - `chinese-hsk-website/source-data/conversations/hsk-2/hsk3/unit-[1-15].json`
- Seeder script updates to scan recursive folders and upsert with proper `curriculum` tags.

## Risks / Trade-offs

- [Lesson count doubling from 15 to 30 per level] → Mitigated by client-side filtering tabs so learners are never overwhelmed and can focus on one curriculum at a time.
- [Database uniqueness collision] → Mitigated by prefixing `hsk-${level}-hsk3-unit-${unitId}` for new lessons.
