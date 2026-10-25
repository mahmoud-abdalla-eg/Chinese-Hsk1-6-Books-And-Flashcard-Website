import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createClient } from "@supabase/supabase-js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

// Load .env.local
const envPath = path.join(projectRoot, ".env.local");
if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, "utf8");
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const [key, ...rest] = trimmed.split("=");
    if (key && rest.length > 0) {
      process.env[key.trim()] = rest.join("=").trim().replace(/^["']|["']$/g, "");
    }
  }
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !key) {
  console.error("Missing Supabase credentials in .env.local");
  process.exit(1);
}

const supabase = createClient(url, key);

async function seedConversationsHsk2() {
  console.log("Seeding HSK 2 Conversations into Supabase table `course_conversations`...");
  const convDir = path.join(projectRoot, "source-data", "conversations", "hsk-2");
  const files = fs.readdirSync(convDir).filter((f) => f.endsWith(".json"));

  const records = [];
  for (const file of files) {
    const raw = fs.readFileSync(path.join(convDir, file), "utf8");
    const conv = JSON.parse(raw);
    records.push({
      id: conv.id || `hsk-2-unit-${conv.unitId || 1}`,
      hsk_level: 2,
      unit_id: Number(conv.unitId || 1),
      status: conv.status || "ready",
      title: conv.title || {},
      target_vocabulary_ids: Array.isArray(conv.targetVocabularyIds)
        ? conv.targetVocabularyIds
        : [],
      dialogue: Array.isArray(conv.dialogue) ? conv.dialogue : [],
      grammar_notes: Array.isArray(conv.grammarNotes) ? conv.grammarNotes : [],
      cultural_notes: Array.isArray(conv.culturalNotes) ? conv.culturalNotes : [],
      comprehension_questions: Array.isArray(conv.comprehensionQuestions)
        ? conv.comprehensionQuestions
        : [],
      shadowing_practice: conv.shadowingPractice || {
        enabled: true,
        mode: "line-by-line",
      },
      authoring_note: conv.authoringNote || "",
      updated_at: new Date().toISOString(),
    });
  }

  const { data, error } = await supabase
    .from("course_conversations")
    .upsert(records, { onConflict: "id" })
    .select("id, unit_id, status, title");

  if (error) {
    console.error("❌ Error upserting HSK 2 conversations:", error.message);
    process.exit(1);
  }

  console.log(`✓ Successfully upserted ${records.length} HSK 2 conversation lessons!`);

  // Verify count in database
  const { count, error: countErr } = await supabase
    .from("course_conversations")
    .select("*", { count: "exact", head: true })
    .eq("hsk_level", 2);

  if (countErr) {
    console.error("❌ Error checking count:", countErr.message);
    process.exit(1);
  } else {
    console.log(`✓ Verified Supabase exact row count for HSK 2: ${count} lessons`);
    if (count !== 15) {
      console.error(`⚠️ Expected 15 lessons for HSK 2, got ${count}`);
      process.exit(1);
    }
  }
}

seedConversationsHsk2().catch(console.error);
