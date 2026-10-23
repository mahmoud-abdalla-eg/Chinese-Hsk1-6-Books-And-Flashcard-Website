# Spec Delta: Progress

## ADDED Requirements

### Requirement: Unit Progress Calculation and Chunking Preference
The system SHALL calculate unit progress percentage based on the number of learned word IDs within that unit relative to the unit's total words, regardless of the chosen unit chunk size.

#### Scenario: Computing progress for a 50-word unit
- **WHEN** a learner completes or reviews words in a 50-word unit
- **THEN** unit progress percentage MUST accurately equal `(learnedWordsInUnit / totalWordsInUnit) * 100`

#### Scenario: Switching unit grouping mode
- **WHEN** a user switches unit grouping between 50 words, 25 words, or textbook lessons
- **THEN** progress on individual words MUST remain intact and unit percentage completion MUST recalculate accurately for the newly partitioned units
