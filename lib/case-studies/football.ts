import type { CaseStudy } from "@/lib/case-studies/types";

/**
 * Advanced Football Analytics — self-initiated deep-dive on StatsBomb's free
 * open event data for the 2022 FIFA World Cup Final (Argentina 3–3 France).
 * Built to master the professional analytics toolkit end to end: extraction,
 * cleaning, advanced visualization and tactical interpretation.
 */
export const footballCaseStudy: CaseStudy = {
  slug: "football-analytics",
  client: "StatsBomb Open Data — 2022 World Cup Final",
  title: "Advanced Football Analytics",
  lede: "A self-initiated deep-dive into the professional football-analytics toolkit — extraction, advanced visualization and tactical interpretation — built end to end on real StatsBomb event data from the 2022 World Cup Final, Argentina 3–3 France. The same workflow a club's analytics department runs on its own matches.",
  role: "Data Analyst & Developer · self-initiated",
  timeframe: "Personal project · StatsBomb open data, 2022 World Cup Final",
  stack: ["Python", "StatsBombPy", "pandas", "mplsoccer", "matplotlib"],
  metrics: [
    {
      value: "3,000+ events",
      label: "Raw match events extracted from a professional-grade dataset",
    },
    {
      value: "7 techniques",
      label: "Shot maps, pass networks, heatmaps, xG timeline, percentile radar",
    },
    {
      value: "120 minutes",
      label: "Full coverage including extra time — one complete match",
    },
    {
      value: "Self-initiated",
      label: "Built independently to master the professional toolkit",
    },
  ],
  pipeline: [
    { label: "Extract", detail: "StatsBombPy · event data" },
    { label: "Clean", detail: "pandas · filter & shape" },
    { label: "Visualise", detail: "mplsoccer · matplotlib" },
    { label: "Interpret", detail: "Tactical reads" },
  ],
  problem: [
    "Professional clubs and federations increasingly have access to rich match-event data from providers like StatsBomb, Opta and Understat — every pass, shot, duel and carry logged with pitch coordinates and an outcome. A single match produces well over 3,000 of these events. Raw, none of it is usable: nobody makes a tactical decision by reading a spreadsheet of coordinates.",
    "The gap is visualization and interpretation. Turning that event log into a shot map that shows where danger actually came from, a pass network that shows who really built the play, or a percentile radar that benchmarks a player against his position, takes a specific toolkit. I built that toolkit end to end, from extraction to tactical read, on real professional-grade data: the 2022 World Cup Final.",
  ],
  action: [
    {
      title: "Shot map — where the danger actually came from",
      body: "Every shot from the match plotted on the pitch, sized by real danger (xG) and coloured by outcome. Messi's, Mbappé's and Di María's exact shooting positions are visible at a glance — useful for reading a team's (or a single player's) attacking patterns, and their defensive exposure at the other end.",
      image: {
        src: "/mapadetiros.png",
        alt: "Shot map of the 2022 World Cup Final: every shot plotted by location, sized by xG and coloured by outcome",
      },
    },
    {
      title: "Pass network — who actually built the play",
      body: "Nodes sized by touches, edges weighted by pass volume between each pair of players. Argentina's build-up ran through Messi on the right alongside De Paul and Enzo Fernández, while Di María sat furthest forward, attacking the space behind Koundé and Dembélé — the matchup that forced Dembélé off at half-time, after conceding an early penalty on Di María.",
      image: {
        src: "/redesdepases.png",
        alt: "Pass network for Argentina: nodes sized by touches, edges weighted by pass volume between players",
      },
    },
    {
      title: "Team heatmap — a whole game plan in one image",
      body: "Argentina's activity tells the tactical story: heavy volume in their own half through Cuti Romero, Otamendi and Enzo Fernández to draw France's press, a rounder patch on the right where De Paul, Molina and Messi built patiently, and a more advanced, stretched patch on the left where Tagliafico, Mac Allister and Di María looked to exploit space — work the ball on the right, find the gap on the left.",
      image: {
        src: "/mapadecalorequipos.png",
        alt: "Team activity heatmap for Argentina across the full match, showing zones of possession and build-up",
      },
    },
    {
      title: "Individual heatmap — a player's zone of influence",
      body: "Messi's is textbook: a dense cluster in the right half-space of the final third — the “Messi zone” — with a tail dropping into his own half whenever Argentina needed him to drop and triangulate with Cuti Romero, De Paul and Molina to relieve pressure and restart the build-up.",
      image: {
        src: "/mapacalormessi.png",
        alt: "Individual heatmap for Lionel Messi: concentration in the right half-space with a tail into his own half",
      },
    },
    {
      title: "Action radius — passes, dribbles and shots, together",
      body: "Layering pass, dribble and shot locations for one player shows risk profile as well as position. Messi's passes cluster in the build-up zones — safe and high-volume — while his dribbles concentrate in the final third, where a lost ball costs his team little and a successful one breaks the defensive line.",
      image: {
        src: "/radiodeaccionmessi.png",
        alt: "Action radius for Lionel Messi: passes, dribbles and shots plotted together by pitch location",
      },
    },
    {
      title: "xG timeline — who actually deserved to win",
      body: "Cumulative Expected Goals by minute tells the real story behind a 3–3 scoreline. France's line stays flat at zero for more than 70 minutes — not a single shot, on or off target — before a near-vertical jump around minute 80: Mbappé's penalty (a fixed ≈0.79 xG) followed seconds later by his volley. Argentina's cumulative total still finishes clearly higher — about 2.7 xG to 2.3 — despite the scoreline.",
      image: {
        src: "/xg.png",
        alt: "Cumulative Expected Goals (xG) by minute for Argentina and France across the full 120 minutes",
      },
    },
    {
      title: "Pizza radar — a player's profile in one look",
      body: "Percentile radars benchmark a player against his positional peers across a full season. Mbappé sits at the 99th percentile for non-penalty goals — ahead of 99 of every 100 top-league forwards — and at the 15th percentile for defensive actions: 85% of forwards defend more, and better, than he does. One chart, a complete profile — strengths and gaps together.",
      image: {
        src: "/radarpizzambappe.png",
        alt: "Percentile radar (pizza chart) for Kylian Mbappé across attacking, progression and defensive metrics",
      },
    },
  ],
  resultIntro:
    "Seven techniques, one match, one consistent workflow — extraction, cleaning, visualization, interpretation. The same toolkit applies directly to a club's own tracking and event data.",
  result: [
    "A complete, reusable analytics workflow — from a raw StatsBomb event feed to a tactical read a coaching staff can act on — built on real professional-grade data, not a toy dataset.",
    "Demonstrated breadth across the toolkit clubs actually use day to day: shot maps, pass networks, team and individual heatmaps, action-radius plots, xG timelines and percentile radars.",
    "Every visualization paired with a specific tactical or performance read, not just a chart — the Dembélé/Di María matchup, the 70-minute spell where France registered zero shots, Mbappé's attacking-vs-defensive profile.",
    "Self-initiated: the same instinct for turning raw data into decision-ready insight that shaped the RFEA scholarship system, the DAN pipeline and the rankings dashboard — applied here to football, ready to point at a club's own dataset.",
  ],
  disclaimer:
    "Match data via StatsBomb's free open dataset (2022 FIFA World Cup Final, Argentina vs France). Self-initiated analysis, built independently to master the professional football-analytics toolkit.",
};
