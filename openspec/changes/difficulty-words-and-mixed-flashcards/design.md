# Design

## Context

The Mandarin learning application currently renders study summaries on `/dashboard` and unit/level decks on `/flashcards/hsk/[level]`. Progress data (including `hardWords`, `favorites`, `learnedWords`, `wordStats`, and `reviewHistory`) is tracked in localStorage for guest learners and synchronized with Supabase for authenticated users via `usePersistentProgress()`.

While the data model already differentiates word difficulty (via `wordStats.lastQuality` and `hardWords`) and favorite status, there has been no page to inspect the actual words by difficulty or combine them into custom study decks.

See `proposal.md` for motivation and high-level requirements.

## Goals / Non-Goals

**Goals:**
- Provide a unified, dual-mode vocabulary and difficulty studio at `app/dashboard/words/page.js`.
- Allow learners to browse, filter, search, and cherry-pick words across HSK levels 1–5, difficulties (Hard, Mid, Easy, All), favorites, and SRS due queues.
- Provide a Mixed Flashcard Builder that dynamically compiles a custom study deck and mounts the existing `FlashcardDeck` in-place.
- Deep-link from existing dashboard metric cards (`Hard Words`, `Favorites`, `Learned Words`, and `+N` badges).
- Full internationalization support in English and Arabic (`lib/i18n/dictionaries.js`).

**Non-Goals:**
- Modifying the underlying SRS algorithm (`scoreReview`) in `lib/progress/storage.js`.
- Introducing backend database tables for custom saved decks; decks are dynamically composed on the client from user progress and course words.
- Changing existing route structures for standard level and unit flashcards.

## Decisions

### 1. Dual-Mode Studio on `/dashboard/words`
- **Choice**: Implement a single route `/dashboard/words` that toggles between "Browse & Mix" mode and "Flashcard Practice" mode.
- **Rationale**: Keeps the experience frictionless. The user can tweak their difficulty mix or select specific words, hit "Start Session", practice immediately without a full page reload or layout shift, and return to their exact filter position when done.
- **Alternatives Considered**: 
  - *Separate sub-routes per difficulty (`/dashboard/hard`, `/dashboard/favorites`)*: Rejected because it fragments navigation and makes cross-difficulty mixing awkward.
  - *Opening a modal for flashcards*: Rejected because flashcards require full touch gestures and keyboard accessibility best suited for a full container.

### 2. Client-Side Instant Filtering Over Server-Fetched Dictionaries
- **Choice**: The server component (`app/dashboard/words/page.js`) pre-fetches all course words across HSK 1–5 (cached via `getManagedHskWords`), mapping only required fields (`id`, `hanzi`, `pinyin`, `meaning`, `level`). The client component (`VocabularyStudio`) performs all categorization and filtering in-memory against `usePersistentProgress()`.
- **Rationale**: Course vocabulary across HSK 1–5 contains approximately 1,200 words. Filtering this in-memory in JavaScript takes < 3ms, allowing instant response to checkbox changes, search queries, and level toggles with zero network latency.
- **Alternatives Considered**: 
  - *Server-side API routes for filtering*: Adds round-trip latency and complicates guest progress filtering, since guest progress lives in localStorage.

### 3. Direct Reuse of `FlashcardDeck` Component
- **Choice**: The custom flashcard session in `VocabularyStudio` directly mounts the existing `FlashcardDeck` component (`components/flashcards/flashcard-deck.jsx`), passing the dynamically computed `words` array.
- **Rationale**: `FlashcardDeck` already implements Web Speech TTS fallback, keyboard shortcuts (Space, 1–4), touch-swipe gestures, flip animations, and authenticated progress syncing. Reusing it ensures 100% feature parity and avoids code duplication.
- **Alternatives Considered**: Building a separate custom flashcard player, which would duplicate SRS rating logic and audio fallback.

### 4. URL Search Params for Pre-Filtered Deep Links
- **Choice**: Parse URL parameters (`difficulty`, `level`, `filter`) using Next.js `useSearchParams()`.
- **Rationale**: Enables deep linking directly from `/dashboard` cards (e.g. clicking `45 Hard Words` navigates to `/dashboard/words?difficulty=hard`). When present, the page initializes with that filter tab and pre-selects the corresponding difficulty in the mixer.
- **Alternatives Considered**: Passing state through React context or session storage, which prevents direct sharing and browser back-button navigation.

## Risks / Trade-offs

- **[Risk: Payload size of full vocabulary on initial load]** → **Mitigation**: The server component selects only the minimal fields required for browsing and flashcards (`id`, `hanzi`, `pinyin`, `meaning`, `level`). The total JSON payload for ~1,200 words is ~120KB uncompressed (< 30KB gzipped).
- **[Risk: Real-time search performance with 1,200+ words]** → **Mitigation**: Wrap filter logic in `useMemo`. Search inputs filter on lowercase Hanzi, Pinyin, English, and Arabic substrings efficiently.
- **[Risk: State desynchronization between deck mixer and individual word checkboxes]** → **Mitigation**: Maintain a single source of truth for the active deck words: if the user explicitly checks individual words, those take precedence or merge with the category criteria; a clear indicator displays the exact number of words staged for practice.
