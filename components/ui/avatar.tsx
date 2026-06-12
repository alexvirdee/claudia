import { cn } from "@/lib/utils";

interface AvatarProps {
  who: "user" | "claudia";
  initials?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: "h-8 w-8 text-[12px]",
  md: "h-10 w-10 text-[13px]",
  lg: "h-12 w-12 text-[15px]",
};

export function Avatar({ who, initials = "AM", size = "sm", className }: AvatarProps) {
  if (who === "claudia") {
    return (
      <span
        className={cn(
          "inline-flex flex-none items-center justify-center rounded-full border border-[var(--border-default)] bg-[var(--surface-2)] font-display font-medium text-[var(--accent)]",
          sizes[size],
          size === "sm" && "text-[17px]",
          size === "md" && "text-[19px]",
          size === "lg" && "text-[22px]",
          className,
        )}
        aria-label="Claudia"
      >
        C
      </span>
    );
  }
  return (
    <span
      className={cn(
        "inline-flex flex-none items-center justify-center rounded-full font-semibold text-white",
        "bg-gradient-to-br from-lavender-400 to-lavender-600",
        sizes[size],
        className,
      )}
      style={{
        background: "linear-gradient(150deg, var(--lavender-400), var(--lavender-600))",
      }}
      aria-label="You"
    >
      {initials}
    </span>
  );
}
