"use client";

import { motion } from "framer-motion";
import { PROMPT_CATEGORIES, type PromptCategoryId } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface PromptCategoriesProps {
  active?: PromptCategoryId;
  onSelect?: (id: PromptCategoryId) => void;
}

export function PromptCategories({ active, onSelect }: PromptCategoriesProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {PROMPT_CATEGORIES.map((cat) => {
        const isActive = active === cat.id;
        return (
          <motion.button
            key={cat.id}
            onClick={() => onSelect?.(cat.id)}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "rounded-pill border px-4 py-1.5 text-[13px] font-medium transition-colors duration-150",
              isActive
                ? "border-[var(--border-accent)] bg-[var(--accent-soft)] text-[var(--accent)]"
                : "border-[var(--border-subtle)] bg-transparent text-[var(--text-muted)] hover:border-[var(--border-default)] hover:text-[var(--text-primary)]",
            )}
          >
            {cat.label}
          </motion.button>
        );
      })}
    </div>
  );
}
