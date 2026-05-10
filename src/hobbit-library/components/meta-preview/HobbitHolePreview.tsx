import {
  HobbitAboutHero,
  HobbitBanner,
  HobbitBioTimeline,
  HobbitButton,
  HobbitColorGroup,
  HobbitColorSwatch,
  HobbitCommissionForm,
  HobbitCommissionHero,
  HobbitCommissionProcess,
  HobbitComponentShowcase,
  HobbitContactHero,
  HobbitContactMap,
  HobbitCtaStrip,
  HobbitFaqAccordion,
  HobbitFaqGrid,
  HobbitFooter,
  HobbitFormStepper,
  HobbitGalleryCard,
  HobbitHero,
  HobbitMakerStory,
  HobbitMaterialsGrid,
  HobbitNav,
  HobbitPageContainer,
  HobbitPageHero,
  HobbitPageShell,
  HobbitPhilosophyGrid,
  HobbitPortfolioCard,
  HobbitPressStrip,
  HobbitPricingGrid,
  HobbitPrinciple,
  HobbitProcessSteps,
  HobbitPullQuote,
  HobbitReassureStrip,
  HobbitSection,
  HobbitSocialCta,
  HobbitSocialFollow,
  HobbitSpacingDemo,
  HobbitSubsectionTitle,
  HobbitTag,
  HobbitTestimonial,
  HobbitTestimonialStrip,
  HobbitTimeline,
  HobbitTypeScale,
  HobbitTypeSpecimen,
  HobbitWorkshopGallery,
  type HobbitFaqItem,
} from "@/hobbit-library/components";
import { HobbitGalleryFilterBarDemo, HobbitTileSelectorDemo } from "./interactive-demos";

const previewFaqItems: HobbitFaqItem[] = [
  {
    question: "How long does a typical commission take?",
    answer: "Most pieces ship in 8–14 weeks from deposit, depending on complexity and the queue.",
  },
  {
    question: "Do you ship outside Vermont?",
    answer: "Yes — white-glove delivery is available across the continental US on larger pieces.",
  },
];

