# Design

## Context

Next.js App Router renders a built-in unstyled 404 page when no custom `not-found.jsx` file is present in `app/`. By placing `chinese-hsk-website/app/not-found.jsx`, Next.js automatically mounts our custom component inside the existing `RootLayout` (`app/layout.js`), providing access to `LanguageProvider`, `AuthProvider`, `SiteHeader`, and `SiteFooter`. See `proposal.md` for motivation.

## Goals / Non-Goals

**Goals:**
- Provide an on-brand 404 error experience ("The Lost Scholar") styled with Tailwind CSS tokens matching Mandarin Flow HSK.
- Provide bilingual English/Arabic localization with automatic RTL support via `useLanguage()`.
- Deliver clean, punchy copy without cluttered lists of resources.
- Offer immediate recovery CTAs (Return to Home, Open Dashboard) and a 6-button quick-jump grid to HSK 1 through 6.
- Ensure seamless mobile responsiveness down to 360px viewports with zero horizontal overflow.

**Non-Goals:**
- Handling 500 server crashes (covered separately by Next.js `error.jsx`).
- Automated fuzzy route redirect suggestions or complex search indexing.

## Decisions

### Decision 1: Use a Client Component (`"use client"`) for `not-found.jsx`
- **Choice**: Mark `app/not-found.jsx` as `"use client"`.
- **Rationale**: The platform supports dynamic live language switching (English and Arabic) managed by `LanguageProvider` context. A client component can consume `useLanguage()` and `Localized` directly to update text and layout direction (`dir="rtl"`) without a full-page reload.
- **Alternatives Considered**: Server component with static English-only text. Rejected because it violates Arabic language parity.

### Decision 2: Visual Structure and Cultural Branding ("The Lost Scholar")
- **Choice**: Display a large muted `404` in `text-slate-200/90 font-black`, centered with an Imperial Scarlet seal badge `[ 迷 ]` (*mí • lost*) with subtle pulse animation, followed by the headline *"迷路了吗？(Lost your way?)"*.
- **Rationale**: Connects directly with the Hanzi seal branding established on the platform logo `[ 汉 ]` while delivering a playful, culturally contextual touch for Chinese language learners.
- **Alternatives Considered**: Generic alert exclamation mark icon or empty illustration. Rejected as uninspired and generic.

### Decision 3: Punchy, Action-Oriented Phrasing
- **Choice**: Use the concise description: *"The page you are looking for doesn't exist or has moved. Let's get your learning back on track."* (Arabic: *"الصفحة التي تبحث عنها غير موجودة أو تم نقلها. فلنعد إلى متابعة تعلمك."*).
- **Rationale**: Minimizes cognitive load on an error screen while keeping an encouraging educational tone.

### Decision 4: Responsive HSK Jump Strip
- **Choice**: Render HSK 1–6 pills in a responsive grid (`grid-cols-3 sm:grid-cols-6 gap-2`).
- **Rationale**: On mobile screens (< 640px), 3 columns create two clean rows of touch-friendly buttons with ample spacing; on larger screens, they align in a single clean row.

## Risks / Trade-offs

- **[Risk] Hydration or flash of untranslated text** → **Mitigation**: `LanguageProvider` initializes with English and synchronously hydrates Arabic preference from `localStorage`.
- **[Risk] Mobile height cramping** → **Mitigation**: Use comfortable vertical padding (`py-12 sm:py-20`) with flexible spacing and `max-w-2xl` centering so content never overflows on small phones.
