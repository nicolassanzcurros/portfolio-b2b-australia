import type { Metric } from "@/lib/case-studies/types";

export default function MetricGrid({ items }: { items: Metric[] }) {
  return (
    <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {items.map((metric) => (
        <div
          key={metric.label}
          className="rounded-2xl border border-white/50 bg-white/30 p-5 shadow-glass backdrop-blur-md"
        >
          <dd className="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">
            {metric.value}
          </dd>
          <dt className="mt-1 text-sm leading-snug text-slate-500">
            {metric.label}
          </dt>
        </div>
      ))}
    </dl>
  );
}
