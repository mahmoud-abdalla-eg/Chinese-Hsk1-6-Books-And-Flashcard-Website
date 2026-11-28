import assert from "node:assert/strict";
import test from "node:test";
import { createPageViewTracker } from "./page-view-tracker.js";

function createTrackerHarness() {
  const events = [];
  const timers = [];
  const tracker = createPageViewTracker({
    send: (event) => events.push(event),
    getMetrics: () => ({ loadMs: 120, domReadyMs: 80 }),
    setTimer: (callback, delay) => {
      const timer = { callback, delay, cleared: false };
      timers.push(timer);
      return timer;
    },
    clearTimer: (timer) => {
      timer.cleared = true;
    },
  });

  return { events, timers, tracker };
}

test("records one combined visit when an effect is replayed", () => {
  const { events, tracker } = createTrackerHarness();
  const cleanup = tracker("/conversations/hsk/1", "https://example.test/");

  cleanup();
  tracker("/conversations/hsk/1", "https://example.test/")();

  assert.equal(events.length, 1);
  assert.deepEqual(events[0], {
    type: "visit",
    path: "/conversations/hsk/1",
    referrer: "https://example.test/",
    metrics: { loadMs: 120, domReadyMs: 80 },
  });
});

test("records a route once when the delay fires and cleanup follows", () => {
  const { events, timers, tracker } = createTrackerHarness();
  const cleanup = tracker("/flashcards", "");

  assert.equal(timers[0].delay, 1200);
  timers[0].callback();
  cleanup();

  assert.equal(events.length, 1);
  assert.equal(events[0].path, "/flashcards");
});

test("flushes a pending route before tracking the next route", () => {
  const { events, timers, tracker } = createTrackerHarness();
  const cleanupFirst = tracker("/hsk/1", "");
  cleanupFirst();
  const cleanupNext = tracker("/hsk/2", "");

  timers[1].callback();
  cleanupNext();

  assert.deepEqual(
    events.map((event) => event.path),
    ["/hsk/1", "/hsk/2"],
  );
});
