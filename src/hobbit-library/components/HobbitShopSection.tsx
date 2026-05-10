import type { ReactNode } from "react";

import { cn } from "@/hobbit-library/utils/utils";
import { HobbitPageContainer } from "./HobbitPageContainer";
import { HobbitProductCard, type HobbitProductBadge } from "./HobbitProductCard";

export const meta = {
  name: "HobbitShopSection",
  description:
    "Shop preview section with eyebrow label, heading, optional 'Browse all' link, and a 3-column grid of product cards.",
};

export type HobbitShopItem = {
  name: string;
  category: string;
  spec: string;
  price: number;
  badge?: HobbitProductBadge;
  /** Tailwind bg-* class for the image placeholder. Defaults to bg-hobbit-gold-thumb. */
  imageBg?: string;
  image?: ReactNode;
  onAddToCart?: () => void;
  onNotify?: () => void;
};

export type HobbitShopSectionProps = {
  eyebrow?: string;
  heading: string;
  viewAllLabel?: string;
  viewAllHref?: string;
  items: HobbitShopItem[];
  className?: string;
};

export function HobbitShopSection({
  eyebrow = "Available now",
  heading,
  viewAllLabel = "Browse all",
  viewAllHref,
  items,
  className,
}: HobbitShopSectionProps) {
  return (
    <section className={cn("bg-hobbit-cream-warm py-9", className)}>
      <HobbitPageContainer>
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            {eyebrow && (
              <p className="mb-1.5 font-hobbit-ui text-[10px] uppercase tracking-[0.18em] text-hobbit-gold-dark">
                {eyebrow}
              </p>
            )}
            <div className="mb-4 h-0.5 w-9 rounded-[1px] bg-hobbit-gold-base" aria-hidden />
            <h2 className="font-hobbit-display text-[22px] font-bold text-hobbit-wood-darkest">
              {heading}
            </h2>
          </div>
          {viewAllHref && (
            <a
              href={viewAllHref}
              className="shrink-0 self-start border-b border-hobbit-gold-base pb-px font-hobbit-ui text-[11px] uppercase tracking-[0.06em] text-hobbit-gold-base outline-none transition-opacity hover:opacity-80 focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-hobbit-gold-base focus-visible:ring-offset-2 sm:self-auto"
            >
              {viewAllLabel}
            </a>
          )}
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          {items.map((item) => (
            <HobbitProductCard
              key={item.name}
              category={item.category}
              name={item.name}
              spec={item.spec}
              price={item.price}
              badge={item.badge}
              imageBg={item.imageBg ?? "bg-hobbit-gold-thumb"}
              image={item.image}
              onAddToCart={item.onAddToCart}
              onNotify={item.onNotify}
            />
          ))}
        </div>
      </HobbitPageContainer>
    </section>
  );
}
