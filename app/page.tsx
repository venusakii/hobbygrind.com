import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductHighlights } from "@/components/product-highlights"
import { WhySection } from "@/components/why-section"
import { InteractiveSection } from "@/components/interactive-section"
import { GallerySection } from "@/components/gallery-section"
import { ComparisonTable } from "@/components/comparison-table"
import { ReviewsSection } from "@/components/reviews-section"
import { TutorialsSection } from "@/components/tutorials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { AnimatedBackground } from "@/components/animated-background"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden custom-cursor">
      <AnimatedBackground />
      <HeroSection />
      <AboutSection />
      <ProductHighlights />
      <WhySection />
      <InteractiveSection />
      <GallerySection />
      <ComparisonTable />
      <ReviewsSection />
      <TutorialsSection />
      <CTASection />
      <Footer />
      <CookieBanner />
    </main>
  )
}
