# Spec Delta: learning-materials

## MODIFIED Requirements

### Requirement: Level Resource Breakdown
Each HSK level card SHALL list the core curriculum assets available for that level, including the main course textbook, exercise workbook, listening audio tracks, and mock examination papers, presenting standard monochrome iconography without redundant circular badge elements.

#### Scenario: Displaying curriculum items on card
- **WHEN** a level card is rendered
- **THEN** it MUST display the level title, difficulty badge, word count indicator, and dedicated rows or badges for:
  - Official Course Textbook (PDF)
  - Exercise Workbook with Answer Keys (PDF)
  - Audio Listening Tracks (MP3 / Google Drive audio folder)
  - Official Mock Practice Tests & Keys (PDF & Audio)
  - New HSK 3.0 (2026) Character Writing Books where available
- **AND** it MUST NOT render an oversized or clipped circular badge icon on the top-left of the card header
- **AND** all resource row indicators MUST use clean monochrome outline icons rather than colorful badge boxes or emojis.

#### Scenario: Mobile viewport responsiveness
- **WHEN** viewed on viewport widths narrower than 640px
- **THEN** card titles and stats badges MUST NOT be clipped or truncated
- **AND** resource row buttons MUST wrap gracefully without horizontal overflow.

## ADDED Requirements

### Requirement: Dual Curriculum Edition Switching
Each HSK level card SHALL provide an in-card toggle allowing learners to switch instantaneously between the New HSK 3.0 (2026) curriculum and the Classic HSK 2.0 edition without page reloads.

#### Scenario: Switching between curriculum editions on a card
- **WHEN** a learner clicks the "New HSK 3.0 (2026)" toggle pill on any HSK level card
- **THEN** that card MUST immediately display the 2026 curriculum assets and update the package folder link to the New Books Drive folder
- **WHEN** the learner clicks the "Classic HSK 2.0" toggle pill
- **THEN** that card MUST immediately display the Classic Standard Course assets, mock tests, and update the package folder link to the Classic Books Drive folder.
