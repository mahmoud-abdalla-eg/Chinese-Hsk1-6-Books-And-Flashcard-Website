import { upsertManagedConversation } from "@/lib/admin/course-conversations";
import { upsertManagedGrammar } from "@/lib/admin/course-grammar";
import { upsertAudioRecord } from "@/lib/admin/course-settings";
import { upsertManagedWord } from "@/lib/admin/course-words";
import { getSupabaseAdmin } from "@/lib/db/supabase";

export async function getImportQueue() {
  const supabase = getSupabaseAdmin();
  const { data: rows } = await supabase
    .from("import_batches")
    .select("*")
    .order("updated_at", { ascending: false });

  return (rows || []).map((row) => ({
    id: String(row.id),
    type: row.type || "words",
    level: Number(row.level || 1),
    status: row.status || "pending-review",
    notes: row.notes || "",
    payload: row.payload || [],
    updatedAt: row.updated_at || "",
  }));
}

export async function upsertImportJob(payload) {
  const job = {
    type: String(payload.type || "words").trim(),
    level: Number(payload.level || 1),
    status: String(payload.status || "pending-review").trim(),
    notes: String(payload.notes || "").trim(),
    payload: parsePayload(payload.payload),
    updated_at: new Date().toISOString(),
  };
  const supabase = getSupabaseAdmin();

  let query;
  if (payload.id) {
    query = supabase
      .from("import_batches")
      .upsert({ id: payload.id, ...job }, { onConflict: "id" });
  } else {
    query = supabase.from("import_batches").insert([job]);
  }

  const { data, error } = await query.select("*").single();
  if (error || !data) {
    throw new Error(error?.message || "Failed to upsert import batch.");
  }

  return {
    id: String(data.id),
    type: data.type,
    level: data.level,
    status: data.status,
    notes: data.notes,
    payload: data.payload || [],
  };
}

export async function deleteImportJob(jobId) {
  if (!jobId) return false;
  const supabase = getSupabaseAdmin();
  const { error } = await supabase
    .from("import_batches")
    .delete()
    .eq("id", jobId);
  return !error;
}

export async function applyImportJob(jobId) {
  if (!jobId) throw new Error("Invalid import id.");
  const supabase = getSupabaseAdmin();

  const { data: job, error } = await supabase
    .from("import_batches")
    .select("*")
    .eq("id", jobId)
    .single();

  if (error || !job) throw new Error("Import batch not found.");
  if (!["reviewed", "approved", "ready"].includes(job.status)) {
    throw new Error("Mark this batch as reviewed before applying it.");
  }

  const rows = Array.isArray(job.payload) ? job.payload : [];
  const applied = [];
  for (const row of rows) {
    const payload = { ...row, level: row.level || job.level };
    if (job.type === "words") applied.push(await upsertManagedWord(payload));
    else if (job.type === "grammar")
      applied.push(await upsertManagedGrammar(payload));
    else if (job.type === "conversations")
      applied.push(await upsertManagedConversation(payload));
    else if (job.type === "audio")
      applied.push(await upsertAudioRecord(payload));
    else throw new Error(`Unsupported import type: ${job.type}`);
  }

  await supabase
    .from("import_batches")
    .update({
      status: "applied",
      applied_count: applied.length,
      applied_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .eq("id", jobId);

  return { appliedCount: applied.length, type: job.type };
}

function parsePayload(value) {
  if (Array.isArray(value)) return value;
  try {
    const parsed = JSON.parse(String(value || "[]"));
    return Array.isArray(parsed) ? parsed : [parsed];
  } catch {
    return [];
  }
}
