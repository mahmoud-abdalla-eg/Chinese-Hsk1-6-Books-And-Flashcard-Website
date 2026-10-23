# responsive-learning-ui Specification

## Purpose
Ensures learning interfaces, vocabulary lists, forms, and layout viewports adapt seamlessly across mobile devices with accessible touch targets and safe-area compatibility.

## Requirements

### Requirement: Responsive Vocabulary Cards
On mobile viewports (< 640px), the vocabulary list SHALL transform from a table grid into stacked word cards with full-width translations.

#### Scenario: Mobile vocabulary browsing
- **WHEN** a user views a vocabulary list on a viewport narrower than 640px
- **THEN** each word MUST be rendered as an individual card displaying Hanzi, Pinyin, and complete meaning text without width truncation or 56px grid squeezing
- **AND** the pronunciation audio button and favorite/learned toggles MUST remain directly accessible with touch-friendly hitboxes.

### Requirement: Mobile Viewport and Form Touch Optimization
The system SHALL export standardized mobile viewport metadata and prevent automatic browser zooming on form inputs.

#### Scenario: Mobile viewport configuration
- **WHEN** pages render on mobile devices
- **THEN** the root layout MUST set viewport metadata with `width=device-width`, `initialScale=1`, and `viewportFit=cover`
- **AND** the root container MUST NOT use `overflow-hidden` that disrupts native sticky elements or momentum scrolling.

#### Scenario: Form input focus on iOS Safari
- **WHEN** a user focuses an input field in search, login, or registration forms
- **THEN** the input text size MUST be at least 16px to prevent automatic viewport zooming.

### Requirement: Mobile Course Hierarchy
On HSK level overview pages, the system SHALL prioritize primary study units over secondary navigation lists on mobile devices.

#### Scenario: Viewing HSK level overview on mobile
- **WHEN** an HSK level page is displayed on a mobile viewport (< 1024px)
- **THEN** interactive study unit cards MUST be rendered before auxiliary level map sidebar links in the visual flow.
