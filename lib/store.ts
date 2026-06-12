"use client";

import { create } from "zustand";
import { MOCK_CONVERSATIONS, type Conversation, type Message } from "./mock-data";

interface ChatState {
  conversations: Conversation[];
  activeId: string | null;
  isThinking: boolean;
  setActive: (id: string | null) => void;
  newConversation: () => void;
  sendMessage: (text: string) => void;
}

const responses = [
  "I'm with you. Before I rush to an answer — tell me a little about why this is on your mind today.",
  "I'd love to think this through carefully. What feels most unresolved about it right now?",
  "Let's slow down for a moment. If we got this exactly right, what would change for you tomorrow?",
  "I hear two things in what you just said. Would it help to look at them separately, or are they really the same question?",
  "A good place to start. What have you already tried, and what about it didn't quite fit?",
];

function nowTime() {
  return new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

function uid() {
  return `m-${Math.random().toString(36).slice(2, 9)}`;
}

export const useChatStore = create<ChatState>((set, get) => ({
  conversations: MOCK_CONVERSATIONS,
  activeId: null,
  isThinking: false,
  setActive: (id) => set({ activeId: id }),
  newConversation: () => set({ activeId: null, isThinking: false }),
  sendMessage: (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const state = get();
    const userMsg: Message = {
      id: uid(),
      role: "user",
      content: trimmed,
      time: nowTime(),
    };

    let activeId = state.activeId;
    let conversations = state.conversations;

    if (!activeId) {
      const id = `c-${Date.now()}`;
      const newConv: Conversation = {
        id,
        title: trimmed.slice(0, 48) + (trimmed.length > 48 ? "…" : ""),
        preview: trimmed,
        updatedAt: "Just now",
        messages: [userMsg],
      };
      conversations = [newConv, ...conversations];
      activeId = id;
    } else {
      conversations = conversations.map((c) =>
        c.id === activeId
          ? { ...c, messages: [...c.messages, userMsg], preview: trimmed, updatedAt: "Just now" }
          : c,
      );
    }

    set({ conversations, activeId, isThinking: true });

    const reply = responses[Math.floor(Math.random() * responses.length)];
    setTimeout(() => {
      const latest = get();
      const assistantMsg: Message = {
        id: uid(),
        role: "claudia",
        content: reply,
        time: nowTime(),
      };
      set({
        conversations: latest.conversations.map((c) =>
          c.id === activeId
            ? { ...c, messages: [...c.messages, assistantMsg], updatedAt: "Just now" }
            : c,
        ),
        isThinking: false,
      });
    }, 1400);
  },
}));
