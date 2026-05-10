import {
  HobbitCtaStrip,
  HobbitFaqGrid,
  HobbitFooter,
  HobbitNav,
  HobbitPageContainer,
  HobbitPageShell,
  HobbitTimeline,
  HobbitTestimonial,
  type HobbitFaqItem,
} from "@/hobbit-library/components";
import { CommissionForm } from "./CommissionForm";

const faqItems: HobbitFaqItem[] = [
  {
    question: "How much does a commission cost?",
    answer:
      "Every piece is priced individually based on materials, complexity, and time. Most dining tables run $1,800–$4,500. Smaller pieces start from $300. You'll receive a fixed quote before anything is confirmed.",
  },
  {
    question: "How long does it take?",
    answer:
      "Typical lead time is 8–14 weeks from deposit to delivery. Simpler pieces can be faster. We'll give you a firm timeline in the design phase before you commit.",
  },
  {
    question: "Do I pay upfront?",
    answer:
      "A 50% deposit is required to begin the build, with the balance due on delivery. The consultation and design phase are free with no obligation.",
  },
  {
    question: "Can I choose the wood species?",
    answer:
      "Absolutely — wood selection is one of the most personal parts of the process. We'll show you samples during the design phase so you can see and touch the grain before deciding.",
  },
  {
    question: "Do you ship commissions?",
    answer:
      "Yes — we ship across the continental US with white-glove delivery on pieces over $1,500. Local delivery and installation in Vermont is always included.",
  },
  {
    question: "What if I'm not happy with the result?",
    answer:
      "We share sketches and material samples before building anything. Final approval happens before the build begins — so surprises at delivery are essentially impossible.",
  },
];

export default function CommissionsPage() {
  return (
    <HobbitPageShell>
      <HobbitNav
        brand="Bridget J. Duffy"
        links={[
          { label: "Portfolio", href: "/portfolio" },
          { label: "Commissions", href: "/commissions", active: true },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ]}
        cta={{ label: "Request commission", href: "#request" }}
      />

      <section className="border-b border-hobbit-sand bg-hobbit-cream-warm py-9">
        <HobbitPageContainer>
          <p className="mb-2 font-hobbit-ui text-[10px] uppercase tracking-[0.2em] text-hobbit-gold-dark">
            Custom work
          </p>
          <h1 className="mb-2.5 font-hobbit-display text-[30px] font-bold text-hobbit-wood-darkest">
            Commission a piece
          </h1>
          <p className="max-w-[520px] font-hobbit-body text-[13px] leading-[1.75] text-hobbit-wood-medium">
            Every commission begins with a conversation. From first sketch to final delivery, we work
            together at every step — no surprises, no shortcuts. Typical lead time is 8–14 weeks
            depending on complexity.
          </p>
        </HobbitPageContainer>
      </section>

      <HobbitTimeline
        eyebrow="How it works"
        heading="The process"
        steps={[
          {
            number: "01",
            title: "Consult",
            description:
              "We discuss your vision, space, and budget over a free 30-minute call. No commitment required.",
          },
          {
            number: "02",
            title: "Design",
            description:
              "Sketches, material samples, and a fixed quote before a single board is cut.",
          },
          {
            number: "03",
            title: "Build",
            description:
              "Handcrafted in our workshop. Progress photos sent weekly so you can follow along.",
          },
          {
            number: "04",
            title: "Deliver",
            description:
              "White-glove delivery and installation in your home. We don't leave until it's perfect.",
          },
        ]}
      />

      <HobbitTestimonial
        variant="grid"
        items={[
          {
            quote:
              "The process was so clear from the start — I knew exactly what I was getting and when.",
            author: "Sarah M.",
            project: "Walnut dining table",
          },
          {
            quote:
              "Bridget sent photos every week. Watching it come together was almost as good as the piece itself.",
            author: "James & Lori T.",
            project: "White oak sideboard",
          },
          {
            quote: "From first sketch to delivery — seamless. I couldn't be happier with the result.",
            author: "Rachel K.",
            project: "Cherry writing desk",
          },
        ]}
      />

      <section id="request" className="bg-hobbit-cream-light py-9">
        <HobbitPageContainer>
          <p className="mb-2 font-hobbit-ui text-[10px] uppercase tracking-[0.18em] text-hobbit-gold-dark">
            Start your request
          </p>
          <div className="mb-3 h-0.5 w-9 rounded-[1px] bg-hobbit-gold-base" aria-hidden />
          <h2 className="mb-5 font-hobbit-display text-[20px] font-bold text-hobbit-wood-darkest">
            Tell us about your piece
          </h2>
          <CommissionForm />
        </HobbitPageContainer>
      </section>

      <HobbitFaqGrid eyebrow="Questions" heading="Frequently asked" items={faqItems} />

      <HobbitCtaStrip
        heading="Ready to start? It's just a conversation."
        subtext="No commitment until you approve the design and quote."
        cta={{ label: "Start your request", href: "#request" }}
      />

      <HobbitFooter
        brand="Bridget J. Duffy"
        links={[
          { label: "Portfolio", href: "/portfolio" },
          { label: "Commissions", href: "/commissions", active: true },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ]}
        copyright="© 2026 Bridget J. Duffy"
      />
    </HobbitPageShell>
  );
}
