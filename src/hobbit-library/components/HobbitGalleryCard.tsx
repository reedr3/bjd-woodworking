"use client";

import type { ReactNode } from "react";
import { cn } from "@/hobbit-library/utils/utils";
import { HobbitTag, type HobbitTagVariant } from "./HobbitTag";

export const meta = {
  name: "HobbitGalleryCard",
  description:
    "Portfolio gallery piece card with image block, hover overlay, category label, title, spec line, and status tags. Supports a featured (16:9 wide) variant.",
};

const blockToneClass = {
  gold: "bg-hobbit-gold-thumb",
  sage: "bg-hobbit-forest-soft",
  olive: "bg-hobbit-forest-base",
  rich: "bg-hobbit-gold-rich",
} as const;

export type HobbitGalleryCardTone = keyof typeof blockToneClass;

export type HobbitGalleryCardTag = {
  label: string;
  variant?: HobbitTagVariant;
};

export type HobbitGalleryCardProps = {
  category: string;
  title: string;
  spec: string;
  tags?: HobbitGalleryCardTag[];
  /** When true, renders a 16:9 image block instead of 4:3. */
  featured?: boolean;
  blockTone?: HobbitGalleryCardTone;
  image?: ReactNode;
  onClick?: () => void;
  className?: string;
};

export function HobbitGalleryCard({
  category,
  title,
  spec,
  tags = [],
  featured = false,
  blockTone = "gold",
  image,
  onClick,
  className,
}: HobbitGalleryCardProps) {
  return (
    <article
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => (e.key === "Enter" || e.key === " ") && onClick() : undefined}
      className={cn(
        "group overflow-hidden rounded-lg border border-hobbit-sand bg-hobbit-paper transition-transform duration-200",
        onClick && "cursor-pointer hover:scale-[1.02]",
        className,
      )}
    >
      <div className="relative overflow-hidden">
        <div
          className={cn(
            "flex w-full items-center justify-center",
            featured ? "aspect-[16/9]" : "aspect-[4/3]",
            image ? "bg-hobbit-paper" : blockToneClass[blockTone],
          )}
        >
          {image}
        </div>
        {onClick && (
          <div className="absolute inset-0 flex items-center justify-center bg-hobbit-wood-darkest/0 text-[28px] text-hobbit-cream-light opacity-0 transition-all duration-200 group-hover:bg-hobbit-wood-darkest/45 group-hover:opacity-100">
            <span aria-hidden>👁</span>
          </div>
        )}
      </div>

      <div className="px-3.5 pb-3.5 pt-3">
        <p className="mb-1 font-hobbit-ui text-[10px] uppercase tracking-[0.08em] text-hobbit-gold-dark">
          {category}
        </p>
        <h3 className="mb-1 font-hobbit-display text-[14px] font-bold text-hobbit-wood-darkest">
          {title}
        </h3>
        <p className="mb-2.5 font-hobbit-ui text-[11px] text-hobbit-wood-light">{spec}</p>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {tags.map((t) => (
              <HobbitTag key={t.label} variant={t.variant ?? "forest"}>
                {t.label}
              </HobbitTag>
            ))}
          </div>
          <span className="text-[16px] text-hobbit-gold-base" aria-hidden>
            →
          </span>
        </div>
      </div>
    </article>
  );
}
