type SectionProps = {
  index?: string;
  title: string;
  children: React.ReactNode;
};

export default function Section({ index, title, children }: SectionProps) {
  return (
    <section className="border-t border-ink/10 pt-10 sm:pt-14">
      <div className="flex items-baseline gap-3">
        {index && (
          <span className="font-mono text-sm text-accent">{index}</span>
        )}
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          {title}
        </h2>
      </div>
      <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
        {children}
      </div>
    </section>
  );
}
