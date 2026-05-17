"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import {
  BadgeCheck,
  Users,
  MapPin,
  Package,
  Ship,
  FileCheck2,
  Truck,
  ShieldCheck,
} from "lucide-react";
import "../i18n";
import { ProcessStep } from "../components/process-step";
import { SectionHeading } from "../components/section-heading";
import { StatCard } from "../components/stat-card";

const shipmentImages = [
  {
    image: "/images/ship1.png",
    label: "Container Loading",
  },
  {
    image: "/images/ship2.png",
    label: "Cargo Picked Up",
  },
  {
    image: "/images/ship1.png",
    label: "Ocean Freight",
  },
  {
    image: "/images/ship2.png",
    label: "Customs Clearance",
  },
];

const trackingImages = [
  "/images/ship1.png",
  "/images/ship2.png",
  "/images/ship1.png",
  "/images/ship2.png",
];

const processStages = [
  {
    title: "Product Sourcing",
    description:
      "We help you find reliable suppliers and compare competitive pricing.",
    icon: Package,
  },
  {
    title: "Quality Check",
    description:
      "We verify product samples and inspect quality before shipment.",
    icon: ShieldCheck,
  },
  {
    title: "Shipping",
    description:
      "Your cargo moves from China by air or sea based on your needs.",
    icon: Ship,
  },
  {
    title: "Customs Clearance",
    description: "We handle customs documentation and clearance in India.",
    icon: FileCheck2,
  },
  {
    title: "Delivery",
    description:
      "We deliver your shipment safely to your warehouse or doorstep.",
    icon: Truck,
  },
];

const statItems = [
  { key: "experience", icon: BadgeCheck },
  { key: "customers", icon: Users },
  { key: "india", icon: MapPin },
  { key: "pricing", icon: BadgeCheck },
];

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <main className="bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-100">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_1fr]">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl font-bold text-slate-950 dark:text-white md:text-5xl">
              About Sarvam Corporation
            </h1>

            <p className="mt-3 text-lg font-semibold text-orange-600">
              Your Trusted China to India Import Partner
            </p>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300">
              With 6+ years of experience and 2000+ happy customers, Sarvam
              Corporation makes importing from China simple, safe, and
              stress-free. We handle everything from sourcing to delivery, so
              you can focus on growing your business.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
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

          {/* RIGHT IMAGE */}
          <div className="relative h-[160px] w-full overflow-hidden rounded-3xl sm:h-[240px] md:h-[320px] lg:h-[420px] xl:h-[460px]">
            <Image
              src="/images/ship3.png"
              alt="Cargo ship"
              fill
              priority
              className="rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* OUR JOURNEY */}
      <section className="bg-slate-50 py-16 dark:bg-slate-900">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="relative h-70 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm dark:border-slate-700 dark:bg-slate-950 md:h-80 mr-10">
            <Image
              src="/images/sarvam_office.png"
              alt="Office and operations"
              fill
              className="object-cover"
            />
          </div>
          {/* RIGHT IMAGE */}
          <div className="max-w-md">
            <SectionHeading
              eyebrow="Our Journey"
              title="From a Small Start to a Trusted Import Partner"
            />

            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              We started with a simple goal — to make China imports easy and
              transparent for Indian businesses. Today, we are proud to serve
              thousands of clients across India with honesty, reliability, and
              complete support.
            </p>

            <ul className="mt-5 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <span className="text-orange-500">✓</span>
                Customer-first approach
              </li>

              <li className="flex items-center gap-2">
                <span className="text-orange-500">✓</span>
                Transparent pricing
              </li>

              <li className="flex items-center gap-2">
                <span className="text-orange-500">✓</span>
                On-time delivery
              </li>

              <li className="flex items-center gap-2">
                <span className="text-orange-500">✓</span>
                End-to-end import support
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SHIPMENT GALLERY */}
      {/* <section className="mx-auto max-w-7xl px-6 py-20 bg-white dark:bg-slate-950">
        <SectionHeading
          eyebrow="Real Import Operations"
          title="Glimpse of Our Recent Shipments"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3 lg:grid-cols-4">
          {shipmentImages.map((item) => (
            <div key={item.label}>
              <div className="relative h-52 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-900">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="mt-3 text-center font-medium text-slate-700">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section> */}

      {/* TRACKING */}
      {/* <section className="bg-slate-50 py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Live Tracking & Delivery Proof"
            title="Real Tracking Updates & Delivery Proof"
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {trackingImages.map((img) => (
              <div
                key={img}
                className="relative h-64 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-950"
              >
                <Image src={img} alt="Tracking" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* PROCESS */}
      {/* <section className="py-20 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="How We Work"
            title="Simple, Transparent & Hassle-Free Process"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3 xl:grid-cols-5">
            {processStages.map((stage, index) => (
              <ProcessStep
                key={stage.title}
                index={index + 1}
                title={stage.title}
                description={stage.description}
                icon={stage.icon}
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* TESTIMONIALS */}
      <section className="bg-slate-50 py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="What Our Clients Say"
            title="Trusted by 2000+ Businesses"
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              "Very professional service.",
              "Transparent pricing and support.",
              "Highly recommended.",
            ].map((text, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950"
              >
                <p className="text-yellow-500">★★★★★</p>

                <p className="mt-4 text-slate-600 dark:text-slate-300">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
