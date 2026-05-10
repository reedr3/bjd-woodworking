"use client";

import { useState } from "react";

import { cn } from "@/hobbit-library/utils/utils";

export const meta = {
  name: "HobbitNotifyStrip",
  description:
    "Inline email-signup strip for new-listing notifications with heading, subtext, and an inline email input.",
};

export type HobbitNotifyStripProps = {
  heading: string;
  subtext: string;
  placeholder?: string;
  buttonLabel?: string;
  onSubmit?: (email: string) => void;
  className?: string;
};

export function HobbitNotifyStrip({
  heading,
  subtext,
  placeholder = "your@email.com",
  buttonLabel = "Notify me",
  onSubmit,
  className,
}: HobbitNotifyStripProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    if (!email) return;
    onSubmit?.(email);
    setSubmitted(true);
    setEmail("");
  }

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-4 rounded-lg border border-hobbit-sand bg-hobbit-cream-warm px-4 py-3",
        className,
      )}
    >
      <div className="min-w-0 flex-1">
        <p className="mb-0.5 font-hobbit-display text-[13px] font-bold text-hobbit-wood-darkest">
          {heading}
        </p>
        <p className="font-hobbit-body text-[12px] leading-[1.55] text-hobbit-wood-medium">
          {subtext}
        </p>
      </div>
      {submitted ? (
        <p className="shrink-0 font-hobbit-ui text-[11px] text-hobbit-forest-base">
          ✓ You&apos;re on the list
        </p>
      ) : (
        <div className="flex shrink-0">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            placeholder={placeholder}
            className="w-36 rounded-l border border-r-0 border-hobbit-sand bg-hobbit-cream-light px-2.5 py-1.5 font-hobbit-body text-[11px] text-hobbit-wood-darkest outline-none placeholder:text-hobbit-wood-light focus:border-hobbit-gold-base"
          />
          <button
            onClick={handleSubmit}
            className="whitespace-nowrap rounded-r bg-hobbit-gold-base px-3 py-1.5 font-hobbit-ui text-[11px] text-hobbit-cream-light outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-hobbit-gold-base focus-visible:ring-offset-1"
          >
            {buttonLabel}
          </button>
        </div>
      )}
    </div>
  );
}
