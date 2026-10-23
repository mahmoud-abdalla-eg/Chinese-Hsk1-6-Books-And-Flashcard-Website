# Technical Design: Footer Author Attribution, Suggestions, and Support

## Context

See `proposal.md` for motivation. Currently, `SiteFooter` in `chinese-hsk-website/components/layout/site-footer.jsx` renders a 3-column grid (`md:grid-cols-[1.2fr_0.8fr_0.8fr]`) that leaves open space on desktop viewports. The application uses client-side language switching (`useLanguage` hook and `tr(...)` helper from `components/language/language-provider`) supporting English, Chinese, and Arabic (with RTL text flow).

## Goals / Non-Goals

**Goals:**
- Implement the requested Option 3 layout: 4 columns in the upper footer, plus a clean sub-footer credits bar separated by a light border.
- Provide direct `mailto:` actions for both supporting the project and sending suggestions/issues to `mahmouddesign01@gmail.com`.
- Provide an external link to Mahmoud Abdalla's GitHub profile (`https://github.com/mahmoud-abdalla-eg`) with secure browser attributes.
- Ensure all newly introduced strings are localized in English, Chinese, and Arabic in `lib/i18n/dictionaries.js`.
- Maintain full responsiveness across mobile, tablet, and desktop screens without breaking existing links or layout.

**Non-Goals:**
- Integrating third-party payment gateways or API webhooks (e.g. Stripe, PayPal SDKs) at this stage; email communication is explicitly chosen for now.
- Building an in-app ticket management or feedback database system.

## Decisions

### 1. Grid structure for upper footer
- **Choice**: Switch `md:grid-cols-[1.2fr_0.8fr_0.8fr]` to `md:grid-cols-2 lg:grid-cols-4 gap-8` (or `lg:grid-cols-[1.3fr_0.9fr_0.9fr_1.1fr]`).
- **Rationale**: On tablet (`md`), 2x2 columns render cleanly. On desktop (`lg`), 4 columns fill the horizontal space naturally with balanced breathing room.
- **Alternatives Considered**: 3 columns with support squished inside one column (rejected as it crowds the Study and Progress links).

### 2. Support CTA Presentation
- **Choice**: Present the "Support" column with a distinct header (matching the teal tracking style of STUDY and PROGRESS), an inviting explanatory sentence about keeping the project 100% free and ad-free, and a styled button/pill link with an icon (heart or coffee) that triggers `mailto:mahmouddesign01@gmail.com?subject=Supporting%20Mandarin%20Flow%20HSK`.
- **Rationale**: Clear visual hierarchy, accessible, and easily upgradeable later to a Ko-fi/BuyMeACoffee URL if desired.

### 3. Sub-Footer Bar Layout
- **Choice**: A bottom row beneath the main grid with `border-t border-slate-200 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3`.
  - Left / start: "Made with ❤️ by [Mahmoud Abdalla](https://github.com/mahmoud-abdalla-eg)"
  - Right / end: "[Suggestions & Feedback](mailto:mahmouddesign01@gmail.com?subject=Mandarin%20Flow%20HSK%20Feedback) • © 2026 Mandarin Flow HSK"
- **Rationale**: Distributes credits and meta links cleanly without cluttering the primary learning navigation.

### 4. Localization Dictionary Keys
- **Choice**: Add standardized dictionary entries in `lib/i18n/dictionaries.js`:
  - `supportProject`: Header for support column.
  - `supportDesc`: Short paragraph explaining free & open mission.
  - `supportAction`: Button text for contacting to support.
  - `madeBy`: Prefix for author attribution.
  - `feedbackAndSuggestions`: Label for suggestions link.
  - `copyrightNotice`: Brand copyright statement.

## Risks / Trade-offs

- **[Risk] Mail client handler unconfigured on user's system** →
  - **Mitigation**: The `mailto:` links will clearly display their destination or tooltip, and can be easily right-clicked to copy address (`mahmouddesign01@gmail.com`).
- **[Risk] RTL layout clipping or flipped alignment in Arabic** →
  - **Mitigation**: Use directional utility classes (`text-start`, `justify-between`, flex-wrap) that naturally adapt to `dir="rtl"`.
