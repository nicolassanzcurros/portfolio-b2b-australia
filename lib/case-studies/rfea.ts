import type { CaseStudy } from "@/lib/case-studies/types";

/**
 * RFEA — Automated Scholarship System.
 * Figures confirmed by the client: 236 athletes, ~15 competitions + 2 world
 * rankings per cycle; a ~3-week manual process reduced to a ~15-minute run.
 */
export const rfeaCaseStudy: CaseStudy = {
  slug: "rfea",
  client: "RFEA — Royal Spanish Athletics Federation",
  title: "Automated Scholarship System",
  lede: "Spain's national athletics federation allocates high-performance scholarships through a points-based scoring system. I automated the entire calculation end to end and delivered it as an internal managed service — operating the pipeline each cycle and handing Sporting Direction two dashboards that show not just who qualifies, but where the talent investment is working.",
  role: "Data Analyst & Developer · internal managed service",
  timeframe: "Production · 2025–2026 scholarship cycle",
  stack: ["Python", "Playwright", "pandas", "Excel", "Power BI"],
  metrics: [
    { value: "3 weeks → 15 min", label: "Manual scoring process, per cycle" },
    {
      value: "236 athletes",
      label: "Scored per cycle across ~15 competitions + 2 world rankings",
    },
    {
      value: "2 dashboards",
      label: "Interactive Power BI, delivered to Sporting Direction",
    },
    {
      value: "Still commissioned",
      label: "Runs requested months after the contract ended",
    },
  ],
  pipeline: [
    { label: "Extract", detail: "Playwright · World Athletics" },
    { label: "Transform", detail: "pandas · scoring & criteria" },
    { label: "Load", detail: "Automated Excel export" },
    { label: "Analyse", detail: "2 Power BI dashboards" },
  ],
  problem: [
    "Scholarships for Spain's elite athletes are awarded through a points-based system (baremos). Each athlete earns points from two independent sources: their final placing in every international competition — weighted by that competition's importance — and their position in World Athletics' annual world rankings, scored separately for individual events and relays.",
    "Every cycle, one analyst had to read the scholarship regulations, open the results of roughly 15 competitions plus two world rankings, cross-reference all 236 athletes against the scoring tables across a mix of PDFs and spreadsheets, and consolidate everything by hand. Start to finish it took about three weeks — error-prone, hard to audit, and leaving no capacity to actually analyse the outcome.",
  ],
  action: [
    {
      title: "Extract — dynamic scraping with Playwright",
      body: "A Playwright script drives the World Athletics site to pull the annual world rankings for every Spanish athlete, individual events and relays, handling the JavaScript-rendered tables a plain HTTP request can't reach. Competition results are ingested the same way.",
      image: {
        src: "/code.png",
        alt: "Python scoring engine: event-to-discipline mapping and world-ranking scraping targets in gestor_rfea2026.py",
      },
    },
    {
      title: "Transform — scoring engine in pandas",
      body: "pandas cleans and normalises every feed, maps each event to its discipline sector (sprints, jumps, hurdles, throws, endurance, race walk, combined), applies the RFEA scoring criteria, and computes each athlete's points by source, their total, their level and their final status.",
      image: {
        src: "/excel.png",
        alt: "Generated master workbook: every athlete with points broken down by competition and by world ranking, plus computed level and final status",
      },
    },
    {
      title: "Load — a single Power BI-ready workbook",
      body: "The pipeline writes one consolidated Excel workbook (men and women) that feeds the Power BI data model directly — no manual copy-paste between the calculation and the reporting layer, so the analysis is always in sync with the latest run.",
    },
  ],
  resultIntro:
    "A three-week manual process became a 15-minute pipeline run, executed each cycle as an internal managed service: I operated the pipeline and delivered the dashboards to Sporting Direction.",
  result: [
    "236 athletes scored per cycle from ~15 competitions and 2 world rankings, in one reproducible run.",
    "One authoritative workbook feeding Power BI — fully auditable and repeatable every cycle.",
    "Dashboard 1 — performance by discipline: where points concentrate, where the gaps are, gender comparison, and how many athletes reach each scholarship tier.",
    "Dashboard 2 — competition vs world ranking: how much of each athlete's score comes from major championships versus ranking position. A direct RFEA request, to keep scholarships driven by championship performance and to flag athletes who rank well but underdeliver under pressure.",
    "Used in production for the scholarship cycle. The ROI was clear enough that the Federation kept commissioning remote runs months after the contract ended, to evaluate new competitions.",
  ],
  disclaimer:
    "Data sourced from public World Athletics records and official RFEA publication criteria. Developed as part of academic research (TFG).",
};
