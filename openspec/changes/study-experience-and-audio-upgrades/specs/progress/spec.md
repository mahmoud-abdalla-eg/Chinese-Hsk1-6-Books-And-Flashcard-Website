# Spec Delta: progress

## ADDED Requirements

### Requirement: Daily Study Review Goals
The system MUST support a configurable daily review goal and track daily completed reviews against the target.

#### Scenario: User checks daily goal progress on dashboard
- **WHEN** a user visits the dashboard
- **THEN** the dashboard MUST render a circular visual progress ring displaying the count of cards reviewed today versus their target daily goal (default: 15 cards).
- **AND** show an achievement indicator when the daily target is reached.
