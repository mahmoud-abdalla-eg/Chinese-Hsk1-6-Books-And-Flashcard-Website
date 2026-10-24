# Proposal

## Why

Visiting an unmapped, mistyped, or outdated route in Mandarin Flow HSK currently renders the unstyled, stark black Next.js default fallback screen (`404 | This page could not be found.`). This creates a jarring user experience that looks like a broken site, lacks navigation controls, and completely disconnects from the platform's warm visual identity and language learning journey.

A dedicated, branded 404 page ("The Lost Scholar") is needed to maintain brand consistency, support bilingual English/Arabic audiences with native RTL layout, and provide immediate recovery pathways (Home, Dashboard, and direct HSK 1-6 level jumps).

## What Changes

- Create a custom `not-found.jsx` page inside `chinese-hsk-website/app/` adhering to the Mandarin Flow HSK design system.
- Integrate "The Lost Scholar" cultural motif: a soft numeric `404` overlaid with an animated Imperial Scarlet seal badge `[ 迷 ]` (*mí • lost*), paired with localized copy *"迷路了吗？(Lost your way?)"*.
- Provide concise, non-cluttered messaging: *"The page you are looking for doesn't exist or has moved. Let's get your learning back on track."*.
- Add actionable recovery buttons: primary solid teal "Return to Home" button and secondary outline "Open Dashboard" button.
- Add a direct HSK Level jump strip (`HSK 1` through `HSK 6`) allowing learners to quickly resume practicing.
- Add full multilingual translation strings (`en`, `ar`) in `lib/i18n/dictionaries.js` with automated RTL layout support.
- Ensure strict mobile responsiveness down to 360px viewport width without horizontal scrollbars or clipping.

## Capabilities

### New Capabilities
- `not-found-experience`: Custom branded 404 error page with cultural visual identity, bilingual localized content, and quick-recovery navigation to core study sections.

### Modified Capabilities
<!-- None -->

## Impact

- **Frontend Code**: New page `chinese-hsk-website/app/not-found.jsx`, updated translation dictionary in `chinese-hsk-website/lib/i18n/dictionaries.js`.
- **Layout & Routing**: Automatically integrates into `chinese-hsk-website/app/layout.js`, retaining the global `<SiteHeader />` and `<SiteFooter />`.
- **Dependencies & Backend**: Zero new external dependencies or backend API changes.
