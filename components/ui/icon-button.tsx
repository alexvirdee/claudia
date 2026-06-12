import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  size?: "sm" | "md";
  active?: boolean;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, label, size = "md", active, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        title={label}
        aria-label={label}
        className={cn(
          "inline-flex items-center justify-center rounded-[8px] border border-transparent text-[var(--text-muted)] transition-all duration-150 ease-out",
          "hover:bg-[color-mix(in_oklab,var(--text-primary)_7%,transparent)] hover:text-[var(--text-primary)]",
          "disabled:opacity-40 disabled:pointer-events-none",
          active && "text-[var(--accent)] bg-[var(--accent-soft)]",
          size === "sm" ? "h-[30px] w-[30px]" : "h-9 w-9",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);
IconButton.displayName = "IconButton";
