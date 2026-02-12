import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function HeroSplit() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-36">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-3">
          {/* Left — Designer side */}
          <div className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="absolute -top-10 -left-10 h-48 w-48 rounded-full bg-gradient-to-br from-pink-300/30 to-purple-400/20 blur-3xl" />
            <span className="text-accent relative mb-3 text-sm font-medium tracking-widest uppercase">
              designer
            </span>
            <h2 className="text-text-primary relative text-2xl font-bold sm:text-3xl">
              Crafting visual
              <br />
              experiences
            </h2>
            <p className="text-text-secondary relative mt-3">
              Clean layouts, thoughtful typography, and pixel-perfect attention to detail.
            </p>
          </div>

          {/* Center — Portrait placeholder */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Decorative rings */}
              <div className="border-accent/20 absolute -inset-4 rounded-full border-2 border-dashed" />
              <div className="border-border-light absolute -inset-8 rounded-full border" />
              {/* Portrait circle */}
              <div className="from-primary/10 to-accent/10 flex h-56 w-56 items-center justify-center rounded-full bg-gradient-to-br sm:h-64 sm:w-64">
                <div className="bg-surface flex h-48 w-48 items-center justify-center rounded-full shadow-inner sm:h-56 sm:w-56">
                  <span className="text-primary/20 text-6xl font-black">RR</span>
                </div>
              </div>
              {/* Floating badge */}
              <div className="bg-accent absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full px-4 py-1.5 text-xs font-semibold text-white shadow-lg">
                Available for work
              </div>
            </div>
          </div>

          {/* Right — Coder side */}
          <div className="relative flex flex-col items-center text-center lg:items-end lg:text-right">
            {/* Grid pattern overlay */}
            <div
              className="absolute -top-10 -right-10 h-48 w-48 opacity-[0.07]"
              style={{
                backgroundImage: `linear-gradient(rgba(108,99,255,1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(108,99,255,1) 1px, transparent 1px)`,
                backgroundSize: "20px 20px",
              }}
            />
            <span className="text-accent relative mb-3 font-mono text-sm font-medium tracking-widest uppercase">
              {"<coder />"}
            </span>
            <h2 className="text-text-primary relative text-2xl font-bold sm:text-3xl">
              Building robust
              <br />
              solutions
            </h2>
            <p className="text-text-secondary relative mt-3">
              Performant code, modern frameworks, and scalable architecture.
            </p>
          </div>
        </div>

        {/* CTA row */}
        <div className="mt-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/contact" size="lg">
            Start a project
          </Button>
          <Button href="/portfolio" variant="secondary" size="lg">
            View my work →
          </Button>
        </div>
      </Container>
    </section>
  );
}
