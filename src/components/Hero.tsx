import { ArrowRight, ArrowUpRight, ArrowDownRight, ShieldAlert, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-36 pb-24 md:pt-40 md:pb-32">
      {/* Grid background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.28 0.015 220 / 0.35) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.28 0.015 220 / 0.35) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 55%, transparent 95%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="absolute left-1/4 top-1/2 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.4fr_1fr]">
        {/* LEFT — headline */}
        <div>
          <div className="mb-8 inline-flex items-center gap-3 rounded-md border border-primary/40 bg-background/60 px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_currentColor]" />
            Industrial AI · Automation · OT Cybersecurity
          </div>
          <h1 className="font-display font-bold leading-[0.95] tracking-tight text-foreground text-6xl md:text-7xl lg:text-[7.5rem]">
            <span className="block">Amplifying</span>
            <span className="block text-primary" style={{ textShadow: "0 0 40px oklch(0.82 0.14 195 / 0.35)" }}>
              Engineering
            </span>
            <span className="block">Intelligence</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            NeuraEngiX is an Industrial AI, Automation, and OT Cybersecurity
            company accelerating digital transformation and engineering
            productivity across manufacturing industries.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#logicmind"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              Explore LogicMind <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#cyber"
              className="text-sm font-semibold text-foreground underline-offset-4 hover:text-primary hover:underline"
            >
              OT Cybersecurity
            </a>
          </div>
        </div>

        {/* RIGHT — live metrics panel */}
        <div className="rounded-xl border border-border bg-card/70 p-6 backdrop-blur-md" style={{ boxShadow: "var(--shadow-card)" }}>
          <div className="mb-5 flex items-center gap-2 font-mono text-xs text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            neuraengix.logicmind — live
          </div>
          <div className="divide-y divide-border/60">
            {[
              { label: "PLC Development Speed", value: "90%", sub: "faster than manual coding", color: "text-primary", icon: Zap, iconColor: "text-primary" },
              { label: "Engineering Consistency", value: "High", sub: "IEC 61131-3 compliant output", color: "text-emerald-400", icon: ArrowUpRight, iconColor: "text-emerald-400", prefix: "↑" },
              { label: "Repetitive Coding Tasks", value: "Low", sub: "automated via AI generation", color: "text-amber-400", icon: ArrowDownRight, iconColor: "text-amber-400", prefix: "↓" },
              { label: "OT Cybersecurity Standard", value: "IEC 62443", sub: "aligned implementation", color: "text-violet-400", icon: ShieldAlert, iconColor: "text-violet-400" },
            ].map((m) => (
              <div key={m.label} className="flex items-start justify-between gap-4 py-4">
                <div>
                  <div className="text-xs font-medium tracking-wide text-muted-foreground">{m.label}</div>
                  <div className={`mt-1 font-mono text-2xl font-bold ${m.color}`}>
                    {m.prefix ? <span className="mr-1">{m.prefix}</span> : null}
                    {m.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{m.sub}</div>
                </div>
                <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-background/60 ${m.iconColor}`}>
                  <m.icon className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
