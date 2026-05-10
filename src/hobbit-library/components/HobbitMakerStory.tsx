import type { ReactNode } from "react";

import { cn } from "@/hobbit-library/utils/utils";
import { HobbitPageContainer } from "./HobbitPageContainer";

export const meta = {
  name: "HobbitMakerStory",
  description:
    "Two-column long-form prose section with a stat-card sidebar. First paragraph gets a decorative drop cap.",
};

export type HobbitStatCard = {
  value: string;
  label: string;
  description?: string;
};

export type HobbitMakerStoryProps = {
  eyebrow?: string;
  heading: string;
  paragraphs: ReactNode[];
  stats: HobbitStatCard[];
  className?: string;
};

export function HobbitMakerStory({
  eyebrow,
  heading,
  paragraphs,
  stats,
  className,
}: HobbitMakerStoryProps) {
  return (
    <section className={cn("bg-hobbit-cream-light py-9", className)}>
      <HobbitPageContainer>
        {eyebrow && (
          <p className="mb-1.5 font-hobbit-ui text-[10px] uppercase tracking-[0.18em] text-hobbit-gold-dark">
            {eyebrow}
          </p>
        )}
        <div className="mb-1 h-0.5 w-9 rounded-[1px] bg-hobbit-gold-base" aria-hidden />
        <h2 className="mb-6 font-hobbit-display text-[22px] font-bold text-hobbit-wood-darkest">
          {heading}
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_0.45fr]">
          <div className="[&_strong]:font-medium [&_strong]:italic [&_strong]:text-hobbit-forest-dark">
            {paragraphs.map((para, i) => (
              <p
                key={i}
                className={cn(
                  "font-hobbit-body text-[13.5px] leading-[1.85] text-hobbit-wood-darkest",
                  i > 0 && "mt-4",
                  i === 0 &&
                    "first-letter:float-left first-letter:pr-2 first-letter:pt-1 first-letter:font-hobbit-display first-letter:text-[46px] first-letter:font-bold first-letter:leading-[0.9] first-letter:text-hobbit-gold-dark",
                )}
              >
                {para}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-3.5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-md border border-hobbit-sand border-l-[3px] border-l-hobbit-gold-base bg-hobbit-paper px-4 py-3.5"
              >
                <p className="font-hobbit-display text-[28px] font-bold leading-none text-hobbit-wood-darkest">
                  {stat.value}
                </p>
                <p className="mt-1 font-hobbit-ui text-[10px] uppercase tracking-[0.1em] text-hobbit-gold-dark">
                  {stat.label}
                </p>
                {stat.description && (
                  <p className="mt-1.5 font-hobbit-body text-[11.5px] leading-[1.55] text-hobbit-wood-medium">
                    {stat.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </HobbitPageContainer>
    </section>
  );
}
