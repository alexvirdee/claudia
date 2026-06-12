"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Wordmark } from "@/components/ui/logo";
import { Badge } from "@/components/ui/badge";
import { USER } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

interface ToggleProps {
  on: boolean;
  onClick: () => void;
}

function Toggle({ on, onClick }: ToggleProps) {
  return (
    <button
      onClick={onClick}
      role="switch"
      aria-checked={on}
      className={cn(
        "relative h-6 w-[42px] flex-none rounded-pill border transition-all duration-200 ease-[cubic-bezier(0.32,0.72,0.24,1)]",
        on
          ? "border-transparent bg-[var(--accent)]"
          : "border-[var(--border-default)] bg-[var(--surface-3)]",
      )}
    >
      <span
        className={cn(
          "absolute top-[2px] left-[2px] h-[18px] w-[18px] rounded-full shadow-sm transition-transform duration-200 ease-[cubic-bezier(0.32,0.72,0.24,1)]",
          on ? "translate-x-[18px] bg-[var(--text-on-accent)]" : "bg-[var(--text-muted)]",
        )}
      />
    </button>
  );
}

const PREFERENCE_SECTIONS = [
  {
    title: "Conversation",
    rows: [
      {
        key: "memory",
        title: "Remember context across chats",
        description: "Claudia carries what matters between conversations.",
      },
      {
        key: "gentle",
        title: "Listen before answering",
        description: "A brief pause to understand before responding.",
      },
      {
        key: "questions",
        title: "Ask one clarifying question first",
        description: "Almost always the right move. You can turn it off if you'd like.",
      },
    ],
  },
  {
    title: "Voice & sound",
    rows: [
      {
        key: "voice",
        title: "Voice replies",
        description: "Hear Claudia read her responses aloud.",
      },
      {
        key: "sounds",
        title: "Subtle send sound",
        description: "A quiet chime when a message is on its way.",
      },
    ],
  },
  {
    title: "Notifications",
    rows: [
      {
        key: "weekly",
        title: "Weekly reflection email",
        description: "A short Sunday note from Claudia on the week's conversations.",
      },
      {
        key: "research",
        title: "New ideas and beta features",
        description: "Occasional, never noisy. You can unsubscribe at any time.",
      },
    ],
  },
] as const;

const TONE_OPTIONS = [
  {
    id: "calm",
    label: "Calm",
    description: "Measured, unhurried, mostly listening.",
  },
  {
    id: "playful",
    label: "Lightly playful",
    description: "Warm and curious, with a quiet sense of humor.",
  },
  {
    id: "direct",
    label: "Direct",
    description: "Still considered, just shorter sentences.",
  },
] as const;

