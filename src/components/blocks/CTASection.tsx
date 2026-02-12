import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({
  title = "Have a project in mind?",
  subtitle = "Let's work together to bring your ideas to life. I'm available for freelance projects and collaborations.",
  primaryLabel = "Start a project",
  primaryHref = "/contact",
  secondaryLabel = "View selected work",
  secondaryHref = "/portfolio",
}: CTASectionProps) {
  return (
    <section className="py-20">
      <Container>
        <div className="border-border from-primary to-primary-light rounded-3xl border bg-gradient-to-br p-10 text-center text-white shadow-lg sm:p-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">{subtitle}</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              href={primaryHref}
              className="!text-primary !bg-white hover:!bg-white/90"
              size="lg"
            >
              {primaryLabel}
            </Button>
            <Button
              href={secondaryHref}
              variant="ghost"
              className="!border !border-white/20 !text-white/80 hover:!bg-white/10"
              size="lg"
            >
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
