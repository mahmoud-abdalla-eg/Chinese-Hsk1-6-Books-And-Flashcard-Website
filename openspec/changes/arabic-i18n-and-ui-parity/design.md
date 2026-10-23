# Design

## Context

The website uses a hybrid Next.js App Router architecture:
- Layout and global header/footer use client components wired to [`LanguageProvider`](file:///e:/Chinese%20Website/Chinese-Hsk1-5-Books-And-Flashcard-Website/chinese-hsk-website/components/language/language-provider.jsx) (`useLanguage()` with `lang`, `tr()`).
- High-level pages ([`app/page.js`](file:///e:/Chinese%20Website/Chinese-Hsk1-5-Books-And-Flashcard-Website/chinese-hsk-website/app/page.js), `/conversations/page.js`, `/flashcards/page.js`, `/grammar/page.js`) are Server Components that fetch statistics and summary counts on the server.
- An extensive set of Arabic UI translations exists in [`lib/i18n/ui-replacements.js`](file:///e:/Chinese%20Website/Chinese-Hsk1-5-Books-And-Flashcard-Website/chinese-hsk-website/lib/i18n/ui-replacements.js), but was never integrated into [`lib/i18n/dictionaries.js`](file:///e:/Chinese%20Website/Chinese-Hsk1-5-Books-And-Flashcard-Website/chinese-hsk-website/lib/i18n/dictionaries.js) or consumed by the pages.
- When `lang === "ar"`, `document.documentElement.dir` is set to `"rtl"`. Without proper `<bdi dir="ltr">` boundaries, neutral punctuation on Latin/Chinese sentences flips to the start of the line.

## Goals / Non-Goals

**Goals:**
- Consolidate all Arabic UI translations into `dictionaries.js` with structured keys and seamless dictionary lookup.
- Extract client-responsive components for Homepage Hero, Live Lesson Preview, Course Highlights, and Study Modes so the home page dynamically re-renders in Arabic.
- Correctly isolate Chinese Hanzi and Pinyin strings using `<bdi dir="ltr">` and render the preview translations in Arabic (`"ماذا تريد أن تدرس اليوم؟"`, `"أريد التدرب على المحادثة."`) with correct RTL typography.
- Provide Arabic localized strings for level themes (scene/tone), hub page headers, deck buttons, and the unit batch-size customizer.
- Ensure graceful fallbacks for grammar examples where Arabic translations are currently empty.

**Non-Goals:**
- Authoring all 72 unit conversation dialogues from scratch (tracked as a separate content generation change).
- Modifying Supabase or MongoDB database schemas.

## Decisions

### Decision 1: Merge `ui-replacements.js` into `dictionaries.js`
- **Choice**: Incorporate all 160+ UI replacements from `ui-replacements.js` into `dictionary` in `dictionaries.js`, and enhance `t(key, lang)` so that if a direct English phrase or theme key is passed, it looks up the Arabic translation cleanly.
- **Rationale**: Eliminates disconnected translation files and guarantees a single source of truth across the application.
- **Alternative Considered**: Keeping `ui-replacements.js` as a separate lookup hook. Rejected because having split translation mechanisms creates divergence and maintenance bugs.

### Decision 2: Client Component Modularization for Homepage
- **Choice**: Extract the top interactive sections of [`app/page.js`](file:///e:/Chinese%20Website/Chinese-Hsk1-5-Books-And-Flashcard-Website/chinese-hsk-website/app/page.js) into client components:
  1. `HomeHeroSection`: Takes server-calculated `totalWords` and `totalUnits`, but reads `useLanguage()` to render localized hero title, subtitle, CTAs, and lesson preview.
  2. `HomeHighlightsAndModes`: Renders course highlights and study modes localized into Arabic.
- **Rationale**: Preserves fast server data fetching for aggregate stats while giving the UI immediate reactivity when users toggle the language switcher.
- **Alternative Considered**: Converting the entire `app/page.js` into a client component. Rejected to avoid losing server-side data caching (`revalidate = 300`) and metadata generation.

### Decision 3: BiDi Directional Isolation
- **Choice**: Wrap Hanzi and Pinyin text in `<bdi dir="ltr">` or `<span dir="ltr">` containers, while dialogue translations use the active language direction (`dir={isArabic ? "rtl" : "ltr"}`).
- **Rationale**: Resolves the awkward punctuation flipping where question marks and periods jump to the opposite side of the line in RTL mode.
- **Alternative Considered**: Manually stripping punctuation or altering strings. Rejected because standard CSS/HTML BiDi isolation handles all Unicode characters cleanly.

### Decision 4: Localized Level Themes and Controls
- **Choice**: Update `components/hsk/level-card.jsx`, `components/hsk/unit-card.jsx`, `components/hsk/unit-hero-card.jsx`, and `components/hsk/level-units-view.jsx` to retrieve localized scenes, tones, and batch size labels (`50 words (Standard)`, `25 words (Bite-sized)`, `100 words (Deep Dive)`).
- **Rationale**: Completes the UI parity so no English fragments remain when navigating the HSK curriculum in Arabic.

## Risks / Trade-offs

- **[Risk]** Client-side language flash before hydration if localStorage contains Arabic while server renders default English.
  - **Mitigation**: Follow the existing pattern in `LanguageProvider` where mounted state ensures clean hydration, and provide default keys that match SSR defaults.
- **[Risk]** Hardcoded text in nested admin or course helper functions.
  - **Mitigation**: Route all user-facing copy through `tr()` or `t(key, lang)`.

## Migration Plan

1. Update `lib/i18n/dictionaries.js` with consolidated keys and Arabic translations.
2. Build client home hero and section components.
3. Update hub pages (`/conversations`, `/flashcards`, `/grammar`, `/hsk/[level]`) and unit cards.
4. Verify with Biome linter and Next.js build.
