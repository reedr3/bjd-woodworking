import * as React from "react";
import { cn } from "@/hobbit-library/utils/utils";

const variantClasses = {
  primary:
    "border-0 bg-hobbit-gold-base text-hobbit-cream-light hover:bg-hobbit-gold-light",
  ghost:
    "border border-hobbit-forest-light bg-transparent text-hobbit-forest-light hover:bg-hobbit-forest-light/10",
  "outline-gold":
    "border border-hobbit-gold-base bg-transparent px-7 py-2.5 text-[12px] text-hobbit-gold-dark tracking-[0.07em] hover:bg-hobbit-gold-base/10",
} as const;

export type HobbitButtonVariant = keyof typeof variantClasses;

export type HobbitButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: HobbitButtonVariant;
};

export function HobbitButton({
  className,
  variant = "primary",
  type = "button",
  ...props
}: HobbitButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "cursor-pointer rounded font-hobbit-ui uppercase outline-none transition-colors",
        "focus-visible:ring-2 focus-visible:ring-hobbit-gold-base focus-visible:ring-offset-2 focus-visible:ring-offset-hobbit-cream-light",
        variant !== "outline-gold" && "px-4 py-2 text-[11px] tracking-[0.05em]",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}
