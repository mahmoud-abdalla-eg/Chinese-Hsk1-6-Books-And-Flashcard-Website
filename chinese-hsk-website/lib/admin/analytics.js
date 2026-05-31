import { getMongoDatabase } from "@/lib/db/mongodb";

const eventsCollection = "analytics_events";

export async function recordAnalyticsEvent(event) {
  const db = await getMongoDatabase();
  await db.collection(eventsCollection).insertOne({
    type: event.type,
    path: event.path || "/",
    referrer: event.referrer || "",
    userAgent: event.userAgent || "",
    metrics: event.metrics || {},
    createdAt: new Date(),
  });
}

export async function getAnalyticsStats() {
  try {
    const db = await getMongoDatabase();
    const since = new Date(Date.now() - 1000 * 60 * 60 * 24 * 30);
    const [
      visits,
      performanceSamples,
      studiedUsers,
      activeStudyRecords,
      visitsByDay,
      topPages,
      activeLearners,
      hardWords,
      studiedLevels,
    ] = await Promise.all([
      db.collection(eventsCollection).countDocuments({ type: "visit" }),
      db
        .collection(eventsCollection)
        .find({ type: "performance", createdAt: { $gte: since } })
        .sort({ createdAt: -1 })
        .limit(200)
        .toArray(),
      db.collection("user_progress").distinct("userId"),
      db.collection("user_progress").countDocuments({
        $or: [
          { "learnedWords.0": { $exists: true } },
          { "reviewHistory.0": { $exists: true } },
          { "completedUnits.0": { $exists: true } },
          { "completedConversations.0": { $exists: true } },
        ],
      }),
      db
        .collection(eventsCollection)
        .aggregate([
          { $match: { type: "visit", createdAt: { $gte: since } } },
          {
            $group: {
              _id: {
                $dateToString: { format: "%Y-%m-%d", date: "$createdAt" },
              },
              count: { $sum: 1 },
            },
          },
          { $sort: { _id: 1 } },
        ])
        .toArray(),
      db
        .collection(eventsCollection)
        .aggregate([
          { $match: { type: "visit", createdAt: { $gte: since } } },
          { $group: { _id: "$path", count: { $sum: 1 } } },
          { $sort: { count: -1 } },
          { $limit: 10 },
        ])
        .toArray(),
      db
        .collection("user_progress")
        .find({}, { projection: { _id: 0, userId: 1, updatedAt: 1 } })
        .sort({ updatedAt: -1 })
        .limit(10)
        .toArray(),
      db
        .collection("user_progress")
        .aggregate([
          { $project: { hardWords: "$progress.hardWords" } },
          { $unwind: "$hardWords" },
          { $group: { _id: "$hardWords", count: { $sum: 1 } } },
          { $sort: { count: -1 } },
          { $limit: 10 },
        ])
        .toArray(),
      db
        .collection("user_progress")
        .aggregate([
          { $project: { completedUnits: "$progress.completedUnits" } },
          { $unwind: "$completedUnits" },
          {
            $project: {
              level: {
                $regexFind: {
                  input: "$completedUnits",
                  regex: /hsk-(\d+)/,
                },
              },
            },
          },
          { $match: { "level.captures.0": { $exists: true } } },
          {
            $group: {
              _id: { $arrayElemAt: ["$level.captures", 0] },
              count: { $sum: 1 },
            },
          },
          { $sort: { _id: 1 } },
        ])
        .toArray(),
    ]);
    return {
      ok: true,
      visits,
      studiedUsers: studiedUsers.length,
      activeStudyRecords,
      performance: summarizePerformance(performanceSamples),
      visitsByDay: visitsByDay.map((item) => ({
        day: item._id,
        count: item.count,
      })),
      topPages: topPages.map((item) => ({
        path: item._id || "/",
        count: item.count,
      })),
      slowPages: performanceSamples
        .sort(
          (a, b) =>
            Number(b.metrics?.loadMs || 0) - Number(a.metrics?.loadMs || 0),
        )
        .slice(0, 10)
        .map((item) => ({
          path: item.path,
          loadMs: Number(item.metrics?.loadMs || 0),
          domReadyMs: Number(item.metrics?.domReadyMs || 0),
        })),
      activeLearners: activeLearners.map((item) => ({
        userId: item.userId,
        updatedAt: item.updatedAt?.toISOString?.() || String(item.updatedAt),
      })),
      hardWords: hardWords.map((item) => ({
        wordId: item._id,
        count: item.count,
      })),
      studiedLevels: studiedLevels.map((item) => ({
        level: item._id,
        count: item.count,
      })),
    };
  } catch {
    return {
      ok: false,
      visits: 0,
      studiedUsers: 0,
      activeStudyRecords: 0,
      performance: { samples: 0, averageLoadMs: 0, averageDomReadyMs: 0 },
      visitsByDay: [],
      topPages: [],
      slowPages: [],
      activeLearners: [],
      hardWords: [],
      studiedLevels: [],
    };
  }
}

function summarizePerformance(samples) {
  const count = samples.length;
  if (!count) return { samples: 0, averageLoadMs: 0, averageDomReadyMs: 0 };
  const totals = samples.reduce(
    (sum, item) => ({
      loadMs: sum.loadMs + Number(item.metrics?.loadMs || 0),
      domReadyMs: sum.domReadyMs + Number(item.metrics?.domReadyMs || 0),
    }),
    { loadMs: 0, domReadyMs: 0 },
  );
  return {
    samples: count,
    averageLoadMs: Math.round(totals.loadMs / count),
    averageDomReadyMs: Math.round(totals.domReadyMs / count),
  };
}
