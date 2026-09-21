import type { PipelineStep } from "@/lib/case-studies/types";

export default function Pipeline({ steps }: { steps: PipelineStep[] }) {
  return (
    <ol className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
      {steps.map((step, i) => (
        <li key={step.label} className="flex items-center gap-3 sm:flex-1">
          <div className="flex-1 rounded-2xl border border-white/50 bg-white/30 p-5 shadow-glass backdrop-blur-md">
            <p className="font-display text-base font-bold text-ink">{step.label}</p>
            <p className="mt-0.5 text-sm text-slate-500">{step.detail}</p>
          </div>
          {i < steps.length - 1 && (
            <span aria-hidden className="rotate-90 text-accent sm:rotate-0">
              →
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}
