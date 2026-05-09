import type { ReactNode } from "react";

export function HobbitPageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-hobbit-cream-base font-hobbit-body text-hobbit-wood-darkest antialiased">
      {children}
    </div>
  );
}
