# Tasks

## 1. Localization & Dictionary Keys

- [x] 1.1 Add dictionary translations in `chinese-hsk-website/lib/i18n/dictionaries.js` for "Learn" (`learn`) and study mode subtitle descriptions across English (`en`), Chinese (`zh`), and Arabic (`ar`), and verify translations load correctly.

## 2. Unified User Account Dropdown Component

- [x] 2.1 Refactor `chinese-hsk-website/components/auth/account-menu.jsx` to replace the dual-button layout with a single user dropdown menu trigger displaying user name, avatar icon, and chevron.
- [x] 2.2 Implement the account dropdown menu card in `account-menu.jsx` featuring learner info (name, email), direct links to `/dashboard` and `/account`, and the styled `Log out` action.
- [x] 2.3 Implement click-outside listener and Escape key dismissal for the account dropdown, ensuring guest state continues to display clean Log in and Sign up buttons.

## 3. Compact Language Switcher

- [x] 3.1 Update `chinese-hsk-website/components/language/language-switcher.jsx` trigger to render a compact badge (`🌐 EN ▾`) under 110px width, verifying dropdown options and RTL positioning work smoothly.

## 4. Header Center Navigation & Learn Dropdown

- [x] 4.1 Implement the `Learn ▾` interactive dropdown in `chinese-hsk-website/components/layout/site-header.jsx` with rich items (Vocabulary, Flashcards, Conversations, Grammar) and active route detection.
- [x] 4.2 Restructure desktop center navigation in `site-header.jsx` to render `[ Dashboard ]` and `[ Learn ▾ ]`, removing the redundant "Home" pill while ensuring the logo links to `/`.
- [x] 4.3 Update responsive navigation breakpoint in `site-header.jsx` from `md` (768px) to `lg` (1024px) to guarantee ample breathing room across viewports.
- [x] 4.4 Update the mobile slide-out drawer in `site-header.jsx` to present the categorized layout (Dashboard, Study modes, HSK levels, and Account actions).

## 5. Verification & Testing

- [x] 5.1 Run `npm --workspace chinese-hsk-website run build` and verify that all static pages and route bundles compile cleanly without type or build errors.
- [x] 5.2 Verify keyboard navigation (`Escape`, Enter), click-outside behavior, and RTL layout parity in both desktop and mobile views.
