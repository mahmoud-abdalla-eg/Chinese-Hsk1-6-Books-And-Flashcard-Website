# not-found-experience Specification

## Purpose

Provides a cohesive, culturally resonant, and bilingual 404 error experience that guides learners smoothly back to core learning paths when accessing missing routes.

## Requirements

### Requirement: Branded 404 Visual Presentation
The system SHALL present a dedicated, branded 404 page ("The Lost Scholar") when a requested route cannot be found, rendered inside the application root layout with consistent styling.

#### Scenario: Non-existent URL navigation
- **WHEN** a user visits any non-existent, broken, or mistyped URL
- **THEN** the system renders the custom 404 page within the global header and footer frame, displaying the "404" heading, the Imperial Scarlet seal badge [ 迷 ], and localized explanatory text

### Requirement: Recovery Action Controls
The system SHALL provide immediate recovery controls on the 404 page allowing learners to navigate to primary destinations.

#### Scenario: Return to Home clicked
- **WHEN** a learner clicks the "Return to Home" action button
- **THEN** the system navigates to the root homepage ("/")

#### Scenario: Open Dashboard clicked
- **WHEN** a learner clicks the "Open Dashboard" action button
- **THEN** the system navigates to the learner dashboard ("/dashboard")

### Requirement: Direct HSK Level Quick-Jump Strip
The system SHALL render quick-access navigation pills for all six HSK study levels directly on the 404 page.

#### Scenario: Learner selects an HSK level pill
- **WHEN** a learner clicks any level pill from HSK 1 to HSK 6
- **THEN** the system navigates directly to that level's study hub (`/hsk/{level}`)

### Requirement: Multilingual and RTL Support
The system SHALL localize all text on the 404 page based on the active language setting (English and Arabic) and apply proper RTL document direction.

#### Scenario: Arabic language active
- **WHEN** the learner has Arabic selected or switches to Arabic
- **THEN** the 404 headline, description, button labels, and quick-jump title display in Arabic with right-to-left layout direction
