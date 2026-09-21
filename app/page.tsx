import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";
import FadeInUp from "@/components/motion/FadeInUp";

export default function HomePage() {
  return (
    <>
      <Hero />

      <ProjectsGrid />

      {/* About — brief positioning statement; full athletics CV lives at /on-the-track */}
      <section id="about" className="scroll-mt-28 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <FadeInUp>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                About
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.1} className="space-y-5 text-base text-slate-600 sm:text-lg">
              <p>
                I sit between two worlds: the training track and the data
                pipeline. As a Sports Scientist I know what performance staff
                actually need; as a Developer I build the automation that gets it
                to them faster.
              </p>
              <p>
                My work removes the manual, spreadsheet-bound steps that slow
                federations and clubs down — turning raw performance data into
                reproducible systems, models and dashboards that pay for
                themselves in hours saved.
              </p>
              <p className="text-slate-700">
                Athlete and athletics coach background —{" "}
                <a
                  href="/on-the-track"
                  className="text-accent underline-offset-4 hover:underline"
                >
                  see On the Track
                </a>
                .
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>
    </>
  );
}
