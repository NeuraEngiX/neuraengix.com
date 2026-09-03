import { Brain, ShieldCheck, BarChart3, Boxes } from "lucide-react";

const focusAreas = [
  {
    icon: Brain,
    title: "Industrial AI Platform",
    body: "AI-powered engineering and automation intelligence.",
    href: "/industrial-ai",
  },
  {
    icon: ShieldCheck,
    title: "OT Cybersecurity & Training",
    body: "Secure, compliant and cyber-resilient industrial operations.",
    href: "/ot-cybersecurity",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    body: "Turn industrial data into actionable insights.",
    href: "/data-analytics",
  },
  {
    icon: Boxes,
    title: "Digital Twin & Virtual Commissioning",
    body: "Simulate, validate and optimize.",
    href: "/digital-twin",
  },
];

export default function About() {
  return (
    <section id="about" className="pt-36 pb-24 md:pt-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            About
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            NeuraEngiX amplifies engineering intelligence
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">NeuraEngiX Technologies</span> is an
            industrial technology company focused on transforming engineering and manufacturing
            through AI, cybersecurity, data, and digital technologies.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            We develop{" "}
            <span className="font-semibold text-foreground">
              AI-powered industrial solutions, OT cybersecurity services, data analytics, and
              Digital Twin &amp; Virtual Commissioning solutions
            </span>{" "}
            that help manufacturers improve engineering productivity, operational intelligence,
            security, and performance.
          </p>
        </div>

        <h2 className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Our Focus Areas
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map(({ icon: Icon, title, body, href }) => (
            <a
              key={title}
              href={href}
              className="rounded-xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/50"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/30">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
