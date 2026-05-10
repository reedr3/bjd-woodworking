import { cn } from "@/hobbit-library/utils/utils";
import { HobbitPageContainer } from "./HobbitPageContainer";

export const meta = {
  name: "HobbitSocialFollow",
  description:
    "Dark-green 'Follow along' section with a three-column grid of social platform cards (platform name, handle, description).",
};

export type HobbitSocialFollowCard = {
  platform: string;
  handle: string;
  description: string;
  href?: string;
};

export type HobbitSocialFollowProps = {
  eyebrow?: string;
  heading: string;
  intro?: string;
  cards: HobbitSocialFollowCard[];
  className?: string;
};

export function HobbitSocialFollow({
  eyebrow,
  heading,
  intro,
  cards,
  className,
}: HobbitSocialFollowProps) {
  return (
    <section className={cn("bg-hobbit-forest-dark py-9", className)}>
      <HobbitPageContainer>
        {eyebrow && (
          <p className="mb-1.5 font-hobbit-ui text-[10px] uppercase tracking-[0.18em] text-hobbit-forest-pale">
            {eyebrow}
          </p>
        )}
        <div className="mb-3 h-0.5 w-9 rounded-[1px] bg-hobbit-forest-light" aria-hidden />
        <h2 className="mb-1.5 font-hobbit-display text-[22px] font-bold text-hobbit-cream-light">
          {heading}
        </h2>
        {intro && (
          <p className="mb-5 max-w-[560px] font-hobbit-body text-[13px] leading-[1.75] text-hobbit-forest-pale">
            {intro}
          </p>
        )}

        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
          {cards.map((card) => {
            const inner = (
              <>
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="font-hobbit-ui text-[11px] uppercase tracking-[0.1em] text-hobbit-gold-base">
                    {card.platform}
                  </span>
                  <span className="text-[12px] text-hobbit-gold-base" aria-hidden>
                    ↗
                  </span>
                </div>
                <p className="mb-1 font-hobbit-display text-[14px] font-bold text-hobbit-cream-light">
                  {card.handle}
                </p>
                <p className="font-hobbit-body text-[11px] leading-[1.55] text-hobbit-forest-pale">
                  {card.description}
                </p>
              </>
            );

            const cardClass =
              "block rounded-lg border border-hobbit-forest-light/40 bg-hobbit-cream-light/[0.06] p-3.5 transition-colors hover:border-hobbit-forest-light/70";

            return card.href ? (
              <a key={card.platform} href={card.href} className={cardClass}>
                {inner}
              </a>
            ) : (
              <div key={card.platform} className={cardClass}>
                {inner}
              </div>
            );
          })}
        </div>
      </HobbitPageContainer>
    </section>
  );
}
