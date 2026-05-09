import type { ReactNode } from "react";

export const meta = {
  name: "HobbitHero",
  description: "Large hero block with eyebrow, title, and supporting copy on a warm bordered panel.",
};

export type HobbitHeroProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function HobbitHero({ eyebrow, title, children }: HobbitHeroProps) {
  return (
    <div className="mb-12 rounded-xl border border-hobbit-sand bg-hobbit-cream-warm p-10">
      <p className="mb-2 font-hobbit-ui text-[10px] uppercase tracking-[0.2em] text-hobbit-gold-dark">{eyebrow}</p>
      <h1 className="mb-3 font-hobbit-display text-[42px] font-bold text-hobbit-wood-darkest">{title}</h1>
      <p className="max-w-[600px] text-[15px] leading-[1.7] text-hobbit-wood-medium">{children}</p>
    </div>
  );
}
