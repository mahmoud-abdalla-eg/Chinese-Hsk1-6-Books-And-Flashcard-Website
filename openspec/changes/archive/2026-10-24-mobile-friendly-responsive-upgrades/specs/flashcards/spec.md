# Spec Delta

## ADDED Requirements

### Requirement: Touch-Swipe Gesture Navigation
The flashcard deck SHALL support native touch swipe gestures to navigate cards on touch-enabled devices.

#### Scenario: Swiping left to advance card
- **WHEN** a user swipes horizontally to the left by at least 50px across the flashcard surface
- **AND** horizontal travel exceeds vertical movement
- **THEN** the deck MUST advance to the next card
- **AND** flip state MUST reset to front.

#### Scenario: Swiping right to return to previous card
- **WHEN** a user swipes horizontally to the right by at least 50px across the flashcard surface
- **AND** horizontal travel exceeds vertical movement
- **THEN** the deck MUST return to the previous card
- **AND** flip state MUST reset to front.

#### Scenario: Vertical scrolling past flashcards
- **WHEN** a user swipes vertically over the flashcard area
- **THEN** the flashcard deck MUST allow native page scrolling without triggering card navigation.

### Requirement: Responsive Mobile Flashcard Layout
The flashcard interface SHALL adapt typography, toolbar controls, and review action buttons for mobile screens.

#### Scenario: Multi-character Hanzi scaling
- **WHEN** a flashcard displays a Chinese term with 3 or more characters on a mobile screen (< 640px)
- **THEN** the Hanzi font size MUST scale responsively (down to `text-5xl`) to prevent horizontal text overflow outside card padding.

#### Scenario: Mobile controls toolbar
- **WHEN** the deck is displayed on mobile viewports
- **THEN** the deck filters, mode toggles, and audio rate controls MUST fit into a compact, scrollable or wrap-optimized toolbar that keeps the flashcard visible above the fold.
