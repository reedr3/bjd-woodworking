"use client";

import { useRef, useState } from "react";
import { cn } from "@/hobbit-library/utils/utils";
import { HobbitFormStepper } from "@/hobbit-library/components/HobbitFormStepper";

/* ─── types ─────────────────────────────────────────────────────────────── */

type FormData = {
  pieceType: string;
  woodPreference: string;
  dimensions: string;
  budgetRange: string;
  description: string;
  name: string;
  email: string;
  phone: string;
};

type AttachedFile = { name: string; id: string };

/* ─── constants ──────────────────────────────────────────────────────────── */

const STEPS = [
  { label: "Your piece" },
  { label: "Details & budget" },
  { label: "Contact info" },
];

const PIECE_TYPES = [
  "Dining table",
  "Sideboard / credenza",
  "Desk",
  "Bookshelf",
  "Bed frame",
  "Coffee table",
  "Seating",
  "Built-in",
  "Other",
];

const WOOD_OPTIONS = [
  "Black walnut",
  "White oak",
  "Cherry",
  "Maple",
  "Open to suggestion",
];

const BUDGET_RANGES = [
  "Under $1,500",
  "$1,500 – $3,500",
  "$3,500 – $7,000",
  "$7,000+",
];

/* ─── shared style tokens ────────────────────────────────────────────────── */

const inputCls =
  "w-full rounded-md border border-hobbit-sand bg-hobbit-paper px-3 py-[9px] font-hobbit-body text-[13px] text-hobbit-wood-darkest placeholder:text-hobbit-wood-light/60 outline-none transition-colors focus:border-hobbit-gold-base";

const fieldLabelCls =
  "mb-1.5 block font-hobbit-ui text-[10px] uppercase tracking-[0.1em] text-hobbit-gold-dark";

/* ─── sub-components ─────────────────────────────────────────────────────── */

function Chip({
  label,
  selected,
  green,
  onClick,
}: {
  label: string;
  selected: boolean;
  green?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-[11px] py-[5px] font-hobbit-ui text-[10.5px] tracking-[0.04em] transition-colors",
        !selected && "border-hobbit-sand bg-hobbit-paper text-hobbit-wood-light hover:border-hobbit-gold-base/60",
        selected && !green && "border-hobbit-gold-base bg-hobbit-gold-base/10 text-hobbit-gold-dark",
        selected && green && "border-hobbit-forest-light bg-hobbit-forest-light/15 text-hobbit-forest-dark",
      )}
    >
      {label}
    </button>
  );
}

function BudgetPill({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-md border px-2 py-[9px] text-center font-hobbit-ui text-[11px] transition-colors",
        !selected && "border-hobbit-sand bg-hobbit-paper text-hobbit-wood-light hover:border-hobbit-gold-base/60",
        selected && "border-hobbit-gold-base bg-hobbit-gold-base/10 font-bold text-hobbit-gold-dark",
      )}
    >
      {label}
    </button>
  );
}

/* ─── main component ─────────────────────────────────────────────────────── */

