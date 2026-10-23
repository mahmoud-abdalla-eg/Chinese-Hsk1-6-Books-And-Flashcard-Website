# Spec Delta: Course Vocabulary

## Purpose

Maintains the authoritative vocabulary dataset for HSK levels 1 through 4, combining official HSK 3.0 test syllabus words with textbook curriculum dialogues, proper nouns, and complete multilingual definitions.

## ADDED Requirements

### Requirement: Hybrid HSK 3.0 and Textbook Vocabulary Corpus
The system SHALL maintain a comprehensive vocabulary corpus for HSK levels 1 through 4 that fully covers both the official HSK 3.0 standardized examination syllabus and the complete lesson vocabulary of the *New HSK Course* textbooks.

#### Scenario: Vocabulary coverage verification
- **WHEN** vocabulary counts are loaded for levels 1 through 4
- **THEN** HSK 1 contains at least 319 words covering 100% of official Level 1 items and all 15 textbook lessons
- **AND** HSK 2 contains at least 217 words covering 100% of official Level 2 items and all 15 textbook lessons
- **AND** HSK 3 contains at least 538 words covering 100% of official Level 3 items and all 18 textbook lessons
- **AND** HSK 4 contains at least 1,139 words covering 100% of official Level 4 items and all 20 textbook lessons across books 4A and 4B

### Requirement: Full Entry Metadata Completeness
Every word entry in the vocabulary dataset SHALL include simplified Hanzi, traditional Hanzi, tone-marked Pinyin, English translation, Arabic translation, part of speech, and at least one complete example sentence.

#### Scenario: Querying word details
- **WHEN** a learner or UI component retrieves any vocabulary word in levels 1 through 4
- **THEN** the word record MUST have non-empty `hanzi`, `pinyin`, `meaning.en`, `meaning.ar`, `partOfSpeech`, and `example.hanzi` fields
- **AND** unique word IDs MUST remain stable and collision-free across all levels

### Requirement: Polyphone and Distinct Grammar Roles
The system SHALL preserve polyphonic characters and multiple distinct parts of speech as separate valid learning entries with differentiated definitions and examples.

#### Scenario: Polyphonic entries in deck
- **WHEN** words with multiple pronunciations or parts of speech are rendered
- **THEN** entries such as `过` (`guò` verb vs `guo` particle) and `当` (`dāng` vs `dàng`) MUST be presented as separate study items with specific contextual examples
