import { Metadata } from "next";
import ServicesGrid from "@/components/blocks/ServicesGrid";
import StepsRow from "@/components/blocks/StepsRow";
import SkillsGrid from "@/components/blocks/SkillsGrid";
import CTASection from "@/components/blocks/CTASection";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { processSteps } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Frontend development, mobile apps, UI/UX design, and consulting services.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20">
        <Container>
          <div className="text-center">
            <h1 className="text-text-primary text-4xl font-bold tracking-tight sm:text-5xl">
              Services
            </h1>
            <p className="text-text-secondary mx-auto mt-4 max-w-2xl text-lg">
              From concept to launch — I offer end-to-end frontend development services for web,
              mobile, and desktop platforms.
            </p>
          </div>
        </Container>
      </section>

      <ServicesGrid />

      {/* Process */}
      <section className="py-20">
        <Container>
          <SectionHeader
            title="My Process"
            subtitle="A proven approach to delivering high-quality digital products."
            centered
          />
          <StepsRow steps={processSteps} />
        </Container>
      </section>

      {/* Tools & Stack */}
      <SkillsGrid />

      <CTASection
        title="Ready to start?"
        subtitle="Tell me about your project and let's discuss how I can help."
        primaryLabel="Get in touch"
        primaryHref="/contact"
        secondaryLabel="View portfolio"
        secondaryHref="/portfolio"
      />
    </>
  );
}
