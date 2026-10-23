# Design: Study Experience and Audio Upgrades

## Context
See `proposal.md` for overall motivation. The frontend uses Next.js 16 App Router with React Server Components and client-side interactive study islands (`FlashcardDeck`, `AudioButton`, `DashboardClient`). Progress is held in memory and local storage, synchronizing with Supabase via `/api/progress`.

## Goals / Non-Goals

**Goals:**
- Provide instant 0.75x/1.0x audio rate control for both MP3 playback and speech synthesis.
- Support bidirectional study (Recognition: Hanzi &rarr; Meaning, and Recall: Meaning &rarr; Hanzi).
- Add a daily review goal target (default 15) with an SVG circular progress ring on `/dashboard`.
- Link existing textbook dialogue audio tracks into `/conversations` lesson lines.
- Implement an efficient, dependency-free service worker (`sw.js`) for slow-internet and offline asset resilience.

**Non-Goals:**
- Heavy client-side audio slicing or waveform analysis.
- Complex IndexedDB replication (localStorage and browser CacheStorage handle all requirements).

## Decisions

### Decision 1: Audio Playback Speed Architecture
- **Choice**: Control playback speed natively on both `HTMLAudioElement.playbackRate` and `SpeechSynthesisUtterance.rate`.
- **Rationale**: Requires zero audio transcoding or external libraries. Modern browsers (Chrome, Edge, Safari, Firefox) support playback rates down to 0.5x natively with automatic pitch preservation.
- **Alternatives Considered**: Server-side stretched audio generation (rejected: wasteful storage and latency).

### Decision 2: Reverse Flashcard Recall Mode
- **Choice**: Implement a stateful mode toggle (`mode = "recognition" | "recall"`) persisted in local storage.
- **Rationale**: When `mode === "recall"`, the card front renders `meaning` (with language direction `rtl` for Arabic and `ltr` for English) and hides Hanzi/Pinyin until flipped. Rating buttons remain identical.
- **Alternatives Considered**: Separate URL route `/flashcards/reverse` (rejected: breaks fluid study session switching).

### Decision 3: Native Service Worker over Heavy Plugins
- **Choice**: Handcraft a lightweight `public/sw.js` with CacheStorage API registered in `RootLayout`.
- **Rationale**: Avoids webpack/turbopack plugin conflicts with Next.js 16. Uses a versioned static cache (`mandarin-flow-v1`) and stale-while-revalidate for core fonts and vocabulary data.
- **Alternatives Considered**: `next-pwa` (rejected: compatibility issues with Next.js 16 Turbopack).

### Decision 4: Pure SVG Progress Ring on Dashboard
- **Choice**: Render a lightweight SVG circular stroke (`strokeDasharray` and `strokeDashoffset`).
- **Rationale**: 0 KB bundle weight, crystal-sharp rendering across Retina displays, and zero chart library bloat.

## Risks / Trade-offs

- **[Risk]** Safari iOS Web Speech audio speed quirks.
  - **Mitigation**: Clamp `utterance.rate = 0.8` on WebKit engines if `0.75` exhibits stutter.
- **[Risk]** Stale cached assets during app deployments.
  - **Mitigation**: Version the cache name (`mandarin-flow-v1`) and automatically purge outdated caches in the `activate` event.
