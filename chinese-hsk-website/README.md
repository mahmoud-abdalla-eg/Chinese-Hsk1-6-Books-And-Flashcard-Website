# Mandarin Flow HSK — Web Application

The core Next.js web application for **Mandarin Flow HSK**, a modern Mandarin learning platform for HSK 1-6 vocabulary, grammar, conversations, interactive flashcards, textbooks & materials, and progress tracking.

Built with Next.js App Router, React, Tailwind CSS 4, Supabase, and local JSON source data. Designed for multilingual learners with native English and Arabic (RTL) support.

---

## Features

- **HSK 1-6 Vocabulary**: Complete word library with customizable 25, 50, and 100-word unit batches.
- **Spaced Flashcards**: Spaced-repetition deck with audio pronunciation, pinyin, and SRS rating system (*Again*, *Hard*, *Good*, *Easy*).
- **Conversation Lessons**: Situational dialogue lessons covering practical, daily-life communication scenarios.
- **Grammar Paths**: Step-by-step grammar units with clear rules and authentic example sentences.
- **Books & Materials Hub**: Standardized HSK 2.0 & 3.0 textbooks, workbooks, and study references.
- **Learner Dashboard**: Cloud & local progress tracking, daily streaks, review history, and weak-word analytics.
- **Multilingual Support**: Complete native English and Arabic interface with automated RTL layout.
- **Mobile-First Design**: Fully responsive down to 360px with slide-out drawer, quick levels, and full auth.

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
