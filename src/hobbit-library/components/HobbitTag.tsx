import type { ReactNode } from "react";
import { cn } from "@/hobbit-library/utils/utils";

export const meta = {
  name: "HobbitTag",
  description: "Small pill label for categories, status, or metadata on cards and lists.",
  variants: ["forest", "gold"],
};

const variantClasses = {
  forest:
    "border-hobbit-forest-light/40 bg-hobbit-forest-light/15 text-hobbit-forest-dark",
  gold: "border-hobbit-gold-base/35 bg-hobbit-gold-base/10 text-hobbit-gold-dark",
} as const;

export type HobbitTagVariant = keyof typeof variantClasses;

export type HobbitTagProps = {
  children: ReactNode;
  variant?: HobbitTagVariant;
  className?: string;
};

export function HobbitTag({ children, variant = "forest", className }: HobbitTagProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-[3px] border px-2 py-0.5 font-hobbit-ui text-[10px]",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
