import { Handshake, Building2, Network, Rocket, ArrowRight } from "lucide-react";
import SectionTitle from "./SectionHeader";

const pillars = [
  {
    icon: Handshake,
    title: "Systems Integrators",
    body: "Extend your delivery capability with LogicMind-powered PLC engineering and joint go-to-market on OT cybersecurity.",
  },
  {
    icon: Building2,
    title: "OEMs & Machine Builders",
    body: "Standardize machine software with configurable, IEC 61131-3 compliant libraries generated and validated by AI.",
  },
  {
    icon: Network,
    title: "Technology Alliances",
    body: "Interoperability partnerships across DCS, PLC, historian, and OT security vendors — vendor-neutral by design.",
  },
  {
    icon: Rocket,
    title: "Manufacturing Enterprises",
    body: "Long-term partnership on digital transformation, engineering productivity, and secure operations across sites.",
  },
];

export default function Partnership() {
  return (
    <section id="b2b" className="border-t border-border/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Partnership"
          title="Partner with NeuraEngiX"
          subtitle="We work shoulder-to-shoulder with integrators, OEMs, technology vendors, and manufacturers to scale industrial intelligence."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="flex gap-5 rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/50"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/30">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-primary/30 bg-card/60 p-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Become a partner</div>
            <div className="mt-2 font-display text-2xl font-semibold text-foreground">
              Build the industrial intelligence stack — together.
            </div>
          </div>
          <a
            href="mailto:partners@neuraengix.com"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            Partner with us <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
