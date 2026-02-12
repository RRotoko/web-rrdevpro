import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import { services } from "@/data/services";

export default function ServicesGrid() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeader
          title="What I Do"
          subtitle="Services I offer to help bring your digital products to life."
          centered
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} hover>
              <span className="mb-4 inline-block text-3xl">{service.icon}</span>
              <h3 className="text-text-primary mb-2 text-lg font-semibold">{service.title}</h3>
              <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-1.5">
                {service.deliverables.map((d) => (
                  <li key={d} className="text-text-secondary flex items-start gap-2 text-sm">
                    <span className="text-accent mt-1">✓</span>
                    {d}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
