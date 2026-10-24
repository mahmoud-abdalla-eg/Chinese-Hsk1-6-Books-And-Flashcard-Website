# Tasks

## 1. UI and Iconography Refactoring

- [x] 1.1 Update `chinese-hsk-website/components/books/books-view.jsx` to remove the circular card header badge (Option B) across all 8 cards and verify titles align directly to the start edge with full width.
- [x] 1.2 Replace colorful badge tags and emojis in `chinese-hsk-website/components/books/books-view.jsx` with standard monochrome SVG outline icons for documents, audio, exams, and downloads.
- [x] 1.3 Remove the top Google Drive folder banner from `chinese-hsk-website/components/books/books-view.jsx` to maintain clean link privacy.

## 2. Mobile Responsiveness and Card Sizing

- [x] 2.1 Update card header and stats badge layout with `shrink-0 whitespace-nowrap` and clean title naming in `chinese-hsk-website/lib/data/books-data.js` and `chinese-hsk-website/components/books/books-view.jsx` to eliminate truncation.
- [x] 2.2 Optimize resource row action buttons with responsive wrapping (`flex-wrap gap-2 justify-end`) and mobile filter tabs with horizontal scrolling (`overflow-x-auto no-scrollbar`).

## 3. Verification and Build

- [x] 3.1 Run Next.js workspace build (`npm --workspace chinese-hsk-website run build`) and verify zero compilation or prerendering errors.
- [x] 3.2 Run `graphify update .` to update the codebase knowledge graph and verify graph integrity.

## Workflow follow-up

- Archive the change after verification and review requirements are satisfied.
