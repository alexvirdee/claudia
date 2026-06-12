import { Nav } from "@/components/landing/nav";
import { Hero } from "@/components/landing/hero";
import { Philosophy } from "@/components/landing/philosophy";
import { Features } from "@/components/landing/features";
import { ChatPreview } from "@/components/landing/chat-preview";
import { UseCases } from "@/components/landing/use-cases";
import { Testimonials } from "@/components/landing/testimonials";
import { Pricing } from "@/components/landing/pricing";
import { Faq } from "@/components/landing/faq";
import { FinalCta } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Nav />
      <Hero />
      <Philosophy />
      <Features />
      <ChatPreview />
      <UseCases />
      <Testimonials />
      <Pricing />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
