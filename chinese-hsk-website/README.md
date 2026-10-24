# Mandarin Flow HSK — Web Application

The core Next.js web application for **Mandarin Flow HSK**, a modern Mandarin learning platform for HSK 1-6 vocabulary, grammar, conversations, interactive flashcards, textbooks & materials, and progress tracking.

Built with Next.js App Router, React, Tailwind CSS 4, Supabase, and local JSON source data. Designed for multilingual learners with native English and Arabic (RTL) support.

---

## Features

- **HSK 1-6 Vocabulary**: Unit-based study paths with customizable batch sizing (25, 50, 100 words).
- **Interactive Flashcards**: Spaced-repetition study deck with pinyin, audio pronunciation, English and Arabic translations, touch swipe gestures, and SRS review ratings (*Again*, *Hard*, *Good*, *Easy*).
- **Books & Materials Hub (`/books`)**: Curated library of official HSK 2.0 and HSK 3.0 standardized textbooks, workbooks, grammar guides, and vocabulary reference materials.
- **Word Detail Pages**: Deep dive into individual words with stroke/hanzi displays, audio pronunciation, and example sentences.
- **Grammar Paths (`/grammar`)**: Level-by-level progression with authentic examples and explanations.
- **Conversation Lessons (`/conversations`)**: Realistic dialogue-based learning organized around situational daily Chinese scenarios.
- **Learner Dashboard (`/dashboard`)**: Saved progress, streak tracking, learned words, review history, weak words, and level completion analytics.
- **Authentication & Guest Mode**: Dedicated `/login` and `/signup` pages with session-cookie authentication, plus complete local guest mode.
- **Mobile-First Responsive Design**: Fluid typography, compact surfaces, and a slide-out navigation drawer with quick HSK levels, native language switching, and complete auth actions.
- **Bilingual Interface Parity**: Full native UI support for English and Arabic with automated RTL alignment.
- **Contact & Feedback (`/contact`)**: Form with topic categorization and rate-limited backend API.
- **Admin Studio (`/adminbase`)**: Administrative control over vocabulary, grammar, dialogues, audio records, learners, analytics, imports, and system settings.
- **OWASP 2025 Security**: Content Security Policy (CSP), HTTP security headers, rate limiting, and Supabase Row-Level Security (RLS).

---

## Tech Stack

- **Framework**: Next.js `16.4.3` (Turbopack, App Router)
- **UI Library**: React `19.2.4` (React Compiler enabled)
- **Database & Auth**: Supabase (`@supabase/supabase-js`)
- **Styling**: Tailwind CSS `4`
- **Code Quality**: Biome `2.2.0` (Linting & Formatting)

---

## Project Structure

```text
app/                         Next.js App Router pages and API routes
├── account/                 User profile & account settings
├── adminbase/               Admin management portal
├── api/                     Backend REST APIs (auth, progress, contact, admin)
├── books/                   HSK 2.0 & 3.0 textbooks and materials hub
├── contact/                 Learner feedback and inquiry form
├── conversations/           Dialogue learning lessons
├── dashboard/               Learner progress dashboard
├── flashcards/              Interactive flashcard study deck
├── grammar/                 Grammar units and learning path
├── hsk/                     HSK level and unit word views
├── login/                   Dedicated login page
└── signup/                  Dedicated registration page
components/                  UI, layout, auth, dashboard, HSK, grammar, admin components
lib/admin/                   Supabase-backed course/admin data access
lib/auth/                    User/admin auth, password hashing, signed sessions
lib/data/                    Static JSON-backed course readers and schemas
lib/db/                      Supabase client and indexes
lib/progress/                Progress model, local sync hook, user progress persistence
lib/i18n/                    UI dictionaries and language helpers
public/                      Static assets, branding logo, audio files, icons
source-data/                 Local JSON datasets (HSK words, grammar, dialogues)
scripts/                     Import, validation, generation, and coverage tools
```

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create `.env.local` in this directory:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"

# Auth Session Encryption Secret
AUTH_SECRET="your-long-random-auth-secret"

# Optional: Azure Speech (for audio synthesis)
AZURE_SPEECH_KEY=""
AZURE_SPEECH_REGION=""
```

> If Supabase credentials are not provided, the website runs automatically in **Guest Mode**, saving progress locally in the browser.

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Build for production

```bash
npm run build
npm run start
```

---

## Available Scripts

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
