"use client";

import type { ReactNode } from "react";

import { cn } from "@/hobbit-library/utils/utils";

export const meta = {
  name: "HobbitProductCard",
  description:
    "Shop product card with a 4:3 image area, stock badge, category label, name, spec line, price, and an add-to-cart or notify-me button.",
};

export type HobbitProductBadge = "new" | "in-stock" | "low-stock" | "sold";

export type HobbitProductCardProps = {
  category: string;
  name: string;
  spec: string;
  price: number;
  badge?: HobbitProductBadge;
  /** Tailwind bg-* class for the image placeholder area. Defaults to bg-hobbit-cream-warm. */
  imageBg?: string;
  image?: ReactNode;
  onAddToCart?: () => void;
  onNotify?: () => void;
  className?: string;
};

const badgeStyles: Record<HobbitProductBadge, string> = {
  "new": "bg-hobbit-gold-base text-hobbit-cream-light",
  "in-stock": "bg-hobbit-forest-base text-hobbit-forest-pale",
  "low-stock": "bg-hobbit-gold-dark text-hobbit-cream-light",
  "sold": "bg-hobbit-wood-darkest text-hobbit-gold-light",
};

const badgeLabels: Record<HobbitProductBadge, string> = {
  "new": "New",
  "in-stock": "In stock",
  "low-stock": "Only 1 left",
  "sold": "Sold",
};

export function HobbitProductCard({
  category,
  name,
  spec,
  price,
  badge,
  imageBg = "bg-hobbit-cream-warm",
  image,
  onAddToCart,
  onNotify,
  className,
}: HobbitProductCardProps) {
  const isSold = badge === "sold";
  const isLowStock = badge === "low-stock";

  return (
    <article
      className={cn(
        "cursor-pointer overflow-hidden rounded-lg border border-hobbit-sand bg-hobbit-paper",
        className,
      )}
    >
      <div
        className={cn(
          "relative flex aspect-[4/3] items-center justify-center",
          imageBg,
          isSold && "opacity-75",
        )}
      >
        {image ?? (
          <span className="text-[40px] opacity-20" aria-hidden>
            🪵
          </span>
        )}
        {badge ? (
          <span
            className={cn(
              "absolute left-2 top-2 rounded-[3px] px-2 py-0.5 font-hobbit-ui text-[10px] font-medium",
              badgeStyles[badge],
            )}
          >
            {badgeLabels[badge]}
          </span>
        ) : null}
      </div>
      <div className="px-3 pb-3.5 pt-2.5">
        <p className="mb-0.5 font-hobbit-ui text-[10px] uppercase tracking-[0.08em] text-hobbit-gold-dark">
          {category}
        </p>
        <h3 className="mb-0.5 font-hobbit-display text-[13px] font-bold text-hobbit-wood-darkest">
          {name}
        </h3>
        <p className="mb-2.5 font-hobbit-ui text-[10px] text-hobbit-wood-light">{spec}</p>
        <div className="flex items-center justify-between">
          {isSold ? (
            <span className="font-hobbit-ui text-[14px] font-bold text-hobbit-gold-dark line-through">
              ${price.toLocaleString()}
            </span>
          ) : (
            <span className="font-hobbit-ui text-[14px] font-bold text-hobbit-wood-darkest">
              ${price.toLocaleString()}
            </span>
          )}
          {isSold ? (
            <button
              onClick={onNotify}
              className="rounded-[3px] border border-hobbit-sand bg-hobbit-cream-warm px-2.5 py-1 font-hobbit-ui text-[10px] text-hobbit-gold-dark outline-none transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-hobbit-gold-base focus-visible:ring-offset-1"
            >
              Notify me
            </button>
          ) : (
            <button
              onClick={onAddToCart}
              className={cn(
                "rounded-[3px] px-2.5 py-1 font-hobbit-ui text-[10px] text-hobbit-cream-light outline-none transition-opacity hover:opacity-85 focus-visible:ring-2 focus-visible:ring-hobbit-gold-base focus-visible:ring-offset-1",
                isLowStock ? "bg-hobbit-gold-dark" : "bg-hobbit-gold-base",
              )}
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
