import { getSupabaseAdmin } from "@/lib/db/supabase";

export async function recordAnalyticsEvent(event) {
  try {
    const supabase = getSupabaseAdmin();
    await supabase.from("analytics_events").insert([
      {
        type: event.type,
        path: event.path || "/",
        referrer: event.referrer || "",
        user_agent: event.userAgent || "",
        metrics: event.metrics || {},
        created_at: new Date().toISOString(),
      },
    ]);
  } catch {
    // Analytics logging should never crash request flow
  }
}

export async function getAnalyticsStats() {
  try {
    const supabase = getSupabaseAdmin();
    const since = new Date(Date.now() - 1000 * 60 * 60 * 24 * 30).toISOString();

    const [
      { count: visits },
      { data: performanceSamples },
      { data: progressList },
      { data: recentEvents },
    ] = await Promise.all([
      supabase
        .from("analytics_events")
        .select("*", { count: "exact", head: true })
        .eq("type", "visit"),
      supabase
        .from("analytics_events")
        .select("path, metrics, created_at")
        .eq("type", "performance")
        .gte("created_at", since)
        .order("created_at", { ascending: false })
        .limit(200),
      supabase.from("user_progress").select("user_id, progress, updated_at"),
      supabase
        .from("analytics_events")
        .select("path, created_at")
        .eq("type", "visit")
        .gte("created_at", since)
        .limit(1000),
    ]);

    const progressRecords = progressList || [];
    const studiedUsers = new Set(progressRecords.map((r) => r.user_id)).size;
    const activeStudyRecords = progressRecords.filter((r) => {
      const p = r.progress || {};
      return (
        p.learnedWords?.length > 0 ||
        p.reviewHistory?.length > 0 ||
        p.completedUnits?.length > 0 ||
        p.completedConversations?.length > 0
      );
    }).length;

    // Aggregate visits by day & path
    const dayMap = new Map();
    const pathMap = new Map();
    for (const event of recentEvents || []) {
      const day = event.created_at ? event.created_at.slice(0, 10) : "today";
      dayMap.set(day, (dayMap.get(day) || 0) + 1);
      const p = event.path || "/";
      pathMap.set(p, (pathMap.get(p) || 0) + 1);
    }

    const visitsByDay = [...dayMap.entries()]
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([day, count]) => ({ day, count }));

    const topPages = [...pathMap.entries()]
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([path, count]) => ({ path, count }));

    const activeLearners = progressRecords
      .slice()
      .sort((a, b) => (b.updated_at || "").localeCompare(a.updated_at || ""))
      .slice(0, 10)
      .map((item) => ({
        userId: item.user_id,
        updatedAt: item.updated_at || "",
      }));

    // Aggregate hard words from reviews
    const hardWordMap = new Map();
    for (const r of progressRecords) {
      for (const review of r.progress?.reviewHistory || []) {
        if (review.quality === "Again" || review.quality === "Hard") {
          const key = review.wordId || review.hanzi;
          const current = hardWordMap.get(key) || {
            wordId: key,
            word: review.hanzi || key,
            pinyin: review.pinyin || "",
            level: review.level || "",
            count: 0,
          };
          current.count += 1;
          hardWordMap.set(key, current);
        }
      }
    }

    const hardWords = [...hardWordMap.values()]
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    return {
      ok: true,
      visits: visits || 0,
      studiedUsers,
      activeStudyRecords,
      performance: summarizePerformance(performanceSamples || []),
      visitsByDay,
      topPages,
      slowPages: (performanceSamples || [])
        .slice()
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
      activeLearners,
      hardWords,
      studiedLevels: summarizeStudiedLevels(progressRecords).map((item) => ({
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

function summarizeStudiedLevels(records) {
  const counts = new Map();
  for (const record of records) {
    for (const review of record.progress?.reviewHistory || []) {
      addLevel(counts, review.level);
    }
    for (const unitId of record.progress?.completedUnits || []) {
      addLevel(counts, unitId);
    }
  }
  return [...counts.entries()]
    .map(([level, count]) => ({ _id: level, count }))
    .sort((a, b) => Number(a._id) - Number(b._id));
}

function addLevel(counts, value) {
  const match = String(value || "").match(/(?:hsk-)?([1-6])/i);
  if (!match) return;
  const level = match[1];
  counts.set(level, (counts.get(level) || 0) + 1);
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
