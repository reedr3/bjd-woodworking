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
  "--color-hobbit-sand": "var(--hobbit-sand)",
  "--color-hobbit-paper": "var(--hobbit-paper)",
  "--color-hobbit-forest-dark": "var(--hobbit-forest-dark)",
  "--color-hobbit-forest-base": "var(--hobbit-forest-base)",
  "--color-hobbit-forest-light": "var(--hobbit-forest-light)",
  "--color-hobbit-forest-pale": "var(--hobbit-forest-pale)",
  "--color-hobbit-forest-soft": "var(--hobbit-forest-soft)",
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
  "--shadow-hobbit-warm": "var(--hobbit-shadow-warm)"
}
```

## Components

The registry is generated into [`src/hobbit-library/registry.ts`](src/hobbit-library/registry.ts) from `export const meta` in each scanned component file (`components/meta-preview/` is excluded). Run `npm run hobbit-library:docs` (or `hobbit-library:sync-registry`) after changing meta.

### `HobbitBanner`

- **File:** [`src/hobbit-library/components/HobbitBanner.tsx`](src/hobbit-library/components/HobbitBanner.tsx)
- **Description:** Full-width top strip for announcements or page context in forest tones.

### `HobbitButton`

- **File:** [`src/hobbit-library/components/HobbitButton.tsx`](src/hobbit-library/components/HobbitButton.tsx)
- **Description:** Action button with gold primary, ghost, and outline-gold styles.
- **Variants:** `primary`, `ghost`, `outline-gold`

### `HobbitHero`

- **File:** [`src/hobbit-library/components/HobbitHero.tsx`](src/hobbit-library/components/HobbitHero.tsx)
- **Description:** Large hero block with eyebrow, title, and supporting copy on a warm bordered panel.

### `HobbitNav`

- **File:** [`src/hobbit-library/components/HobbitNav.tsx`](src/hobbit-library/components/HobbitNav.tsx)
- **Description:** Top navigation bar with brand, links, and a CTA for Hobbit Hole layouts.

### `HobbitPageShell`

- **File:** [`src/hobbit-library/components/HobbitPageShell.tsx`](src/hobbit-library/components/HobbitPageShell.tsx)
- **Description:** Full-viewport page wrapper with cream background and body typography defaults.

### `HobbitPortfolioCard`

- **File:** [`src/hobbit-library/components/HobbitPortfolioCard.tsx`](src/hobbit-library/components/HobbitPortfolioCard.tsx)
- **Description:** Project or piece card with category, title, optional image slot, and tag.

### `HobbitTag`

- **File:** [`src/hobbit-library/components/HobbitTag.tsx`](src/hobbit-library/components/HobbitTag.tsx)
- **Description:** Small pill label for categories, status, or metadata on cards and lists.
- **Variants:** `forest`, `gold`
