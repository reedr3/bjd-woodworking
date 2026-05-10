import type { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/hobbit-library/utils/utils";
import { HobbitButton, type HobbitButtonVariant } from "./HobbitButton";
import { HobbitPageContainer } from "./HobbitPageContainer";

export const meta = {
  name: "HobbitHero",
  description: "Large hero with centered or split layout: eyebrow, title, copy, and optional CTAs.",
  variants: ["centered", "split"],
};

export type HobbitHeroCta = {
  label: string;
  variant?: HobbitButtonVariant;
  href: string;
};

type HobbitHeroCenteredProps = {
  layout?: "centered";
  eyebrow: string;
  title: string;
  children: ReactNode;
};

type HobbitHeroSplitProps = {
  layout: "split";
  eyebrow: string;
  title: string;
  copy: string;
  photoSrc?: string;
  photoAlt?: string;
  buttons?: HobbitHeroCta[];
};

export type HobbitHeroProps = HobbitHeroCenteredProps | HobbitHeroSplitProps;

function HeroCrosshairPlaceholder() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-hobbit-gold-thumb" aria-hidden>
      <svg
        viewBox="0 0 240 240"
        className="h-[min(78%,220px)] w-[min(85%,260px)] max-w-[90%]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="120"
          cy="120"
          r="118"
          stroke="rgb(255 255 255 / 0.14)"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="120"
          cy="120"
          r="76"
          stroke="var(--hobbit-gold-light)"
          strokeOpacity={0.85}
          strokeWidth="9"
          fill="none"
        />
        <circle cx="120" cy="120" r="50" fill="var(--hobbit-forest-dark)" />
        <line x1="120" y1="86" x2="120" y2="154" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="86" y1="120" x2="154" y2="120" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="120" cy="120" r="4.5" fill="white" />
      </svg>
    </div>
  );
}

export function HobbitHero(props: HobbitHeroProps) {
  if (props.layout === "split") {
    const { eyebrow, title, copy, photoSrc, photoAlt = "", buttons } = props;
    return (
      <section className="mb-8 w-full bg-hobbit-cream-warm">
        <HobbitPageContainer>
          <div className="flex min-h-[300px] flex-col overflow-hidden md:min-h-[340px] md:flex-row">
            <div className="flex w-full flex-col justify-center py-8 pr-4 md:w-[48%] md:max-w-[48%] md:flex-[0_0_48%] md:py-10 md:pr-5">
              <p className="mb-2 font-hobbit-ui text-[11px] uppercase tracking-[0.2em] text-hobbit-gold-dark">
                {eyebrow}
              </p>
              <h1 className="mb-3 font-hobbit-display text-[30px] font-bold leading-tight text-hobbit-wood-darkest md:text-[32px]">
                {title}
              </h1>
              <p className="mb-5 max-w-[320px] font-hobbit-body text-[15px] leading-[1.65] text-hobbit-gold-dark md:text-[16px]">
                {copy}
              </p>
              {buttons && buttons.length > 0 ? (
                <div className="flex flex-wrap gap-3">
                  {buttons.map((b) => (
                    <HobbitButton key={b.href + b.label} href={b.href} variant={b.variant ?? "primary"}>
                      {b.label}
                    </HobbitButton>
                  ))}
                </div>
              ) : null}
            </div>
            <div
              className={cn(
                "relative w-full min-h-[220px] self-stretch md:min-h-0 md:w-[52%] md:flex-[0_0_52%]",
                !photoSrc && "bg-hobbit-gold-thumb",
              )}
            >
              {photoSrc ? (
                <Image
                  src={photoSrc}
                  alt={photoAlt || title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 52vw"
                  priority
                />
              ) : (
                <HeroCrosshairPlaceholder />
              )}
            </div>
          </div>
        </HobbitPageContainer>
      </section>
    );
  }

  const { eyebrow, title, children } = props;
  return (
    <div className="mb-12 rounded-xl border border-hobbit-sand bg-hobbit-cream-warm p-10">
      <p className="mb-2 font-hobbit-ui text-[10px] uppercase tracking-[0.2em] text-hobbit-gold-dark">{eyebrow}</p>
      <h1 className="mb-3 font-hobbit-display text-[42px] font-bold text-hobbit-wood-darkest">{title}</h1>
      <p className="max-w-[600px] text-[15px] leading-[1.7] text-hobbit-wood-medium">{children}</p>
    </div>
  );
}
