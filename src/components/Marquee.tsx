export function Marquee() {
  const words = [
    "Developer",
    "Photographer",
    "Cinematographer",
    "Storyteller",
    "React",
    "Lightroom",
    "Travel",
    "Brand",
    "Food",
    "Portrait",
  ];
  const items = [...words, ...words];
  return (
    <div className="relative overflow-hidden border-y border-border py-8">
      <div className="flex animate-marquee gap-12 whitespace-nowrap">
        {items.map((w, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="font-display text-4xl font-semibold text-muted-foreground sm:text-6xl">
              {w}
            </span>
            <span className="h-2 w-2 rounded-full bg-primary" />
          </div>
        ))}
      </div>
    </div>
  );
}
