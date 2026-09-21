import type { Metadata } from "next";
import CaseStudyShell from "@/components/case-study/CaseStudyShell";
import { streamlitCaseStudy } from "@/lib/case-studies/streamlit";
import { tintBg, tintForIndex } from "@/lib/tints";

export const metadata: Metadata = {
  title: "Interactive Streamlit Data Dashboard — Case Study",
  description:
    "A self-initiated Streamlit + Plotly dashboard that turns RFEA's static all-time ranking PDF into a venue leaderboard and a generational-renewal thermometer, across 1,023 marks.",
};

const insights = [
  {
    event: "100m · all-time top 20",
    headline: "Salamanca is Spain's fastest 100m track",
    takeaway:
      "A case for routing a quality sprint meeting there — the venue that already produces the country's best times.",
  },
  {
    event: "1500m · all-time top 20",
    headline: "4 of the 20 best-ever marks were run in Mónaco",
    takeaway:
      "A case for prioritising Spanish 1500m entries at the Herculis Diamond League meeting.",
  },
];

export default function StreamlitCaseStudyPage() {
  return (
    <CaseStudyShell cs={streamlitCaseStudy}>
      <div className="my-8 grid gap-5 sm:grid-cols-2">
        {insights.map((insight, i) => (
          <div
            key={insight.event}
            className={`rounded-2xl border border-white/70 p-6 shadow-glass ${tintBg[tintForIndex(i)]}`}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              {insight.event}
            </p>
            <p className="mt-2 font-display text-xl font-bold text-ink">
              {insight.headline}
            </p>
            <p className="mt-2 text-base leading-relaxed text-slate-600">
              {insight.takeaway}
            </p>
          </div>
        ))}
      </div>
    </CaseStudyShell>
  );
}
