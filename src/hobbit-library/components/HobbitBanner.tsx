import type { ReactNode } from "react";

export function HobbitBanner({ children }: { children: ReactNode }) {
  return (
    <div className="bg-hobbit-forest-dark py-3 text-center font-hobbit-ui text-[0.72rem] uppercase tracking-[0.12em] text-hobbit-forest-light">
      {children}
    </div>
  );
}
