import { cn } from "@/hobbit-library/utils/utils";
import { HobbitPageContainer } from "./HobbitPageContainer";

export const meta = {
  name: "HobbitTestimonialStrip",
  description:
    "Compact 3-column testimonial strip with star ratings, italic quote, author, and project label. Designed to appear inline under a section (e.g. below a timeline).",
};

export type HobbitTestimonialStripItem = {
  quote: string;
  author: string;
  project?: string;
  stars?: number;
};

export type HobbitTestimonialStripProps = {
  items: HobbitTestimonialStripItem[];
  className?: string;
};

export function HobbitTestimonialStrip({ items, className }: HobbitTestimonialStripProps) {
  return (
    <div className={cn("py-6", className)}>
      <HobbitPageContainer>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {items.map((item, i) => {
            const stars = item.stars ?? 5;
            return (
              <article
                key={i}
                className="rounded-lg border border-hobbit-sand bg-hobbit-paper px-[14px] py-3"
              >
                <p
                  className="mb-1.5 font-hobbit-ui text-[11px] text-hobbit-gold-base"
                  aria-label={`${stars} out of 5 stars`}
                >
                  {"★".repeat(stars)}
                </p>
                <blockquote className="mb-2 font-hobbit-body text-[11px] italic leading-[1.7] text-hobbit-wood-medium">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <p className="font-hobbit-ui text-[10px] text-hobbit-wood-darkest">{item.author}</p>
                {item.project && (
                  <p className="mt-0.5 font-hobbit-ui text-[10px] text-hobbit-gold-dark">
                    {item.project}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </HobbitPageContainer>
    </div>
  );
}
