# Spec Delta

## MODIFIED Requirements

### Requirement: Responsive Mobile Flashcard Layout
The flashcard interface SHALL adapt typography, toolbar controls, and review action buttons for mobile screens.

#### Scenario: Multi-character Hanzi scaling
- **WHEN** a flashcard displays a Chinese term with 3 or more characters on a mobile screen (< 640px)
- **THEN** the Hanzi font size MUST scale responsively (down to `text-5xl`) to prevent horizontal text overflow outside card padding.

#### Scenario: Mobile controls toolbar
- **WHEN** the deck is displayed on mobile viewports (< 640px)
- **THEN** the deck filters, mode toggles, and audio rate controls MUST fit into a clean horizontal scrollable rail (`overflow-x-auto`)
- **AND** the controls MUST NOT stack into more than two rows or push the flashcard below the initial mobile fold.

#### Scenario: Mobile thumb-reach review buttons
- **WHEN** a flashcard is flipped to reveal its answer on a phone viewport
- **THEN** rating buttons (Again, Hard, Good, Easy) MUST render as a full-width grid or 2x2 touch matrix with minimum 44px tap targets.
