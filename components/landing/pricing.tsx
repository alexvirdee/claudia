"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRICING_PLANS } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-28">
      <div className="mx-auto max-w-[1140px] px-6 md:px-8">
        <div className="mb-14 max-w-[640px]">
          <div className="eyebrow eyebrow-accent">Early access</div>
          <h2 className="mt-5 font-display font-medium text-[var(--text-primary)] text-[32px] leading-[1.12] tracking-[-0.015em] sm:text-[40px] md:text-[46px]">
            Simple plans, built around how you actually work.
          </h2>
          <p className="mt-5 text-[17px] leading-[1.65] text-[var(--text-muted)] md:text-[18px]">
            No usage meters staring at you while you think. Cancel any time, take
            your conversations with you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PRICING_PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.32, 0.72, 0.24, 1] }}
              className={cn(
                "relative flex flex-col rounded-[22px] border p-8 shadow-[var(--edge-light)] transition-all duration-300",
                plan.featured
                  ? "border-[var(--border-accent)] bg-[var(--surface-2)] shadow-[var(--glow-soft),var(--edge-light)]"
                  : "border-[var(--border-subtle)] bg-[var(--surface-1)]",
              )}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-8 inline-flex items-center rounded-pill border border-[var(--border-accent)] bg-[var(--accent-soft)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                  Most chosen
                </div>
              )}
              <div className="font-display text-[26px] font-medium text-[var(--text-primary)]">
                {plan.name}
              </div>
              <p className="mt-2 text-[14px] text-[var(--text-muted)]">
                {plan.description}
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-[44px] font-medium leading-none text-[var(--text-primary)]">
                  {plan.price}
                </span>
                {plan.cadence && (
                  <span className="text-[13px] text-[var(--text-faint)]">
                    {plan.cadence}
                  </span>
                )}
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-[14.5px] text-[var(--text-secondary)]"
                  >
                    <Check
                      size={16}
                      strokeWidth={1.8}
                      className="mt-1 flex-none text-[var(--accent)]"
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/chat" className="mt-8">
                <Button
                  className="w-full"
                  variant={plan.featured ? "primary" : "secondary"}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
