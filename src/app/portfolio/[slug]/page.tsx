import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/layout/Container";
import ProjectMetaBar from "@/components/blocks/ProjectMetaBar";
import MockupsShowcase from "@/components/blocks/MockupsShowcase";
import OverviewCards from "@/components/blocks/OverviewCards";
import StepsRow from "@/components/blocks/StepsRow";
import CTASection from "@/components/blocks/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects, getProjectBySlug } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.subtitle,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="py-12">
        <Container>
          {/* Breadcrumb */}
          <nav className="text-text-muted mb-8 flex items-center gap-2 text-sm">
            <Link href="/portfolio" className="hover:text-text-primary transition-colors">
              Portfolio
            </Link>
            <span>/</span>
            <span className="text-text-primary">{project.title}</span>
          </nav>

          {/* Title */}
          <h1 className="text-text-primary text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          <p className="text-text-secondary mt-3 max-w-2xl text-lg">{project.subtitle}</p>

          {/* Meta bar */}
          <div className="mt-8">
            <ProjectMetaBar project={project} />
          </div>

          {/* Mockups */}
          <div className="mt-12">
            <MockupsShowcase />
          </div>

          {/* Overview & Problem section */}
          <div className="mt-16">
            <SectionHeader
              title="Overview & Problem"
              subtitle="Understanding the user needs, challenges, and how we solved them."
            />
            <OverviewCards
              goals={project.goals}
              challenges={project.challenges}
              solutions={project.solutions}
            />
          </div>

          {/* Process steps */}
          <div className="mt-16">
            <SectionHeader
              title="Process"
              subtitle="The step-by-step approach to delivering this project."
            />
            <StepsRow steps={project.steps} />
          </div>
        </Container>
      </section>

      <CTASection
        title="Like what you see?"
        subtitle="Let's work together on your next project."
        primaryLabel="Start a project"
        primaryHref="/contact"
        secondaryLabel="Download CV"
        secondaryHref="#"
      />
    </>
  );
}
