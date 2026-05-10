import { cn } from "@/hobbit-library/utils/utils";
import { HobbitPageContainer } from "./HobbitPageContainer";

export const meta = {
  name: "HobbitMaterialsGrid",
  description:
    "Wood-swatch card grid: a colored swatch block above the material name and sourcing spec.",
};

export type HobbitMaterial = {
  name: string;
  spec: string;
  swatchColor: string;
};

export type HobbitMaterialsGridProps = {
  eyebrow?: string;
  heading: string;
  intro?: string;
  materials: HobbitMaterial[];
  className?: string;
};

export function HobbitMaterialsGrid({
  eyebrow,
  heading,
  intro,
  materials,
  className,
}: HobbitMaterialsGridProps) {
  return (
    <section className={cn("bg-[#EDE0B8] py-9", className)}>
      <HobbitPageContainer>
        {eyebrow && (
          <p className="mb-1.5 font-hobbit-ui text-[10px] uppercase tracking-[0.18em] text-hobbit-gold-dark">
            {eyebrow}
          </p>
        )}
        <div className="mb-1 h-0.5 w-9 rounded-[1px] bg-hobbit-gold-base" aria-hidden />
        <h2 className="mb-3 font-hobbit-display text-[22px] font-bold text-hobbit-wood-darkest">
          {heading}
        </h2>
        {intro && (
          <p className="mb-5 max-w-[580px] font-hobbit-body text-[13px] leading-[1.75] text-hobbit-wood-medium">
            {intro}
          </p>
        )}

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-5">
          {materials.map((mat) => (
            <div
              key={mat.name}
              className="overflow-hidden rounded-lg border border-hobbit-sand bg-hobbit-paper"
            >
              <div className="aspect-[1.4]" style={{ background: mat.swatchColor }} />
              <div className="px-2.5 pb-3 pt-2">
                <p className="font-hobbit-display text-[12.5px] font-bold text-hobbit-wood-darkest">
                  {mat.name}
                </p>
                <p className="mt-0.5 font-hobbit-ui text-[9.5px] leading-[1.4] text-hobbit-gold-dark">
                  {mat.spec}
                </p>
              </div>
            </div>
          ))}
        </div>
      </HobbitPageContainer>
    </section>
  );
}
