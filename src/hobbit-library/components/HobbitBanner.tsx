import type { ReactNode } from "react";

export const meta = {
  name: "HobbitBanner",
  description: "Full-width top strip for announcements or page context in forest tones.",
};

export function HobbitBanner({ children }: { children: ReactNode }) {
  return (
    <div className="bg-hobbit-forest-dark py-3 text-center font-hobbit-ui text-[0.72rem] uppercase tracking-[0.12em] text-hobbit-forest-light">
      {children}
    </div>
  );
}
