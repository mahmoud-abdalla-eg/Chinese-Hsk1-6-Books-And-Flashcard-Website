# Chinese HSK 1-6 Books and Flashcard Website

A full-stack Mandarin learning web app for HSK 1-6 vocabulary, grammar, conversations, flashcards, progress tracking, and admin-managed course content.

The app is built with Next.js App Router, React, Tailwind CSS, MongoDB, and local JSON source data. It is designed for multilingual learners and currently supports English and Arabic UI flows, with Chinese learning content throughout.

## Features

- HSK 1-6 vocabulary library with unit-based study paths.
- Flashcard practice with review quality tracking: Again, Hard, Good, Easy.
- Word detail pages with pinyin, meanings, example sentences, audio placeholders, favorites, and learned-word tracking.
- Grammar path organized by HSK level and short grammar units.
- Conversation lessons for HSK 1-5 source units.
- Learner dashboard with saved progress, weak words, hard words, review history, daily activity, and level completion.
- Account system with secure HTTP-only sessions.
- Per-user study data stored in MongoDB and separated by logged-in account.
- Account profile page with saved study snapshot and password change.
- Admin base for words, grammar, grammar units, conversations, audio records, learners, analytics, site content, settings, imports, and data checks.
- MongoDB-backed course overrides with JSON fallback data.
- Public learner routes optimized with short revalidation, cached reads, and loading states.

## Tech Stack

- Next.js `16.2.6`
- React `19.2.4`
- MongoDB Node driver `7.2.0`
- Tailwind CSS `4`
- Biome `2.2.0`
- React Compiler enabled

## Project Structure

```text
app/                         Next.js App Router pages and API routes
components/                  UI, layout, auth, dashboard, HSK, grammar, admin components
lib/admin/                   MongoDB-backed course/admin data access
lib/auth/                    User/admin auth, password hashing, signed sessions
lib/data/                    Static JSON-backed course readers and schemas
lib/db/                      MongoDB client and indexes
lib/progress/                Progress model, local sync hook, user progress persistence
lib/i18n/                    UI dictionaries and language helpers
source-data/hsk/             HSK 1-6 vocabulary JSON
source-data/grammar/         Grammar learning path JSON
source-data/conversations/   HSK conversation unit JSON
scripts/                     Import, validation, generation, and coverage tools
```

## HSK Coverage

The source schema defines these expected word counts:

| Level | Expected words |
| --- | ---: |
| HSK 1 | 349 |
| HSK 2 | 251 |
| HSK 3 | 582 |
| HSK 4 | 1,057 |
| HSK 5 | 1,690 |
| HSK 6 | 1,777 |

Conversation source files currently exist for HSK 1-5. HSK 6 vocabulary data is included.

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create `.env.local` in the project root:

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

`AUTH_SECRET` signs user and admin session cookies. Use a strong secret in production. If it is missing, the app falls back to `MONGODB_URI` for signing, but a dedicated secret is recommended.

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Build for production

```bash
npm run build
npm run start
```

## Scripts

```bash
npm run dev                     Start local development server
npm run build                   Create production build
npm run start                   Start production server
npm run lint                    Run Biome checks
npm run format                  Format files with Biome
npm run validate                Validate HSK source data
npm run coverage                Check content coverage
npm run generate-audio          Run audio generation script
npm run generate-conversations  Generate conversation content
```

## Authentication and User Data

The app uses custom email/password authentication:

- Passwords are hashed with Node `scrypt`.
- Sessions are signed and stored in HTTP-only cookies.
- User progress API access requires a valid logged-in session.
- Each MongoDB progress record is keyed by the authenticated user ID.
- Browser-side progress cache is also separated by account, so multiple users on one browser do not share study data.

Learner progress includes:

- learned words
- favorites
- hard words
- review history
- completed units
- completed conversations
- per-word review stats
- last studied date

## Admin Area

Admin pages live under:

```text
/adminbase
```

The admin area manages:

- course words
- grammar cards
- grammar unit grouping
- conversation lessons
- audio records
- learners
- imports
- analytics
- site content
- settings
- data coverage checks

Admin users are stored in MongoDB. The authentication helpers are in `lib/auth/admins.js` and `lib/auth/admin-session.js`.

## Data Model Notes

Public course pages read from MongoDB-managed collections first and fall back to `source-data` JSON if MongoDB is unavailable.

Important collections:

```text
users
admins
user_progress
course_words
course_grammar
course_grammar_units
course_conversations
course_data_state
site_content
```

MongoDB indexes are warmed from `lib/db/mongodb.js` for common lookup paths such as user email, user progress owner, course word level/order, and site content keys.

## Performance Notes

The learner-facing pages are optimized for faster navigation:

- Public HSK, grammar, flashcard, conversation, and homepage routes use revalidation.
- Dynamic route groups include loading shells for faster perceived transitions.
- Public course reads use cached data access.
- HSK summaries count documents instead of loading full word records.
- Account progress matching loads word IDs instead of full word payloads.

Admin and account/API routes remain dynamic because they depend on current user/session or live editing state.

## Contributing

Contributions are welcome. This project needs help from developers, Chinese learners, teachers, translators, designers, and people who can carefully test the lessons.

### How to Start

1. Fork the repository.
2. Create a branch with a clear name, for example `fix-hsk4-examples` or `add-hsk6-conversations`.
3. Run the app locally with `npm install` and `npm run dev`.
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

## Deployment

This project can be deployed to any platform that supports Next.js and MongoDB connectivity.

Required production environment variables:

```env
MONGODB_URI=""
MONGODB_DB="mandarin_flow_hsk"
AUTH_SECRET=""
```

Recommended deployment checklist:

1. Set all environment variables.
2. Confirm MongoDB network access from the hosting platform.
3. Run `npm run lint`.
4. Run `npm run build`.
5. Create at least one admin user in MongoDB or through your chosen seed/import flow.
6. Verify `/account`, `/dashboard`, `/adminbase`, and public HSK routes.

## Repository

GitHub:

[mahmoud-abdalla-eg/Chinese-Hsk1-6-Books-And-Flashcard-Website](https://github.com/mahmoud-abdalla-eg/Chinese-Hsk1-6-Books-And-Flashcard-Website)
