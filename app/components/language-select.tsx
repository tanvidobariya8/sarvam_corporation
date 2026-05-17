"use client";

import { Languages } from "lucide-react";
import type { ChangeEvent } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  languageOptions,
  resolvePreferredLanguage,
  type LanguageCode,
} from "../i18n";

export function LanguageSelect() {
  const { i18n, t } = useTranslation();
  const currentLanguage = (i18n.resolvedLanguage || i18n.language || "en") as LanguageCode;

  useEffect(() => {
    const preferredLanguage = resolvePreferredLanguage();
    if (currentLanguage !== preferredLanguage) {
      void i18n.changeLanguage(preferredLanguage);
    }
  }, [currentLanguage, i18n]);

  useEffect(() => {
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  function handleLanguageChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLanguage = event.target.value as LanguageCode;
    void i18n.changeLanguage(nextLanguage);
    localStorage.setItem("language", nextLanguage);
    document.documentElement.lang = nextLanguage;
  }

  return (
    <label className="inline-flex min-h-11 items-center gap-2 rounded-md border border-orange-100 bg-white px-3 text-sm font-semibold text-orange-800 shadow-sm transition hover:border-orange-300 dark:border-slate-700 dark:bg-slate-900 dark:text-orange-100 dark:hover:border-orange-500">
      <Languages aria-hidden="true" className="size-4 shrink-0" strokeWidth={2.2} />
      <span className="sr-only">{t("language.label")}</span>
      <select
        value={currentLanguage}
        onChange={handleLanguageChange}
        aria-label={t("language.label")}
        className="max-w-32 bg-transparent text-sm font-semibold outline-none dark:bg-slate-900 sm:max-w-none"
      >
        {languageOptions.map((language) => (
          <option key={language.code} value={language.code}>
            {language.label}
          </option>
        ))}
      </select>
    </label>
  );
}
