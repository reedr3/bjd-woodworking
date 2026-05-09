import type { ReactNode } from "react";

export const meta = {
  name: "HobbitPageShell",
  description: "Full-viewport page wrapper with cream background and body typography defaults.",
};

export function HobbitPageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-hobbit-cream-base font-hobbit-body text-hobbit-wood-darkest antialiased">
      {children}
    </div>
  );
}
