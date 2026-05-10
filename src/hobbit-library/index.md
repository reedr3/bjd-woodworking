<!--
This file is generated. DO NOT EDIT BY HAND.
Run: npm run hobbit-library:docs (syncs registry from components, then writes this file)
-->

# Hobbit Library

## Overview

This file is regenerated from the repo. **Process, directory layout, and workflow** live in [`docs/hobbit-library-plan.md`](docs/hobbit-library-plan.md) next to this package in the repo.

Design tokens are defined with Tailwind v4 **`@theme inline`** in CSS (for example `src/app/globals.css` and `src/hobbit-library/styles/`). Reusable components under `src/hobbit-library/components/` (sync skips `components/meta-preview/`; see `docs/hobbit-library-plan.md`) should export a default React component plus `export const meta` (see below). Run `npm run hobbit-library:sync-registry` (or `npm run hobbit-library:docs`) to refresh `src/hobbit-library/registry.ts` from those files.

### Component meta contract

```tsx
export const meta = {
  name: 'ButtonPrimary',
  description: 'Primary call-to-action button',
  variants: ['default', 'hover', 'disabled'],
}
```

## Tokens (`@theme inline` in CSS)

### `src/app/globals.css`

```json
{
  "--color-background": "var(--background)",
  "--color-foreground": "var(--foreground)"
}
```

### `src/hobbit-library/styles/hobbit-hole-theme.css`

```json
{
  "--color-hobbit-cream-light": "var(--hobbit-cream-light)",
  "--color-hobbit-cream-base": "var(--hobbit-cream-base)",
  "--color-hobbit-cream-warm": "var(--hobbit-cream-warm)",
  "--color-hobbit-beige-section": "var(--hobbit-beige-section)",
  "--color-hobbit-sand": "var(--hobbit-sand)",
  "--color-hobbit-paper": "var(--hobbit-paper)",
  "--color-hobbit-forest-dark": "var(--hobbit-forest-dark)",
  "--color-hobbit-forest-base": "var(--hobbit-forest-base)",
  "--color-hobbit-forest-light": "var(--hobbit-forest-light)",
  "--color-hobbit-forest-pale": "var(--hobbit-forest-pale)",
  "--color-hobbit-forest-soft": "var(--hobbit-forest-soft)",
  "--color-hobbit-forest-caption": "var(--hobbit-forest-caption)",
  "--color-hobbit-gold-base": "var(--hobbit-gold-base)",
  "--color-hobbit-gold-dark": "var(--hobbit-gold-dark)",
  "--color-hobbit-gold-light": "var(--hobbit-gold-light)",
  "--color-hobbit-gold-rich": "var(--hobbit-gold-rich)",
  "--color-hobbit-gold-thumb": "var(--hobbit-gold-thumb)",
  "--color-hobbit-wood-darkest": "var(--hobbit-wood-darkest)",
  "--color-hobbit-wood-medium": "var(--hobbit-wood-medium)",
  "--color-hobbit-wood-light": "var(--hobbit-wood-light)",
  "--font-hobbit-display": "var(--hobbit-font-display)",
  "--font-hobbit-body": "var(--hobbit-font-body)",
  "--font-hobbit-ui": "var(--hobbit-font-ui)",
  "--shadow-hobbit-warm": "var(--hobbit-shadow-warm)",
  "--spacing-hobbit-page": "var(--hobbit-page-gutter)",
  "--max-width-hobbit-page": "var(--hobbit-page-max)",
  "--max-width-hobbit-narrow": "var(--hobbit-page-narrow-max)"
}
```

## Components

The registry is generated into [`src/hobbit-library/registry.ts`](src/hobbit-library/registry.ts) from `export const meta` in each scanned component file (`components/meta-preview/` is excluded). Run `npm run hobbit-library:docs` (or `hobbit-library:sync-registry`) after changing meta.

### `HobbitAboutHero`

- **File:** [`src/hobbit-library/components/HobbitAboutHero.tsx`](src/hobbit-library/components/HobbitAboutHero.tsx)
- **Description:** Split-column about-page hero: portrait image block on the left, eyebrow + h1 with optional italic emphasis + drop-cap lede on the right.

### `HobbitBanner`

- **File:** [`src/hobbit-library/components/HobbitBanner.tsx`](src/hobbit-library/components/HobbitBanner.tsx)
- **Description:** Full-width top strip for announcements or page context in forest tones.

### `HobbitBioTimeline`

- **File:** [`src/hobbit-library/components/HobbitBioTimeline.tsx`](src/hobbit-library/components/HobbitBioTimeline.tsx)
- **Description:** Vertical left-rail timeline for biography or history entries. Major milestones get a filled gold bullet; minor entries get an open one.

### `HobbitButton`

- **File:** [`src/hobbit-library/components/HobbitButton.tsx`](src/hobbit-library/components/HobbitButton.tsx)
- **Description:** Action button with gold primary, ghost, and outline-gold styles.
- **Variants:** `primary`, `ghost`, `outline-gold`

