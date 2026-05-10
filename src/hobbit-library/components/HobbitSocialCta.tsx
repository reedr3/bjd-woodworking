import { cn } from "@/hobbit-library/utils/utils";
import { HobbitPageContainer } from "./HobbitPageContainer";

export const meta = {
  name: "HobbitSocialCta",
  description:
    "Dark-background CTA section with heading, optional italic emphasis, subtext, social pills, and up to two action buttons.",
};

export type HobbitSocialPill = {
  label: string;
};

export type HobbitSocialCtaProps = {
  eyebrow?: string;
  heading: string;
  headingEmphasis?: string;
  subtext?: string;
  socials?: HobbitSocialPill[];
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  className?: string;
};

export function HobbitSocialCta({
  eyebrow,
  heading,
  headingEmphasis,
  subtext,
  socials,
  primaryCta,
  secondaryCta,
  className,
}: HobbitSocialCtaProps) {
  return (
    <section className={cn("bg-hobbit-wood-darkest py-9", className)}>
      <HobbitPageContainer>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            {eyebrow && (
              <p className="mb-2 font-hobbit-ui text-[10px] uppercase tracking-[0.18em] text-hobbit-gold-base">
                {eyebrow}
              </p>
            )}
            <h2 className="mb-1.5 font-hobbit-display text-[22px] font-bold leading-[1.25] text-hobbit-cream-light">
              {heading}
              {headingEmphasis && (
                <>
                  {" "}
                  <em className="font-normal italic text-hobbit-gold-base">{headingEmphasis}</em>
                </>
              )}
            </h2>
            {subtext && (
              <p className="mb-4 max-w-[420px] font-hobbit-body text-[13px] leading-[1.6] text-hobbit-forest-pale">
                {subtext}
              </p>
            )}
            {socials && socials.length > 0 && (
              <div className="flex flex-wrap gap-2.5">
                {socials.map((s) => (
                  <span
                    key={s.label}
                    className="inline-flex items-center gap-2 rounded-full border border-hobbit-sand bg-[#F5EED8] px-3.5 py-1.5 font-hobbit-ui text-[11px] tracking-[0.04em] text-hobbit-wood-darkest"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-hobbit-gold-base" aria-hidden />
                    {s.label}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="flex shrink-0 flex-col gap-2.5 sm:flex-row">
            <a
              href={primaryCta.href}
              className="whitespace-nowrap rounded bg-hobbit-gold-base px-5 py-2.5 text-center font-hobbit-ui text-[11px] uppercase tracking-[0.05em] text-hobbit-cream-light transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hobbit-gold-base focus-visible:ring-offset-2 focus-visible:ring-offset-hobbit-wood-darkest"
            >
              {primaryCta.label}
            </a>
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="whitespace-nowrap rounded border border-hobbit-forest-light px-5 py-2.5 text-center font-hobbit-ui text-[11px] uppercase tracking-[0.05em] text-hobbit-forest-pale transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hobbit-forest-light focus-visible:ring-offset-2 focus-visible:ring-offset-hobbit-wood-darkest"
              >
                {secondaryCta.label}
              </a>
            )}
          </div>
        </div>
      </HobbitPageContainer>
    </section>
  );
}
