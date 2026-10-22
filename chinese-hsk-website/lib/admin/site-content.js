import { unstable_cache } from "next/cache";
import { getSupabaseAdmin } from "@/lib/db/supabase";

const PUBLIC_CACHE_SECONDS = 300;
const defaults = [
  {
    key: "home.hero.title",
    label: "Homepage hero title",
    value: "Learn Chinese inside conversations that feel alive.",
  },
  {
    key: "home.hero.subtitle",
    label: "Homepage hero subtitle",
    value:
      "A multilingual HSK 1-6 learning studio for vocabulary, long dialogue, flashcards, listening, grammar, and saved progress.",
  },
  {
    key: "home.cta.primary",
    label: "Homepage primary CTA",
    value: "Start HSK 1",
  },
];

export const getSiteContentMap = unstable_cache(
  async () => getSiteContentMapUncached(),
  ["site-content-map"],
  { revalidate: PUBLIC_CACHE_SECONDS },
);

async function getSiteContentMapUncached() {
  try {
    await ensureSiteContentSeeded();
    const supabase = getSupabaseAdmin();
    const { data: rows } = await supabase.from("site_content").select("key, value");
    if (!rows || rows.length === 0) {
      return Object.fromEntries(defaults.map((row) => [row.key, row.value]));
    }
    return Object.fromEntries(rows.map((row) => [row.key, row.value]));
  } catch {
    return Object.fromEntries(defaults.map((row) => [row.key, row.value]));
  }
}

export async function getSiteContentRows() {
  await ensureSiteContentSeeded();
  const supabase = getSupabaseAdmin();
  const { data: rows } = await supabase
    .from("site_content")
    .select("key, label, value")
    .order("key", { ascending: true });

  return (rows || []).map((row) => ({
    key: row.key,
    label: row.label || row.key,
    value: row.value || "",
  }));
}

export async function upsertSiteContent(payload) {
  const row = {
    key: String(payload.key || "").trim(),
    label: String(payload.label || payload.key || "").trim(),
    value: String(payload.value || "").trim(),
  };
  if (!row.key) throw new Error("Content key is required.");

  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("site_content")
    .upsert(
      {
        ...row,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "key" },
    )
    .select("key, label, value")
    .single();

  if (error || !data) {
    throw new Error(error?.message || "Failed to update content.");
  }

  return {
    key: data.key,
    label: data.label,
    value: data.value,
  };
}

export async function deleteSiteContent(contentKey) {
  if (!contentKey) return false;
  const supabase = getSupabaseAdmin();
  const { error } = await supabase
    .from("site_content")
    .delete()
    .eq("key", contentKey);

  return !error;
}

async function ensureSiteContentSeeded() {
  try {
    const supabase = getSupabaseAdmin();
    for (const item of defaults) {
      await supabase.from("site_content").upsert(
        {
          key: item.key,
          label: item.label,
          value: item.value,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "key", ignoreDuplicates: true },
      );
    }
  } catch {
    // ignore
  }
}
