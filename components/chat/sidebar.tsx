"use client";

import Link from "next/link";
import { Plus, Search, Settings as SettingsIcon, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useChatStore } from "@/lib/store";
import { Wordmark } from "@/components/ui/logo";
import { Avatar } from "@/components/ui/avatar";
import { IconButton } from "@/components/ui/icon-button";
import { USER } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

interface SidebarProps {
  onClose?: () => void;
}

export function Sidebar({ onClose }: SidebarProps) {
  const conversations = useChatStore((s) => s.conversations);
  const activeId = useChatStore((s) => s.activeId);
  const setActive = useChatStore((s) => s.setActive);
  const newConversation = useChatStore((s) => s.newConversation);

  return (
    <aside className="flex h-full min-h-0 w-[280px] flex-col border-r border-[var(--border-subtle)] bg-[var(--surface-1)]">
      <div className="flex items-center justify-between px-[18px] pb-3.5 pt-5">
        <Wordmark size={28} nameSize="text-[22px]" />
        <IconButton label="Search" size="sm">
          <Search size={15} strokeWidth={1.7} />
        </IconButton>
      </div>

      <div className="px-[14px] pb-4 pt-1">
        <button
          onClick={() => {
            newConversation();
            onClose?.();
          }}
          className="flex w-full items-center gap-2.5 rounded-[12px] border border-[var(--border-default)] bg-[var(--surface-2)] px-3.5 py-2.5 text-[14px] font-medium text-[var(--text-primary)] transition-all duration-150 ease-out hover:border-[var(--border-accent)] hover:bg-[var(--surface-3)]"
        >
          <Plus size={16} strokeWidth={1.7} className="text-[var(--accent)]" />
          <span>New conversation</span>
        </button>
      </div>

      <div className="px-[18px] pb-1 pt-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--text-faint)]">
        Recent
      </div>

      <div className="flex-1 overflow-y-auto px-[10px] pb-4 pt-1">
        <div className="flex flex-col gap-[2px]">
          {conversations.map((conv) => {
            const isActive = conv.id === activeId;
            return (
              <motion.button
                key={conv.id}
                onClick={() => {
                  setActive(conv.id);
                  onClose?.();
                }}
                whileHover={{ x: 1 }}
                transition={{ duration: 0.15 }}
                className={cn(
                  "group flex items-center gap-2.5 rounded-[8px] px-3 py-2.5 text-left transition-all duration-150 ease-out",
                  isActive
                    ? "bg-[var(--surface-3)] text-[var(--text-primary)]"
                    : "text-[var(--text-muted)] hover:bg-[var(--surface-2)] hover:text-[var(--text-secondary)]",
                )}
              >
                <span
                  className={cn(
                    "h-1.5 w-1.5 flex-none rounded-full",
                    isActive
                      ? "bg-[var(--accent)] opacity-100"
                      : "bg-current opacity-40",
                  )}
                />
                <span className="truncate text-[13.5px]">{conv.title}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      <Link
        href="/settings"
        className="flex items-center gap-2.5 border-t border-[var(--border-subtle)] px-[14px] py-3 transition-colors hover:bg-[var(--surface-2)]"
      >
        <Avatar who="user" initials={USER.initials} size="sm" />
        <div className="flex min-w-0 flex-col">
          <span className="truncate text-[13px] font-semibold text-[var(--text-primary)]">
            {USER.name}
          </span>
          <span className="truncate text-[11.5px] text-[var(--text-faint)]">
            {USER.plan} plan
          </span>
        </div>
        <span className="ml-auto text-[var(--text-faint)]">
          <SettingsIcon size={15} strokeWidth={1.7} />
        </span>
        <ChevronRight size={14} className="hidden text-[var(--text-faint)]" />
      </Link>
    </aside>
  );
}
