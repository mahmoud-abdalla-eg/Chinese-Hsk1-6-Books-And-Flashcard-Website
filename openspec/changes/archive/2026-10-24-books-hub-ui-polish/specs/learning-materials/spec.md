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
- **AND** it MUST NOT render an oversized or clipped circular badge icon on the top-left of the card header
- **AND** all resource row indicators MUST use clean monochrome outline icons rather than colorful badge boxes or emojis.

#### Scenario: Mobile viewport responsiveness
- **WHEN** viewed on viewport widths narrower than 640px
- **THEN** card titles and stats badges MUST NOT be clipped or truncated
- **AND** resource row buttons MUST wrap gracefully without horizontal overflow.
