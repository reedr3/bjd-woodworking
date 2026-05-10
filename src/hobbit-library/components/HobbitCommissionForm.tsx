"use client";

import { useState } from "react";
import { cn } from "@/hobbit-library/utils/utils";
import { HobbitFormStepper } from "./HobbitFormStepper";
import { HobbitTileSelector } from "./HobbitTileSelector";

export const meta = {
  name: "HobbitCommissionForm",
  description:
    "Four-step commission request form: piece type + description, dimensions + materials, budget + timeline, and contact details. Renders a confirmation state on submit.",
};

type FormData = {
  pieceType: string;
  description: string;
  inspiration: string;
  width: string;
  depth: string;
  woodPreference: string;
  finishPreference: string;
  budgetRange: string;
  timeline: string;
  name: string;
  email: string;
  phone: string;
};

export type HobbitCommissionFormStep = {
  label: string;
};

export type HobbitCommissionFormProps = {
  steps?: HobbitCommissionFormStep[];
  pieceTypeOptions?: { value: string; label: string; icon?: string }[];
  budgetOptions?: { value: string; label: string }[];
  woodOptions?: string[];
  finishOptions?: string[];
  timelineOptions?: string[];
  className?: string;
};

const DEFAULT_STEPS: HobbitCommissionFormStep[] = [
  { label: "Project" },
  { label: "Dimensions" },
  { label: "Budget" },
  { label: "Contact" },
];

const DEFAULT_PIECE_TYPES = [
  { value: "table", label: "Table", icon: "⬛" },
  { value: "seating", label: "Seating", icon: "🪑" },
  { value: "storage", label: "Storage", icon: "🗄" },
  { value: "other", label: "Other", icon: "📦" },
];

const DEFAULT_BUDGET_OPTIONS = [
  { value: "under-500", label: "Under $500" },
  { value: "500-1500", label: "$500–$1,500" },
  { value: "1500-3000", label: "$1,500–$3,000" },
  { value: "3000-plus", label: "$3,000+" },
];

const DEFAULT_WOOD_OPTIONS = [
  "Black Walnut",
  "White Oak",
  "Hard Maple",
  "Cherry",
  "Not sure — open to suggestions",
];

const DEFAULT_FINISH_OPTIONS = [
  "Natural oil (warm, matte)",
  "Hard wax oil (durable, matte)",
  "Satin lacquer",
  "Not sure — advise me",
];

const DEFAULT_TIMELINE_OPTIONS = [
  "Ready when it's ready",
  "Within 6 months",
  "Within 3 months",
  "I have a specific date in mind",
];

const inputClass =
  "w-full rounded-[5px] border border-hobbit-sand bg-[#F5EED8] px-3 py-[9px] font-hobbit-body text-[13px] text-hobbit-wood-darkest placeholder:text-[#B8A880] outline-none transition-colors focus:border-hobbit-gold-base";

const labelClass =
  "mb-1.5 block font-hobbit-ui text-[11px] uppercase tracking-[0.06em] text-hobbit-wood-light";

