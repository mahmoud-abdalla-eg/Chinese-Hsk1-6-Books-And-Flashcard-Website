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

### Requirement: Fluid Hero Heading and Surface Scaling
All level hero banners, dashboard intros, and main page headings SHALL use responsive font scaling and word-breaking to prevent horizontal text overflow on mobile viewports narrower than 640px, and hero surface padding SHALL scale down to preserve content space.

#### Scenario: Heading rendering on phone viewports
- **WHEN** a user navigates to an HSK level overview, dashboard, or home page on a viewport narrower than 640px
- **THEN** primary headings MUST scale to responsive sizes (e.g. `text-3xl sm:text-5xl`) with word-wrapping enabled
- **AND** the heading text MUST NOT be clipped or cause horizontal document scrolling
- **AND** the container surface padding MUST scale to `p-4` or `p-5` on mobile (down from `p-7` desktop padding).

### Requirement: Mobile Unit Batch and Stats Layout
On HSK level overview pages, the unit batch size toggle SHALL render as a full-width segmented control on viewports narrower than 640px, and level overview statistics SHALL render in a compact mobile format.

#### Scenario: Switching batch size on a phone
- **WHEN** a user views the unit list on a phone screen
- **THEN** the batch size toggle buttons (50, 25, 100 words) MUST span full container width without horizontal clipping or wrapping artifacts
- **AND** the active chunk size MUST be clearly indicated with high-contrast active styling.

#### Scenario: Level stats display on mobile
- **WHEN** the HSK level hero displays on viewports narrower than 640px
- **THEN** total words, unit count, and practice modes MUST be displayed in a compact horizontal metrics row
- **AND** the stats MUST NOT occupy more than 20% of vertical screen height above the unit cards.
