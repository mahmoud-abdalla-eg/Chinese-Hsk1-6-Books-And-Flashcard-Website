# Tasks

## 1. Mobile Navigation Header & Auth Controls

- [x] 1.1 Streamline right-hand header controls in `site-header.jsx` and `account-menu.jsx` on viewports narrower than 640px to eliminate horizontal overflow and button cut-offs, verifying that all elements fit on a 360px screen without clipping
- [x] 1.2 Verify that language selection and full login/signup actions are cleanly accessible inside the mobile navigation drawer

## 2. Fluid Typography & Surface Padding

- [x] 2.1 Update `HskLevelView` heading to responsive typography (`text-3xl sm:text-5xl lg:text-7xl break-words`) and reduce mobile surface padding to `p-4 sm:p-7`, verifying "First conversations" does not clip on mobile viewports
- [x] 2.2 Update `DashboardClient` and `HomeHeroSection` hero headings and surface padding to fluid responsive scales, verifying titles wrap cleanly without horizontal scroll
- [x] 2.3 Update `UnitHeroCard` and unit study headers to scale comfortably on phone viewports

## 3. Unit Batch Selector & Level Stats

- [x] 3.1 Refactor the unit chunk selector in `LevelUnitsView` into a full-width segmented control (`grid grid-cols-3 gap-1.5`) on mobile, verifying all 3 batch options (25, 50, 100) render cleanly without truncation
- [x] 3.2 Refactor the HSK level stats summary on mobile into a compact horizontal metrics row, verifying it remains informative while preserving viewport height for study units

## 4. Flashcard Deck & Study Views

- [x] 4.1 Refactor `FlashcardDeck` top filter buttons and study toggles to use a smooth horizontal scrollable rail (`overflow-x-auto`) on mobile, verifying controls do not wrap into 3+ rows above the flashcard
- [x] 4.2 Optimize flashcard rating buttons (Again, Hard, Good, Easy) into a touch-friendly full-width grid on phone screens
- [x] 4.3 Streamline `UnitCard` layout and action buttons for compact mobile viewports

## 5. Verification & Code Quality

- [x] 5.1 Run Biome check and format to verify zero syntax or lint errors across all modified components
- [x] 5.2 Verify mobile viewport rendering across `/hsk/1`, `/flashcards`, `/dashboard`, and `/` at 360px, 375px, and 390px widths with zero horizontal overflow
