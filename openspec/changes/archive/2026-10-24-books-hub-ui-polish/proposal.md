# Proposal: Books Hub UI Polish and Mobile Optimization

## Why

Following the initial implementation of the Books & Learning Materials Hub (`/books`), visual feedback identified that the circular level badges in the card headers wrap awkwardly and squish the text, colourful tag badges and emojis create unnecessary visual clutter, card titles and stats badges truncate or clip on narrower screens, and an explicit top banner link to the top-level Google Drive folder causes privacy concerns. Refining the cards with Option B (removing the squished badge), standardizing on clean monochrome SVG icons, removing the top folder banner, and improving mobile responsiveness ensures an elegant, uncluttered, and privacy-respecting study experience.

## What Changes

- **Card Header Cleanup (Option B)**: Remove the redundant, squished circular badge from the top-left of all cards, allowing level titles and package names to start cleanly at the edge with full horizontal room.
- **Monochrome & Standard Icons**: Replace bright colored badge boxes (`PDF`, `MP3`, `TEST` color tags) and colorful emojis (`🎧`, `📥`) with clean, professional outline SVG icons (document, audio note, test checklist, download arrow, external link).
- **Mobile Responsive Layout**:
  - Prevent title truncation by shortening verbose package titles (e.g. `HSK Word Lists`).
  - Protect right-hand stats badges (`150 Words`, `6 Packages`, `3 Sizes`) from horizontal clipping using `shrink-0 whitespace-nowrap`.
  - Enable responsive wrapping for resource action buttons (`Preview` and `Download`) to prevent overflow on 360px–390px mobile screens.
  - Enable horizontal scrolling for the 8 filter pills on mobile devices (`overflow-x-auto no-scrollbar`).
- **Privacy & Link Isolation**: Remove the top banner linking to the top-level folder name (`Google Drive Hub (Chinese-hsk-Flashcards)`) so visitors only interact directly with the specific study materials for each level without displaying parent folder information.

## Capabilities

### Modified Capabilities
- `learning-materials`: Update card presentation, iconography, mobile layout rules, and privacy header isolation.

## Impact

- **Components**: `chinese-hsk-website/components/books/books-view.jsx`.
- **Data**: `chinese-hsk-website/lib/data/books-data.js`.
- **Styles**: Tailwind CSS utility updates for mobile responsiveness and icon rendering.
