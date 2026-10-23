# Proposal: i18n Single Meaning and Arabic Parity

## Why

Currently, vocabulary tables, word detail pages, conversation dialogues, and grammar cards render both English and Arabic translations simultaneously stacked together. This creates visual clutter and disrupts study flow. Furthermore, numerous interactive UI elements (table headers, learn/learned buttons, search placeholders, card labels, and account fields) remain hardcoded in English, leaving Arabic learners with an incomplete and inconsistent localized experience.

## What Changes

- **Single Meaning Selection**: Update all vocabulary and study displays to render only the translation matching the active site language (`en` or `ar`), with graceful fallback when a translation is missing, eliminating stacked bilingual text.
- **Vocabulary Table Internationalization**: Localize all table column headers (`#`, `Chinese`, `Meaning`, `Actions`, `Audio`), quick action buttons (`+ Learn`, `✓ Learned`, favorites tooltips), and search bar placeholders.
- **Word Detail & Interactive Study Panels**: Provide reactive single-language meaning and example sentence rendering on word detail pages, with localized section headers and action buttons.
- **Conversation & Grammar Alignment**: Display dialogue translations and grammar example translations in only the active site language, and localize lesson fallback placeholders.
- **Arabic Static Text Parity**: Expand `lib/i18n/dictionaries.js` with complete English and Arabic translations for cards, units, progress actions, and account forms.

## Capabilities

### New Capabilities
- `localization`: Governs active language resolution, dynamic single-language meaning/example presentation, and comprehensive static translation parity across English and Arabic interfaces.

### Modified Capabilities
<!-- None -->

## Impact

- `lib/i18n/dictionaries.js`: Added dictionary keys for vocabulary table, study panels, unit cards, lesson scaffolds, and account views; added `getLocalizedMeaning` and `getLocalizedExample` helper functions.
- `components/vocabulary/vocabulary-list.jsx`: Refactored meaning column and headers to use dynamic localization.
- `app/hsk/[level]/word/[wordId]/page.js`: Updated to render localized single meaning and example sentences according to site language.
- `components/vocabulary/word-study-panel.jsx`: Localized favorite, learned, and audio action labels.
- `components/conversations/conversation-lesson.jsx`: Dialogue line translations rendered dynamically according to active language.
- `components/grammar/grammar-card.jsx`: Example translations aligned to active language.
- `components/hsk/unit-card.jsx` & `components/hsk/level-card.jsx`: Localized cards and action links.
- `components/auth/account-form.jsx`: Localized account creation and login forms.
