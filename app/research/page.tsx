import { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { 
  BookOpen, 
  ArrowRight, 
  Clock,
  FlaskConical,
  Brain,
  TrendingUp,
  Sparkles,
  Zap,
  HeartPulse
} from "lucide-react"

export const metadata: Metadata = {
  title: "Research Library | Alpha One Nutrition",
  description: "Educational resources about peptides, their applications in research, and the science behind these powerful compounds.",
}

const articles = [
  {
    id: "what-are-peptides",
    title: "What Are Peptides?",
    description: "An introduction to peptides, their structure, and their role in biological research. Learn the fundamentals of these powerful amino acid chains.",
    category: "Fundamentals",
    readTime: "5 min read",
    icon: FlaskConical,
    featured: true
  },
  {
    id: "recovery-peptides-explained",
    title: "Recovery Peptides Explained",
    description: "A comprehensive guide to peptides researched for their potential in tissue repair, cellular regeneration, and recovery support.",
    category: "Recovery",
    readTime: "8 min read",
    icon: HeartPulse
  },
  {
    id: "nootropic-peptides-guide",
    title: "Nootropic Peptides Guide",
    description: "Explore peptides being studied for cognitive enhancement, mental clarity, and neuroprotective properties.",
    category: "Cognitive",
    readTime: "7 min read",
    icon: Brain
  },
  {
    id: "growth-hormone-secretagogues",
    title: "Growth Hormone Secretagogues",
    description: "Understanding the mechanisms and research applications of peptides that stimulate growth hormone release.",
    category: "Performance",
    readTime: "10 min read",
    icon: TrendingUp,
    featured: true
  },
  {
    id: "understanding-nad-plus",
    title: "Understanding NAD+",
    description: "The science behind NAD+ and its role in cellular energy, metabolism, and longevity research.",
    category: "Longevity",
    readTime: "6 min read",
    icon: Zap
  },
  {
    id: "beginners-guide-research-peptides",
    title: "Beginner&apos;s Guide to Research Peptides",
    description: "Everything you need to know to get started with peptide research, including storage, handling, and documentation.",
    category: "Fundamentals",
    readTime: "12 min read",
    icon: BookOpen,
    featured: true
  },
  {
    id: "skin-peptides-research",
    title: "Skin & Aesthetic Peptides",
    description: "An overview of peptides being researched for skin health, collagen production, and aesthetic applications.",
    category: "Aesthetics",
    readTime: "7 min read",
    icon: Sparkles
  },
  {
    id: "metabolic-peptides-overview",
    title: "Metabolic Peptides Overview",
    description: "Exploring peptides studied for their effects on metabolism, body composition, and energy regulation.",
    category: "Metabolism",
    readTime: "9 min read",
    icon: TrendingUp
  }
]

const featuredArticles = articles.filter(a => a.featured)
const regularArticles = articles.filter(a => !a.featured)

export default function ResearchPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 molecular-bg relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-primary/5 blur-[100px]" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                Research Library
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-foreground mb-6">
              Educational <span className="text-gradient-gold">Resources</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore our comprehensive library of articles covering peptide science, research 
              applications, and best practices. Stay informed with the latest insights from 
              the field of peptide research.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 border-t border-border/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-8">
            Featured Articles
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {featuredArticles.map((article) => {
              const Icon = article.icon
              return (
                <article 
                  key={article.id}
                  className="group glass-card rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="h-48 bg-gradient-to-br from-secondary to-muted flex items-center justify-center relative overflow-hidden">
                    <Icon className="h-16 w-16 text-primary/40 group-hover:text-primary/60 transition-colors" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-medium tracking-wider uppercase bg-primary/20 text-primary rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                      {article.description}
                    </p>
                    
                    <div className="flex items-center text-primary text-sm font-medium">
                      <span>Read Article</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 border-t border-border/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-8">
            All Articles
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {regularArticles.map((article) => {
              const Icon = article.icon
              return (
                <article 
                  key={article.id}
                  className="group glass-card rounded-xl p-6 hover:border-primary/40 transition-all duration-300 flex gap-6"
                >
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-medium text-primary">{article.category}</span>
                      <span className="text-muted-foreground/40">•</span>
                      <span className="text-xs text-muted-foreground">{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                      {article.description}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <FlaskConical className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">
            Ready to Start Your Research?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Explore our complete catalog of premium research peptides, each backed by rigorous 
            third-party testing and comprehensive documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/products">
                Browse Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary/30 text-foreground hover:bg-primary/10">
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
