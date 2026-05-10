"use client";

import { useState } from "react";
import { cn } from "@/hobbit-library/utils/utils";
import { HobbitPageContainer } from "./HobbitPageContainer";

export const meta = {
  name: "HobbitFaqAccordion",
  description:
    "FAQ section rendered as an expandable accordion: each item toggles open/closed with a +/− button.",
};

export type HobbitFaqAccordionItem = {
  question: string;
  answer: string;
};

export type HobbitFaqAccordionProps = {
  eyebrow?: string;
  heading: string;
  items: HobbitFaqAccordionItem[];
  /** Index of item open by default (0-based). -1 = all closed. */
  defaultOpen?: number;
  className?: string;
};

export function HobbitFaqAccordion({
  eyebrow,
  heading,
  items,
  defaultOpen = 0,
  className,
}: HobbitFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(defaultOpen);

  return (
    <section className={cn("bg-hobbit-cream-base py-9", className)}>
      <HobbitPageContainer>
        {eyebrow && (
          <p className="mb-2 font-hobbit-ui text-[10px] uppercase tracking-[0.18em] text-hobbit-gold-dark">
            {eyebrow}
          </p>
        )}
        <div className="mb-3 h-0.5 w-9 rounded-[1px] bg-hobbit-gold-base" aria-hidden />
        <h2 className="mb-5 font-hobbit-display text-[22px] font-bold text-hobbit-wood-darkest">
          {heading}
        </h2>

        <div className="flex flex-col gap-2">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-lg border border-hobbit-sand bg-hobbit-paper"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between px-[18px] py-3.5 text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-hobbit-gold-base"
                  aria-expanded={isOpen}
                >
                  <span className="font-hobbit-display text-[14px] font-bold text-hobbit-wood-darkest">
                    {item.question}
                  </span>
                  <span
                    className="ml-4 shrink-0 font-hobbit-ui text-[18px] leading-none text-hobbit-gold-base"
                    aria-hidden
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-hobbit-sand px-[18px] pb-4 pt-3">
                    <p className="font-hobbit-body text-[12.5px] leading-[1.75] text-hobbit-wood-medium">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </HobbitPageContainer>
    </section>
  );
}
