# Spec Delta: localization

## MODIFIED Requirements

### Requirement: Full Arabic and English Interface Parity
The system MUST provide localized static UI labels, table headers, action buttons, search placeholders, card views, homepage hero and preview elements, hub banners, and account forms across both English and Arabic with correct bidirectional rendering.

#### Scenario: Learner interacts with vocabulary table in Arabic
- **WHEN** the site language is set to Arabic
- **THEN** table column headers (`#`, `الصينية`, `المعنى`, `الإجراءات`, `الصوت`), search input placeholder, and action buttons (`+ تعلم` / `✓ تم التعلم`) MUST render in Arabic.

#### Scenario: Learner interacts with study cards and forms in Arabic
- **WHEN** the site language is set to Arabic
- **THEN** word detail headings, unit cards, lesson scaffolds, favorite/learned study buttons, and account management forms MUST render in Arabic with correct RTL alignment.

#### Scenario: Learner views homepage in Arabic
- **WHEN** the site language is set to Arabic
- **THEN** the homepage hero title, subtitle, CTA buttons (`ابدأ HSK 1`, `راجع البطاقات`, `مسار القواعد`), stats badges (`كلمات`, `وحدات`), level cards, course highlights, and study modes MUST render in Arabic.

#### Scenario: Learner views live lesson preview in Arabic
- **WHEN** the site language is set to Arabic
- **THEN** the preview card badges (`معاينة درس مباشر`, `المحاكاة الصوتية`), speaker tags (`المعلم`, `الطالب`), dialogue translations, and upcoming pronunciation notice MUST render in Arabic.
- **AND** Chinese Hanzi and Pinyin strings MUST render with directional isolation (`dir="ltr"`) to prevent punctuation and tone mark flipping in RTL layout.

#### Scenario: Learner visits hub pages and unit controls in Arabic
- **WHEN** the site language is set to Arabic
- **THEN** the header banners, statistics, deck/library buttons on `/flashcards`, `/conversations`, and `/grammar`, and unit batch size selectors on `/hsk/[level]` MUST render in Arabic.
