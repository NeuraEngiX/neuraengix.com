import { PlayCircle } from "lucide-react";
import SectionTitle from "./SectionHeader";

// ponytail: swap in real demo video URLs when recorded
const PLACEHOLDER_SRC = "";

const videos = [
  {
    title: "LogicMind™ in Action",
    body: "See how AI accelerates PLC code generation from specifications to deployment.",
    src: PLACEHOLDER_SRC,
    tag: "Product Demo",
  },
  {
    title: "OT Cybersecurity Walkthrough",
    body: "A guided tour of our IEC 62443 assessment and secure network architecture workflow.",
    src: PLACEHOLDER_SRC,
    tag: "Cybersecurity",
  },
  {
    title: "Engineering Workflow Overview",
    body: "How teams standardize libraries, validate logic, and ship projects faster with NeuraEngiX.",
    src: PLACEHOLDER_SRC,
    tag: "Overview",
  },
];

function VideoFrame({ src, title }: { src: string; title: string }) {
  if (!src) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-background/60 text-xs font-mono uppercase tracking-widest text-muted-foreground">
        Coming soon
      </div>
    );
  }
  return (
    <iframe
      src={src}
      title={title}
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="absolute inset-0 h-full w-full"
    />
  );
}

export default function Demos() {
  return (
    <section id="demos" className="relative border-t border-border/40 py-24">
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{ background: "radial-gradient(ellipse at center, oklch(0.72 0.13 195 / 0.15), transparent 60%)" }}
      />
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Demos"
          title="See NeuraEngiX in action"
          subtitle="Short product walkthroughs of LogicMind™, our cybersecurity practice, and end-to-end engineering workflows."
        />
        <div className="grid gap-6 lg:grid-cols-5">
          {/* Featured video */}
          <div className="lg:col-span-3">
            <div className="group overflow-hidden rounded-2xl border border-border bg-card">
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                <VideoFrame src={videos[0].src} title={videos[0].title} />
              </div>
              <div className="p-7">
                <div className="mb-3 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                  <PlayCircle className="h-3.5 w-3.5" />
                  {videos[0].tag} · Featured
                </div>
                <h3 className="text-2xl font-semibold leading-tight">{videos[0].title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{videos[0].body}</p>
              </div>
            </div>
          </div>
          {/* Secondary videos */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            {videos.slice(1).map(({ title, body, src, tag }) => (
              <div
                key={title}
                className="group flex flex-1 flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/50"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-black">
                  <VideoFrame src={src} title={title} />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-2 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                    <PlayCircle className="h-3.5 w-3.5" />
                    {tag}
                  </div>
                  <h3 className="text-base font-semibold leading-snug">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
