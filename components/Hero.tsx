import Image from "next/image";
import Link from "next/link";
import FadeInUp from "@/components/motion/FadeInUp";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        {/* Copy */}
        <FadeInUp>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/40 px-3 py-1 text-xs font-medium uppercase tracking-widest text-slate-600 shadow-glass backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Sports Data &amp; Automation
          </p>

          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Bridging the gap between Sports Performance and{" "}
            <span className="text-accent">Data Automation</span>
          </h1>

          <p className="mt-6 max-w-xl text-base text-slate-600 sm:text-lg">
            Hybrid Data Analyst &amp; Sports Scientist. I help sports
            organizations automate workflows and make data-driven decisions.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#projects"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-surface-950 transition-shadow hover:shadow-accent-glow"
            >
              View Projects
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </Link>
          </div>
        </FadeInUp>

        {/* Portrait — elegant arch crop */}
        <FadeInUp delay={0.15} className="mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none">
          <div className="mask-arch relative aspect-[4/5] overflow-hidden border border-white/50 bg-surface-850 shadow-xl">
            <Image
              src="/profile-portrait.jpg"
              alt="Nicolás — Sports Data Analyst and Developer"
              fill
              priority
              sizes="(max-width: 1024px) 20rem, 24rem"
              className="object-cover object-top"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/40" />
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
