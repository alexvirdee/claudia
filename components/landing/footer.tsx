import { Wordmark } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] py-12">
      <div className="mx-auto flex max-w-[1140px] flex-col items-start gap-8 px-6 md:flex-row md:items-center md:justify-between md:px-8">
        <Wordmark size={26} nameSize="text-[19px]" />
        <div className="flex flex-wrap gap-6 md:gap-7">
          {["Philosophy", "Privacy", "Journal", "Contact", "Changelog"].map(
            (link) => (
              <a
                key={link}
                href="#"
                className="text-[13px] text-[var(--text-faint)] transition-colors hover:text-[var(--text-secondary)]"
              >
                {link}
              </a>
            ),
          )}
        </div>
        <div className="text-[13px] text-[var(--text-faint)]">© 2026 Claudia</div>
      </div>
    </footer>
  );
}
