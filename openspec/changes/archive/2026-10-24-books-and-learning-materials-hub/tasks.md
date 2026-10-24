# Tasks

## 1. Data and Localization Setup

- [x] 1.1 Create `chinese-hsk-website/lib/data/books-data.js` containing curriculum data for HSK 1 to 6 (titles, word counts, difficulty levels, textbook links, workbook links, audio links, mock exams, and Google Drive folder references) and verify the module exports valid structured data.
- [x] 1.2 Add localized dictionary keys (`navBooks`, `booksTitle`, `booksSubtitle`, `mainTextbook`, `workbook`, `audioTracks`, `mockExams`, `downloadAll`, `previewFile`, `downloadFile`, `allLevels`) to `chinese-hsk-website/lib/i18n/dictionaries.js` across `en`, `zh`, and `ar`, and verify all three language dictionaries contain matching keys.

## 2. Navigation Header and Drawer Updates

- [x] 2.1 Update `chinese-hsk-website/components/layout/site-header.jsx` to render the `Books` link (`/books`) in the desktop center navigation and verify active route highlighting on `/books`.
- [x] 2.2 Update the mobile navigation drawer in `chinese-hsk-website/components/layout/site-header.jsx` to include `Books` as a primary navigation item and verify smooth drawer navigation and drawer closure on click.

## 3. Books and Materials Hub View

- [x] 3.1 Create `chinese-hsk-website/components/books/books-view.jsx` implementing the 6 HSK level cards, level filter tabs, resource item actions (preview, download, listen), and bulk "Download All" buttons with full RTL support.
- [x] 3.2 Create the Next.js page route at `chinese-hsk-website/app/books/page.js` rendering `BooksView` with localized page metadata.

## 4. Verification and Build

- [x] 4.1 Run Next.js workspace build (`npm --workspace chinese-hsk-website run build`) and verify zero compilation or prerendering errors.
- [x] 4.2 Run `graphify update .` to update the codebase knowledge graph and verify graph integrity.

## Workflow follow-up

- Archive the change after verification and review requirements are satisfied.
