import { getManagedHskSummary } from "@/lib/admin/course-words";
import { getGrammarLevels, getGrammarPath } from "@/lib/data/grammar";
import { getSupabaseAdmin } from "@/lib/db/supabase";
import {
  buildCoverageReport,
  validateAllLevels,
} from "@/lib/validation/hsk-validation";

export async function getAdminDashboardStats() {
  const [database, course, validation] = await Promise.all([
    getDatabaseStats(),
    getCourseStats(),
    getValidationStats(),
  ]);
  return { database, course, validation };
}

async function getDatabaseStats() {
  try {
    const supabase = getSupabaseAdmin();
    const [
      { count: users },
      { count: progressRecords },
      { count: admins },
      { data: recentProgress },
    ] = await Promise.all([
      supabase.from("users").select("*", { count: "exact", head: true }),
      supabase
        .from("user_progress")
        .select("*", { count: "exact", head: true }),
      supabase.from("admins").select("*", { count: "exact", head: true }),
      supabase
        .from("user_progress")
        .select("user_id, updated_at")
        .order("updated_at", { ascending: false })
        .limit(5),
    ]);

    return {
      ok: true,
      users: users || 0,
      admins: admins || 0,
      progressRecords: progressRecords || 0,
      recentProgress: (recentProgress || []).map((item) => ({
        userId: item.user_id,
        updatedAt: item.updated_at || "",
      })),
    };
  } catch {
    return {
      ok: false,
      users: 0,
      admins: 0,
      progressRecords: 0,
      recentProgress: [],
    };
  }
}

async function getCourseStats() {
  const [summary, grammarPath, grammarLevels] = await Promise.all([
    getManagedHskSummary(),
    getGrammarPath(),
    getGrammarLevels(),
  ]);
  const totalWords = summary.reduce(
    (total, level) => total + (level.wordCount || 0),
    0,
  );
  return {
    totalWords,
    totalGrammarPoints: grammarPath.length,
    levels: summary,
    grammarLevels,
  };
}

async function getValidationStats() {
  const [validation, coverage] = await Promise.all([
    validateAllLevels(),
    buildCoverageReport(),
  ]);
  return {
    hasWarnings: validation.some((level) => level.warnings.length > 0),
    levels: validation,
    coverage,
  };
}
