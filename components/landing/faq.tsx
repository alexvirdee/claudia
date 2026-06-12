"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQ } from "@/lib/mock-data";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-[var(--border-subtle)] py-24 md:py-28">
      <div className="mx-auto max-w-[920px] px-6 md:px-8">
        <div className="mb-12 text-center">
          <div className="eyebrow eyebrow-accent">Questions</div>
          <h2 className="mt-5 font-display font-medium text-[var(--text-primary)] text-[32px] leading-[1.12] tracking-[-0.015em] sm:text-[40px] md:text-[46px]">
            Anything you&apos;d like to ask first?
          </h2>
        </div>

        <div className="divide-y divide-[var(--border-subtle)] border-y border-[var(--border-subtle)]">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-[var(--text-primary)]"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-[20px] font-medium text-[var(--text-primary)] md:text-[22px]">
                    {item.q}
                  </span>
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-[var(--border-subtle)] text-[var(--text-muted)] transition-colors group-hover:text-[var(--text-primary)]">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.32, 0.72, 0.24, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 pr-12 text-[16px] leading-[1.7] text-[var(--text-muted)]">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
