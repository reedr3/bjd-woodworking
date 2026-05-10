import type { ReactNode } from "react";

import { cn } from "@/hobbit-library/utils/utils";

export const meta = {
  name: "HobbitPageContainer",
  description: "Centered content column with shared hobbit page gutter and max width.",
};

export type HobbitPageContainerProps = {
  children: ReactNode;
  className?: string;
  /** default 1200px; narrow for featured testimonial and similar reading-width blocks */
  maxWidth?: "page" | "narrow";
};

export function HobbitPageContainer({
  children,
  className,
  maxWidth = "page",
}: HobbitPageContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-hobbit-page",
        maxWidth === "page" && "max-w-hobbit-page",
        maxWidth === "narrow" && "max-w-hobbit-narrow",
        className,
      )}
    >
      {children}
    </div>
  );
}
