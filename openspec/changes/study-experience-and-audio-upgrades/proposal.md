# Proposal: Study Experience and Audio Upgrades

## Why
Learners mastering Chinese vocabulary and conversation need tailored tools to build both listening perception (understanding tones at slow speed) and active recall (producing Hanzi from meaning). Furthermore, maintaining consistent study habits requires daily goal targets, reliable conversation listening tracks, and resilient offline/slow-internet caching for mobile practice.

## What Changes
- **Flashcard Audio Speed Toggle**: Allow learners to toggle playback between `1.0x` (normal) and `0.75x` (slowed speech for hearing tone pitch curves) on all flashcard audio.
- **Flashcard Reverse Study Mode**: Introduce a mode toggle on flashcard decks to switch between **Recognition** (Hanzi front &rarr; Meaning back) and **Recall** (Meaning front &rarr; Hanzi + Pinyin back).
- **Conversation Audio Track Mapping**: Map textbook dialogue audio files from local assets and `baulchino.com` resource index directly to `/conversations` lesson lines.
- **Daily Study Goal & Retention Ring**: Introduce a configurable daily card review goal (default 15 cards/day) with a circular progress ring on `/dashboard` and header progress indicators.
- **Low-Bandwidth & Slow-Connection Service Worker**: Add a lightweight service worker to cache core static assets, fonts, vocabulary lists, and flashcard decks so learners on slow mobile connections or subways experience instant, uninterrupted studying.

## Capabilities

### New Capabilities
- `offline-caching`: Lightweight client-side service worker and cache strategy to ensure instant page loads and resilient flashcard study on slow or intermittent network connections.

### Modified Capabilities
- `flashcards`: Adds requirements for adjustable audio playback speed (0.75x / 1.0x) and bidirectional study modes (Recognition vs. Recall).
- `progress`: Adds requirements for configurable daily study review goals and daily goal completion tracking.

## Impact
- **Components**:
  - `components/flashcards/flashcard-deck.jsx`: Add speed toggle, mode toggle, and reverse card front/back rendering.
  - `components/audio/audio-button.jsx`: Support playback rate control across HTML Audio and Web Speech synthesis.
  - `components/dashboard/dashboard-client.jsx`: Add circular daily goal progress ring.
  - `chinese-hsk-website/public/sw.js`: Service worker registration in `app/layout.js`.
- **APIs & State**:
  - `lib/progress/storage.js`: Add `dailyGoal` to progress state and calculate today's completed review count.
  - `components/auth/auth-provider.jsx`: Maintain guest compatibility without breaking cloud sync.
