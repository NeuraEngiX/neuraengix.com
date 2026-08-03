import { Zap, Workflow, Brain } from "lucide-react";

const features = [
  { icon: Zap, title: "Build Faster", body: "AI-assisted PLC code generation from standardized templates and specifications." },
  { icon: Workflow, title: "Standardize Better", body: "Enforce coding guidelines, libraries, and configurable architectures across projects." },
  { icon: Brain, title: "Engineer Smarter", body: "Validate logic, catch defects early, and learn from every project with AI insights." },
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
          <p className="mt-4 text-lg text-muted-foreground">
            Transform PLC engineering with AI. Build Faster. Standardize Better. Engineer Smarter.
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
      </div>
    </section>
  );
}
