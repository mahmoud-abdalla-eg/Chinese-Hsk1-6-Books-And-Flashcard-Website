# Tasks: i18n Single Meaning and Arabic Parity

## 1. Shared Localization Utilities & Dictionary Expansion

- [x] 1.1 Export `getLocalizedMeaning(meaning, lang)` and `getLocalizedExample(example, lang)` in `lib/i18n/dictionaries.js`, verified by calling helpers with bilingual fixtures for both languages.
- [x] 1.2 Add complete English and Arabic dictionary keys in `lib/i18n/dictionaries.js` for table headers, quick actions, study cards, search inputs, unit milestones, and account forms, verified by checking dictionary keys across all languages.

## 2. Vocabulary Table Single Meaning & Localization

- [x] 2.1 Update `components/vocabulary/vocabulary-list.jsx` to render single meaning using `getLocalizedMeaning(word.meaning, lang)` without stacking, verified by inspecting rendered markup in English and Arabic modes.
- [x] 2.2 Localize table headers (`#`, `Chinese`, `Meaning`, `Actions`, `Audio`), search bar placeholder, clear button, and quick action buttons (`+ Learn` / `✓ Learned`) in `components/vocabulary/vocabulary-list.jsx`, verified by switching site language.

## 3. Word Detail Page & Word Study Panel

- [x] 3.1 Extract word detail interactive presentation to a client component `components/vocabulary/word-detail-view.jsx` consuming `useLanguage()` and `getLocalizedMeaning`, verified by checking single-language rendering on `/hsk/[level]/word/[wordId]`.
- [x] 3.2 Update example sentences in `WordDetailView` to render only the active language translation, verified by switching language.
- [x] 3.3 Localize `components/vocabulary/word-study-panel.jsx` buttons ("Favorite", "Mark as learned", audio labels), verified by testing buttons in Arabic mode.

## 4. Conversation Lessons, Grammar Cards, and Card Views

- [x] 4.1 Update `components/conversations/conversation-lesson.jsx` dialogue lines to display only the active language translation (`line.translation?.ar` or `line.translation?.en`), and localize lesson section headers, verified by inspecting dialogue lessons.
- [x] 4.2 Update `components/grammar/grammar-card.jsx` to render single example translation based on `useLanguage()`, verified by checking grammar cards.
- [x] 4.3 Localize `components/hsk/unit-card.jsx` and `components/hsk/level-card.jsx` labels and action links, verified by checking unit and level pages.
- [x] 4.4 Localize `components/auth/account-form.jsx` labels and input placeholders in Arabic, verified by viewing `/account` in Arabic mode.

## 5. Build & Integration Verification

- [x] 5.1 Run `npm run build` and verify all 229 static and dynamic routes compile with zero errors.
