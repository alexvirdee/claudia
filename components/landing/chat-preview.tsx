"use client";

import { motion } from "framer-motion";
import { Avatar } from "@/components/ui/avatar";

const PREVIEW = [
  {
    role: "user",
    text: "I'm three weeks from launch and the narrative still feels off. Help me figure out why.",
  },
  {
    role: "claudia",
    text: "Let's start with what hasn't changed. The thing you were originally most excited to share — has it survived the last few rounds of editing, or did it get smoothed out somewhere along the way?",
  },
  {
    role: "claudia",
    text: "Sometimes the off feeling is grief for the line we cut.",
  },
];

export function ChatPreview() {
  return (
    <section id="chat-preview" className="py-20 md:py-28">
      <div className="mx-auto max-w-[1140px] px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0.24, 1] }}
          >
            <div className="eyebrow eyebrow-accent">A different kind of reply</div>
            <h2 className="mt-5 font-display font-medium text-[var(--text-primary)] text-[34px] leading-[1.12] tracking-[-0.015em] sm:text-[42px]">
              The first thing she does is{" "}
              <em className="italic text-[var(--secondary)]">pause</em>.
            </h2>
            <p className="mt-5 max-w-[44ch] text-[17px] leading-[1.7] text-[var(--text-muted)]">
              Claudia reads what you wrote, notices what you didn&apos;t, and asks the
              question that turns a prompt into a real conversation. The work that
              follows is better because it started with listening.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.32, 0.72, 0.24, 1] }}
            className="rounded-[22px] border border-[var(--border-default)] bg-[var(--surface-1)] shadow-[var(--shadow-lg),var(--edge-light)]"
          >
            <div className="flex flex-col gap-7 px-7 py-9 md:px-9">
              {PREVIEW.map((m, i) => {
                const isCl = m.role === "claudia";
                return (
                  <div
                    key={i}
                    className={`flex gap-3.5 ${isCl ? "" : "flex-row-reverse"}`}
                  >
                    <Avatar
                      who={isCl ? "claudia" : "user"}
                      initials="AM"
                      size="sm"
                    />
                    <div className={isCl ? "" : "text-right"}>
                      <div
                        className={`mb-1.5 text-[13px] ${
                          isCl
                            ? "font-display text-[16px] font-medium"
                            : "font-semibold"
                        } text-[var(--text-primary)]`}
                      >
                        {isCl ? "Claudia" : "Alex"}
                      </div>
                      {isCl ? (
                        <div className="text-[15.5px] leading-[1.7] text-[var(--text-secondary)] max-w-[42ch]">
                          {m.text}
                        </div>
                      ) : (
                        <div className="inline-block max-w-[36ch] rounded-tr-[14px] rounded-tl-[14px] rounded-br-[4px] rounded-bl-[14px] border border-[var(--border-subtle)] bg-[var(--surface-2)] px-4 py-3 text-[15px] text-[var(--text-primary)]">
                          {m.text}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
