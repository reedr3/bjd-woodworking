import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function HobbitSection({ title, eyebrow, children }: { title: string; eyebrow: string; children: ReactNode }) {
  return (
    <section className="mb-12">
      <header className="mb-6">
        <p className="mb-1 font-hobbit-ui text-[10px] uppercase tracking-[0.15em] text-hobbit-gold-dark">{eyebrow}</p>
        <div className="mb-2.5 h-0.5 w-9 rounded-sm bg-hobbit-gold-base" aria-hidden />
        <h2 className="font-hobbit-display text-2xl font-bold text-hobbit-wood-darkest">{title}</h2>
      </header>
      {children}
    </section>
  );
}

export function HobbitSubsectionTitle({
  children,
  tone = "gold",
}: {
  children: ReactNode;
  tone?: "gold" | "muted";
}) {
  return (
    <h4
      className={cn(
        "mb-4 font-hobbit-ui text-[11px] uppercase tracking-[0.1em]",
        tone === "gold" ? "text-hobbit-gold-dark" : "text-hobbit-wood-light",
      )}
    >
      {children}
    </h4>
  );
}

export function HobbitColorGroup({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mb-8">
      <HobbitSubsectionTitle tone="muted">{title}</HobbitSubsectionTitle>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">{children}</div>
    </div>
  );
}

export function HobbitColorSwatch({ name, hex, description }: { name: string; hex: string; description: string }) {
  return (
    <div>
      <div
        className="mb-2 h-24 w-full rounded-lg border border-hobbit-sand shadow-hobbit-warm"
        style={{ backgroundColor: hex }}
      />
      <div className="mb-0.5 font-hobbit-display text-[13px] font-bold text-hobbit-wood-darkest">{name}</div>
      <div className="mb-0.5 font-hobbit-ui text-[10px] text-hobbit-wood-light">{hex}</div>
      <div className="text-[11px] text-hobbit-wood-medium">{description}</div>
    </div>
  );
}

const specimenFont = {
  display: "font-hobbit-display",
  body: "font-hobbit-body",
  ui: "font-hobbit-ui",
} as const;

export type HobbitTypePreset = keyof typeof specimenFont;

export function HobbitTypeSpecimen({
  preset,
  familyLabel,
  usage,
  sample,
}: {
  preset: HobbitTypePreset;
  familyLabel: string;
  usage: string;
  sample: string;
}) {
  return (
    <div className="rounded-lg border border-hobbit-sand bg-hobbit-cream-light p-4">
      <p className="mb-2 font-hobbit-ui text-[10px] uppercase tracking-[0.08em] text-hobbit-gold-dark">
        {familyLabel} · {usage}
      </p>
      <p className={cn("text-xl text-hobbit-wood-darkest", specimenFont[preset])}>{sample}</p>
    </div>
  );
}

export function HobbitTypeScale({
  size,
  label,
  fontClass,
  uppercase,
}: {
  size: string;
  label: string;
  fontClass: string;
  uppercase?: boolean;
}) {
  return (
    <div className="flex items-baseline gap-4 rounded border border-hobbit-sand bg-hobbit-cream-light p-3">
      <div
        className={cn(
          "flex-1 text-hobbit-wood-darkest",
          fontClass,
          uppercase ? "uppercase" : "normal-case",
        )}
        style={{ fontSize: size }}
      >
        {uppercase ? "Sample Text" : "Sample text"}
      </div>
      <div className="shrink-0 whitespace-nowrap font-hobbit-ui text-[10px] text-hobbit-wood-light">
        {size} · {label}
      </div>
    </div>
  );
}

export function HobbitComponentShowcase({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mb-8">
      <HobbitSubsectionTitle>{title}</HobbitSubsectionTitle>
      <div className="rounded-lg border border-hobbit-sand bg-hobbit-cream-light p-6">{children}</div>
    </div>
  );
}

export function HobbitSpacingDemo({ size, label }: { size: string; label: string }) {
  return (
    <div>
      <div className="mb-2 font-hobbit-ui text-[10px] text-hobbit-wood-light">
        {size} · {label}
      </div>
      <div className="rounded-[3px] bg-hobbit-gold-base" style={{ width: size, height: size }} />
    </div>
  );
}

export function HobbitPrinciple({ title, points }: { title: string; points: string[] }) {
  return (
    <div className="rounded-lg border border-hobbit-sand bg-hobbit-cream-light p-5">
      <h4 className="mb-3 font-hobbit-display text-base font-bold text-hobbit-wood-darkest">{title}</h4>
      <ul className="m-0 list-none p-0">
        {points.map((point, idx) => (
          <li key={idx} className="relative mb-1.5 pl-4 text-[12px] text-hobbit-wood-medium last:mb-0">
            <span className="absolute left-0 text-hobbit-gold-base" aria-hidden>
              →
            </span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
