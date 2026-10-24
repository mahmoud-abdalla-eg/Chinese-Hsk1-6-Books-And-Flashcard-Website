# Design: Books Hub UI Polish and Mobile Optimization

## Context

See `proposal.md` for background. The `/books` page provides 8 cards (HSK 1-6 + Word Lists + Writing Grids). Visual feedback identified that the circular badge on the top-left of each card header wraps awkwardly, colourful tags and emojis introduce visual noise, titles and badges truncate on mobile, and the top Google Drive folder link causes privacy concerns.

## Goals / Non-Goals

**Goals:**
- Implement Option B: Remove the squished circular level badge from all card headers so titles start cleanly at the edge with full horizontal space.
- Replace colorful block tags (`PDF`, `MP3`, `TEST`) and emojis (`🎧`, `📥`) with clean, professional monochrome SVG outline icons.
- Remove the top Google Drive folder banner to prevent learner confusion and ensure Google Drive isolation privacy.
- Guarantee that all cards, titles, badges, and action buttons fit cleanly without truncation or clipping on mobile screens (down to 360px).
- Add smooth horizontal scrolling for filter tabs on mobile viewports.

**Non-Goals:**
- Modifying underlying backend data or cloud links.
- Changing desktop navigation header structure.

## Decisions

### 1. Remove Circular Card Header Badge (Option B)
- **Choice**: Drop the `w-10 h-10` circular badge. Place the level title and Hanzi directly at the start of the card header.
- **Rationale**: Removes text wrapping bugs completely and provides 48px of additional horizontal space for long titles.

### 2. Standard Monochrome SVG Iconography
- **Choice**: Standard outline SVG icons:
  - Document icon for Textbooks & Workbooks (`M9 12h6m-6 4h6m2 5H7...`)
  - Headphones/speaker icon for Audio tracks (`M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4...`)
  - Exam/checklist icon for Mock Exams (`M9 5H7a2 2 0 00-2 2v12...`)
  - Download tray icon for downloads (`M4 16v1a3 3 0 003 3h10...`)
  - External link icon for previews (`M10 6H6a2 2 0 00-2 2v10...`)
- **Rationale**: Clean, consistent, and distraction-free design conforming to modern web standards.

### 3. Mobile Card Geometry & Text Protection
- **Choice**:
  - Set card padding to `p-4 sm:p-6`.
  - Add `shrink-0 whitespace-nowrap` to stats badges (`150 Words`, `6 Packages`, `3 Sizes`).
  - Shorten `Hsk Words For Each Level` to `HSK Word Lists`.
  - Set resource buttons to `flex-wrap gap-2 justify-end`.
- **Rationale**: Eliminates ellipsis truncation and prevents right-side clipping on phones.

### 4. Remove Top Folder Banner for Link Privacy
- **Choice**: Remove the `[ ☁ Google Drive Hub (Chinese-hsk-Flashcards) ↗ ]` banner.
- **Rationale**: Google Drive's folder sharing already isolates access strictly to the shared contents. Removing the top banner avoids drawing attention to the parent folder and keeps visitors focused on the individual level study cards.
