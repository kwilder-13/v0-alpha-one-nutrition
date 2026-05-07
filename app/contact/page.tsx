"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { 
  Mail, 
  MessageSquare, 
  Building2,
  FileText,
  Send,
  CheckCircle,
  ArrowRight
} from "lucide-react"

const inquiryTypes = [
  { id: "general", label: "General Inquiry", icon: MessageSquare },
  { id: "pricing", label: "Request Pricing", icon: FileText },
  { id: "wholesale", label: "Wholesale Inquiry", icon: Building2 },
  { id: "coa", label: "Request COA", icon: FileText },
]

export default function ContactPage() {
  const searchParams = useSearchParams()
  const initialType = searchParams.get("type") || "general"
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: initialType,
    product: "",
    message: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

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
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                Get in Touch
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-foreground mb-6">
              Contact <span className="text-gradient-gold">Alpha One</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have questions about our research peptides? Interested in wholesale pricing? 
              Our team is here to help with all your inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 border-t border-border/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Inquiry Types */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-serif font-semibold text-foreground mb-6">
                How Can We Help?
              </h2>
              
              <div className="space-y-3">
                {inquiryTypes.map((type) => {
                  const Icon = type.icon
                  return (
                    <button
                      key={type.id}
                      onClick={() => setFormData(prev => ({ ...prev, inquiryType: type.id }))}
                      className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-200 text-left ${
                        formData.inquiryType === type.id
                          ? "glass-card border-primary/40 bg-primary/5"
                          : "glass hover:border-primary/20"
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        formData.inquiryType === type.id
                          ? "bg-primary/20"
                          : "bg-muted"
                      }`}>
                        <Icon className={`h-5 w-5 ${
                          formData.inquiryType === type.id
                            ? "text-primary"
                            : "text-muted-foreground"
                        }`} />
                      </div>
                      <span className={`font-medium ${
                        formData.inquiryType === type.id
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}>
                        {type.label}
                      </span>
                    </button>
                  )
                })}
              </div>

              {/* Contact Info */}
              <div className="mt-10 glass-card rounded-xl p-6">
                <h3 className="text-sm font-semibold text-foreground mb-4 tracking-wider uppercase">
                  Direct Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">research@alphaonenutrition.com</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                  We typically respond within 24-48 business hours.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {isSubmitted ? (
                <div className="glass-card rounded-2xl p-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-10 w-10 text-primary" />
                  </div>
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                    Message Received
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                    Thank you for your inquiry. A member of our team will review your 
                    message and respond within 24-48 business hours.
                  </p>
                  <Button
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        inquiryType: "general",
                        product: "",
                        message: ""
                      })
                    }}
                    variant="outline"
                    className="border-primary/30 text-foreground hover:bg-primary/10"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 lg:p-10">
                  <h2 className="text-xl font-serif font-semibold text-foreground mb-6">
                    Send a Message
                  </h2>

                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full h-12 px-4 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full h-12 px-4 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company / Institution
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full h-12 px-4 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        placeholder="Your organization"
                      />
                    </div>
                    <div>
                      <label htmlFor="product" className="block text-sm font-medium text-foreground mb-2">
                        Product of Interest
                      </label>
                      <input
                        type="text"
                        id="product"
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full h-12 px-4 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        placeholder="e.g., BPC-157, TB-500"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none"
                      placeholder="Tell us about your research needs or questions..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-xs text-muted-foreground">
                      By submitting, you agree to our Privacy Policy.
                    </p>
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="bg-primary text-primary-foreground hover:bg-primary/90 min-w-[160px]"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Send Message
                          <Send className="h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 border-t border-border/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">
            Join Our Research Network
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Stay updated on new product releases, research insights, and exclusive offers. 
            No spam, just valuable updates for the research community.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 px-4 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            />
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">
            Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
