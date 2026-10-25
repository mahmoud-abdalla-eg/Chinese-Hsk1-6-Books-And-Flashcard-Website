# Design

## Context

The application contains a complete frontend architecture for conversation lessons (`/conversations/hsk/[level]`, `ConversationLesson.jsx`, `ConversationLevelHero.jsx`) and a database table `course_conversations` managed via `@/lib/admin/course-conversations`. However, all 72 units across HSK 1–5 are empty scaffold files (`dialogue: []`, `status: "needs-authoring"`). The physical textbook `hsk 1/New Books And resources/hsk-course-1.pdf` and lesson audio directories reside on the local filesystem.

## Goals / Non-Goals

**Goals:**
- Author all 15 lessons of the official HSK 1 Standard Course textbook (units 1 through 15) with authentic dialogues.
- Provide quadruple-layer linguistic content: Chinese Hanzi, Pinyin with tonal diacritics, English translation, and Arabic translation for every dialogue turn.
- Map target vocabulary in each unit to existing HSK 1 word IDs in the database (`course_words`).
- Establish an explicit schema discriminator (`contentType: "dialogue" | "passage"`) so the system elegantly distinguishes multi-speaker dialogues from future long-form reading passages.
- Seed the authored lessons into Supabase `course_conversations` and update the local `source-data/conversations/hsk-1/` JSON files.
- Enable instant client-side speech pronunciation via Web Speech API with audio track metadata.

**Non-Goals:**
- Authoring HSK 2–6 units in this change (reserved for subsequent iterations following this pilot).
- Bundling large binary audio files into Git or Vercel deployments (relying on Web Speech API and cloud-linked audio tracks).
- Overhauling the core UI styling or navigation layout.

## Decisions

### 1. Curated Lesson Authoring over Raw PDF Scraping
* **Decision:** Hand-curate and structurally verify all 15 HSK 1 textbook lessons rather than relying on brittle PDF regex scraping.
* **Rationale:** HSK textbook PDFs feature multi-column layouts, overlapping pinyin tone marks, and embedded graphic callouts. Scraping creates corrupted tones and misaligned Arabic translations. Curating ensures 100% linguistic accuracy.
* **Alternative considered:** Automated PyPDF extraction. Discarded due to tone diacritic loss and missing Arabic translations.

### 2. Dual-Layer Persistence (Local JSON + Supabase Sync)
* **Decision:** Store the authoritative unit source in `source-data/conversations/hsk-1/unit-[1-15].json` and sync records to Supabase `course_conversations` via an automated seeding script.
* **Rationale:** Preserves offline development capability and repository versioning while supporting real-time cloud data delivery with Next.js revalidation.
* **Alternative considered:** Supabase-only storage. Discarded because local JSON files act as git-tracked source truth and backup.

### 3. Schema Future-Proofing (Dialogues vs. Passages)
* **Decision:** Add a `contentType` discriminator to the lesson schema (`dialogue` vs `passage`).
* **Rationale:** HSK 1–3 lessons consist exclusively of dialogues (Speaker A/B turns). HSK 4–6 introduce narrative passages (multi-paragraph essays). Standardizing this field now prevents breaking schema changes when advanced reading passages are integrated later.
* **Alternative considered:** Forcing passages into artificial `speaker: "Narrator"` bubbles. Discarded because reading passages require distinct typographical paragraph rendering.

### 4. Audio Playback Strategy
* **Decision:** Enable Web Speech API Chinese synthesis by default while attaching `audioTrack` metadata to each dialogue turn.
* **Rationale:** Web Speech API provides instant, high-quality Mandarin pronunciation directly on the client with zero network latency, zero hosting cost, and zero deployment storage overhead.

## Risks / Trade-offs

* **[Risk: Arabic translation alignment and punctuation drift]** → *Mitigation:* Apply `dir="rtl"` with Unicode directional isolation (`\u2067` / `\u2069`) to all Arabic dialogue strings, following established patterns from the `arabic-i18n` spec.
* **[Risk: Broken vocabulary IDs in targetVocabularyIds]** → *Mitigation:* Validate all target vocabulary IDs against the active HSK 1 words in `chinese-hsk-website/source-data/hsk/hsk-1.json` before seeding.
* **[Risk: Next.js SSG cache staleness after database update]** → *Mitigation:* Revalidate `/conversations/hsk/1` using existing Next.js dynamic revalidation tags (`managed-conversations-level`).
