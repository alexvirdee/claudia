"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-28 text-center md:py-32">
      <div
        className="hero-glow pointer-events-none absolute left-1/2 top-0 h-[420px] w-[680px] -translate-x-1/2"
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1140px] px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0.24, 1] }}
          className="font-display font-medium text-[var(--text-primary)] text-[40px] leading-[1.08] tracking-[-0.02em] sm:text-[52px] md:text-[60px]"
        >
          Conversations that
          <br />
          go <em className="italic text-[var(--secondary)]">somewhere</em>.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0.24, 1] }}
          className="mt-5 text-[17px] text-[var(--text-muted)] md:text-[18px]"
        >
          Thoughtful assistance for thoughtful people.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.32, 0.72, 0.24, 1] }}
          className="mt-8 flex justify-center"
        >
          <Link href="/chat">
            <Button size="lg">Start a conversation</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
