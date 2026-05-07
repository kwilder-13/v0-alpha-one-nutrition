import { notFound } from "next/navigation"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { products, getProductById, getProductsByCategory } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { 
  ArrowLeft, 
  ArrowRight, 
  FlaskConical, 
  Shield, 
  FileCheck, 
  HelpCircle,
  ChevronDown
} from "lucide-react"

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = await params
  const product = getProductById(id)
  
  if (!product) {
    return {
      title: "Product Not Found | Alpha One Nutrition",
    }
  }

  return {
    title: `${product.name} ${product.mg} | Alpha One Nutrition`,
    description: product.shortDescription,
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  const relatedProducts = getProductsByCategory(product.categorySlug)
    .filter(p => p.id !== product.id)
    .slice(0, 4)

  const faqs = [
    {
      question: "What is the purity level of this product?",
      answer: "All Alpha One Nutrition research compounds undergo rigorous third-party testing to ensure minimum 98% purity. Certificate of Analysis (COA) is available upon request."
    },
    {
      question: "How should this product be stored?",
      answer: "For optimal stability, store in a cool, dry place away from direct sunlight. Refrigeration is recommended for long-term storage. Keep away from moisture and heat."
    },
    {
      question: "Is this product for human consumption?",
      answer: "No. This product is strictly for research purposes only and is not intended for human consumption, diagnosis, treatment, cure, or prevention of any disease."
    },
    {
      question: "Do you provide Certificates of Analysis?",
      answer: "Yes. We provide detailed COAs for all products upon request. Each batch is independently tested for identity, purity, and sterility."
    }
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Breadcrumb */}
      <section className="pt-28 pb-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
            <span>/</span>
            <Link 
              href={`/products?category=${product.categorySlug}`} 
              className="hover:text-primary transition-colors"
            >
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Hero */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="glass-card rounded-2xl p-8 lg:p-12 flex items-center justify-center min-h-[400px] sticky top-28">
              <div className="relative">
                {/* Main Vial */}
                <div className="relative animate-float" style={{ animationDuration: '5s' }}>
                  <div className="w-24 h-56 rounded-b-full bg-gradient-to-b from-zinc-700 to-zinc-800 border border-primary/30 relative overflow-hidden shadow-2xl">
                    <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-primary/50 to-primary/10 rounded-b-full" />
                    <div className="absolute top-6 left-3 w-4 h-24 bg-white/5 rounded-full blur-sm" />
                  </div>
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-6 bg-gradient-to-b from-primary to-primary/70 rounded-t-lg shadow-lg" />
                  
                  {/* Label */}
                  <div className="absolute top-20 left-1/2 -translate-x-1/2 w-16 text-center">
                    <div className="bg-background/80 backdrop-blur-sm rounded px-2 py-1 border border-primary/20">
                      <span className="text-[8px] font-bold text-primary tracking-wider">A1N</span>
                    </div>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full scale-150 opacity-50" />

                {/* Floating particles */}
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-primary/40 animate-pulse-gold"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${10 + i * 20}%`,
                      animationDelay: `${i * 0.5}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              {/* Category Badge */}
              <Link 
                href={`/products?category=${product.categorySlug}`}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-primary hover:bg-primary/10 transition-colors"
              >
                {product.category}
              </Link>

              {/* Title & Dosage */}
              <div>
                <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-foreground mb-2">
                  {product.name}
                </h1>
                <p className="text-2xl text-primary font-medium">{product.mg}</p>
              </div>

              {/* Description */}
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Research Interests */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3 tracking-wider uppercase">
                  Research Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.researchInterests.map((interest) => (
                    <span
                      key={interest}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 flex-1">
                  <Link href="/contact">
                    Request Pricing
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary/30 text-foreground hover:bg-primary/10 flex-1">
                  <Link href="/contact?type=coa">
                    Request COA
                  </Link>
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/30">
                <div className="flex flex-col items-center text-center">
                  <FlaskConical className="h-6 w-6 text-primary mb-2" />
                  <span className="text-xs text-muted-foreground">Lab Tested</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Shield className="h-6 w-6 text-primary mb-2" />
                  <span className="text-xs text-muted-foreground">3rd Party Verified</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <FileCheck className="h-6 w-6 text-primary mb-2" />
                  <span className="text-xs text-muted-foreground">COA Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Sections */}
      <section className="py-16 border-t border-border/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Overview */}
            <div className="glass-card rounded-xl p-8">
              <h2 className="text-xl font-serif font-semibold text-foreground mb-4">
                Product Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {product.shortDescription} This compound has been extensively studied in various 
                research settings and is manufactured to the highest quality standards.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  High purity research-grade compound
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Manufactured under strict quality control
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Third-party tested for purity and identity
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Certificate of Analysis available
                </li>
              </ul>
            </div>

            {/* Lab Testing */}
            <div className="glass-card rounded-xl p-8">
              <h2 className="text-xl font-serif font-semibold text-foreground mb-4">
                Laboratory Testing
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every batch of {product.name} undergoes comprehensive third-party testing to ensure 
                it meets our stringent quality standards before release.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-border/30">
                  <span className="text-sm text-muted-foreground">Purity Testing</span>
                  <span className="text-sm text-primary font-medium">HPLC Analysis</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border/30">
                  <span className="text-sm text-muted-foreground">Identity Verification</span>
                  <span className="text-sm text-primary font-medium">Mass Spectrometry</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border/30">
                  <span className="text-sm text-muted-foreground">Sterility</span>
                  <span className="text-sm text-primary font-medium">Verified Sterile</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-sm text-muted-foreground">Documentation</span>
                  <span className="text-sm text-primary font-medium">COA Provided</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 border-t border-border/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <HelpCircle className="h-8 w-8 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-serif font-semibold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group glass-card rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-medium text-foreground pr-4">{faq.question}</span>
                  <ChevronDown className="h-5 w-5 text-primary flex-shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 pt-0">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 border-t border-border/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-serif font-semibold text-foreground">
                Related Products
              </h2>
              <Button asChild variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10">
                <Link href={`/products?category=${product.categorySlug}`}>
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Products */}
      <section className="py-8 border-t border-border/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link 
            href="/products" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Products
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
