"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";

export function Hero() {
  return (
    <header className="relative overflow-hidden pt-20 pb-12 md:pt-24 md:pb-16">
      <div
        className="hero-glow pointer-events-none absolute left-1/2 top-[-120px] h-[480px] w-[760px] -translate-x-1/2"
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1140px] px-6 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0.24, 1] }}
          className="eyebrow eyebrow-accent eyebrow-rule mb-6 md:mb-7"
        >
          Listen first · Answer second
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.32, 0.72, 0.24, 1] }}
          className="font-display font-medium text-[var(--text-primary)] leading-[1] tracking-[-0.02em] text-[56px] sm:text-[72px] md:text-[92px]"
        >
          An AI that <em className="italic text-[var(--secondary)]">listens</em>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.32, 0.72, 0.24, 1] }}
          className="mx-auto mt-7 max-w-[52ch] text-[17px] leading-[1.6] text-[var(--text-muted)] md:text-[20px]"
        >
          Claudia understands context, remembers what matters, and helps you think. 
          Less like software, more like a trusted collaborator.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.32, 0.72, 0.24, 1] }}
          className="mt-9 flex flex-wrap justify-center gap-3"
        >
          <Link href="/chat">
            <Button size="lg">Start a conversation</Button>
          </Link>
          <a href="#chat-preview">
            <Button size="lg" variant="ghost">
              See how she thinks <ArrowRight size={16} />
            </Button>
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-5 text-[13px] text-[var(--text-faint)]"
        >
          No credit card · Your conversations stay yours
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.32, 0.72, 0.24, 1] }}
          className="mx-auto mt-14 max-w-[920px] overflow-hidden rounded-[30px] border border-[var(--border-default)] bg-[var(--surface-1)] shadow-[0_28px_70px_rgba(0,0,0,0.50),0_8px_24px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.04)]"
        >
          <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] px-5 py-4">
            <span className="inline-block h-[11px] w-[11px] rounded-full bg-[var(--surface-3)]" />
            <span className="inline-block h-[11px] w-[11px] rounded-full bg-[var(--surface-3)]" />
            <span className="inline-block h-[11px] w-[11px] rounded-full bg-[var(--surface-3)]" />
          </div>
          <div className="flex flex-col gap-6 px-6 py-10 text-left md:px-12 md:py-12">
            <div className="flex flex-row-reverse gap-4">
              <Avatar who="user" initials="AM" />
              <div className="text-right">
                <div className="mb-1.5 text-[13px] font-semibold text-[var(--text-primary)]">
                  Alex
                </div>
                <div className="inline-block rounded-tr-[14px] rounded-tl-[14px] rounded-br-[4px] rounded-bl-[14px] border border-[var(--border-subtle)] bg-[var(--surface-2)] px-4 py-3 text-[15px] text-[var(--text-primary)]">
                  Help me think through our Q3 positioning.
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Avatar who="claudia" />
              <div>
                <div className="mb-1.5 font-display text-[17px] font-medium text-[var(--text-primary)]">
                  Claudia
                </div>
                <div className="text-[15.5px] leading-[1.7] text-[var(--text-secondary)] max-w-[58ch]">
                  Happily. Before we sketch any messaging — who are we really trying
                  to reach this quarter, and what do we want them to feel when they
                  meet us?
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
