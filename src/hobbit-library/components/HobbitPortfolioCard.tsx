import type { ReactNode } from "react";
import { HobbitTag, type HobbitTagVariant } from "./HobbitTag";
import { cn } from "@/hobbit-library/utils/utils";

export const meta = {
  name: "HobbitPortfolioCard",
  description: "Project or piece card with 4:3 image, wood tag, title, and spec line below the image.",
};

const blockToneClass = {
  gold: "bg-hobbit-gold-thumb",
  sage: "bg-hobbit-forest-soft",
  olive: "bg-hobbit-forest-base",
} as const;

export type HobbitPortfolioBlockTone = keyof typeof blockToneClass;

export type HobbitPortfolioCardProps = {
  title: string;
  tag: string;
  spec: string;
  tagVariant?: HobbitTagVariant;
  image?: ReactNode;
  className?: string;
  /** Plain colored block only — no title, tag, or spec (title kept for screen readers). */
  minimal?: boolean;
  /** Placeholder / block background when not using a custom image. */
  blockTone?: HobbitPortfolioBlockTone;
};

export function HobbitPortfolioCard({
  title,
  tag,
  spec,
  tagVariant = "forest",
  image,
  className,
  minimal = false,
  blockTone = "gold",
}: HobbitPortfolioCardProps) {
  const toneBg = blockToneClass[blockTone];

  if (minimal) {
    return (
      <article
        className={cn("w-full overflow-hidden rounded-lg border border-hobbit-sand/60", className)}
      >
        <div
          className={cn(
            "flex aspect-[4/3] w-full items-center justify-center",
            image ? "bg-hobbit-paper" : toneBg,
          )}
        >
          {image}
        </div>
        <span className="sr-only">{title}</span>
      </article>
    );
  }

  return (
    <article
      className={cn("max-w-[300px] overflow-hidden rounded-lg border border-hobbit-sand bg-hobbit-paper", className)}
    >
      <div
        className={cn(
          "flex aspect-[4/3] w-full items-center justify-center",
          image ? "bg-hobbit-paper" : toneBg,
        )}
      >
        {image ?? (
          <span className="text-[48px] opacity-30" aria-hidden>
            🪵
          </span>
        )}
      </div>
      <div className="px-3.5 pb-3.5 pt-3">
        <div className="mb-2">
          <HobbitTag variant={tagVariant}>{tag}</HobbitTag>
        </div>
        <h3 className="mb-1 font-hobbit-display text-[13px] font-bold text-hobbit-wood-darkest">{title}</h3>
        <p className="font-hobbit-ui text-[10px] text-hobbit-gold-dark">{spec}</p>
      </div>
    </article>
  );
}
