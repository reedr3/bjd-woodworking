import type { ReactNode } from "react";

import { cn } from "@/hobbit-library/utils/utils";
import { HobbitPageContainer } from "./HobbitPageContainer";

export const meta = {
  name: "HobbitShopHero",
  description:
    "Shop / listing page hero with eyebrow, h1, subtext, and an optional aside slot for shipping banners or badges.",
};

export type HobbitShopHeroProps = {
  eyebrow: string;
  title: string;
  subtext: string;
  /** Optional panel rendered to the right of the text block (e.g. a shipping badge). */
  aside?: ReactNode;
  className?: string;
};

export function HobbitShopHero({ eyebrow, title, subtext, aside, className }: HobbitShopHeroProps) {
  return (
    <section className={cn("border-b border-hobbit-sand bg-hobbit-cream-warm py-8", className)}>
      <HobbitPageContainer>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 font-hobbit-ui text-[10px] uppercase tracking-[0.2em] text-hobbit-gold-dark">
              {eyebrow}
            </p>
            <h1 className="mb-2 font-hobbit-display text-[30px] font-bold leading-tight text-hobbit-wood-darkest">
              {title}
            </h1>
            <p className="max-w-[400px] font-hobbit-body text-[13px] leading-[1.7] text-hobbit-wood-medium">
              {subtext}
            </p>
          </div>
          {aside ? <div className="shrink-0">{aside}</div> : null}
        </div>
      </HobbitPageContainer>
    </section>
  );
}
