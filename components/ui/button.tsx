import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[var(--accent)] text-[var(--text-on-accent)] shadow-[var(--glow-soft)] hover:bg-[var(--accent-hover)] hover:shadow-[var(--glow-accent)] active:bg-[var(--accent-press)]",
  secondary:
    "bg-[var(--surface-2)] text-[var(--text-primary)] border border-[var(--border-default)] hover:border-[var(--border-strong)] hover:bg-[var(--surface-3)]",
  ghost:
    "text-[var(--text-secondary)] hover:bg-[color-mix(in_oklab,var(--text-primary)_7%,transparent)] hover:text-[var(--text-primary)]",
  outline:
    "border border-[var(--border-default)] text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-3.5 text-[13px] rounded-[8px]",
  md: "h-10 px-[18px] text-[14px] rounded-[8px]",
  lg: "h-12 px-7 text-[15px] rounded-[12px]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-medium whitespace-nowrap transition-all duration-150 ease-out disabled:opacity-50 disabled:pointer-events-none active:scale-[0.97]",
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
