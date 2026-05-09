export type DesignSystemComponentMeta = {
  name: string;
  description?: string;
  variants?: string[];
};

export type DesignSystemRegistryEntry = {
  /**
   * Path to the component file relative to repo root, e.g. `src/design-system/components/ButtonPrimary.tsx`.
   * This is used by docs tooling and keeps the registry explicit (no magic imports).
   */
  filePath: string;
  meta: DesignSystemComponentMeta;
};

/**
 * Explicit registry of design-system components.
 *
 * Keep this list intentionally manual for reliability in Next.js builds and for doc generation.
 * Components themselves should live in `src/design-system/components/` and export:
 *
 * ```tsx
 * export const meta = { name: 'ButtonPrimary', description: '...', variants: ['...'] }
 * export default function ButtonPrimary() { ... }
 * ```
 */
export const registry: DesignSystemRegistryEntry[] = [
  {
    filePath: "src/design-system/components/HobbitHolePreview.tsx",
    meta: {
      name: "HobbitHolePreview",
      description:
        "Hobbit Hole design system — colors, type, navigation, cards, and layout primitives ported from Refine HTML Mockup.",
      variants: ["full-showcase"],
    },
  },
];

