import type { LucideIcon } from "lucide-react";

export interface SolutionPageProps {
  eyebrow: string;
  title: string;
  intro: string[];
  items: { icon: LucideIcon; title: string; body: string }[];
  closing?: { title: string; body: string };
}

export default function SolutionPage({ eyebrow, title, intro, items, closing }: SolutionPageProps) {
  return (
    <>
      <section className="pt-36 pb-16 md:pt-40">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            {eyebrow}
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
          {intro.map((p, i) => (
            <p key={i} className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map(({ icon: Icon, title: t, body }) => (
              <div
                key={t}
                className="rounded-xl border border-border bg-card p-8 transition-colors hover:border-primary/50"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/30">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="text-lg font-semibold">{t}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>

          {closing && (
            <div
              className="mt-10 rounded-2xl border border-primary/40 p-10 text-center"
              style={{ background: "linear-gradient(135deg, oklch(0.22 0.05 200 / 0.4), oklch(0.18 0.012 220))" }}
            >
              <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                {closing.title}
              </h2>
              <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-muted-foreground">
                {closing.body}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
