import Link from "next/link";
import CoverImage from "@/components/CoverImage";
import { tintBg, type Tint } from "@/lib/tints";
import type { Project } from "@/lib/projects";

function CardMedia({ project, tint }: { project: Project; tint: Tint }) {
  if (project.cover) {
    return (
      <div
        className={`relative aspect-video w-full overflow-hidden rounded-2xl border border-white/70 p-3 ${tintBg[tint]}`}
      >
        <div className="relative h-full w-full overflow-hidden rounded-xl bg-white">
          <CoverImage
            src={project.cover.src}
            alt={project.cover.alt}
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </div>
    );
  }

  if (project.embedUrl) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/50 bg-surface-850">
        <iframe
          src={project.embedUrl}
          title={`${project.title} demo`}
          loading="lazy"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }

  // Media slot — drop a Loom embed or dashboard <iframe> here later via `embedUrl`.
  return (
    <div
      className={`relative flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-2xl border border-white/70 text-center ${tintBg[tint]}`}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 bg-white/60 text-accent">
        ▶
      </span>
      <span className="text-xs uppercase tracking-widest text-slate-500">
        Walkthrough coming soon
      </span>
    </div>
  );
}

function CardBody({ project, tint }: { project: Project; tint: Tint }) {
  return (
    <>
      <header className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          {project.client}
        </p>
        <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">
          {project.title}
        </h3>
      </header>

      <CardMedia project={project} tint={tint} />

      <p className="mt-4 text-sm leading-relaxed text-slate-600">
        {project.summary ?? project.description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-ink/10 bg-white/50 px-2.5 py-1 text-xs text-slate-600"
          >
            {tech}
          </li>
        ))}
      </ul>
    </>
  );
}

export default function ProjectCard({
  project,
  tint,
}: {
  project: Project;
  tint: Tint;
}) {
  const cardClass =
    "group flex h-full flex-col rounded-4xl border border-white/50 bg-white/30 p-6 shadow-xl shadow-ink/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-2xl hover:shadow-ink/10 sm:p-8";

  if (project.slug) {
    return (
      <Link href={`/projects/${project.slug}`} className={cardClass}>
        <CardBody project={project} tint={tint} />
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 transition-colors group-hover:text-accent">
          View case study
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </Link>
    );
  }

  return (
    <article className={cardClass}>
      <CardBody project={project} tint={tint} />
    </article>
  );
}
