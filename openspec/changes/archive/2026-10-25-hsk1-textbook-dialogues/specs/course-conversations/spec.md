# Spec Delta

## Purpose

Provides curriculum-aligned interactive dialogue lessons featuring multi-turn speaker lines, synchronized audio playback, pinyin visibility toggling, bilingual English and Arabic translations, target vocabulary tooltips, and comprehension checks.

## ADDED Requirements

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
