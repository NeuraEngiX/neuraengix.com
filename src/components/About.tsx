import { Brain, ShieldCheck, Cpu } from "lucide-react";
import SectionTitle from "./SectionHeader";

const cards = [
  {
    icon: Brain,
    title: "Industrial AI Platform",
    body: "We are building NeuraEngiX LogicMind™ — an AI-powered platform that generates, validates, and standardizes automation software.",
  },
  {
    icon: ShieldCheck,
    title: "OT Cybersecurity",
    body: "Consulting, engineering, and capability development to secure industrial architectures and achieve IEC 62443 compliance.",
  },
  {
    icon: Cpu,
    title: "Automation Engineering",
    body: "Combining domain expertise, engineering rigor, and AI to accelerate digital transformation across manufacturing.",
  },
];

export default function About() {
  return (
    <section id="about" className="border-t border-border/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="About" title="Engineering the intelligent industrial future" />
        <div className="grid gap-8 md:grid-cols-3">
          {cards.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/50"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/30">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
