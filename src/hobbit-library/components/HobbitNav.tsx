import { cn } from "@/hobbit-library/utils/utils";
import { HobbitButton } from "./HobbitButton";

export const meta = {
  name: "HobbitNav",
  description: "Top navigation bar with brand, links, and a CTA for Hobbit Hole layouts.",
};

export type HobbitNavLink = {
  label: string;
  href?: string;
  active?: boolean;
};

export type HobbitNavProps = {
  brand: string;
  links: HobbitNavLink[];
  cta: { label: string; href?: string };
  className?: string;
};

export function HobbitNav({ brand, links, cta, className }: HobbitNavProps) {
  return (
    <nav
      className={cn(
        "flex h-[52px] items-center justify-between rounded-lg bg-hobbit-forest-dark px-hobbit-page",
        className,
      )}
      aria-label="Main"
    >
      <div className="font-hobbit-display text-[15px] font-bold text-hobbit-cream-light">
        {brand}
      </div>
      <ul className="flex list-none gap-5 p-0 m-0">
        {links.map((link) => (
          <li key={link.label}>
            {link.href ? (
              <a
                href={link.href}
                className={cn(
                  "font-hobbit-ui text-[11px] uppercase tracking-[0.08em] outline-none transition-colors",
                  "focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-hobbit-gold-base focus-visible:ring-offset-2 focus-visible:ring-offset-hobbit-forest-dark",
                  link.active
                    ? "border-b-[1.5px] border-hobbit-gold-base pb-0.5 text-hobbit-cream-light"
                    : "text-hobbit-forest-pale hover:text-hobbit-cream-light",
                )}
              >
                {link.label}
              </a>
            ) : (
              <span
                className={cn(
                  "font-hobbit-ui text-[11px] uppercase tracking-[0.08em]",
                  link.active
                    ? "border-b-[1.5px] border-hobbit-gold-base pb-0.5 text-hobbit-cream-light"
                    : "text-hobbit-forest-pale",
                )}
              >
                {link.label}
              </span>
            )}
          </li>
        ))}
      </ul>
      {cta.href ? (
        <HobbitButton
          href={cta.href}
          variant="primary"
          className="px-3.5 py-1.5 focus-visible:ring-offset-hobbit-forest-dark"
        >
          {cta.label}
        </HobbitButton>
      ) : (
        <span
          className={cn(
            "font-hobbit-ui rounded bg-hobbit-gold-base px-3.5 py-1.5 text-[11px] uppercase tracking-[0.05em] text-hobbit-cream-light",
          )}
        >
          {cta.label}
        </span>
      )}
    </nav>
  );
}