export function HobbitCommissionForm({
  steps = DEFAULT_STEPS,
  pieceTypeOptions = DEFAULT_PIECE_TYPES,
  budgetOptions = DEFAULT_BUDGET_OPTIONS,
  woodOptions = DEFAULT_WOOD_OPTIONS,
  finishOptions = DEFAULT_FINISH_OPTIONS,
  timelineOptions = DEFAULT_TIMELINE_OPTIONS,
  className,
}: HobbitCommissionFormProps) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState<FormData>({
    pieceType: pieceTypeOptions[0]?.value ?? "",
    description: "",
    inspiration: "",
    width: "",
    depth: "",
    woodPreference: woodOptions[0] ?? "",
    finishPreference: finishOptions[0] ?? "",
    budgetRange: "",
    timeline: timelineOptions[0] ?? "",
    name: "",
    email: "",
    phone: "",
  });

  function update(field: keyof FormData, value: string) {
    setData((prev) => ({ ...prev, [field]: value }));
  }

  function next() {
    if (step < steps.length) setStep((s) => s + 1);
    else setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={cn("overflow-hidden rounded-[10px] border border-hobbit-sand bg-hobbit-paper", className)}>
        <div className="px-6 py-12 text-center">
          <p className="mb-2 font-hobbit-ui text-[10px] uppercase tracking-[0.2em] text-hobbit-gold-dark">
            Request received
          </p>
          <h3 className="mb-3 font-hobbit-display text-[22px] font-bold text-hobbit-wood-darkest">
            Thank you{data.name ? `, ${data.name}` : ""}!
          </h3>
          <p className="mx-auto max-w-[400px] font-hobbit-body text-[13px] leading-[1.75] text-hobbit-wood-medium">
            We&apos;ll review your request and be in touch within 2 business days to schedule your
            free consultation call.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("overflow-hidden rounded-[10px] border border-hobbit-sand bg-hobbit-paper", className)}>
      <HobbitFormStepper steps={steps} currentStep={step} />

      <div className="p-6">
        {step === 1 && (
          <div>
            <p className="mb-1 font-hobbit-ui text-[10px] uppercase tracking-[0.15em] text-hobbit-gold-dark">
              Step 1 of {steps.length}
            </p>
            <h3 className="mb-1 font-hobbit-display text-[18px] font-bold text-hobbit-wood-darkest">
              What are you looking to have made?
            </h3>
            <p className="mb-5 font-hobbit-body text-[12px] text-hobbit-wood-medium">
              Choose a category and describe what you have in mind. Don&apos;t worry about details
              yet — that comes next.
            </p>

            <div className="mb-4">
              <span className={labelClass}>Piece type</span>
              <HobbitTileSelector
                options={pieceTypeOptions}
                value={data.pieceType}
                onChange={(v) => update("pieceType", v)}
              />
            </div>

            <div className="mb-4">
              <label className={labelClass} htmlFor="hcf-description">
                Describe what you have in mind
              </label>
              <textarea
                id="hcf-description"
                className={cn(inputClass, "h-20 resize-none")}
                placeholder="e.g. A dining table for 6–8 people, live edge if possible, to go in a modern farmhouse kitchen. I'd love walnut but open to suggestions..."
                value={data.description}
                onChange={(e) => update("description", e.target.value)}
              />
            </div>

            <div>
              <label className={labelClass} htmlFor="hcf-inspiration">
                Inspired by anything in the portfolio?
              </label>
              <input
                id="hcf-inspiration"
                type="text"
                className={inputClass}
                placeholder="e.g. The heirloom walnut dining table — something in that direction"
                value={data.inspiration}
                onChange={(e) => update("inspiration", e.target.value)}
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <p className="mb-1 font-hobbit-ui text-[10px] uppercase tracking-[0.15em] text-hobbit-gold-dark">
              Step 2 of {steps.length}
            </p>
            <h3 className="mb-1 font-hobbit-display text-[18px] font-bold text-hobbit-wood-darkest">
              Dimensions &amp; materials
            </h3>
            <p className="mb-5 font-hobbit-body text-[12px] text-hobbit-wood-medium">
              Give us your best estimate — nothing is locked in until the design phase.
            </p>

            <div className="mb-4 grid grid-cols-2 gap-3">
              <div>
                <label className={labelClass} htmlFor="hcf-width">
                  Approx. width
                </label>
                <input
                  id="hcf-width"
                  type="text"
                  className={inputClass}
                  placeholder='e.g. 72"'
                  value={data.width}
                  onChange={(e) => update("width", e.target.value)}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="hcf-depth">
                  Approx. depth
                </label>
                <input
                  id="hcf-depth"
                  type="text"
                  className={inputClass}
                  placeholder='e.g. 36"'
                  value={data.depth}
                  onChange={(e) => update("depth", e.target.value)}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className={labelClass} htmlFor="hcf-wood">
                Wood preference
              </label>
              <select
                id="hcf-wood"
                className={cn(inputClass, "appearance-none")}
                value={data.woodPreference}
                onChange={(e) => update("woodPreference", e.target.value)}
              >
                {woodOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label className={labelClass} htmlFor="hcf-finish">
                Finish preference
              </label>
              <select
                id="hcf-finish"
                className={cn(inputClass, "appearance-none")}
                value={data.finishPreference}
                onChange={(e) => update("finishPreference", e.target.value)}
              >
                {finishOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <p className="mb-1 font-hobbit-ui text-[10px] uppercase tracking-[0.15em] text-hobbit-gold-dark">
              Step 3 of {steps.length}
            </p>
            <h3 className="mb-1 font-hobbit-display text-[18px] font-bold text-hobbit-wood-darkest">
              Budget &amp; timeline
            </h3>
            <p className="mb-5 font-hobbit-body text-[12px] text-hobbit-wood-medium">
              This helps us make the right recommendations. All estimates are confirmed in the design
              phase before anything is committed.
            </p>

            <div className="mb-4">
              <span className={labelClass}>Approximate budget</span>
              <HobbitTileSelector
                options={budgetOptions}
                value={data.budgetRange}
                onChange={(v) => update("budgetRange", v)}
                columns={2}
              />
            </div>

            <div>
              <label className={labelClass} htmlFor="hcf-timeline">
                Timeline flexibility
              </label>
              <select
                id="hcf-timeline"
                className={cn(inputClass, "appearance-none")}
                value={data.timeline}
                onChange={(e) => update("timeline", e.target.value)}
              >
                {timelineOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <p className="mb-1 font-hobbit-ui text-[10px] uppercase tracking-[0.15em] text-hobbit-gold-dark">
              Step 4 of {steps.length}
            </p>
            <h3 className="mb-1 font-hobbit-display text-[18px] font-bold text-hobbit-wood-darkest">
              Your contact details
            </h3>
            <p className="mb-5 font-hobbit-body text-[12px] text-hobbit-wood-medium">
              We&apos;ll reach out within 2 business days to schedule your free 30-minute
              consultation.
            </p>

            <div className="mb-4">
              <label className={labelClass} htmlFor="hcf-name">
                Full name
              </label>
              <input
                id="hcf-name"
                type="text"
                className={inputClass}
                placeholder="Your name"
                value={data.name}
                onChange={(e) => update("name", e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className={labelClass} htmlFor="hcf-email">
                Email address
              </label>
              <input
                id="hcf-email"
                type="email"
                className={inputClass}
                placeholder="you@example.com"
                value={data.email}
                onChange={(e) => update("email", e.target.value)}
              />
            </div>

            <div>
              <label className={labelClass} htmlFor="hcf-phone">
                Phone{" "}
                <span className="normal-case tracking-normal opacity-60">(optional)</span>
              </label>
              <input
                id="hcf-phone"
                type="tel"
                className={inputClass}
                placeholder="For a quicker reply"
                value={data.phone}
                onChange={(e) => update("phone", e.target.value)}
              />
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between border-t border-[#E8DECC] bg-hobbit-cream-warm px-6 py-4">
        {step > 1 ? (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="rounded border border-[#C8CEAA] bg-transparent px-[18px] py-2 font-hobbit-ui text-[11px] uppercase tracking-[0.05em] text-hobbit-wood-light transition-colors hover:border-hobbit-sand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hobbit-gold-base focus-visible:ring-offset-2"
          >
            ← Back
          </button>
        ) : (
          <p className="font-hobbit-ui text-[10px] text-hobbit-gold-dark">
            No commitment — we&apos;ll review and reach out within 2 business days
          </p>
        )}
        <button
          type="button"
          onClick={next}
          className="rounded bg-hobbit-gold-base px-[22px] py-2 font-hobbit-ui text-[11px] uppercase tracking-[0.05em] text-hobbit-cream-light transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hobbit-gold-base focus-visible:ring-offset-2"
        >
          {step < steps.length ? `Next: ${steps[step]?.label} →` : "Submit request"}
        </button>
      </div>
    </div>
  );
}
