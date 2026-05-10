import {
  HobbitContactHero,
  HobbitContactMap,
  HobbitFooter,
  HobbitNav,
  HobbitPageContainer,
  HobbitPageShell,
  HobbitSocialFollow,
} from "@/hobbit-library/components";
import { ContactForm } from "./ContactForm";

const NAV_LINKS = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Commissions", href: "/commissions" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact", active: true },
];

export default function ContactPage() {
  return (
    <HobbitPageShell>
      <HobbitNav
        brand="Bridget J. Duffy"
        links={NAV_LINKS}
        cta={{ label: "Request Commission", href: "/commissions" }}
      />

      <HobbitContactHero
        eyebrow="Get in touch · Burlington, VT"
        title="Drop a line,"
        titleEmphasis="or stop by the shop."
        subtext="Questions about a piece, a commission, a repair, or a slab of walnut you've got in your barn — all welcome here. I read every message myself, usually within a day or two."
        status={{
          indicator: "open",
          statusLabel: "In the shop today",
          heading: "Open until 5:00 PM",
          description:
            "Glue-up day for a cherry desk — drop-ins welcome, but I might be elbow-deep in clamps.",
          meta: [
            { label: "Reply within", value: "~24 hrs" },
            { label: "Commissions", value: "Open · Mar 26" },
          ],
        }}
      />

      {/* Form + sidebar */}
      <section className="bg-hobbit-cream-light py-9">
        <HobbitPageContainer>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_1fr]">
            <ContactForm />

            {/* Sidebar */}
            <div className="space-y-3">
              {/* Direct lines */}
              <div className="rounded-[10px] border border-hobbit-sand bg-hobbit-paper px-5 py-4">
                <p className="mb-2 font-hobbit-ui text-[10px] uppercase tracking-[0.14em] text-hobbit-gold-dark">
                  Direct lines
                </p>
                <div className="mb-3 h-[1.5px] w-6 rounded-[1px] bg-hobbit-gold-base" />

                {(
                  [
                    {
                      icon: "@",
                      heading: "Email",
                      value: "hello@bridgetjduffy.com",
                      meta: "Best for anything detailed.",
                    },
                    {
                      icon: "☎",
                      heading: "Phone",
                      value: "(802) 555 – 0148",
                      meta: "Shop hours only · text OK.",
                    },
                    {
                      icon: "⌂",
                      heading: "The carriage house",
                      value: "214 Maple Ridge Lane\nBurlington, VT 05401",
                      meta: "Around the back, look for the green door.",
                    },
                  ] as const
                ).map((line) => (
                  <div key={line.heading} className="mb-2.5 flex gap-2.5 last:mb-0">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border border-hobbit-gold-base/30 bg-hobbit-gold-base/15 font-hobbit-ui text-[11px] font-bold text-hobbit-gold-dark">
                      {line.icon}
                    </span>
                    <div>
                      <p className="mb-px font-hobbit-display text-[13px] font-bold text-hobbit-wood-darkest">
                        {line.heading}
                      </p>
                      <p className="whitespace-pre-line font-hobbit-ui text-[11.5px] leading-[1.5] text-hobbit-wood-medium">
                        {line.value}
                      </p>
                      <p className="mt-0.5 font-hobbit-body text-[11px] leading-[1.5] text-hobbit-wood-light">
                        {line.meta}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Shop hours */}
              <div className="rounded-[10px] border border-hobbit-sand bg-hobbit-paper px-5 py-4">
                <p className="mb-2 font-hobbit-ui text-[10px] uppercase tracking-[0.14em] text-hobbit-gold-dark">
                  Shop hours
                </p>
                <div className="mb-3 h-[1.5px] w-6 rounded-[1px] bg-hobbit-gold-base" />

                <div>
                  {(
                    [
                      { day: "Mon", hours: "By appointment", today: false },
                      { day: "Tue", hours: "9:00 — 5:00", today: false },
                      { day: "Wed", hours: "9:00 — 5:00", today: true },
                      { day: "Thu", hours: "9:00 — 5:00", today: false },
                      { day: "Fri", hours: "9:00 — 4:00", today: false },
                      { day: "Sat", hours: "10:00 — 2:00", today: false },
                      { day: "Sun", hours: "Closed", today: false },
                    ] as const
                  ).map((row) => (
                    <div
                      key={row.day}
                      className={`flex justify-between border-b border-hobbit-sand px-2 py-1.5 last:border-b-0 ${row.today ? "-mx-2 rounded bg-hobbit-forest-light/15 font-bold text-hobbit-forest-base" : ""}`}
                    >
                      <span className="font-hobbit-ui text-[11px] uppercase tracking-[0.06em]">
                        {row.day}
                        {row.today && " · today"}
                      </span>
                      <span className="font-hobbit-ui text-[11px]">{row.hours}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-2.5 border-t border-hobbit-sand pt-2.5 font-hobbit-body text-[11px] italic leading-[1.55] text-hobbit-wood-light">
                  Saturdays in spring &amp; summer often run later — I'll usually be in the shop if
                  the green door is open.
                </p>
              </div>
            </div>
          </div>
        </HobbitPageContainer>
      </section>

      <HobbitContactMap
        eyebrow="Find the shop"
        heading="Map & directions"
        intro="Tucked behind the main house on Maple Ridge Lane — fifteen minutes from downtown Burlington, ten from the airport. There's a sign on the gate."
        workshopName="Bridget J. Duffy — Workshop"
        address="214 Maple Ridge Lane · Burlington, VT"
        mapsHref="https://maps.google.com/?q=Burlington,VT"
        tiles={[
          {
            icon: "↳ Driving",
            heading: "From downtown Burlington",
            description:
              "North on Battery, right onto North Ave for 3.2 miles, left at the Maple Ridge sign. ~15 min.",
          },
          {
            icon: "↳ Visiting",
            heading: "A note before you come",
            description:
              "If you'd like to see specific work in person, message ahead so I can have it pulled out — most pieces ship as soon as they're done.",
          },
        ]}
      />

      <HobbitSocialFollow
        eyebrow="Elsewhere"
        heading="Follow along"
        intro="Process shots, work-in-progress photos, and the occasional video of a hand plane doing what it does best."
        cards={[
          {
            platform: "Instagram",
            handle: "@bridgetjduffy",
            description: "Daily-ish · finished pieces, shop life, the occasional dog.",
            href: "https://instagram.com/bridgetjduffy",
          },
          {
            platform: "Newsletter",
            handle: "~4 issues / year",
            description:
              "New shop drops first, plus a few notes from the bench. Never spam.",
          },
          {
            platform: "Pinterest",
            handle: "/bridgetjduffy",
            description: "Reference boards · grain, joinery, and rooms I'd build for.",
            href: "https://pinterest.com/bridgetjduffy",
          },
        ]}
      />

      <HobbitFooter
        brand="Bridget J. Duffy"
        links={[
          { label: "Portfolio", href: "/portfolio" },
          { label: "Commissions", href: "/commissions" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact", active: true },
        ]}
        copyright="© 2026 Bridget J. Duffy"
      />
    </HobbitPageShell>
  );
}
