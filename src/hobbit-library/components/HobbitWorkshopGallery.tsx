import type { ReactNode } from "react";

import { cn } from "@/hobbit-library/utils/utils";
import { HobbitPageContainer } from "./HobbitPageContainer";

export const meta = {
  name: "HobbitWorkshopGallery",
  description:
    "Bento-style image tile grid with captions. First tile spans two rows when marked tall.",
};

export type HobbitWorkshopTile = {
  caption: string;
  tall?: boolean;
  className?: string;
  children?: ReactNode;
};

export type HobbitWorkshopGalleryProps = {
  eyebrow?: string;
  heading: string;
  intro?: string;
  tiles: HobbitWorkshopTile[];
  className?: string;
};

export function HobbitWorkshopGallery({
  eyebrow,
  heading,
  intro,
  tiles,
  className,
}: HobbitWorkshopGalleryProps) {
  return (
    <section className={cn("bg-hobbit-cream-warm py-9", className)}>
      <HobbitPageContainer>
        {eyebrow && (
          <p className="mb-1.5 font-hobbit-ui text-[10px] uppercase tracking-[0.18em] text-hobbit-gold-dark">
            {eyebrow}
          </p>
        )}
        <div className="mb-1 h-0.5 w-9 rounded-[1px] bg-hobbit-gold-base" aria-hidden />
        <h2 className="mb-3 font-hobbit-display text-[22px] font-bold text-hobbit-wood-darkest">
          {heading}
        </h2>
        {intro && (
          <p className="mb-4 max-w-[580px] font-hobbit-body text-[13px] leading-[1.75] text-hobbit-wood-medium">
            {intro}
          </p>
        )}

        <div className="grid grid-cols-[1.4fr_1fr_1fr] grid-rows-[130px_130px] gap-2">
          {tiles.map((tile, i) => (
            <div
              key={i}
              className={cn(
                "relative overflow-hidden rounded-md bg-hobbit-gold-thumb",
                tile.tall && "row-span-2",
                tile.className,
              )}
            >
              {tile.children}
              <p className="absolute bottom-2 left-2.5 right-2.5 font-hobbit-ui text-[9.5px] leading-snug tracking-[0.05em] text-hobbit-cream-light/85">
                <span
                  className="mr-1.5 inline-block h-px w-2.5 align-middle bg-hobbit-gold-base"
                  aria-hidden
                />
                {tile.caption}
              </p>
            </div>
          ))}
        </div>
      </HobbitPageContainer>
    </section>
  );
}
