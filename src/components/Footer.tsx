export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="flex items-center gap-3">
          <img src="/neuraengix-logo.png" alt="NeuraEngiX" className="h-12 w-auto object-contain" />
          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} NeuraEngiX Technologies LLP
          </span>
        </div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">
          Amplifying Engineering Intelligence
        </div>
      </div>
    </footer>
  );
}
