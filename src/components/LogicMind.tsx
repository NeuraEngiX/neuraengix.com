import { ArrowRight, Zap, Workflow, Brain } from "lucide-react";

const features = [
  { icon: Zap, title: "Generate Faster", body: "Convert engineering requirements into PLC logic with AI-assisted code generation." },
  { icon: Workflow, title: "Standardize Better", body: "Apply reusable libraries, proven architectures, coding standards, and engineering practices across projects." },
  { icon: Brain, title: "Validate Smarter", body: "Automatically check generated logic against FDS requirements and engineering standards to improve quality and reduce rework." },
];

export default function LogicMind() {
  return (
    <section id="logicmind" className="relative border-t border-border/40 py-24">
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{ background: "radial-gradient(ellipse at center, oklch(0.72 0.13 195 / 0.15), transparent 60%)" }}
      />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">Product</div>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            NeuraEngiX{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-teal)" }}>
              LogicMind™
            </span>
          </h2>
          <p className="mt-4 text-lg font-semibold text-foreground">
            AI-Powered PLC Engineering. From Requirements to Verified Code.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Transform{" "}
            <span className="font-semibold text-foreground">I/O Lists and FDS documents into standardized, validated PLC code</span>{" "}
            using the NeuraEngiX AI Engineering Agent.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-all group-hover:bg-primary/20" />
              <Icon className="mb-4 h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm font-semibold uppercase tracking-[0.15em] text-primary">
          Vendor-neutral. Compatible with major PLC platforms.
        </p>
        <div className="mt-8 text-center">
          <a
            href="/industrial-ai"
            className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/60 hover:text-primary"
          >
            Explore LogicMind <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
