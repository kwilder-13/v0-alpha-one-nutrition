import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/5" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
          <Mail className="h-4 w-4 text-primary" />
          <span className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
            Join Our Network
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6 text-balance">
          Join the Alpha One{" "}
          <span className="text-gradient-gold">Research Network</span>
        </h2>

        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Stay informed about new research compounds, exclusive releases, and the latest developments 
          in peptide science. Join our network of researchers and professionals.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
            <Link href="/contact">
              Request Information
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary/30 text-foreground hover:bg-primary/10">
            <Link href="/contact?type=wholesale">
              Wholesale Inquiries
            </Link>
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            No spam, ever
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Unsubscribe anytime
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Research updates only
          </span>
        </div>
      </div>
    </section>
  )
}
