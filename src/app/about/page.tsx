import {
  HobbitAboutHero,
  HobbitBioTimeline,
  HobbitFooter,
  HobbitMakerStory,
  HobbitMaterialsGrid,
  HobbitNav,
  HobbitPageShell,
  HobbitPhilosophyGrid,
  HobbitPressStrip,
  HobbitSocialCta,
  HobbitWorkshopGallery,
} from "@/hobbit-library/components";

export default function AboutPage() {
  return (
    <HobbitPageShell>
      <HobbitNav
        brand="Bridget J. Duffy"
        links={[
          { label: "Portfolio", href: "/portfolio" },
          { label: "Shop", href: "/shop" },
          { label: "Commissions", href: "/commissions" },
          { label: "About", href: "/about", active: true },
          { label: "Contact", href: "/contact" },
        ]}
        cta={{ label: "Request Commission", href: "/commissions" }}
      />

      <HobbitAboutHero
        eyebrow="About the maker · Burlington, VT"
        title="Hi, I'm Bridget."
        titleEmphasis="I make furniture that's meant to outlive me."
        lede="Sixteen years ago I left a desk job, bought a used jointer, and started learning to work with wood. Today I run a one-person shop from a converted carriage house in Burlington — and every piece that leaves it is built to be passed down."
        imageCaption="Bridget in the workshop · spring 2024"
      />

      <HobbitMakerStory
        eyebrow="My story"
        heading="How I got here"
        paragraphs={[
          "I grew up in a house full of furniture my grandfather built. A walnut dresser with hand-cut dovetails. A kitchen table whose top had been re-finished so many times the grain showed through like a topographic map. Pieces that were already older than me, and would still be standing long after.",
          <>
            After college I took a job in publishing, spent six years at a desk in Boston, and
            slowly came around to the fact that the work I cared about wasn{"'"}t on a screen.{" "}
            <strong>I wanted to make something my hands could finish.</strong>
          </>,
          "The first piece I ever sold was a maple cutting board — clumsy edges, finish too thick, a knot I should have planned around. The buyer was a friend's mother, and she still uses it. That's when I knew I'd keep going.",
          <>
            Sixteen years on, the work has changed shape — bigger pieces, harder joinery, longer
            waiting lists — but the why hasn{"'"}t moved.{" "}
            <strong>Every piece is for the person who{"'"}ll have it twenty years from now.</strong>
          </>,
        ]}
        stats={[
          {
            value: "2009",
            label: "Year started",
            description: "First commission: a maple cutting board, sold to a friend's mother.",
          },
          {
            value: "217",
            label: "Pieces shipped",
            description: "From single boards to full dining sets — every one signed and dated.",
          },
          {
            value: "100%",
            label: "FSC-certified hardwoods",
            description: "Sourced within 200 miles of the workshop wherever possible.",
          },
        ]}
      />

      <HobbitWorkshopGallery
        eyebrow="Inside the shop"
        heading="The carriage house"
        intro="A 1,200-square-foot timber-framed shop on the north end of Burlington — south-facing windows, a wood stove, and roughly the right amount of sawdust at any given time."
        tiles={[
          {
            caption: "Bench room · morning light",
            tall: true,
            className: "bg-gradient-to-br from-[#B8822C] to-[#D4A848]",
          },
          {
            caption: "Walnut, milled & stickered",
            className: "bg-gradient-to-br from-[#8AAE7A] to-[#6B8E4E]",
          },
          {
            caption: "Hand planes",
            className: "bg-gradient-to-br from-[#C8963C] to-[#A67A28]",
          },
          {
            caption: "Mortising",
            className: "bg-gradient-to-br from-[#D4B870] to-[#C8A060]",
          },
          {
            caption: "Finish room",
            className: "bg-gradient-to-br from-[#6B8E4E] to-[#4A6A34]",
          },
        ]}
      />

      <HobbitPhilosophyGrid
        eyebrow="What I believe"
        heading="A few things I hold to"
        intro="Not rules so much as a working philosophy — how I decide what to build, what to charge, and what to turn down."
        principles={[
          {
            number: "01",
            heading: "Build it to outlive you.",
            description:
              "Solid wood, real joinery, finishes that can be re-applied a generation from now. No MDF, no biscuits where dovetails belong.",
          },
          {
            number: "02",
            heading: "The wood gets a vote.",
            description:
              "A board's grain, knots, and figure decide where it goes. I plan around what the tree gave, not the other way around.",
          },
          {
            number: "03",
            heading: "No piece leaves unfinished.",
            description:
              "If something isn't right, it doesn't ship. If it does ship and isn't right, I'll come fix it. Lifetime guarantee, as long as I'm the one running the saw.",
          },
        ]}
      />

      <HobbitMaterialsGrid
        eyebrow="Materials"
        heading="Wood I work with"
        intro="Sourced from small mills in Vermont, New Hampshire, and upstate New York. If you'd like a wood that isn't on this list, ask — I can usually find it."
        materials={[
          { name: "Black Walnut", spec: "FSC · VT, NH", swatchColor: "#5A3A18" },
          { name: "White Oak", spec: "FSC · VT, NY", swatchColor: "#C8A060" },
          { name: "Cherry", spec: "FSC · VT", swatchColor: "#A67A28" },
          { name: "Hard Maple", spec: "FSC · VT, NH", swatchColor: "#E8D8A8" },
          { name: "Ash", spec: "Salvaged · VT", swatchColor: "#D4B870" },
        ]}
      />

      <HobbitBioTimeline
        eyebrow="A short timeline"
        heading="Sixteen years, in brief"
        entries={[
          {
            year: "2009",
            title: "First piece sold",
            description: "A maple cutting board. Friends & family list of about twelve.",
            major: true,
          },
          {
            year: "2011",
            title: "First commission · cherry coffee table",
            description: "Earned enough to buy the bandsaw I still use.",
          },
          {
            year: "2014",
            title: "Moved into the carriage house",
            description: "Burlington, VT. 1,200 sq ft, south-facing, a wood stove.",
            major: true,
          },
          {
            year: "2017",
            title: (
              <>
                Featured in <em>Fine Woodworking</em>
              </>
            ),
            description:
              "A profile on small-shop joinery. Booked through the year by the time it ran.",
          },
          {
            year: "2021",
            title: "100th piece shipped",
            description: "A walnut sideboard for a family in Stowe.",
            major: true,
          },
          {
            year: "2024",
            title: "First apprentice · Maeve",
            description: "In the shop two days a week, building her own first commission.",
          },
        ]}
      />

      <HobbitPressStrip
        eyebrow="Mentioned in"
        items={[
          { name: "Fine Woodworking" },
          { name: "Vermont Magazine", bold: true },
          { name: "Dwell" },
          { name: "Seven Days", bold: true },
          { name: "Remodelista" },
        ]}
      />

      <HobbitSocialCta
        eyebrow="Stay in touch"
        heading="Have a project in mind, or"
        headingEmphasis="just want to say hi?"
        subtext="Commissions are open through next spring. New shop pieces drop monthly. The newsletter goes out roughly four times a year — never more."
        socials={[
          { label: "Instagram · @bridgetjduffy" },
          { label: "Newsletter · ~4 / yr" },
          { label: "hello@bridgetjduffy.com" },
        ]}
        primaryCta={{ label: "Request a commission", href: "/commissions" }}
        secondaryCta={{ label: "Visit the shop", href: "/shop" }}
      />

      <HobbitFooter
        brand="Bridget J. Duffy"
        links={[
          { label: "Portfolio", href: "/portfolio" },
          { label: "Shop", href: "/shop" },
          { label: "Commissions", href: "/commissions" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ]}
        copyright="© 2025 Bridget J. Duffy"
      />
    </HobbitPageShell>
  );
}
