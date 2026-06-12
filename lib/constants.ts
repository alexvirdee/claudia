export const BRAND = {
  name: "Claudia",
  tagline: "Listen first. Answer second.",
  philosophy:
    "Claudia understands context, remembers what matters, and helps you think — less like software, more like a trusted collaborator.",
};

export const NAV_LINKS = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Journal", href: "#journal" },
] as const;

export const PROMPT_CATEGORIES = [
  { id: "write", label: "Write", description: "Drafts, edits, replies" },
  { id: "code", label: "Code", description: "Explain, debug, design" },
  { id: "strategize", label: "Strategize", description: "Plan, decide, reframe" },
  { id: "learn", label: "Learn", description: "Concepts, made clear" },
  { id: "life", label: "Life stuff", description: "The quiet, in-between things" },
  { id: "reflect", label: "Reflect", description: "Sit with the question" },
] as const;

export type PromptCategoryId = (typeof PROMPT_CATEGORIES)[number]["id"];

export const EXAMPLE_PROMPTS = [
  { category: "strategize", text: "Help me think through a startup idea" },
  { category: "write", text: "Rewrite this so it sounds more thoughtful" },
  { category: "life", text: "Plan my week around deep work" },
  { category: "code", text: "Explain this codebase in plain English" },
  { category: "reflect", text: "Help me make a difficult decision" },
] as const;

export const SUGGESTED_PROMPTS = [
  { icon: "compass", text: "Help me plan my week around what matters" },
  { icon: "pen", text: "Draft a thoughtful reply to a hard email" },
  { icon: "spark", text: "Think through a decision I keep avoiding" },
  { icon: "book", text: "Teach me something new, the way I learn best" },
] as const;
