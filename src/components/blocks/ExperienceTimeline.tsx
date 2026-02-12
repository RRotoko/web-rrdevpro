import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import { experience, education } from "@/data/experience";

export default function ExperienceTimeline() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeader title="Experience" subtitle="My professional journey so far." />

        {/* Timeline */}
        <div className="border-border relative ml-4 border-l-2 pl-8">
          {experience.map((exp, i) => (
            <div key={exp.id} className={`relative ${i < experience.length - 1 ? "pb-12" : ""}`}>
              {/* Dot */}
              <div className="border-accent bg-surface absolute top-1 -left-[41px] flex h-5 w-5 items-center justify-center rounded-full border-2">
                <div className="bg-accent h-2 w-2 rounded-full" />
              </div>

              <Card>
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <h3 className="text-text-primary text-lg font-semibold">{exp.title}</h3>
                  <span className="bg-accent/10 text-accent rounded-full px-3 py-0.5 text-xs font-medium">
                    {exp.period}
                  </span>
                </div>
                <p className="text-text-secondary mb-1 text-sm font-medium">
                  {exp.company} · {exp.location}
                </p>
                <p className="text-text-secondary mb-3 text-sm">{exp.description}</p>
                <ul className="space-y-1">
                  {exp.highlights.map((h) => (
                    <li key={h} className="text-text-secondary flex items-start gap-2 text-sm">
                      <span className="bg-accent mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" />
                      {h}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-16">
          <SectionHeader title="Education" />
          <Card>
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <h3 className="text-text-primary text-lg font-semibold">{education.degree}</h3>
              <span className="bg-accent/10 text-accent rounded-full px-3 py-0.5 text-xs font-medium">
                {education.period}
              </span>
            </div>
            <p className="text-text-secondary mb-2 text-sm font-medium">{education.institution}</p>
            <p className="text-text-secondary text-sm">{education.description}</p>
          </Card>
        </div>
      </Container>
    </section>
  );
}
