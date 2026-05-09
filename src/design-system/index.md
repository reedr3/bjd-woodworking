<!--
This file is generated. DO NOT EDIT BY HAND.
Run: npm run design-system:docs
-->

# Design System

## Overview

Design tokens may live in `tailwind.config.js` under `theme.extend` and/or in CSS under `src/design-system/styles/` (for example `hobbit-theme.css` with `@theme inline`). Components live in `src/design-system/components/` and must export a default React component and a named `meta` object.

### Component meta contract

```tsx
export const meta = {
  name: 'ButtonPrimary',
  description: 'Primary call-to-action button',
  variants: ['default', 'hover', 'disabled'],
}
```

## Tokens (`tailwind.config.js` → `theme.extend`)

_No tokens have been ported yet. Populate `theme.extend` in `tailwind.config.js` and re-run the generator._

## Components

_Components appear to be registered, but this scaffold generator does not yet evaluate TypeScript registries. Extend `scripts/generate-design-system-docs.mjs` when you begin porting components._

## Snapshot export (SingleFile)

With the dev server running on `localhost:3000`:

```bash
single-file --browser-wait-until networkidle0 http://localhost:3000/design-system design-system-snapshot.html
```
