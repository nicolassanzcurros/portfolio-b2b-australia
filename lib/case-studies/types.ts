import type { ProjectImage } from "@/lib/projects";

export type Metric = { value: string; label: string };

export type CriteriaTable = {
  caption?: string;
  headers: string[];
  rows: string[][];
};

export type Step = {
  title: string;
  body: string;
  image?: ProjectImage;
  table?: CriteriaTable;
};

export type PipelineStep = { label: string; detail: string };

export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  lede: string;
  role: string;
  timeframe: string;
  stack: string[];
  heroImage?: ProjectImage;
  metrics: Metric[];
  pipeline: PipelineStep[];
  problem: string[];
  action: Step[];
  resultIntro: string;
  result: string[];
  disclaimer: string;
};
