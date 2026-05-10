import type { ReactNode } from "react";

import { cn } from "@/hobbit-library/utils/utils";
import { HobbitPageContainer } from "./HobbitPageContainer";

export const meta = {
  name: "HobbitBioTimeline",
  description:
    "Vertical left-rail timeline for biography or history entries. Major milestones get a filled gold bullet; minor entries get an open one.",
};

export type HobbitBioEntry = {
  year: string;
  title: ReactNode;
  description: string;
  major?: boolean;
};

export type HobbitBioTimelineProps = {
  eyebrow?: string;
  heading: string;
  entries: HobbitBioEntry[];
  className?: string;
};

export function HobbitBioTimeline({
  eyebrow,
  heading,
  entries,
  className,
}: HobbitBioTimelineProps) {
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

        <div className="relative pl-6">
          {/* vertical rail */}
          <div
            className="pointer-events-none absolute bottom-2 left-[5px] top-2 w-px bg-hobbit-sand"
            aria-hidden
          />

          <div className="flex flex-col gap-[1.1rem]">
            {entries.map((entry, i) => (
              <div key={i} className="relative">
                {/* bullet */}
                <div
                  className={cn(
                    "absolute -left-6 top-1.5 h-[11px] w-[11px] rounded-full border-2 border-hobbit-gold-base",
                    entry.major ? "bg-hobbit-gold-base" : "bg-hobbit-cream-light",
                  )}
                />
                <p className="mb-0.5 font-hobbit-ui text-[11px] tracking-[0.08em] text-hobbit-gold-dark">
                  {entry.year}
                </p>
                <h3 className="mb-0.5 font-hobbit-display text-[14px] font-bold text-hobbit-wood-darkest">
                  {entry.title}
                </h3>
                <p className="font-hobbit-body text-[12px] leading-[1.6] text-hobbit-wood-medium">
                  {entry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </HobbitPageContainer>
    </section>
  );
}