export default function HobbitHolePreview() {
  return (
    <HobbitPageShell>
      <HobbitBanner>Hobbit Hole Library · Artisan Portfolio Theme</HobbitBanner>

      <HobbitPageContainer className="py-8">
        <HobbitHero eyebrow="Design Foundation" title="Hobbit Hole">
          A warm, earthy component library for showcasing handcrafted furniture and woodworking. Built for trust,
          craftsmanship, and natural beauty.
        </HobbitHero>

        <HobbitComponentShowcase title="Hero (split layout)">
          <HobbitHero
            layout="split"
            eyebrow="Handcrafted furniture"
            title="Made to last a lifetime"
            copy="Every piece is designed around your space and built by hand in our workshop."
            buttons={[
              { label: "Start a commission", variant: "primary", href: "#" },
              { label: "View the work", variant: "ghost", href: "#" },
            ]}
          />
        </HobbitComponentShowcase>

        <HobbitSection title="Color Palette" eyebrow="Foundation">
          <HobbitColorGroup title="Foundation — Cream &amp; Sand">
            <HobbitColorSwatch name="Cream Light" hex="#FAF5EA" description="Primary background" />
            <HobbitColorSwatch name="Cream Base" hex="#F0E8D0" description="Page background" />
            <HobbitColorSwatch name="Cream Warm" hex="#F0E6C8" description="Hero sections" />
            <HobbitColorSwatch name="Beige Section" hex="#E9DCC4" description="Commission / warm section bands" />
            <HobbitColorSwatch name="Sand" hex="#D8CEAA" description="Borders, dividers" />
            <HobbitColorSwatch name="Paper" hex="#FFFDF5" description="Cards and elevated surfaces" />
          </HobbitColorGroup>

          <HobbitColorGroup title="Primary — Forest Green">
            <HobbitColorSwatch name="Forest Dark" hex="#4A6A34" description="Footer, labels, panels" />
            <HobbitColorSwatch name="Forest Base" hex="#6B8E4E" description="Navigation" />
            <HobbitColorSwatch name="Forest Light" hex="#8AAE7A" description="Accents, tags" />
            <HobbitColorSwatch name="Forest Pale" hex="#C8E0B0" description="Secondary nav" />
            <HobbitColorSwatch name="Forest Soft" hex="#A8C898" description="Footer links" />
            <HobbitColorSwatch name="Forest Caption" hex="#7A9E6A" description="De-emphasized copy on forest-dark" />
          </HobbitColorGroup>

          <HobbitColorGroup title="Accent — Golden Hour">
            <HobbitColorSwatch name="Gold Base" hex="#C8963C" description="CTAs, active states" />
            <HobbitColorSwatch name="Gold Dark" hex="#A67A28" description="Category labels" />
            <HobbitColorSwatch name="Gold Light" hex="#C8A860" description="Descriptions" />
            <HobbitColorSwatch name="Gold Rich" hex="#D4A848" description="Decorative" />
            <HobbitColorSwatch name="Gold Thumb" hex="#C8A060" description="Image blocks, warm panels" />
          </HobbitColorGroup>

          <HobbitColorGroup title="Neutrals — Wood Tones">
            <HobbitColorSwatch name="Wood Darkest" hex="#4A3A18" description="Headings" />
            <HobbitColorSwatch name="Wood Medium" hex="#7A6030" description="Subheadings" />
            <HobbitColorSwatch name="Wood Light" hex="#8B7A50" description="Secondary text" />
          </HobbitColorGroup>
        </HobbitSection>

        <HobbitSection title="Typography" eyebrow="Type System">
          <div className="grid gap-6">
            <div>
              <HobbitSubsectionTitle>Font Families</HobbitSubsectionTitle>
              <div className="grid gap-4">
                <HobbitTypeSpecimen
                  preset="display"
                  familyLabel="Playfair Display"
                  usage="Headings, logos, display"
                  sample="The quick brown fox jumps over the lazy dog"
                />
                <HobbitTypeSpecimen
                  preset="body"
                  familyLabel="Lora"
                  usage="Body text, descriptions"
                  sample="The quick brown fox jumps over the lazy dog"
                />
                <HobbitTypeSpecimen
                  preset="ui"
                  familyLabel="Courier Prime"
                  usage="Labels, UI, eyebrows, buttons"
                  sample="THE QUICK BROWN FOX JUMPS"
                />
              </div>
            </div>

            <div>
              <HobbitSubsectionTitle>Type Scale</HobbitSubsectionTitle>
              <div className="grid gap-3">
                <HobbitTypeScale size="30px" label="H1 / Page Heading" fontClass="font-hobbit-display" />
                <HobbitTypeScale size="17px" label="H2 / Section Heading" fontClass="font-hobbit-display" />
                <HobbitTypeScale size="15px" label="H3 / Subsection" fontClass="font-hobbit-display" />
                <HobbitTypeScale size="13px" label="Body Text" fontClass="font-hobbit-body" />
                <HobbitTypeScale size="11px" label="UI Text / Buttons" fontClass="font-hobbit-ui" uppercase />
                <HobbitTypeScale size="10px" label="Labels / Eyebrows" fontClass="font-hobbit-ui" uppercase />
              </div>
            </div>
          </div>
        </HobbitSection>

        <HobbitSection title="Components" eyebrow="Registry catalog">
          <p className="mb-6 max-w-[640px] font-hobbit-body text-[13px] leading-[1.75] text-hobbit-wood-medium">
            Every file with <code className="font-mono text-[12px]">export const meta</code> under{" "}
            <code className="font-mono text-[12px]">src/hobbit-library/components/</code> is listed in{" "}
            <code className="font-mono text-[12px]">registry.ts</code> and{" "}
            <code className="font-mono text-[12px]">index.md</code> after{" "}
            <code className="font-mono text-[12px]">npm run hobbit-library:docs</code>. Demos below mirror that
            registry for visual QA.
          </p>

          <HobbitComponentShowcase title="HobbitPageShell">
            <p className="font-hobbit-body text-[13px] leading-[1.7] text-hobbit-wood-medium">
              This route is wrapped in <code className="font-mono text-[12px]">HobbitPageShell</code> — full-page cream
              background and default body typography.
            </p>
          </HobbitComponentShowcase>

          <HobbitComponentShowcase title="HobbitPageContainer">
            <HobbitPageContainer className="rounded-lg border border-dashed border-hobbit-sand bg-hobbit-paper py-4 text-center">
              <span className="font-hobbit-ui text-[11px] text-hobbit-wood-light">
                Nested column — same max width and gutters as the outer page column.
              </span>
            </HobbitPageContainer>
          </HobbitComponentShowcase>

          <HobbitComponentShowcase title="HobbitPageHero">
            <div className="overflow-hidden rounded-lg border border-hobbit-sand">
              <HobbitPageHero
                eyebrow="Interior page"
                title="Page hero sample"
                subtext="Short supporting copy sits under the title with the warm cream band used on live pages."
              />
            </div>
          </HobbitComponentShowcase>

          <HobbitComponentShowcase title="HobbitAboutHero">
            <div className="overflow-hidden rounded-lg border border-hobbit-sand">
              <HobbitAboutHero
                eyebrow="About the maker"
                title="Hi, I'm Bridget."
                titleEmphasis="I make furniture that's meant to outlive me."
                lede="A one-person shop in Burlington — every piece is built to be passed down, with joinery and finishes chosen for the long haul."
                imageCaption="Workshop portrait · preview"
              />
            </div>
          </HobbitComponentShowcase>

          <HobbitComponentShowcase title="HobbitCommissionHero">
            <div className="overflow-hidden rounded-lg border border-hobbit-sand">
              <HobbitCommissionHero
                eyebrow="Custom work"
                heading="Commission a piece"
                headingEmphasis="built around your space."
                subtext="From first sketch to delivery — transparent timeline, fixed quote before wood is cut."
                metaItems={[
                  { label: "Typical lead time", value: "8–14 wks" },
                  { label: "Consultation", value: "Free" },
                ]}
              />
            </div>
          </HobbitComponentShowcase>

          <HobbitComponentShowcase title="HobbitContactHero">
            <div className="overflow-hidden rounded-lg border border-hobbit-sand">
              <HobbitContactHero
                eyebrow="Get in touch"
                title="Drop a line,"
                titleEmphasis="or stop by the shop."
                subtext="Questions about commissions, repairs, or a slab you found — all welcome."
                status={{
                  indicator: "open",
                  statusLabel: "In the shop today",
                  heading: "Open until 5:00 PM",
                  description: "Glue-up day — drop-ins welcome if the green door is open.",
                  meta: [
                    { label: "Reply within", value: "~24 hrs" },
                    { label: "Commissions", value: "Open" },
                  ],
                }}
              />
            </div>
          </HobbitComponentShowcase>

          <HobbitComponentShowcase title="HobbitNav">
            <HobbitNav
              brand="Bridget J. Duffy"
              links={[
                { label: "Portfolio", href: "#", active: true },
                { label: "Commissions", href: "#" },
                { label: "About", href: "#" },
                { label: "Contact", href: "#" },
              ]}
              cta={{ label: "Request Commission", href: "#" }}
            />
          </HobbitComponentShowcase>

          <HobbitComponentShowcase title="HobbitTimeline">
            <HobbitTimeline
              eyebrow="How it works"
              heading="The process"
              steps={[
                {
                  number: "01",
                  title: "Consult",
                  description: "Vision, space, and budget — no commitment.",
                },
                {
                  number: "02",
                  title: "Design",
                  description: "Sketches and a fixed quote before cutting.",
                },
                {
                  number: "03",
                  title: "Build",
                  description: "Handcrafted with weekly progress photos.",
                },
                {
                  number: "04",
                  title: "Deliver",
                  description: "White-glove delivery and installation.",
                },
              ]}
            />
          </HobbitComponentShowcase>

          <HobbitComponentShowcase title="HobbitProcessSteps (horizontal + vertical)">
            <div className="grid gap-8">
              <HobbitProcessSteps
                eyebrow="How it works"
                heading="Commission a piece"
                subtext="Every commission starts with a conversation."
                steps={[
                  { number: "01", title: "Consult", description: "We discuss your vision and space." },
                  { number: "02", title: "Design", description: "Sketches before any wood is cut." },
                  { number: "03", title: "Build", description: "Handcrafted with progress updates." },
                  { number: "04", title: "Deliver", description: "Delivery and installation in your home." },
                ]}
                cta={{ label: "Start your commission", href: "#", variant: "primary" }}
              />
              <HobbitProcessSteps
                layout="vertical"
                eyebrow="Vertical layout"
                heading="Same content, stacked"
                steps={[
                  { number: "01", title: "Consult", description: "Short note for the preview." },
                  { number: "02", title: "Design", description: "Sketches and samples." },
                ]}
              />
            </div>
          </HobbitComponentShowcase>

          <HobbitComponentShowcase title="HobbitButton">
            <div className="flex flex-wrap gap-4">
              <HobbitButton variant="primary">Primary Button</HobbitButton>
              <HobbitButton href="#" variant="primary">
                Primary link
              </HobbitButton>
              <HobbitButton variant="ghost">Ghost Button</HobbitButton>
              <HobbitButton variant="outline-gold">Load More</HobbitButton>
            </div>
          </HobbitComponentShowcase>

          <HobbitComponentShowcase title="HobbitTag">
            <div className="flex flex-wrap gap-3">
              <HobbitTag>Available in shop</HobbitTag>
              <HobbitTag>Commissioned</HobbitTag>
              <HobbitTag variant="gold">Sold</HobbitTag>
              <HobbitTag>Featured</HobbitTag>
            </div>
          </HobbitComponentShowcase>

          <HobbitComponentShowcase title="HobbitPortfolioCard">
            <HobbitPortfolioCard
              title="Heirloom walnut dining table"
              spec="Black Walnut · 96″ × 42″"
              tag="Walnut"
            />
          </HobbitComponentShowcase>

          <HobbitComponentShowcase title="HobbitGalleryFilterBar">
            <div className="overflow-hidden rounded-lg border border-hobbit-sand">
              <HobbitGalleryFilterBarDemo />
            </div>
          </HobbitComponentShowcase>

          <HobbitComponentShowcase title="HobbitGalleryCard">
            <div className="grid gap-4 md:grid-cols-2">
              <HobbitGalleryCard
                category="Dining"
                title="Walnut extension table"
                spec="Black Walnut · Seats 8–10"
                tags={[{ label: "Commission" }, { label: "In progress", variant: "gold" }]}
              />
              <HobbitGalleryCard
                featured
                blockTone="sage"
                category="Featured"
                title="Cherry writing desk"
                spec="Cherry · 48″ wide"
                tags={[{ label: "Available" }]}
              />
            </div>
          </HobbitComponentShowcase>

          <HobbitComponentShowcase title="HobbitCtaStrip">
            <HobbitCtaStrip
              heading="Ready to talk through a piece?"
              subtext="No obligation — we'll reply within a day or two."
              cta={{ label: "Email the shop", href: "#" }}
            />
          </HobbitComponentShowcase>

          <HobbitComponentShowcase title="HobbitFaqGrid">
            <div className="overflow-hidden rounded-lg border border-hobbit-sand">
              <HobbitFaqGrid eyebrow="FAQ" heading="Common questions" items={previewFaqItems} />
            </div>
          </HobbitComponentShowcase>

          <HobbitComponentShowcase title="HobbitFaqAccordion">
            <div className="overflow-hidden rounded-lg border border-hobbit-sand">
              <HobbitFaqAccordion
                eyebrow="FAQ"
                heading="Accordion variant"
                defaultOpen={0}
                items={[
                  { question: "How does pricing work?", answer: "Every piece is quoted individually before build." },
                  { question: "Can I visit the shop?", answer: "Yes — message ahead so the right pieces are out." },
                ]}
              />
            </div>
          </HobbitComponentShowcase>

          <HobbitComponentShowcase title="HobbitCommissionProcess">
            <div className="overflow-hidden rounded-lg border border-hobbit-sand">
              <HobbitCommissionProcess
                eyebrow="Behind the quote"
                heading="What happens after you reach out"
                intro="A simple four-phase path from first email to delivery."
                steps={[
                  {
                    number: "1",
                    title: "Consultation",
                    time: "Week 1 · Free",
                    description: "Call or visit — scope, references, and ballpark range.",
                  },
                  {
                    number: "2",
                    title: "Design deposit",
                    time: "Week 2–3 · $200",
                    description: "Measured drawings and wood samples before you commit.",
                  },
                  {
                    number: "3",
                    title: "Build",
                    time: "Week 4–12 · 50% deposit",
                    description: "Weekly photos from the bench until finish.",
                  },
                  {
                    number: "4",
                    title: "Delivery",
                    time: "Final week · Balance due",
                    description: "White-glove install where needed.",
                  },
                ]}
              />
            </div>
          </HobbitComponentShowcase>

          <HobbitComponentShowcase title="HobbitPricingGrid">
            <div className="overflow-hidden rounded-lg border border-hobbit-sand">
              <HobbitPricingGrid
                eyebrow="Ballpark ranges"
                heading="What commissions tend to cost"
                intro="Final quotes depend on materials and complexity — these are typical ranges."
                cards={[
                  {
                    category: "Small pieces",
                    name: "Cutting boards, boxes, stools",
                    range: "$300 – $900",
                    leadTime: "4–8 weeks",
                  },
                  {
                    category: "Tables",
                    name: "Dining and desk tables",
                    range: "$1,800 – $4,500",
                    leadTime: "10–14 weeks",
                  },
                  {
                    category: "Storage",
                    name: "Sideboards, dressers",
                    range: "$2,200 – $5,800",
                    leadTime: "12–16 weeks",
                  },
                ]}
              />
            </div>
          </HobbitComponentShowcase>

          <HobbitComponentShowcase title="HobbitMakerStory">
            <div className="overflow-hidden rounded-lg border border-hobbit-sand">
              <HobbitMakerStory
                eyebrow="Preview"
                heading="Maker story (short)"
                paragraphs={[
                  "I grew up around pieces my grandfather built — dovetails, oil finishes, tables that outlived three house moves.",
                  "Today I run a one-person shop and sign every piece that leaves the bench.",
                ]}
                stats={[
                  { value: "2009", label: "Started", description: "First sold piece: a maple board." },
                  { value: "217+", label: "Shipped", description: "Tables to sideboards." },
                ]}
              />
            </div>
          </HobbitComponentShowcase>

          <HobbitComponentShowcase title="HobbitWorkshopGallery">
            <div className="overflow-hidden rounded-lg border border-hobbit-sand">
              <HobbitWorkshopGallery
                eyebrow="Inside the shop"
                heading="Bento gallery"
                intro="A few placeholder tiles to show the bento layout."
                tiles={[
                  { caption: "Bench room", tall: true, className: "bg-gradient-to-br from-[#B8822C] to-[#D4A848]" },
                  { caption: "Walnut stickered", className: "bg-gradient-to-br from-[#8AAE7A] to-[#6B8E4E]" },
                  { caption: "Hand planes", className: "bg-gradient-to-br from-[#C8963C] to-[#A67A28]" },
                  { caption: "Mortising", className: "bg-gradient-to-br from-[#D4B870] to-[#C8A060]" },
                ]}
              />
            </div>
          </HobbitComponentShowcase>

          <HobbitComponentShowcase title="HobbitPhilosophyGrid">
            <div className="overflow-hidden rounded-lg border border-hobbit-sand">
              <HobbitPhilosophyGrid
                eyebrow="Values"
                heading="How we work"
                intro="Three principles that guide every build."
                principles={[
                  {
                    number: "01",
                    heading: "Solid wood, real joinery.",
                    description: "No shortcuts on structure — pieces are meant to be serviced in fifty years.",
                  },
                  {
                    number: "02",
                    heading: "The wood gets a vote.",
                    description: "Grain and figure drive the layout, not the other way around.",
                  },
                  {
                    number: "03",
                    heading: "Nothing ships half-finished.",
                    description: "If it is not right, it does not leave the shop.",
                  },
                ]}
              />
            </div>
          </HobbitComponentShowcase>

          <HobbitComponentShowcase title="HobbitMaterialsGrid">
            <div className="overflow-hidden rounded-lg border border-hobbit-sand">
              <HobbitMaterialsGrid
                eyebrow="Materials"
                heading="Species preview"
                intro="Local and FSC hardwoods where possible."
                materials={[
                  { name: "Black Walnut", spec: "FSC · VT", swatchColor: "#5A3A18" },
                  { name: "White Oak", spec: "FSC · NY", swatchColor: "#C8A060" },
                  { name: "Cherry", spec: "FSC · VT", swatchColor: "#A67A28" },
                ]}
              />
            </div>
          </HobbitComponentShowcase>

          <HobbitComponentShowcase title="HobbitBioTimeline">
            <div className="overflow-hidden rounded-lg border border-hobbit-sand">
              <HobbitBioTimeline
                eyebrow="Timeline"
                heading="Milestones"
                entries={[
                  { year: "2009", title: "First sale", description: "Maple cutting board.", major: true },
                  { year: "2014", title: "Carriage house", description: "Moved the shop to Burlington.", major: true },
                  { year: "2024", title: "Apprentice joins", description: "Two days a week on the bench." },
                ]}
              />
            </div>
          </HobbitComponentShowcase>

          <HobbitComponentShowcase title="HobbitPressStrip">
            <div className="overflow-hidden rounded-lg border border-hobbit-sand">
              <HobbitPressStrip
                eyebrow="Mentioned in"
                items={[
                  { name: "Fine Woodworking" },
                  { name: "Vermont Magazine", bold: true },
                  { name: "Seven Days", bold: true },
                ]}
              />
            </div>
          </HobbitComponentShowcase>

          <HobbitComponentShowcase title="HobbitTestimonial (grid + featured)">
            <div className="grid gap-8">
              <HobbitTestimonial
                eyebrow="What clients say"
                heading="Testimonials"
                variant="grid"
                items={[
                  {
                    quote: "The dining table exceeded every expectation.",
                    author: "Sarah M.",
                    project: "Custom walnut dining table",
                  },
                  {
                    quote: "Nothing comes close to the quality or care.",
                    author: "James & Lori T.",
                    project: "White oak sideboard",
                  },
                  {
                    quote: "The process was seamless from first sketch to delivery.",
                    author: "Rachel K.",
                    project: "Cherry writing desk",
                  },
                ]}
              />
              <HobbitTestimonial
                variant="featured"
                eyebrow="Featured"
                heading="Single spotlight"
                items={[
                  {
                    quote: "Bridget made the piece we did not know we needed until we sat at it.",
                    author: "Elena R.",
                    project: "Extension table · walnut",
                  },
                ]}
              />
            </div>
          </HobbitComponentShowcase>

          <HobbitComponentShowcase title="HobbitTestimonialStrip">
            <div className="overflow-hidden rounded-lg border border-hobbit-sand">
              <HobbitTestimonialStrip
                items={[
                  { quote: "Clear process from day one.", author: "Sarah M.", project: "Dining table" },
                  { quote: "Weekly photos made it fun.", author: "James T.", project: "Sideboard" },
                  { quote: "Feels like heirloom work.", author: "Rachel K.", project: "Desk" },
                ]}
              />
            </div>
          </HobbitComponentShowcase>

          <HobbitComponentShowcase title="HobbitPullQuote">
            <div className="overflow-hidden rounded-lg border border-hobbit-sand">
              <HobbitPullQuote
                eyebrow="Client voice"
                quote="The grain match across the leaves is something only a human eye would chase."
                author="Michael P."
                project="Extension dining table · 2025"
              />
            </div>
          </HobbitComponentShowcase>

          <HobbitComponentShowcase title="HobbitSocialCta">
            <div className="overflow-hidden rounded-lg border border-hobbit-sand">
              <HobbitSocialCta
                eyebrow="Stay in touch"
                heading="See new work first"
                headingEmphasis="on Instagram & the newsletter."
                subtext="No spam — occasional drops and shop notes."
                socials={[{ label: "@bridgetjduffy" }, { label: "Quarterly newsletter" }]}
                primaryCta={{ label: "Follow along", href: "#" }}
                secondaryCta={{ label: "Commission info", href: "#" }}
              />
            </div>
          </HobbitComponentShowcase>

          <HobbitComponentShowcase title="HobbitSocialFollow">
            <div className="overflow-hidden rounded-lg border border-hobbit-sand">
              <HobbitSocialFollow
                eyebrow="Elsewhere"
                heading="Follow along"
                intro="Process shots and finished pieces."
                cards={[
                  {
                    platform: "Instagram",
                    handle: "@bridgetjduffy",
                    description: "Shop life and grain photos.",
                    href: "#",
                  },
                  {
                    platform: "Newsletter",
                    handle: "~4 / year",
                    description: "New drops first.",
                  },
                  {
                    platform: "Pinterest",
                    handle: "/bridgetjduffy",
                    description: "Reference boards.",
                    href: "#",
                  },
                ]}
              />
            </div>
          </HobbitComponentShowcase>

          <HobbitComponentShowcase title="HobbitContactMap">
            <div className="overflow-hidden rounded-lg border border-hobbit-sand">
              <HobbitContactMap
                eyebrow="Find the shop"
                heading="Map & directions"
                intro="Behind the main house — look for the green door."
                workshopName="Bridget J. Duffy — Workshop"
                address="214 Maple Ridge Lane · Burlington, VT"
                mapsHref="https://maps.google.com/?q=Burlington,VT"
                tiles={[
                  {
                    icon: "↳ Driving",
                    heading: "From downtown",
                    description: "North on Battery, right on North Ave — about fifteen minutes.",
                  },
                  {
                    icon: "↳ Visiting",
                    heading: "Before you come",
                    description: "Message ahead if you want specific pieces pulled out.",
                  },
                ]}
              />
            </div>
          </HobbitComponentShowcase>

          <HobbitComponentShowcase title="HobbitFormStepper">
            <HobbitFormStepper
              steps={[{ label: "Project" }, { label: "Details" }, { label: "Budget" }, { label: "Contact" }]}
              currentStep={2}
            />
          </HobbitComponentShowcase>

          <HobbitComponentShowcase title="HobbitTileSelector">
            <HobbitTileSelectorDemo />
          </HobbitComponentShowcase>

          <HobbitComponentShowcase title="HobbitReassureStrip">
            <div className="rounded-lg border border-hobbit-sand bg-hobbit-cream-warm p-4">
              <p className="mb-2 font-hobbit-ui text-[10px] uppercase tracking-[0.14em] text-hobbit-gold-dark">
                Below a form (context strip)
              </p>
              <HobbitReassureStrip
                items={[
                  { title: "No spam", description: "We only email about your project and shop updates you opt into." },
                  { title: "Reply in a day or two", description: "Every message is read by the maker." },
                  { title: "No obligation", description: "Consultation and sketches are free before you commit." },
                ]}
              />
            </div>
          </HobbitComponentShowcase>

          <HobbitComponentShowcase title="HobbitCommissionForm">
            <div className="overflow-hidden rounded-lg border border-hobbit-sand">
              <HobbitCommissionForm />
            </div>
          </HobbitComponentShowcase>

          <HobbitComponentShowcase title="HobbitFooter">
            <HobbitFooter
              brand="Bridget J. Duffy"
              tagline="Handmade with love since 2009"
              links={[
                { label: "Portfolio", href: "#", active: true },
                { label: "Commissions", href: "#" },
                { label: "About", href: "#" },
                { label: "Contact", href: "#" },
              ]}
              copyright="© 2026 Bridget J. Duffy"
            />
          </HobbitComponentShowcase>
        </HobbitSection>

        <HobbitSection title="Spacing Scale" eyebrow="Layout">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <HobbitSpacingDemo size="4px" label="XS" />
            <HobbitSpacingDemo size="8px" label="MD" />
            <HobbitSpacingDemo size="12px" label="XL" />
            <HobbitSpacingDemo size="16px" label="3XL" />
            <HobbitSpacingDemo size="20px" label="4XL" />
            <HobbitSpacingDemo size="28px" label="5XL" />
            <HobbitSpacingDemo size="36px" label="6XL" />
            <HobbitSpacingDemo size="40px" label="7XL" />
          </div>
        </HobbitSection>

        <HobbitSection title="Design Principles" eyebrow="Guidelines">
          <div className="grid gap-6 md:grid-cols-2">
            <HobbitPrinciple
              title="Visual Hierarchy"
              points={[
                "Display serif for primary headings and branding",
                "Body serif for readable content",
                "Monospace for all UI chrome and labels",
                "Color as signal: Gold for actions, green for brand",
              ]}
            />
            <HobbitPrinciple
              title="Texture &amp; Materiality"
              points={[
                "Warm, earthy tones evoke natural wood",
                "Subtle borders suggest craftsmanship",
                "Rounded corners feel approachable",
                "Typography mix creates vintage-modern balance",
              ]}
            />
            <HobbitPrinciple
              title="Information Density"
              points={[
                "Generous whitespace around content",
                "Compact UI elements (mono 10-11px)",
                "Large images with 4:3 or 16:9 ratios",
                "Keep chrome minimal to showcase work",
              ]}
            />
            <HobbitPrinciple
              title="Accessibility"
              points={[
                "Minimum 4.5:1 contrast ratio",
                "Hover AND focus states for all interactive",
                "Semantic HTML and ARIA labels",
                "Support keyboard navigation",
              ]}
            />
          </div>
        </HobbitSection>
      </HobbitPageContainer>
    </HobbitPageShell>
  );
}
