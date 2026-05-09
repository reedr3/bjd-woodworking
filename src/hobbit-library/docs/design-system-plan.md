# Design System — Plan & Conventions

## Overview

Human-maintained brief for **BJD Woodworking**: how the design system is organized, how to extend it, and how docs stay in sync. For **extracted token values and registry status**, run `npm run design-system:docs` and read the generated **`src/hobbit-component-library/index.md`** (do not edit that file by hand).

---

## Two documents

| Document | Role |
|----------|------|
| **`src/hobbit-component-library/docs/design-system-plan.md`** (this file) | Process, directory layout, conventions, when to regenerate docs. |
| **`src/hobbit-component-library/index.md`** | Factual snapshot: **`@theme inline`** token map from CSS, registry notes, `meta` contract snippet. |

---

## Directory layout

```
tailwind.config.js              # Minimal v4 stub (no theme tokens here)
src/
  app/
    globals.css                 # @import "tailwindcss", @source, @theme inline (app tokens)
    page.tsx                    # Home (re-exports ./main)
    dev-routes/
      hobbit-library-view.tsx   # Dev-only Hobbit library preview (full page component)
      design-system/
        page.tsx                # Dev-only route — re-exports hobbit-library-view
  hobbit-component-library/
    registry.ts                 # Manual list of showcase components (used by docs tooling)
    index.md                    # Generated — npm run design-system:docs
    docs/
      design-system-plan.md     # This plan (human-maintained)
    scripts/
      generate-design-system-docs.mjs
    styles/                     # Theme CSS (@theme inline, e.g. hobbit-hole-theme.css)
    components/                 # Design-system UI (flat files and subfolders allowed)
    utils/
      utils.ts                  # Shared helpers (e.g. cn) for library components
```

---

## Design tokens

Tokens are **Tailwind v4 `@theme inline`** in CSS (`src/app/globals.css` and `src/hobbit-component-library/styles/`). Use **`@source`** in `globals.css` for content paths. Put shared literals on **`:root`** (or equivalent) when utilities need `var(...)`, then map them inside `@theme inline`.

**Current values:** see the **Tokens** section in **`src/hobbit-component-library/index.md`** after running `npm run design-system:docs`.

---

## Components

Live under **`src/hobbit-component-library/components/`** (one file or a subfolder with a barrel export). Register showcase entries in **`src/hobbit-component-library/registry.ts`**. Each registered preview should export a default component and a named **`meta`** object (`name`, optional `description`, optional `variants`). The exact shape is repeated in **`src/hobbit-component-library/index.md`** (generated).

Use Tailwind utilities where possible; **narrow inline `style` is acceptable** for dynamic demos (for example swatches driven by a hex prop).

---

## Dev Hobbit library route

**`src/app/dev-routes/design-system/page.tsx`** re-exports the preview from **`src/app/dev-routes/hobbit-library-view.tsx`**. That view is **development only** (`notFound()` when `NODE_ENV !== 'development'`). It is a living preview, not an exhaustive auto-catalog of every file in `components/`.

**Visual check:** run `npm run dev` and open `http://localhost:3000/dev-routes/design-system`.

**Static snapshot** (with dev server on `localhost:3000`):

```bash
single-file --browser-wait-until networkidle0 http://localhost:3000/dev-routes/design-system design-system-snapshot.html
```

---

## Regenerating `index.md`

After changing **`@theme inline`** (or supporting `:root` variables), **`registry.ts`**, or anything the generator should reflect:

```bash
npm run design-system:docs
```

Implementation: **`src/hobbit-component-library/scripts/generate-design-system-docs.mjs`**. Extend that script when you need richer output (for example parsing **`registry.ts`** for a full component list).

---

## Conventions

- Prefer design-system tokens (from `@theme inline`) over magic values in app UI.
- New showcase components: add **`meta`**, register in **`registry.ts`**, run **`npm run design-system:docs`**.
- Do not hand-edit **`src/hobbit-component-library/index.md`**.

---

## Notes for Cursor

Before UI or design-system work, read **`src/hobbit-component-library/index.md`** (run **`npm run design-system:docs`** if it may be stale). Use this **`docs/design-system-plan.md`** for workflow and layout. New primitives belong under **`src/hobbit-component-library/components/`** first, then consume them from app routes.
