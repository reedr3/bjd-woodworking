import HobbitHolePreview from "@/hobbit-library/components/HobbitHolePreview";
import { notFound } from "next/navigation";

export default function HobbitLibraryPage() {
  if (process.env.NODE_ENV !== "development") {
    notFound();
  }

  return (
    <main className="flex flex-col">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">Hobbit Library</h1>
          <p className="text-base text-neutral-600">
            Dev-only index page for tokens and reusable components.
          </p>
        </header>

        <section className="mt-10 space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">Status</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-700">
            <li>
              Design tokens use Tailwind v4{" "}
              <code className="font-mono">@theme inline</code> in CSS: base app theme in{" "}
              <code className="font-mono">src/app/globals.css</code>, Hobbit Hole in{" "}
              <code className="font-mono">src/hobbit-library/styles/hobbit-hole-theme.css</code>{" "}
              (with <code className="font-mono">:root</code> variables where needed).{" "}
              <code className="font-mono">tailwind.config.js</code> is a minimal stub; content paths use{" "}
              <code className="font-mono">@source</code> in <code className="font-mono">globals.css</code>.
            </li>
            <li>
              Components live in{" "}
              <code className="font-mono">src/hobbit-library/components/</code> and should export a{" "}
              default component plus a named <code className="font-mono">meta</code> object.
            </li>
            <li>
              The AI reference doc is generated at{" "}
              <code className="font-mono">src/hobbit-library/index.md</code> via{" "}
              <code className="font-mono">npm run hobbit-library:docs</code>.
            </li>
          </ul>
        </section>
      </div>

      <div className="w-full border-t border-neutral-200">
        <HobbitHolePreview />
      </div>
    </main>
  );
}

