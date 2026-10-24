# Spec Delta

## MODIFIED Requirements

### Requirement: Responsive Mobile Header
The site header SHALL adapt its layout for viewports narrower than 1024px to prevent element wrapping, clipping, or horizontal crowding.

#### Scenario: Viewport narrower than 1024px header display
- **WHEN** a user visits any page on a viewport narrower than 1024px
- **THEN** the system MUST display a hamburger menu toggle button alongside the app branding
- **AND** the desktop center navigation bar MUST be hidden
- **AND** the brand subtitle MUST be hidden on screens <= 640px so the hamburger trigger and logo mark fit without horizontal overflow.

#### Scenario: Viewport narrower than 640px right-hand control streamlining
- **WHEN** a user visits any page on a viewport narrower than 640px
- **THEN** the right-hand header controls MUST be streamlined to prevent clipping
- **AND** guest authentication actions in the top bar MUST NOT push elements offscreen or force horizontal scroll
- **AND** full language switching and complete authentication controls MUST remain accessible in the slide-out navigation drawer.
