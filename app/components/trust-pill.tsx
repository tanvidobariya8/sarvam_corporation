import type { LucideIcon } from "lucide-react";

type TrustPillProps = {
  label: string;
  icon: LucideIcon;
};

export function TrustPill({ label, icon: Icon }: TrustPillProps) {
  return (
    <div className="inline-flex items-center gap-2 border-r border-orange-100 pr-4 text-sm font-semibold text-slate-800 last:border-r-0 dark:border-slate-700 dark:text-slate-200">
      <span className="inline-flex size-8 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-300">
        <Icon aria-hidden="true" className="size-4" />
      </span>
      {label}
    </div>
  );
}
