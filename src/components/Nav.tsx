import { useState } from "react";

const links = [
  ["About", "/about"],
  ["LogicMind", "/industrial-ai"],
  ["Cybersecurity", "/ot-cybersecurity"],
  ["Demos", "/#demos"],
  ["Pricing", "/#pricing"],
  ["Partnership", "/#b2b"],
  ["Contact", "/#contact"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-6">
        {/* Brand */}
        <a href="/" className="flex shrink-0 items-center gap-2">
          <img src="/neuraengix-emblem.png" alt="NeuraEngiX" className="h-10 w-auto object-contain" />
          <span className="font-display text-lg font-bold tracking-wide text-foreground">
            Neura<span className="text-primary">EngiX</span>
          </span>
        </a>

        {/* Centered nav */}
        <nav className="hidden flex-1 items-center justify-center gap-7 xl:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-[15px] font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="/#contact"
          className="ml-auto inline-flex shrink-0 items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 xl:ml-0"
          style={{ boxShadow: "var(--shadow-glow)" }}
        >
          Get in Touch
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex shrink-0 items-center justify-center rounded-md p-2 text-foreground xl:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-6 w-6">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <nav className="border-t border-border/40 bg-background/95 backdrop-blur-xl xl:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-2">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
