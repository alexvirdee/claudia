"use client";

import { useRef, useState } from "react";
import { Paperclip, Mic, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { useChatStore } from "@/lib/store";
import { IconButton } from "@/components/ui/icon-button";
import { cn } from "@/lib/utils";

export function PromptComposer({ initial = "" }: { initial?: string }) {
  const [value, setValue] = useState(initial);
  const [focused, setFocused] = useState(false);
  const ref = useRef<HTMLTextAreaElement>(null);
  const send = useChatStore((s) => s.sendMessage);
  const isThinking = useChatStore((s) => s.isThinking);

  const grow = (el: HTMLTextAreaElement) => {
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 180) + "px";
  };

  const submit = () => {
    const t = value.trim();
    if (!t || isThinking) return;
    send(t);
    setValue("");
    if (ref.current) ref.current.style.height = "auto";
  };

  return (
    <motion.div
      animate={{
        boxShadow: focused
          ? "0 16px 40px rgba(0,0,0,0.42), 0 4px 12px rgba(0,0,0,0.28), 0 2px 14px color-mix(in oklab, var(--terracotta-500) 22%, transparent)"
          : "0 16px 40px rgba(0,0,0,0.42), 0 4px 12px rgba(0,0,0,0.28)",
      }}
      transition={{ duration: 0.22, ease: [0.32, 0.72, 0.24, 1] }}
      className={cn(
        "rounded-[22px] border bg-[var(--surface-2)] p-2 transition-colors duration-200",
        focused ? "border-[var(--border-accent)]" : "border-[var(--border-default)]",
      )}
    >
      <div className="flex items-end gap-2">
        <textarea
          ref={ref}
          rows={1}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            grow(e.target);
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              submit();
            }
          }}
          placeholder="Tell Claudia what's on your mind…"
          className="flex-1 resize-none border-none bg-transparent px-3 py-3 text-[16px] leading-[1.55] text-[var(--text-primary)] outline-none placeholder:text-[var(--text-faint)]"
          style={{ maxHeight: "180px" }}
        />
        <button
          onClick={submit}
          disabled={!value.trim() || isThinking}
          aria-label="Send"
          className={cn(
            "flex h-10 w-10 flex-none items-center justify-center rounded-[12px] transition-all duration-150 ease-out active:scale-[0.93]",
            value.trim() && !isThinking
              ? "bg-[var(--accent)] text-[var(--text-on-accent)] hover:bg-[var(--accent-hover)]"
              : "bg-[var(--surface-3)] text-[var(--text-faint)] cursor-default",
          )}
        >
          <ArrowUp size={18} strokeWidth={2} />
        </button>
      </div>

      <div className="flex items-center justify-between px-2 pb-1 pt-0.5">
        <div className="flex items-center gap-0.5">
          <IconButton label="Attach" size="sm">
            <Paperclip size={15} strokeWidth={1.7} />
          </IconButton>
          <IconButton label="Voice" size="sm">
            <Mic size={15} strokeWidth={1.7} />
          </IconButton>
        </div>
        <span className="text-[11.5px] text-[var(--text-faint)]">
          Claudia listens before she answers
        </span>
      </div>
    </motion.div>
  );
}
