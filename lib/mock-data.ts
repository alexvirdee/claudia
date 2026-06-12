export type MessageRole = "user" | "claudia";

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  time: string;
  thinking?: boolean;
}

export interface Conversation {
  id: string;
  title: string;
  preview: string;
  updatedAt: string;
  messages: Message[];
}

export const MOCK_CONVERSATIONS: Conversation[] = [
  {
    id: "q3-positioning",
    title: "Q3 positioning strategy",
    preview: "Before we sketch any messaging…",
    updatedAt: "Today",
    messages: [
      {
        id: "m1",
        role: "user",
        content: "Help me think through our Q3 positioning.",
        time: "3:20 PM",
      },
      {
        id: "m2",
        role: "claudia",
        content:
          "Happily. Before we sketch any messaging — who are we really trying to reach this quarter, and what do we want them to feel when they meet us?",
        time: "3:20 PM",
      },
    ],
  },
  {
    id: "launch-narrative",
    title: "Reframing the launch narrative",
    preview: "Let's start with what hasn't changed…",
    updatedAt: "Yesterday",
    messages: [
      {
        id: "m1",
        role: "user",
        content:
          "We're three weeks from launch and the narrative still feels off. Help me figure out why.",
        time: "10:14 AM",
      },
      {
        id: "m2",
        role: "claudia",
        content:
          "Let's start with what hasn't changed. The thing you were originally most excited to share — has it survived the last few rounds of editing, or did it get smoothed out somewhere along the way?\n\nSometimes the off feeling is grief for the line we cut.",
        time: "10:15 AM",
      },
    ],
  },
  {
    id: "weekly-planning",
    title: "Weekly planning ritual",
    preview: "Three slow mornings, two deep blocks…",
    updatedAt: "2 days ago",
    messages: [
      {
        id: "m1",
        role: "user",
        content:
          "Help me design a Sunday-evening planning ritual that doesn't feel like homework.",
        time: "8:42 PM",
      },
      {
        id: "m2",
        role: "claudia",
        content:
          "I love this question. Let's start small — fifteen minutes, a notebook, and one cup of something warm. We'll work backwards from what you want the week to feel like, not the to-do list.\n\nWhat's one Sunday recently where you ended the evening feeling ready for Monday?",
        time: "8:43 PM",
      },
    ],
  },
  {
    id: "board-notes",
    title: "Notes from the board call",
    preview: "Three threads worth pulling on…",
    updatedAt: "4 days ago",
    messages: [
      {
        id: "m1",
        role: "user",
        content:
          "I have rough notes from yesterday's board call. Can you help me find the threads worth pulling on?",
        time: "9:02 AM",
      },
      {
        id: "m2",
        role: "claudia",
        content:
          "Of course. Paste them in whenever you're ready — I'll read carefully and we'll group what I'm hearing before I suggest anything.",
        time: "9:02 AM",
      },
    ],
  },
  {
    id: "morning-routine",
    title: "A gentler morning routine",
    preview: "What if we started with one thing…",
    updatedAt: "Last week",
    messages: [
      {
        id: "m1",
        role: "user",
        content:
          "My mornings have gotten frantic. I want to design a slower one without becoming insufferable about it.",
        time: "6:48 AM",
      },
      {
        id: "m2",
        role: "claudia",
        content:
          "Wise framing. Let's pick one anchor — something small that signals the day has begun on your terms. Coffee made unhurried, ten minutes in a chair, a single page in a notebook. The rest can stay messy.",
        time: "6:49 AM",
      },
    ],
  },
  {
    id: "autumn-reading",
    title: "Reading list for autumn",
    preview: "Six books, paced for a slow read…",
    updatedAt: "Last week",
    messages: [
      {
        id: "m1",
        role: "user",
        content:
          "Give me a reading list for autumn. Mostly fiction. Slow, beautiful, not too long.",
        time: "5:30 PM",
      },
      {
        id: "m2",
        role: "claudia",
        content:
          "A pleasure. Let me ask one thing first — would you rather end the season feeling moved or feeling clarified? The lists go in slightly different directions.",
        time: "5:30 PM",
      },
    ],
  },
];

