import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function ServiceCard({
  title,
  description,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <article className="rounded-lg border border-orange-100 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:shadow-none dark:hover:border-orange-500/60">
      <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-orange-600 text-white dark:bg-orange-500 dark:text-slate-950">
        <Icon aria-hidden="true" className="size-8" strokeWidth={2.2} />
      </div>
      <h3 className="mt-5 text-base font-bold text-slate-950 dark:text-white">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
        {description}
      </p>
    </article>
  );
}
