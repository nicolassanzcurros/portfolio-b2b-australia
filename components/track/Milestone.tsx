import Figure from "@/components/case-study/Figure";
import { tintForIndex } from "@/lib/tints";

type MilestoneImage = { src: string; alt: string };

type MilestoneProps = {
  index: number;
  title: string;
  body: string;
  note?: string;
  images?: MilestoneImage[];
};

/**
 * One entry in the "On the Track" timeline. Mirrors the case-study
 * ActionStep visual language (editorial numeral rail, tinted photo mat) so
 * the athletics side of the site reads as part of the same system.
 */
export default function Milestone({
  index,
  title,
  body,
  note,
  images = [],
}: MilestoneProps) {
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
          {title}
        </h3>
        <p className="mt-3 max-w-3xl text-lg leading-relaxed text-slate-600">
          {body}
        </p>
        {note && (
          <p className="mt-3 max-w-3xl text-sm italic leading-relaxed text-slate-500">
            {note}
          </p>
        )}

        {images.length > 0 && (
          <div
            className={`mt-7 grid gap-5 ${
              images.length > 1 ? "sm:grid-cols-2" : "max-w-sm"
            }`}
          >
            {images.map((image, i) => (
              <Figure
                key={image.src}
                src={image.src}
                alt={image.alt}
                tint={tintForIndex(index + i)}
                ratio={images.length > 1 ? "4 / 5" : "3 / 4"}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
