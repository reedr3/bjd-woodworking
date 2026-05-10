import {
  HobbitBanner,
  HobbitButton,
  HobbitColorGroup,
  HobbitColorSwatch,
  HobbitComponentShowcase,
  HobbitFooter,
  HobbitHero,
  HobbitNav,
  HobbitPageContainer,
  HobbitPageShell,
  HobbitPrinciple,
  HobbitProcessSteps,
  HobbitSection,
  HobbitSpacingDemo,
  HobbitSubsectionTitle,
  HobbitTag,
  HobbitTestimonial,
  HobbitTypeScale,
  HobbitTypeSpecimen,
  HobbitPortfolioCard,
} from "@/hobbit-library/components";

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
            <HobbitColorSwatch name="Sand" hex="#D8CEAA" description="Borders, dividers" />
          </HobbitColorGroup>

          <HobbitColorGroup title="Primary — Forest Green">
            <HobbitColorSwatch name="Forest Dark" hex="#4A6A34" description="Footer, labels, panels" />
            <HobbitColorSwatch name="Forest Base" hex="#6B8E4E" description="Navigation" />
            <HobbitColorSwatch name="Forest Light" hex="#8AAE7A" description="Accents, tags" />
            <HobbitColorSwatch name="Forest Pale" hex="#C8E0B0" description="Secondary nav" />
            <HobbitColorSwatch name="Forest Soft" hex="#A8C898" description="Footer links" />
          </HobbitColorGroup>

          <HobbitColorGroup title="Accent — Golden Hour">
            <HobbitColorSwatch name="Gold Base" hex="#C8963C" description="CTAs, active states" />
            <HobbitColorSwatch name="Gold Dark" hex="#A67A28" description="Category labels" />
            <HobbitColorSwatch name="Gold Light" hex="#C8A860" description="Descriptions" />
            <HobbitColorSwatch name="Gold Rich" hex="#D4A848" description="Decorative" />
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

        <HobbitSection title="Components" eyebrow="UI Patterns">
          <HobbitComponentShowcase title="Navigation Bar">
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

          <HobbitComponentShowcase title="Buttons">
            <div className="flex flex-wrap gap-4">
              <HobbitButton variant="primary">Primary Button</HobbitButton>
              <HobbitButton href="#" variant="primary">
                Primary link
              </HobbitButton>
              <HobbitButton variant="ghost">Ghost Button</HobbitButton>
              <HobbitButton variant="outline-gold">Load More</HobbitButton>
            </div>
          </HobbitComponentShowcase>

          <HobbitComponentShowcase title="Tags &amp; Labels">
            <div className="flex flex-wrap gap-3">
              <HobbitTag>Available in shop</HobbitTag>
              <HobbitTag>Commissioned</HobbitTag>
              <HobbitTag variant="gold">Sold</HobbitTag>
              <HobbitTag>Featured</HobbitTag>
            </div>
          </HobbitComponentShowcase>

          <HobbitComponentShowcase title="Portfolio Card">
            <HobbitPortfolioCard
              title="Heirloom walnut dining table"
              spec="Black Walnut · 96″ × 42″"
              tag="Walnut"
            />
          </HobbitComponentShowcase>

          <HobbitComponentShowcase title="Process steps">
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
          </HobbitComponentShowcase>

          <HobbitComponentShowcase title="Testimonials (grid)">
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
          </HobbitComponentShowcase>

          <HobbitComponentShowcase title="Footer">
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
