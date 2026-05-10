import {
  HobbitFooter,
  HobbitHero,
  HobbitNav,
  HobbitPageContainer,
  HobbitPageShell,
  HobbitPortfolioCard,
  HobbitProcessSteps,
  HobbitTestimonial,
} from "@/hobbit-library/components";

const featuredPieces = [
  { title: "Walnut dining table", tag: "Walnut", spec: "84″ × 38″" },
  { title: "White oak sideboard", tag: "White Oak", spec: "60″ × 32″" },
  { title: "Cherry writing desk", tag: "Cherry", spec: "48″ × 24″" },
  { title: "Maple side tables", tag: "Hard Maple", spec: "Set of 2" },
  { title: "Walnut bookshelf", tag: "Walnut", spec: "72″ tall" },
  { title: "Oak coffee table", tag: "White Oak", spec: "48″ × 24″" },
] as const;

export default function Home() {
  return (
    <HobbitPageShell>
      <HobbitPageContainer className="pb-12 pt-8">
        <HobbitNav
          brand="Bridget J. Duffy"
          links={[
            { label: "Portfolio", href: "/portfolio" },
            { label: "Shop", href: "/shop" },
            { label: "Commissions", href: "/commissions" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ]}
          cta={{ label: "Request Commission", href: "/commissions" }}
          className="mb-10"
        />

        <HobbitHero
          layout="split"
          eyebrow="Handcrafted furniture"
          title="Made to last a lifetime"
          copy="Every piece is designed around your space and built by hand in our workshop."
          buttons={[
            { label: "Start a commission", variant: "primary", href: "/commissions" },
            { label: "View the work", variant: "ghost", href: "/portfolio" },
          ]}
        />

        <section className="mb-12">
          <div className="mb-3 grid grid-cols-1 gap-[10px] sm:grid-cols-2 md:grid-cols-3">
            {featuredPieces.map((piece) => (
              <HobbitPortfolioCard
                key={piece.title}
                className="w-full max-w-none"
                title={piece.title}
                tag={piece.tag}
                spec={piece.spec}
                tagVariant="forest"
              />
            ))}
          </div>
          <div className="flex justify-end">
            <a
              href="/portfolio"
              className="font-hobbit-body text-[13px] text-hobbit-gold-base underline underline-offset-2 outline-none transition-opacity hover:opacity-80 focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-hobbit-gold-base focus-visible:ring-offset-2 focus-visible:ring-offset-hobbit-cream-light"
            >
              View all work
            </a>
          </div>
        </section>
      </HobbitPageContainer>

      <HobbitProcessSteps
        eyebrow="How it works"
        heading="Commission a piece"
        subtext="Have something specific in mind? Every commission starts with a conversation. We'll work together from first sketch to final delivery."
        steps={[
          {
            number: "01",
            title: "Consult",
            description: "We discuss your vision, space, and budget over a free call.",
          },
          {
            number: "02",
            title: "Design",
            description: "Sketches and material samples before any wood is cut.",
          },
          {
            number: "03",
            title: "Build",
            description: "Handcrafted in our workshop, with progress updates throughout.",
          },
          {
            number: "04",
            title: "Deliver",
            description: "White-glove delivery and installation in your home.",
          },
        ]}
        cta={{ label: "Start your commission", href: "/commissions", variant: "primary" }}
        layout="horizontal"
      />

      <HobbitTestimonial
        eyebrow="What clients say"
        heading="Testimonials"
        variant="grid"
        items={[
          {
            quote:
              "The dining table exceeded every expectation. The grain matching alone took my breath away.",
            author: "Sarah M.",
            project: "Custom walnut dining table",
          },
          {
            quote: "Nothing comes close to the quality or care that went into our sideboard.",
            author: "James & Lori T.",
            project: "White oak sideboard",
          },
          {
            quote: "From first sketch to delivery, the process was seamless. Compliments every time someone visits.",
            author: "Rachel K.",
            project: "Cherry writing desk",
          },
        ]}
      />

      <HobbitFooter
        brand="Bridget J. Duffy"
        tagline="Handmade with love since 2009"
        links={[
          { label: "Portfolio", href: "/portfolio" },
          { label: "Shop", href: "/shop" },
          { label: "Commissions", href: "/commissions" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ]}
        copyright="© 2026 Bridget J. Duffy. All rights reserved."
      />
    </HobbitPageShell>
  );
}
