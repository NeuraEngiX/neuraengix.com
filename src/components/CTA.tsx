import { useRef, useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function CTA() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const email = inputRef.current?.value.trim() ?? "";
    if (!email) return;

    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="border-t border-border/40 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div
          className="relative overflow-hidden rounded-3xl border border-primary/40 p-12 text-center md:p-16"
          style={{ background: "linear-gradient(135deg, oklch(0.22 0.05 200 / 0.4), oklch(0.16 0.015 220))", boxShadow: "var(--shadow-glow)" }}
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Build intelligent, secure, future-ready industrial systems.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Let's discuss how NeuraEngiX can accelerate your engineering and secure your operations.
          </p>

          {status === "success" ? (
            <p className="mt-8 font-semibold text-primary">Thanks — we'll be in touch shortly.</p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                ref={inputRef}
                type="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
                style={{ background: "var(--gradient-teal)" }}
              >
                {status === "loading" ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    Get in touch <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          )}
          {status === "error" && (
            <p className="mt-3 text-sm text-destructive">{errorMsg}</p>
          )}
        </div>
      </div>
    </section>
  );
}
