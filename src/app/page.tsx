import {
  HobbitFooter,
  HobbitHero,
  HobbitNav,
  HobbitPageContainer,
  HobbitPageShell,
  HobbitPortfolioCard,
  type HobbitPortfolioBlockTone,
  HobbitProcessSteps,
  HobbitTestimonial,
} from "@/hobbit-library/components";

const featuredPieces: ReadonlyArray<{
  title: string;
  tag: string;
  spec: string;
  tone: HobbitPortfolioBlockTone;
}> = [
  { title: "Walnut dining table", tag: "Walnut", spec: "84″ × 38″", tone: "gold" },
  { title: "White oak sideboard", tag: "White Oak", spec: "60″ × 32″", tone: "sage" },
  { title: "Cherry writing desk", tag: "Cherry", spec: "48″ × 24″", tone: "olive" },
  { title: "Maple side tables", tag: "Hard Maple", spec: "Set of 2", tone: "sage" },
  { title: "Walnut bookshelf", tag: "Walnut", spec: "72″ tall", tone: "olive" },
  { title: "Oak coffee table", tag: "White Oak", spec: "48″ × 24″", tone: "gold" },
];

export default function Home() {
  return (
    <HobbitPageShell>
      <HobbitNav
        brand="Bridget J. Duffy"
        links={[
          { label: "Portfolio", href: "/portfolio" },
          { label: "Commissions", href: "/commissions" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ]}
        cta={{ label: "Request Commission", href: "/commissions" }}
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

      <HobbitPageContainer className="pb-10 pt-5">
        <section className="mb-8">
          <div className="mb-4 flex flex-col gap-3 sm:mb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-1.5 font-hobbit-ui text-[10px] uppercase tracking-[0.2em] text-hobbit-gold-dark">
                Recent work
              </p>
              <h2 className="font-hobbit-display text-[22px] font-bold text-hobbit-wood-darkest">Featured pieces</h2>
            </div>
            <a
              href="/portfolio"
              className="shrink-0 self-start font-hobbit-ui text-[11px] uppercase tracking-[0.08em] text-hobbit-gold-base underline underline-offset-2 outline-none transition-opacity hover:opacity-80 focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-hobbit-gold-base focus-visible:ring-offset-2 focus-visible:ring-offset-hobbit-cream-light sm:self-auto"
            >
              View all work
            </a>
          </div>
          <div className="grid grid-cols-1 gap-[10px] sm:grid-cols-2 md:grid-cols-3">
            {featuredPieces.map((piece) => (
              <HobbitPortfolioCard
                key={piece.title}
                className="w-full max-w-none"
                title={piece.title}
                tag={piece.tag}
                spec={piece.spec}
                tagVariant="forest"
                minimal
                blockTone={piece.tone}
              />
            ))}
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
        tagline="Handcrafted furniture"
        links={[
          { label: "Portfolio", href: "/portfolio" },
          { label: "Commissions", href: "/commissions" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ]}
        copyright="© 2026 Bridget J. Duffy"
      />
    </HobbitPageShell>
  );
}
