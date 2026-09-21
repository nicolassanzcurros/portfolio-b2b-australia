import type { Metadata } from "next";
import CaseStudyShell from "@/components/case-study/CaseStudyShell";
import { footballCaseStudy } from "@/lib/case-studies/football";

export const metadata: Metadata = {
  title: "Advanced Football Analytics — Case Study",
  description:
    "Seven advanced football-analytics techniques — shot maps, pass networks, heatmaps, xG timelines, percentile radars — built end to end on real StatsBomb data from the 2022 World Cup Final.",
};

export default function FootballCaseStudyPage() {
  return <CaseStudyShell cs={footballCaseStudy} />;
}
