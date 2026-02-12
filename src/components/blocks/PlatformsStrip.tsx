import Container from "@/components/layout/Container";

const platforms = [
  { name: "Behance", url: "https://behance.net" },
  { name: "Dribbble", url: "https://dribbble.com" },
  { name: "Upwork", url: "https://upwork.com" },
  { name: "GitHub", url: "https://github.com" },
  { name: "LinkedIn", url: "https://linkedin.com" },
];

export default function PlatformsStrip() {
  return (
    <section className="border-border bg-surface border-y py-8">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          <span className="text-text-muted text-xs font-medium tracking-widest uppercase">
            Find me on
          </span>
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary text-lg font-semibold transition-colors"
            >
              {p.name}
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
