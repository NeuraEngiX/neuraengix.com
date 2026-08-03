import { Target, Compass } from "lucide-react";
import SectionTitle from "./SectionHeader";

export default function VisionMission() {
  return (
    <section id="vision" className="border-t border-border/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="Vision & Mission" title="Smarter engineering. Secure operations." />
        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative rounded-2xl border border-border bg-card p-10">
            <Target className="mb-5 h-8 w-8 text-primary" />
            <h3 className="text-2xl font-semibold">Vision</h3>
            <p className="mt-4 text-muted-foreground">
              To become a trusted Industrial Intelligence platform that enables smarter
              engineering, secure operations, and data-driven manufacturing through
              Artificial Intelligence.
            </p>
          </div>
          <div
            className="relative rounded-2xl border border-primary/40 p-10"
            style={{ background: "linear-gradient(135deg, oklch(0.22 0.05 200 / 0.4), oklch(0.18 0.012 220))" }}
          >
            <Compass className="mb-5 h-8 w-8 text-primary" />
            <h3 className="text-2xl font-semibold">Mission</h3>
            <p className="mt-4 text-muted-foreground">
              Empower automation engineers and manufacturers to engineer faster, operate
              smarter, and continuously improve — through AI-driven industrial solutions
              built on deep domain expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
