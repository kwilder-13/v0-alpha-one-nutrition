import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/home/hero"
import { TrustBadges } from "@/components/home/trust-badges"
import { CategoryGrid } from "@/components/home/category-grid"
import { FeaturedProducts } from "@/components/home/featured-products"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustBadges />
      <CategoryGrid />
      <FeaturedProducts />
      <CTASection />
      <Footer />
    </main>
  )
}
