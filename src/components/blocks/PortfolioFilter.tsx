"use client";

import { useState } from "react";
import Pill from "@/components/ui/Pill";
import ProjectCard from "@/components/blocks/ProjectCard";
import { projects } from "@/data/projects";

const filters = ["All", "Web", "Mobile", "Desktop"] as const;

export default function PortfolioFilter() {
  const [active, setActive] = useState<string>("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.type === active);

  return (
    <>
      {/* Filter pills */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <Pill key={f} label={f} active={active === f} onClick={() => setActive(f)} />
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-text-muted text-lg">No projects found for this category.</p>
        </div>
      )}
    </>
  );
}
