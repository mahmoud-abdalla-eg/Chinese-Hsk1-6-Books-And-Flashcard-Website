# Design

## Context

The Mandarin Flow HSK frontend is built using Next.js 15 (App Router) and Tailwind CSS. The desktop and tablet experiences are spacious and well-proportioned, but several components currently use rigid breakpoint assumptions (such as `text-5xl` headings, unconstrained horizontal flex rows, and `p-7` surface padding) that cause horizontal scrolling and cut off text/buttons on mobile phones with viewports between 360px and 390px. See `proposal.md` for background and user screenshots.

## Goals / Non-Goals

**Goals:**
- Eliminate horizontal document overflow on phone viewports (>= 320px).
- Ensure all navigation buttons, brand headings, and interactive controls fit comfortably within the mobile viewport without clipping.
- Scale typography responsively using fluid Tailwind clamps (`text-3xl sm:text-5xl lg:text-7xl` with `break-words`).
- Transform the unit batch selector into a full-width segmented control on mobile.
- Make flashcard controls swipeable horizontally rather than stacking in 3–4 vertical rows.

**Non-Goals:**
- Redesigning the desktop navigation or tablet layout.
- Modifying course content, audio files, Supabase data models, or backend APIs.
- Re-architecting state management or progress tracking hooks.

## Decisions

### 1. Mobile Header Right-Control Streamlining
- **Decision**: On mobile screens (`< sm:` / `< 640px`), streamline the top bar's right-hand controls to a single compact User/Login action and compact language trigger, keeping the brand title and logo mark visible without overflow.
- **Rationale**: The slide-out hamburger drawer already contains full language selection and complete Login / Sign Up options. Jamming four independent buttons (`Language + Login + Signup + Drawer`) into a 360px bar causes a 54px overflow and clips the Sign Up button.
- **Alternative Considered**: Hiding the brand title entirely on mobile. Rejected because brand presence and site recognition are important on mobile landings.

### 2. Fluid Hero Typography Scaling
- **Decision**: Replace `text-5xl font-black` across `HskLevelView`, `DashboardClient`, and `HomeHeroSection` with `text-3xl sm:text-5xl lg:text-7xl font-black break-words tracking-tight`.
- **Rationale**: A 48px font size (`text-5xl`) renders words like "conversations" at >380px width, instantly breaking small screen boundaries. `text-3xl` (30px) provides bold visual hierarchy while fitting comfortably within 320px–390px viewports.
- **Alternative Considered**: Using CSS `clamp()`. Tailwind utility classes (`text-3xl sm:text-5xl`) are more consistent with the project's styling conventions and compiler.

### 3. Surface Mobile Padding Reduction
- **Decision**: Update `Surface` usage in hero banners from `p-7` (28px) down to `p-4 sm:p-7 lg:p-10`.
- **Rationale**: Reclaims 24px of horizontal space on narrow screens, giving cards and headings room to breathe without touching the screen edges.

### 4. Segmented Control for Unit Batch Sizing
- **Decision**: In `LevelUnitsView`, format the batch size selector as a clean `grid grid-cols-3 gap-1.5` on mobile screens, transitioning to inline flex on desktop (`sm:flex sm:items-center`).
- **Rationale**: Guarantees equal 33% distribution across all three options (50, 25, 100 words) without awkward wrapping or right-edge clipping.

### 5. Horizontal Pill Rail for Flashcards
- **Decision**: In `FlashcardDeck`, wrap filter buttons (All, Hard, Favorites, Unlearned) in a horizontally scrollable container with `-webkit-overflow-scrolling: touch` and hidden scrollbars (`no-scrollbar`).
- **Rationale**: Keeps the deck controls accessible in a single thumb-scrollable row, preventing the flashcard itself from being pushed below the mobile viewport fold.

## Risks / Trade-offs

- **[Risk]** Primary Sign Up button is no longer a prominent green pill on the top mobile navbar.
  - **Mitigation**: The hamburger drawer prominently displays Sign Up as a primary action; furthermore, level hero banners and guest prompts on the page provide direct signup CTA buttons.
- **[Risk]** Smaller hero text on mobile might feel less dramatic than desktop.
  - **Mitigation**: `text-3xl` with `font-black` (900 weight) preserves maximum visual impact and energy while remaining fully legible on phone screens.
