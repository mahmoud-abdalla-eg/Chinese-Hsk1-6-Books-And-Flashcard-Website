# Tasks: Study Experience and Audio Upgrades

## 1. Audio Speed & Playback Enhancements

- [x] 1.1 Update `AudioButton` in `components/audio/audio-button.jsx` to accept a `playbackRate` prop (supporting 0.75x and 1.0x) and apply it to both `HTMLAudioElement` and `SpeechSynthesisUtterance`, verified by testing audible tone slowdown.
- [x] 1.2 Add an audio speed toggle pill (`0.75x` / `1.0x`) to `FlashcardDeck` in `components/flashcards/flashcard-deck.jsx`, verified by clicking toggle and checking audio speed state.
- [x] 1.3 Map textbook dialogue audio tracks in `components/conversations/` to play existing local MP3 tracks (`01-1.mp3`, etc.), verified by playing line audio in conversation lessons.

## 2. Flashcard Reverse (Recall) Mode

- [x] 2.1 Add study mode state (`"recognition"` vs `"recall"`) to `FlashcardDeck` with local persistence, verified by inspecting mode toggle in deck header.
- [x] 2.2 Implement Reverse Mode card layout (Meaning on front with RTL/LTR support, Hanzi + Pinyin + Audio on back), verified by flipping cards in recall mode.

## 3. Daily Study Goal & Dashboard Progress Ring

- [x] 3.1 Update `lib/progress/storage.js` to support `dailyGoal` (default 15) and calculate today's completed review count from `reviewHistory`, verified by calculating today's review count.
- [x] 3.2 Add circular SVG progress ring and goal status card to `components/dashboard/dashboard-client.jsx`, verified by viewing daily goal progress on the dashboard.
- [x] 3.3 Add localized dictionary strings in `lib/i18n/dictionaries.js` for audio speed, recall mode, and daily goal across English, Arabic, and Chinese, verified by testing language switcher.

## 4. Slow-Internet & Offline Caching Service Worker

- [x] 4.1 Create `public/sw.js` with CacheStorage strategy for fonts, core assets, and vocabulary JSON, verified by checking service worker registration in browser.
- [x] 4.2 Register `sw.js` in `app/layout.js` with `'serviceWorker' in navigator` guard, verified by inspecting network tab for service worker registration.
- [x] 4.3 Run `npm run build` and verify all 229 static and dynamic routes compile with zero errors.
