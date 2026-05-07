import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getFeaturedProducts } from "@/lib/products"
import { ProductCard } from "@/components/product-card"

export function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts()

  return (
    <section className="py-24 border-t border-border/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground mb-2">
              Featured <span className="text-gradient-gold">Products</span>
            </h2>
            <p className="text-muted-foreground">
              Our most popular research compounds
            </p>
          </div>
          <Button asChild variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10 group">
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
