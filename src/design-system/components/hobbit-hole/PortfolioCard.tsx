import type { ReactNode } from "react";
import { HobbitTag, type HobbitTagVariant } from "./HobbitTag";
import { cn } from "@/lib/utils";

export type PortfolioCardProps = {
  category: string;
  title: string;
  meta: string;
  tag: string;
  tagVariant?: HobbitTagVariant;
  image?: ReactNode;
  className?: string;
};

export function PortfolioCard({
  category,
  title,
  meta,
  tag,
  tagVariant = "forest",
  image,
  className,
}: PortfolioCardProps) {
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
        <p className="mb-1 font-hobbit-ui text-[10px] uppercase tracking-[0.08em] text-hobbit-gold-dark">
          {category}
        </p>
        <h3 className="mb-1 font-hobbit-display text-[14px] font-bold text-hobbit-wood-darkest">{title}</h3>
        <p className="mb-2.5 font-hobbit-ui text-[11px] text-hobbit-wood-light">{meta}</p>
        <div className="flex items-center justify-between">
          <HobbitTag variant={tagVariant}>{tag}</HobbitTag>
          <span className="text-base text-hobbit-gold-base" aria-hidden>
            →
          </span>
        </div>
      </div>
    </article>
  );
}
