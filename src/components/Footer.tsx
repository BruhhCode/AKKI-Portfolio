export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Akshit Sharma. Crafted with care.
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          Available — IST · GMT+5:30
        </div>
      </div>
    </footer>
  );
}
