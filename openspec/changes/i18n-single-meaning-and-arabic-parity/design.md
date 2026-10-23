# Design: i18n Single Meaning and Arabic Parity

## Context
See `proposal.md` for motivation. The site currently uses `LanguageProvider` with React context storing the active language (`en` or `ar`) and setting `document.documentElement.dir = "rtl"` for Arabic. Several components (`FlashcardDeck`, `SiteHeader`, `SiteFooter`, `DashboardClient`) already use `useLanguage()`, while others (`VocabularyList`, `ConversationLesson`, `GrammarCard`, `WordStudyPanel`, and `UnitPage`) either hardcode English strings or stack both English and Arabic translations unconditionally.

## Goals / Non-Goals

**Goals:**
- Present strictly one meaning and example translation according to the active site language across all views.
- Provide full visual and functional parity between English and Arabic static UI text.
- Maintain seamless reactivity: switching the language dropdown in the header updates all visible cards, tables, and dialogues immediately.

**Non-Goals:**
- URL path-based locale prefixes (e.g. `/ar/...`), which would invalidate existing static routes and bookmarks.
- Third-party heavyweight i18n runtimes (e.g., `next-intl` or `i18next`); the lightweight in-house dictionary system meets all requirements with zero bundle overhead.

## Decisions

### Decision 1: Shared Translation Resolution Utility
- **Choice**: Add `getLocalizedMeaning(meaning, lang)` and `getLocalizedExample(example, lang)` to `lib/i18n/dictionaries.js`.
- **Rationale**: Normalizes `{ en, ar }` data structures, handles string fallbacks, and ensures only one language renders. If a word lacks an Arabic translation, it falls back gracefully to English without breaking the layout.
- **Alternatives Considered**: Inlining conditional checks in JSX (rejected: error-prone, violates DRY, and caused the existing bug).

### Decision 2: Word Detail View Client Boundary
- **Choice**: Extract the interactive content of `app/hsk/[level]/word/[wordId]/page.js` into a client component `components/vocabulary/word-detail-view.jsx`.
- **Rationale**: Word pages are currently Server Components that cannot consume `useLanguage()`. Wrapping the interactive presentation in a client island allows instant language switching for meanings, examples, and study buttons without page refreshes.
- **Alternatives Considered**: Making the entire page a client component (rejected: lose metadata and static params advantages of Next.js App Router).

### Decision 3: Centralized Static Dictionary Expansion
- **Choice**: Expand `dictionary` in `lib/i18n/dictionaries.js` with structured keys covering table headers, card actions, search inputs, unit milestones, dialogue scaffolding, and account forms.
- **Rationale**: Enables clean, maintainable usage of `tr(key)` and `<Localized k="..." />` across all components.

## Risks / Trade-offs

- **[Risk]** Missing Arabic translations in older HSK levels or edge cases.
  - **Mitigation**: `getLocalizedMeaning` and `getLocalizedExample` fall back to the existing English translation rather than rendering blank space.
- **[Risk]** LTR / RTL bidirectional layout shifts.
  - **Mitigation**: Chinese characters and Pinyin retain explicit `dir="ltr"` containers, while Arabic meanings and explanatory text inherit `dir="rtl"`.
