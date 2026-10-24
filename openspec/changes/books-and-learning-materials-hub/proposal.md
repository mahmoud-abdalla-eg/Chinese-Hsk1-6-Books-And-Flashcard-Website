# Proposal: Books and Learning Materials Hub

## Why

Learners currently have interactive study tools (vocabulary, flashcards, grammar, dialogues) on the platform, but lack centralized access to official curriculum books, exercise workbooks, listening tracks, and mock examination papers. Storing heavy media directly in the git repository previously bloated repository size to over 5 GB. Hosting resources via organized external cloud storage (Google Drive) and providing a dedicated `/books` learning materials hub with 6 HSK level cards gives learners one-click access to complete study packages without impacting platform performance or repository size.

## What Changes

- Add a top-level **Books** (`/books`) route in the primary desktop header navigation and mobile navigation drawer.
- Create a dedicated **Learning Materials Hub** page (`/books`) featuring 6 responsive cards for HSK levels 1 through 6.
- Each level card provides direct links and previews for:
  - Official Standard Course Textbook (PDF preview/download)
  - Exercise Workbook with Answer Keys (PDF preview/download)
  - Textbook and Workbook Listening Audio Tracks (MP3 streaming / Google Drive folder / Baul Chino reference)
  - Official Mock Practice Exams with Answer Keys (PDF & listening audio)
  - "Download All" package button opening the level's Google Drive resource folder.
- Maintain a structured materials configuration (`lib/data/books-data.js`) storing file links, metadata, file sizes, and Google Drive folder references.
- Support complete internationalization (English, Chinese, and Arabic with RTL layout alignment) across navigation links, card labels, and resource descriptions.

## Capabilities

### New Capabilities
- `learning-materials`: Covers browsing, previewing, and downloading HSK 1–6 Standard Course textbooks, exercise workbooks, listening audio tracks, and mock exams.

### Modified Capabilities
- `header-navigation`: Update desktop header navigation bar to include the top-level `Books` tab next to `Dashboard` and `Learn ▾`.
- `mobile-navigation`: Update the mobile navigation drawer to include `Books` alongside `Dashboard` and `Learn`.

## Impact

- **Frontend Routes**: New `/books` route (`chinese-hsk-website/app/books/page.js`).
- **Components**: New `BooksView` component (`chinese-hsk-website/components/books/books-view.jsx`).
- **Layout & Navigation**: Updates to `components/layout/site-header.jsx` for desktop and mobile links.
- **Data & Configuration**: New data source `chinese-hsk-website/lib/data/books-data.js`.
- **Internationalization**: New dictionary entries in `chinese-hsk-website/lib/i18n/dictionaries.js` (`en`, `zh`, `ar`).
- **External Dependencies**: Google Drive URLs and Baul Chino audio/book links.
