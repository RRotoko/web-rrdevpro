import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { skills } from "@/data/skills";

export default function SkillsGrid() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeader
          title="Skills & Technologies"
          subtitle="Tools and technologies I use daily to bring ideas to life."
          centered
        />
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="border-border bg-surface flex flex-col items-center gap-2 rounded-xl border p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="text-2xl">{skill.icon}</span>
              <span className="text-text-secondary text-center text-xs font-medium">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
