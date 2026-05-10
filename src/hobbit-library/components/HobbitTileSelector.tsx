"use client";

import { cn } from "@/hobbit-library/utils/utils";

export const meta = {
  name: "HobbitTileSelector",
  description: "Selectable tile grid for single-option selection in forms.",
};

export type HobbitTileSelectorOption = {
  value: string;
  label: string;
  icon?: string;
};

export type HobbitTileSelectorProps = {
  options: HobbitTileSelectorOption[];
  value: string;
  onChange: (value: string) => void;
  columns?: 2 | 3 | 4;
  className?: string;
};

const colClass = {
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
} as const;

export function HobbitTileSelector({
  options,
  value,
  onChange,
  columns = 4,
  className,
}: HobbitTileSelectorProps) {
  return (
    <div className={cn("grid gap-2", colClass[columns], className)}>
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={cn(
            "cursor-pointer rounded-lg border px-2 py-2.5 text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hobbit-gold-base focus-visible:ring-offset-2",
            opt.value === value
              ? "border-hobbit-gold-base bg-[#FDF5E6]"
              : "border-hobbit-sand bg-[#F5EED8] hover:border-hobbit-gold-light",
          )}
        >
          {opt.icon && (
            <span className="mb-1 block text-lg text-hobbit-gold-base" aria-hidden>
              {opt.icon}
            </span>
          )}
          <span className="font-hobbit-ui text-[10px] uppercase tracking-[0.04em] text-hobbit-wood-darkest">
            {opt.label}
          </span>
        </button>
      ))}
    </div>
  );
}
