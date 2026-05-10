import type { ReactNode } from "react";

import { cn } from "@/hobbit-library/utils/utils";
import { HobbitPageContainer } from "./HobbitPageContainer";

export const meta = {
  name: "HobbitInstagramStrip",
  description:
    "Forest-green 'Follow along' section with an eyebrow label, heading, and a 6-column grid of square Instagram photo tiles.",
};

export type HobbitInstagramTile = {
  /** Rendered inside the tile — typically a next/image Image. Falls back to imageBg. */
  image?: ReactNode;
  /** Tailwind bg-* class shown when no image is provided. */
  imageBg?: string;
  alt?: string;
};

export type HobbitInstagramStripProps = {
  eyebrow?: string;
  heading: string;
  /** href applied to the heading — wraps it in an anchor when provided. */
  href?: string;
  tiles: HobbitInstagramTile[];
  className?: string;
};

export function HobbitInstagramStrip({
  eyebrow = "Follow along",
  heading,
  href,
  tiles,
  className,
}: HobbitInstagramStripProps) {
  const headingNode = href ? (
    <a
      href={href}
      className="font-hobbit-display text-[22px] font-bold text-hobbit-cream-light outline-none transition-opacity hover:opacity-80 focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-hobbit-forest-pale focus-visible:ring-offset-2"
    >
      {heading}
    </a>
  ) : (
    <span className="font-hobbit-display text-[22px] font-bold text-hobbit-cream-light">
      {heading}
    </span>
  );

  return (
    <section className={cn("bg-hobbit-forest-base py-9", className)}>
      <HobbitPageContainer>
        {eyebrow && (
          <p className="mb-1.5 font-hobbit-ui text-[10px] uppercase tracking-[0.18em] text-hobbit-forest-pale">
            {eyebrow}
          </p>
        )}
        <div className="mb-4 h-0.5 w-9 rounded-[1px] bg-hobbit-forest-light" aria-hidden />
        <h2 className="mb-5">{headingNode}</h2>

        <div className="grid grid-cols-3 gap-1.5 sm:grid-cols-6">
          {tiles.map((tile, i) => (
            <div
              key={i}
              className={cn(
                "aspect-square overflow-hidden rounded-[5px]",
                tile.imageBg ?? "bg-hobbit-forest-dark",
              )}
              aria-label={tile.alt}
            >
              {tile.image}
            </div>
          ))}
        </div>
      </HobbitPageContainer>
    </section>
  );
}
