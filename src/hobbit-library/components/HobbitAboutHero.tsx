import type { ReactNode } from "react";

import { cn } from "@/hobbit-library/utils/utils";

export const meta = {
  name: "HobbitAboutHero",
  description:
    "Split-column about-page hero: portrait image block on the left, eyebrow + h1 with optional italic emphasis + drop-cap lede on the right.",
};

export type HobbitAboutHeroProps = {
  eyebrow?: string;
  title: string;
  titleEmphasis?: string;
  lede: string;
  imageCaption?: string;
  imageContent?: ReactNode;
  className?: string;
};

export function HobbitAboutHero({
  eyebrow,
  title,
  titleEmphasis,
  lede,
  imageCaption,
  imageContent,
  className,
}: HobbitAboutHeroProps) {
  return (
    <section
      className={cn(
        "grid grid-cols-1 border-b border-hobbit-sand bg-hobbit-cream-warm sm:grid-cols-[0.85fr_1fr]",
        className,
      )}
    >
      <div className="relative min-h-[280px] overflow-hidden bg-hobbit-gold-thumb sm:min-h-[340px]">
        {imageContent}
        {imageCaption && (
          <p className="absolute bottom-3 left-3.5 right-3.5 font-hobbit-ui text-[10px] leading-snug tracking-[0.04em] text-hobbit-cream-light/85">
            <span
              className="mr-1.5 inline-block h-px w-3.5 align-middle bg-hobbit-gold-base"
              aria-hidden
            />
            {imageCaption}
          </p>
        )}
      </div>

      <div className="flex items-center px-10 py-10">
        <div>
          {eyebrow && (
            <p className="mb-3 font-hobbit-ui text-[10px] uppercase tracking-[0.2em] text-hobbit-gold-dark">
              {eyebrow}
            </p>
          )}
          <h1 className="mb-3.5 font-hobbit-display text-[32px] font-bold leading-[1.18] text-hobbit-wood-darkest">
            {title}
            {titleEmphasis && (
              <>
                {" "}
                <em className="font-normal italic text-hobbit-gold-dark">{titleEmphasis}</em>
              </>
            )}
          </h1>
          <p className="font-hobbit-body text-[14px] italic leading-[1.8] text-[#5A4828] first-letter:float-left first-letter:pr-2 first-letter:pt-1 first-letter:font-hobbit-display first-letter:text-[38px] first-letter:font-bold first-letter:not-italic first-letter:leading-[0.92] first-letter:text-hobbit-gold-base">
            {lede}
          </p>
        </div>
      </div>
    </section>
  );
}
