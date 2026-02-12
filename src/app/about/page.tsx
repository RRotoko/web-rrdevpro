import { Metadata } from "next";
import Container from "@/components/layout/Container";
import StatsChips from "@/components/ui/StatsChips";
import ExperienceTimeline from "@/components/blocks/ExperienceTimeline";
import PrinciplesRow from "@/components/blocks/PrinciplesRow";
import CTASection from "@/components/blocks/CTASection";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Ruslan Rassamakhin — frontend developer and designer.",
};

const stats = [
  { value: "5+", label: "Years of experience" },
  { value: "30+", label: "Projects delivered" },
  { value: "EU/Remote", label: "CET timezone" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero section with portrait */}
      <section className="py-20">
        <Container>
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
            {/* Portrait blob */}
            <div className="flex-shrink-0">
              <div
                className="from-accent/20 to-primary/10 flex h-56 w-56 items-center justify-center bg-gradient-to-br shadow-lg lg:h-72 lg:w-72"
                style={{
                  borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                }}
              >
                <span className="text-primary/20 text-7xl font-black">RR</span>
              </div>
            </div>

            {/* Info */}
            <div className="text-center lg:text-left">
              <h1 className="text-text-primary text-4xl font-bold tracking-tight sm:text-5xl">
                Ruslan Rassamakhin
              </h1>
              <p className="text-accent mt-2 text-xl font-medium">Frontend Developer & Designer</p>
              <p className="text-text-secondary mx-auto mt-4 max-w-xl text-lg leading-relaxed lg:mx-0">
                I&apos;m a passionate developer who loves crafting beautiful, performant user
                interfaces. With over 5 years of experience in React ecosystem, I help businesses
                turn their ideas into polished digital products. Based in Europe, available for
                remote collaboration worldwide.
              </p>
              <StatsChips stats={stats} className="mt-6 justify-center lg:justify-start" />
            </div>
          </div>
        </Container>
      </section>

      <ExperienceTimeline />
      <PrinciplesRow />

      <CTASection
        title="Want the full CV or references?"
        subtitle="Feel free to download my resume or get in touch for a chat about your next project."
        primaryLabel="Download CV"
        primaryHref="#"
        secondaryLabel="Start a project"
        secondaryHref="/contact"
      />
    </>
  );
}
