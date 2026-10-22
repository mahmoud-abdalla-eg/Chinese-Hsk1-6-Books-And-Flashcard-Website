import { unstable_cache } from "next/cache";
import { getGrammarPath } from "@/lib/data/grammar";
import { getSupabaseAdmin } from "@/lib/db/supabase";

const PUBLIC_CACHE_SECONDS = 300;

export const getManagedGrammarPath = unstable_cache(
  async () => getManagedGrammarPathUncached(),
  ["managed-grammar-path"],
  { revalidate: PUBLIC_CACHE_SECONDS },
);

async function getManagedGrammarPathUncached() {
  try {
    const supabase = getSupabaseAdmin();
    const { data: items, error } = await supabase
      .from("course_grammar")
      .select("*")
      .order("hsk_level", { ascending: true })
      .order("order", { ascending: true });

    if (error || !items || items.length === 0) {
      return getGrammarPath();
    }
    return items.map(fromDbGrammar);
  } catch {
    return getGrammarPath();
  }
}

export const getManagedGrammarLevels = unstable_cache(
  async () => getManagedGrammarLevelsUncached(),
  ["managed-grammar-levels"],
  { revalidate: PUBLIC_CACHE_SECONDS },
);

async function getManagedGrammarLevelsUncached() {
  const items = await getManagedGrammarPath();
  const grouped = new Map();
  for (const item of items) {
    const current = grouped.get(item.hskLevel) || [];
    current.push(item);
    grouped.set(item.hskLevel, current);
  }
  return [...grouped.entries()]
    .sort(([a], [b]) => a - b)
    .map(([level, entries]) => ({ level, entries }));
}

export const getManagedGrammarItemsForLevel = unstable_cache(
  async (level) => getManagedGrammarItemsForLevelUncached(level),
  ["managed-grammar-items-level"],
  { revalidate: PUBLIC_CACHE_SECONDS },
);

async function getManagedGrammarItemsForLevelUncached(level) {
  const numericLevel = Number(level);
  const items = await getManagedGrammarPath();
  return items.filter((item) => Number(item.hskLevel) === numericLevel);
}

export const getManagedGrammarUnitsForLevel = unstable_cache(
  async (level) => getManagedGrammarUnitsForLevelUncached(level),
  ["managed-grammar-units"],
  { revalidate: PUBLIC_CACHE_SECONDS },
);

async function getManagedGrammarUnitsForLevelUncached(level) {
  const numericLevel = Number(level);
  try {
    const supabase = getSupabaseAdmin();
    const { data: units, error } = await supabase
      .from("course_grammar_units")
      .select("*")
      .eq("level", numericLevel)
      .order("id", { ascending: true });

    if (!error && units && units.length > 0) {
      return units.map(fromDbGrammarUnit);
    }
  } catch {
    // fallback
  }

  const items = await getManagedGrammarPath();
  const levelItems = items.filter((item) => item.hskLevel === numericLevel);
  const units = [];
  const UNIT_SIZE = 12;
  for (let i = 0; i < levelItems.length; i += UNIT_SIZE) {
    const unitItems = levelItems.slice(i, i + UNIT_SIZE);
    units.push({
      level: numericLevel,
      id: units.length + 1,
      title: `Grammar Unit ${units.length + 1}`,
      description: `Core patterns ${i + 1} to ${i + unitItems.length}`,
      startOrder: i + 1,
      endOrder: i + unitItems.length,
    });
  }
  return units;
}

export async function getManagedGrammarUnit(level, unitId) {
  const units = await getManagedGrammarUnitsForLevel(level);
  return units.find((unit) => Number(unit.id) === Number(unitId));
}

export const getManagedGrammarItem = unstable_cache(
  async (itemId) => getManagedGrammarItemUncached(itemId),
  ["managed-grammar-item"],
  { revalidate: PUBLIC_CACHE_SECONDS },
);

async function getManagedGrammarItemUncached(itemId) {
  const items = await getManagedGrammarPath();
  return items.find((item) => item.id === itemId);
}

