# Proposal

## Why

Learners preparing for Chinese proficiency assessments face a transition period between the classic, globally recognized HSK Standard Course (BLCU Press) and the newly issued official HSK 3.0 Course (FLTRP 《新HSK教程》 2025/2026). Rather than forcing students to choose only one or abandoning existing materials, a Dual-Curriculum architecture allows students to seamlessly toggle between the classic Standard Course and the modern HSK 3.0 Course on both HSK 1 and HSK 2 levels.

## What Changes

- Add a `curriculum` metadata discriminator (`"standard"` vs. `"hsk3"`) across conversation lesson schemas and database models.
- Author all 15 authentic New HSK 3.0 lessons for HSK 1 (featuring modern conversational themes such as AI Xiaoyu, mobile communications, daily living) with 4-layer dialogues (Hanzi, Pinyin with tone marks, English, and Arabic translations), grammar points, cultural insights, and comprehension tests.
- Author all 15 authentic New HSK 3.0 lessons for HSK 2 (based on the 2026 FLTRP textbook: Peking Duck, Xi'an travel, bubble tea, campus life) with complete multilingual turns, grammar points, and vocabulary linkage.
- Add an interactive curriculum toggle / filter component on `/conversations/hsk/[level]` allowing learners to filter lessons by "All", "HSK 3.0 (New)", or "Standard Course (Classic)".
- Display visual badges on lesson headers identifying their curriculum edition (e.g. "HSK 3.0 Edition" vs "Standard Course").
- Maintain full static generation (SSG) and backwards compatibility in Supabase and offline file fallbacks.

## Capabilities

### Modified Capabilities
- `course-conversations`: Extend conversation lessons to support dual-curriculum classification (`standard` and `hsk3`), filtering by curriculum on level pages, and full 15-unit HSK 3.0 lesson sets for both HSK 1 and HSK 2.

## Impact
- **Database**: Upsert new records in Supabase `course_conversations` tagged with `curriculum = "hsk3"`, maintaining existing `curriculum = "standard"` records.
- **Files**: New HSK 3.0 source data structured under `source-data/conversations/hsk-1/hsk3/` and `source-data/conversations/hsk-2/hsk3/`.
- **Frontend Components**: `chinese-hsk-website/app/conversations/hsk/[level]/page.js`, `ConversationLevelHero`, and `ConversationLesson` enhanced with curriculum filtering and badge display.
- **Build**: All pages statically pre-rendered via Next.js Turbopack SSG.
