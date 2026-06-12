"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Settings as SettingsIcon, Share2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useChatStore } from "@/lib/store";
import { Sidebar } from "./sidebar";
import { MessageThread } from "./message-thread";
import { PromptComposer } from "./prompt-composer";
import { EmptyState } from "./empty-state";
import { ModelSelector } from "./model-selector";
import { IconButton } from "@/components/ui/icon-button";

export function ChatLayout() {
  const activeId = useChatStore((s) => s.activeId);
  const conversations = useChatStore((s) => s.conversations);
  const isThinking = useChatStore((s) => s.isThinking);
  const [mobileOpen, setMobileOpen] = useState(false);

  const active = activeId ? conversations.find((c) => c.id === activeId) : null;

  return (
    <div className="flex h-screen overflow-hidden bg-[var(--bg-base)]">
      <div className="hidden md:flex">
        <Sidebar />
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-30 bg-[rgba(10,10,9,0.6)] bg-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
              aria-label="Close sidebar"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.32, ease: [0.32, 0.72, 0.24, 1] }}
              className="fixed inset-y-0 left-0 z-40 md:hidden"
            >
              <Sidebar onClose={() => setMobileOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="relative flex min-h-0 min-w-0 flex-1 flex-col">
        <header className="z-10 flex items-center justify-between border-b border-[var(--border-subtle)] bg-[color-mix(in_oklab,var(--bg-base)_80%,transparent)] bg-blur-md px-5 py-4 md:px-7">
          <div className="flex items-center gap-2">
            <button
              className="text-[var(--text-secondary)] md:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open sidebar"
            >
              <Menu size={20} />
            </button>
            <h1 className="font-display text-[19px] font-medium text-[var(--text-primary)] sm:text-[21px]">
              {active ? active.title : "New conversation"}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <ModelSelector />
            </div>
            <IconButton label="Share">
              <Share2 size={16} strokeWidth={1.7} />
            </IconButton>
            <Link href="/settings">
              <IconButton label="Settings">
                <SettingsIcon size={16} strokeWidth={1.7} />
              </IconButton>
            </Link>
          </div>
        </header>

        <div className="flex flex-1 flex-col min-h-0">
          {active ? (
            <MessageThread messages={active.messages} isThinking={isThinking} />
          ) : (
            <div className="flex-1 overflow-y-auto">
              <EmptyState />
            </div>
          )}

          <div className="px-5 pb-6 pt-2 md:px-7">
            <div className="mx-auto max-w-[760px]">
              <PromptComposer />
            </div>
          </div>
        </div>
      </main>

      <button
        className="hidden"
        aria-hidden
        onClick={() => setMobileOpen(false)}
      >
        <X size={20} />
      </button>
    </div>
  );
}
