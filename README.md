# Mandarin Flow HSK - HSK 1-6 Books and Flashcards

[![License: Source Available - Non-Commercial](https://img.shields.io/badge/License-Source%20Available--Non--Commercial-red.svg)](./LICENSE.md)

A multilingual Chinese learning website for HSK 1-6 vocabulary, grammar, conversations, flashcards, account-based progress tracking, and admin-managed course content.

The main app lives in:

```bash
chinese-hsk-website
```

## Live Demo

[Open the website](https://chinese-hsk-flashcards.netlify.app/)

## Features

- HSK 1-6 vocabulary organized by level and unit.
- Flashcards with Chinese, pinyin, English, and Arabic.
- Grammar learning path with short HSK units.
- Conversation-based learning with realistic daily situations.
- Word detail pages with examples, audio placeholders, favorites, and learned-word tracking.
- Learner dashboard with saved progress, weak words, hard words, review history, daily activity, and level completion.
- Secure account system with HTTP-only sessions.
- Per-user study data stored in MongoDB.
- Account profile page with progress summary and password change.
- Admin tools for words, grammar, conversations, audio records, learners, analytics, imports, settings, and content checks.
- MongoDB-backed course overrides with JSON fallback data.
- English and Arabic learner-facing UI support.

## Content Coverage

| Level | Expected words |
| --- | ---: |
| HSK 1 | 349 |
| HSK 2 | 251 |
| HSK 3 | 582 |
| HSK 4 | 1,057 |
| HSK 5 | 1,690 |
| HSK 6 | 1,777 |

Conversation source files currently exist for HSK 1-5. HSK 6 vocabulary data is included, and HSK 6 conversations are one of the next major content tasks.

## Tech Stack

- Next.js `16.2.6`
- React `19.2.4`
- MongoDB
- Tailwind CSS `4`
- Biome
- Local JSON source data

## Getting Started

```bash
git clone https://github.com/mahmoud-abdalla-eg/Chinese-Hsk1-6-Books-And-Flashcard-Website.git
cd Chinese-Hsk1-6-Books-And-Flashcard-Website/chinese-hsk-website
npm install
npm run dev
```

Open:

```bash
http://localhost:3000
```

## Environment Variables

Create `chinese-hsk-website/.env.local`:

```env
MONGODB_URI="mongodb+srv://USER:PASSWORD@CLUSTER.mongodb.net/?retryWrites=true&w=majority"
MONGODB_DB="mandarin_flow_hsk"
AUTH_SECRET="replace-with-a-long-random-secret"
```

Optional audio generation variables:

```env
AZURE_SPEECH_KEY=""
AZURE_SPEECH_REGION=""
```

## Scripts

Run scripts from the `chinese-hsk-website` folder:

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run format
npm run validate
npm run coverage
npm run generate-audio
npm run generate-conversations
```

## Project Structure

```text
chinese-hsk-website/
├── app/
├── components/
├── lib/
├── public/
├── scripts/
└── source-data/
```

## Contributing

Contributions are welcome. This project needs help from developers, Chinese learners, teachers, translators, designers, and people who can carefully test the lessons.

### How to Start

1. Fork the repository.
2. Create a branch with a clear name, for example `fix-hsk4-examples` or `add-hsk6-conversations`.
3. Go into `chinese-hsk-website`, then run `npm install` and `npm run dev`.
4. Pick one small task from the lists below.
5. Run the relevant checks before opening a pull request.
6. Explain what changed, what you tested, and whether any content still needs review.

### Good First Tasks

- Review HSK word translations and report incorrect English or Arabic meanings.
- Add missing pinyin for example sentences.
- Check generated Arabic translations and mark awkward or wrong sentences.
- Improve empty states, loading states, and mobile layout issues.
- Test account login, logout, password change, and progress syncing.
- Test flashcards across HSK levels and report broken words, missing examples, or confusing labels.
- Check admin pages for forms that are hard to use or missing validation.
- Improve README sections, setup notes, screenshots, and contributor documentation.

### What Needs to Be Built Next

- HSK 6 conversation units.
- More reviewed example sentences for words that only have generated placeholders.
- Audio file generation and matching for word and sentence playback.
- Better admin import review tools for bulk vocabulary and grammar updates.
- More complete Arabic UI and content review.
- Better dashboard insights for long-term spaced repetition.
- Teacher-friendly review queues for content that needs human checking.
- Automated tests for auth, progress sync, flashcards, and admin CRUD flows.
- Accessibility checks for keyboard navigation, color contrast, and screen readers.

### What Needs Fixing or Checking

- Verify all HSK 1-6 words have correct simplified Chinese, traditional Chinese, pinyin, English meaning, Arabic meaning, and part of speech.
- Check all generated examples before treating them as final learning content.
- Confirm HSK unit ordering stays stable after imports.
- Make sure each user only sees and edits their own study data.
- Check that public pages stay fast after new content is added.
- Confirm MongoDB indexes exist in production.
- Review admin permissions before exposing admin tools publicly.
- Test the site on mobile widths, especially flashcards, account pages, dashboards, and admin tables.
- Check that missing audio does not break study pages.
- Keep `.env.local` and secrets out of commits.

### Content Review Guidelines

When reviewing vocabulary, prefer accuracy over speed. For each word, check:

- Chinese characters are correct.
- Pinyin tones are correct.
- English meaning is natural and not too broad.
- Arabic meaning is natural and appropriate for the HSK context.
- Example sentence uses the target word correctly.
- Example translation matches the Chinese sentence.
- The word belongs to the listed HSK level.

If you are not sure about a translation, leave a note in the pull request instead of guessing silently.

### Pull Request Checklist

Before opening a pull request, try to run:

```bash
npm run lint
npm run validate
npm run coverage
```

For code changes, also test the affected page manually. Useful pages to check:

```text
/
/hsk/1
/hsk/1/unit/1
/flashcards
/flashcards/hsk/1
/grammar
/conversations
/dashboard
/account
/adminbase
```

If one of the checks fails because of an unrelated existing issue, mention that clearly in the pull request.

### Pull Request Notes

Please include:

- What you changed.
- Why the change is needed.
- Screenshots for UI changes.
- What you tested.
- Any content that still needs human review.

## Roadmap

- Finish HSK 6 conversations.
- Add more reviewed audio.
- Improve spaced repetition.
- Add more automated tests.
- Improve admin review workflows.
- Continue content QA for English, Arabic, pinyin, and examples.

## Author

Created by [Mahmoud Abdalla](https://github.com/mahmoud-abdalla-eg).

## License

This project is **source available for personal and educational use only**.

Commercial use, resale, paid hosting, sublicensing, or selling modified versions is not allowed without written permission.

See: [LICENSE.md](./LICENSE.md)
