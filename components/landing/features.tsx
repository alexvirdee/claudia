"use client";

import { motion } from "framer-motion";
import { Ear, Brain, Sparkles, Lock, Feather, Compass } from "lucide-react";

const FEATURES = [
  {
    icon: Ear,
    title: "Listens closely",
    body: "Claudia reads the whole picture — tone, context, the things left unsaid — before she responds.",
  },
  {
    icon: Brain,
    title: "Remembers what matters",
    body: "The details you share carry forward. No re-explaining yourself at the start of every conversation.",
  },
  {
    icon: Sparkles,
    title: "Thinks with you",
    body: "A calm sounding board for the work, and for the thinking behind it.",
  },
  {
    icon: Feather,
    title: "Writes with care",
    body: "Drafts and edits that sound like you on your most considered day, not a press release.",
  },
  {
    icon: Compass,
    title: "Helps you decide",
    body: "Not a recommendation engine — a thoughtful second mind for the choices that matter.",
  },
  {
    icon: Lock,
    title: "Keeps your conversations yours",
    body: "Private by design. Nothing sold, mined, or used to train a generic model.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-24">
      <div className="mx-auto max-w-[1140px] px-6 md:px-8">
        <div className="mb-12 max-w-[680px]">
          <div className="eyebrow eyebrow-accent">What she does</div>
          <h2 className="mt-5 font-display font-medium text-[var(--text-primary)] text-[32px] leading-[1.12] tracking-[-0.015em] sm:text-[40px] md:text-[46px]">
            A thoughtful collaborator, not a faster autocomplete.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.32, 0.72, 0.24, 1] }}
                className="group flex flex-col rounded-[16px] border border-[var(--border-subtle)] bg-[var(--surface-1)] p-7 shadow-[var(--edge-light)] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0.24,1)] hover:-translate-y-[3px] hover:border-[var(--border-strong)] hover:shadow-lg"
              >
                <div className="mb-6 flex h-[46px] w-[46px] flex-none items-center justify-center rounded-[12px] bg-[var(--accent-soft)] text-[var(--accent)]">
                  <Icon size={22} strokeWidth={1.7} />
                </div>
                <h3 className="mb-3 font-display text-[24px] font-medium text-[var(--text-primary)] leading-[1.28]">
                  {feature.title}
                </h3>
                <p className="text-[15px] leading-[1.65] text-[var(--text-muted)]">
                  {feature.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
