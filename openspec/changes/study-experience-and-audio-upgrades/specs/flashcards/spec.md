# Spec Delta: flashcards

## ADDED Requirements

### Requirement: Flashcard Audio Speed Control
The flashcard deck MUST allow learners to toggle audio pronunciation between standard speed (1.0x) and slowed speed (0.75x) to clearly distinguish Chinese tone contours.

#### Scenario: Learner toggles slow audio playback
- **WHEN** the learner clicks the audio playback speed toggle on a flashcard
- **THEN** both HTML audio playback and Web Speech synthesis playback rates MUST adjust to 0.75x speed.
- **AND** the toggle UI MUST indicate that slow mode is active.

### Requirement: Bidirectional Study Modes
The flashcard deck MUST support switching between Recognition Mode (Hanzi on front, Meaning on back) and Recall Mode (Meaning on front, Hanzi and Pinyin on back).

#### Scenario: Learner switches to Recall Mode
- **WHEN** the learner selects Recall Mode in the flashcard deck controls
- **THEN** the front of the flashcard MUST display the English or Arabic translation.
- **AND** the back of the flashcard MUST display the Hanzi, Pinyin, and audio button upon flipping.
