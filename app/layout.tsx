import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Claudia — An AI that listens",
  description:
    "Claudia is an elegant AI assistant designed to understand context, remember nuance, and help you think clearly.",
  metadataBase: new URL("https://claudia.ai"),
  openGraph: {
    title: "Claudia — An AI that listens",
    description:
      "Thoughtful assistance for thoughtful people. Listen first. Answer second.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-[var(--bg-base)] text-[var(--text-secondary)] antialiased">
        {children}
      </body>
    </html>
  );
}
