import type { CaseStudy } from "@/lib/case-studies/types";

/**
 * Interactive Streamlit Data Dashboard — self-initiated project built on
 * RFEA's public all-time ranking (men's absolute category).
 * Confirmed by the client: 1,023 marks digitised from the PDF; ~51 events
 * implied by the top-20-per-event format (1,023 / 20 ≈ 51) — shown as "50+".
 */
export const streamlitCaseStudy: CaseStudy = {
  slug: "streamlit-dashboard",
  client: "RFEA — Public All-Time Rankings",
  title: "Interactive Streamlit Data Dashboard",
  lede: "RFEA publishes some of the deepest historical data in Spanish athletics — but only as static PDFs. On my own initiative, I turned the men's absolute all-time top-20 ranking into an interactive Streamlit dashboard that surfaces which venues actually produce Spain's best performances, and whether each event's record book is being renewed by the current generation.",
  role: "Data Analyst & Developer · self-initiated",
  timeframe: "Personal project · built on RFEA's public rankings",
  stack: ["Python", "PDF Extraction", "pandas", "Streamlit", "Plotly"],
  heroImage: {
    src: "/RFEAweb.png",
    alt: "RFEA's public statistics portal — deep historical data, published only as static, unfilterable reports",
  },
  metrics: [
    {
      value: "1,023 marks",
      label: "All-time top performances digitised from a single static PDF",
    },
    { value: "50+ events", label: "Full men's absolute category, one dashboard" },
    {
      value: "2 strategic lenses",
      label: "Best-venue leaderboard + generational renewal thermometer",
    },
    { value: "Self-initiated", label: "Built independently, without a federation request" },
  ],
  pipeline: [
    { label: "Extract", detail: "AI-assisted PDF parsing" },
    { label: "Structure", detail: "pandas · master workbook" },
    { label: "Visualise", detail: "Streamlit + Plotly" },
    { label: "Decide", detail: "Venue & generational insight" },
  ],
  problem: [
    "RFEA publishes the all-time top-20 ranking for every event in the men's absolute category — athlete, mark, wind, venue, date, year of birth. Comprehensive data, but locked inside a static PDF: one long table per event, with no way to filter it, compare across events, or aggregate anything.",
    "That format hides genuinely useful patterns. Which track actually produces Spain's fastest sprint times? Which international meeting keeps showing up in the all-time-best list for a given event? Is an event's record book being renewed by the current generation, or still dominated by marks set decades ago? Answering any of that meant reading dozens of PDF tables by hand and tallying venues and birth years on paper — not realistic across 50-plus events at once.",
  ],
  action: [
    {
      title: "Source — a rich but static publication",
      body: "The starting point is public: RFEA's “Ránking de España Absoluto de Todos los Tiempos” — the top 20 performances in every event, with athlete, mark, wind, venue, date and year of birth. Comprehensive, but formatted to be printed, not queried.",
      image: {
        src: "/RFEAranking.png",
        alt: "RFEA all-time ranking PDF: top-20 performances per event with athlete, mark, venue, wind and date",
      },
    },
    {
      title: "Extract — AI-assisted PDF parsing",
      body: "An AI-assisted Python script parses the PDF event by event, pulling every field for every mark into structured rows — rebuilding, as data, tables that were designed only to be read.",
      image: {
        src: "/codigostreamlit.png",
        alt: "Python project: PDF extractor and Streamlit app.py building KPI cards and Plotly charts from the parsed rankings",
      },
    },
    {
      title: "Structure — one master workbook",
      body: "The extraction produces a single Excel workbook with every mark as its own row: event, mark, athlete, year of birth, venue, date. 1,023 performances, ready to filter, sort and chart instead of scroll through.",
      image: {
        src: "/excelranking.png",
        alt: "Structured workbook: 1,023 all-time marks with athlete, venue, date and year of birth, one row per performance",
      },
    },
    {
      title: "Visualise — a Streamlit + Plotly dashboard",
      body: "On top of the workbook: live KPI cards (total marks, average birth year, most frequent venue), a “generational thermometer” histogram of birth years, and a venue leaderboard — all recalculating the instant an event is selected.",
      image: {
        src: "/webstreamlit1.png",
        alt: "Streamlit dashboard: KPI cards, generational-thermometer histogram and fastest-venue leaderboard",
      },
    },
    {
      title: "Explore — per-event drill-down",
      body: "A sidebar selector switches between every event in the dataset, and the underlying results table is always one click away — so any claim on the dashboard can be checked straight against the source rows.",
      image: {
        src: "/webstreamlit2.png",
        alt: "Event selector and underlying results table for the 800m, drilling down from the dashboard to the raw marks",
      },
    },
  ],
  resultIntro:
    "The dashboard turns a static publication nobody could query into a self-service tool that surfaces decisions, not just numbers. Two examples from the current data:",
  result: [
    "Generational thermometer: the birth-year histogram shows, event by event, whether the record book is being renewed by the current generation or still held by marks set decades ago — pointing Sporting Direction toward disciplines that need development investment.",
    "1,023 marks across 50+ events, instantly filterable and cross-referenced by venue, wind and generation — replacing a PDF nobody could query.",
    "A working, decision-ready tool built independently from RFEA's public data, without a federation request — the same instinct for turning public data into insight that shaped the scholarship system and the DAN pipeline.",
  ],
  disclaimer:
    "Data sourced from RFEA's public all-time ranking publication (men's absolute category). A self-initiated analysis, independent of any federation mandate.",
};
