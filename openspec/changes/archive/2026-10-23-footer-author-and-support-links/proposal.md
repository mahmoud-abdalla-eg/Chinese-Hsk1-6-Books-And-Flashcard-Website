# Proposal: Footer Author Attribution, Suggestions, and Support Section

## Why

The current website footer contains significant unused space on wider viewports and lacks direct avenues for learners to discover the creator, submit suggestions and issues, or support the creator to keep the website running free of charge. Introducing author attribution, an email suggestion channel, and a support callout builds trust, provides learner communication, and invites community support.

## What Changes

- **Support Column**: Add a dedicated "Support" section to the footer grid inviting learners to help keep the platform free and ad-free, with a prominent callout button/link pointing to `mailto:mahmouddesign01@gmail.com`.
- **Bottom Credits & Contact Bar**: Add a sub-footer bar separated by a subtle top border, featuring:
  - "Made with ❤️ by Mahmoud Abdalla" linking to GitHub profile `https://github.com/mahmoud-abdalla-eg`.
  - "Suggestions & Feedback" mail link pointing to `mailto:mahmouddesign01@gmail.com`.
  - Copyright and year notice (`© 2026 Mandarin Flow HSK`).
- **Responsive Grid**: Update the footer layout (`md:grid-cols-4` or clean responsive grid) to accommodate the new sections elegantly across mobile, tablet, and desktop viewports.
- **Multilingual Support (i18n)**: Add translations for all new footer labels and callouts across English, Chinese, and Arabic in `lib/i18n/dictionaries.js` with correct RTL handling for Arabic.

## Capabilities

### New Capabilities
- `site-footer`: Covers footer navigation structure, author attribution, support invitation, feedback contact links, and multilingual localization.

### Modified Capabilities
*None*

## Impact

- **Affected Code**:
  - `chinese-hsk-website/components/layout/site-footer.jsx`
  - `chinese-hsk-website/lib/i18n/dictionaries.js`
- **Dependencies & APIs**: No external dependencies or backend APIs required; uses standard web links and `mailto:` protocol.
