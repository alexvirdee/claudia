import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className, size = 30 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Claudia"
      className={cn("flex-none", className)}
    >
      <circle cx="60" cy="60" r="46" stroke="#3A3733" strokeWidth="1.5" fill="none" />
      <path
        d="M 88 28 A 42 42 0 1 0 88 92"
        stroke="#C66A4E"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="60" cy="60" r="6.5" fill="#D8B4A0" />
    </svg>
  );
}

export function Wordmark({
  className,
  showMark = true,
  size = 30,
  nameSize = "text-[23px]",
}: {
  className?: string;
  showMark?: boolean;
  size?: number;
  nameSize?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {showMark && <Logo size={size} />}
      <span
        className={cn(
          "font-display font-medium text-[var(--text-primary)] tracking-tight",
          nameSize,
        )}
      >
        Claudia
      </span>
    </div>
  );
}
