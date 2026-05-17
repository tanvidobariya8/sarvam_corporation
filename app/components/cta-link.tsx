import type { LucideIcon } from "lucide-react";

type CtaLinkProps = {
  href: string;
  label: string;
  icon?: LucideIcon;
  variant?: "primary" | "outline" | "light";
  className?: string;
};

const variants = {
  primary:
    "border-orange-600 bg-orange-600 text-white shadow-sm hover:border-orange-700 hover:bg-orange-700 dark:border-orange-500 dark:bg-orange-500 dark:text-slate-950 dark:hover:border-orange-400 dark:hover:bg-orange-400",
  outline:
    "border-orange-200 bg-white text-orange-700 hover:border-orange-600 hover:bg-orange-50 dark:border-slate-700 dark:bg-slate-900 dark:text-orange-200 dark:hover:border-orange-400 dark:hover:bg-slate-800",
  light:
    "border-white bg-white text-orange-700 shadow-sm hover:bg-orange-50 dark:border-orange-100 dark:bg-orange-100 dark:text-orange-950 dark:hover:bg-white",
};

export function CtaLink({
  href,
  label,
  icon: Icon,
  variant = "primary",
  className = "",
}: CtaLinkProps) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-4 text-sm font-semibold transition sm:min-h-12 sm:px-5 ${variants[variant]} ${className}`}
    >
      {Icon ? <Icon aria-hidden="true" className="size-5" strokeWidth={2.4} /> : null}
      {label}
    </a>
  );
}
