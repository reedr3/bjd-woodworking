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
  /** Where the brand name links (default: site root). */
  brandHref?: string;
  links: HobbitNavLink[];
  cta: { label: string; href?: string };
  className?: string;
};

export function HobbitNav({ brand, brandHref = "/", links, cta, className }: HobbitNavProps) {
  const brandClassName = cn(
    "font-hobbit-display text-lg font-bold leading-tight text-hobbit-cream-light no-underline sm:text-xl md:text-[22px]",
    "outline-none transition-opacity hover:opacity-90",
    "focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-hobbit-gold-base focus-visible:ring-offset-2 focus-visible:ring-offset-hobbit-forest-base",
  );

  return (
    <div className="w-full bg-hobbit-forest-base">
      <div className={cn("mx-auto w-full max-w-hobbit-page px-hobbit-page", className)}>
        <nav
          className="flex min-h-[3.75rem] items-center justify-between gap-3 py-3 md:min-h-[4rem] md:gap-4 md:py-3.5"
          aria-label="Main"
        >
          <a href={brandHref} className={brandClassName}>
            {brand}
          </a>
          <ul className="m-0 flex list-none flex-wrap justify-end gap-5 p-0 md:gap-8">
            {links.map((link) => (
              <li key={link.label}>
                {link.href ? (
                  <a
                    href={link.href}
                    aria-current={link.active ? "page" : undefined}
                    className={cn(
                      "inline-block border-b-[1.5px] border-solid pb-[2px] font-hobbit-ui text-[13px] uppercase tracking-[0.08em] outline-none transition-colors md:text-[14px]",
                      "focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-hobbit-gold-base focus-visible:ring-offset-2 focus-visible:ring-offset-hobbit-forest-base",
                      link.active
                        ? "border-hobbit-gold-base font-bold text-hobbit-cream-light"
                        : "border-transparent font-normal text-hobbit-forest-pale hover:text-hobbit-cream-light",
                    )}
                  >
                    {link.label}
                  </a>
                ) : (
                  <span
                    className={cn(
                      "inline-block border-b-[1.5px] border-solid pb-[2px] font-hobbit-ui text-[13px] uppercase tracking-[0.08em] md:text-[14px]",
                      link.active
                        ? "border-hobbit-gold-base font-bold text-hobbit-cream-light"
                        : "border-transparent font-normal text-hobbit-forest-pale",
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
              className="px-4 py-2.5 text-[12px] tracking-[0.06em] focus-visible:ring-offset-hobbit-forest-base md:px-5 md:text-[13px]"
            >
              {cta.label}
            </HobbitButton>
          ) : (
            <span
              className={cn(
                "font-hobbit-ui rounded bg-hobbit-gold-base px-4 py-2.5 text-[12px] uppercase tracking-[0.05em] text-hobbit-cream-light md:px-5 md:text-[13px]",
              )}
            >
              {cta.label}
            </span>
          )}
        </nav>
      </div>
    </div>
  );
}
