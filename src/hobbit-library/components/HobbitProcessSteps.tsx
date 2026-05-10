import { cn } from "@/hobbit-library/utils/utils";
import { HobbitButton, type HobbitButtonVariant } from "./HobbitButton";
import { HobbitPageContainer } from "./HobbitPageContainer";

export const meta = {
  name: "HobbitProcessSteps",
  description: "Numbered process step strip for commission or how-it-works flows.",
  variants: ["horizontal", "vertical"],
};

export type HobbitProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type HobbitProcessStepsProps = {
  eyebrow?: string;
  heading: string;
  subtext?: string;
  steps: HobbitProcessStep[];
  cta?: {
    label: string;
    href: string;
    variant?: HobbitButtonVariant;
  };
  layout?: "horizontal" | "vertical";
};

export function HobbitProcessSteps({
  eyebrow,
  heading,
  subtext,
  steps,
  cta,
  layout = "horizontal",
}: HobbitProcessStepsProps) {
  const isHorizontal = layout === "horizontal";

  return (
    <section className="bg-hobbit-beige-section py-9">
      <HobbitPageContainer>
        {eyebrow ? (
          <p className="mb-2 font-hobbit-ui text-[10px] uppercase tracking-[0.15em] text-hobbit-gold-dark">
            {eyebrow}
          </p>
        ) : null}
        <div className="mb-3 h-0.5 w-9 rounded-[1px] bg-hobbit-gold-base" aria-hidden />
        <h2 className="mb-3 font-hobbit-display text-[22px] font-bold text-hobbit-wood-darkest">{heading}</h2>
        {subtext ? (
          <p className="mb-6 max-w-[500px] font-hobbit-body text-[13px] leading-[1.7] text-hobbit-gold-dark">
            {subtext}
          </p>
        ) : (
          <div className="mb-6" />
        )}

        <div
          className={cn(
            "overflow-hidden rounded-lg bg-hobbit-forest-dark divide-hobbit-forest-base",
            isHorizontal &&
              "grid grid-cols-1 divide-y md:grid-cols-4 md:divide-x md:divide-y-0",
            !isHorizontal && "flex flex-col divide-y",
          )}
        >
          {steps.map((step) => (
            <div key={step.number} className="px-[1.1rem] py-4">
              <p className="mb-1 font-hobbit-ui text-[10px] tracking-[0.1em] text-hobbit-forest-pale">
                Step {step.number}
              </p>
              <h3 className="mb-1.5 font-hobbit-display text-[13px] font-bold text-hobbit-cream-light">
                {step.title}
              </h3>
              <p className="font-hobbit-body text-[11px] leading-[1.55] text-hobbit-cream-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {cta ? (
          <div className="mt-5">
            <HobbitButton href={cta.href} variant={cta.variant ?? "primary"}>
              {cta.label}
            </HobbitButton>
          </div>
        ) : null}
      </HobbitPageContainer>
    </section>
  );
}
