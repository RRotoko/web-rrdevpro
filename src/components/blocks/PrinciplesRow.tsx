import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

const principles = [
  {
    icon: "🎯",
    title: "User-First Design",
    description:
      "Every decision starts with the user. I prioritize usability, accessibility, and delight in every interface I build.",
  },
  {
    icon: "⚡",
    title: "Performance Matters",
    description:
      "Speed is a feature. I optimize for Core Web Vitals, minimal bundle sizes, and smooth 60fps interactions.",
  },
  {
    icon: "🧱",
    title: "Clean Architecture",
    description:
      "Maintainable, testable, and scalable code. I believe in strong typing, clear patterns, and thorough documentation.",
  },
];

export default function PrinciplesRow() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeader
          title="My Principles"
          subtitle="Core values that guide every project I take on."
          centered
        />
        <div className="grid gap-6 sm:grid-cols-3">
          {principles.map((p) => (
            <Card key={p.title} hover className="text-center">
              <span className="mb-4 inline-block text-4xl">{p.icon}</span>
              <h3 className="text-text-primary mb-2 text-lg font-semibold">{p.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{p.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
