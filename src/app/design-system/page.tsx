import { notFound } from "next/navigation";

export default function DesignSystemPage() {
  if (process.env.NODE_ENV !== "development") {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Design System</h1>
        <p className="text-base text-neutral-600">
          Dev-only index page for tokens and reusable components.
        </p>
      </header>

      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Status</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-700">
          <li>
            Tokens are defined in <code className="font-mono">tailwind.config.js</code>{" "}
            under <code className="font-mono">theme.extend</code>.
          </li>
          <li>
            Components live in{" "}
            <code className="font-mono">src/design-system/components/</code> and should export a{" "}
            default component plus a named <code className="font-mono">meta</code> object.
          </li>
          <li>
            The AI reference doc is generated at{" "}
            <code className="font-mono">src/design-system/index.md</code> via{" "}
            <code className="font-mono">npm run design-system:docs</code>.
          </li>
        </ul>
      </section>
    </main>
  );
}

