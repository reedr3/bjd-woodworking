import * as React from "react";
import { cn } from "@/hobbit-library/utils/utils";

export const meta = {
  name: "HobbitButton",
  description: "Action button with gold primary, ghost, and outline-gold styles.",
  variants: ["primary", "ghost", "outline-gold"],
};

const variantClasses = {
  primary:
    "border-0 bg-hobbit-gold-base text-hobbit-cream-light hover:bg-hobbit-gold-light",
  ghost:
    "border border-hobbit-forest-light bg-transparent text-hobbit-forest-light hover:bg-hobbit-forest-light/10",
  "outline-gold":
    "border border-hobbit-gold-base bg-transparent px-7 py-2.5 text-[12px] text-hobbit-gold-dark tracking-[0.07em] hover:bg-hobbit-gold-base/10",
} as const;

export type HobbitButtonVariant = keyof typeof variantClasses;

type HobbitButtonShared = {
  variant?: HobbitButtonVariant;
  className?: string;
  children?: React.ReactNode;
};

export type HobbitButtonProps = HobbitButtonShared &
  (
    | ({ href: string } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">)
    | ({ href?: undefined } & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">)
  );

export function HobbitButton({
  className,
  variant = "primary",
  href,
  children,
  ...rest
}: HobbitButtonProps) {
  const classes = cn(
    "inline-flex cursor-pointer items-center justify-center rounded font-hobbit-ui uppercase outline-none transition-colors",
    "focus-visible:ring-2 focus-visible:ring-hobbit-gold-base focus-visible:ring-offset-2 focus-visible:ring-offset-hobbit-cream-light",
    variant !== "outline-gold" && "px-4 py-2 text-[11px] tracking-[0.05em]",
    variantClasses[variant],
    className,
  );

  if (href !== undefined) {
    const anchorProps = { ...(rest as Record<string, unknown>) };
    delete anchorProps.type;
    delete anchorProps.disabled;
    return (
      <a href={href} className={classes} {...(anchorProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  const { type = "button", ...buttonProps } = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
