"use client";

import {
  BadgeCheck,
  ClipboardCheck,
  FileCheck2,
  Headphones,
  Mail,
  MapPin,
  MessageCircle,
  Package,
  Phone,
  Plane,
  Route,
  ShieldCheck,
  Ship,
  Truck,
  Users,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { CtaLink } from "./components/cta-link";
import { ProcessStep } from "./components/process-step";
import { SectionHeading } from "./components/section-heading";
import { ServiceCard } from "./components/service-card";
import { StatCard } from "./components/stat-card";
import { TrustPill } from "./components/trust-pill";
import "./i18n";
import Image from "next/image";

const contactLinks = {
  whatsapp: "https://wa.me/919537111038",
  phone: "tel:+919537111038",
  quote: "/contact",
};

const trustPoints = [
  { labelKey: "home.trust.safe", icon: ShieldCheck },
  { labelKey: "home.trust.price", icon: BadgeCheck },
  { labelKey: "home.trust.delivery", icon: Truck },
];

const serviceItems = [
  { key: "air", icon: Plane },
  { key: "sea", icon: Ship },
  { key: "door", icon: Package },
  { key: "customs", icon: FileCheck2 },
  { key: "handling", icon: ShieldCheck },
  { key: "support", icon: Headphones },
];

const processItems = [
  { key: "share", icon: MessageCircle },
  { key: "plan", icon: ClipboardCheck },
  { key: "shipping", icon: Ship },
  { key: "customs", icon: FileCheck2 },
  { key: "delivery", icon: Truck },
];

const statItems = [
  { key: "experience", icon: BadgeCheck },
  { key: "customers", icon: Users },
  { key: "india", icon: MapPin },
  { key: "pricing", icon: BadgeCheck },
];

const guideItems = ["supplier", "cargo", "docs"];

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <section className="relative overflow-hidden bg-white dark:bg-slate-950">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-4 sm:px-6 sm:py-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:px-8 lg:py-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-orange-600 dark:text-orange-300">
              {t("home.heroEyebrow")}
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-black leading-tight text-slate-950 dark:text-white">
              {t("home.heroTitleStart")}{" "}
              <span className="block text-orange-600 dark:text-orange-300">
                {t("home.heroTitleHighlight")}
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 dark:text-slate-300 sm:text-lg sm:leading-8">
              {t("home.heroDescription")}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {trustPoints.map((point) => (
                <TrustPill
                  key={point.labelKey}
                  label={t(point.labelKey)}
                  icon={point.icon}
                />
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaLink
                href={contactLinks.whatsapp}
                label={t("common.whatsapp")}
                icon={MessageCircle}
                className="w-full sm:w-auto"
              />
              <CtaLink
                href={contactLinks.phone}
                label={t("common.call")}
                icon={Phone}
                variant="outline"
                className="w-full sm:w-auto"
              />
              <CtaLink
                href={contactLinks.quote}
                label={t("common.quote")}
                icon={Mail}
                variant="outline"
                className="w-full sm:w-auto"
              />
            </div>
          </div>

          <HeroVisual />
        </div>
      </section>

      <section
        id="services"
        className="bg-white px-4 pb-18 pt-20 dark:bg-slate-950 sm:px-6 sm:pb-20 sm:pt-24 lg:px-8 lg:pb-24 lg:pt-28"
      >
        <SectionHeading
          eyebrow={t("home.servicesEyebrow")}
          title={t("home.servicesTitle")}
        />
        <div className="mx-auto mt-12 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {serviceItems.map((service) => (
            <ServiceCard
              key={service.key}
              title={t(`home.serviceCards.${service.key}.title`)}
              description={t(`home.serviceCards.${service.key}.description`)}
              icon={service.icon}
            />
          ))}
        </div>
      </section>

      <section
        id="process"
        className="bg-orange-50 px-4 py-20 dark:bg-slate-900 sm:px-6 sm:py-24 lg:px-8"
      >
        <SectionHeading
          eyebrow={t("home.processEyebrow")}
          title={t("home.processTitle")}
        />
        <div className="mx-auto mt-14 grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {processItems.map((step, index) => (
            <ProcessStep
              key={step.key}
              index={index + 1}
              title={t(`home.processSteps.${step.key}.title`)}
              description={t(`home.processSteps.${step.key}.description`)}
              icon={step.icon}
            />
          ))}
        </div>
      </section>

      <section
        id="about"
        className="bg-white px-4 py-20 dark:bg-slate-950 sm:px-6 sm:py-24 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-orange-600 dark:text-orange-300">
              {t("home.aboutEyebrow")}
            </p>
            <h2 className="mt-3 max-w-lg text-3xl font-black leading-tight text-slate-950 dark:text-white sm:text-4xl">
              {t("home.aboutTitle")}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-700 dark:text-slate-300">
              {t("home.aboutDescription")}
            </p>
            <CtaLink
              href="/about"
              label={t("home.learnMore")}
              className="mt-7"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {statItems.map((stat) => (
              <StatCard
                key={stat.key}
                value={t(`home.stats.${stat.key}.value`)}
                label={t(`home.stats.${stat.key}.label`)}
                icon={stat.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="guide"
        className="bg-slate-50 px-4 py-20 dark:bg-slate-900 sm:px-6 sm:py-24 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-orange-600 dark:text-orange-300">
              {t("home.guideEyebrow")}
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 dark:text-white sm:text-4xl">
              {t("home.guideTitle")}
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {guideItems.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-orange-100 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950"
              >
                <Route className="size-6 text-orange-600 dark:text-orange-300" />
                <p className="mt-4 text-sm leading-6 text-slate-700 dark:text-slate-300">
                  {t(`home.guideItems.${item}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function HeroVisual() {
  return (
    <Image
      src="/images/ship2.png"
      alt="ship"
      width={500}
      height={500}
      className="h-full w-full object-contain"
    />
  );
}
