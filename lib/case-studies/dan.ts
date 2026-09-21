import type { CaseStudy } from "@/lib/case-studies/types";

/**
 * DAN — High-Performance Talent Algorithm (Automated Talent Scouting Pipeline).
 * Confirmed by the client: 150+ ranking events monitored, 103 athletes
 * identified automatically, ~30 s end-to-end runtime.
 */
export const danCaseStudy: CaseStudy = {
  slug: "dan",
  client: "RFEA — Sporting Direction",
  title: "High-Performance Talent Algorithm",
  lede: "An automated talent-scouting pipeline for the RFEA's Sporting Direction. Every year the federation has to identify which athletes have earned high-performance status (DAN) from the World Athletics rankings — a cross-filtered rule set applied across 150+ events. The pipeline does it in 30 seconds.",
  role: "Data Analyst & Developer",
  timeframe: "Built for the RFEA's year-end DAN qualification",
  stack: ["Python", "Playwright", "pandas", "ETL"],
  heroImage: {
    src: "/WorldRanking.png",
    alt: "World Athletics Men's Overall Ranking — one of 150+ event rankings the pipeline scrapes and filters",
  },
  metrics: [
    { value: "150+ events", label: "World ranking tables monitored, men and women" },
    { value: "30 seconds", label: "End-to-end runtime, from execution to output" },
    { value: "103 athletes", label: "DAN-qualifying élites identified automatically" },
    { value: "100%", label: "Rule coverage — no manual cross-checking" },
  ],
  pipeline: [
    { label: "Extract", detail: "Playwright · World Athletics rankings" },
    { label: "Filter", detail: "DAN rule set · Top 20 / 15 / 10" },
    { label: "Structure", detail: "pandas · one clean table" },
    { label: "Export", detail: "Decision-ready Excel" },
  ],
  problem: [
    "At year-end the RFEA needs the definitive list of athletes who reached high-performance status (DAN). Qualification is read from the World Athletics rankings, and the threshold depends on two cross-filtered conditions: the athlete's category and whether their event is Olympic.",
    "Doing this by hand meant opening the ranking for every event in every category — over 150 tables between men and women — scrolling for the Spanish athletes, and applying the right cut-off to each one. Slow, and a rule set exactly complex enough for human error to creep in.",
  ],
  action: [
    {
      title: "Extract — real-time scraping of World Athletics",
      body: "A Python ETL pipeline scrapes the World Athletics rankings in real time, iterating over every event and category and pulling the full ranking table — position, athlete, category, mark, date, date of birth — for each one.",
      image: {
        src: "/dan-code.png",
        alt: "Python ETL script scraping World Athletics rankings and tagging each athlete with their DAN qualification",
      },
    },
    {
      title: "Filter — the DAN rule set as code",
      body: "The messy part, encoded once and applied consistently. Each athlete is matched against the qualification threshold for their category and event type, and flagged as DAN or not.",
      table: {
        caption: "DAN world-ranking cut-off by category and event type",
        headers: ["Category", "Olympic event", "Non-Olympic event"],
        rows: [
          ["Senior", "Top 20", "Top 15"],
          ["U18 / U20", "Top 15", "Top 10"],
        ],
      },
    },
    {
      title: "Structure — one clean, decision-ready table",
      body: "pandas consolidates every qualifying athlete into a single structured output, keeping the supporting data the federation needs on file: mark, date, category, event, date of birth, ranking position and the Top-limit that was applied.",
    },
  ],
  resultIntro:
    "Instead of days of manual ranking-by-ranking scouting, the pipeline delivers a clean tabular list in exactly 30 seconds — every athlete who meets the DAN criteria, ready for the federation's decision-making.",
  result: [
    "103 DAN-qualifying athletes identified automatically, with zero manual cross-checking.",
    "150+ event rankings across all categories covered in a single run.",
    "Every record carries its supporting evidence — mark, date, category, event, date of birth, ranking position and applied Top-limit — so each call is auditable.",
    "A 30-second run replaces a task that previously took the Sporting Direction days.",
  ],
  disclaimer:
    "Data sourced from public World Athletics records and official RFEA publication criteria. Developed as part of academic research (TFG).",
};
