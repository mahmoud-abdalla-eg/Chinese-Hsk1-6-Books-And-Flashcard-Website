# Contributing to Mandarin Flow HSK

Thank you for your interest in contributing to Mandarin Flow! This project is dedicated to providing an accessible, ad-free, high-quality multilingual Chinese learning platform for HSK 1–6.

We welcome contributions from developers, Chinese teachers, native Arabic & English speakers, language learners, and UI/UX designers.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can You Help?](#how-can-you-help)
- [Prerequisites](#prerequisites)
- [Local Development Setup](#local-development-setup)
- [Development Standards & Tooling](#development-standards--tooling)
- [Content & Translation Guidelines](#content--translation-guidelines)
- [Pull Request Workflow](#pull-request-workflow)

---

## Code of Conduct

Please help maintain a welcoming, respectful, and inclusive community. Be kind, constructive, and supportive in discussions, code reviews, and issue reports.

---

## How Can You Help?

1. **Vocabulary & Example Review**: Check translations, verify pinyin tones, ensure natural English and Arabic phrasings, and report inaccurate definitions.
2. **Conversation Lessons**: Help author or proofread realistic dialogue lessons for HSK 5 and HSK 6.
3. **Accessibility & Responsive Design**: Test layout, touch targets, and color contrast on desktop, tablet, and mobile browsers.
4. **Bug Reports & Feature Requests**: Open an issue detailing unexpected behavior, error messages, or suggestions for better study workflows.
5. **Code Contributions**: Implement features, improve performance, optimize build pipelines, and write automated tests.

---

## Prerequisites

- **Node.js**: `>=22.0.0` (required for Turbopack and `@supabase/supabase-js` compatibility)
- **npm**: `>=10.0.0`
- **Git**: For version control

---

## Local Development Setup

1. **Fork and clone the repository:**
   ```bash
   git clone https://github.com/your-username/Chinese-Hsk1-6-Books-And-Flashcard-Website.git
   cd Chinese-Hsk1-6-Books-And-Flashcard-Website/chinese-hsk-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up local environment variables:**
   Copy or create `.env.local` inside `chinese-hsk-website/`:
   ```env
   # Supabase Configuration (Optional for guest development)
   NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
   NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"
   SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"

   # Auth session encryption secret
   AUTH_SECRET="development-secret-key-at-least-32-chars"
   ```

   > **Tip**: You do not need a live Supabase account to work on frontend components or content. Without Supabase credentials, the site automatically boots in **Guest Mode** with local JSON data and client-side progress caching.

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## Development Standards & Tooling

We use **Biome** for fast code linting and formatting. Please run checks before committing:

- **Check for lint errors:**
  ```bash
  npm run lint
  ```
- **Automatically format code:**
  ```bash
  npm run format
  ```
- **Validate HSK data schema:**
  ```bash
  npm run validate
  ```
- **Check vocabulary content coverage:**
  ```bash
  npm run coverage
  ```
- **Verify production build:**
  ```bash
  npm run build
  ```

---

## Content & Translation Guidelines

When submitting or updating vocabulary, examples, or grammar:

- **Simplified and Traditional Hanzi**: Ensure character accuracy.
- **Pinyin Tones**: Use tone marks correctly (`míngtiān`, `nǐ hǎo`) rather than numbers.
- **Single-Meaning Display**: Each language string (`en` and `ar`) must contain only that target language. Do not stack English inside the Arabic field or vice-versa.
- **Arabic Localization**:
  - Use standard modern Arabic (*Fus-ha*).
  - Ensure correct directionality (`dir="rtl"`) for Arabic strings and components.
  - Keep meanings concise and context-appropriate for the HSK level.
- **Machine-Generated Content**: Any content produced by AI or machine translation must be reviewed by a human and tagged with review notes if unverified.

---

## Pull Request Workflow

1. **Create a descriptive feature branch:**
   ```bash
   git checkout -b fix-login-redirect
   # or
   git checkout -b content-hsk3-arabic-review
   ```

2. **Make your changes**: Keep commits focused and atomic. Follow conventional commit messages:
   - `fix(auth): ...`
   - `feat(flashcards): ...`
   - `docs(readme): ...`
   - `content(hsk4): ...`

3. **Run validation checks:**
   ```bash
   npm run lint
   npm run validate
   npm run build
   ```

4. **Submit your Pull Request:**
   - Clearly describe what changed and why.
   - Include before/after screenshots for visual UI updates.
   - Note any translations that require native-speaker review.

Thank you for helping make Mandarin Flow better for Chinese learners worldwide!