### `HobbitCommissionForm`

- **File:** [`src/hobbit-library/components/HobbitCommissionForm.tsx`](src/hobbit-library/components/HobbitCommissionForm.tsx)
- **Description:** Four-step commission request form: piece type + description, dimensions + materials, budget + timeline, and contact details. Renders a confirmation state on submit.

### `HobbitCommissionHero`

- **File:** [`src/hobbit-library/components/HobbitCommissionHero.tsx`](src/hobbit-library/components/HobbitCommissionHero.tsx)
- **Description:** Two-column commission page hero with eyebrow, h1 with optional italic emphasis, subtext, meta-stat badges, and a warm image-placeholder panel.

### `HobbitCommissionProcess`

- **File:** [`src/hobbit-library/components/HobbitCommissionProcess.tsx`](src/hobbit-library/components/HobbitCommissionProcess.tsx)
- **Description:** Commission process section: 4-column dark-green card grid where each step shows a numbered bullet, title, time/cost badge, and description.

### `HobbitContactHero`

- **File:** [`src/hobbit-library/components/HobbitContactHero.tsx`](src/hobbit-library/components/HobbitContactHero.tsx)
- **Description:** Contact page hero: split-column layout with eyebrow + h1 (optional italic) + subtext on the left and a live status card on the right.

### `HobbitContactMap`

- **File:** [`src/hobbit-library/components/HobbitContactMap.tsx`](src/hobbit-library/components/HobbitContactMap.tsx)
- **Description:** Map & directions section: decorative SVG map with a pin, address label, and a grid of visit instruction tiles.

### `HobbitCtaStrip`

- **File:** [`src/hobbit-library/components/HobbitCtaStrip.tsx`](src/hobbit-library/components/HobbitCtaStrip.tsx)
- **Description:** Full-width call-to-action strip with heading, optional subtext, and a light button.

### `HobbitFaqAccordion`

- **File:** [`src/hobbit-library/components/HobbitFaqAccordion.tsx`](src/hobbit-library/components/HobbitFaqAccordion.tsx)
- **Description:** FAQ section rendered as an expandable accordion: each item toggles open/closed with a +/− button.

### `HobbitFaqGrid`

- **File:** [`src/hobbit-library/components/HobbitFaqGrid.tsx`](src/hobbit-library/components/HobbitFaqGrid.tsx)
- **Description:** FAQ section with a 2-column grid of question/answer cards.

### `HobbitFooter`

- **File:** [`src/hobbit-library/components/HobbitFooter.tsx`](src/hobbit-library/components/HobbitFooter.tsx)
- **Description:** Site footer with serif brand, centered monospace nav, and copyright in forest tones.

### `HobbitFormStepper`

- **File:** [`src/hobbit-library/components/HobbitFormStepper.tsx`](src/hobbit-library/components/HobbitFormStepper.tsx)
- **Description:** Multi-step form progress indicator with numbered dots and connector lines.

### `HobbitGalleryCard`

- **File:** [`src/hobbit-library/components/HobbitGalleryCard.tsx`](src/hobbit-library/components/HobbitGalleryCard.tsx)
- **Description:** Portfolio gallery piece card with image block, hover overlay, category label, title, spec line, and status tags. Supports a featured (16:9 wide) variant.

### `HobbitGalleryFilterBar`

- **File:** [`src/hobbit-library/components/HobbitGalleryFilterBar.tsx`](src/hobbit-library/components/HobbitGalleryFilterBar.tsx)
- **Description:** Scrollable horizontal filter tab strip for gallery category filtering. Stateless — parent owns activeFilter and onFilterChange.

### `HobbitHero`

- **File:** [`src/hobbit-library/components/HobbitHero.tsx`](src/hobbit-library/components/HobbitHero.tsx)
- **Description:** Large hero with centered or split layout: eyebrow, title, copy, and optional CTAs.
- **Variants:** `centered`, `split`

### `HobbitMakerStory`

- **File:** [`src/hobbit-library/components/HobbitMakerStory.tsx`](src/hobbit-library/components/HobbitMakerStory.tsx)
- **Description:** Two-column long-form prose section with a stat-card sidebar. First paragraph gets a decorative drop cap.

### `HobbitMaterialsGrid`

- **File:** [`src/hobbit-library/components/HobbitMaterialsGrid.tsx`](src/hobbit-library/components/HobbitMaterialsGrid.tsx)
- **Description:** Wood-swatch card grid: a colored swatch block above the material name and sourcing spec.

### `HobbitNav`

- **File:** [`src/hobbit-library/components/HobbitNav.tsx`](src/hobbit-library/components/HobbitNav.tsx)
- **Description:** Top navigation bar with brand, links, and a CTA for Hobbit Hole layouts.

### `HobbitPageContainer`

- **File:** [`src/hobbit-library/components/HobbitPageContainer.tsx`](src/hobbit-library/components/HobbitPageContainer.tsx)
- **Description:** Centered content column with shared hobbit page gutter and max width.

### `HobbitPageHero`

