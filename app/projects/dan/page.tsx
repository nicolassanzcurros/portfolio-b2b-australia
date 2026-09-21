import type { Metadata } from "next";
import CaseStudyShell from "@/components/case-study/CaseStudyShell";
import Figure from "@/components/case-study/Figure";
import { danCaseStudy } from "@/lib/case-studies/dan";
import { tintBg, tintForIndex } from "@/lib/tints";

export const metadata: Metadata = {
  title: "High-Performance Talent Algorithm (DAN) — Case Study",
  description:
    "An automated ETL pipeline that scrapes 150+ World Athletics rankings and applies the RFEA's DAN qualification rules to identify 103 high-performance athletes in 30 seconds.",
};

const highlights = [
  { value: "103", label: "athletes flagged" },
  { value: "150+", label: "rankings covered" },
  { value: "30 s", label: "per run" },
];

export default function DanCaseStudyPage() {
  return (
    <CaseStudyShell cs={danCaseStudy}>
      <div className="my-8">
        <dl className="grid grid-cols-3 gap-4">
          {highlights.map((item, i) => (
            <div
              key={item.label}
              className={`rounded-2xl border border-white/70 p-6 text-center shadow-glass ${tintBg[tintForIndex(i)]}`}
            >
              <dd className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                {item.value}
              </dd>
              <dt className="mt-1 text-sm text-slate-600">{item.label}</dt>
            </div>
          ))}
        </dl>

        <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-accent">
          The deliverable
        </p>
        <Figure
          src="/dan-excel.png"
          alt="Structured DAN output: rank, athlete, gender, category, event, mark, date, date of birth, Olympic flag and applied Top-limit"
          caption="Decision-ready output — every qualifying athlete with the supporting data the federation keeps on file."
          tint={tintForIndex(3)}
        />
      </div>
    </CaseStudyShell>
  );
}
