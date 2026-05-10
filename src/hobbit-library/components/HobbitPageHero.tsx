import { cn } from "@/hobbit-library/utils/utils";
import { HobbitPageContainer } from "./HobbitPageContainer";

export const meta = {
  name: "HobbitPageHero",
  description:
    "Interior page hero: eyebrow label, h1 title, and a short subtext paragraph. Sits directly under the nav with a warm cream band and bottom border.",
};

export type HobbitPageHeroProps = {
  eyebrow: string;
  title: string;
  subtext: string;
  className?: string;
};

export function HobbitPageHero({ eyebrow, title, subtext, className }: HobbitPageHeroProps) {
  return (
    <section className={cn("border-b border-hobbit-sand bg-hobbit-cream-warm py-9", className)}>
      <HobbitPageContainer>
        <p className="mb-2 font-hobbit-ui text-[10px] uppercase tracking-[0.2em] text-hobbit-gold-dark">
          {eyebrow}
        </p>
        <h1 className="mb-2.5 font-hobbit-display text-[30px] font-bold leading-tight text-hobbit-wood-darkest">
          {title}
        </h1>
        <p className="max-w-[520px] font-hobbit-body text-[13px] leading-[1.75] text-hobbit-wood-medium">
          {subtext}
        </p>
      </HobbitPageContainer>
    </section>
  );
}
