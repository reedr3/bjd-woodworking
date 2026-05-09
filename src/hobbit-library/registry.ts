export type HobbitLibraryComponentMeta = {
  name: string;
  description?: string;
  variants?: string[];
};

export type HobbitLibraryRegistryEntry = {
  /**
   * Path to the component file relative to repo root, e.g. `src/hobbit-library/components/ButtonPrimary.tsx`.
   * This is used by docs tooling and keeps the registry explicit (no magic imports).
   */
  filePath: string;
  meta: HobbitLibraryComponentMeta;
};

/**
 * Explicit registry of hobbit-library components.
 *
 * Keep this list intentionally manual for reliability in Next.js builds and for doc generation.
 * Components themselves should live in `src/hobbit-library/components/` and export:
 *
 * ```tsx
 * export const meta = { name: 'ButtonPrimary', description: '...', variants: ['...'] }
 * export default function ButtonPrimary() { ... }
 * ```
 */
export const registry: HobbitLibraryRegistryEntry[] = [
  {
    filePath: "src/hobbit-library/components/HobbitHolePreview.tsx",
    meta: {
      name: "HobbitHolePreview",
      description:
        "Hobbit Hole library — colors, type, navigation, cards, and layout primitives ported from Refine HTML Mockup.",
      variants: ["full-showcase"],
    },
  },
];
