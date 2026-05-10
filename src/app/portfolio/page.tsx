import {
  HobbitFooter,
  HobbitNav,
  HobbitPageHero,
  HobbitPageShell,
} from "@/hobbit-library/components";
import { PortfolioGallery } from "./PortfolioGallery";

export default function PortfolioPage() {
  return (
    <HobbitPageShell>
      <HobbitNav
        brand="Bridget J. Duffy"
        links={[
          { label: "Portfolio", href: "/portfolio", active: true },
          { label: "Commissions", href: "/commissions" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ]}
        cta={{ label: "Request Commission", href: "/commissions" }}
      />

      <HobbitPageHero
        eyebrow="The work"
        title="Portfolio"
        subtext="Every piece begins as a conversation between maker and material. Browse finished work below — each with its own story, wood selection, and dimensions."
      />

      <PortfolioGallery />

      <HobbitFooter
        brand="Bridget J. Duffy"
        links={[
          { label: "Portfolio", href: "/portfolio", active: true },
          { label: "Commissions", href: "/commissions" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ]}
        copyright="© 2026 Bridget J. Duffy"
      />
    </HobbitPageShell>
  );
}
