import { getSupabaseAdmin } from "@/lib/db/supabase";

export async function getLearners() {
  const supabase = getSupabaseAdmin();
  const [{ data: users }, { data: progressRecords }] = await Promise.all([
    supabase
      .from("users")
      .select("id, name, email, created_at, updated_at")
      .order("created_at", { ascending: false }),
    supabase.from("user_progress").select("user_id, progress"),
  ]);

  const progressByUser = new Map(
    (progressRecords || []).map((record) => [record.user_id, record]),
  );

  return (users || []).map((user) => {
    const progress = progressByUser.get(String(user.id))?.progress || {};
    return {
      id: String(user.id),
      name: user.name || "",
      email: user.email || "",
      createdAt: user.created_at || "",
      updatedAt: user.updated_at || "",
      learnedWords: progress.learnedWords?.length || 0,
      hardWords: progress.hardWords?.length || 0,
      reviews: progress.reviewHistory?.length || 0,
      completedUnits: progress.completedUnits?.length || 0,
      lastStudiedDate: progress.lastStudiedDate || "",
    };
  });
}

export async function getLearnerExport(userId) {
  if (!userId) throw new Error("Invalid learner id.");
  const supabase = getSupabaseAdmin();
  const [{ data: user }, { data: progressRecord }] = await Promise.all([
    supabase
      .from("users")
      .select("id, name, email, created_at, updated_at")
      .eq("id", userId)
      .maybeSingle(),
    supabase
      .from("user_progress")
      .select("user_id, progress")
      .eq("user_id", userId)
      .maybeSingle(),
  ]);

  if (!user) throw new Error("Learner not found.");
  return {
    user,
    progress: progressRecord ? { userId: progressRecord.user_id, progress: progressRecord.progress } : null,
  };
}

export async function resetLearnerProgress(userId) {
  if (!userId) throw new Error("Invalid learner id.");
  const supabase = getSupabaseAdmin();
  await supabase.from("user_progress").delete().eq("user_id", userId);
  return true;
}

export async function deleteLearner(userId) {
  if (!userId) throw new Error("Invalid learner id.");
  const supabase = getSupabaseAdmin();
  await Promise.all([
    supabase.from("users").delete().eq("id", userId),
    supabase.from("user_progress").delete().eq("user_id", userId),
  ]);
  return true;
}
