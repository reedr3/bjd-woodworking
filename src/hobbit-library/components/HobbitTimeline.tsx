import { cn } from "@/hobbit-library/utils/utils";
import { HobbitPageContainer } from "./HobbitPageContainer";

export const meta = {
  name: "HobbitTimeline",
  description:
    "Circular-step process timeline: numbered gold circles connected by a horizontal line.",
};

export type HobbitTimelineStep = {
  number: string;
  title: string;
  description: string;
};

export type HobbitTimelineProps = {
  eyebrow?: string;
  heading: string;
  steps: HobbitTimelineStep[];
  className?: string;
};

const gridClass: Record<number, string> = {
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-2 sm:grid-cols-4",
};

export function HobbitTimeline({ eyebrow, heading, steps, className }: HobbitTimelineProps) {
  // Line spans from center of first circle to center of last circle.
  // In an N-col grid each column is 100/N % wide; the center of col 1 is at 100/(N*2) %.
  const lineOffset = `${100 / (steps.length * 2)}%`;
  const cols = gridClass[steps.length] ?? "grid-cols-4";
  // Only show the connector line when all steps are in a single row.
  // For 4 steps we collapse to 2-cols on mobile, so reveal the line at sm+.
  const lineVisibility = steps.length > 3 ? "hidden sm:block" : "block";

  return (
    <section className={cn("bg-[#EDE0B8] py-9", className)}>
      <HobbitPageContainer>
        {eyebrow && (
          <p className="mb-2 font-hobbit-ui text-[10px] uppercase tracking-[0.18em] text-hobbit-gold-dark">
            {eyebrow}
          </p>
        )}
        <div className="mb-5 h-0.5 w-9 rounded-[1px] bg-hobbit-gold-base" aria-hidden />
        <h2 className="mb-8 font-hobbit-display text-[20px] font-bold text-hobbit-wood-darkest">
          {heading}
        </h2>

        <div className={cn("relative grid gap-0", cols)}>
          {/* horizontal connector line */}
          <div
            className={cn(
              "pointer-events-none absolute top-7 h-0.5 bg-hobbit-gold-base/35",
              lineVisibility,
            )}
            style={{ left: lineOffset, right: lineOffset }}
            aria-hidden
          />

          {steps.map((step) => (
            <div key={step.number} className="relative z-10 px-2 text-center">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-hobbit-cream-warm bg-hobbit-gold-base">
                <span className="font-hobbit-ui text-[11px] tracking-[0.05em] text-hobbit-cream-light">
                  {step.number}
                </span>
              </div>
              <h3 className="mb-1 font-hobbit-display text-[14px] font-bold text-hobbit-wood-darkest">
                {step.title}
              </h3>
              <p className="font-hobbit-body text-[11px] leading-[1.6] text-hobbit-wood-medium">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </HobbitPageContainer>
    </section>
  );
}
