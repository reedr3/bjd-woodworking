---
name: html-to-components
description: >
  Converts a static HTML mockup into React components for the bjd-woodworking Next.js project,
  following hobbit-library conventions. Use this skill whenever the user provides an HTML file
  (or a path to one) and wants to build a page, create components, or add sections to the
  hobbit-library — even if they don't say "HTML to components" explicitly. Triggered by things
  like "turn this mockup into React", "build this page from the HTML", "convert this file to
  components", "create components based on this design", or when someone drops an HTML path and
  asks to build the page or add it to the library. Accepts two arguments: the HTML file path
  (required) and an optional mode — "reuse" (default) to map existing library components first,
  or "new" to create purpose-built components for sections that don't have a good existing fit.
---

# HTML → React Components (hobbit-library)

Convert a static HTML mockup into React components for the bjd-woodworking project at
`/Users/ryker/workspace/bjd-woodworking`. Add reusable components to hobbit-library; put
page-specific interactive pieces next to the page file.

## Arguments

| Argument | Values | Default |
|----------|--------|---------|
| HTML file path | Any file path | *(required)* |
| mode | `reuse` \| `new` | `reuse` |

**mode=reuse** — Map each HTML section to an existing hobbit-library component if one fits.
Only create a new component when nothing already does the job.

**mode=new** — Prefer purpose-built new components for sections that would otherwise be forced
into an ill-fitting existing component or written inline. A section with a direct existing
match (e.g. a timeline section when `HobbitTimeline` already exists and fits perfectly) can
still reuse that component — the goal is to avoid stretching components beyond their purpose,
not to duplicate things that already fit. Always reuse structural infrastructure:
`HobbitPageShell`, `HobbitNav`, `HobbitFooter`, `HobbitPageContainer`.

---

## Phase 1 — Explore the library (always do this first)

Before reading the HTML, build a full picture of what already exists. Use the Explore subagent
or read the files directly with the Read tool:

1. **Scan all components** in `src/hobbit-library/components/` — for each, note its props,
   variants, and visual purpose.

2. **Read the design tokens** at `src/hobbit-library/styles/hobbit-hole-theme.css` — the
   `--hobbit-*` CSS custom properties are what all components use for color, spacing, and
   shadows. Hex values in the HTML mockup map to these tokens.

3. **Read `src/hobbit-library/components/index.ts`** — understand the current export pattern
   so new exports follow the same format.

4. **Read 1–2 existing page files** in `src/app/` to see how pages compose components. The
   homepage at `src/app/page.tsx` is a good reference.

5. **Read 2–3 component source files** to absorb the coding conventions before writing anything:
   - `meta` export at the top of every library component
   - `cn()` from `@/hobbit-library/utils/utils` for conditional classes
   - `HobbitPageContainer` wrapping content inside section-level components
   - `"use client"` only when the component has its own interactive state
   - All colors via `hobbit-*` tokens — never raw hex unless the exact value is absent from the
     token set (even then, check first)

---

## Phase 2 — Read and analyze the HTML

Read the HTML file using the Read tool. For each distinct visual section, identify:
- **What it is**: hero, nav, timeline, form, FAQ, CTA strip, footer, etc.
- **Visual design**: background color (map to token), typography scale, layout (grid/flex/stack)
- **Interactive behavior**: multi-step forms, toggles, tabs, selectors — anything with state
- **Data shape**: what props would this need?

---

## Phase 3 — Plan and announce before writing any code

Write out your component plan and share it before creating any files. This is worth doing —
catching a shape mismatch before writing is much cheaper than after.

**For each section, decide:**

| Category | Where it lives | When to use it |
|----------|---------------|----------------|
| Existing library component | n/a — just use it | Renders the same visual pattern, not just similar content |
| New library component | `src/hobbit-library/components/Hobbit<Name>.tsx` | Reusable section pattern not already in the library (or in new mode: no direct fit exists) |
| Page-local component | `src/app/<page>/<Name>.tsx` | Specific to this page; too stateful or too narrow to generalize |

**The "good fit" bar:** A component is a good fit if it renders the same *visual pattern*, not
just related content. A dark card-based step list is not a fit for a visual timeline with
circular connectors, even if both show numbered steps. Don't stretch a component beyond its
intended shape.

**Your plan summary should list:**
- Which sections → existing component (and which one)
- Which sections → new library component (and proposed name)
- Which sections → page-local component (and why it's page-specific)

---

## Phase 4 — Create new library components

For each new library component, create `src/hobbit-library/components/Hobbit<Name>.tsx`.

**Template to follow:**

```tsx
import { cn } from "@/hobbit-library/utils/utils";
import { HobbitPageContainer } from "./HobbitPageContainer";

export const meta = {
  name: "HobbitName",
  description: "One sentence describing what this component renders.",
};

export type HobbitNameProps = {
  // typed props — prefer specific types over `any`
  className?: string;
};

export function HobbitName({ ..., className }: HobbitNameProps) {
  return (
    <section className={cn("bg-hobbit-[token] py-9", className)}>
      <HobbitPageContainer>
        {/* content */}
      </HobbitPageContainer>
    </section>
  );
}
```

**Key rules:**
- `"use client"` only when the component has internal event handlers or uses React hooks
- Typography: `font-hobbit-display` (Playfair Display), `font-hobbit-body` (Lora),
  `font-hobbit-ui` (Courier Prime)
- Colors: `hobbit-*` tokens — e.g. `text-hobbit-wood-darkest`, `bg-hobbit-cream-warm`,
  `border-hobbit-sand`
- Export all prop types alongside the component

**After creating each file**, add its export to `src/hobbit-library/components/index.ts` using
the same pattern as existing exports.

---

## Phase 5 — Create page-local components

Interactive components with their own state machine (multi-step forms are the clearest example)
live next to the page file:

```
src/app/<page>/
  page.tsx          ← the page
  ComponentName.tsx ← page-local client component
```

Add `"use client"` at the top. Import hobbit-library components and use the same design token
classes for any custom styling.

---

## Phase 6 — Assemble the page

Create `src/app/<page>/page.tsx` following the pattern from existing pages:

```tsx
import {
  HobbitPageShell,
  HobbitNav,
  HobbitFooter,
  // ...other library imports
} from "@/hobbit-library/components";
import { LocalComponent } from "./LocalComponent";

export default function PageName() {
  return (
    <HobbitPageShell>
      <HobbitNav
        brand="Bridget J. Duffy"
        links={[...]}
        cta={{ label: "...", href: "..." }}
      />
      {/* sections */}
      <HobbitFooter brand="Bridget J. Duffy" links={[...]} copyright="© 2026 ..." />
    </HobbitPageShell>
  );
}
```

Simple one-off inline sections (e.g. a plain page header with an `<h1>`) don't need their own
component — write them directly in the page file.

---

## Phase 7 — Verify

Run `npx tsc --noEmit` from the project root and fix any type errors before finishing.

Report back with:
- Which components were created (with file paths)
- Which existing components were reused (and for which sections)
- TypeScript result (clean or errors fixed)
