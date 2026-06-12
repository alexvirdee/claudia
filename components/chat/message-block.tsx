"use client";

import { Copy, RotateCw, Bookmark } from "lucide-react";
import { motion } from "framer-motion";
import { Avatar } from "@/components/ui/avatar";
import { IconButton } from "@/components/ui/icon-button";
import { USER } from "@/lib/mock-data";
import type { Message } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

interface MessageBlockProps {
  message: Message;
  isLatest?: boolean;
}

export function MessageBlock({ message, isLatest }: MessageBlockProps) {
  const isClaudia = message.role === "claudia";

  return (
    <motion.div
      initial={isLatest ? { opacity: 0, y: 8 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.32, 0.72, 0.24, 1] }}
      className={cn("group flex gap-4", !isClaudia && "flex-row-reverse")}
    >
      <Avatar
        who={isClaudia ? "claudia" : "user"}
        initials={USER.initials}
        size="sm"
      />
      <div
        className={cn(
          "min-w-0 flex-1",
          !isClaudia && "flex flex-col items-end",
        )}
      >
        <div
          className={cn(
            "mb-2 flex items-baseline gap-2.5",
            !isClaudia && "flex-row-reverse",
          )}
        >
          <span
            className={cn(
              "text-[13.5px] font-semibold text-[var(--text-primary)]",
              isClaudia && "font-display text-[17px] font-medium",
            )}
          >
            {isClaudia ? "Claudia" : USER.name.split(" ")[0]}
          </span>
          <span className="font-mono text-[11px] text-[var(--text-faint)] whitespace-nowrap">
            {message.time}
          </span>
        </div>

        {message.thinking ? (
          <div className="inline-flex items-center gap-2.5 text-[15px] text-[var(--text-muted)]">
            <span className="inline-flex gap-1">
              <span className="thinking-dot" />
              <span className="thinking-dot" />
              <span className="thinking-dot" />
            </span>
            <span className="italic font-display text-[16px]">Listening…</span>
          </div>
        ) : isClaudia ? (
          <div className="text-[15.5px] leading-[1.72] text-[var(--text-secondary)] max-w-[68ch]">
            {message.content.split("\n\n").map((p, i) => (
              <p key={i} className="mb-3 last:mb-0">
                {p}
              </p>
            ))}
          </div>
        ) : (
          <div className="inline-block max-w-[80%] rounded-tr-[16px] rounded-tl-[16px] rounded-br-[6px] rounded-bl-[16px] border border-[var(--border-subtle)] bg-[var(--surface-2)] px-4 py-3 text-[15px] leading-[1.6] text-[var(--text-primary)]">
            {message.content}
          </div>
        )}

        {isClaudia && !message.thinking && (
          <div className="mt-2 flex gap-0.5 opacity-0 transition-opacity duration-150 group-hover:opacity-100">
            <IconButton label="Copy" size="sm">
              <Copy size={14} strokeWidth={1.7} />
            </IconButton>
            <IconButton label="Try again" size="sm">
              <RotateCw size={14} strokeWidth={1.7} />
            </IconButton>
            <IconButton label="Save" size="sm">
              <Bookmark size={14} strokeWidth={1.7} />
            </IconButton>
          </div>
        )}
      </div>
    </motion.div>
  );
}
