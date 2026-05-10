"use client";

import { useState } from "react";
import {
  HobbitGalleryCard,
  HobbitGalleryFilterBar,
  HobbitPageContainer,
  type HobbitGalleryCardTag,
  type HobbitGalleryCardTone,
} from "@/hobbit-library/components";
import { PortfolioLightbox } from "./PortfolioLightbox";

export type PortfolioPieceSpec = { label: string; value: string };

export type PortfolioPiece = {
  id: string;
  category: string;
  title: string;
  spec: string;
  tags: HobbitGalleryCardTag[];
  featured?: boolean;
  blockTone?: HobbitGalleryCardTone;
  year?: string;
  description: string;
  detailSpecs: PortfolioPieceSpec[];
};

const ALL_FILTER = "All work";

const FILTERS = [ALL_FILTER, "Tables", "Seating", "Storage", "Desks", "Shelving", "Accessories"];

const PIECES: PortfolioPiece[] = [
  {
    id: "walnut-dining-table",
    category: "Tables",
    title: "Heirloom walnut dining table",
    spec: "Black Walnut · 96″ × 42″ · Commissioned 2024",
    tags: [{ label: "Commissioned" }, { label: "Featured" }],
    featured: true,
    blockTone: "gold",
    year: "2024",
    description:
      "Bookmatched black walnut slabs with hand-cut mortise and tenon joinery. Finished with three coats of Danish oil. Built to seat eight comfortably.",
    detailSpecs: [
      { label: "Wood", value: "Black Walnut" },
      { label: "Dimensions", value: "96″ × 42″ × 30″" },
      { label: "Finish", value: "Danish oil" },
      { label: "Lead time", value: "10–14 weeks" },
    ],
  },
  {
    id: "white-oak-sideboard",
    category: "Storage",
    title: "White oak sideboard",
    spec: "White Oak · 72″ × 20″ × 34″",
    tags: [{ label: "Available in shop" }],
    blockTone: "sage",
    description:
      "White oak sideboard with hand-fitted drawers and inset doors. Finished in a satin hardwax oil.",
    detailSpecs: [
      { label: "Wood", value: "White Oak" },
      { label: "Dimensions", value: "72″ × 20″ × 34″" },
      { label: "Finish", value: "Hardwax oil" },
      { label: "Status", value: "Available" },
    ],
  },
  {
    id: "cherry-writing-desk",
    category: "Desks",
    title: "Cherry writing desk",
    spec: "Cherry · 54″ × 28″ · 2023",
    tags: [{ label: "Sold", variant: "gold" }],
    blockTone: "rich",
    year: "2023",
    description:
      "A compact writing desk in figured cherry with a single full-width drawer and tapered legs.",
    detailSpecs: [
      { label: "Wood", value: "Cherry" },
      { label: "Dimensions", value: "54″ × 28″ × 30″" },
      { label: "Finish", value: "Shellac" },
      { label: "Status", value: "Sold" },
    ],
  },
  {
    id: "maple-dining-chairs",
    category: "Seating",
    title: "Maple dining chairs",
    spec: "Hard Maple · Set of 6 · 2024",
    tags: [{ label: "Commissioned" }],
    blockTone: "sage",
    year: "2024",
    description:
      "A set of six dining chairs in hard maple, with hand-woven rush seats and through-tenon backs.",
    detailSpecs: [
      { label: "Wood", value: "Hard Maple" },
      { label: "Quantity", value: "Set of 6" },
      { label: "Finish", value: "Danish oil" },
      { label: "Lead time", value: "12 weeks" },
    ],
  },
  {
    id: "walnut-bookshelf",
    category: "Shelving",
    title: "Walnut bookshelf",
    spec: "Black Walnut · 36″ × 12″ × 78″",
    tags: [{ label: "Available in shop" }],
    blockTone: "gold",
    description:
      "Floor-to-ceiling walnut shelving with adjustable shelves and a hand-rubbed oil finish.",
    detailSpecs: [
      { label: "Wood", value: "Black Walnut" },
      { label: "Dimensions", value: "36″ × 12″ × 78″" },
      { label: "Finish", value: "Hand-rubbed oil" },
      { label: "Status", value: "Available" },
    ],
  },
  {
    id: "oak-coffee-table",
    category: "Tables",
    title: "Oak coffee table",
    spec: "White Oak · 52″ × 26″ · 2023",
    tags: [{ label: "Sold", variant: "gold" }],
    blockTone: "olive",
    year: "2023",
    description:
      "A low coffee table in white oak with a live-edge apron and hand-carved legs.",
    detailSpecs: [
      { label: "Wood", value: "White Oak" },
      { label: "Dimensions", value: "52″ × 26″ × 18″" },
      { label: "Finish", value: "Danish oil" },
      { label: "Status", value: "Sold" },
    ],
  },
];

export function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState(ALL_FILTER);
  const [activePiece, setActivePiece] = useState<PortfolioPiece | null>(null);

  const filtered =
    activeFilter === ALL_FILTER
      ? PIECES
      : PIECES.filter((p) => p.category === activeFilter);

  return (
    <>
      <HobbitGalleryFilterBar
        filters={FILTERS}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <section className="bg-hobbit-cream-light py-8">
        <HobbitPageContainer>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((piece) => (
              <HobbitGalleryCard
                key={piece.id}
                category={piece.category}
                title={piece.title}
                spec={piece.spec}
                tags={piece.tags}
                featured={piece.featured}
                blockTone={piece.blockTone}
                onClick={() => setActivePiece(piece)}
                className={piece.featured ? "sm:col-span-2" : undefined}
              />
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="inline-block rounded border border-hobbit-gold-base px-7 py-2.5 font-hobbit-ui text-[12px] uppercase tracking-[0.07em] text-hobbit-gold-dark transition-opacity hover:opacity-75">
              Load more pieces
            </button>
          </div>
        </HobbitPageContainer>
      </section>

      {activePiece && (
        <PortfolioLightbox piece={activePiece} onClose={() => setActivePiece(null)} />
      )}
    </>
  );
}
