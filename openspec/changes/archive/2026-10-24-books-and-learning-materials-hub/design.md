# Design: Books and Learning Materials Hub

## Context

See `proposal.md` for background motivation. The web application is built on Next.js 14 App Router, Tailwind CSS, and localized with a custom dictionary system (`lib/i18n/dictionaries.js`). Large binary files (textbooks, audios, mock exams) were previously stored in git, causing clone bloat. This design establishes an external cloud-driven materials hub where file metadata and direct links live in a lightweight configuration module, while the files themselves reside on Google Drive with Baul Chino fallback references.

## Goals / Non-Goals

**Goals:**
- Provide a clean, responsive `/books` route showcasing 6 cards for HSK levels 1 through 6.
- Deliver immediate access to 4 key resource categories per level:
  1. Main Course Textbook (PDF preview/download)
  2. Exercise Workbook with Answers (PDF preview/download)
  3. Audio Listening Tracks (Folder or streaming audio)
  4. Official Mock Exams with Keys (PDF & Audio)
  5. Bulk Download ("Download All") via Google Drive folder.
- Seamlessly integrate `Books` into the desktop header navigation bar and mobile drawer.
- Support complete English, Chinese, and Arabic localization with RTL layout alignment.

**Non-Goals:**
- Storing or serving multi-gigabyte binary files directly from the Next.js server or GitHub repository.
- Implementing an in-browser PDF annotation/editing suite.

## Decisions

### 1. Static Configuration Module (`lib/data/books-data.js`)
- **Choice**: Store level metadata, resource lists, file sizes, and Google Drive links in a structured JavaScript data module.
- **Rationale**: Zero database query overhead, instantaneous page load, full TypeScript/JSDoc type safety, and zero cold-start delay on serverless platforms (Vercel/Render).
- **Alternative considered**: Storing links in Supabase tables. Rejected because material links are static curriculum assets that do not require transactional writes or per-user personalization.

### 2. External Cloud Links with Baul Chino Fallbacks
- **Choice**: Primary links point to user-uploaded Google Drive folders and files. Secondary/audio links reference established curriculum repositories (`https://www.baulchino.com/libros-hsk` and `https://www.baulchino.com/hsk-audios`).
- **Rationale**: Guarantees that learners can access textbooks and listening audio immediately even while Google Drive files are uploading or if permissions are restricted.

### 3. Responsive Card Architecture
- **Choice**: Grid of 6 distinct level cards with consistent metadata:
  - Header: Level badge, HSK title, vocabulary count, level theme accent.
  - Body: 4 structured resource rows (Textbook, Workbook, Audio Tracks, Mock Exams) with quick-action buttons (`Preview`, `Download`, `Listen`).
  - Footer: Prominent full-width button `Download All HSK {N} Resources`.
- **Alternative considered**: Single mega-table. Rejected due to poor mobile usability and overwhelming visual density.

### 4. Internationalization Schema
- **Choice**: Add comprehensive dictionary keys to `lib/i18n/dictionaries.js` under `en`, `zh`, and `ar`:
  - `navBooks`: "Books" / "教材与图书" / "الكتب والمواد"
  - `booksTitle`, `booksSubtitle`
  - `mainTextbook`, `workbook`, `audioTracks`, `mockExams`, `downloadAll`, `previewFile`, `downloadFile`
- **Rationale**: Ensures complete parity across all 3 supported languages with correct Arabic RTL layout.

## Risks / Trade-offs

- **[Risk] Google Drive sharing restricted**: If user's Drive folder permissions are restricted to private, visitors could see an access denied screen.
  - *Mitigation*: Ensure Google Drive links are configured for "Anyone with the link can view", and provide fallback links to Baul Chino resources.
- **[Risk] HSK 6 completeness**: HSK 6 has fewer local mock tests available than HSK 1–5.
  - *Mitigation*: Card 6 highlights standard course resources while clearly displaying an availability badge for extra practice tests.
