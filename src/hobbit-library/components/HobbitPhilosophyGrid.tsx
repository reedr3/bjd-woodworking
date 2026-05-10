import { cn } from "@/hobbit-library/utils/utils";
import { HobbitPageContainer } from "./HobbitPageContainer";

export const meta = {
  name: "HobbitPhilosophyGrid",
  description:
    "Three-column numbered-principle cards on a forest-dark background. Good for brand values or working philosophy.",
};

export type HobbitPrincipleCard = {
  number: string;
  heading: string;
  description: string;
};

export type HobbitPhilosophyGridProps = {
  eyebrow?: string;
  heading: string;
  intro?: string;
  principles: HobbitPrincipleCard[];
  className?: string;
};

export function HobbitPhilosophyGrid({
  eyebrow,
  heading,
  intro,
  principles,
  className,
}: HobbitPhilosophyGridProps) {
  return (
    <section className={cn("bg-hobbit-forest-dark py-9", className)}>
      <HobbitPageContainer>
        {eyebrow && (
          <p className="mb-1.5 font-hobbit-ui text-[10px] uppercase tracking-[0.18em] text-hobbit-forest-light">
            {eyebrow}
          </p>
        )}
        <div className="mb-1 h-0.5 w-9 rounded-[1px] bg-hobbit-forest-light" aria-hidden />
        <h2 className="mb-3 font-hobbit-display text-[22px] font-bold text-hobbit-cream-light">
          {heading}
        </h2>
        {intro && (
          <p className="mb-6 max-w-[580px] font-hobbit-body text-[13px] leading-[1.75] text-hobbit-forest-pale">
            {intro}
          </p>
        )}

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3">
          {principles.map((p) => (
            <div
              key={p.number}
              className="rounded-lg border border-hobbit-forest-light/40 bg-hobbit-cream-light/[0.06] px-[18px] pb-4 pt-[18px]"
            >
              <p className="mb-3 font-hobbit-ui text-[28px] font-bold leading-none text-hobbit-gold-base/85">
                {p.number}
              </p>
              <h3 className="mb-2 font-hobbit-display text-[15px] font-bold leading-[1.3] text-hobbit-cream-light">
                {p.heading}
              </h3>
              <p className="font-hobbit-body text-[12px] leading-[1.7] text-hobbit-forest-pale">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </HobbitPageContainer>
    </section>
  );
}
