import Link from "next/link"
import { Mail } from "lucide-react"

const footerLinks = {
  products: [
    { href: "/products?category=recovery-healing", label: "Recovery & Healing" },
    { href: "/products?category=cognitive-nootropics", label: "Cognitive & Nootropics" },
    { href: "/products?category=fat-loss-metabolism", label: "Fat Loss & Metabolism" },
    { href: "/products?category=growth-hormone-recovery", label: "Growth Hormone" },
    { href: "/products?category=skin-appearance", label: "Skin & Appearance" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/research", label: "Research Library" },
    { href: "/contact", label: "Contact" },
    { href: "/wholesale", label: "Wholesale Inquiry" },
  ],
  legal: [
    { href: "/terms", label: "Terms of Service" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/compliance", label: "Compliance" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative h-10 w-10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-80" />
                <div className="absolute inset-1 rounded-full bg-background flex items-center justify-center">
                  <span className="text-primary font-serif font-bold text-lg">A1</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-wider text-foreground">ALPHA ONE</span>
                <span className="text-xs tracking-[0.2em] text-muted-foreground">NUTRITION</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Premium research peptides backed by science-driven sourcing and rigorous laboratory testing standards.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4 text-primary" />
              <span>research@alphaonenutrition.com</span>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 tracking-wider">PRODUCTS</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 tracking-wider">COMPANY</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 tracking-wider">LEGAL</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Alpha One Nutrition. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-muted-foreground/60 uppercase tracking-wider">Age Verified</span>
              <span className="text-muted-foreground/40">•</span>
              <span className="text-[10px] text-muted-foreground/60 uppercase tracking-wider">Research Use Only</span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-border/30 py-6">
          <p className="text-[11px] text-muted-foreground/50 text-center leading-relaxed max-w-4xl mx-auto">
            <strong className="text-muted-foreground/70">DISCLAIMER:</strong> For research purposes only. 
            Not intended to diagnose, treat, cure, or prevent any disease. Products are not for human consumption. 
            You must be at least 18 years of age to purchase. By purchasing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </footer>
  )
}
