type SectionHeadingProps = {
  eyebrow: string;
  title: string;
};

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-wide text-orange-600 dark:text-orange-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black text-slate-950 dark:text-white sm:text-4xl">
        {title}
      </h2>
      <div className="mx-auto mt-4 h-1 w-11 rounded-full bg-orange-600 dark:bg-orange-300" />
    </div>
  );
}