export function CommissionFormV2() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [files, setFiles] = useState<AttachedFile[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);

  const [data, setData] = useState<FormData>({
    pieceType: "",
    woodPreference: "",
    dimensions: "",
    budgetRange: "",
    description: "",
    name: "",
    email: "",
    phone: "",
  });

  function update<K extends keyof FormData>(field: K, value: FormData[K]) {
    setData((prev) => ({ ...prev, [field]: value }));
  }

  function handleFiles(incoming: FileList | null) {
    if (!incoming) return;
    const next: AttachedFile[] = Array.from(incoming).map((f) => ({
      name: f.name,
      id: `${f.name}-${f.size}`,
    }));
    setFiles((prev) => {
      const existing = new Set(prev.map((f) => f.id));
      return [...prev, ...next.filter((f) => !existing.has(f.id))].slice(0, 10);
    });
  }

  function removeFile(id: string) {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  }

  function next() {
    if (step < 3) setStep((s) => s + 1);
    else setSubmitted(true);
  }

  /* ── success screen ── */
  if (submitted) {
    return (
      <div className="overflow-hidden rounded-[10px] border border-hobbit-sand bg-hobbit-paper">
        <div className="px-7 py-14 text-center">
          <p className="mb-2 font-hobbit-ui text-[10px] uppercase tracking-[0.2em] text-hobbit-gold-dark">
            Request received
          </p>
          <h3 className="mb-3 font-hobbit-display text-[22px] font-bold text-hobbit-wood-darkest">
            Thank you{data.name ? `, ${data.name}` : ""}!
          </h3>
          <p className="mx-auto max-w-[400px] font-hobbit-body text-[13px] leading-[1.75] text-hobbit-wood-medium">
            I&apos;ll review your request and be in touch within 48 hours to schedule a free
            30-minute consultation.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[10px] border border-hobbit-sand bg-hobbit-paper">
      <HobbitFormStepper steps={STEPS} currentStep={step} />

      <div className="grid grid-cols-1 gap-4 p-7 sm:grid-cols-2">
        {/* ── Step 1: Your piece ── */}
        {step === 1 && (
          <>
            <div className="sm:col-span-2">
              <span className={fieldLabelCls}>
                What kind of piece are you imagining?{" "}
                <span className="text-hobbit-gold-base">*</span>
              </span>
              <div className="flex flex-wrap gap-1.5">
                {PIECE_TYPES.map((opt) => (
                  <Chip
                    key={opt}
                    label={opt}
                    selected={data.pieceType === opt}
                    onClick={() => update("pieceType", data.pieceType === opt ? "" : opt)}
                  />
                ))}
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className={fieldLabelCls} htmlFor="cfv2-description">
                Tell me about the piece
              </label>
              <textarea
                id="cfv2-description"
                className={cn(inputCls, "min-h-[90px] resize-y leading-[1.6]")}
                placeholder="What's the room like? Any references or other furniture you're trying to fit alongside? Anything that inspired this idea?"
                value={data.description}
                onChange={(e) => update("description", e.target.value)}
              />
            </div>
          </>
        )}

        {/* ── Step 2: Details & budget ── */}
        {step === 2 && (
          <>
            <div>
              <span className={fieldLabelCls}>Wood preference</span>
              <div className="flex flex-wrap gap-1.5">
                {WOOD_OPTIONS.map((opt) => (
                  <Chip
                    key={opt}
                    label={opt}
                    selected={data.woodPreference === opt}
                    green
                    onClick={() =>
                      update("woodPreference", data.woodPreference === opt ? "" : opt)
                    }
                  />
                ))}
              </div>
            </div>

            <div>
              <label className={fieldLabelCls} htmlFor="cfv2-dimensions">
                Approximate dimensions
              </label>
              <input
                id="cfv2-dimensions"
                type="text"
                className={inputCls}
                placeholder='e.g. 72" × 20" × 34"'
                value={data.dimensions}
                onChange={(e) => update("dimensions", e.target.value)}
              />
              <p className="mt-1 font-hobbit-body text-[11px] italic text-hobbit-wood-light">
                Length × depth × height — rough is fine.
              </p>
            </div>

            <div className="sm:col-span-2">
              <span className={fieldLabelCls}>
                Budget range <span className="text-hobbit-gold-base">*</span>
              </span>
              <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4">
                {BUDGET_RANGES.map((opt) => (
                  <BudgetPill
                    key={opt}
                    label={opt}
                    selected={data.budgetRange === opt}
                    onClick={() =>
                      update("budgetRange", data.budgetRange === opt ? "" : opt)
                    }
                  />
                ))}
              </div>
            </div>

            <div className="sm:col-span-2">
              <span className={fieldLabelCls}>
                Reference photos or sketches{" "}
                <span className="font-hobbit-body normal-case italic tracking-normal text-hobbit-wood-light">
                  (optional)
                </span>
              </span>
              <div
                className="cursor-pointer rounded-lg border-[1.5px] border-dashed border-hobbit-gold-base bg-hobbit-gold-base/[0.05] p-5 text-center"
                onClick={() => fileRef.current?.click()}
                onKeyDown={(e) => e.key === "Enter" && fileRef.current?.click()}
                role="button"
                tabIndex={0}
                aria-label="Upload reference photos"
              >
                <p className="mb-1 text-[22px] text-hobbit-gold-dark" aria-hidden>
                  ↑
                </p>
                <p className="mb-0.5 font-hobbit-display text-[13px] font-bold text-hobbit-wood-darkest">
                  Drop images here or click to browse
                </p>
                <p className="font-hobbit-body text-[11px] text-hobbit-wood-light">
                  JPG, PNG, PDF · up to 10 files, 25 MB total
                </p>
                {files.length > 0 && (
                  <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                    {files.map((f) => (
                      <span
                        key={f.id}
                        className="inline-flex items-center gap-1.5 rounded-full border border-hobbit-sand bg-hobbit-cream-warm px-2.5 py-1 font-hobbit-ui text-[10.5px] text-hobbit-wood-darkest"
                      >
                        📎 {f.name}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFile(f.id);
                          }}
                          className="text-hobbit-gold-dark hover:text-hobbit-wood-darkest"
                          aria-label={`Remove ${f.name}`}
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <input
                ref={fileRef}
                type="file"
                multiple
                accept=".jpg,.jpeg,.png,.pdf"
                className="sr-only"
                onChange={(e) => handleFiles(e.target.files)}
              />
            </div>
          </>
        )}

        {/* ── Step 3: Contact info ── */}
        {step === 3 && (
          <>
            <div>
              <label className={fieldLabelCls} htmlFor="cfv2-name">
                Full name <span className="text-hobbit-gold-base">*</span>
              </label>
              <input
                id="cfv2-name"
                type="text"
                className={inputCls}
                placeholder="Your name"
                value={data.name}
                onChange={(e) => update("name", e.target.value)}
              />
            </div>

            <div>
              <label className={fieldLabelCls} htmlFor="cfv2-email">
                Email address <span className="text-hobbit-gold-base">*</span>
              </label>
              <input
                id="cfv2-email"
                type="email"
                className={inputCls}
                placeholder="you@example.com"
                value={data.email}
                onChange={(e) => update("email", e.target.value)}
              />
            </div>

            <div className="sm:col-span-2">
              <label className={fieldLabelCls} htmlFor="cfv2-phone">
                Phone{" "}
                <span className="font-hobbit-body normal-case italic tracking-normal text-hobbit-wood-light">
                  (optional)
                </span>
              </label>
              <input
                id="cfv2-phone"
                type="tel"
                className={inputCls}
                placeholder="For a quicker reply"
                value={data.phone}
                onChange={(e) => update("phone", e.target.value)}
              />
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-hobbit-sand bg-hobbit-cream-warm px-7 py-4">
        {step > 1 ? (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="rounded border border-hobbit-sand bg-transparent px-[18px] py-2 font-hobbit-ui text-[11px] uppercase tracking-[0.05em] text-hobbit-wood-light transition-colors hover:border-hobbit-gold-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hobbit-gold-base focus-visible:ring-offset-2"
          >
            ← Back
          </button>
        ) : (
          <p className="font-hobbit-ui text-[10.5px] text-hobbit-wood-light">
            Step {step} of {STEPS.length} · auto-saved
          </p>
        )}
        <button
          type="button"
          onClick={next}
          className="rounded bg-hobbit-gold-base px-5 py-2 font-hobbit-ui text-[11px] uppercase tracking-[0.05em] text-hobbit-cream-light transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hobbit-gold-base focus-visible:ring-offset-2"
        >
          {step < 3 ? "Continue →" : "Submit request"}
        </button>
      </div>
    </div>
  );
}
