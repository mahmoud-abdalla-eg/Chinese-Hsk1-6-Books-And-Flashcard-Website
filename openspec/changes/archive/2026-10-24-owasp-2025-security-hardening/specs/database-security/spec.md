# Spec Delta

## Purpose

Enforces database-level access boundaries and Row Level Security policies on Supabase PostgreSQL tables to protect sensitive learner and administrative data from unauthorized anonymous access.

## ADDED Requirements

### Requirement: Row Level Security Enforcement
The database MUST enable Row Level Security (RLS) on all production tables to prevent unauthorized direct data access through public client keys.

#### Scenario: Anonymous client attempts unauthorized access to private tables
- **WHEN** an unauthenticated client queries private tables (`users`, `admins`, `user_progress`, `import_batches`, `audio_records`, `course_settings`) using the public anonymous API key
- **THEN** the database MUST deny access and return an empty result set or authorization error.

#### Scenario: Service role operations bypass RLS for internal server handlers
- **WHEN** backend route handlers execute database operations using the verified service role client
- **THEN** queries MUST succeed without RLS restriction while preserving transactional integrity.

### Requirement: Least Privilege Anonymous Table Access
Public course content tables MUST restrict anonymous API key access strictly to read-only queries.

#### Scenario: Anonymous client reads course catalog
- **WHEN** an unauthenticated visitor requests vocabulary, grammar, conversations, or site content
- **THEN** the database MUST allow `SELECT` operations on public course tables (`course_words`, `course_grammar`, `course_grammar_units`, `course_conversations`, `site_content`).

#### Scenario: Anonymous client attempts mutation on course catalog
- **WHEN** an unauthenticated request attempts `INSERT`, `UPDATE`, or `DELETE` on public course tables
- **THEN** the database MUST reject the mutation with an access violation error.
