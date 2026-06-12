import { cn } from "@/lib/utils";

type Tone = "default" | "accent" | "soft";

export function Badge({
  className,
  tone = "default",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { tone?: Tone }) {
  const tones: Record<Tone, string> = {
    default:
      "bg-[var(--surface-2)] border border-[var(--border-default)] text-[var(--text-muted)]",
    accent:
      "bg-[var(--accent-soft)] border border-[var(--border-accent)] text-[var(--accent)]",
    soft: "bg-transparent border border-[var(--border-subtle)] text-[var(--text-faint)]",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-pill px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em]",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
