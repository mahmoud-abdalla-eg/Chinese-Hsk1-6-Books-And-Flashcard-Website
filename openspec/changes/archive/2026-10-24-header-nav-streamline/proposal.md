# Proposal

## Why
The current desktop navigation bar is overly crowded, displaying up to 10 distinct pill buttons horizontally (Brand, Home, Vocabulary, Flashcards, Conversations, Grammar, Dashboard, Language Switcher, User Link, Log Out). On medium viewports, tablets, and localized views (such as Arabic), this causes extreme visual crowding, awkward wrapping, and layout tension. 

Streamlining the navigation into a primary **Dashboard** link, a unified **Learn ▾** dropdown for the 4 core study modes, a compact language picker, and a consolidated **User Account ▾** dropdown cleans up horizontal space, improves visual hierarchy, and creates a modern, premium learning experience.

## What Changes
- **Logo as Home**: Remove the redundant "Home" center pill; clicking the brand logo `[汉] Mandarin Flow HSK` serves as the primary home navigation.
- **Center Navigation Streamlining**:
  - Place **Dashboard** as the first prominent item in the center navigation for quick 1-click access to learner stats.
  - Introduce a **Learn ▾** dropdown menu grouping the four primary study modes (*Vocabulary*, *Flashcards*, *Conversations*, and *Grammar*) with descriptive subtitles.
  - Add active state highlighting to **Learn ▾** whenever the learner is on any sub-route (`/hsk/*`, `/flashcards/*`, `/conversations/*`, `/grammar/*`).
- **Unified User Dropdown Menu**:
  - Replace the separate standalone `[👤 user.name]` link and `[Log out]` button with a single `AccountMenu` dropdown.
  - The dropdown reveals the learner's name, email, direct links to **Account Settings** and **Dashboard**, and the **Log out** action.
  - For guests, keep clear, uncluttered `[ Log in ]` and `[ Sign up ]` action buttons.
- **Compact Language Switcher**:
  - Tighten the language picker trigger from a wide text pill (`min-w-36`) to a clean, compact badge (`🌐 EN ▾`).
- **Responsive Breakpoint & Mobile Drawer Alignment**:
  - Adjust the desktop navigation trigger to `lg` (1024px) so tablets smoothly transition to the slide-out navigation drawer without squeezing header pills.
  - Update the mobile slide-out drawer to reflect the new categorized hierarchy (*Dashboard*, *Learn Modes*, *HSK Levels*, and *Account Actions*).
- **Accessibility & Escape/Click-Outside**:
  - Ensure all dropdowns close gracefully when clicking outside or pressing the `Escape` key, with full ARIA expanded states and keyboard support.
  - Preserve full RTL alignment when Arabic language is active.

## Capabilities

### New Capabilities
- `header-navigation`: Streamlined top header navigation featuring a Dashboard link, Learn study modes dropdown, compact language selector, and unified user account menu.

### Modified Capabilities
- `mobile-navigation`: Update viewport breakpoint to `lg` (1024px) and harmonize drawer structure with the streamlined site navigation categories.

## Impact
- **Modified Components**:
  - `components/layout/site-header.jsx` (layout, Learn dropdown, drawer reorganization, breakpoint update)
  - `components/auth/account-menu.jsx` (conversion from dual-pill buttons to unified dropdown)
  - `components/language/language-switcher.jsx` (compact button styling option)
- **Localization**:
  - Add dictionary keys in `lib/i18n/dictionaries.js` for "Learn" (`learn`), study mode descriptions, and account dropdown items across `en`, `zh`, and `ar`.
- **Zero Breaking API Changes**: Fully frontend presentation and layout enhancement.