export function SettingsPanel() {
  const [prefs, setPrefs] = useState<Record<string, boolean>>({
    memory: true,
    gentle: true,
    questions: true,
    voice: false,
    sounds: true,
    weekly: true,
    research: false,
  });
  const [tone, setTone] = useState<(typeof TONE_OPTIONS)[number]["id"]>("calm");

  const toggle = (key: string) =>
    setPrefs((p) => ({ ...p, [key]: !p[key] }));

  return (
    <div className="min-h-screen bg-[var(--bg-base)]">
      <header className="sticky top-0 z-30 border-b border-[var(--border-subtle)] bg-[color-mix(in_oklab,var(--bg-base)_80%,transparent)] bg-blur-md">
        <div className="mx-auto flex max-w-[920px] items-center justify-between px-6 py-4 md:px-8">
          <Link
            href="/chat"
            className="inline-flex items-center gap-2 text-[14px] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
          >
            <ArrowLeft size={16} strokeWidth={1.7} />
            Back to chat
          </Link>
          <Wordmark size={26} nameSize="text-[19px]" />
        </div>
      </header>

      <main className="mx-auto max-w-[920px] px-6 py-14 md:px-8 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0.24, 1] }}
        >
          <div className="eyebrow eyebrow-accent">Settings</div>
          <h1 className="mt-4 font-display text-[42px] font-medium leading-[1.08] tracking-[-0.015em] text-[var(--text-primary)] sm:text-[52px]">
            Shape how Claudia thinks <em className="italic text-[var(--secondary)]">alongside you</em>.
          </h1>
        </motion.div>

        <section className="mt-16">
          <div className="eyebrow mb-4">Profile</div>
          <div className="flex items-center justify-between rounded-[22px] border border-[var(--border-subtle)] bg-[var(--surface-1)] p-7 shadow-[var(--edge-light)]">
            <div className="flex items-center gap-5">
              <Avatar who="user" initials={USER.initials} size="lg" />
              <div>
                <div className="font-display text-[24px] font-medium text-[var(--text-primary)]">
                  {USER.name}
                </div>
                <div className="text-[14px] text-[var(--text-muted)]">{USER.email}</div>
                <div className="mt-2 flex items-center gap-2">
                  <Badge tone="accent">{USER.plan} plan</Badge>
                  <span className="text-[12px] text-[var(--text-faint)]">
                    Member since June 2026
                  </span>
                </div>
              </div>
            </div>
            <Button variant="secondary">Edit profile</Button>
          </div>
        </section>

        <section className="mt-16">
          <div className="eyebrow mb-4">Voice & tone</div>
          <div className="rounded-[22px] border border-[var(--border-subtle)] bg-[var(--surface-1)] p-7 shadow-[var(--edge-light)]">
            <p className="text-[14.5px] text-[var(--text-muted)]">
              The voice Claudia uses with you. You can change this anytime, and she&apos;ll
              follow the cue.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
              {TONE_OPTIONS.map((option) => {
                const isActive = tone === option.id;
                return (
                  <button
                    key={option.id}
                    onClick={() => setTone(option.id)}
                    className={cn(
                      "rounded-[14px] border p-4 text-left transition-all duration-200 ease-[cubic-bezier(0.32,0.72,0.24,1)]",
                      isActive
                        ? "border-[var(--border-accent)] bg-[var(--accent-soft)]"
                        : "border-[var(--border-subtle)] bg-transparent hover:border-[var(--border-default)] hover:bg-[var(--surface-2)]",
                    )}
                  >
                    <div
                      className={cn(
                        "font-display text-[18px] font-medium",
                        isActive ? "text-[var(--accent)]" : "text-[var(--text-primary)]",
                      )}
                    >
                      {option.label}
                    </div>
                    <div className="mt-1 text-[13px] leading-[1.5] text-[var(--text-muted)]">
                      {option.description}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {PREFERENCE_SECTIONS.map((section) => (
          <section key={section.title} className="mt-16">
            <div className="eyebrow mb-4">{section.title}</div>
            <div className="overflow-hidden rounded-[22px] border border-[var(--border-subtle)] bg-[var(--surface-1)] shadow-[var(--edge-light)]">
              {section.rows.map((row, i) => (
                <div
                  key={row.key}
                  className={cn(
                    "flex items-center justify-between gap-6 px-7 py-5",
                    i > 0 && "border-t border-[var(--border-subtle)]",
                  )}
                >
                  <div className="flex-1">
                    <div className="text-[14.5px] font-semibold text-[var(--text-primary)]">
                      {row.title}
                    </div>
                    <div className="mt-1 text-[13px] text-[var(--text-faint)]">
                      {row.description}
                    </div>
                  </div>
                  <Toggle
                    on={prefs[row.key] ?? false}
                    onClick={() => toggle(row.key)}
                  />
                </div>
              ))}
            </div>
          </section>
        ))}

        <section className="mt-16">
          <div className="eyebrow mb-4">Memory</div>
          <div className="rounded-[22px] border border-[var(--border-subtle)] bg-[var(--surface-1)] p-7 shadow-[var(--edge-light)]">
            <p className="text-[14.5px] text-[var(--text-muted)]">
              What Claudia remembers about you across conversations. You can read, edit,
              or clear any of it at any time.
            </p>
            <div className="mt-5 space-y-3">
              {[
                "Prefers to think things through before deciding.",
                "Reads non-fiction in the morning, fiction in the evening.",
                "Lives in Brooklyn. Works mostly from a café on Atlantic.",
              ].map((note) => (
                <div
                  key={note}
                  className="flex items-center justify-between gap-4 rounded-[12px] border border-[var(--border-subtle)] bg-[var(--surface-2)] px-4 py-3"
                >
                  <span className="text-[14px] text-[var(--text-secondary)]">{note}</span>
                  <button className="text-[13px] text-[var(--text-faint)] transition-colors hover:text-[var(--text-primary)]">
                    Edit
                  </button>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="mt-5">
              Manage all memory
              <ChevronRight size={16} strokeWidth={1.7} />
            </Button>
          </div>
        </section>

        <section className="mt-16 mb-8">
          <div className="eyebrow mb-4">Account</div>
          <div className="overflow-hidden rounded-[22px] border border-[var(--border-subtle)] bg-[var(--surface-1)] shadow-[var(--edge-light)]">
            {[
              { title: "Export conversations", description: "Download a copy whenever you like." },
              { title: "Sign out", description: "End this session on this device." },
              {
                title: "Delete account",
                description: "Permanent. Takes a moment, but it&apos;s yours to take.",
                danger: true,
              },
            ].map((row, i) => (
              <button
                key={row.title}
                className={cn(
                  "flex w-full items-center justify-between px-7 py-5 text-left transition-colors hover:bg-[var(--surface-2)]",
                  i > 0 && "border-t border-[var(--border-subtle)]",
                )}
              >
                <div>
                  <div
                    className={cn(
                      "text-[14.5px] font-semibold",
                      row.danger
                        ? "text-[#C06A5C]"
                        : "text-[var(--text-primary)]",
                    )}
                  >
                    {row.title}
                  </div>
                  <div className="mt-1 text-[13px] text-[var(--text-faint)]">
                    {row.description}
                  </div>
                </div>
                <ChevronRight
                  size={16}
                  strokeWidth={1.7}
                  className="text-[var(--text-faint)]"
                />
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
