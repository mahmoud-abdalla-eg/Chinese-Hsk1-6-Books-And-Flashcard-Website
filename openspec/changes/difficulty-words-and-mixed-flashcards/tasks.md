# Tasks

## 1. Internationalization & Translation Keys

- [x] 1.1 Add bilingual dictionary keys in `chinese-hsk-website/lib/i18n/dictionaries.js` for Arabic and English covering the vocabulary hub header, category tabs (All, Hard, Mid, Easy, Favorites, Due for Review), deck mixer options, limit dropdowns, and action buttons. Verify translation helper returns valid strings for both `en` and `ar`.

## 2. Server Page & Vocabulary Studio Architecture

- [x] 2.1 Create server page `chinese-hsk-website/app/dashboard/words/page.js` pre-loading all HSK 1–5 words via `getManagedHskWords()`, mapping lightweight word objects, and rendering `VocabularyStudio`. Verify the route loads successfully with valid props.
- [x] 2.2 Create `chinese-hsk-website/components/dashboard/vocabulary-studio.jsx` with dual-mode view state (`browse` and `practice`), handling URL query param initialization (`difficulty`, `level`, `filter`) and active deck state. Verify toggling between browse and practice preserves selected words.

## 3. Deck Mixer & Word Explorer Components

- [x] 3.1 Create `chinese-hsk-website/components/dashboard/mixed-flashcard-builder.jsx` featuring multi-select difficulty checkboxes, HSK level chips, card count limit selector (15, 25, 50, All), shuffle toggle, and live matching counter. Verify checking/unchecking categories immediately updates the ready card count.
- [x] 3.2 Build the Word Explorer list inside `vocabulary-studio.jsx` featuring search input (Hanzi, Pinyin, EN, AR), audio pronunciation button, favorite toggle, level/difficulty badges, individual selection checkboxes, and link to word details. Verify search and filter react smoothly across ~1,200 words.

## 4. In-Place Flashcard Integration & Progress Sync

- [x] 4.1 Mount `FlashcardDeck` within the active practice mode of `VocabularyStudio`, passing the dynamically generated deck of mixed/selected words, and providing a clean exit button to return to the catalog. Verify rating cards updates `wordStats` and review history.
- [x] 4.2 Verify guest prompt handling and authenticated sync within the mixed flashcard session, ensuring streak and review recording operate identically to level decks.

## 5. Dashboard & Navigation Deep-Linking

- [x] 5.1 Update `chinese-hsk-website/components/dashboard/dashboard-client.jsx` to make metric cards (`Hard Words`, `Favorites`, `Learned Words`) clickable links targeting `/dashboard/words` with appropriate query params. Verify clicking "Hard Words" navigates and pre-selects the Hard filter.
- [x] 5.2 Update `WordGroup` and `Words by Level` in `dashboard-client.jsx` so the `+N` overflow badge links to `/dashboard/words?level=[level]&difficulty=[diff]`. Verify deep link opens the pre-filtered list.
- [x] 5.3 Add a Mixed Flashcards CTA banner in `dashboard-client.jsx` and a companion prompt in `chinese-hsk-website/components/flashcards/flashcards-view.jsx`. Verify navigation from both locations leads to `/dashboard/words`.

## 6. End-to-End Verification & Mobile Responsiveness

- [x] 6.1 Verify mobile responsiveness for `/dashboard/words` across viewport sizes (<640px, tablet, desktop) and ensure touch controls work smoothly in RTL (Arabic) and LTR (English) layouts.
- [x] 6.2 Run Next.js lint / build checks to confirm no build or runtime regressions across the application.
