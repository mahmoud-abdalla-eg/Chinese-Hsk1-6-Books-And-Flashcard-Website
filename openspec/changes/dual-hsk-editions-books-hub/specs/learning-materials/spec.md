# Spec Delta: learning-materials

## MODIFIED Requirements

### Requirement: Level Resource Breakdown
Each HSK level card SHALL list the core curriculum assets available for that level across both New HSK 3.0 (2026) and Classic HSK 2.0 editions, including textbooks, workbooks, character writing practice books, listening audio tracks, and mock examination papers, presenting clean monochrome iconography without redundant badges.

#### Scenario: Displaying New HSK 3.0 (2026) curriculum items
- **WHEN** the New HSK 3.0 edition is selected on a level card
- **THEN** it MUST display dedicated resource rows for:
  - New HSK Course Textbook (PDF preview and direct download)
  - New HSK Exercise Workbook (PDF preview and direct download)
  - Character Writing Practice Book (PDF preview and direct download) when available
  - 2026 Listening Audio tracks (MP3 / Drive folder) and external audio streaming link
- **AND** all resource row indicators MUST use clean monochrome outline icons.

#### Scenario: Displaying Classic HSK 2.0 curriculum items
- **WHEN** the Classic HSK 2.0 edition is selected on a level card
- **THEN** it MUST display dedicated resource rows for:
  - Official Standard Course Textbook (PDF preview and download)
  - Exercise Workbook with Answer Keys / Pinyin Chart (PDF preview and download)
  - Audio Listening Tracks (MP3 / Drive folder)
  - Official Mock Practice Tests & Keys (PDF & Audio) with expandable exam selector
- **AND** all resource row indicators MUST use clean monochrome outline icons.

#### Scenario: Mobile viewport responsiveness
- **WHEN** viewed on viewport widths narrower than 640px
- **THEN** card titles, edition toggle pills, and stats badges MUST NOT be clipped or truncated
- **AND** resource row buttons MUST wrap gracefully without horizontal overflow.

## ADDED Requirements

### Requirement: Dual Curriculum Edition Switching
Each HSK level card SHALL provide an in-card toggle allowing learners to switch instantaneously between the New HSK 3.0 (2026) curriculum and the Classic HSK 2.0 edition without page reloads.

#### Scenario: Switching between curriculum editions on a card
- **WHEN** a learner clicks the "New HSK 3.0 (2026)" toggle pill on any HSK level card
- **THEN** that card MUST immediately display the 2026 curriculum assets and update the package folder link to the New Books Drive folder
- **WHEN** the learner clicks the "Classic HSK 2.0" toggle pill
- **THEN** that card MUST immediately display the Classic Standard Course assets, mock tests, and update the package folder link to the Classic Books Drive folder.
