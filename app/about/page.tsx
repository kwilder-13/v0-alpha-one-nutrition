import { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { 
  FlaskConical, 
  Shield, 
  Microscope, 
  Award, 
  Target,
  Beaker,
  FileCheck,
  Users,
  ArrowRight
} from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Alpha One Nutrition",
  description: "Learn about Alpha One Nutrition's commitment to premium research peptides, scientific excellence, and rigorous quality standards.",
}

const values = [
  {
    icon: Target,
    title: "Scientific Excellence",
    description: "We pursue the highest standards of scientific rigor in everything we do, from sourcing to testing."
  },
  {
    icon: Shield,
    title: "Uncompromising Quality",
    description: "Every product undergoes extensive third-party testing to ensure purity, potency, and consistency."
  },
  {
    icon: Beaker,
    title: "Research Focus",
    description: "We exist to support legitimate research applications with premium-grade compounds."
  },
  {
    icon: FileCheck,
    title: "Full Transparency",
    description: "We provide complete documentation, including Certificates of Analysis, for all our products."
  }
]

const standards = [
  {
    title: "Third-Party Testing",
    description: "Independent laboratories verify the identity, purity, and sterility of every batch."
  },
  {
    title: "HPLC Analysis",
    description: "High-Performance Liquid Chromatography ensures accurate purity measurements."
  },
  {
    title: "Mass Spectrometry",
    description: "Advanced molecular analysis confirms compound identity and structure."
  },
  {
    title: "Sterility Verification",
    description: "Rigorous sterility testing protocols for all injectable compounds."
  },
  {
    title: "Documentation",
    description: "Complete batch-specific Certificates of Analysis available for all products."
  },
  {
    title: "Quality Control",
    description: "Multi-stage quality checks throughout the manufacturing process."
  }
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 molecular-bg relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-primary/5 blur-[100px]" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
              <FlaskConical className="h-4 w-4 text-primary" />
              <span className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                About Alpha One
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-6 text-balance">
              Pioneering Excellence in{" "}
              <span className="text-gradient-gold">Research Peptides</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Alpha One Nutrition was founded on a simple principle: researchers deserve access to 
              the highest quality compounds, backed by rigorous testing and complete transparency. 
              We are committed to advancing scientific research through premium peptides.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 border-t border-border/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif font-semibold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At Alpha One Nutrition, we believe that scientific progress depends on access to 
                high-quality research materials. Our mission is to provide researchers, laboratories, 
                and institutions with premium peptide compounds that meet the most demanding standards.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We understand that research integrity begins with material integrity. That is why 
                we have built our entire operation around quality assurance, from careful sourcing 
                to rigorous third-party testing, ensuring every product we offer meets the exacting 
                standards the scientific community expects.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <Microscope className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Research Focused</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Premium Quality</span>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-serif font-bold text-gradient-gold mb-2">50+</div>
                  <p className="text-sm text-muted-foreground">Research Compounds</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-serif font-bold text-gradient-gold mb-2">98%+</div>
                  <p className="text-sm text-muted-foreground">Minimum Purity</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-serif font-bold text-gradient-gold mb-2">100%</div>
                  <p className="text-sm text-muted-foreground">COA Provided</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-serif font-bold text-gradient-gold mb-2">3rd</div>
                  <p className="text-sm text-muted-foreground">Party Verified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 border-t border-border/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">
              Our Core <span className="text-gradient-gold">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from product development to customer service.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div 
                  key={value.title}
                  className="glass-card rounded-xl p-6 text-center group hover:border-primary/40 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quality Standards Section */}
      <section className="py-20 border-t border-border/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">
              Quality <span className="text-gradient-gold">Standards</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our rigorous quality assurance process ensures every product meets the highest standards 
              for purity, potency, and consistency.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {standards.map((standard, index) => (
              <div 
                key={standard.title}
                className="glass-card rounded-xl p-6 hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{standard.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 border-t border-border/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-8 lg:p-12 text-center">
            <Users className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">
              Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              Alpha One Nutrition is powered by a dedicated team of scientists, quality assurance 
              specialists, and customer service professionals who share a passion for excellence. 
              Our collective expertise spans biochemistry, pharmaceutical quality control, and 
              research applications.
            </p>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">
                Contact Our Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
