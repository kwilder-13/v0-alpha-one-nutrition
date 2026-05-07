"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { products, categories } from "@/lib/products"
import { Search, Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category") || "all"
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === "all" || product.categorySlug === selectedCategory
      const matchesSearch = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.researchInterests.some(interest => 
          interest.toLowerCase().includes(searchQuery.toLowerCase())
        )
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 molecular-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-foreground mb-4">
              Research <span className="text-gradient-gold">Peptide Catalog</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Browse our complete selection of premium research compounds, each backed by rigorous 
              laboratory testing and quality assurance standards.
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="py-12 border-t border-border/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Search & Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search peptides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 pl-12 pr-4 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Mobile Filter Toggle */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden border-primary/30 text-foreground"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className={`lg:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <div className="glass-card rounded-xl p-6 sticky top-24">
                <h3 className="text-sm font-semibold text-foreground mb-4 tracking-wider uppercase">
                  Categories
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-colors ${
                      selectedCategory === "all"
                        ? "bg-primary/20 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    All Products
                    <span className="ml-2 text-xs opacity-60">({products.length})</span>
                  </button>
                  {categories.map((category) => {
                    const count = products.filter(p => p.categorySlug === category.slug).length
                    return (
                      <button
                        key={category.slug}
                        onClick={() => setSelectedCategory(category.slug)}
                        className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-colors ${
                          selectedCategory === category.slug
                            ? "bg-primary/20 text-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }`}
                      >
                        {category.name}
                        <span className="ml-2 text-xs opacity-60">({count})</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Results Count */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-muted-foreground">
                  Showing <span className="text-foreground font-medium">{filteredProducts.length}</span> products
                </p>
              </div>

              {/* Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 glass-card rounded-xl">
                  <p className="text-muted-foreground mb-4">No products found matching your criteria.</p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchQuery("")
                      setSelectedCategory("all")
                    }}
                    className="border-primary/30 text-foreground"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
