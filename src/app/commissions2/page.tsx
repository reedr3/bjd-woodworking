import {
  HobbitCommissionHero,
  HobbitCommissionProcess,
  HobbitFaqAccordion,
  HobbitFooter,
  HobbitNav,
  HobbitPageContainer,
  HobbitPageShell,
  HobbitPricingGrid,
  HobbitPullQuote,
  HobbitReassureStrip,
} from "@/hobbit-library/components";
import { CommissionFormV2 } from "./CommissionFormV2";

const faqItems = [
  {
    question: "How long does a commission usually take?",
    answer:
      "Most pieces ship 8–16 weeks after design approval, depending on scale and joinery. Dining tables and built-ins sit at the longer end; smaller pieces like side tables or boxes can ship inside two months. I'm currently booking projects to begin in March 2026.",
  },
  {
    question: "Can I see the wood before you build?",
    answer:
      "Yes. During the design phase I ship a small box of wood and finish samples to your door so you can see and touch the grain before committing. No surprises.",
  },
  {
    question: "Do you ship outside New England?",
    answer:
      "White-glove delivery is included anywhere in New England. For locations outside New England I work with a trusted freight partner — reach out and we'll work out the details.",
  },
  {
    question: "What's the deposit structure?",
    answer:
      "25% deposit after design approval to reserve your place in the queue, 50% at the mid-build milestone, and the remaining 25% on delivery. Nothing is due until you've approved the design.",
  },
  {
    question: "Can I supply my own wood (a tree from our property)?",
    answer:
      "Absolutely — it's one of my favourite ways to work. The timber needs to be milled and dried first; I can advise on that process or refer a local sawyer.",
  },
  {
    question: "What if I'm not sure what I want yet?",
    answer:
      "The consult call is exactly for that. Bring whatever you have — a rough idea, a Pinterest board, a room photo — and we'll work out what makes sense together.",
  },
  {
    question: "Do you offer repairs or restoration?",
    answer:
      "On a case-by-case basis, yes. Heirloom pieces and locally made furniture take priority. Send a photo and a short description through the contact page.",
  },
];

const navLinks = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Commissions", href: "/commissions2", active: true },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Commissions2Page() {
  return (
    <HobbitPageShell>
      <HobbitNav
        brand="Bridget J. Duffy"
        links={navLinks}
        cta={{ label: "Request commission", href: "#request" }}
      />

      <HobbitCommissionHero
        eyebrow="Custom commissions · By appointment"
        heading="Have a piece in mind?"
        headingEmphasis="Let's build it together."
        subtext="Every commission begins with a conversation. From a single side table to a full dining room — tell me what you're imagining and we'll work out the rest."
        metaItems={[
          { label: "Lead time", value: "8 – 16 weeks" },
          { label: "Starting from", value: "$650" },
          { label: "Booked through", value: "Mar 2026" },
        ]}
      />

      <HobbitCommissionProcess
        eyebrow="How it works"
        heading="From first sketch to final delivery"
        intro="Most commissions follow the same four steps. You're looped in at every stage — no surprises, just steady progress and the occasional shop photo."
        steps={[
          {
            number: "01",
            title: "Consult",
            time: "Week 1 · Free",
            description:
              "A 30-minute call to talk through your vision, the room, the budget, and the wood you're drawn to.",
          },
          {
            number: "02",
            title: "Design",
            time: "Week 2 – 4 · 25% deposit",
            description:
              "Hand-drawn sketches, dimensioned drawings, and a small box of wood & finish samples shipped to you.",
          },
          {
            number: "03",
            title: "Build",
            time: "Week 4 – 14 · 50% mid-build",
            description:
              "Cut, joined, and finished by hand in the Burlington shop. You'll get progress photos every two weeks.",
          },
          {
            number: "04",
            title: "Deliver",
            time: "Final week · 25% on delivery",
            description:
              "White-glove delivery and installation in your home — anywhere in New England, by arrangement elsewhere.",
          },
        ]}
      />

      <HobbitPricingGrid
        eyebrow="A rough idea of cost"
        heading="Pricing reference"
        intro="Every piece is priced to its drawings — wood species, joinery complexity, and finish all factor in. These ranges are typical for past commissioned work."
        cards={[
          {
            category: "Smaller pieces",
            name: "Stools, side tables, boxes",
            range: "$650 – $1,400",
            leadTime: "8 – 10 weeks · single-piece designs, smaller stock",
          },
          {
            category: "Mid-scale",
            name: "Desks, dressers, sideboards",
            range: "$1,800 – $4,500",
            leadTime: "10 – 14 weeks · joinery-heavy, multi-component",
          },
          {
            category: "Heirloom",
            name: "Dining tables, beds, built-ins",
            range: "$3,500 – $9,000+",
            leadTime: "12 – 16 weeks · slab-matched tops, hand-cut joinery",
          },
        ]}
      />

      {/* Request form section */}
      <section id="request" className="bg-[#EDE0B8] py-9">
        <HobbitPageContainer>
          <p className="mb-2 font-hobbit-ui text-[10px] uppercase tracking-[0.18em] text-hobbit-gold-dark">
            Tell me about your piece
          </p>
          <div className="mb-3 h-0.5 w-9 rounded-[1px] bg-hobbit-gold-base" aria-hidden />
          <h2 className="mb-2 font-hobbit-display text-[22px] font-bold text-hobbit-wood-darkest">
            Request a commission
          </h2>
          <p className="mb-5 max-w-[580px] font-hobbit-body text-[13px] leading-[1.75] text-hobbit-wood-medium">
            A few questions to help me prepare for our consult. Nothing&apos;s binding — we&apos;ll
            talk through the details together.
          </p>

          <CommissionFormV2 />

          <HobbitReassureStrip
            items={[
              {
                title: "No commitment yet",
                description:
                  "The consult is free. Deposit isn't due until after design is approved.",
              },
              {
                title: "I respond within 48 hrs",
                description:
                  "Usually faster. Booked through March, but planning starts now.",
              },
              {
                title: "If it's not right, I'll say so",
                description:
                  "Some ideas suit another maker better. I'll be honest about the fit.",
              },
            ]}
          />
        </HobbitPageContainer>
      </section>

      <HobbitPullQuote
        eyebrow="From a recent commission"
        quote="From the first call I felt like Bridget understood what we were after. The sideboard arrived and the room finally made sense — like it had always been waiting for it."
        author="— James & Lori T., Stowe, VT"
        project="White oak sideboard · Commissioned 2024 · 14 weeks"
        imageLabel="Client photo"
      />

      <HobbitFaqAccordion
        eyebrow="Common questions"
        heading="Frequently asked"
        items={faqItems}
        defaultOpen={0}
      />

      <HobbitFooter
        brand="Bridget J. Duffy"
        links={navLinks}
        copyright="© 2026 Bridget J. Duffy"
      />
    </HobbitPageShell>
  );
}