- **File:** [`src/hobbit-library/components/HobbitPageHero.tsx`](src/hobbit-library/components/HobbitPageHero.tsx)
- **Description:** Interior page hero: eyebrow label, h1 title, and a short subtext paragraph. Sits directly under the nav with a warm cream band and bottom border.

### `HobbitPageShell`

- **File:** [`src/hobbit-library/components/HobbitPageShell.tsx`](src/hobbit-library/components/HobbitPageShell.tsx)
- **Description:** Full-viewport page wrapper with cream background and body typography defaults.

### `HobbitPhilosophyGrid`

- **File:** [`src/hobbit-library/components/HobbitPhilosophyGrid.tsx`](src/hobbit-library/components/HobbitPhilosophyGrid.tsx)
- **Description:** Three-column numbered-principle cards on a forest-dark background. Good for brand values or working philosophy.

### `HobbitPortfolioCard`

- **File:** [`src/hobbit-library/components/HobbitPortfolioCard.tsx`](src/hobbit-library/components/HobbitPortfolioCard.tsx)
- **Description:** Project or piece card with 4:3 image, wood tag, title, and spec line below the image.

### `HobbitPressStrip`

- **File:** [`src/hobbit-library/components/HobbitPressStrip.tsx`](src/hobbit-library/components/HobbitPressStrip.tsx)
- **Description:** Press-mention strip: publication names arranged in a centered warm card. Italic serif for editorial names, small caps for trade/local titles.

### `HobbitPricingGrid`

- **File:** [`src/hobbit-library/components/HobbitPricingGrid.tsx`](src/hobbit-library/components/HobbitPricingGrid.tsx)
- **Description:** 3-column pricing reference grid for commission work: category label, piece name, price range, and lead-time note per card.

### `HobbitProcessSteps`

- **File:** [`src/hobbit-library/components/HobbitProcessSteps.tsx`](src/hobbit-library/components/HobbitProcessSteps.tsx)
- **Description:** Numbered process step strip for commission or how-it-works flows.
- **Variants:** `horizontal`, `vertical`

### `HobbitPullQuote`

- **File:** [`src/hobbit-library/components/HobbitPullQuote.tsx`](src/hobbit-library/components/HobbitPullQuote.tsx)
- **Description:** Dark-green featured quote section: two-column layout with a square image placeholder on the left and a large pull quote, author name, and project line on the right.

### `HobbitReassureStrip`

- **File:** [`src/hobbit-library/components/HobbitReassureStrip.tsx`](src/hobbit-library/components/HobbitReassureStrip.tsx)
- **Description:** 3-column strip of reassurance items below a form: diamond-mark icon, bold title, and short description per item. Sits on a section background without its own page container.

### `HobbitSocialCta`

- **File:** [`src/hobbit-library/components/HobbitSocialCta.tsx`](src/hobbit-library/components/HobbitSocialCta.tsx)
- **Description:** Dark-background CTA section with heading, optional italic emphasis, subtext, social pills, and up to two action buttons.

### `HobbitSocialFollow`

- **File:** [`src/hobbit-library/components/HobbitSocialFollow.tsx`](src/hobbit-library/components/HobbitSocialFollow.tsx)
- **Description:** Dark-green 'Follow along' section with a three-column grid of social platform cards (platform name, handle, description).

### `HobbitTag`

- **File:** [`src/hobbit-library/components/HobbitTag.tsx`](src/hobbit-library/components/HobbitTag.tsx)
- **Description:** Small pill label for categories, status, or metadata on cards and lists.
- **Variants:** `forest`, `gold`

### `HobbitTestimonial`

- **File:** [`src/hobbit-library/components/HobbitTestimonial.tsx`](src/hobbit-library/components/HobbitTestimonial.tsx)
- **Description:** Customer quote display in grid or single featured layout.
- **Variants:** `grid`, `featured`

### `HobbitTestimonialStrip`

- **File:** [`src/hobbit-library/components/HobbitTestimonialStrip.tsx`](src/hobbit-library/components/HobbitTestimonialStrip.tsx)
- **Description:** Compact 3-column testimonial strip with star ratings, italic quote, author, and project label. Designed to appear inline under a section (e.g. below a timeline).

### `HobbitTileSelector`

- **File:** [`src/hobbit-library/components/HobbitTileSelector.tsx`](src/hobbit-library/components/HobbitTileSelector.tsx)
- **Description:** Selectable tile grid for single-option selection in forms.

### `HobbitTimeline`

- **File:** [`src/hobbit-library/components/HobbitTimeline.tsx`](src/hobbit-library/components/HobbitTimeline.tsx)
- **Description:** Circular-step process timeline: numbered gold circles connected by a horizontal line.

### `HobbitWorkshopGallery`

- **File:** [`src/hobbit-library/components/HobbitWorkshopGallery.tsx`](src/hobbit-library/components/HobbitWorkshopGallery.tsx)
- **Description:** Bento-style image tile grid with captions. First tile spans two rows when marked tall.
