"use client";

import { motion } from "framer-motion";
import { USE_CASES } from "@/lib/mock-data";

export function UseCases() {
  return (
    <section className="border-t border-[var(--border-subtle)] py-24 warm-radial">
      <div className="mx-auto max-w-[1140px] px-6 md:px-8">
        <div className="mb-14 max-w-[640px]">
          <div className="eyebrow eyebrow-accent">Who she&apos;s for</div>
          <h2 className="mt-5 font-display font-medium text-[var(--text-primary)] text-[32px] leading-[1.12] tracking-[-0.015em] sm:text-[40px] md:text-[46px]">
            For people whose work is mostly thinking.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {USE_CASES.map((uc, i) => (
            <motion.article
              key={uc.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.32, 0.72, 0.24, 1] }}
            >
              <div className="eyebrow eyebrow-accent">{uc.eyebrow}</div>
              <h3 className="mt-4 font-display text-[26px] font-medium leading-[1.2] text-[var(--text-primary)]">
                {uc.title}
              </h3>
              <p className="mt-4 text-[15px] leading-[1.7] text-[var(--text-muted)]">
                {uc.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
