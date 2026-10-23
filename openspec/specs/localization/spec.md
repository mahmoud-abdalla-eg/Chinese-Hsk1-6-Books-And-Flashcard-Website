# localization Specification

## Purpose

Provides complete internationalization parity between English and Arabic across all static UI elements, and ensures vocabulary meanings, examples, and dialogues render strictly according to the active site language.

## Requirements

### Requirement: Single Localized Meaning Display
The system MUST display vocabulary word meanings, example sentences, and dialogue translations exclusively in the active site language without stacking multiple languages simultaneously.

#### Scenario: Arabic language active renders Arabic translation
- **WHEN** the user has selected Arabic (`ar`) as the site language
- **THEN** the vocabulary table, word detail views, conversation dialogues, and grammar examples MUST render the Arabic translation.
- **AND** MUST NOT display the English translation underneath or alongside the Arabic text unless the Arabic translation is missing in the database.

#### Scenario: English language active renders English translation
- **WHEN** the user has selected English (`en`) as the site language
- **THEN** the vocabulary table, word detail views, conversation dialogues, and grammar examples MUST render the English translation.
- **AND** MUST NOT display the Arabic translation underneath or alongside the English text unless the English translation is missing in the database.

### Requirement: Full Arabic and English Interface Parity
The system MUST provide localized static UI labels, table headers, action buttons, search placeholders, card views, and account forms across both English and Arabic.

#### Scenario: Learner interacts with vocabulary table in Arabic
- **WHEN** the site language is set to Arabic
- **THEN** table column headers (`#`, `الصينية`, `المعنى`, `الإجراءات`, `الصوت`), search input placeholder, and action buttons (`+ تعلم` / `✓ تم التعلم`) MUST render in Arabic.

#### Scenario: Learner interacts with study cards and forms in Arabic
- **WHEN** the site language is set to Arabic
- **THEN** word detail headings, unit cards, lesson scaffolds, favorite/learned study buttons, and account management forms MUST render in Arabic with correct RTL alignment.
