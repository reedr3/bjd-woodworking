import { cn } from "@/hobbit-library/utils/utils";
import { HobbitPageContainer } from "./HobbitPageContainer";

export const meta = {
  name: "HobbitContactMap",
  description:
    "Map & directions section: decorative SVG map with a pin, address label, and a grid of visit instruction tiles.",
};

export type HobbitContactMapTile = {
  icon: string;
  heading: string;
  description: string;
};

export type HobbitContactMapProps = {
  eyebrow?: string;
  heading: string;
  intro?: string;
  workshopName: string;
  address: string;
  mapsHref?: string;
  tiles?: HobbitContactMapTile[];
  className?: string;
};

export function HobbitContactMap({
  eyebrow,
  heading,
  intro,
  workshopName,
  address,
  mapsHref,
  tiles,
  className,
}: HobbitContactMapProps) {
  return (
    <section className={cn("bg-hobbit-cream-warm py-9", className)}>
      <HobbitPageContainer>
        {eyebrow && (
          <p className="mb-1.5 font-hobbit-ui text-[10px] uppercase tracking-[0.18em] text-hobbit-gold-dark">
            {eyebrow}
          </p>
        )}
        <div className="mb-3 h-0.5 w-9 rounded-[1px] bg-hobbit-gold-base" aria-hidden />
        <h2 className="mb-1.5 font-hobbit-display text-[22px] font-bold text-hobbit-wood-darkest">
          {heading}
        </h2>
        {intro && (
          <p className="mb-5 max-w-[560px] font-hobbit-body text-[13px] leading-[1.75] text-hobbit-wood-medium">
            {intro}
          </p>
        )}

        {/* Map card */}
        <div className="overflow-hidden rounded-[10px] border border-hobbit-sand bg-hobbit-paper">
          <div className="relative aspect-video overflow-hidden bg-[#E8E2C8]">
            {/* Decorative map illustration */}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 800 450"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden
            >
              <defs>
                <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D8CEAA" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="800" height="450" fill="#EFE6CC" />
              <rect width="800" height="450" fill="url(#map-grid)" />
              {/* Lake Champlain suggestion */}
              <path
                d="M 0 80 Q 80 60 140 90 T 250 130 Q 240 200 180 240 T 60 280 L 0 300 Z"
                fill="#A8C8B8"
                opacity="0.55"
              />
              {/* Parks */}
              <path
                d="M 540 60 Q 620 40 700 90 Q 720 160 640 180 Q 560 170 540 100 Z"
                fill="#B8C8A0"
                opacity="0.6"
              />
              <path
                d="M 280 320 Q 360 310 420 360 Q 410 410 340 410 Q 280 400 280 350 Z"
                fill="#B8C8A0"
                opacity="0.55"
              />
              {/* Roads */}
              <line x1="0" y1="200" x2="800" y2="220" stroke="#FAF5EA" strokeWidth="6" />
              <line x1="0" y1="200" x2="800" y2="220" stroke="#D8CEAA" strokeWidth="1" />
              <line x1="180" y1="0" x2="220" y2="450" stroke="#FAF5EA" strokeWidth="5" />
              <line x1="500" y1="0" x2="540" y2="450" stroke="#FAF5EA" strokeWidth="5" />
              <line x1="0" y1="340" x2="800" y2="320" stroke="#FAF5EA" strokeWidth="4" />
              <line x1="350" y1="0" x2="380" y2="450" stroke="#FAF5EA" strokeWidth="3" />
              <line x1="100" y1="120" x2="600" y2="140" stroke="#FAF5EA" strokeWidth="2" opacity="0.7" />
              <line x1="220" y1="280" x2="780" y2="260" stroke="#FAF5EA" strokeWidth="2" opacity="0.7" />
              {/* Labels */}
              <text
                x="80"
                y="170"
                fontFamily="Courier Prime, monospace"
                fontSize="11"
                fill="#7A8E6A"
                opacity="0.7"
              >
                Lake Champlain
              </text>
              <text
                x="430"
                y="50"
                fontFamily="Courier Prime, monospace"
                fontSize="10"
                fill="#8B7A50"
                opacity="0.7"
              >
                North Ave
              </text>
              <text
                x="570"
                y="220"
                fontFamily="Courier Prime, monospace"
                fontSize="10"
                fill="#8B7A50"
                opacity="0.7"
              >
                Rt 127
              </text>
            </svg>

            {/* Pin */}
            <div
              className="absolute left-[56%] top-[48%] -translate-x-1/2 -translate-y-full"
              aria-hidden
            >
              <div className="h-[18px] w-[18px] rounded-full border-[3px] border-hobbit-paper bg-hobbit-gold-base shadow-[0_2px_6px_rgba(74,58,24,0.4)]" />
              <div className="-mt-0.5 mx-auto h-4 w-0.5 bg-hobbit-gold-base" />
            </div>

            {/* Address overlay */}
            <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-md bg-hobbit-paper px-3 py-2 shadow-[0_2px_8px_rgba(74,58,24,0.15)]">
              <div>
                <p className="font-hobbit-display text-[12.5px] font-bold text-hobbit-wood-darkest">
                  {workshopName}
                </p>
                <p className="font-hobbit-ui text-[10px] text-hobbit-wood-light">{address}</p>
              </div>
              {mapsHref && (
                <a
                  href={mapsHref}
                  className="font-hobbit-ui text-[10px] uppercase tracking-[0.06em] text-hobbit-gold-base underline underline-offset-2 hover:opacity-80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Maps →
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Visit tiles */}
        {tiles && tiles.length > 0 && (
          <div className="mt-3.5 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {tiles.map((tile) => (
              <div
                key={tile.heading}
                className="rounded-lg border border-hobbit-sand bg-hobbit-paper px-4 py-3.5"
              >
                <p className="mb-2 font-hobbit-ui text-[11px] tracking-[0.1em] text-hobbit-gold-base">
                  {tile.icon}
                </p>
                <p className="mb-1.5 font-hobbit-display text-[14px] font-bold text-hobbit-wood-darkest">
                  {tile.heading}
                </p>
                <p className="font-hobbit-body text-[12px] leading-[1.65] text-hobbit-wood-medium">
                  {tile.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </HobbitPageContainer>
    </section>
  );
}
