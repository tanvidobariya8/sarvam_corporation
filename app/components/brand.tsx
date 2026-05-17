"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import "../i18n";

export function Brand() {
  const { t } = useTranslation();

  return (
    <Link href="/" className="inline-flex flex-col gap-1" aria-label={t("brand.homeLabel")}>
      <span className="text-2xl font-black uppercase leading-none tracking-[0.08em] text-orange-950 dark:text-orange-100 sm:text-3xl">
        {t("brand.name")}
      </span>
      <span className="text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-orange-800 dark:text-orange-200 sm:text-[0.68rem] sm:tracking-[0.42em]">
        {t("brand.company")}
      </span>
      <span className="max-w-44 text-xs font-medium leading-4 text-orange-700 dark:text-orange-200 sm:max-w-none">
        {t("brand.tagline")}
      </span>
    </Link>
  );
}
