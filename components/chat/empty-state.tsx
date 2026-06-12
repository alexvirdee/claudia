"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Compass, Feather, Sparkles, Book, BrainCircuit, Code2 } from "lucide-react";
import { PromptCategories } from "./prompt-categories";
import { useChatStore } from "@/lib/store";
import { USER } from "@/lib/mock-data";
import { greetingForHour } from "@/lib/utils";

const SUGGESTIONS = [
  {
    icon: Compass,
    text: "Help me plan my week around what matters most",
  },
  {
    icon: Feather,
    text: "Draft a thoughtful reply to a difficult email",
  },
  {
    icon: Sparkles,
    text: "Think through a decision I keep avoiding",
  },
  {
    icon: Book,
    text: "Teach me something new, the way I learn best",
  },
  {
    icon: BrainCircuit,
    text: "Help me sit with a question I can't quite answer",
  },
  {
    icon: Code2,
    text: "Explain a codebase in plain English",
  },
];

export function EmptyState() {
  const send = useChatStore((s) => s.sendMessage);
  const [greeting, setGreeting] = useState("Good afternoon, Alex");

  useEffect(() => {
    setGreeting(greetingForHour(new Date().getHours()).replace("Alex", USER.name.split(" ")[0]));
  }, []);

  return (
    <div className="mx-auto w-full max-w-[760px] px-7 pb-8 pt-[6vh]">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.32, 0.72, 0.24, 1] }}
      >
        <div className="eyebrow eyebrow-accent">{greeting}</div>
        <h1 className="mt-4 font-display text-[44px] font-medium leading-[1.08] tracking-[-0.015em] text-[var(--text-primary)] sm:text-[52px]">
          Where shall we <em className="italic text-[var(--secondary)]">begin?</em>
        </h1>
        <p className="mt-4 max-w-[48ch] text-[16px] leading-[1.6] text-[var(--text-muted)] sm:text-[17px]">
          Tell me what&apos;s on your mind. I&apos;ll listen first — then we&apos;ll
          think it through together, at whatever pace feels right.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.32, 0.72, 0.24, 1] }}
        className="mt-9"
      >
        <PromptCategories />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25, ease: [0.32, 0.72, 0.24, 1] }}
        className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2"
      >
        {SUGGESTIONS.map((s) => {
          const Icon = s.icon;
          return (
            <button
              key={s.text}
              onClick={() => send(s.text)}
              className="group flex items-start gap-3 rounded-[12px] border border-[var(--border-subtle)] bg-[var(--surface-1)] px-4 py-3.5 text-left transition-all duration-200 ease-[cubic-bezier(0.32,0.72,0.24,1)] hover:-translate-y-px hover:border-[var(--border-accent)] hover:bg-[var(--surface-2)]"
            >
              <Icon
                size={17}
                strokeWidth={1.7}
                className="mt-0.5 flex-none text-[var(--accent)]"
              />
              <span className="text-[14px] leading-[1.45] text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]">
                {s.text}
              </span>
            </button>
          );
        })}
      </motion.div>
    </div>
  );
}
