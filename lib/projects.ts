export type ProjectImage = { src: string; alt: string };

export type Project = {
  id: string;
  client: string;
  title: string;
  /** Long description used as a fallback when `summary` is absent. */
  description: string;
  /** Two-line business-impact line shown on the front card. */
  summary?: string;
  stack: string[];
  /** Cover image for the front card (used instead of the embed placeholder). */
  cover?: ProjectImage;
  /** When set, the card links to /projects/<slug> for a full case study. */
  slug?: string;
  /**
   * Optional embed URL (Loom share link or dashboard iframe src) for cards
   * that show a walkthrough inline rather than linking to a case study.
   */
  embedUrl?: string;
};

export const projects: Project[] = [
  {
    id: "scholarship-system",
    slug: "rfea",
    client: "RFEA",
    title: "Automated Scholarship System",
    summary:
      "Cut a 3-week manual scholarship-scoring process at Spain's national athletics federation to a 15-minute pipeline run — 236 athletes per cycle — plus two Power BI dashboards for Sporting Direction.",
    description:
      "End-to-end pipeline that scrapes World Athletics with Playwright, scores 236 athletes against the RFEA criteria in pandas, and outputs a single Power BI-ready workbook — delivered as an internal managed service.",
    stack: ["Python", "Playwright", "pandas", "Power BI"],
    cover: {
      src: "/dashboard-performance.png",
      alt: "Power BI dashboard: scholarship points by athletics discipline",
    },
  },
  {
    id: "talent-algorithm",
    slug: "dan",
    client: "RFEA — Sporting Direction",
    title: "High-Performance Talent Algorithm",
    summary:
      "An ETL pipeline that scrapes 150+ World Athletics rankings and applies the RFEA's DAN qualification rules — 103 high-performance athletes identified automatically in 30 seconds.",
    description:
      "Automated talent-scouting pipeline: real-time scraping of World Athletics, the DAN rule set (Top 20 / 15 / 10 by category and event type) encoded once, and a clean structured output.",
    stack: ["Python", "Playwright", "pandas", "ETL"],
    cover: {
      src: "/dan-excel.png",
      alt: "Structured DAN output table: athletes, category, event, mark and ranking position",
    },
  },
  {
    id: "football-analytics",
    slug: "football-analytics",
    client: "StatsBomb Open Data",
    title: "Advanced Football Analytics",
    summary:
      "Seven advanced visualization techniques — shot maps, pass networks, heatmaps, xG timeline, percentile radar — built end to end on real StatsBomb data from the 2022 World Cup Final.",
    description:
      "Extraction, cleaning and tactical visualization on 3,000+ match events: shot maps, pass networks, team and individual heatmaps, action radius, xG timeline and a percentile pizza radar.",
    stack: ["Python", "StatsBombPy", "pandas", "mplsoccer"],
    cover: {
      src: "/mapadetiros.png",
      alt: "Shot map of the 2022 World Cup Final: every shot plotted by location, sized by xG and coloured by outcome",
    },
  },
  {
    id: "streamlit-dashboard",
    slug: "streamlit-dashboard",
    client: "RFEA — Public All-Time Rankings",
    title: "Interactive Streamlit Data Dashboard",
    summary:
      "Turned RFEA's static all-time ranking PDF into an interactive Streamlit dashboard — 1,023 marks, a best-venue leaderboard and a generational-renewal thermometer. Self-initiated, no federation request.",
    description:
      "AI-assisted PDF extraction, a pandas master workbook and a Streamlit + Plotly app that surface which venues produce Spain's best marks and whether each event is being renewed by the current generation.",
    stack: ["Python", "pandas", "Streamlit", "Plotly"],
    cover: {
      src: "/webstreamlit1.png",
      alt: "Streamlit dashboard: KPI cards, generational-thermometer histogram and fastest-venue leaderboard",
    },
  },
];

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);
