<!--
This file is generated. DO NOT EDIT BY HAND.
Run: npm run design-system:docs
-->

# Design System

## Overview

Design tokens are defined in `tailwind.config.js` under `theme.extend`. Components live in `src/design-system/components/` and must export a default React component and a named `meta` object.

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

_No components registered yet. Add components in `src/design-system/components/` and register them in `src/design-system/registry.ts`._

## Snapshot export (SingleFile)

With the dev server running on `localhost:3000`:

```bash
single-file --browser-wait-until networkidle0 http://localhost:3000/design-system design-system-snapshot.html
```
