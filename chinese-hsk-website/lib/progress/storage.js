export const progressKey = "mandarin-flow-progress-v1";
export const progressUserKey = "mandarin-flow-user-id-v1";

export function defaultProgress() {
  return {
    learnedWords: [],
    favorites: [],
    reviewHistory: [],
    completedConversations: [],
    completedUnits: [],
    hardWords: [],
    wordStats: {},
    lastStudiedDate: null,
  };
}

export function sanitizeProgress(progress = {}) {
  const fallback = defaultProgress();
  return {
    learnedWords: arrayOfStrings(progress.learnedWords),
    favorites: arrayOfStrings(progress.favorites),
    reviewHistory: Array.isArray(progress.reviewHistory)
      ? progress.reviewHistory.filter(Boolean)
      : fallback.reviewHistory,
    completedConversations: arrayOfStrings(progress.completedConversations),
    completedUnits: arrayOfStrings(progress.completedUnits),
    hardWords: arrayOfStrings(progress.hardWords),
    wordStats:
      progress.wordStats &&
      typeof progress.wordStats === "object" &&
      !Array.isArray(progress.wordStats)
        ? progress.wordStats
        : fallback.wordStats,
    lastStudiedDate:
      typeof progress.lastStudiedDate === "string"
        ? progress.lastStudiedDate
        : fallback.lastStudiedDate,
  };
}

export function mergeProgress(localProgress, remoteProgress) {
  const local = sanitizeProgress(localProgress);
  const remote = sanitizeProgress(remoteProgress);
  const reviewHistory = [...local.reviewHistory, ...remote.reviewHistory];
  const uniqueReviews = new Map();
  for (const review of reviewHistory) {
    const key = [
      review.wordId,
      review.quality,
      review.reviewedAt,
      review.nextReviewAt,
    ].join("|");
    uniqueReviews.set(key, review);
  }
  return sanitizeProgress({
    learnedWords: unionStrings(local.learnedWords, remote.learnedWords),
    favorites: unionStrings(local.favorites, remote.favorites),
    completedConversations: unionStrings(
      local.completedConversations,
      remote.completedConversations,
    ),
    completedUnits: unionStrings(local.completedUnits, remote.completedUnits),
    hardWords: unionStrings(local.hardWords, remote.hardWords),
    reviewHistory: [...uniqueReviews.values()].sort((a, b) =>
      String(a.reviewedAt || "").localeCompare(String(b.reviewedAt || "")),
    ),
    wordStats: {
      ...remote.wordStats,
      ...local.wordStats,
    },
    lastStudiedDate: latestDate(local.lastStudiedDate, remote.lastStudiedDate),
  });
}

export function scoreReview(quality) {
  const days = { Again: 0, Hard: 1, Good: 3, Easy: 7 }[quality] ?? 1;
  const next = new Date();
  next.setDate(next.getDate() + days);
  return next.toISOString();
}

function arrayOfStrings(value) {
  return Array.isArray(value)
    ? [...new Set(value.filter((item) => typeof item === "string"))]
    : [];
}

function unionStrings(a, b) {
  return [...new Set([...arrayOfStrings(a), ...arrayOfStrings(b)])];
}

function latestDate(a, b) {
  if (!a) return b || null;
  if (!b) return a;
  return new Date(a).getTime() >= new Date(b).getTime() ? a : b;
}
