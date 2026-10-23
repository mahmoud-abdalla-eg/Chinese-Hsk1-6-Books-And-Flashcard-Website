# Tasks

## 1. Dictionary Consolidation & i18n Utilities

- [x] 1.1 Merge all Arabic UI mappings from `lib/i18n/ui-replacements.js` and page keys into `lib/i18n/dictionaries.js`, and verify with a node script that every newly added key resolves to valid Arabic text.
- [x] 1.2 Enhance `t(key, lang)` in `lib/i18n/dictionaries.js` to support both semantic dictionary keys and direct string fallback lookups. Verify with node assertions across both `en` and `ar` locales.

## 2. Homepage Hero & Lesson Preview Localization

- [x] 2.1 Create `components/home/home-hero-section.jsx` as a client component utilizing `useLanguage()` to render localized hero badge, title, subtitle, CTA buttons, and stats badges. Verify with a component test that switching `lang` to `ar` renders Arabic copy.
- [x] 2.2 Implement the localized Live Lesson Preview card within `HomeHeroSection`, featuring Arabic speaker labels (`المعلم`, `الطالب`), localized question/answer translations, and the upcoming pronunciation notice. Verify that translations match the Arabic design copy.
- [x] 2.3 Enclose Chinese Hanzi and Pinyin text in `<bdi dir="ltr">` elements within the preview card to prevent punctuation flipping in RTL mode. Verify that question marks and periods remain at the correct sentence ends.
- [x] 2.4 Refactor `app/page.js` to render `HomeHeroSection` while passing server-computed `totalWords` and `totalUnits`. Verify the homepage builds without hydration errors.

## 3. Homepage Highlights, Study Modes, and Level Cards Parity

- [x] 3.1 Update course highlights and study modes sections on `app/page.js` to render localized titles, labels, and descriptions. Verify Arabic text renders when Arabic is selected.
- [x] 3.2 Update `components/hsk/level-card.jsx` to render localized level scenes and tones for HSK 1–6 via `t()`. Verify each level card displays Arabic copy in `ar` mode.

## 4. Hub Pages, Unit Views, and Controls Parity

- [ ] 4.1 Localize static hero titles, pills, descriptions, and action buttons in `app/conversations/page.js`, `app/flashcards/page.js`, and `app/grammar/page.js`. Verify by switching between English and Arabic.
- [ ] 4.2 Localize unit batch-size controls in `components/hsk/level-units-view.jsx` and unit card progress text in `components/hsk/unit-card.jsx` and `components/hsk/unit-hero-card.jsx`. Verify all labels render in Arabic.
- [ ] 4.3 Update `components/grammar/grammar-card.jsx` to render a localized fallback badge (`arabicExampleComingSoon`) when grammar examples lack Arabic translation. Verify grammar cards handle missing translations gracefully.

## 5. Verification & Build Integrity

- [ ] 5.1 Run Biome code quality checks (`npx @biomejs/biome check`) on all modified and newly created files and verify zero errors.
- [ ] 5.2 Execute Next.js build (`npm run build`) in `chinese-hsk-website` and verify successful compilation without SSG or hydration errors.
