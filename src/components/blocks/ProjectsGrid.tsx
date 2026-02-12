import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "./ProjectCard";
import Button from "@/components/ui/Button";
import { projects } from "@/data/projects";

interface ProjectsGridProps {
  title?: string;
  subtitle?: string;
  limit?: number;
  showViewAll?: boolean;
}

export default function ProjectsGrid({
  title = "Featured Projects",
  subtitle = "A selection of recent work across web, mobile, and desktop platforms.",
  limit,
  showViewAll = true,
}: ProjectsGridProps) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="py-20">
      <Container>
        <SectionHeader title={title} subtitle={subtitle} centered />
        <div className="grid gap-6 sm:grid-cols-2">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        {showViewAll && (
          <div className="mt-10 flex justify-center">
            <Button href="/portfolio" variant="secondary" size="lg">
              See all projects →
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
