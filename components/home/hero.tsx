"use client"

import Link from "next/link"
import { ArrowRight, FlaskConical } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden molecular-bg">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Molecular dots */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/20 animate-pulse-gold"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
        
        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(212, 175, 55)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgb(212, 175, 55)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="rgb(212, 175, 55)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="url(#lineGradient)" strokeWidth="1" />
          <line x1="70%" y1="30%" x2="90%" y2="50%" stroke="url(#lineGradient)" strokeWidth="1" />
          <line x1="20%" y1="60%" x2="40%" y2="80%" stroke="url(#lineGradient)" strokeWidth="1" />
          <line x1="60%" y1="70%" x2="80%" y2="90%" stroke="url(#lineGradient)" strokeWidth="1" />
        </svg>

        {/* Glow orbs */}
        <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
              <FlaskConical className="h-4 w-4 text-primary" />
              <span className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                Laboratory Tested
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold tracking-tight text-foreground mb-6 text-balance">
              Advanced Research Peptides for{" "}
              <span className="text-gradient-gold">Performance & Recovery</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              Premium quality compounds backed by science-driven sourcing and rigorous laboratory testing standards.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                <Link href="/products">
                  Browse Products
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/30 text-foreground hover:bg-primary/10">
                <Link href="/research">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative hidden lg:block">
            <div className="relative h-[500px] w-full">
              {/* Main vial */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative animate-float">
                  {/* Vial body */}
                  <div className="w-20 h-48 rounded-b-full bg-gradient-to-b from-zinc-800 to-zinc-900 border border-primary/30 relative overflow-hidden">
                    {/* Liquid */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/40 to-primary/10 rounded-b-full" />
                    {/* Reflection */}
                    <div className="absolute top-4 left-2 w-3 h-20 bg-white/5 rounded-full blur-sm" />
                  </div>
                  {/* Cap */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-6 bg-gradient-to-b from-primary to-primary/70 rounded-t-lg" />
                  {/* Glow */}
                  <div className="absolute inset-0 animate-glow rounded-full" />
                </div>
              </div>

              {/* Secondary vials */}
              <div className="absolute top-16 left-8 opacity-60 scale-75 animate-float" style={{ animationDelay: '1s' }}>
                <div className="w-14 h-32 rounded-b-full bg-gradient-to-b from-zinc-800 to-zinc-900 border border-primary/20 relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-primary/30 to-transparent rounded-b-full" />
                </div>
              </div>

              <div className="absolute bottom-24 right-12 opacity-60 scale-75 animate-float" style={{ animationDelay: '2s' }}>
                <div className="w-14 h-32 rounded-b-full bg-gradient-to-b from-zinc-800 to-zinc-900 border border-primary/20 relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary/30 to-transparent rounded-b-full" />
                </div>
              </div>

              {/* Molecular structure decorations */}
              <div className="absolute top-8 right-8">
                <div className="w-3 h-3 rounded-full bg-primary/40 animate-pulse-gold" />
              </div>
              <div className="absolute bottom-16 left-16">
                <div className="w-2 h-2 rounded-full bg-primary/30 animate-pulse-gold" style={{ animationDelay: '1.5s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
