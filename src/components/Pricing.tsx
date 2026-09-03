import { ArrowRight, Check, X } from "lucide-react";
import SectionTitle from "./SectionHeader";

const tiers = [
  {
    name: "Starter",
    description: "For individual engineers standardizing their first LogicMind projects.",
    features: [
      { label: "Up to 10 projects / year", included: true },
      { label: "AI-assisted PLC code generation", included: true },
      { label: "Standard library access", included: true },
      { label: "Safety verification", included: true },
      { label: "Email support", included: true },
      { label: "Custom libraries", included: false },
      { label: "Priority support", included: false },
    ],
    cta: "Get notified",
    highlight: false,
  },
  {
    name: "Professional",
    description: "For engineering teams rolling out standards across multiple projects.",
    features: [
      { label: "Unlimited projects", included: true },
      { label: "All supported PLC platforms", included: true },
      { label: "Custom function blocks", included: true },
      { label: "HMI screen generation", included: true },
      { label: "Team collaboration (5 users)", included: true },
      { label: "Priority support (4hr response)", included: true },
    ],
    cta: "Get notified",
    highlight: true,
  },
  {
    name: "Enterprise",
    description: "For multi-site organizations with lifecycle and compliance requirements.",
    features: [
      { label: "Everything in Professional", included: true },
      { label: "Unlimited users", included: true },
      { label: "On-premise deployment", included: true },
      { label: "Custom AI training", included: true },
      { label: "IEC 62443 compliance program", included: true },
      { label: "Dedicated support engineer & SLA", included: true },
    ],
    cta: "Talk to sales",
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
          subtitle="Start with a single engineer, scale to a multi-site program. Every industrial environment is different — we scope to your standards, footprint, and roadmap."
        />
        <div className="grid items-start gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-2xl border bg-card p-8 ${
                t.highlight ? "border-primary/60 md:-mt-4 md:pb-12 md:pt-12" : "border-border"
              }`}
              style={t.highlight ? { boxShadow: "var(--shadow-glow)" } : { boxShadow: "var(--shadow-card)" }}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-primary/50 bg-background px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                  Most popular
                </div>
              )}
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{t.name}</div>
              <div className="mt-4 font-display text-3xl font-bold leading-tight text-foreground">
                Coming soon
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.description}</p>
              <ul className="mt-6 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f.label} className="flex items-start gap-3">
                    {f.included ? (
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    ) : (
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/50" />
                    )}
                    <span className={f.included ? "text-foreground/90" : "text-muted-foreground/50"}>
                      {f.label}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="/#contact"
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
        <p className="mt-8 text-center text-xs text-muted-foreground">
          Pricing is being finalized. Talk to us and we'll scope your plant directly.
        </p>
      </div>
    </section>
  );
}
