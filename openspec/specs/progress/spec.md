# Learning Progress & Streak Tracking Specification

## Purpose
Manage user study metrics, SRS scheduling, daily study streaks, and cloud synchronization with Supabase.

## Requirements

### Requirement: Streak Calculation and Guest Restriction
The system MUST track consecutive daily study activity for logged-in accounts and prohibit streaks for guests.

#### Scenario: Authenticated user reviews flashcards across consecutive days
- **Given** a logged-in user with review activity logged today and on preceding consecutive days
- **When** the dashboard or profile calculates the study streak
- **Then** the streak MUST reflect the consecutive days count.

#### Scenario: Guest views dashboard or streak metric
- **Given** an unauthenticated visitor
- **When** viewing the dashboard streak card
- **Then** the streak count MUST be `0 days`.
- **And** the UI MUST display a notice that streaks require logging in, with a direct link to the account page.

### Requirement: Cloud Progress Synchronization
The system MUST synchronize learned words, hard words, favorites, and completed lessons with Supabase `user_progress` table.

#### Scenario: Progress update for authenticated user
- **Given** an authenticated user modifies study state (marks word learned, toggles favorite, completes lesson)
- **When** the client saves progress
- **Then** `usePersistentProgress` MUST update local storage and send a `PUT` request to `/api/progress` to upsert records into Supabase `user_progress`.
