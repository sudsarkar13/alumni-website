import { HeroSection } from "@/components/pages/landing/HeroSection"
import { FeaturesSection } from "@/components/pages/landing/FeaturesSection"
import { StatsSection } from "@/components/pages/landing/StatsSection"
import { TestimonialsSection } from "@/components/pages/landing/TestimonialsSection"
import { CTASection } from "@/components/pages/landing/CTASection"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}