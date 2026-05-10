"use client";

import { useState } from "react";
import { cn } from "@/hobbit-library/utils/utils";

const TOPICS = [
  "Question about a piece",
  "Repair / restoration",
  "Press / interview",
  "Visit the workshop",
  "Something else",
] as const;

type Topic = (typeof TOPICS)[number];

export function ContactForm() {
  const [selectedTopics, setSelectedTopics] = useState<Set<Topic>>(new Set());
  const [newsletter, setNewsletter] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function toggleTopic(topic: Topic) {
    setSelectedTopics((prev) => {
      const next = new Set(prev);
      next.has(topic) ? next.delete(topic) : next.add(topic);
      return next;
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex min-h-[320px] flex-col items-center justify-center rounded-[10px] border border-hobbit-sand bg-hobbit-paper px-6 py-10 text-center">
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-hobbit-forest-base/20 font-hobbit-ui text-[18px] text-hobbit-forest-base">
          ✓
        </div>
        <p className="mb-1 font-hobbit-display text-[17px] font-bold text-hobbit-wood-darkest">
          Message sent
        </p>
        <p className="max-w-[300px] font-hobbit-body text-[12.5px] leading-[1.65] text-hobbit-wood-medium">
          Thanks — I'll read it and get back to you, usually within a day or two.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="overflow-hidden rounded-[10px] border border-hobbit-sand bg-hobbit-paper"
    >
      {/* Header */}
      <div className="border-b border-hobbit-sand bg-hobbit-cream-warm px-5 py-4">
        <p className="mb-0.5 font-hobbit-display text-[16px] font-bold text-hobbit-wood-darkest">
          Send a message
        </p>
        <p className="font-hobbit-body text-[12px] leading-[1.5] text-hobbit-wood-medium">
          For a commission request, the dedicated{" "}
          <a href="/commissions" className="text-hobbit-gold-base underline underline-offset-2">
            commissions form
          </a>{" "}
          has the right questions baked in. Anything else, this is the place.
        </p>
      </div>

      {/* Fields */}
      <div className="grid gap-3.5 px-5 py-5">
        {/* Name + Email row */}
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label className="font-hobbit-ui text-[10px] uppercase tracking-[0.1em] text-hobbit-gold-dark">
              Your name <span className="text-hobbit-gold-base">*</span>
            </label>
            <input
              required
              type="text"
              placeholder="Sarah Mitchell"
              className="rounded-md border border-hobbit-sand bg-hobbit-cream-light px-3 py-2 font-hobbit-body text-[13px] text-hobbit-wood-darkest placeholder:text-hobbit-wood-light/60 focus:border-hobbit-gold-base focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-hobbit-ui text-[10px] uppercase tracking-[0.1em] text-hobbit-gold-dark">
              Email <span className="text-hobbit-gold-base">*</span>
            </label>
            <input
              required
              type="email"
              placeholder="you@example.com"
              className="rounded-md border border-hobbit-sand bg-hobbit-cream-light px-3 py-2 font-hobbit-body text-[13px] text-hobbit-wood-darkest placeholder:text-hobbit-wood-light/60 focus:border-hobbit-gold-base focus:outline-none"
            />
          </div>
        </div>

        {/* Topic chips */}
        <div className="flex flex-col gap-1.5">
          <span className="font-hobbit-ui text-[10px] uppercase tracking-[0.1em] text-hobbit-gold-dark">
            What's this about?
          </span>
          <div className="flex flex-wrap gap-1.5">
            {TOPICS.map((topic) => {
              const selected = selectedTopics.has(topic);
              return (
                <button
                  key={topic}
                  type="button"
                  onClick={() => toggleTopic(topic)}
                  className={cn(
                    "rounded-full border px-2.5 py-1 font-hobbit-ui text-[10.5px] tracking-[0.04em] transition-colors",
                    selected
                      ? "border-hobbit-gold-base bg-hobbit-gold-base/15 text-hobbit-gold-dark"
                      : "border-hobbit-sand bg-hobbit-cream-light text-hobbit-wood-light hover:border-hobbit-gold-base/50",
                  )}
                >
                  {topic}
                </button>
              );
            })}
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <label className="font-hobbit-ui text-[10px] uppercase tracking-[0.1em] text-hobbit-gold-dark">
            Message <span className="text-hobbit-gold-base">*</span>
          </label>
          <textarea
            required
            rows={5}
            placeholder="Hi Bridget — …"
            className="resize-y rounded-md border border-hobbit-sand bg-hobbit-cream-light px-3 py-2 font-hobbit-body text-[13px] leading-[1.65] text-hobbit-wood-darkest placeholder:text-hobbit-wood-light/60 focus:border-hobbit-gold-base focus:outline-none"
          />
        </div>

        {/* Newsletter opt-in */}
        <button
          type="button"
          onClick={() => setNewsletter((v) => !v)}
          className="flex items-start gap-2.5 text-left"
        >
          <span
            className={cn(
              "mt-0.5 h-3.5 w-3.5 flex-shrink-0 rounded-[3px] border transition-colors",
              newsletter
                ? "border-hobbit-gold-base bg-hobbit-gold-base"
                : "border-hobbit-gold-base bg-transparent",
            )}
            aria-hidden
          />
          <span className="font-hobbit-body text-[12.5px] leading-[1.55] text-hobbit-wood-medium">
            Add me to the newsletter — new shop pieces &amp; workshop notes, ~4 times a year.
          </span>
        </button>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-hobbit-sand bg-hobbit-cream-warm px-5 py-3.5">
        <span className="font-hobbit-ui text-[10.5px] text-hobbit-wood-light">
          Goes straight to my inbox · no autoresponder
        </span>
        <button
          type="submit"
          className="rounded bg-hobbit-gold-base px-5 py-2 font-hobbit-ui text-[11px] uppercase tracking-[0.05em] text-hobbit-cream-light transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hobbit-gold-base focus-visible:ring-offset-2"
        >
          Send message →
        </button>
      </div>
    </form>
  );
}
