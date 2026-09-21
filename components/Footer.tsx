import Link from "next/link";
import FadeInUp from "@/components/motion/FadeInUp";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="scroll-mt-28 border-t border-ink/10 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeInUp>
          <h2 className="max-w-2xl font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Have a workflow worth automating?
          </h2>
          <p className="mt-3 max-w-xl text-slate-600">
            Available for freelance and B2B engagements with athletics clubs and
            performance teams.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:nicolassanzcurros@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-surface-950 transition-shadow hover:shadow-accent-glow"
            >
              nicolassanzcurros@gmail.com
            </a>
            <Link
              href="/on-the-track"
              className="inline-flex items-center justify-center rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-accent hover:text-accent"
            >
              On the Track →
            </Link>
          </div>

          <p className="mt-12 text-xs text-slate-400">
            © {new Date().getFullYear()} Nicolás. Built with Next.js &amp; Tailwind CSS.
          </p>
        </FadeInUp>
      </div>
    </footer>
  );
}
