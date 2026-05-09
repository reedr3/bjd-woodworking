import type { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/hobbit-library/utils/utils";
import { HobbitButton, type HobbitButtonVariant } from "./HobbitButton";

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

export function HobbitHero(props: HobbitHeroProps) {
  if (props.layout === "split") {
    const { eyebrow, title, copy, photoSrc, photoAlt = "", buttons } = props;
    return (
      <div className="mb-12 flex min-h-[240px] flex-col overflow-hidden rounded-xl bg-hobbit-cream-warm md:flex-row">
        <div className="flex w-full flex-col justify-center px-8 py-8 md:w-[58%] md:max-w-[58%] md:flex-[0_0_58%]">
          <p className="mb-2 font-hobbit-ui text-[10px] uppercase tracking-[0.2em] text-hobbit-gold-dark">
            {eyebrow}
          </p>
          <h1 className="mb-3 font-hobbit-display text-[28px] font-bold text-hobbit-wood-darkest">
            {title}
          </h1>
          <p className="mb-5 max-w-[300px] font-hobbit-body text-[13px] leading-[1.7] text-hobbit-gold-dark">
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
            "relative w-full min-h-[240px] self-stretch md:w-[42%] md:flex-[0_0_42%]",
            !photoSrc && "bg-hobbit-gold-thumb",
          )}
        >
          {photoSrc ? (
            <Image
              src={photoSrc}
              alt={photoAlt || title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 42vw"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
              <span className="text-[48px] opacity-30">🪵</span>
            </div>
          )}
        </div>
      </div>
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
