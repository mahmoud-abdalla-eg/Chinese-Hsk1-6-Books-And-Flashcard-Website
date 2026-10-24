# Proposal

## Why

Mandarin learners currently need access to two distinct official curricula: the widely used Classic HSK 2.0 Standard Course (Jiang Liping / BLCUP) and the newly released New HSK 3.0 (2026) Standard Course curriculum (featuring updated textbooks, workbooks, character writing books, and 2026 audio tracks). Currently, the Books hub only presents a single edition per level card. By introducing an inline edition toggle (Option A) on each HSK level card and updating the catalog with the latest verified Google Drive links and audio streaming endpoints, learners can seamlessly switch between New HSK 3.0 (2026) and Classic HSK 2.0 materials without page clutter or losing context.

## What Changes

- Add in-card edition switching (`[ 🆕 New HSK 3.0 (2026) ]` | `[ 📚 Classic HSK 2.0 ]`) on each HSK level card (HSK 1 through HSK 6).
- Expand data catalog (`books-data.js`) to support both `newEdition` and `classicEdition` structures for HSK 1–6:
  - **New HSK 3.0 (2026)**: Course Textbook (PDF), Exercise Workbook (PDF), Character Writing Book (PDF), 2026 Listening Audio tracks & direct links to `https://www.baulchino.com/new-hsk-audios-2026`, and dedicated Drive folder links (`New Books And resources`).
  - **Classic HSK 2.0**: Official Standard Course Textbook (PDF), Workbook & Pinyin Table (PDF), Listening Audio tracks (MP3), Mock Practice Exams (PDF & Audio), and dedicated Drive folder links (`old books and resources`).
- Include verified Google Drive preview and download IDs for all newly uploaded HSK 5 and HSK 6 materials (`HSK-5A/5B`, `HSK-6A/6B`).
- Add root-level curriculum assets such as `HSK 1-6 Grammar.pdf` to the resources section.
- Ensure seamless mobile responsiveness and internationalization (EN, ZH, AR) across edition switchers and resource rows.

## Capabilities

### New Capabilities
None.

### Modified Capabilities
- `learning-materials`: Expand curriculum resource breakdown to support dual-edition toggling (New HSK 3.0 vs Classic HSK 2.0) per level card, linking verified Google Drive preview/download endpoints and external audio sources for both editions.

## Impact

- `chinese-hsk-website/lib/data/books-data.js`: Update data schema to structure each HSK level with dual `newEdition` and `classicEdition` material blocks, updated Drive IDs, and Baúl Chino 2026 audio links.
- `chinese-hsk-website/components/books/books-view.jsx`: Update card UI with interactive in-card edition toggle pills, rendering the selected edition's textbooks, workbooks, writing guides, audios, and mock exams with existing monochrome outline icons.
- `chinese-hsk-website/lib/i18n/dictionaries.js`: Add translation tokens for edition toggling (`newHsk30`, `classicHsk20`, `writingBook`, `newAudios`, etc.) across English, Chinese, and Arabic.
