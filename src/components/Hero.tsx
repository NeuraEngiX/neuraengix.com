import { ArrowRight, FileText, Zap, CheckCircle2, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-36 pb-24 md:pt-40 md:pb-32">
      {/* Grid background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.28 0.015 220 / 0.35) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.28 0.015 220 / 0.35) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 55%, transparent 95%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="absolute left-1/4 top-1/2 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.4fr_1fr]">
        {/* LEFT — headline */}
        <div>
          <h1 className="font-display font-bold leading-[0.95] tracking-tight text-foreground text-6xl md:text-7xl lg:text-[7.5rem]">
            <span className="block">Amplifying</span>
            <span className="block text-primary" style={{ textShadow: "0 0 40px oklch(0.82 0.14 195 / 0.35)" }}>
              Engineering
            </span>
            <span className="block">Intelligence</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">NeuraEngiX Technologies</span> is
            an Industrial Digitalization company helping manufacturers accelerate their
            digital transformation through Industrial AI, Digital Twin, OT Cybersecurity,
            and intelligent automation solutions. We empower organizations to design,
            secure, optimize, and modernize industrial operations by combining deep
            automation expertise with next-generation AI technologies.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="/industrial-ai"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              Explore LogicMind <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/ot-cybersecurity"
              className="text-sm font-semibold text-foreground underline-offset-4 hover:text-primary hover:underline"
            >
              OT Cybersecurity
            </a>
          </div>
        </div>

        {/* RIGHT — LogicMind: requirements in, verified code out */}
        <div className="rounded-xl border border-border bg-card/70 p-6 backdrop-blur-md" style={{ boxShadow: "var(--shadow-card)" }}>
          <div className="mb-5 flex items-center gap-2 font-mono text-xs text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            neuraengix.logicmind — live
          </div>

          {/* Input */}
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Input
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {["FDS_Pump_Control.docx", "IO_List.xlsx"].map((f) => (
              <span
                key={f}
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background/60 px-3 py-2 font-mono text-xs text-muted-foreground"
              >
                <FileText className="h-3.5 w-3.5 text-primary" />
                {f}
              </span>
            ))}
          </div>

          {/* Agent */}
          <div className="my-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-primary">
              <Zap className="h-3 w-3" /> AI Engineering Agent
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Output */}
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Output — IEC 61131-3 Structured Text
          </div>
          <pre className="mt-3 overflow-x-auto rounded-lg border border-border bg-background/80 p-4 font-mono text-[11px] leading-relaxed">
            <code>
              <span className="text-violet-400">FUNCTION_BLOCK</span>{" "}
              <span className="text-foreground">FB_PumpControl</span>
              {"\n"}
              <span className="text-violet-400">VAR_INPUT</span>
              {"\n  "}
              <span className="text-foreground">xStart</span>
              <span className="text-muted-foreground"> : </span>
              <span className="text-primary">BOOL</span>
              <span className="text-muted-foreground">;</span>
              {"\n  "}
              <span className="text-foreground">rSetpoint</span>
              <span className="text-muted-foreground"> : </span>
              <span className="text-primary">REAL</span>
              <span className="text-muted-foreground">;</span>
              {"\n"}
              <span className="text-violet-400">END_VAR</span>
              {"\n\n"}
              <span className="text-muted-foreground">{"// interlock per FDS §4.2"}</span>
              {"\n"}
              <span className="text-violet-400">IF</span>
              <span className="text-foreground"> xStart </span>
              <span className="text-violet-400">AND NOT</span>
              <span className="text-foreground"> xTripped </span>
              <span className="text-violet-400">THEN</span>
              {"\n  "}
              <span className="text-foreground">xRun </span>
              <span className="text-muted-foreground">:= </span>
              <span className="text-primary">TRUE</span>
              <span className="text-muted-foreground">;</span>
              {"\n"}
              <span className="text-violet-400">END_IF</span>
            </code>
          </pre>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
            <span className="inline-flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="h-3.5 w-3.5" /> Validated against FDS
            </span>
            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" /> Vendor-neutral output
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
