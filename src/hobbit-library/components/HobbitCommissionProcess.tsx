import { cn } from "@/hobbit-library/utils/utils";
import { HobbitPageContainer } from "./HobbitPageContainer";

export const meta = {
  name: "HobbitCommissionProcess",
  description:
    "Commission process section: 4-column dark-green card grid where each step shows a numbered bullet, title, time/cost badge, and description.",
};

export type HobbitCommissionProcessStep = {
  number: string;
  title: string;
  /** e.g. "Week 1 · Free" or "Week 4 – 14 · 50% mid-build" */
  time: string;
  description: string;
};

export type HobbitCommissionProcessProps = {
  eyebrow?: string;
  heading: string;
  intro?: string;
  steps: HobbitCommissionProcessStep[];
  className?: string;
};

export function HobbitCommissionProcess({
  eyebrow,
  heading,
  intro,
  steps,
  className,
}: HobbitCommissionProcessProps) {
  return (
    <section className={cn("bg-hobbit-cream-warm py-9", className)}>
      <HobbitPageContainer>
        {eyebrow && (
          <p className="mb-2 font-hobbit-ui text-[10px] uppercase tracking-[0.18em] text-hobbit-gold-dark">
            {eyebrow}
          </p>
        )}
        <div className="mb-3 h-0.5 w-9 rounded-[1px] bg-hobbit-gold-base" aria-hidden />
        <h2 className="mb-2 font-hobbit-display text-[22px] font-bold text-hobbit-wood-darkest">
          {heading}
        </h2>
        {intro && (
          <p className="mb-5 max-w-[580px] font-hobbit-body text-[13px] leading-[1.75] text-hobbit-wood-medium">
            {intro}
          </p>
        )}

        <div className="grid grid-cols-1 divide-y divide-hobbit-forest-base overflow-hidden rounded-lg bg-[#5A7A3C] sm:grid-cols-2 sm:divide-x sm:divide-y-0 md:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="px-[1.1rem] py-5">
              <div className="mb-2 flex items-center gap-2 font-hobbit-ui text-[10px] tracking-[0.12em] text-hobbit-forest-light">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-hobbit-gold-base" aria-hidden />
                Step {step.number}
              </div>
              <h3 className="mb-1 font-hobbit-display text-[14px] font-bold text-hobbit-cream-light">
                {step.title}
              </h3>
              <p className="mb-2 font-hobbit-ui text-[9.5px] uppercase tracking-[0.05em] text-hobbit-gold-base">
                {step.time}
              </p>
              <p className="font-hobbit-body text-[11px] leading-[1.6] text-hobbit-forest-pale">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </HobbitPageContainer>
    </section>
  );
}
