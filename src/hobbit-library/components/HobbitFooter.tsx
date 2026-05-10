import { HobbitPageContainer } from "./HobbitPageContainer";

export const meta = {
  name: "HobbitFooter",
  description: "Site footer with brand, tagline, and navigation links in forest tones.",
};

export type HobbitFooterLink = {
  label: string;
  href: string;
};

export type HobbitFooterProps = {
  brand: string;
  tagline?: string;
  links: HobbitFooterLink[];
  copyright?: string;
};

export function HobbitFooter({ brand, tagline, links, copyright }: HobbitFooterProps) {
  return (
    <footer className="bg-hobbit-forest-dark pb-5 pt-7">
      <HobbitPageContainer>
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-hobbit-display text-[15px] font-bold text-hobbit-cream-light">{brand}</p>
            {tagline ? (
              <p className="mt-1 max-w-xs font-hobbit-body text-[11px] italic text-hobbit-forest-light">{tagline}</p>
            ) : null}
          </div>
          <nav aria-label="Footer">
            <ul className="m-0 flex list-none flex-wrap gap-4 p-0 md:justify-end">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-hobbit-ui text-[11px] uppercase tracking-[0.07em] text-hobbit-forest-pale outline-none transition-colors hover:text-hobbit-cream-light focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-hobbit-gold-base focus-visible:ring-offset-2 focus-visible:ring-offset-hobbit-forest-dark"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {copyright ? (
          <div className="mt-4 border-t border-hobbit-forest-base pt-3">
            <p className="font-hobbit-ui text-[10px] text-hobbit-forest-light">{copyright}</p>
          </div>
        ) : null}
      </HobbitPageContainer>
    </footer>
  );
}
