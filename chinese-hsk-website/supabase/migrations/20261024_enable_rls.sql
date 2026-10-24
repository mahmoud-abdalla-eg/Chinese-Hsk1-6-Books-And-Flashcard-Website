-- Migration: Enable Row Level Security (RLS) & Add token_version to users
-- Run this in your Supabase Dashboard: SQL Editor -> New query -> Run

-- 1. Add token_version column for stateless session revocation
alter table if exists users 
add column if not exists token_version integer not null default 1;

-- 2. Enable Row Level Security (RLS) across all tables
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

-- 3. Public Read-Only Policies for Content Tables (Accessible to anon and authenticated clients)
drop policy if exists "Public read-only course_words" on course_words;
create policy "Public read-only course_words" 
  on course_words for select 
  to anon, authenticated 
  using (true);

drop policy if exists "Public read-only course_grammar" on course_grammar;
create policy "Public read-only course_grammar" 
  on course_grammar for select 
  to anon, authenticated 
  using (true);

drop policy if exists "Public read-only course_grammar_units" on course_grammar_units;
create policy "Public read-only course_grammar_units" 
  on course_grammar_units for select 
  to anon, authenticated 
  using (true);

drop policy if exists "Public read-only course_conversations" on course_conversations;
create policy "Public read-only course_conversations" 
  on course_conversations for select 
  to anon, authenticated 
  using (true);

drop policy if exists "Public read-only site_content" on site_content;
create policy "Public read-only site_content" 
  on site_content for select 
  to anon, authenticated 
  using (true);

drop policy if exists "Public read-only course_data_state" on course_data_state;
create policy "Public read-only course_data_state" 
  on course_data_state for select 
  to anon, authenticated 
  using (true);

-- 4. Private Tables Isolation:
-- users, admins, user_progress, course_settings, audio_records, analytics_events, import_batches
-- With RLS enabled and no public policies granted, direct access via NEXT_PUBLIC_SUPABASE_ANON_KEY is rejected.
-- All operations are performed safely server-side via Supabase service_role key.
