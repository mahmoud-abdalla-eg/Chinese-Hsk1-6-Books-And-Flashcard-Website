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
