"use client";

import { motion } from "framer-motion";

export function Philosophy() {
  return (
    <section id="philosophy" className="py-24 md:py-28">
      <div className="mx-auto max-w-[1140px] px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0.24, 1] }}
          className="max-w-[680px]"
        >
          <div className="eyebrow eyebrow-accent">The difference</div>
          <h2 className="mt-5 font-display font-medium text-[var(--text-primary)] text-[36px] leading-[1.1] tracking-[-0.015em] sm:text-[42px] md:text-[50px]">
            Most AI rushes to answer. Claudia takes a breath.
          </h2>
          <p className="mt-5 text-[17px] leading-[1.7] text-[var(--text-muted)] md:text-[18px]">
            The best assistance comes from understanding — not just responding to
            prompts. Claudia asks the right question before offering the obvious
            answer, so the thinking you do together actually goes somewhere.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
