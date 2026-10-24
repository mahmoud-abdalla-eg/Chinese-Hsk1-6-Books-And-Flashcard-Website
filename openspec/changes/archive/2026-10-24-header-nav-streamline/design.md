# Design

## Context
The site header currently renders up to 10 separate pill elements horizontally across the viewport on screens >= 768px (`md`). On medium screens, small laptops, and when displaying longer Arabic translated strings, this causes severe horizontal congestion. The current implementation in `components/layout/site-header.jsx` and `components/auth/account-menu.jsx` separates profile navigation from session termination, while displaying all 4 study modes alongside Home and Dashboard as separate peer buttons.

## Goals / Non-Goals

**Goals:**
- Simplify the center desktop navigation to two focused controls: `[ Dashboard ]` and `[ Learn ▾ ]`.
- Group the 4 study modules (*Vocabulary*, *Flashcards*, *Conversations*, *Grammar*) under an accessible, rich dropdown with icons and explanatory subtitles.
- Consolidate user profile and logout into a single authenticated user dropdown menu (`[ 👤 <name> ▾ ]`).
- Provide a compact language selector trigger (`🌐 EN ▾`) to save horizontal space.
- Shift the desktop header breakpoint from `md` (768px) to `lg` (1024px) so tablets display the slide-out navigation drawer cleanly.
- Maintain full bidirectional (LTR & RTL) compatibility for English, Chinese, and Arabic.

**Non-Goals:**
- No changes to authentication APIs, session cookie mechanics, or database models.
- No changes to page-level content or route structures.

## Decisions

### Decision 1: Lightweight Dropdown Implementation (Zero New Dependencies)
- **Choice**: Implement dropdown state management using standard React state (`useState`, `useRef`), click-outside document event listeners, and `Escape` key handlers.
- **Alternatives Considered**: 
  - *Radix UI / Headless UI*: High-quality accessible primitives, but introduces external dependencies and package bloat into an otherwise lightweight frontend.
  - *HTML `<details>` / `<summary>`*: Native browser support, but styling cross-browser animated dropdowns with keyboard traps and focus management is less flexible than React-controlled state.

### Decision 2: Route-Aware Active Highlighting for "Learn ▾"
- **Choice**: Match current pathname using prefix checks:
  ```javascript
  const isLearnActive =
    pathname?.startsWith("/hsk") ||
    pathname?.startsWith("/flashcards") ||
    pathname?.startsWith("/conversations") ||
    pathname?.startsWith("/grammar");
  ```
- **Rationale**: When a learner studies flashcards or practices conversations, the parent "Learn ▾" pill remains highlighted in teal, signaling context and hierarchy.

### Decision 3: Logo as Primary Home Link
- **Choice**: The existing brand lockup `[汉] Mandarin Flow HSK` links directly to `/`. Remove the redundant "Home" pill from the desktop navigation bar.
- **Rationale**: Standard web convention across modern consumer and SaaS apps. Frees up ~80px of horizontal space.

### Decision 4: Responsive Breakpoint Shift to 1024px (`lg`)
- **Choice**: Use `lg:flex` for the desktop navigation bar and `lg:hidden` for the hamburger menu button.
- **Rationale**: Viewports between 768px and 1023px (tablets in portrait and smaller landscape orientations) do not have enough horizontal margin to comfortably render even a 2-item center nav with full brand subtitles without feeling cramped.

### Decision 5: Logical CSS Properties for Arabic RTL Parity
- **Choice**: Use Tailwind CSS logical properties (`start-0`, `end-0`, `ps-4`, `pe-4`) for dropdown positioning.
- **Rationale**: Dropdowns will anchor to the appropriate visual edge automatically based on `dir="rtl"` without manual conditional branching.

## Risks / Trade-offs

- **[Risk] Discoverability of study modes behind a dropdown**  
  *Mitigation*: The "Learn ▾" pill features a visible chevron down indicator and lights up when active. The dropdown menu includes descriptive subtitles and icons for each mode to guide new learners.
- **[Risk] Accidental closure on mobile or fast clicks**  
  *Mitigation*: Ensure click-outside handlers ignore clicks inside the dropdown container using `ref.current.contains(event.target)`.
- **[Risk] Text overflow for long user names**  
  *Mitigation*: Truncate the user name in the trigger with `max-w-[120px] truncate` and display the full name inside the dropdown header.
