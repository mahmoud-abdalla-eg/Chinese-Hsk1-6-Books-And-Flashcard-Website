# Design

## Context

The Books hub at `/books` currently renders a catalog of 8 cards. The user has organized the Google Drive folders and local disk into separated subfolders for each level:
- `New Books And resources` (New HSK 3.0 2026 textbooks, workbooks, writing practice books, 2026 audios)
- `old books and resources` (Classic HSK 2.0 Standard Course, workbooks, audios, and official mock exams)
- Root-level grammar asset: `HSK 1-6 Grammar.pdf`

See `proposal.md` for background motivation and `specs/learning-materials/spec.md` for requirements.

## Goals / Non-Goals

**Goals:**
- Provide an intuitive in-card edition toggle on each level card (`New HSK 3.0 (2026)` vs `Classic HSK 2.0`).
- Model each curriculum edition with dedicated preview links, direct download links, file sizes, and audio streaming endpoints.
- Support New HSK 3.0 specific assets, notably Character Writing Books (`hsk-course-1-writing.pdf`, `hsk-course-2-writing.pdf`) and 2026 Audio links (`https://www.baulchino.com/new-hsk-audios-2026`).
- Provide verified Google Drive direct preview and download IDs for all uploaded HSK 5 and HSK 6 materials.
- Incorporate `HSK 1-6 Grammar.pdf` into the learning resources.
- Ensure seamless RTL and Arabic localization without layout clipping or text overlap.

**Non-Goals:**
- Splitting the grid into 14 distinct cards (which would clutter the interface).
- Requiring full page refreshes or route changes when toggling between editions.

## Decisions

### 1. Dual-Edition Data Schema (`books-data.js`)
Instead of flattening or duplicating level entries, each level object in `hskMaterials` will support an `editions` map:
```javascript
{
  level: 1,
  name: "HSK 1",
  hanzi: "一级",
  wordsCount: 150,
  editions: {
    new: {
      editionLabel: "New HSK 3.0 (2026)",
      folderUrl: "https://drive.google.com/drive/folders/1hy9aozysBWSngkTkQt9_wQ5xv39Hw0ae",
      textbook: { ... },
      workbook: { ... },
      writing: { ... }, // optional/when available
      audio: {
        streamUrl: "https://www.baulchino.com/new-hsk-audios-2026",
        downloadUrl: "https://drive.google.com/drive/folders/1uDqJmdKiCnZxVcGeNk5edf1TPW6hWvZd"
      }
    },
    classic: {
      editionLabel: "Classic HSK 2.0",
      folderUrl: "https://drive.google.com/drive/folders/1mALLz2qtOJ0HdxbgQgAIZXTUoag9DJhL",
      textbook: { ... },
      workbook: { ... },
      audio: { streamUrl: "https://www.baulchino.com/hsk-audios", ... },
      mockExams: { ... }
    }
  }
}
```
*Rationale*: Retains backward compatibility for card headers, tags, and theme styling while enabling isolated, structured material rows per edition.

*Alternatives considered*:
- Duplicating cards into 12 level cards (6 new + 6 classic): rejected because it doubles visual noise on mobile and complicates the filter bar.
- Tab bar only at page level: rejected because learners often want to cross-reference new and classic books for a specific level.

### 2. In-Card Interactive Toggle State (`books-view.jsx`)
Use local state per card:
```javascript
const [selectedEditions, setSelectedEditions] = useState({
  1: "new",
  2: "new",
  3: "new",
  4: "new",
  5: "new",
  6: "classic" // or "new" based on available data
});
```
*Rationale*: Instantaneous tab switching without rerendering the entire grid or losing scroll position.

### 3. Iconography & Monochrome Design
- Standard monochrome outline SVG icons are maintained across both editions:
  - Textbooks & Workbooks: Document outline icon
  - Writing Books: Pencil / Edit outline icon
  - Audio: Music note outline icon
  - Mock exams: Clipboard checklist outline icon

## Risks / Trade-offs

- [Risk]: Some levels (e.g. HSK 6) may currently have primarily Classic Standard Course books while New 3.0 higher-band books are phased in.
  → Mitigation: If an edition is missing for a level, default to the available edition and render a subtle "Coming Soon / In Preparation" status pill rather than broken links.
- [Risk]: Mobile layout constraints with toggle pill buttons inside the card header.
  → Mitigation: Style toggle pills as compact segmented controls (`text-[11px] font-bold py-1 px-2.5 rounded-lg`) that wrap or fit comfortably alongside card titles.
