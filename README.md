# Mandarin Flow HSK - HSK 1-6 Platform

[![License: Source Available - Non-Commercial](https://img.shields.io/badge/License-Source%20Available--Non--Commercial-red.svg)](./LICENSE.md)
[![Next.js](https://img.shields.io/badge/Next.js-16.4.3-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-blue?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Database-Supabase-3ecf8e?logo=supabase)](https://supabase.com/)

A modern, mobile-friendly, multilingual Chinese learning platform for HSK 1-6 vocabulary, grammar, realistic dialogues, spaced-repetition flashcards, textbooks & learning materials, learner progress analytics, and admin-managed course content.

The main web application lives in:

```bash
chinese-hsk-website
```

---

## Features

- **HSK 1-6 Vocabulary Library**: Comprehensive vocabulary organized by level, customizable batch sizing (25, 50, or 100 words per unit), part-of-speech categorization, and word detail views.
- **Interactive Flashcards**: Spaced study deck with pinyin, audio pronunciation, English and Arabic translations, horizontal filter rails (All, Hard, Favorites, Unlearned), touch swipe gestures, and SRS review ratings (*Again*, *Hard*, *Good*, *Easy*).
- **Books & Materials Hub (`/books`)**: Curated library of official HSK 2.0 and HSK 3.0 standardized textbooks, workbooks, grammar guides, and vocabulary reference materials with edition filtering and bilingual metadata.
- **Structured Grammar Paths (`/grammar`)**: Level-by-level grammar progression with authentic examples, clear explanations, and targeted exercises.
- **Conversational Lessons (`/conversations`)**: Realistic dialogue-based learning organized around situational daily Chinese scenarios (greetings, dining, travel, shopping, etc.).
- **Word Detail Pages**: Deep dive into individual words with stroke/hanzi displays, audio pronunciation, and example sentences.
- **Learner Dashboard & Progress (`/dashboard`)**: Saved progress, streak tracking, learned words, review history, daily activity heatmaps, weak words, and level completion analytics.
- **Authentication & Guest Mode**: Dedicated `/login` and `/signup` pages with session-cookie authentication, plus complete guest mode support storing progress locally in the browser.
- **Mobile-First Responsive Design**: Optimized for phone viewports (down to 360px), featuring a streamlined top bar, fluid typography, compact surface padding, and a slide-out navigation drawer with quick HSK levels, native language switching, and complete auth actions.
- **Bilingual Interface Parity**: Full native UI support for English and Arabic with automated right-to-left (RTL) layout switching and translated study directions.
- **Contact & Feedback (`/contact`)**: Learner feedback form with topic selection (General, Suggestion, Translation, Bug, Other) and rate-limited backend API.
- **Admin Management Studio (`/adminbase`)**: Comprehensive administrative control over vocabulary, grammar, dialogues, audio records, learners, analytics, imports, and system settings.
- **OWASP 2025 Security Hardening**: Strict Content Security Policy (CSP), HTTP security headers, rate limiting, and Supabase Row-Level Security (RLS) policies.

---

## Design System & Branding

The project features a dedicated design system located in [`design/`](./design):

- **Brand Identity**: Imperial Scarlet Red (`#c92a2a`) seal-inspired Hanzi badge (`[ 汉 ]`) with a celestial gold spark (`#fcc419`) and deep teal accents (`#0f766e`).
- **Brand Assets**: Production-ready vector SVGs for Adobe Illustrator, web logos, app icons, and red favicons (`design/logo/`, `design/favicon/`).
- **Design Tokens**: Standardized color palettes, typography scales, radius, and shadows in [`design/brand-tokens.json`](./design/brand-tokens.json).
- **Brand Guidelines**: Comprehensive styling and typography manual in [`design/BRAND_GUIDELINES.md`](./design/BRAND_GUIDELINES.md).

---

## Content Coverage

| Level | Expected Words | Vocabulary Status | Conversation Lessons |
| :--- | ---: | :---: | :---: |
| **HSK 1** | 349 | Ready | Ready |
| **HSK 2** | 251 | Ready | Ready |
| **HSK 3** | 582 | Ready | Ready |
| **HSK 4** | 1,057 | Ready | Ready |
| **HSK 5** | 1,690 | Ready | Ready |
| **HSK 6** | 1,777 | Ready | In Development |
| **Total** | **5,706** | Complete | Ongoing |

---

## Tech Stack

- **Framework**: Next.js `16.4.3` (Turbopack, App Router)
- **UI Library**: React `19.2.4` (React Compiler enabled)
- **Database & Auth**: Supabase (`@supabase/supabase-js`)
- **Styling**: Tailwind CSS `4`
- **Code Quality**: Biome `2.2.0` (Linting & Formatting)
- **Local Fallback Data**: Source JSON datasets in `source-data/`

---

## Prerequisites

- **Node.js**: `>=20.0.0` (Node 22+ recommended)
- **npm**: `>=10.0.0`

---

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

---

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

---

## Scripts

Run scripts from the `chinese-hsk-website` directory:

```bash
npm run dev                   # Start development server with Turbopack
npm run build                 # Build optimized production bundle
npm run start                 # Start production server
npm run lint                  # Run Biome code linter
npm run format                # Auto-format codebase with Biome
npm run validate              # Validate HSK JSON data schema
npm run coverage              # Check vocabulary content coverage
npm run seed:supabase         # Seed Supabase database from source JSON files
npm run generate-audio        # Batch generate speech synthesis audio
npm run generate-conversations # Generate dialogue scaffolds
```

---

## Project Structure

```text
chinese-hsk-website/
├── app/                      # Next.js App Router pages and API endpoints
│   ├── account/              # User profile & account settings
│   ├── adminbase/            # Admin management portal
│   ├── api/                  # Backend REST APIs (auth, progress, contact, admin)
│   ├── books/                # HSK 2.0 & 3.0 textbooks and materials hub
│   ├── contact/              # Learner feedback and inquiry form
│   ├── conversations/        # Dialogue learning lessons
│   ├── dashboard/            # Learner progress dashboard
│   ├── flashcards/           # Interactive flashcard study deck
│   ├── grammar/              # Grammar units and learning path
│   ├── hsk/                  # HSK level and unit word views
│   ├── login/                # Dedicated login page
│   └── signup/               # Dedicated registration page
├── components/               # React components (auth, audio, vocabulary, layout, ui)
├── lib/                      # Core utilities (i18n, admin, auth, db, progress)
├── public/                   # Static assets, branding logo, audio files, icons
├── scripts/                  # Data seeding, validation, and generation tools
└── source-data/              # Local JSON datasets (HSK words, grammar, dialogues)

design/                       # Branding & Design System
├── BRAND_GUIDELINES.md       # Color palettes, typography, and logo usage rules
├── brand-tokens.json         # Design token definitions
├── logo/                     # SVG master logo files for Illustrator & web
└── favicon/                  # Vector favicon concepts and exports
```

---

## Contributing

Contributions from developers, Chinese learners, educators, translators, and designers are welcome!

Please read our [**CONTRIBUTING.md**](./CONTRIBUTING.md) for full guidelines on setup, coding standards, translation verification, and pull request workflows.

---

## Author

Created by [Mahmoud Abdalla](https://github.com/mahmoud-abdalla-eg).

---

## License

This project is **source available for personal and educational use only**. Commercial use, resale, paid hosting, sublicensing, or selling modified versions is prohibited without prior written permission.

See: [LICENSE.md](./LICENSE.md)
