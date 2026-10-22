import { getSupabaseAdmin } from "@/lib/db/supabase";
import { sanitizeProgress } from "@/lib/progress/storage";

export async function getUserProgress(userId) {
  if (!isValidUserId(userId)) return null;
  const supabase = getSupabaseAdmin();

  const { data } = await supabase
    .from("user_progress")
    .select("progress")
    .eq("user_id", userId)
    .maybeSingle();

  if (!data?.progress) return null;
  return {
    userId,
    progress: data.progress,
  };
}

export async function saveUserProgress(userId, progress) {
  if (!isValidUserId(userId)) {
    throw new Error("Invalid user id.");
  }
  const supabase = getSupabaseAdmin();
  const now = new Date().toISOString();
  const sanitized = sanitizeProgress(progress);

  const { error } = await supabase.from("user_progress").upsert(
    {
      user_id: userId,
      progress: sanitized,
      updated_at: now,
    },
    { onConflict: "user_id" },
  );

  if (error) {
    throw new Error(error.message || "Failed to save progress.");
  }

  return {
    userId,
    progress: sanitized,
    updatedAt: now,
  };
}

function isValidUserId(userId) {
  return typeof userId === "string" && /^[a-zA-Z0-9_-]{12,80}$/.test(userId);
}
