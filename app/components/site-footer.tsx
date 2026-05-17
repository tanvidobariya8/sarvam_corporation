"use client";

import { Camera, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import "../i18n";
import { Brand } from "./brand";
import { CtaLink } from "./cta-link";

const quickLinks = [
  { labelKey: "header.home", href: "/" },
  { labelKey: "header.about", href: "/about" },
  { labelKey: "header.services", href: "/#services" },
  { labelKey: "header.process", href: "/#process" },
  { labelKey: "header.guide", href: "/#guide" },
  { labelKey: "header.contact", href: "/contact" },
];

const serviceLinks = [
  "air",
  "sea",
  "door",
  "customs",
  "warehousing",
  "sourcing",
];

const socialLinks = [
  { label: "Facebook", shortLabel: "f", href: "#" },
  { label: "Instagram", shortLabel: "ig", href: "https://www.instagram.com/" },
  { label: "WhatsApp", shortLabel: "w", href: "https://wa.me/919537111038" },
  { label: "LinkedIn", shortLabel: "in", href: "#" },
];

export function SiteFooter() {
  const { t } = useTranslation();

  return (
    <footer
      id="contact"
      className="bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-200"
    >
      <div className="bg-orange-700 text-white dark:bg-orange-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-7 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <h2 className="text-2xl font-bold">{t("footer.ctaTitle")}</h2>
            <p className="mt-2 text-sm text-orange-50 dark:text-orange-100">
              {t("footer.ctaText")}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <CtaLink
              href="https://wa.me/919537111038"
              label={t("common.whatsapp")}
              icon={MessageCircle}
              variant="outline"
              className="w-full sm:w-auto"
            />
            <CtaLink
              href="tel:+919537111038"
              label={t("common.call")}
              icon={Phone}
              variant="light"
              className="w-full sm:w-auto"
            />
            <CtaLink
              href="/contact"
              label={t("common.quote")}
              icon={Mail}
              variant="light"
              className="w-full sm:w-auto"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1.6fr_1fr] lg:px-8">
        <div>
          <Brand />
          <div className="mt-5 flex gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="inline-flex size-9 items-center justify-center rounded-full bg-orange-700 text-xs font-bold text-white transition hover:bg-orange-800 dark:bg-orange-500 dark:text-slate-950 dark:hover:bg-orange-400"
              >
                {link.shortLabel}
              </a>
            ))}
          </div>
        </div>

        <FooterColumn
          title={t("footer.quickLinks")}
          items={quickLinks.map((item) => ({
            label: t(item.labelKey),
            href: item.href,
          }))}
        />
        <FooterColumn
          title={t("footer.services")}
          items={serviceLinks.map((item) => ({
            label: t(`footer.serviceItems.${item}`),
            href: "/#services",
          }))}
        />

        <div>
          <h3 className="text-base font-bold text-slate-950 dark:text-white">
            {t("footer.contact")}
          </h3>
          <ul className="mt-4 space-y-3 text-sm leading-6">
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-5 shrink-0 text-orange-600 dark:text-orange-300" />
              <span>+91 95371 11038</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-5 shrink-0 text-orange-600 dark:text-orange-300" />
              <span>+91 95471 36947</span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-5 shrink-0 text-orange-600 dark:text-orange-300" />
              <span className="break-all">info@sarvamcorporation.com</span>
            </li>
            <li className="flex gap-3">
              <MessageCircle className="mt-0.5 size-5 shrink-0 text-orange-600 dark:text-orange-300" />
              <span className="break-all">Hardik9537111038</span>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-orange-600 dark:text-orange-300" />
              <span>
                B-212, Shivalik Plaza, Kapodra To Utran Bridge, Mota Varachha,
                Surat - 394105
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-base font-bold text-slate-950 dark:text-white">
            {t("footer.follow")}
          </h3>
          <p className="mt-4 text-sm leading-6">{t("footer.followText")}</p>
          <CtaLink
            href="https://www.instagram.com/"
            label={t("footer.instagram")}
            icon={Camera}
            className="mt-5"
          />
        </div>
      </div>

      <div className="bg-orange-900 px-4 py-4 text-sm text-orange-50 dark:bg-slate-900 dark:text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>{t("footer.copyright")}</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">
              {t("footer.privacy")}
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white">
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h3 className="text-base font-bold text-slate-950 dark:text-white">
        {title}
      </h3>
      <ul className="mt-4 space-y-2 text-sm">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="transition hover:text-orange-700 dark:hover:text-orange-200"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
