# Proposal

## Why

Mandarin Flow HSK's primary study loops (vocabulary browsing, flashcard spaced repetition, and lesson navigation) currently suffer from severe desktop-centric layout issues on mobile devices (screens <= 640px and specifically 320px–390px phones). 

Key issues include:
1. The 6-column mobile secondary navigation bar cramps text into ~50px columns, wrapping navigation titles into jagged multi-line blocks.
2. The vocabulary table on mobile places 5 visible child elements into a 2-column grid, crushing full English and Arabic translations into a narrow 56px column.
3. The flashcard deck relies on mouse clicks and keyboard shortcuts without touch swipe gestures, and Hanzi typography (`text-7xl` to `text-8xl`) overflows card boundaries on multi-character words.
4. The site lacks an explicit Next.js `viewport` configuration and contains top-level container `overflow-hidden` that can interfere with sticky headers and native mobile scrolling.

Now that the core course content, audio engine, and authentication flows are stabilized, making the entire website 100% mobile-friendly is essential for learners on smartphones and tablets.

## What Changes

- **Mobile Navigation Drawer**: Replace the rigid 6-column sub-header bar with an accessible slide-out hamburger drawer that supports LTR (English/Chinese) and RTL (Arabic) layouts, provides >= 44x44px touch targets, traps focus, and prevents background scrolling when open.
- **Header Optimization**: On mobile viewports, streamline the top brand row so that the Hamburger trigger, App Brand, Language Switcher, and Account Menu fit cleanly on a single row without wrapping or horizontal overflow.
- **Touch-Swipe Flashcards**: Implement native touch gesture handlers (`onTouchStart`, `onTouchMove`, `onTouchEnd`) on the flashcard deck enabling swipe-left (next/advance) and swipe-right (previous) while distinguishing horizontal swipes from vertical page scrolling.
- **Responsive Flashcard Typography & Layout**: Dynamically scale multi-character Hanzi (`text-5xl` to `text-8xl`), collapse the bulky controls header into a compact toolbar, and hide desktop keyboard shortcut hints on touch devices.
- **Responsive Vocabulary Card Layout**: Fix the vocabulary list on mobile (`< sm`) by rendering clean stacked cards with full-width translations, direct pronunciation controls, and easy-to-tap favorite/learned toggles.
- **Root Layout & Viewport Configuration**: Export explicit Next.js `viewport` metadata (`viewportFit: "cover"`, `width: "device-width"`), remove `overflow-hidden` from the global page container, and enforce minimum 16px font sizes on form inputs to prevent unwanted iOS Safari auto-zooming.
- **Mobile Page Hierarchy**: On HSK level pages, adjust DOM ordering and styling so study units appear prominently on mobile before auxiliary sidebar lists.

## Capabilities

### New Capabilities
- `mobile-navigation`: Accessible mobile header and slide-out navigation drawer with touch targets, focus management, backdrop dismiss, and bidirectional LTR/RTL support.
- `responsive-learning-ui`: Mobile-optimized viewport, safe-area layout, responsive vocabulary cards, and touch-target standards across course pages.

### Modified Capabilities
- `flashcards`: Add touch-swipe gesture support, compact mobile controls toolbar, and responsive typography scaling for multi-character Chinese words.

## Impact

- **Affected Code**:
  - `chinese-hsk-website/app/layout.js`: Viewport export and outer wrapper classes.
  - `chinese-hsk-website/components/layout/site-header.jsx`: Header restructuring, hamburger button, and mobile slide-out drawer.
  - `chinese-hsk-website/components/flashcards/flashcard-deck.jsx`: Touch gesture listeners, responsive typography, compact toolbar.
  - `chinese-hsk-website/components/vocabulary/vocabulary-list.jsx`: Responsive layout transformation for screens `< sm`.
  - `chinese-hsk-website/app/hsk/[level]/page.js`: Mobile layout hierarchy.
- **APIs & Dependencies**: No external dependencies needed; implemented with native Web APIs and React touch handlers.
- **Systems & Compatibility**: Fully compatible with existing Next.js 16, React 19, Tailwind CSS v4, and Arabic RTL locale rules.
