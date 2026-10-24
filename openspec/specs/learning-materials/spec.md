# learning-materials Specification

## Purpose
Enables learners to explore, preview, and download official HSK Standard Course textbooks, exercise workbooks, listening audio tracks, and mock examination papers organized across HSK levels 1 to 6.

## Requirements

### Requirement: Six Level Materials Hub Overview
The system SHALL provide a dedicated `/books` route presenting 6 distinct HSK level cards (HSK 1 through HSK 6) that categorize official learning materials.

#### Scenario: Navigating to books hub
- **WHEN** a user navigates to `/books`
- **THEN** the system MUST render a page with a title, localized description, level filter tabs, and a grid of 6 cards corresponding to HSK levels 1, 2, 3, 4, 5, and 6.

#### Scenario: Level filter selection
- **WHEN** the user selects a specific level filter tab (e.g., "HSK 2")
- **THEN** the view MUST highlight that filter and show the selected level card prominently
- **WHEN** the user selects "All"
- **THEN** all 6 level cards MUST be visible in the grid.

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

### Requirement: Document and Audio Preview
The system SHALL provide direct preview mechanisms for study materials without requiring visitors to download large files to view content.

#### Scenario: Previewing a textbook or workbook PDF
- **WHEN** the user clicks the "Preview" action for a textbook, workbook, or mock exam
- **THEN** the system MUST open the document in Google Drive's secure viewer in a new browser tab or embedded dialog.

#### Scenario: Accessing listening audio tracks
- **WHEN** the user clicks "Audio Tracks" or "Listen"
- **THEN** the system MUST link directly to the listening audio folder on Google Drive or provide direct audio playback links.

### Requirement: One-Click Level Package Download
Each level card SHALL provide a prominent "Download All" action allowing learners to download or access the full study package for that level in a single click.

#### Scenario: Triggering Download All
- **WHEN** the user clicks the "Download All" button on any HSK level card
- **THEN** the system MUST open the level's dedicated Google Drive folder containing all textbooks, workbooks, audios, and tests for immediate viewing and bulk download.

### Requirement: Internationalization and RTL Support
The learning materials hub SHALL fully support English, Chinese, and Arabic localizations with appropriate layout direction.

#### Scenario: Viewing materials in Arabic
- **WHEN** the active language is Arabic (`ar`)
- **THEN** all titles, card labels, badges, action buttons, and resource types MUST be rendered in Arabic
- **AND** the layout MUST follow RTL alignment conventions.
