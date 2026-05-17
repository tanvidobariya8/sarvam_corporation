"use client";

import {
  ClipboardCheck,
  Mail,
  MapPin,
  MessageCircle,
  MessageCircleCheck,
  Package,
  Phone,
  Send,
  Ship,
} from "lucide-react";
import type { FormEvent, ReactNode } from "react";
import { useMemo, useState } from "react";

const companyEmail = "info@sarvamcorporation.com";
const whatsappNumber = "919537111038";

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  companyName: string;
  productName: string;
  category: string;
  quantity: string;
  supplierLink: string;
  shippingMode: string;
  deliveryCity: string;
  message: string;
};

const initialFormState: FormState = {
  fullName: "",
  phone: "",
  email: "",
  companyName: "",
  productName: "",
  category: "",
  quantity: "",
  supplierLink: "",
  shippingMode: "Need guidance",
  deliveryCity: "",
  message: "",
};

const contactCards = [
  {
    title: "WhatsApp",
    value: "+91 95371 11038",
    href: `https://wa.me/${whatsappNumber}`,
    icon: MessageCircle,
  },
  {
    title: "Call",
    value: "+91 95371 11038",
    href: "tel:+919537111038",
    icon: Phone,
  },
  {
    title: "Email",
    value: companyEmail,
    href: `mailto:${companyEmail}`,
    icon: Mail,
  },
  {
    title: "Office",
    value: "Mota Varachha, Surat",
    href: "https://www.google.com/maps/search/?api=1&query=B-212%20Shivalik%20Plaza%20Mota%20Varachha%20Surat%20394105",
    icon: MapPin,
  },
  {
    title: "We Chat",
    value: "Hardik9537111038",
    href: "",
    icon: MessageCircleCheck,
  },
];

