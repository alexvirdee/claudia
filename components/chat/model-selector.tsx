"use client";

import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const MODELS = [
  {
    id: "considered",
    name: "Considered",
    description: "Slower. Quieter. Thinks before she answers.",
  },
  {
    id: "quick",
    name: "Quick",
    description: "Fast replies for everyday questions.",
  },
  {
    id: "deep",
    name: "Deep",
    description: "For the long form. Long memory, long thread.",
  },
];

export function ModelSelector() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(MODELS[0]);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-[8px] border border-[var(--border-subtle)] bg-transparent px-3 py-1.5 text-[13px] text-[var(--text-secondary)] transition-colors hover:border-[var(--border-default)] hover:text-[var(--text-primary)]"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
        <span className="font-medium">{active.name}</span>
        <ChevronDown
          size={13}
          strokeWidth={1.7}
          className={cn("transition-transform duration-150", open && "rotate-180")}
        />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <button
              className="fixed inset-0 z-10"
              aria-label="Close"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-full z-20 mt-2 w-[260px] overflow-hidden rounded-[12px] border border-[var(--border-default)] bg-[var(--surface-2)] shadow-lg shadow-[var(--edge-light)]"
            >
              {MODELS.map((m) => (
                <button
                  key={m.id}
                  onClick={() => {
                    setActive(m);
                    setOpen(false);
                  }}
                  className="flex w-full items-start gap-3 px-3.5 py-3 text-left transition-colors hover:bg-[var(--surface-3)]"
                >
                  <span className="mt-0.5 flex h-4 w-4 flex-none items-center justify-center">
                    {active.id === m.id && (
                      <Check
                        size={14}
                        strokeWidth={1.8}
                        className="text-[var(--accent)]"
                      />
                    )}
                  </span>
                  <div className="flex-1">
                    <div className="text-[13.5px] font-semibold text-[var(--text-primary)]">
                      {m.name}
                    </div>
                    <div className="text-[12.5px] text-[var(--text-faint)] leading-relaxed">
                      {m.description}
                    </div>
                  </div>
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
