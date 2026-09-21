import type { Metadata } from "next";
import CaseStudyShell from "@/components/case-study/CaseStudyShell";
import DashboardTabs from "@/components/case-study/DashboardTabs";
import { rfeaCaseStudy } from "@/lib/case-studies/rfea";

export const metadata: Metadata = {
  title: "Automated Scholarship System (RFEA) — Case Study",
  description:
    "How I automated the RFEA's points-based athlete scholarship calculation end to end — Playwright, pandas, Excel — and delivered two interactive Power BI dashboards to Sporting Direction.",
};

export default function RfeaCaseStudyPage() {
  return (
    <CaseStudyShell cs={rfeaCaseStudy}>
      <div className="my-8 rounded-xl border border-white/50 bg-white/30 p-3 shadow-glass backdrop-blur-md sm:p-4">
        <DashboardTabs />
      </div>
    </CaseStudyShell>
  );
}