function buildInquiryMessage(form: FormState) {
  return [
    "New China to India Import Quote Inquiry",
    "",
    `Name: ${form.fullName}`,
    `Phone: ${form.phone}`,
    `Email: ${form.email || "Not shared"}`,
    `Company: ${form.companyName || "Not shared"}`,
    "",
    "Product Details",
    `Product: ${form.productName}`,
    `Category: ${form.category || "Not shared"}`,
    `Quantity / Cartons: ${form.quantity}`,
    `Supplier Link: ${form.supplierLink || "Not shared"}`,
    "",
    "Shipping Requirement",
    `Preferred Mode: ${form.shippingMode}`,
    `Delivery City: ${form.deliveryCity}`,
    "",
    "Additional Message",
    form.message || "No additional message.",
  ].join("\n");
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [submitted, setSubmitted] = useState(false);

  const inquiryMessage = useMemo(() => buildInquiryMessage(form), [form]);
  const emailHref = `mailto:${companyEmail}?subject=${encodeURIComponent(
    `Import Quote Inquiry - ${form.productName || "China to India"}`,
  )}&body=${encodeURIComponent(inquiryMessage)}`;
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(inquiryMessage)}`;

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    window.location.href = emailHref;
  }

  return (
    <section className="bg-white px-4 py-16 dark:bg-slate-950 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-orange-600 dark:text-orange-300">
              Contact / Get Quote
            </p>
            <h1 className="mt-4 max-w-xl text-3xl font-black leading-tight text-slate-950 dark:text-white sm:text-5xl">
              Share your import requirement and get a clear quote.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-700 dark:text-slate-300">
              Send product details, supplier link, quantity, and delivery city.
              Sarvam Corporation will guide you with the right China-to-India
              shipping option.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {contactCards.map((card) => {
                const Icon = card.icon;
                return (
                  <a
                    key={card.title}
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      card.href.startsWith("http") ? "noreferrer" : undefined
                    }
                    className="rounded-lg border border-orange-100 bg-orange-50/60 p-5 transition hover:border-orange-300 hover:bg-orange-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-orange-500/70"
                  >
                    <Icon className="size-6 text-orange-600 dark:text-orange-300" />
                    <h2 className="mt-4 text-base font-bold text-slate-950 dark:text-white">
                      {card.title}
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-slate-700 dark:text-slate-300">
                      {card.value}
                    </p>
                  </a>
                );
              })}
            </div>

            <div className="mt-8 rounded-lg border border-orange-100 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-start gap-3">
                <ClipboardCheck className="mt-1 size-6 shrink-0 text-orange-600 dark:text-orange-300" />
                <div>
                  <h2 className="text-base font-bold text-slate-950 dark:text-white">
                    What details help us quote faster?
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                    Product name, quantity, supplier link, shipment urgency, and
                    delivery city are enough to start. If you are new to
                    importing, choose “Need guidance”.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-lg border border-orange-100 bg-slate-50 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-7"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-300">
                <Package className="size-6" />
              </span>
              <div>
                <h2 className="text-xl font-black text-slate-950 dark:text-white">
                  Import Quote Form
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Required fields are marked with *
                </p>
              </div>
            </div>

            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <FormField label="Full Name *">
                <input
                  required
                  value={form.fullName}
                  onChange={(event) =>
                    updateField("fullName", event.target.value)
                  }
                  className={inputClassName}
                  placeholder="Your name"
                />
              </FormField>
              <FormField label="Phone / WhatsApp *">
                <input
                  required
                  value={form.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  className={inputClassName}
                  placeholder="+91 ..."
                />
              </FormField>
              <FormField label="Email">
                <input
                  type="email"
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  className={inputClassName}
                  placeholder="you@example.com"
                />
              </FormField>
              <FormField label="Company Name">
                <input
                  value={form.companyName}
                  onChange={(event) =>
                    updateField("companyName", event.target.value)
                  }
                  className={inputClassName}
                  placeholder="Business name"
                />
              </FormField>
              <FormField label="Product Name *">
                <input
                  required
                  value={form.productName}
                  onChange={(event) =>
                    updateField("productName", event.target.value)
                  }
                  className={inputClassName}
                  placeholder="Example: LED lights, machine parts"
                />
              </FormField>
              <FormField label="Product Category">
                <input
                  value={form.category}
                  onChange={(event) =>
                    updateField("category", event.target.value)
                  }
                  className={inputClassName}
                  placeholder="Electronics, textile, machinery..."
                />
              </FormField>
              <FormField label="Quantity / Cartons *">
                <input
                  required
                  value={form.quantity}
                  onChange={(event) =>
                    updateField("quantity", event.target.value)
                  }
                  className={inputClassName}
                  placeholder="Pieces, cartons, CBM, weight"
                />
              </FormField>
              <FormField label="Delivery City in India *">
                <input
                  required
                  value={form.deliveryCity}
                  onChange={(event) =>
                    updateField("deliveryCity", event.target.value)
                  }
                  className={inputClassName}
                  placeholder="Surat, Mumbai, Delhi..."
                />
              </FormField>
              <FormField label="Supplier / Product Link">
                <input
                  value={form.supplierLink}
                  onChange={(event) =>
                    updateField("supplierLink", event.target.value)
                  }
                  className={inputClassName}
                  placeholder="Alibaba / 1688 / supplier URL"
                />
              </FormField>
              <FormField label="Preferred Shipping Mode">
                <select
                  value={form.shippingMode}
                  onChange={(event) =>
                    updateField("shippingMode", event.target.value)
                  }
                  className={inputClassName}
                >
                  <option>Need guidance</option>
                  <option>Air cargo</option>
                  <option>Sea freight</option>
                  <option>Door to door</option>
                  <option>Customs clearance only</option>
                </select>
              </FormField>
            </div>

            <FormField label="Additional Message" className="mt-5">
              <textarea
                value={form.message}
                onChange={(event) => updateField("message", event.target.value)}
                className={`${inputClassName} min-h-32 resize-y py-3`}
                placeholder="Share urgency, product size, target price, supplier status, or any question."
              />
            </FormField>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-orange-600 bg-orange-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:border-orange-700 hover:bg-orange-700 dark:border-orange-500 dark:bg-orange-500 dark:text-slate-950 dark:hover:bg-orange-400"
              >
                <Send className="size-5" />
                Submit by Email
              </button>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-orange-200 bg-white px-5 text-sm font-semibold text-orange-700 transition hover:border-orange-600 hover:bg-orange-50 dark:border-slate-700 dark:bg-slate-950 dark:text-orange-200 dark:hover:border-orange-400"
              >
                <MessageCircle className="size-5" />
                Send WhatsApp
              </a>
              <a
                href={emailHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-orange-200 bg-white px-5 text-sm font-semibold text-orange-700 transition hover:border-orange-600 hover:bg-orange-50 dark:border-slate-700 dark:bg-slate-950 dark:text-orange-200 dark:hover:border-orange-400"
              >
                <Mail className="size-5" />
                Open Email
              </a>
            </div>

            {submitted ? (
              <p className="mt-4 rounded-md bg-orange-100 px-4 py-3 text-sm font-medium text-orange-900 dark:bg-orange-950 dark:text-orange-100">
                Your email app has been opened with the full inquiry filled in.
                Please press send there, or use the WhatsApp button for instant
                sharing.
              </p>
            ) : null}

            <div className="mt-6 flex items-start gap-3 rounded-lg bg-white p-4 text-sm leading-6 text-slate-700 dark:bg-slate-950 dark:text-slate-300">
              <Ship className="mt-0.5 size-5 shrink-0 text-orange-600 dark:text-orange-300" />
              <p>
                For urgent shipments, WhatsApp is fastest. For detailed import
                quotes, email gives us all fields in one clear message.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

const inputClassName =
  "w-full rounded-md border border-orange-100 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-orange-400 dark:focus:ring-orange-950";

function FormField({
  children,
  className = "",
  label,
}: {
  children: ReactNode;
  className?: string;
  label: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm font-bold text-slate-900 dark:text-white">
        {label}
      </span>
      {children}
    </label>
  );
}
