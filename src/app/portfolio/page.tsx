import { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import StatsChips from "@/components/ui/StatsChips";
import PortfolioFilter from "@/components/blocks/PortfolioFilter";
import CTASection from "@/components/blocks/CTASection";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Browse selected projects across web, mobile, and desktop platforms.",
};

const stats = [
  { value: "30+", label: "Projects completed" },
  { value: "15+", label: "Happy clients" },
  { value: "3", label: "Platforms" },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="py-20">
        <Container>
          <div className="text-center">
            <SectionHeader
              title="My Portfolio"
              subtitle="A curated selection of projects showcasing my skills across different platforms and technologies."
              centered
            />
            <StatsChips stats={stats} className="mb-12 justify-center" />
          </div>

          <PortfolioFilter />
        </Container>
      </section>

      <CTASection
        title="Have a project idea?"
        subtitle="Let's discuss how I can help bring your vision to life."
      />
    </>
  );
}
