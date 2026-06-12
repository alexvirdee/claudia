"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/mock-data";

export function Testimonials() {
  return (
    <section className="border-y border-[var(--border-subtle)] py-24 md:py-28 warm-radial">
      <div className="mx-auto max-w-[1140px] px-6 md:px-8">
        <motion.blockquote
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0.24, 1] }}
          className="font-display italic font-medium text-[var(--text-primary)] text-[32px] leading-[1.28] tracking-[-0.01em] max-w-[22ch] sm:text-[40px] md:text-[46px]"
        >
          The future of AI isn&apos;t talking more. It&apos;s{" "}
          <span className="not-italic text-[var(--secondary)]">listening better.</span>
        </motion.blockquote>
        <div className="mt-7 text-[14px] text-[var(--text-muted)]">
          — The idea behind Claudia
        </div>

        <div className="mt-20 grid grid-cols-1 gap-7 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.32, 0.72, 0.24, 1] }}
              className="rounded-[16px] border border-[var(--border-subtle)] bg-[var(--surface-1)] p-7 shadow-[var(--edge-light)]"
            >
              <p className="font-display text-[20px] italic leading-[1.45] text-[var(--text-primary)]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <figcaption className="mt-6 border-t border-[var(--border-subtle)] pt-4">
                <div className="text-[14px] font-semibold text-[var(--text-primary)]">
                  {t.name}
                </div>
                <div className="text-[13px] text-[var(--text-faint)]">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
