import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group glass-card rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]"
    >
      {/* Product Image Area */}
      <div className="relative h-48 bg-gradient-to-br from-secondary to-muted flex items-center justify-center overflow-hidden">
        {/* Vial Illustration */}
        <div className="relative animate-float" style={{ animationDuration: '4s' }}>
          <div className="w-12 h-28 rounded-b-full bg-gradient-to-b from-zinc-700 to-zinc-800 border border-primary/20 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-primary/40 to-primary/10 rounded-b-full" />
            <div className="absolute top-3 left-1.5 w-2 h-12 bg-white/5 rounded-full blur-sm" />
          </div>
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-3 bg-gradient-to-b from-primary to-primary/70 rounded-t-md" />
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 text-[10px] font-medium tracking-wider uppercase bg-background/80 text-primary rounded-full border border-primary/20">
            {product.category}
          </span>
        </div>

        {/* Glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">
            {product.mg}
          </span>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
          {product.shortDescription}
        </p>

        {/* Research Interests */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.researchInterests.slice(0, 2).map((interest) => (
            <span
              key={interest}
              className="text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded"
            >
              {interest}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center text-primary text-sm font-medium">
          <span>Learn More</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
        </div>
      </div>
    </Link>
  )
}
