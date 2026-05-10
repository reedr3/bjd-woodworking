import { cn } from "@/hobbit-library/utils/utils";
import { HobbitPageContainer } from "./HobbitPageContainer";

export const meta = {
  name: "HobbitPressStrip",
  description:
    "Press-mention strip: publication names arranged in a centered warm card. Italic serif for editorial names, small caps for trade/local titles.",
};

export type HobbitPressItem = {
  name: string;
  bold?: boolean;
};

export type HobbitPressStripProps = {
  eyebrow?: string;
  items: HobbitPressItem[];
  className?: string;
};

export function HobbitPressStrip({ eyebrow, items, className }: HobbitPressStripProps) {
  return (
    <section className={cn("bg-[#EDE0B8] py-9", className)}>
      <HobbitPageContainer>
        {eyebrow && (
          <p className="mb-1.5 font-hobbit-ui text-[10px] uppercase tracking-[0.18em] text-hobbit-gold-dark">
            {eyebrow}
          </p>
        )}
        <div className="mb-4 h-0.5 w-9 rounded-[1px] bg-hobbit-gold-base" aria-hidden />

        <div className="flex flex-wrap items-center justify-around gap-x-8 gap-y-4 rounded-lg border border-hobbit-sand bg-[#F5EED8] px-4 py-6">
          {items.map((item) => (
            <span
              key={item.name}
              className={cn(
                item.bold
                  ? "font-hobbit-ui text-[12px] font-bold uppercase tracking-[0.18em] text-hobbit-wood-light/75"
                  : "font-hobbit-display text-[14px] italic text-hobbit-wood-light/75",
              )}
            >
              {item.name}
            </span>
          ))}
        </div>
      </HobbitPageContainer>
    </section>
  );
}
