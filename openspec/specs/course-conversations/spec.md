# course-conversations Specification

## Purpose
Provides curriculum-aligned interactive dialogue lessons featuring multi-turn speaker lines, synchronized audio playback, pinyin visibility toggling, bilingual English and Arabic translations, target vocabulary tooltips, and comprehension checks.

## Requirements

### Requirement: Authentic Curriculum Dialogue Structure
The system SHALL present each HSK conversation lesson with unit metadata, ordered speaker turns, speaker attribution (e.g., Speaker A, Speaker B, or character names), and associated target vocabulary identifiers matching the HSK syllabus.

#### Scenario: Viewing a structured dialogue lesson
- **WHEN** a user navigates to an HSK conversation level page (e.g., `/conversations/hsk/1`)
- **THEN** the system displays all available unit dialogue lessons with their titles, speaker turns, and lesson metadata without displaying pending placeholder notices.

### Requirement: Multilingual Content Display
The system SHALL display Chinese characters (Hanzi), Hanyu Pinyin with tonal diacritics, English translations, and Arabic translations for every dialogue line, while providing toggle controls for pinyin and translation visibility.

#### Scenario: Toggling pinyin and translations
- **WHEN** a user toggles pinyin or translation visibility on a conversation lesson
- **THEN** the system updates the dialogue display to show or hide pinyin, English, or Arabic text in accordance with the user's active display preference.

### Requirement: Audio Playback and Speech Fallback
The system SHALL support audio pronunciation playback for individual dialogue lines, utilizing configured audio track references when available and falling back to browser Web Speech API Chinese speech synthesis.

#### Scenario: Playing dialogue line audio
- **WHEN** a user clicks the audio play button on a dialogue line
- **THEN** the system plays the corresponding Chinese spoken audio for that specific sentence at the selected playback speed.

### Requirement: Target Vocabulary Grounding
The system SHALL associate dialogue lines with active HSK syllabus vocabulary identifiers and provide interactive vocabulary chips showing Hanzi, Pinyin, and translations.

#### Scenario: Inspecting dialogue vocabulary
- **WHEN** a user views the target vocabulary list of a dialogue lesson
- **THEN** the system renders interactive chips linking the dialogue context to the underlying HSK word definitions.

### Requirement: Comprehension Verification
The system SHALL provide interactive multiple-choice comprehension questions for each unit conversation lesson to evaluate learner understanding of the dialogue context.

#### Scenario: Completing comprehension questions
- **WHEN** a user selects an answer option for a lesson comprehension question
- **THEN** the system evaluates the selection and displays immediate corrective feedback.

### Requirement: HSK 2 Intermediate Curriculum Dialogue Coverage
The system SHALL deliver authentic HSK 2 Standard Course dialogue lessons across all 15 textbook units, featuring multi-turn speaker dialogues, intermediate grammatical patterns (such as comparative 比, progressive 着, and directional complements), and target vocabulary identifiers grounded in the HSK 2 syllabus.

#### Scenario: Navigating to HSK 2 conversations
- **WHEN** a user navigates to `/conversations/hsk/2`
- **THEN** the system displays all 15 authentic HSK 2 unit lessons with speaker turns, line-by-line speech audio synthesis, pinyin visibility toggling, and bilingual English and Arabic translations without placeholder notices.

#### Scenario: Inspecting HSK 2 target vocabulary
- **WHEN** a user opens an HSK 2 conversation lesson (e.g., Lesson 1 "九月去北京旅游最好")
- **THEN** the system maps and displays interactive chips for active HSK 2 syllabus vocabulary items associated with that lesson.

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
