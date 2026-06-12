import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Card = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "bg-[var(--surface-1)] border border-[var(--border-subtle)] rounded-[16px] shadow-[var(--edge-light)]",
        className,
      )}
      {...props}
    />
  ),
);
Card.displayName = "Card";
