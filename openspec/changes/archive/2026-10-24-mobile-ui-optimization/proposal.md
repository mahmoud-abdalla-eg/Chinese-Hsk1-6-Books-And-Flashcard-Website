# Proposal

## Why

On narrow mobile phone screens (360px–390px viewports), several core pages suffer from horizontal element clipping, oversized typography, cramped navigation buttons, and excessive card padding. Specifically, the top header bar crowds language, login, and signup buttons offscreen; level hero titles using `text-5xl` overflow their containers; and the unit batch size toggle wraps into broken layouts. Optimizing mobile layouts across all pages and tabs ensures a polished, comfortable study experience for learners on smartphones.

## What Changes

- **Mobile Header Optimization**: On viewports narrower than 640px, streamline the right-hand header controls to prevent button clipping and brand title suppression. Guest login/signup actions are cleanly handled without overflowing the top bar.
- **Hero Typography & Container Resizing**: Replace rigid `text-5xl` headings across HSK Level (`HskLevelView`), Dashboard (`DashboardClient`), and Home (`HomeHeroSection`) with fluid responsive typography (`text-3xl sm:text-5xl lg:text-7xl`) and word wrapping (`break-words`) to eliminate title clipping on phones.
- **Responsive Padding Tuning**: Reduce default mobile surface padding from `p-7` (28px) down to `p-4 sm:p-7` across hero surfaces and level views, reclaiming 24px of crucial horizontal space for phone content.
- **Full-Width Unit Batch Selector**: Redesign the unit chunk filter bar in `LevelUnitsView` into a clean, 100%-width segmented control (`grid grid-cols-3`) on mobile screens to prevent text cut-offs.
- **Mobile-Friendly Stats Matrix**: Convert the tall, viewport-dominating level overview stats card on mobile into a compact, single-row metrics bar (`Words | Units | Practice Modes`).
- **Flashcard Deck Mobile Rail**: Organize flashcard deck filter pills and practice controls into a clean, horizontally scrollable pill rail on small screens to prevent 3–4 stacked rows of buttons above the card.
- **Unit Card Compact Touch Layout**: Streamline unit cards on mobile with thumb-friendly button targets and compact spacing.

## Capabilities

### New Capabilities
<!-- None: Building upon established mobile navigation and learning UI capabilities -->

### Modified Capabilities
- `mobile-navigation`: Refine the responsive mobile header requirements to strictly constrain horizontal width on narrow phone viewports (< 400px), preventing control clipping and brand text collapse.
- `responsive-learning-ui`: Expand responsive learning UI requirements to mandate fluid typography scaling, mobile surface padding floors, compact mobile stats matrices, and full-width unit batch selectors on level pages.
- `flashcards`: Add mobile layout requirements for flashcard deck study controls, ensuring filter pills and mode switchers do not obstruct the card on phone screens.

## Impact

- Affected frontend components:
  - `chinese-hsk-website/components/layout/site-header.jsx`
  - `chinese-hsk-website/components/auth/account-menu.jsx`
  - `chinese-hsk-website/components/hsk/hsk-level-view.jsx`
  - `chinese-hsk-website/components/hsk/level-units-view.jsx`
  - `chinese-hsk-website/components/hsk/unit-card.jsx`
  - `chinese-hsk-website/components/flashcards/flashcard-deck.jsx`
  - `chinese-hsk-website/components/dashboard/dashboard-client.jsx`
  - `chinese-hsk-website/components/home/home-hero-section.jsx`
- No backend API or database schema changes required.
- Fully backward-compatible with desktop and tablet layouts.
