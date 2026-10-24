# Tasks

## 1. Localization Dictionary Updates

- [x] 1.1 Add 404 translation keys (`notFoundTitle`, `notFoundDescription`, `returnHome`, `openDashboard`, `jumpToLevel`) to `chinese-hsk-website/lib/i18n/dictionaries.js` for English and Arabic and verify valid syntax.

## 2. 404 Page Implementation

- [x] 2.1 Create `chinese-hsk-website/app/not-found.jsx` featuring "The Lost Scholar" layout, the animated Imperial Scarlet seal badge `[ 迷 ]` (*mí • lost*), localized bilingual headlines/descriptions, and dual recovery CTAs ("Return to Home" and "Open Dashboard").
- [x] 2.2 Implement the HSK 1–6 quick-jump level strip in `chinese-hsk-website/app/not-found.jsx` with responsive grid layout (3 columns on mobile, 6 columns on desktop) and verify 360px safe spacing.

## 3. Verification & Build

- [x] 3.1 Run `npm --prefix chinese-hsk-website run build` to verify Next.js compiles `/_not-found` successfully without errors.
- [x] 3.2 Verify dynamic bilingual switching (English LTR and Arabic RTL) and navigation links to Home, Dashboard, and HSK levels.
- [x] 3.3 Run `graphify update .` to synchronize knowledge graph with new files.
