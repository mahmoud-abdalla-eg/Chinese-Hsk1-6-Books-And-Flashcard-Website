# Spec Delta: offline-caching

## Purpose
Provides lightweight client-side service worker caching to ensure fast, reliable performance on slow or intermittent network connections.

## ADDED Requirements

### Requirement: Service Worker Static & Vocabulary Caching
The application MUST register a lightweight Service Worker that pre-caches essential fonts, styles, and vocabulary data for resilient offline and slow-network usage.

#### Scenario: User studies on an intermittent network connection
- **WHEN** a learner navigates between flashcard decks or vocabulary pages during slow or interrupted network conditions
- **THEN** the Service Worker MUST serve cached static assets and data from `CacheStorage` without displaying broken or blank pages.
