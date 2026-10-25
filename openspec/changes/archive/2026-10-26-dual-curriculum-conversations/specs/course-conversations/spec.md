# Spec Delta: course-conversations

## ADDED Requirements

### Requirement: Dual-Curriculum Classification and Switching
The system SHALL classify each conversation lesson under a specific curriculum edition (`standard` for classic BLCU Standard Course, `hsk3` for official FLTRP New HSK 3.0 Course) and provide an interactive filter on conversation level pages to view all lessons, only HSK 3.0 lessons, or only Standard Course lessons.

#### Scenario: Filtering conversations by curriculum edition
- **WHEN** a user selects a curriculum filter option (e.g., "HSK 3.0" or "Standard Course") on `/conversations/hsk/[level]`
- **THEN** the system dynamically filters the displayed lessons to match the selected curriculum and updates the lesson count indicator.

#### Scenario: Viewing curriculum badge indicators
- **WHEN** a user views a conversation lesson card
- **THEN** the system displays a clear visual badge indicating whether the dialogue originates from the HSK 3.0 Edition or the Standard Course.

### Requirement: HSK 1 and 2 New 3.0 Curriculum Dialogue Coverage
The system SHALL deliver authentic New HSK 3.0 course dialogue lessons across all 15 units for HSK 1 and all 15 units for HSK 2, featuring multi-turn speaker dialogues, modern themes, diacritical Pinyin, and bilingual English and Arabic translations.

#### Scenario: Navigating to HSK 1 or HSK 2 New 3.0 conversations
- **WHEN** a user selects the HSK 3.0 curriculum view on `/conversations/hsk/1` or `/conversations/hsk/2`
- **THEN** the system displays the 15 units of the New HSK 3.0 Course with full 4-layer dialogues, grammar points, and comprehension questions.
