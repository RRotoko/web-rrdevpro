import HeroSplit from "@/components/blocks/HeroSplit";
import PlatformsStrip from "@/components/blocks/PlatformsStrip";
import SkillsGrid from "@/components/blocks/SkillsGrid";
import ProjectsGrid from "@/components/blocks/ProjectsGrid";
import CTASection from "@/components/blocks/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSplit />
      <PlatformsStrip />
      <SkillsGrid />

      {/* Latest Work — 3 cards */}
      <ProjectsGrid
        title="Latest Work"
        subtitle="Here are some of the most recent projects I've been working on."
        limit={3}
        showViewAll={false}
      />

      {/* Full Portfolio Preview — 6 cards */}
      <ProjectsGrid
        title="Portfolio"
        subtitle="A selection of work across web, mobile, and desktop platforms."
        limit={6}
        showViewAll
      />

      <CTASection />
    </>
  );
}
