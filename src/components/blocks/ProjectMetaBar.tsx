import type { Project } from "@/data/projects";

interface ProjectMetaBarProps {
  project: Project;
}

export default function ProjectMetaBar({ project }: ProjectMetaBarProps) {
  return (
    <div className="border-border bg-surface flex flex-wrap gap-6 rounded-2xl border p-6 shadow-sm">
      <div>
        <span className="text-text-muted block text-xs font-medium tracking-wider uppercase">
          Role
        </span>
        <span className="text-text-primary mt-1 text-sm font-medium">{project.role}</span>
      </div>
      <div className="bg-border h-auto w-px" />
      <div>
        <span className="text-text-muted block text-xs font-medium tracking-wider uppercase">
          Year
        </span>
        <span className="text-text-primary mt-1 text-sm font-medium">{project.year}</span>
      </div>
      <div className="bg-border h-auto w-px" />
      <div>
        <span className="text-text-muted block text-xs font-medium tracking-wider uppercase">
          Services
        </span>
        <span className="text-text-primary mt-1 text-sm font-medium">
          {project.services.join(" · ")}
        </span>
      </div>
      <div className="bg-border hidden h-auto w-px sm:block" />
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-tag-bg text-text-secondary rounded-full px-3 py-1 text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
