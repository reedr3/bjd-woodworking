import {
  HobbitFooter,
  HobbitNav,
  HobbitPageShell,
  HobbitShopHero,
} from "@/hobbit-library/components";

import { ShopClient } from "./ShopClient";

export default function ShopPage() {
  return (
    <HobbitPageShell>
      <HobbitNav
        brand="Bridget J. Duffy"
        links={[
          { label: "Portfolio", href: "/portfolio" },
          { label: "Shop", href: "/shop", active: true },
          { label: "Commissions", href: "/commissions" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ]}
        cta={{ label: "Request commission", href: "/commissions" }}
      />

      <HobbitShopHero
        eyebrow="Available now"
        title="Shop"
        subtext="Ready-made pieces available for immediate purchase. Each one is finished and ready to ship — or available for local pickup."
        aside={
          <div className="flex items-center gap-3 rounded-md bg-hobbit-forest-base px-4 py-3">
            <span className="text-xl" aria-hidden>
              🚚
            </span>
            <div>
              <p className="font-hobbit-ui text-[11px] font-semibold tracking-[0.04em] text-hobbit-cream-light">
                Free shipping over $500
              </p>
              <p className="font-hobbit-body text-[12px] text-hobbit-forest-pale">
                Local pickup available in Burlington, VT
              </p>
            </div>
          </div>
        }
      />

      <ShopClient />

      <HobbitFooter
        brand="Bridget J. Duffy"
        tagline="Handcrafted furniture"
        links={[
          { label: "Portfolio", href: "/portfolio" },
          { label: "Shop", href: "/shop", active: true },
          { label: "Commissions", href: "/commissions" },
          { label: "About", href: "/about" },
        ]}
        copyright="© 2026 Bridget J. Duffy"
      />
    </HobbitPageShell>
  );
}
