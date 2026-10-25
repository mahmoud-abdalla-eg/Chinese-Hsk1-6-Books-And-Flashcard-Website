# Spec Delta

## ADDED Requirements

### Requirement: HSK 2 Intermediate Curriculum Dialogue Coverage
The system SHALL deliver authentic HSK 2 Standard Course dialogue lessons across all 15 textbook units, featuring multi-turn speaker dialogues, intermediate grammatical patterns (such as comparative 比, progressive 着, and directional complements), and target vocabulary identifiers grounded in the HSK 2 syllabus.

#### Scenario: Navigating to HSK 2 conversations
- **WHEN** a user navigates to `/conversations/hsk/2`
- **THEN** the system displays all 15 authentic HSK 2 unit lessons with speaker turns, line-by-line speech audio synthesis, pinyin visibility toggling, and bilingual English and Arabic translations without placeholder notices.

#### Scenario: Inspecting HSK 2 target vocabulary
- **WHEN** a user opens an HSK 2 conversation lesson (e.g., Lesson 1 "九月去北京旅游最好")
- **THEN** the system maps and displays interactive chips for active HSK 2 syllabus vocabulary items associated with that lesson.