export async function upsertManagedGrammar(payload) {
  const item = normalizeGrammar(payload);
  const supabase = getSupabaseAdmin();

  const record = {
    id: item.id,
    hsk_level: item.hskLevel,
    order: item.order,
    lesson_code: item.lessonCode,
    pattern: item.pattern,
    explanation: item.explanation,
    details: item.details,
    example: item.example,
    updated_at: new Date().toISOString(),
  };

  const { data, error } = await supabase
    .from("course_grammar")
    .upsert(record, { onConflict: "id" })
    .select("*")
    .single();

  if (error || !data) {
    throw new Error(error?.message || "Failed to upsert grammar item.");
  }

  return fromDbGrammar(data);
}

export async function deleteManagedGrammar(grammarId) {
  if (!grammarId) return false;
  const supabase = getSupabaseAdmin();
  const { error } = await supabase
    .from("course_grammar")
    .delete()
    .eq("id", grammarId);
  return !error;
}

export async function getManagedGrammarUnitControls(level) {
  const supabase = getSupabaseAdmin();
  const { data: rows } = await supabase
    .from("course_grammar_units")
    .select("*")
    .eq("level", Number(level))
    .order("id", { ascending: true });
  return (rows || []).map(fromDbGrammarUnit);
}

export async function upsertManagedGrammarUnit(payload) {
  const unit = {
    level: Number(payload.level || payload.hskLevel || 1),
    id: Math.max(1, Number(payload.id || 1)),
    title: String(payload.title || "").trim(),
    description: String(payload.description || "").trim(),
    start_order: Math.max(1, Number(payload.startOrder || payload.start_order || 1)),
    end_order: Math.max(1, Number(payload.endOrder || payload.end_order || 1)),
    updated_at: new Date().toISOString(),
  };

  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("course_grammar_units")
    .upsert(unit, { onConflict: "level,id" })
    .select("*")
    .single();

  if (error || !data) {
    throw new Error(error?.message || "Failed to upsert grammar unit.");
  }

  return fromDbGrammarUnit(data);
}

export async function deleteManagedGrammarUnit(unitId) {
  if (!unitId) return false;
  const supabase = getSupabaseAdmin();
  const { error } = await supabase
    .from("course_grammar_units")
    .delete()
    .eq("id", Number(unitId));
  return !error;
}

function normalizeGrammar(payload) {
  const hskLevel = Math.max(1, Math.min(6, Number(payload.hskLevel || 1)));
  const id = String(payload.id || "").trim();
  return {
    id,
    hskLevel,
    order: Math.max(1, Number(payload.order) || 1),
    lessonCode: String(payload.lessonCode || "").trim(),
    pattern: String(payload.pattern || "").trim(),
    explanation: String(payload.explanation || "").trim(),
    details: String(payload.details || "").trim(),
    example: {
      hanzi: String(payload.example?.hanzi || "").trim(),
      pinyin: String(payload.example?.pinyin || "").trim(),
      en: String(payload.example?.en || "").trim(),
      ar: String(payload.example?.ar || "").trim(),
    },
  };
}

function fromDbGrammar(item) {
  return {
    id: item.id || "",
    hskLevel: Number(item.hsk_level || item.hskLevel || 1),
    order: Number(item.order || 1),
    lessonCode: item.lesson_code || item.lessonCode || "",
    pattern: item.pattern || "",
    explanation: item.explanation || "",
    details: item.details || "",
    example: {
      hanzi: item.example?.hanzi || "",
      pinyin: item.example?.pinyin || "",
      en: item.example?.en || "",
      ar: item.example?.ar || "",
    },
  };
}

function fromDbGrammarUnit(unit) {
  return {
    level: Number(unit.level || 1),
    id: Number(unit.id || 1),
    title: unit.title || "",
    description: unit.description || "",
    startOrder: Number(unit.start_order || unit.startOrder || 1),
    endOrder: Number(unit.end_order || unit.endOrder || 1),
  };
}
