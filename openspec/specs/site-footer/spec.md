# site-footer Specification

## Purpose

Provides learners with accessible site navigation, creator attribution to Mahmoud Abdalla, a direct email channel for suggestions and issues, and an invitation to support keeping the website free and ad-free.

## Requirements

### Requirement: Support the project section
The site footer SHALL display a dedicated support section that invites learners to support the platform to keep it running free and ad-free, featuring an action link or button to contact the creator.

#### Scenario: Learner clicks support contact action
- **WHEN** the learner clicks the support action in the footer
- **THEN** the client opens an email compose window to `mahmouddesign01@gmail.com` with a pre-filled subject regarding supporting Mandarin Flow HSK.

### Requirement: Author attribution and GitHub profile link
The site footer SHALL display author credit identifying Mahmoud Abdalla in a bottom credits bar, including an external link to the author's GitHub profile.

#### Scenario: Learner clicks author GitHub link
- **WHEN** the learner clicks the GitHub profile link
- **THEN** the browser opens `https://github.com/mahmoud-abdalla-eg` in a new tab with `target="_blank"` and `rel="noopener noreferrer"`.

### Requirement: Suggestions and feedback channel
The site footer SHALL provide an accessible contact link for submitting suggestions, bug reports, and feedback directly to the creator.

#### Scenario: Learner clicks suggestions and feedback link
- **WHEN** the learner clicks the suggestions link
- **THEN** the client opens an email compose window to `mahmouddesign01@gmail.com` with a subject line indicating learner suggestions or feedback.

### Requirement: Multilingual localization and RTL support
All newly added footer section titles, descriptions, button labels, and credit text SHALL support English, Chinese, and Arabic via the application's localization dictionary, respecting active layout direction.

#### Scenario: Learner switches language to Arabic
- **WHEN** the active interface language is set to Arabic (`ar`)
- **THEN** all footer section headings, support text, and bottom credits render in Arabic with RTL reading order.

#### Scenario: Learner switches language to English or Chinese
- **WHEN** the active interface language is set to English (`en`) or Chinese (`zh`)
- **THEN** all footer sections display the corresponding localized translations in LTR layout.
