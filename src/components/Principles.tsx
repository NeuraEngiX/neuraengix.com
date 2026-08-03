import { ShieldCheck, Lock, Zap, Users, CheckCircle2, Building2 } from "lucide-react";
import SectionTitle from "./SectionHeader";

const items = [
  { icon: ShieldCheck, label: "Safety First" },
  { icon: Lock, label: "Security by Design" },
  { icon: Zap, label: "Business Continuity" },
  { icon: Users, label: "Vendor Neutral" },
  { icon: CheckCircle2, label: "Standards Driven" },
  { icon: Building2, label: "Long-Term Partnership" },
];

export default function Principles() {
  return (
    <section className="border-t border-border/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="Our Principles" title="Principles in action" subtitle="The values that guide every engagement." />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center transition-colors hover:border-primary/50"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/30">
                <Icon className="h-5 w-5" />
              </div>
              <div className="text-sm font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
