import { cn } from "@/hobbit-library/utils/utils";
import { HobbitPageContainer } from "./HobbitPageContainer";

export const meta = {
  name: "HobbitPricingGrid",
  description:
    "3-column pricing reference grid for commission work: category label, piece name, price range, and lead-time note per card.",
};

export type HobbitPricingCard = {
  category: string;
  name: string;
  range: string;
  leadTime: string;
};

export type HobbitPricingGridProps = {
  eyebrow?: string;
  heading: string;
  intro?: string;
  cards: HobbitPricingCard[];
  className?: string;
};

export function HobbitPricingGrid({
  eyebrow,
  heading,
  intro,
  cards,
  className,
}: HobbitPricingGridProps) {
  return (
    <section className={cn("bg-hobbit-cream-base py-9", className)}>
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

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.name}
              className="rounded-lg border border-hobbit-sand bg-hobbit-paper px-[18px] py-4"
            >
              <p className="mb-2 font-hobbit-ui text-[10px] uppercase tracking-[0.1em] text-hobbit-gold-dark">
                {card.category}
              </p>
              <h3 className="mb-1.5 font-hobbit-display text-[15px] font-bold text-hobbit-wood-darkest">
                {card.name}
              </h3>
              <p className="mb-2 font-hobbit-ui text-[13px] font-bold text-hobbit-forest-base">
                {card.range}
              </p>
              <p className="font-hobbit-body text-[11.5px] leading-[1.55] text-hobbit-wood-medium">
                {card.leadTime}
              </p>
            </div>
          ))}
        </div>
      </HobbitPageContainer>
    </section>
  );
}
