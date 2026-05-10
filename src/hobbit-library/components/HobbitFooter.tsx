import { cn } from "@/hobbit-library/utils/utils";
import { HobbitPageContainer } from "./HobbitPageContainer";

export const meta = {
  name: "HobbitFooter",
  description: "Site footer with serif brand, centered monospace nav, and copyright in forest tones.",
};

export type HobbitFooterLink = {
  label: string;
  href: string;
  /** Current page — bold; link color matches inactive (forest-soft on dark footer). */
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
    "inline-block font-hobbit-display text-lg font-bold leading-tight text-hobbit-cream-light no-underline outline-none transition-opacity hover:opacity-90 sm:text-xl",
    "focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-hobbit-gold-base focus-visible:ring-offset-2 focus-visible:ring-offset-hobbit-forest-dark",
  );

  return (
    <footer className="rounded-b-2xl bg-hobbit-forest-dark pb-6 pt-8 sm:rounded-b-3xl">
      <HobbitPageContainer>
        <div
          className={cn(
            "grid grid-cols-1 items-start gap-6 md:items-center md:gap-8",
            copyright ? "md:grid-cols-3" : "md:flex md:justify-between",
          )}
        >
          <div className="text-center md:min-w-0 md:text-left">
            <a href={brandHref} className={brandClassName}>
              {brand}
            </a>
            {tagline ? (
              <p className="mx-auto mt-1 max-w-md font-hobbit-body text-[11px] italic text-hobbit-forest-light md:ml-0 md:mr-auto">
                {tagline}
              </p>
            ) : null}
          </div>
          <nav className="flex justify-center md:min-w-0" aria-label="Footer">
            <ul className="m-0 flex list-none flex-wrap justify-center gap-x-4 gap-y-2 p-0 sm:gap-x-5">
              {links.map((link) => (
                <li key={`${link.label}-${link.href}`}>
                  <a
                    href={link.href}
                    aria-current={link.active ? "page" : undefined}
                    className={cn(
                      "inline-block border-b-[1.5px] border-solid pb-[2px] font-hobbit-ui text-[11px] uppercase tracking-[0.08em] text-hobbit-forest-soft outline-none transition-opacity hover:opacity-90 md:text-[12px]",
                      "focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-hobbit-gold-base focus-visible:ring-offset-2 focus-visible:ring-offset-hobbit-forest-dark",
                      link.active ? "border-hobbit-forest-soft font-bold" : "border-transparent font-normal",
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {copyright ? (
            <p className="m-0 text-center font-hobbit-ui text-[10px] leading-snug text-hobbit-forest-caption md:text-right md:text-[11px]">
              {copyright}
            </p>
          ) : null}
        </div>
      </HobbitPageContainer>
    </footer>
  );
}
