import type { Metadata } from "next";
import Image from "next/image";
import FadeInUp from "@/components/motion/FadeInUp";
import Milestone from "@/components/track/Milestone";

export const metadata: Metadata = {
  title: "On the Track — Nicolás",
  description:
    "Athletics CV: national-level competitive experience and coaching background behind the data work.",
};

const milestones = [
  {
    title: "Track & Field Coach — Colmenar Viejo Athletics Club",
    body: "Coached junior athletes across the U8, U14 and U16 categories in Madrid, Spain, designing age-appropriate training programs and mentoring competition preparation.",
    note: "Backed by an INEF degree — equivalent to Levels 1 and 2 of Spain's national athletics coaching course.",
    images: [
      {
        src: "/entrenador.jpg",
        alt: "Coaching junior athletes at Colmenar Viejo Athletics Club, Madrid",
      },
    ],
  },
  {
    title:
      "Bachelor of Exercise and Sports Science — INEF, Universidad Politécnica de Madrid",
    body: "2022 – 2026. Spain's leading sports science degree — the academic foundation behind the coaching and the data work alike.",
    images: [],
  },
  {
    title: "National-Level Athlete — Spanish Athletics Championships",
    body: "Multiple-time finalist at the Spanish Athletics Championships, categories U16 to U23, competing in middle- and long-distance events.",
    images: [
      {
        src: "/athlete.jpg",
        alt: "On the podium at the Spanish University Athletics Championships",
      },
    ],
  },
  {
    title: "International Experience — USA & Portugal",
    body: "Academic and athletic experience abroad — including a spell signed with Sporting Clube de Portugal — building adaptability in multicultural, high-performance environments.",
    images: [
      {
        src: "/USA.jpg",
        alt: "Racing cross country for Beresford in South Dakota, USA",
      },
      {
        src: "/portugal.jpg",
        alt: "Racing for Sporting Clube de Portugal",
      },
    ],
  },
];

export default function OnTheTrackPage() {
  return (
    <article>
      {/* Full-bleed hero banner */}
      <FadeInUp>
        <div className="relative h-[62vh] min-h-[420px] w-full overflow-hidden sm:h-[68vh]">
          <Image
            src="/header.jpg"
            alt="Racing for Sporting Clube de Portugal"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_40%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-transparent" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="mx-auto max-w-6xl px-4 pb-10 sm:px-6 sm:pb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/80">
                Athlete &amp; Coach
              </p>
              <h1 className="mt-3 font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
                On the <span className="text-accent-soft">Track</span>
              </h1>
            </div>
          </div>
        </div>
      </FadeInUp>

      <div className="mx-auto max-w-6xl px-4 pt-10 pb-24 sm:px-6 sm:pt-14">
        <FadeInUp>
          <p className="max-w-3xl text-xl leading-relaxed text-slate-600">
            INEF-qualified Sports Scientist and national-level athlete — a
            finalist at the Spanish Athletics Championships across U16 to
            U23 — with 3+ years coaching junior athletes (U8–U16). The
            competitive and coaching background that grounds every model and
            dashboard I build.
          </p>
        </FadeInUp>

        <div className="mt-16 space-y-20 sm:space-y-24">
          {milestones.map((milestone, i) => (
            <FadeInUp key={milestone.title}>
              <Milestone index={i} {...milestone} />
            </FadeInUp>
          ))}
        </div>
      </div>
    </article>
  );
}
