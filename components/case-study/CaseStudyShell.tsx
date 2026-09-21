import Link from "next/link";
import ActionStep from "@/components/case-study/ActionStep";
import Figure from "@/components/case-study/Figure";
import MetricGrid from "@/components/case-study/MetricGrid";
import Pipeline from "@/components/case-study/Pipeline";
import Section from "@/components/case-study/Section";
import FadeInUp from "@/components/motion/FadeInUp";
import type { CaseStudy } from "@/lib/case-studies/types";

type CaseStudyShellProps = {
  cs: CaseStudy;
  /** Page-specific visual for the Result section (dashboards, deliverable grid…). */
  children?: React.ReactNode;
};

export default function CaseStudyShell({ cs, children }: CaseStudyShellProps) {
  return (
    <article className="mx-auto max-w-6xl px-4 pt-32 pb-24 sm:px-6 sm:pt-40 lg:px-8">
      <Link
        href="/#projects"
        className="text-sm text-slate-500 transition-colors hover:text-accent"
      >
        ← Back to projects
      </Link>

      {/* Header copy stays in a comfortable reading column even though the
          page itself is wide — screenshots below use the full width. */}
      <FadeInUp>
        <header className="mt-8 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            {cs.client}
          </p>
          <h1 className="mt-3 font-display text-5xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-6xl">
            {cs.title}
          </h1>
          <p className="mt-6 text-xl text-slate-600">{cs.lede}</p>

          <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <div>
              <dt className="text-slate-400">Role</dt>
              <dd className="mt-0.5 text-slate-700">{cs.role}</dd>
            </div>
            <div>
              <dt className="text-slate-400">Context</dt>
              <dd className="mt-0.5 text-slate-700">{cs.timeframe}</dd>
            </div>
            <div className="min-w-full sm:min-w-0">
              <dt className="text-slate-400">Stack</dt>
              <dd className="mt-1 flex flex-wrap gap-2">
                {cs.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-ink/10 bg-white/50 px-2.5 py-1 text-xs text-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </header>
      </FadeInUp>

      {cs.heroImage && (
        <FadeInUp className="mt-8">
          <Figure
            src={cs.heroImage.src}
            alt={cs.heroImage.alt}
            caption={cs.heroImage.alt}
            priority
          />
        </FadeInUp>
      )}

      <FadeInUp className="mt-10">
        <MetricGrid items={cs.metrics} />
      </FadeInUp>

      <FadeInUp className="mt-10">
        <Pipeline steps={cs.pipeline} />
      </FadeInUp>

      <div className="mt-16 space-y-16">
        <FadeInUp>
          <Section index="01" title="Problem">
            <div className="max-w-3xl space-y-4">
              {cs.problem.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </Section>
        </FadeInUp>

        <Section index="02" title="Action">
          {/* Each step fades in on its own as it scrolls into view — wrapping
              the whole (potentially very long) list in one FadeInUp would
              require an unreachable viewport fraction on short screens. */}
          <ol className="space-y-20 sm:space-y-24">
            {cs.action.map((step, i) => (
              <li key={step.title}>
                <FadeInUp>
                  <ActionStep step={step} index={i} />
                </FadeInUp>
              </li>
            ))}
          </ol>
        </Section>

        <FadeInUp>
          <Section index="03" title="Result">
            <p className="max-w-3xl">{cs.resultIntro}</p>
            {children}
            <ul className="max-w-3xl space-y-3">
              {cs.result.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span aria-hidden className="mt-1 text-accent">
                    ▸
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>
        </FadeInUp>
      </div>

      <FadeInUp>
        <div className="mt-16 max-w-3xl rounded-4xl border border-white/50 bg-white/30 p-8 shadow-xl shadow-ink/5 backdrop-blur-md sm:p-10">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Have a workflow like this?
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            If your organisation runs a manual, spreadsheet-bound process every
            season, it can almost certainly be automated — and measured.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:nicolassanzcurros@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-surface-950 transition-shadow hover:shadow-accent-glow"
            >
              Start a conversation
            </a>
            <Link
              href="/#projects"
              className="inline-flex items-center justify-center rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-accent hover:text-accent"
            >
              See other projects
            </Link>
          </div>
        </div>
      </FadeInUp>

      <p className="mt-10 max-w-3xl border-t border-ink/10 pt-6 text-xs leading-relaxed text-slate-400">
        {cs.disclaimer}
      </p>
    </article>
  );
}
