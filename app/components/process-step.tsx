import type { LucideIcon } from "lucide-react";

type ProcessStepProps = {
  index: number;
  title: string;
  description: string;
  icon: LucideIcon;
};

export function ProcessStep({
  index,
  title,
  description,
  icon: Icon,
}: ProcessStepProps) {
  return (
    <article className="relative text-center">
      <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-orange-600 text-white shadow-sm dark:bg-orange-500 dark:text-slate-950">
        <Icon aria-hidden="true" className="size-9" strokeWidth={2.1} />
      </div>
      <h3 className="mt-5 text-base font-bold text-slate-950 dark:text-white">
        {index}. {title}
      </h3>
      <p className="mx-auto mt-3 max-w-48 text-sm leading-6 text-slate-700 dark:text-slate-300">
        {description}
      </p>
    </article>
  );
}
