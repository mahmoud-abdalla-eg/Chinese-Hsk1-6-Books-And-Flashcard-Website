# Tasks

## 1. Data Schema & Catalog Enhancement

- [x] 1.1 Update `chinese-hsk-website/lib/data/books-data.js` to structure `hskMaterials` with dual editions (`new` and `classic`), populating verified Google Drive links, file sizes, writing books, and Baúl Chino 2026 audio links for HSK 1–6.
- [x] 1.2 Add `HSK 1-6 Grammar.pdf` to curriculum references and verify preview and download URLs.
- [x] 1.3 Add i18n dictionary keys for edition toggles, writing books, and curriculum badges across English, Chinese, and Arabic in `chinese-hsk-website/lib/i18n/dictionaries.js`.

## 2. In-Card Edition Switcher UI

- [x] 2.1 Update `chinese-hsk-website/components/books/books-view.jsx` to introduce interactive in-card edition segmented control pills (`New HSK 3.0 (2026)` vs `Classic HSK 2.0`).
- [x] 2.2 Implement conditional rendering inside each card for the active edition's textbook, workbook, writing guide, audios, mock exams, and dedicated Drive folder package button.
- [x] 2.3 Optimize mobile responsiveness and verify clean layout without clipping on narrow screens (< 640px) and RTL Arabic support.

## 3. Verification & Build

- [x] 3.1 Run Next.js workspace build (`npm --workspace chinese-hsk-website run build`) and confirm clean static prerendering with zero errors.
- [x] 3.2 Update knowledge graph with `graphify update .`.

## Workflow follow-up

- Archive the change after implementation and verification are complete.
