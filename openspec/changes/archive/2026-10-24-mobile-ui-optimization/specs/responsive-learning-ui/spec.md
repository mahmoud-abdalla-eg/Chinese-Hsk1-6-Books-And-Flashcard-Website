# Spec Delta

## ADDED Requirements

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
