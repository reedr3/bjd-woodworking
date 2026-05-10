import { cn } from "@/hobbit-library/utils/utils";
import { HobbitPageContainer } from "./HobbitPageContainer";

export const meta = {
  name: "HobbitFooter",
  description: "Site footer with brand, tagline, and navigation links in forest tones.",
};

export type HobbitFooterLink = {
  label: string;
  href: string;
  /** Current page — bold, full cream (matches nav). */
  active?: boolean;
};

export type HobbitFooterProps = {
  brand: string;
  /** Where the brand name links (default: site root). */
  brandHref?: string;
  tagline?: string;
  links: HobbitFooterLink[];
  copyright?: string;
};

export function HobbitFooter({ brand, brandHref = "/", tagline, links, copyright }: HobbitFooterProps) {
  const brandClassName = cn(
    "inline-block font-hobbit-display text-[15px] font-bold text-hobbit-cream-light no-underline outline-none transition-opacity hover:opacity-90",
    "focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-hobbit-gold-base focus-visible:ring-offset-2 focus-visible:ring-offset-hobbit-forest-dark",
  );

  return (
    <footer className="bg-hobbit-forest-dark pb-5 pt-7">
      <HobbitPageContainer>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:items-center md:gap-6">
          <div className="text-left md:min-w-0">
            <a href={brandHref} className={brandClassName}>
              {brand}
            </a>
            {tagline ? (
              <p className="mt-1 max-w-md font-hobbit-body text-[11px] italic text-hobbit-forest-light">{tagline}</p>
            ) : null}
          </div>
          <nav className="flex justify-center md:min-w-0" aria-label="Footer">
            <ul className="m-0 flex list-none flex-wrap justify-center gap-x-5 gap-y-2 p-0">
              {links.map((link) => (
                <li key={`${link.label}-${link.href}`}>
                  <a
                    href={link.href}
                    aria-current={link.active ? "page" : undefined}
                    className={cn(
                      "font-hobbit-ui text-[11px] uppercase tracking-[0.07em] outline-none transition-colors md:text-[12px]",
                      "focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-hobbit-gold-base focus-visible:ring-offset-2 focus-visible:ring-offset-hobbit-forest-dark",
                      link.active
                        ? "font-bold text-hobbit-cream-light"
                        : "font-normal text-hobbit-forest-pale hover:text-hobbit-cream-light",
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {copyright ? (
          <div className="mt-4 border-t border-hobbit-forest-base pt-3 text-left">
            <p className="font-hobbit-ui text-[10px] text-hobbit-forest-light">{copyright}</p>
          </div>
        ) : null}
      </HobbitPageContainer>
    </footer>
  );
}
