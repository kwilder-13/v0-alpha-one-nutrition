"use client"

import Link from "next/link"
import { HeartPulse, Brain, Flame, TrendingUp, Sparkles, ArrowRight } from "lucide-react"
import { categories } from "@/lib/products"

const iconMap: Record<string, React.ElementType> = {
  "heart-pulse": HeartPulse,
  "brain": Brain,
  "flame": Flame,
  "trending-up": TrendingUp,
  "sparkles": Sparkles,
}

export function CategoryGrid() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground mb-4">
            Explore by <span className="text-gradient-gold">Category</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our comprehensive selection of research peptides, organized by their primary areas of scientific interest.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = iconMap[category.icon] || Sparkles
            return (
              <Link
                key={category.slug}
                href={`/products?category=${category.slug}`}
                className="group relative glass-card rounded-xl p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary/20">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Arrow */}
                  <div className="flex items-center text-primary text-sm font-medium">
                    <span>View Products</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>

                {/* Decorative molecular dots */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 right-8 w-1.5 h-1.5 rounded-full bg-primary/15 opacity-0 group-hover:opacity-100 transition-opacity delay-75" />
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
