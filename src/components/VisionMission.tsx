import { Target, Compass } from "lucide-react";
import SectionTitle from "./SectionHeader";

export default function VisionMission() {
  return (
    <section id="vision" className="border-t border-border/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="What Drives Us"
          title="Committed to smarter engineering and secure, compliant operations"
        />
        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative rounded-2xl border border-border bg-card p-10">
            <Target className="mb-5 h-8 w-8 text-primary" />
            <h3 className="text-2xl font-semibold">Our Vision</h3>
            <p className="mt-4 text-muted-foreground">
              To become a leading force in{" "}
              <span className="font-semibold text-foreground">intelligent industrial engineering</span>,
              shaping the future of connected and autonomous industries.
            </p>
          </div>
          <div
            className="relative rounded-2xl border border-primary/40 p-10"
            style={{ background: "linear-gradient(135deg, oklch(0.22 0.05 200 / 0.4), oklch(0.18 0.012 220))" }}
          >
            <Compass className="mb-5 h-8 w-8 text-primary" />
            <h3 className="text-2xl font-semibold">Our Mission</h3>
            <p className="mt-4 text-muted-foreground">
              Empower industries to{" "}
              <span className="font-semibold text-foreground">engineer, automate, simulate, and secure</span>{" "}
              smarter operations through AI-powered digitalization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
