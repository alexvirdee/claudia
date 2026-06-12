"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Wordmark } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--border-subtle)] bg-[color-mix(in_oklab,var(--bg-base)_78%,transparent)] bg-blur-md">
      <div className="mx-auto flex max-w-[1140px] items-center justify-between px-6 py-4 md:px-8 md:py-[18px]">
        <Link href="/" className="flex items-center gap-3 group">
          <Wordmark />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[14px] text-[var(--text-muted)] transition-colors duration-150 hover:text-[var(--text-primary)]"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/chat"
            className="text-[14px] text-[var(--text-muted)] transition-colors duration-150 hover:text-[var(--text-primary)]"
          >
            Sign in
          </Link>
          <Link href="/chat">
            <Button>Begin</Button>
          </Link>
        </div>

        <button
          className="md:hidden text-[var(--text-primary)]"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--border-subtle)] px-6 py-5 space-y-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-[15px] text-[var(--text-secondary)]"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/chat"
            className="block text-[15px] text-[var(--text-secondary)]"
          >
            Sign in
          </Link>
          <Link href="/chat" className="block">
            <Button className="w-full">Begin</Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
