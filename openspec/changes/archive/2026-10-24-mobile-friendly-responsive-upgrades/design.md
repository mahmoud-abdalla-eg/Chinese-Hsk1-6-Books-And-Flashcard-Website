# Design

## Context

The application runs on Next.js 16, React 19, and Tailwind CSS v4. See `proposal.md` for motivation. Currently, the interface relies heavily on horizontal multi-column grids (such as the 6-column navigation strip in `site-header.jsx` and the 5-item / 2-column vocabulary list in `vocabulary-list.jsx`) and fixed font sizes that cause severe clipping, wrapping, and text squishing on mobile screens under 640px.

## Goals / Non-Goals

**Goals:**
- Provide a smooth, fluid mobile experience across standard phones (320px to 420px viewports) and tablets without horizontal scrollbars.
- Replace the cramped mobile navigation strip with a slide-out drawer that supports LTR and RTL (Arabic) with accessible touch targets (>= 44x44px).
- Enable native touch swipe gestures on flashcards (swipe left/right) without adding external NPM dependencies.
- Correct the mobile vocabulary list so all words, meanings, audio buttons, and toggles display with full legibility and proper hitboxes.
- Standardize viewport settings, safe-area insets, and input sizing to prevent iOS Safari auto-zooming.

**Non-Goals:**
- Rebuilding the application as a native iOS/Android mobile app.
- Altering the SuperMemo-2 / SRS spaced repetition scoring algorithm.
- Modifying backend Supabase schemas or course word JSON databases.

## Decisions

### 1. Slide-out Navigation Drawer vs Bottom Navigation Bar
- **Choice**: Slide-out navigation drawer with a top hamburger trigger.
- **Rationale**: Mandarin Flow HSK contains 6 primary destinations ("Home", "HSK Vocabulary", "Flashcards", "Conversations", "Grammar", "Dashboard") plus level shortcuts (HSK 1–6). A fixed bottom navigation bar becomes crowded with more than 4–5 items, especially with multi-lingual labels in English, Chinese, and Arabic. The slide-out drawer provides ample vertical space, clean typography, and adapts to RTL by sliding in from the logical start (`start-0`).
- **Alternative considered**: Bottom navigation bar. Rejected because 6 destinations plus language and user profile exceeds bottom bar space on 320px screens.

### 2. Pure React Native Touch Handlers vs Third-Party Swipe Libraries
- **Choice**: Native React touch handlers (`onTouchStart`, `onTouchMove`, `onTouchEnd`) inside `FlashcardDeck`.
- **Rationale**: Keeps bundle size minimal with zero external runtime dependencies. Distinguishing horizontal swipe from vertical page scroll is achieved by tracking touch coordinates:
  - Only fire horizontal advance/return if $|\Delta X| \ge 50\text{px}$ and $|\Delta X| > |\Delta Y| \times 1.5$.
  - If vertical movement dominates ($|\Delta Y| > |\Delta X|$), allow default passive page scrolling.
- **Alternative considered**: Installing `framer-motion` or `react-swipeable`. Rejected to avoid bundle bloat and maintain fast PWA loading.

### 3. Responsive Vocabulary Transformation (Stacked Cards vs Horizontal Table Scroll)
- **Choice**: Display stacked cards on screens `< sm` (< 640px) while maintaining the compact table view on `sm+`.
- **Rationale**: Horizontal scroll tables on mobile force users to pan back and forth horizontally to read meanings and tap audio buttons. Transforming each word row into a cohesive card places Hanzi, Pinyin, full meaning, and action buttons within immediate single-hand thumb reach.
- **Alternative considered**: Wrapping the existing table in `overflow-x-auto`. Rejected because horizontal scrolling tables on phones offer poor readability and awkward thumb reach.

### 4. Global Viewport & Container Scroll Normalization
- **Choice**: Export explicit `viewport` in `app/layout.js` with `viewportFit: "cover"`, and replace outer container `overflow-hidden` with `overflow-x-clip`.
- **Rationale**: `overflow: hidden` on root containers breaks `position: sticky` on child elements across mobile Safari and Chromium, and clips dropdown menus. `overflow-x-clip` stops horizontal viewport overflow without interfering with vertical sticky positioning or scroll chaining.
- **Input font size**: Form inputs (`input`, `textarea`, `select`) will be set to minimum `16px` (`text-base` or `text-[16px] sm:text-sm`) to prevent iOS Safari from automatically zooming into inputs on focus.

## Risks / Trade-offs

- **[Risk]** Touch swipe interfering with native iOS Safari back/forward swipe gesture navigation.
  - **Mitigation**: Swipes are registered only when started inside the flashcard card element bounds, with a minimum swipe threshold of 50px.
- **[Risk]** Drawer background scrolling on iOS Safari.
  - **Mitigation**: Toggle `document.body.style.overflow = "hidden"` while the drawer is open, and clean up the style on unmount or drawer dismissal.
- **[Risk]** Multi-character Hanzi (e.g. 4-character idioms) breaking card layout on 320px screens.
  - **Mitigation**: Responsive typography using `text-5xl sm:text-7xl lg:text-8xl` with `break-keep` and centered flexbox constraints.
