import { cn } from "@/hobbit-library/utils/utils";
import { HobbitPageContainer } from "./HobbitPageContainer";

export const meta = {
  name: "HobbitFaqGrid",
  description: "FAQ section with a 2-column grid of question/answer cards.",
};

export type HobbitFaqItem = {
  question: string;
  answer: string;
};

export type HobbitFaqGridProps = {
  eyebrow?: string;
  heading: string;
  items: HobbitFaqItem[];
  className?: string;
};

export function HobbitFaqGrid({ eyebrow, heading, items, className }: HobbitFaqGridProps) {
  return (
    <section className={cn("bg-hobbit-cream-warm py-9", className)}>
      <HobbitPageContainer>
        {eyebrow && (
          <p className="mb-2 font-hobbit-ui text-[10px] uppercase tracking-[0.18em] text-hobbit-gold-dark">
            {eyebrow}
          </p>
        )}
        <div className="mb-3 h-0.5 w-9 rounded-[1px] bg-hobbit-gold-base" aria-hidden />
        <h2 className="mb-5 font-hobbit-display text-[20px] font-bold text-hobbit-wood-darkest">
          {heading}
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.question}
              className="rounded-lg border border-hobbit-sand bg-hobbit-paper px-4 py-[14px]"
            >
              <h3 className="mb-1.5 font-hobbit-display text-[13px] font-bold text-hobbit-wood-darkest">
                {item.question}
              </h3>
              <p className="font-hobbit-body text-[12px] leading-[1.7] text-hobbit-wood-medium">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </HobbitPageContainer>
    </section>
  );
}
