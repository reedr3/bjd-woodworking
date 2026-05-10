"use client";

import { useState, useEffect } from "react";
import type { PortfolioPiece } from "./PortfolioGallery";

export type PortfolioLightboxProps = {
  piece: PortfolioPiece;
  onClose: () => void;
};

const IMAGE_COUNT = 4;

export function PortfolioLightbox({ piece, onClose }: PortfolioLightboxProps) {
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    setActiveImg(0);
  }, [piece.id]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  // Prevent background scroll while open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-hobbit-wood-darkest/80 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl overflow-hidden rounded-lg border border-hobbit-gold-dark/50"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal
        aria-label={piece.title}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-hobbit-wood-darkest px-5 py-3">
          <span className="font-hobbit-ui text-[10px] uppercase tracking-[0.15em] text-hobbit-gold-dark">
            Piece detail — {piece.category}
          </span>
          <button
            onClick={onClose}
            className="font-hobbit-ui text-[12px] text-hobbit-forest-pale transition-colors hover:text-hobbit-cream-light"
          >
            ✕ Close
          </button>
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 sm:grid-cols-[3fr_2fr]">
          {/* Image block with carousel dots */}
          <div className="relative flex min-h-[180px] items-center justify-center bg-hobbit-gold-thumb/70 sm:min-h-[240px]">
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
              {Array.from({ length: IMAGE_COUNT }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  aria-label={`Image ${i + 1}`}
                  className={[
                    "h-1.5 w-1.5 rounded-full transition-all",
                    i === activeImg
                      ? "bg-hobbit-gold-base opacity-100"
                      : "bg-hobbit-cream-light opacity-40",
                  ].join(" ")}
                />
              ))}
            </div>
          </div>

          {/* Info panel */}
          <div className="bg-hobbit-wood-darkest px-5 py-5">
            <p className="mb-1.5 font-hobbit-ui text-[10px] uppercase tracking-[0.1em] text-hobbit-gold-dark">
              {piece.category}
              {piece.year ? ` · ${piece.year}` : ""}
            </p>
            <h2 className="mb-2 font-hobbit-display text-[17px] font-bold leading-snug text-hobbit-cream-light">
              {piece.title}
            </h2>
            <p className="mb-4 font-hobbit-body text-[11px] leading-[1.7] text-hobbit-gold-light">
              {piece.description}
            </p>

            <div className="divide-y divide-hobbit-wood-medium/30">
              {piece.detailSpecs.map((s) => (
                <div key={s.label} className="flex justify-between py-1.5">
                  <span className="font-hobbit-ui text-[10px] uppercase tracking-[0.06em] text-hobbit-wood-light">
                    {s.label}
                  </span>
                  <span className="font-hobbit-ui text-[10px] text-hobbit-cream-warm">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <a
                href="/commissions"
                className="rounded bg-hobbit-gold-base px-3 py-2 text-center font-hobbit-ui text-[11px] uppercase tracking-[0.05em] text-hobbit-cream-light transition-opacity hover:opacity-80"
              >
                Commission something similar
              </a>
              <button className="rounded border border-hobbit-forest-light px-3 py-2 font-hobbit-ui text-[11px] uppercase tracking-[0.05em] text-hobbit-forest-light transition-opacity hover:opacity-80">
                View more photos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
