import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTime(date: Date): string {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

export function greetingForHour(hour: number): string {
  if (hour < 5) return "Still up, Alex";
  if (hour < 12) return "Good morning, Alex";
  if (hour < 18) return "Good afternoon, Alex";
  return "Good evening, Alex";
}
