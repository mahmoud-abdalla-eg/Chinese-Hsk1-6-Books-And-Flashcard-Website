# Proposal

## Why

When users select Arabic (`ar`) as the interface language, key sections of the website remain in English. Specifically, the Homepage hero, live lesson preview card, level scenes/tones, course highlights, study modes, hub page headers (`/conversations`, `/flashcards`, `/grammar`), and unit controls render static English strings. Furthermore, under RTL layout, English and Chinese sentences in the preview card experience bidirectional punctuation flipping (e.g., `? 你今天想学什么` and `.Wo xiang lianxi huihua`). Full Arabic interface parity and correct text rendering are required so Arabic-speaking learners can navigate and learn naturally without broken typography or untranslated content.

## What Changes

- **Integrate Arabic UI Dictionary**: Merge all pre-translated strings from `ui-replacements.js` and missing page keys into `lib/i18n/dictionaries.js` (including homepage hero titles, CTAs, level themes, course highlights, study modes, and hub page banners).
- **Homepage Localization**: Refactor `app/page.js` to render localized hero and preview elements using client language context, ensuring dynamic switching between English and Arabic.
- **Bidirectional Text & Punctuation Isolation**: Wrap Chinese characters and Pinyin in `<bdi dir="ltr">` / `dir="ltr"` containers so trailing punctuation does not jump to the start of lines in RTL view.
- **Live Lesson Preview Parity**: Render native Arabic translations for Teacher and Student dialogues in the homepage preview card (`"ماذا تريد أن تدرس اليوم؟"` and `"أريد التدرب على المحادثة."`) with correct speaker tags (`"المعلم"` and `"الطالب"`).
- **Hub & Level Pages Parity**: Localize static headings, card stats, level themes, and unit batch-size picker controls across `/flashcards`, `/conversations`, `/grammar`, and `/hsk/[level]`.
- **Grammar & Content Example Fallbacks**: Ensure empty Arabic example translations in grammar cards fail gracefully with localized placeholders rather than displaying blank strings or raw English without context.

## Capabilities

### New Capabilities
<!-- None -->

### Modified Capabilities
- `localization`: Expand the interface parity requirement to explicitly cover homepage hero content, live lesson previews, hub page banners, unit customizers, and bidirectional punctuation isolation.

## Impact

- **Affected Code**:
  - `chinese-hsk-website/lib/i18n/dictionaries.js`
  - `chinese-hsk-website/app/page.js`
  - `chinese-hsk-website/components/hsk/level-card.jsx`
  - `chinese-hsk-website/components/hsk/level-units-view.jsx`
  - `chinese-hsk-website/components/hsk/unit-card.jsx`
  - `chinese-hsk-website/components/hsk/unit-hero-card.jsx`
  - `chinese-hsk-website/app/conversations/page.js`
  - `chinese-hsk-website/app/flashcards/page.js`
  - `chinese-hsk-website/app/grammar/page.js`
  - `chinese-hsk-website/app/hsk/[level]/page.js`
  - `chinese-hsk-website/components/grammar/grammar-card.jsx`
- **Dependencies**: No new npm dependencies.
- **Breaking Changes**: None. All changes are backward compatible with English and Chinese locales.
