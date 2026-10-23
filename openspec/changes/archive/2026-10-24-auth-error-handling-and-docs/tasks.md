# Tasks

## 1. Backend Auth Error Sanitization & Environment Resiliency

- [x] 1.1 Support alternative Supabase secret key environment variables (`SUPABASE_SERVICE_ROLE_KEY`, `SUPABASE_SECRET_KEY`, `SUPABASE_SERVICE_KEY`) in `chinese-hsk-website/lib/db/supabase.js` and verify resolution
- [x] 1.2 Implement error sanitization in `chinese-hsk-website/app/api/auth/register/route.js` so internal infrastructure exceptions log to `console.error` and return user-friendly messages
- [x] 1.3 Implement error sanitization in `chinese-hsk-website/app/api/auth/login/route.js` ensuring database connection errors do not expose internal configurations
- [x] 1.4 Add localized error dictionary entries in `chinese-hsk-website/lib/i18n/dictionaries.js` for account service unavailability across English, Arabic, and Chinese

## 2. Guest Mode Modal Navigation & Study Continuation

- [x] 2.1 Refactor `LoginPromptModal` in `chinese-hsk-website/components/auth/login-prompt-modal.jsx` to use programmatic navigation (`router.push`) with redirect preservation and prevent unmount click cancellation
- [x] 2.2 Update `chinese-hsk-website/lib/progress/use-progress.js` to enable local storage persistence for guest sessions under `mandarin-flow-guest-session`
- [x] 2.3 Verify guest study actions in `WordStudyPanel`, `CompletionToggle`, and `flashcard-deck` successfully record progress locally when continuing as guest

## 3. Documentation Overhaul

- [x] 3.1 Rewrite `README.md` with accurate Supabase configuration, Node.js `>=22.0.0` requirement, updated tech stack, and current HSK 1–6 metrics
- [x] 3.2 Author `CONTRIBUTING.md` detailing repository organization, local prerequisites, Biome linting/formatting commands, data validation scripts, and PR standards

## 4. Verification

- [x] 4.1 Execute `npm run build` in `chinese-hsk-website` and verify that all static and dynamic pages build cleanly without error
