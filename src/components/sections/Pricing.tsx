"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { provinces } from "@/config/site";

const included = [
  "Unlimited Ducts Cleaned",
  "Unlimited Vents Cleaned",
  "Natural Sanitizer",
  "Free Furnace Inspection",
  "Free AC Inspection",
  "Free Dryer Vent Inspection",
];

const addons = [
  { label: "Furnace Cleaning", price: 100 },
  { label: "AC Cleaning", price: 100 },
  { label: "Dryer Vent Cleaning", price: 50 },
  { label: "Filter Change", price: 50 },
  { label: "Brush Cleaning", price: 150 },
];

export function Pricing() {
  const [prov, setProv] = useState("ON");
  const selectedProvince =
    provinces.find((p) => p.code === prov) ?? provinces[0];
  const price = selectedProvince.priceFrom;

  return (
    <Section id="pricing" className="bg-canvas">
      <SectionHeading
        eyebrow="Transparent pricing"
        title="Straightforward pricing. Optional extras."
        subtitle="No bait-and-switch, no surprise upsells. One complete package — add only what you need."
      />

      <div className="mx-auto mt-14 grid max-w-4xl items-stretch gap-8 lg:grid-cols-2">
        {/* Basic Package — navy block so the price pops */}
        <Reveal>
          <div className="relative flex h-full flex-col overflow-hidden rounded-lg border-b-4 border-teal-500 bg-gradient-to-b from-[#16294f] to-navy p-8 shadow-[0_24px_60px_-28px_rgba(20,40,80,0.7)]">
            <span className="absolute right-6 top-6 rounded-md bg-white px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-teal-700">
              Most popular
            </span>
            <h3 className="font-display text-xl font-extrabold uppercase tracking-tight text-white">
              Basic Package
            </h3>

            {/* Province selector — updates the price below */}
            <div className="mt-3">
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-300">
                Your province
              </label>
              <select
                value={prov}
                onChange={(e) => setProv(e.target.value)}
                aria-label="Select your province to see the price"
                className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm font-medium text-white [color-scheme:dark] focus:border-teal-300 focus:outline-none"
              >
                {provinces.map((p) => (
                  <option
                    key={p.code}
                    value={p.code}
                    style={{ backgroundColor: "#10203A", color: "#ffffff" }}
                  >
                    {p.name} — ${p.priceFrom}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-5 flex items-baseline gap-2">
              <span className="font-display text-6xl font-extrabold tracking-tight text-white">
                ${price}
              </span>
              <span className="text-sm font-medium text-slate-300">
                taxes incl.
              </span>
            </div>
            <ul className="mt-6 flex-1 space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-teal-300" />
                  <span className="text-slate-100">{item}</span>
                </li>
              ))}
            </ul>
            <Button
              href="/#quote"
              size="lg"
              className="mt-8 w-full !bg-white !text-teal-700 !border-teal-100 hover:!bg-slate-100"
            >
              Book Now
            </Button>
          </div>
        </Reveal>

        {/* Optional Add-ons — white card */}
        <Reveal delay={0.1}>
          <div className="flex h-full flex-col rounded-lg border-2 border-slate-200 bg-white p-8 shadow-[0_18px_50px_-30px_rgba(20,40,80,0.5)]">
            <h3 className="font-display text-xl font-extrabold uppercase tracking-tight text-ink">
              Optional Add-ons
            </h3>
            <p className="mt-2 text-sm text-ink-soft">
              Customize your clean with extra services.
            </p>
            <ul className="mt-6 flex-1 divide-y divide-slate-200">
              {addons.map((a) => (
                <li
                  key={a.label}
                  className="flex items-center justify-between py-4"
                >
                  <span className="font-medium text-ink">{a.label}</span>
                  <span className="font-display text-lg font-extrabold text-teal-700">
                    +${a.price}
                  </span>
                </li>
              ))}
            </ul>
            <Button
              href="/#quote"
              size="lg"
              variant="secondary"
              className="mt-8 w-full"
            >
              Add During Booking
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
