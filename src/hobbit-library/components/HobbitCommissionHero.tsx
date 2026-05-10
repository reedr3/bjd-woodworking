import { cn } from "@/hobbit-library/utils/utils";
import { HobbitPageContainer } from "./HobbitPageContainer";

export const meta = {
  name: "HobbitCommissionHero",
  description:
    "Two-column commission page hero with eyebrow, h1 with optional italic emphasis, subtext, meta-stat badges, and a warm image-placeholder panel.",
};

export type HobbitCommissionHeroMeta = {
  label: string;
  value: string;
};

export type HobbitCommissionHeroProps = {
  eyebrow?: string;
  /** Plain heading text shown before the emphasis. */
  heading: string;
  /** Italic gold text appended after heading (optional). */
  headingEmphasis?: string;
  subtext: string;
  metaItems?: HobbitCommissionHeroMeta[];
  /** Alt text for the image placeholder area. */
  imageLabel?: string;
  className?: string;
};

export function HobbitCommissionHero({
  eyebrow,
  heading,
  headingEmphasis,
  subtext,
  metaItems,
  imageLabel = "Workshop photo",
  className,
}: HobbitCommissionHeroProps) {
  return (
    <section
      className={cn(
        "border-b border-hobbit-sand bg-hobbit-cream-warm",
        className,
      )}
    >
      {/* Full-bleed grid — container only constrains the left col */}
      <div className="mx-auto grid max-w-hobbit-page grid-cols-1 md:grid-cols-[1fr_0.85fr]">
        {/* Left — text */}
        <div className="px-hobbit-page py-10 md:py-12">
          {eyebrow && (
            <p className="mb-2.5 font-hobbit-ui text-[10px] uppercase tracking-[0.2em] text-hobbit-gold-dark">
              {eyebrow}
            </p>
          )}
          <h1 className="mb-3 font-hobbit-display text-[28px] font-bold leading-[1.2] text-hobbit-wood-darkest md:text-[30px]">
            {heading}
            {headingEmphasis && (
              <>
                {" "}
                <em className="font-normal not-italic text-hobbit-gold-dark italic">
                  {headingEmphasis}
                </em>
              </>
            )}
          </h1>
          <p className="mb-5 max-w-[360px] font-hobbit-body text-[13px] leading-[1.75] text-hobbit-wood-medium">
            {subtext}
          </p>
          {metaItems && metaItems.length > 0 && (
            <div className="flex flex-wrap gap-6">
              {metaItems.map((item) => (
                <div key={item.label} className="flex flex-col gap-0.5">
                  <span className="font-hobbit-ui text-[10px] uppercase tracking-[0.1em] text-hobbit-gold-dark">
                    {item.label}
                  </span>
                  <span className="font-hobbit-display text-[14px] font-bold text-hobbit-wood-darkest">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right — image placeholder */}
        <div className="relative hidden overflow-hidden bg-hobbit-gold-thumb md:block">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 280 280"
            preserveAspectRatio="xMidYMid slice"
            aria-label={imageLabel}
            role="img"
          >
            <rect width="280" height="280" fill="#B8822C" />
            <ellipse cx="140" cy="80" rx="110" ry="90" fill="#D4A848" opacity="0.4" />
            <rect x="60" y="160" width="160" height="14" rx="2" fill="#7A5418" opacity="0.55" />
            <rect x="78" y="174" width="124" height="80" rx="2" fill="#5A4018" opacity="0.45" />
            <rect x="84" y="180" width="6" height="68" fill="#3A2818" opacity="0.6" />
            <rect x="190" y="180" width="6" height="68" fill="#3A2818" opacity="0.6" />
            <line x1="60" y1="166" x2="220" y2="166" stroke="#FAF5EA" strokeWidth="1" opacity="0.4" />
            <text
              x="140"
              y="262"
              textAnchor="middle"
              fontSize="10"
              fill="#FAF5EA"
              opacity="0.55"
              fontFamily="Georgia,serif"
            >
              [ {imageLabel} ]
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