export const USER = {
  name: "Alex Morgan",
  email: "alex@claudia.ai",
  initials: "AM",
  plan: "Considered",
};

export const TESTIMONIALS = [
  {
    quote:
      "Claudia is the first AI that asks me a better question before answering mine. It changes the kind of work we do together.",
    name: "Maya Chen",
    role: "Founder, Plover Studio",
  },
  {
    quote:
      "I sit down to write at 9 PM, tell Claudia what I'm circling, and by 9:15 I know what I actually meant to say.",
    name: "Daniel Ashe",
    role: "Essayist",
  },
  {
    quote:
      "It feels less like a tool and more like a thoughtful collaborator who happens to read every draft.",
    name: "Priya Raman",
    role: "Head of Product, Quill",
  },
];

export const FAQ = [
  {
    q: "How is Claudia different from other AI assistants?",
    a: "Claudia is built around a single conviction — that the best assistance starts with listening, not generating. She asks the question before offering the answer, carries context between conversations, and is tuned for the kind of thinking that needs room to breathe.",
  },
  {
    q: "What does Claudia remember about me?",
    a: "Only what you've chosen to share, and only what makes future conversations more useful. You can read, edit, or clear her memory whenever you like. Nothing is sold, mined, or used to train models you didn't ask to be a part of.",
  },
  {
    q: "Can I use Claudia for work?",
    a: "Yes — Claudia is built for the work that requires thinking, not just typing. Strategy, writing, planning, decisions, and the messy in-between. Teams plans share context and voice across collaborators while keeping personal threads private.",
  },
  {
    q: "How does pricing work?",
    a: "The Considered plan is free and includes long-form conversations, memory, and the full prompt library. Paid plans add longer memory, priority response, and team workspaces. There is no usage meter staring at you while you think.",
  },
  {
    q: "Is my data private?",
    a: "Your conversations stay yours. Claudia encrypts everything at rest and in transit, never sells data, and never uses your conversations to train a generic model. You can export or delete your history at any time.",
  },
];

export const USE_CASES = [
  {
    eyebrow: "For founders",
    title: "Think through what to build before you build it",
    body: "Claudia is the thinking partner you wish you had at 11 PM — measured, curious, and unafraid to ask the question you've been avoiding.",
  },
  {
    eyebrow: "For writers",
    title: "Find the sentence underneath the sentence",
    body: "Paste a draft. Tell her what it's meant to do. She'll listen for what's already working and gently point to what isn't.",
  },
  {
    eyebrow: "For decision-makers",
    title: "Sit with a hard choice until it gets clearer",
    body: "Not a recommendation engine. A calm second mind that helps you separate what you know from what you fear.",
  },
];

export const PRICING_PLANS = [
  {
    name: "Considered",
    price: "$0",
    cadence: "/month",
    description: "For thoughtful individuals.",
    features: [
      "Unlimited conversations",
      "Memory across chats",
      "The full prompt library",
      "Voice replies",
    ],
    cta: "Begin",
    featured: false,
  },
  {
    name: "Cultivated",
    price: "$18",
    cadence: "/month",
    description: "For people whose thinking is their craft.",
    features: [
      "Everything in Considered",
      "Longer, deeper memory",
      "Priority response",
      "Personal voice tuning",
      "Early access to new ideas",
    ],
    cta: "Start free trial",
    featured: true,
  },
  {
    name: "Studio",
    price: "Custom",
    cadence: "",
    description: "For teams who think together.",
    features: [
      "Everything in Cultivated",
      "Shared workspaces",
      "Team voice and tone",
      "SSO and admin controls",
      "Dedicated success partner",
    ],
    cta: "Talk to us",
    featured: false,
  },
];
