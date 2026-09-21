import { projects } from "@/lib/projects";
import FadeInUp from "@/components/motion/FadeInUp";
import { tintForIndex } from "@/lib/tints";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  return (
    <section id="projects" className="scroll-mt-28 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeInUp>
          <header className="mb-10 max-w-2xl sm:mb-14">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Selected Work
            </h2>
            <p className="mt-3 text-slate-600">
              Automation and analytics projects built for sports federations and
              performance departments — measured in hours saved and decisions
              sharpened.
            </p>
          </header>
        </FadeInUp>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
          {projects.map((project, i) => (
            <FadeInUp key={project.id} delay={(i % 2) * 0.1} className="h-full">
              <ProjectCard project={project} tint={tintForIndex(i)} />
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
