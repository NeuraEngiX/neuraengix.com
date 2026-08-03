import { ClipboardCheck, Network, ShieldCheck, GraduationCap } from "lucide-react";
import SectionTitle from "./SectionHeader";

const services = [
  { icon: ClipboardCheck, title: "Assessment & Consulting", body: "Understand your risks and build a secure foundation aligned with IEC 62443." },
  { icon: Network, title: "OT Architecture Design", body: "Project-specific secure industrial network architectures — designed and deployed." },
  { icon: ShieldCheck, title: "Validation & Compliance", body: "Validate security posture and demonstrate compliance with industry standards." },
  { icon: GraduationCap, title: "Capability Development", body: "Develop your people. Strengthen long-term cyber resilience in-house." },
];

export default function Cyber() {
  return (
    <section id="cyber" className="border-t border-border/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="OT Cybersecurity"
          title="Industrial cybersecurity for critical infrastructure"
          subtitle="Assess • Secure • Validate • Sustain"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {services.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex gap-5 rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/50">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/30">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
