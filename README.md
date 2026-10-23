# Mandarin Flow HSK - HSK 1-6 Books and Flashcards

[![License: Source Available - Non-Commercial](https://img.shields.io/badge/License-Source%20Available--Non--Commercial-red.svg)](./LICENSE.md)

A modern, multilingual Chinese learning platform for HSK 1-6 vocabulary, grammar, conversations, interactive flashcards, account-based progress tracking, and admin-managed course content.

The main web application lives in:

```bash
chinese-hsk-website
```

## Features

- **HSK 1-6 Vocabulary**: Comprehensive vocabulary organized by level, unit, and part of speech.
- **Interactive Flashcards**: Spaced study deck with pinyin, audio playback, English and Arabic translations, and shuffle modes.
- **Structured Grammar Paths**: Step-by-step grammar units with authentic examples.
- **Conversational Lessons**: Dialogue-based learning reflecting realistic daily Chinese situations.
- **Word Detail Pages**: Deep dive into individual words with stroke/hanzi displays, audio pronunciation, and example sentences.
- **Learner Dashboard & Progress**: Saved progress, streak tracking, learned words, review history, and level completion analytics.
- **Authentication & Guest Mode**: Dedicated `/login` and `/signup` pages with session-cookie authentication, plus complete guest mode support storing progress locally.
- **Bilingual Interface Parity**: Full native UI support for English and Arabic (RTL alignment).
- **Admin Management Studio (`/adminbase`)**: Administrative control over vocabulary, grammar, dialogues, learners, analytics, imports, and system settings.

## Content Coverage

| Level | Expected words |
| --- | ---: |
| HSK 1 | 349 |
| HSK 2 | 251 |
| HSK 3 | 582 |
| HSK 4 | 1,057 |
| HSK 5 | 1,690 |
| HSK 6 | 1,777 |

Conversation source files currently exist for HSK 1-5. HSK 6 vocabulary data is included, and HSK 6 conversations are in active development.

## Tech Stack

- **Framework**: Next.js `16.2.6` (Turbopack, App Router)
- **UI Library**: React `19.2.4`
- **Database & Auth**: Supabase (`@supabase/supabase-js`)
- **Styling**: Tailwind CSS `4`
- **Code Formatting & Linting**: Biome `2.2.0`
- **Local Fallback Data**: Source JSON datasets in `source-data/`

## Prerequisites

- **Node.js**: `>=22.0.0` (required for Turbopack and `@supabase/supabase-js` compatibility)
- **npm**: `>=10.0.0`

## Getting Started

```bash
# Clone the repository
git clone https://github.com/mahmoud-abdalla-eg/Chinese-Hsk1-6-Books-And-Flashcard-Website.git
cd Chinese-Hsk1-6-Books-And-Flashcard-Website/chinese-hsk-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create `chinese-hsk-website/.env.local`:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"

# Auth Session Encryption Secret (e.g. generated via `openssl rand -hex 32`)
AUTH_SECRET="your-long-random-auth-secret"

# Optional: Azure Speech (for audio synthesis)
AZURE_SPEECH_KEY=""
AZURE_SPEECH_REGION=""
```

> **Note**: If Supabase credentials are not provided, the website runs in **Guest Mode**, allowing learners to study, practice flashcards, and track progress locally in their browser.

## Scripts

Run scripts from the `chinese-hsk-website` directory:

```bash
npm run dev                   # Start development server
npm run build                 # Build optimized production bundle
npm run start                 # Start production server
npm run lint                  # Run Biome code linter
npm run format                # Auto-format codebase with Biome
npm run validate              # Validate HSK JSON data schema
npm run coverage              # Check vocabulary content coverage
npm run seed:supabase         # Seed database from source JSON files
npm run generate-audio        # Batch generate speech synthesis audio
npm run generate-conversations # Generate dialogue scaffolds
```

## Project Structure

```text
chinese-hsk-website/
├── app/                      # Next.js App Router pages and API endpoints
│   ├── account/              # User profile & settings
│   ├── adminbase/            # Admin management portal
│   ├── api/                  # Backend REST APIs (auth, progress, admin)
│   ├── conversations/        # Dialogue learning lessons
│   ├── dashboard/            # Learner progress dashboard
│   ├── flashcards/           # Flashcard study deck
│   ├── grammar/              # Grammar units and learning path
│   ├── hsk/                  # HSK level and unit word views
│   ├── login/                # Dedicated login page
│   └── signup/               # Dedicated registration page
├── components/               # React components (auth, vocabulary, layout, ui)
├── lib/                      # Core utilities (i18n, admin, auth, db, progress)
├── public/                   # Static assets, audio files, icons
├── scripts/                  # Data seeding, validation, and generation tools
└── source-data/              # Local JSON datasets (HSK words, grammar, dialogues)
```

## Contributing

Contributions from developers, Chinese learners, educators, translators, and designers are welcome!

Please read our [**CONTRIBUTING.md**](./CONTRIBUTING.md) for full guidelines on setup, coding standards, translation verification, and pull request workflows.

## Author

Created by [Mahmoud Abdalla](https://github.com/mahmoud-abdalla-eg).

## License

This project is **source available for personal and educational use only**. Commercial use, resale, paid hosting, sublicensing, or selling modified versions is prohibited without prior written permission.

See: [LICENSE.md](./LICENSE.md)
