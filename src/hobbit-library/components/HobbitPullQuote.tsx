import { cn } from "@/hobbit-library/utils/utils";
import { HobbitPageContainer } from "./HobbitPageContainer";

export const meta = {
  name: "HobbitPullQuote",
  description:
    "Dark-green featured quote section: two-column layout with a square image placeholder on the left and a large pull quote, author name, and project line on the right.",
};

export type HobbitPullQuoteProps = {
  eyebrow?: string;
  quote: string;
  author: string;
  project?: string;
  imageLabel?: string;
  className?: string;
};

export function HobbitPullQuote({
  eyebrow,
  quote,
  author,
  project,
  imageLabel = "Client photo",
  className,
}: HobbitPullQuoteProps) {
  return (
    <section className={cn("bg-hobbit-forest-dark py-9", className)}>
      <HobbitPageContainer>
        {eyebrow && (
          <p className="mb-2 font-hobbit-ui text-[10px] uppercase tracking-[0.18em] text-hobbit-forest-light">
            {eyebrow}
          </p>
        )}
        <div className="mb-5 h-0.5 w-9 rounded-[1px] bg-hobbit-forest-light" aria-hidden />

        <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-[0.5fr_1fr]">
          {/* Image placeholder */}
          <div className="aspect-square overflow-hidden rounded-lg bg-hobbit-gold-thumb">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid slice"
              aria-label={imageLabel}
              role="img"
            >
              <rect width="100" height="100" fill="#B8822C" />
              <rect x="14" y="50" width="72" height="6" fill="#7A5418" opacity="0.6" />
              <rect x="20" y="56" width="60" height="34" fill="#5A4018" opacity="0.5" />
              <text
                x="50"
                y="98"
                textAnchor="middle"
                fontSize="6"
                fill="#FAF5EA"
                opacity="0.6"
                fontFamily="Georgia,serif"
              >
                [ {imageLabel} ]
              </text>
            </svg>
          </div>

          {/* Quote */}
          <blockquote>
            <p
              className="mb-0.5 font-hobbit-display text-[38px] leading-[0.5] text-hobbit-gold-base"
              aria-hidden
            >
              &ldquo;
            </p>
            <p className="mb-3.5 font-hobbit-display text-[17px] font-normal italic leading-[1.55] text-hobbit-cream-light">
              {quote}
            </p>
            <footer>
              <p className="font-hobbit-ui text-[12px] tracking-[0.06em] text-hobbit-gold-base">
                {author}
              </p>
              {project && (
                <p className="mt-0.5 font-hobbit-ui text-[10.5px] text-hobbit-forest-light">
                  {project}
                </p>
              )}
            </footer>
          </blockquote>
        </div>
      </HobbitPageContainer>
    </section>
  );
}
