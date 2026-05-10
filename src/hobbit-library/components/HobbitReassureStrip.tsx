import { cn } from "@/hobbit-library/utils/utils";

export const meta = {
  name: "HobbitReassureStrip",
  description:
    "3-column strip of reassurance items below a form: diamond-mark icon, bold title, and short description per item. Sits on a section background without its own page container.",
};

export type HobbitReassureItem = {
  title: string;
  description: string;
};

export type HobbitReassureStripProps = {
  items: HobbitReassureItem[];
  className?: string;
};

export function HobbitReassureStrip({ items, className }: HobbitReassureStripProps) {
  return (
    <div
      className={cn(
        "mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-3",
        className,
      )}
    >
      {items.map((item) => (
        <div
          key={item.title}
          className="flex gap-2.5 rounded-md border border-hobbit-forest-light/30 bg-hobbit-forest-light/[0.12] px-3.5 py-3"
        >
          <span
            className="mt-0.5 shrink-0 font-hobbit-ui text-[14px] leading-[1.2] text-hobbit-forest-base"
            aria-hidden
          >
            ◆
          </span>
          <div>
            <p className="mb-0.5 font-hobbit-display text-[12.5px] font-bold text-hobbit-wood-darkest">
              {item.title}
            </p>
            <p className="font-hobbit-body text-[11px] leading-[1.55] text-hobbit-forest-base">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
