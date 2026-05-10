import { cn } from "@/hobbit-library/utils/utils";
import { HobbitPageContainer } from "./HobbitPageContainer";

export const meta = {
  name: "HobbitContactHero",
  description:
    "Contact page hero: split-column layout with eyebrow + h1 (optional italic) + subtext on the left and a live status card on the right.",
};

export type HobbitContactStatusMeta = {
  label: string;
  value: string;
};

export type HobbitContactStatus = {
  indicator?: "open" | "away" | "closed";
  statusLabel: string;
  heading: string;
  description: string;
  meta?: HobbitContactStatusMeta[];
};

export type HobbitContactHeroProps = {
  eyebrow?: string;
  title: string;
  titleEmphasis?: string;
  subtext?: string;
  status?: HobbitContactStatus;
  className?: string;
};

const dotColors: Record<NonNullable<HobbitContactStatus["indicator"]>, string> = {
  open: "bg-hobbit-forest-base shadow-[0_0_0_3px_rgba(107,142,78,0.25)]",
  away: "bg-hobbit-gold-base shadow-[0_0_0_3px_rgba(200,150,60,0.25)]",
  closed: "bg-[#C04040] shadow-[0_0_0_3px_rgba(192,64,64,0.25)]",
};

export function HobbitContactHero({
  eyebrow,
  title,
  titleEmphasis,
  subtext,
  status,
  className,
}: HobbitContactHeroProps) {
  return (
    <section
      className={cn(
        "border-b border-hobbit-sand bg-hobbit-cream-warm",
        className,
      )}
    >
      <HobbitPageContainer className="grid grid-cols-1 gap-8 py-10 md:grid-cols-[1.4fr_1fr] md:items-center">
        <div>
          {eyebrow && (
            <p className="mb-2.5 font-hobbit-ui text-[10px] uppercase tracking-[0.2em] text-hobbit-gold-dark">
              {eyebrow}
            </p>
          )}
          <h1 className="mb-3 font-hobbit-display text-[32px] font-bold leading-[1.18] text-hobbit-wood-darkest">
            {title}
            {titleEmphasis && (
              <>
                {" "}
                <em className="font-normal italic text-hobbit-gold-dark">{titleEmphasis}</em>
              </>
            )}
          </h1>
          {subtext && (
            <p className="max-w-[440px] font-hobbit-body text-[13.5px] leading-[1.75] text-hobbit-wood-medium">
              {subtext}
            </p>
          )}
        </div>

        {status && (
          <div className="rounded-lg border border-hobbit-sand bg-hobbit-paper p-4">
            <div className="mb-1.5 flex items-center gap-2">
              <span
                className={cn(
                  "h-2.5 w-2.5 flex-shrink-0 rounded-full",
                  dotColors[status.indicator ?? "open"],
                )}
                aria-hidden
              />
              <span className="font-hobbit-ui text-[10px] uppercase tracking-[0.12em] text-hobbit-gold-dark">
                {status.statusLabel}
              </span>
            </div>
            <p className="mb-1 font-hobbit-display text-[14px] font-bold text-hobbit-wood-darkest">
              {status.heading}
            </p>
            <p className="font-hobbit-body text-[12px] leading-[1.6] text-hobbit-wood-medium">
              {status.description}
            </p>
            {status.meta && status.meta.length > 0 && (
              <div className="mt-2.5 flex gap-3.5 border-t border-hobbit-sand pt-2.5">
                {status.meta.map((item) => (
                  <div key={item.label} className="flex-1">
                    <p className="mb-0.5 font-hobbit-ui text-[9.5px] uppercase tracking-[0.08em] text-hobbit-gold-dark">
                      {item.label}
                    </p>
                    <p className="font-hobbit-display text-[13px] font-bold text-hobbit-wood-darkest">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </HobbitPageContainer>
    </section>
  );
}
