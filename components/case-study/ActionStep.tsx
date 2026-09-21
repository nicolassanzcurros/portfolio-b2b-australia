import Figure from "@/components/case-study/Figure";
import { tintForIndex } from "@/lib/tints";
import type { CriteriaTable, Step } from "@/lib/case-studies/types";

function CriteriaTableBlock({ table }: { table: CriteriaTable }) {
  return (
    <figure className="my-6 max-w-lg overflow-x-auto rounded-2xl border border-white/60 bg-white/50 p-1">
      <table className="w-full border-collapse text-left text-base">
        <thead>
          <tr>
            {table.headers.map((header, i) => (
              <th
                key={header}
                className={`border-b border-ink/10 px-3 py-2 font-semibold ${
                  i === 0 ? "text-slate-500" : "text-accent"
                }`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, i) => (
                <td
                  key={i}
                  className={`border-b border-ink/5 px-3 py-2 last:border-b-0 ${
                    i === 0 ? "font-medium text-ink" : "text-slate-600"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {table.caption && (
        <figcaption className="px-3 py-2 text-sm text-slate-500">
          {table.caption}
        </figcaption>
      )}
    </figure>
  );
}

/**
 * One step of the Action section. Images render at the full (wide) page
 * width — these are dense screenshots (code, spreadsheets, dashboards) and
 * a narrower column makes them unreadable. Only the prose is capped to a
 * comfortable reading measure. A large editorial numeral and a rotating
 * pastel mat around the screenshot keep the section from reading as a flat,
 * repetitive paragraph/image list.
 */
export default function ActionStep({ step, index }: { step: Step; index: number }) {
  const tint = tintForIndex(index);
  const numeral = String(index + 1).padStart(2, "0");

  return (
    <div className="flex gap-5 sm:gap-10">
      <span
        aria-hidden
        className="hidden select-none pt-1 font-display text-7xl font-extrabold leading-none text-ink/10 sm:block sm:text-8xl"
      >
        {numeral}
      </span>

      <div className="min-w-0 flex-1">
        <h3 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          <span className="mr-2 font-mono text-base text-slate-400 sm:hidden">
            {numeral}
          </span>
          {step.title}
        </h3>
        <p className="mt-3 max-w-3xl text-lg leading-relaxed text-slate-600">
          {step.body}
        </p>
        {step.table && <CriteriaTableBlock table={step.table} />}
        {step.image && (
          <div className="mt-7">
            <Figure
              src={step.image.src}
              alt={step.image.alt}
              caption={step.image.alt}
              tint={tint}
            />
          </div>
        )}
      </div>
    </div>
  );
}
