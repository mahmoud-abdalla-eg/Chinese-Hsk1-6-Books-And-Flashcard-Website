# Design

## Context

The conversation system architecture and UI components (`/conversations/hsk/[level]`, `ConversationLesson.jsx`) are operational, and HSK 1 has 15 live lessons in Supabase. For HSK 2, however, the database table currently contains 0 records, and `source-data/conversations/hsk-2/` contains only 4 empty scaffold files (`dialogue: []`, `status: "needs-authoring"`). The official textbook `hsk 2/New Books And resources/hsk-course-2.pdf` and audio resources reside on disk.

## Goals / Non-Goals

**Goals:**
- Author all 15 lessons of the official HSK 2 Standard Course textbook (units 1 through 15) with authentic multi-turn dialogues.
- Provide quadruple-layer linguistic content: Chinese Hanzi, Pinyin with tone marks, English translation, and Arabic translation for every dialogue turn.
- Map target vocabulary in each unit to existing HSK 2 word IDs in `course_words` (derived from `source-data/hsk/hsk-2.json`).
- Provide unit-specific grammar explanations (comparative 比, progressive aspect 着, directional complements 来/去) and cultural context notes.
- Include multiple-choice comprehension check questions for each unit.
- Seed the authored lessons into Supabase `course_conversations` and save local JSON records in `source-data/conversations/hsk-2/unit-[1-15].json`.
- Eliminate the "Conversation pending" placeholder on `/conversations/hsk/2`.

**Non-Goals:**
- Authoring HSK 3–6 units in this change (reserved for subsequent iterations).
- Committing heavy binary audio MP3 files to the git repository.

## Decisions

### 1. Curated Lesson Authoring Following HSK 2 Syllabus
* **Decision:** Author all 15 official textbook units with full dialogue turns, grammar notes, and cultural reflections.
* **Rationale:** HSK 2 introduces crucial syntactic patterns (aspect markers like 着, modal verbs like 要/想/可以, coverbs like 离/比/往). Curated authoring guarantees exact tone diacritics and idiomatic translations in both English and Arabic.
* **Alternative considered:** OCR extraction from PDF. Discarded due to tone diacritic errors and absence of Arabic translations in the raw textbook.

### 2. Standardized Identifier and Normalization Convention
* **Decision:** Assign deterministic IDs (`hsk-2-unit-[1-15]`) and line IDs (`[unit]-[dialogue]-[turn]`), setting `status: "ready"` and `contentType: "dialogue"`.
* **Rationale:** Consistent with HSK 1 implementation, ensuring predictable database indexing, Next.js dynamic routing, and caching behavior.

### 3. Audio & Synthesis Support
* **Decision:** Equip every dialogue turn with Web Speech API Mandarin synthesis (`zh-CN`) and attach metadata audio track placeholders.
* **Rationale:** Zero bandwidth cost and instant pronunciation playback for learners.

## Risks / Trade-offs

* **[Risk: Vocabulary ID discrepancies between HSK 2 word list and dialogue words]** → *Mitigation:* Cross-reference all target vocabulary against `chinese-hsk-website/source-data/hsk/hsk-2.json` and `hsk-1.json` before seeding.
* **[Risk: Arabic translation punctuation isolation]** → *Mitigation:* Ensure all Arabic translation strings in dialogue lines and grammar explanations follow the established RTL formatting standards.
