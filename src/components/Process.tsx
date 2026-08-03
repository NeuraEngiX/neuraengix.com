import { Compass, Map, Wrench, ClipboardCheck, Sparkles } from "lucide-react";
import SectionTitle from "./SectionHeader";

const steps = [
  { icon: Compass, title: "Discovery & Assessment", body: "Evaluate existing engineering standards, tools, templates, and workflows to identify gaps and improvement opportunities." },
  { icon: Map, title: "Roadmap & Strategy", body: "Define standards, coding guidelines, document frameworks, and configurable architectures for scale." },
  { icon: Wrench, title: "Engineering & Implementation", body: "Enable teams via training, governance, and standardized libraries to improve quality and productivity." },
  { icon: ClipboardCheck, title: "Validation & Commissioning", body: "Structured testing, FAT, site validation, and seamless go-live support." },
  { icon: Sparkles, title: "Lifecycle & AI Enablement", body: "Continuous support and AI-driven insights to enhance efficiency and long-term sustainability." },
];

export default function Process() {
  return (
    <section id="process" className="border-t border-border/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="How We Work" title="A rigorous, engineering-led approach" />
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 hidden w-px bg-gradient-to-b from-primary via-border to-transparent md:block" />
          <div className="space-y-6">
            {steps.map(({ icon: Icon, title, body }, i) => (
              <div key={title} className="relative flex gap-6 rounded-xl border border-border bg-card p-6 md:pl-16">
                <div className="absolute left-0 top-6 hidden h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-primary/40 bg-background text-primary md:flex">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/30 md:hidden">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-primary">Step 0{i + 1}</div>
                  <h3 className="mt-1 text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
