"use client";

import { ClipboardCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import "../i18n";
import { Brand } from "./brand";
import { CtaLink } from "./cta-link";
import { LanguageSelect } from "./language-select";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { labelKey: "header.home", href: "/" },
  { labelKey: "header.services", href: "/#services" },
  { labelKey: "header.process", href: "/#process" },
  { labelKey: "header.guide", href: "/#guide" },
  { labelKey: "header.about", href: "/about" },
  { labelKey: "header.contact", href: "/contact" },
];

export function SiteHeader() {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-50 border-b border-orange-100/80 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-slate-950/92">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Brand />
          <div className="flex flex-wrap items-center gap-2 lg:hidden">
            <LanguageSelect />
            <ThemeToggle />
            <CtaLink
              href="/contact"
              label={t("header.quote")}
              icon={ClipboardCheck}
            />
          </div>
        </div>

        <nav
          aria-label={t("header.navLabel")}
          className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm font-semibold text-slate-900 dark:text-slate-100 sm:gap-x-6 lg:justify-center lg:gap-x-8"
        >
          {navItems.map((item) => (
            <a
              key={item.labelKey}
              href={item.href}
              className="shrink-0 border-b-2 border-transparent py-2 transition hover:border-orange-600 hover:text-orange-700 dark:hover:border-orange-300 dark:hover:text-orange-200"
            >
              {t(item.labelKey)}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSelect />
          <ThemeToggle />
          <CtaLink
            href="/contact"
            label={t("header.getQuote")}
            icon={ClipboardCheck}
          />
        </div>
      </div>
    </header>
  );
}
