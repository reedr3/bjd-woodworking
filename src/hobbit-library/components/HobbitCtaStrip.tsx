import { cn } from "@/hobbit-library/utils/utils";
import { HobbitPageContainer } from "./HobbitPageContainer";

export const meta = {
  name: "HobbitCtaStrip",
  description: "Full-width call-to-action strip with heading, optional subtext, and a light button.",
};

export type HobbitCtaStripProps = {
  heading: string;
  subtext?: string;
  cta: {
    label: string;
    href: string;
  };
  className?: string;
};

export function HobbitCtaStrip({ heading, subtext, cta, className }: HobbitCtaStripProps) {
  return (
    <section className={cn("bg-[#5A7A3C] py-6", className)}>
      <HobbitPageContainer>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-hobbit-display text-base font-bold text-hobbit-cream-light">
              {heading}
            </p>
            {subtext && (
              <p className="mt-0.5 font-hobbit-body text-[12px] text-hobbit-forest-soft">
                {subtext}
              </p>
            )}
          </div>
          <a
            href={cta.href}
            className="shrink-0 whitespace-nowrap rounded bg-hobbit-cream-light px-6 py-2.5 font-hobbit-ui text-[11px] uppercase tracking-[0.05em] text-hobbit-wood-darkest transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hobbit-cream-light focus-visible:ring-offset-2 focus-visible:ring-offset-[#5A7A3C]"
          >
            {cta.label}
          </a>
        </div>
      </HobbitPageContainer>
    </section>
  );
}
