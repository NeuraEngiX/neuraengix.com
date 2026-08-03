import { ArrowRight, Check } from "lucide-react";
import SectionTitle from "./SectionHeader";

const tiers = [
  {
    name: "Starter",
    price: "Custom",
    cadence: "pilot engagement",
    description: "Focused assessment of your engineering standards, tooling, and a single pilot use-case for LogicMind.",
    features: ["Discovery & standards audit", "1 pilot PLC use-case", "LogicMind sandbox access", "Standards & template review"],
    cta: "Start a pilot",
    highlight: false,
  },
  {
    name: "Scale",
    price: "Custom",
    cadence: "program engagement",
    description: "Roll out LogicMind across multiple project teams with governance, libraries, and IEC 62443-aligned OT security.",
    features: ["Multi-team LogicMind rollout", "Standard libraries & templates", "OT security architecture review", "Training & enablement", "Priority engineering support"],
    cta: "Talk to sales",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "long-term partnership",
    description: "Full lifecycle partnership — platform, OT cybersecurity, and continuous AI-driven optimisation across sites.",
    features: ["Global multi-site deployment", "Dedicated engineering pod", "IEC 62443 compliance program", "Custom AI models & integrations", "24/7 lifecycle support"],
    cta: "Book a strategy call",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="border-t border-border/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Pricing"
          title="Engagements shaped around your plant"
          subtitle="Every industrial environment is different. We scope pricing to your standards, footprint, and roadmap."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                t.highlight ? "border-primary/60 bg-card" : "border-border bg-card"
              }`}
              style={t.highlight ? { boxShadow: "var(--shadow-glow)" } : { boxShadow: "var(--shadow-card)" }}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-primary/50 bg-background px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                  Most popular
                </div>
              )}
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{t.name}</div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-4xl font-bold text-foreground">{t.price}</span>
                <span className="text-xs text-muted-foreground">/ {t.cadence}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.description}</p>
              <ul className="mt-6 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                  t.highlight ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:border-primary/60"
                }`}
                style={t.highlight ? { boxShadow: "var(--shadow-glow)" } : undefined}
              >
                {t.cta} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
