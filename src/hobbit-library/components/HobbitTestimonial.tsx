import { cn } from "@/hobbit-library/utils/utils";

import { HobbitPageContainer } from "./HobbitPageContainer";

export const meta = {
  name: "HobbitTestimonial",
  description: "Customer quote display in grid or single featured layout.",
  variants: ["grid", "featured"],
};

export type HobbitTestimonialItem = {
  quote: string;
  author: string;
  project?: string;
  rating?: number;
};

export type HobbitTestimonialProps = {
  eyebrow?: string;
  heading?: string;
  items: HobbitTestimonialItem[];
  variant: "grid" | "featured";
};

function Stars({ rating = 5 }: { rating?: number }) {
  const n = Math.min(5, Math.max(1, rating));
  return (
    <p className="mb-2 font-hobbit-ui text-[12px] leading-none text-hobbit-gold-base" aria-label={`${n} out of 5 stars`}>
      {"★".repeat(n)}
    </p>
  );
}

export function HobbitTestimonial({ eyebrow, heading, items, variant }: HobbitTestimonialProps) {
  if (variant === "featured" && items[0]) {
    const { quote, author } = items[0];
    return (
      <section className="relative bg-hobbit-cream-light py-9">
        <HobbitPageContainer maxWidth="narrow" className="relative text-center">
          <span
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-hobbit-display text-[120px] leading-none text-hobbit-gold-light/40 select-none"
            aria-hidden
          >
            “
          </span>
          <blockquote className="relative z-[1]">
            <p className="mb-4 font-hobbit-body text-[18px] italic leading-[1.6] text-hobbit-wood-medium">{quote}</p>
            <footer className="font-hobbit-ui text-[13px] text-hobbit-wood-darkest">{author}</footer>
          </blockquote>
        </HobbitPageContainer>
      </section>
    );
  }

  return (
    <section className="bg-hobbit-cream-light py-9">
      <HobbitPageContainer>
        {eyebrow ? (
          <p className="mb-2 font-hobbit-ui text-[10px] uppercase tracking-[0.15em] text-hobbit-gold-dark">
            {eyebrow}
          </p>
        ) : null}
        {heading ? (
          <h2 className="mb-6 font-hobbit-display text-[22px] font-bold text-hobbit-wood-darkest">{heading}</h2>
        ) : null}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={`${item.author}-${item.quote.slice(0, 24)}`}
              className={cn(
                "rounded-lg border border-hobbit-sand bg-hobbit-paper p-[14px]",
              )}
            >
              <Stars rating={item.rating ?? 5} />
              <p className="mb-3 font-hobbit-body text-[12px] italic leading-[1.7] text-hobbit-wood-medium">
                {item.quote}
              </p>
              <p className="font-hobbit-ui text-[11px] text-hobbit-wood-darkest">{item.author}</p>
              {item.project ? (
                <p className="mt-0.5 font-hobbit-ui text-[10px] text-hobbit-gold-dark">{item.project}</p>
              ) : null}
            </article>
          ))}
        </div>
      </HobbitPageContainer>
    </section>
  );
}
