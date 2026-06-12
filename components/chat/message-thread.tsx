"use client";

import { useEffect, useRef } from "react";
import { MessageBlock } from "./message-block";
import type { Message } from "@/lib/mock-data";

interface MessageThreadProps {
  messages: Message[];
  isThinking?: boolean;
}

export function MessageThread({ messages, isThinking }: MessageThreadProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages.length, isThinking]);

  return (
    <div ref={ref} className="flex-1 overflow-y-auto overflow-x-hidden">
      <div className="mx-auto flex max-w-[760px] flex-col gap-8 px-7 pb-4 pt-10">
        {messages.map((m, i) => (
          <MessageBlock
            key={m.id}
            message={m}
            isLatest={i === messages.length - 1}
          />
        ))}
        {isThinking && (
          <MessageBlock
            message={{
              id: "thinking",
              role: "claudia",
              content: "",
              time: "",
              thinking: true,
            }}
            isLatest
          />
        )}
      </div>
    </div>
  );
}
