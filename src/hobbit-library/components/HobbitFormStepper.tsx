import { Fragment } from "react";
import { cn } from "@/hobbit-library/utils/utils";

export const meta = {
  name: "HobbitFormStepper",
  description: "Multi-step form progress indicator with numbered dots and connector lines.",
};

export type HobbitFormStepperStep = {
  label: string;
};

export type HobbitFormStepperProps = {
  steps: HobbitFormStepperStep[];
  currentStep: number;
  className?: string;
};

export function HobbitFormStepper({ steps, currentStep, className }: HobbitFormStepperProps) {
  return (
    <div className={cn("border-b border-hobbit-sand bg-hobbit-cream-warm px-6 py-4", className)}>
      <div className="flex items-center">
        {steps.map((step, i) => {
          const num = i + 1;
          const done = num < currentStep;
          const active = num === currentStep;
          return (
            <Fragment key={i}>
              {i > 0 && (
                <div
                  className={cn(
                    "mx-2.5 h-px min-w-4 flex-1",
                    i < currentStep ? "bg-hobbit-forest-base" : "bg-hobbit-sand",
                  )}
                />
              )}
              <div className="flex shrink-0 items-center">
                <div
                  className={cn(
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-hobbit-ui text-[11px]",
                    done && "bg-hobbit-forest-base text-hobbit-cream-light",
                    active && "bg-hobbit-gold-base text-hobbit-cream-light",
                    !done && !active && "bg-hobbit-beige-section text-hobbit-gold-dark",
                  )}
                >
                  {done ? "✓" : num}
                </div>
                <span
                  className={cn(
                    "ml-1.5 font-hobbit-ui text-[10px] uppercase tracking-[0.05em]",
                    done && "text-hobbit-forest-base",
                    active && "text-hobbit-wood-darkest",
                    !done && !active && "text-hobbit-gold-dark",
                  )}
                >
                  {step.label}
                </span>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
