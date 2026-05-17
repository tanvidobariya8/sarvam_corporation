import type { LucideIcon } from "lucide-react";

type StatCardProps = {
  value: string;
  label: string;
  icon: LucideIcon;
};

export function StatCard({ value, label, icon: Icon }: StatCardProps) {
  return (
    <article className="rounded-lg border border-orange-100 bg-white p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
      <Icon
        aria-hidden="true"
        className="mx-auto size-11 text-orange-600 dark:text-orange-300"
        strokeWidth={2.2}
      />
      <p className="mt-5 text-2xl font-black text-orange-700 dark:text-orange-200">
        {value}
      </p>
      <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{label}</p>
    </article>
  );
}
