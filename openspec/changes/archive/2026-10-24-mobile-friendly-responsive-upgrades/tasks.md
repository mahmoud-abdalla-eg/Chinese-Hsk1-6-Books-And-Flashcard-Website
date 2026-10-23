# Tasks

## 1. Root Layout & Viewport Configuration

- [x] 1.1 Export `viewport` metadata in `chinese-hsk-website/app/layout.js` with `width=device-width`, `initialScale=1`, and `viewportFit=cover`, and verify rendered metadata tag.
- [x] 1.2 Replace outer `overflow-hidden` wrapper in `chinese-hsk-website/app/layout.js` with `overflow-x-clip` and verify header sticky positioning and momentum scrolling function smoothly.
- [x] 1.3 Ensure form inputs across `login-card.jsx`, `signup-card.jsx`, and `vocabulary-list.jsx` have a minimum font size of 16px (`text-base sm:text-sm`) on mobile to prevent iOS Safari auto-zooming.

## 2. Mobile Navigation & Responsive Header

- [x] 2.1 Refactor `chinese-hsk-website/components/layout/site-header.jsx` to hide the 6-column sub-navigation strip and the brand subtitle on mobile screens under 640px.
- [x] 2.2 Add an accessible hamburger menu trigger button in `site-header.jsx` with minimum 44x44px touch hitbox, `aria-expanded`, and `aria-label`.
- [x] 2.3 Implement the slide-out navigation drawer with route links, animated backdrop overlay, Escape key listener, backdrop click dismiss, and body scroll locking (`document.body.style.overflow = "hidden"`).
- [x] 2.4 Verify drawer bidirectional alignment in both LTR (slides in from left) and RTL Arabic mode (slides in from right).

## 3. Responsive Vocabulary List

- [x] 3.1 Refactor `chinese-hsk-website/components/vocabulary/vocabulary-list.jsx` to render stacked word cards on screens `< sm` while preserving the compact table view on `sm+`.
- [x] 3.2 Verify meaning translations in English and Arabic receive full container width on mobile cards and eliminate the 56px grid column collapse.
- [x] 3.3 Ensure audio buttons and favorite/learned toggles maintain minimum 44x44px touch targets on mobile cards.

## 4. Touch-Swipe Flashcards & Mobile Typography

- [x] 4.1 Implement native React touch gesture handlers (`onTouchStart`, `onTouchMove`, `onTouchEnd`) in `chinese-hsk-website/components/flashcards/flashcard-deck.jsx` to track horizontal swipes while preserving vertical page scrolling.
- [x] 4.2 Connect swipe-left to advance card and swipe-right to return to previous card with reset flip state.
- [x] 4.3 Apply responsive Hanzi scaling (`text-5xl sm:text-7xl lg:text-8xl`) with `break-keep` to prevent 3–4 character Chinese terms from overflowing card padding on mobile screens.
- [x] 4.4 Refactor flashcard filters and study mode controls into a compact, scroll-safe toolbar that keeps the flashcard visible above the fold on mobile.
- [x] 4.5 Hide desktop keyboard hints (`[1]`, `[2]`, `[Space]`) on mobile touch screens and ensure SRS rating buttons provide at least 48px touch heights.

## 5. Mobile Hierarchy & Course Page Integration

- [x] 5.1 Adjust layout order on `chinese-hsk-website/app/hsk/[level]/page.js` so study units appear before the secondary level map on mobile screens.
- [x] 5.2 Optimize unit batch size pill controls in `chinese-hsk-website/components/hsk/level-units-view.jsx` to wrap or scroll cleanly on screens <= 375px.
- [x] 5.3 Run validation with `npm --prefix chinese-hsk-website run validate` and verify layout rendering across mobile viewports.
