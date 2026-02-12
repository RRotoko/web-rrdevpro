import Link from "next/link";
import Card from "@/components/ui/Card";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/portfolio/${project.slug}`} className="group block">
      <Card hover className="flex h-full flex-col overflow-hidden !p-0">
        {/* Thumbnail placeholder */}
        <div className="from-surface-secondary to-border-light relative flex h-48 items-center justify-center bg-gradient-to-br sm:h-56">
          {/* Type badge */}
          <span className="bg-primary absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-medium text-white">
            {project.type}
          </span>
          {/* Placeholder icon */}
          <div className="bg-accent/10 text-accent flex h-16 w-16 items-center justify-center rounded-2xl text-3xl transition-transform duration-300 group-hover:scale-110">
            {project.type === "Web" ? "🌐" : project.type === "Mobile" ? "📱" : "💻"}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-text-primary group-hover:text-accent text-lg font-semibold transition-colors">
              {project.title}
            </h3>
            <span className="text-text-muted text-sm">{project.year}</span>
          </div>
          <p className="text-text-secondary mb-4 flex-1 text-sm leading-relaxed">
            {project.subtitle}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="bg-tag-bg text-text-secondary rounded-full px-2.5 py-0.5 text-xs font-medium"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="bg-tag-bg text-text-muted rounded-full px-2.5 py-0.5 text-xs font-medium">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
}
