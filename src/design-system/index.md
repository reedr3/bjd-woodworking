<!--
This file is generated. DO NOT EDIT BY HAND.
Run: npm run design-system:docs
-->

# Design System

## Overview

This file is regenerated from the repo. **Process, directory layout, and workflow** live in [`design-system-plan.md`](../../design-system-plan.md) at the repository root.

Design tokens are defined with Tailwind v4 **`@theme inline`** in CSS (for example `src/app/globals.css` and `src/design-system/styles/`). Components live in `src/design-system/components/` and must export a default React component and a named `meta` object.

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

### `src/design-system/styles/hobbit-theme.css`

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

_Components appear to be registered, but this scaffold generator does not yet evaluate TypeScript registries. Extend `scripts/generate-design-system-docs.mjs` when you begin porting components._
