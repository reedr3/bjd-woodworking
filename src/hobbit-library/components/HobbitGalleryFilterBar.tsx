"use client";

import { cn } from "@/hobbit-library/utils/utils";

export const meta = {
  name: "HobbitGalleryFilterBar",
  description:
    "Scrollable horizontal filter tab strip for gallery category filtering. Stateless — parent owns activeFilter and onFilterChange.",
};

export type HobbitGalleryFilterBarProps = {
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  className?: string;
};

export function HobbitGalleryFilterBar({
  filters,
  activeFilter,
  onFilterChange,
  className,
}: HobbitGalleryFilterBarProps) {
  return (
    <div className={cn("w-full border-b border-hobbit-sand bg-hobbit-cream-light", className)}>
      <div className="mx-auto flex w-full max-w-hobbit-page items-center overflow-x-auto px-hobbit-page">
        {filters.map((filter) => {
          const isActive = filter === activeFilter;
          return (
            <button
              key={filter}
              onClick={() => onFilterChange(filter)}
              className={cn(
                "shrink-0 whitespace-nowrap border-b-2 px-4 py-3.5 font-hobbit-ui text-[11px] uppercase tracking-[0.06em] transition-colors outline-none",
                "focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-hobbit-gold-base focus-visible:ring-offset-1",
                isActive
                  ? "border-hobbit-gold-base text-hobbit-wood-darkest"
                  : "border-transparent text-hobbit-wood-light hover:text-hobbit-wood-darkest",
              )}
            >
              {filter}
            </button>
          );
        })}
      </div>
    </div>
  );
}
