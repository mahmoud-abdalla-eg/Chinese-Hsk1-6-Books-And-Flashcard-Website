-- Supabase PostgreSQL Schema Migration from MongoDB
-- Run this in your Supabase Dashboard: SQL Editor -> New query -> Run

-- Enable UUID extension if not already enabled
create extension if not exists "pgcrypto";

-- 1. Users Table (Learners)
create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text unique not null,
  password_hash text not null,
  token_version integer not null default 1,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 2. Admin Users Table
create table if not exists admins (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text unique not null,
  password_hash text not null,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 3. User Progress Table
create table if not exists user_progress (
  id uuid primary key default gen_random_uuid(),
  user_id text unique not null,
  progress jsonb not null default '{}'::jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
create index if not exists idx_user_progress_user_id on user_progress(user_id);

-- 4. Course Words Table (HSK 1-6 Vocabulary)
create table if not exists course_words (
  id text not null,
  level integer not null,
  "order" integer not null default 1,
  hanzi text not null,
  pinyin text,
  part_of_speech text default 'word',
  meaning jsonb default '{}'::jsonb,
  example jsonb default '{}'::jsonb,
  audio jsonb default '{}'::jsonb,
  tags jsonb default '[]'::jsonb,
  examples jsonb default '[]'::jsonb,
  book text,
  lesson text,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  primary key (level, id)
);
create index if not exists idx_course_words_level_order on course_words(level, "order");

-- 5. Course Grammar Table
create table if not exists course_grammar (
  id text primary key,
  hsk_level integer not null,
  "order" integer not null default 1,
  lesson_code text,
  pattern text,
  explanation text,
  details text,
  example jsonb default '{}'::jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
create index if not exists idx_course_grammar_level_order on course_grammar(hsk_level, "order");

-- 6. Course Grammar Units Table
create table if not exists course_grammar_units (
  id integer not null,
  level integer not null,
  title text,
  description text,
  start_order integer not null default 1,
  end_order integer not null default 1,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  primary key (level, id)
);

-- 7. Course Conversations Table
create table if not exists course_conversations (
  id text primary key,
  hsk_level integer not null,
  unit_id integer not null,
  status text default 'needs-authoring',
  title jsonb default '{}'::jsonb,
  target_vocabulary_ids jsonb default '[]'::jsonb,
  dialogue jsonb default '[]'::jsonb,
  grammar_notes jsonb default '[]'::jsonb,
  cultural_notes jsonb default '[]'::jsonb,
  comprehension_questions jsonb default '[]'::jsonb,
  shadowing_practice jsonb default '{"enabled": true, "mode": "line-by-line"}'::jsonb,
  authoring_note text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
create index if not exists idx_course_conversations_level_unit on course_conversations(hsk_level, unit_id);

-- 8. Course Settings Table
create table if not exists course_settings (
  key text primary key,
  label text,
  settings jsonb not null default '{}'::jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 9. Audio Records Table
create table if not exists audio_records (
  key text primary key,
  label text,
  data jsonb default '{}'::jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 10. Site Content Table
create table if not exists site_content (
  key text primary key,
  label text,
  value text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 11. Analytics Events Table
create table if not exists analytics_events (
  id uuid primary key default gen_random_uuid(),
  type text not null,
  path text default '/',
  referrer text default '',
  user_agent text default '',
  metrics jsonb default '{}'::jsonb,
  created_at timestamptz default now()
);
create index if not exists idx_analytics_events_type_created on analytics_events(type, created_at desc);

-- 12. Course Data State Table (tracking seeded versions)
create table if not exists course_data_state (
  id text primary key,
  version text,
  seeded_at timestamptz default now(),
  meta jsonb default '{}'::jsonb
);

-- 13. Import Batches Table
create table if not exists import_batches (
  id uuid primary key default gen_random_uuid(),
  status text default 'pending',
  type text,
  data jsonb default '{}'::jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 14. Contact Submissions Table (User Feedback & Inquiries)
create table if not exists contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text not null,
  topic text not null default 'general',
  message text not null,
  metadata jsonb default '{}'::jsonb,
  status text default 'new',
  created_at timestamptz default now()
);

-- ==============================================================================
-- 15. Row Level Security (RLS) & Policies
-- ==============================================================================

alter table if exists users enable row level security;
alter table if exists admins enable row level security;
alter table if exists user_progress enable row level security;
alter table if exists course_words enable row level security;
alter table if exists course_grammar enable row level security;
alter table if exists course_grammar_units enable row level security;
alter table if exists course_conversations enable row level security;
alter table if exists course_settings enable row level security;
alter table if exists audio_records enable row level security;
alter table if exists site_content enable row level security;
alter table if exists analytics_events enable row level security;
alter table if exists course_data_state enable row level security;
alter table if exists import_batches enable row level security;
alter table if exists contact_submissions enable row level security;

-- Public Read-Only Policies for Content Tables (Accessible to anon and authenticated clients)
create policy "Public read-only course_words" on course_words for select to anon, authenticated using (true);
create policy "Public read-only course_grammar" on course_grammar for select to anon, authenticated using (true);
create policy "Public read-only course_grammar_units" on course_grammar_units for select to anon, authenticated using (true);
create policy "Public read-only course_conversations" on course_conversations for select to anon, authenticated using (true);
create policy "Public read-only site_content" on site_content for select to anon, authenticated using (true);
create policy "Public read-only course_data_state" on course_data_state for select to anon, authenticated using (true);

-- Contact Submissions Policies
create policy "Anon can insert contact submissions" on contact_submissions for insert to anon, authenticated with check (true);
