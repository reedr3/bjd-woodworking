import type { ReactNode } from "react";
import { HobbitTag, type HobbitTagVariant } from "./HobbitTag";
import { cn } from "@/hobbit-library/utils/utils";

export const meta = {
  name: "HobbitPortfolioCard",
  description: "Project or piece card with 4:3 image, wood tag, title, and spec line below the image.",
};

export type HobbitPortfolioCardProps = {
  title: string;
  tag: string;
  spec: string;
  tagVariant?: HobbitTagVariant;
  image?: ReactNode;
  className?: string;
};

export function HobbitPortfolioCard({
  title,
  tag,
  spec,
  tagVariant = "forest",
  image,
  className,
}: HobbitPortfolioCardProps) {
  return (
    <article
      className={cn("max-w-[300px] overflow-hidden rounded-lg border border-hobbit-sand bg-hobbit-paper", className)}
    >
      <div className="flex aspect-[4/3] w-full items-center justify-center bg-hobbit-gold-thumb">
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
