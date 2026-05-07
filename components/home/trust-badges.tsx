import { FlaskConical, Shield, Microscope, Award, Lock } from "lucide-react"

const badges = [
  {
    icon: FlaskConical,
    title: "Lab Tested",
    description: "Rigorous testing protocols"
  },
  {
    icon: Shield,
    title: "Third Party Verified",
    description: "Independent quality assurance"
  },
  {
    icon: Microscope,
    title: "Research Driven",
    description: "Science-backed compounds"
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Highest purity standards"
  },
  {
    icon: Lock,
    title: "Secure Ordering",
    description: "Protected transactions"
  }
]

export function TrustBadges() {
  return (
    <section className="py-20 border-t border-b border-border/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {badges.map((badge) => {
            const Icon = badge.icon
            return (
              <div
                key={badge.title}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-primary/40">
                  <Icon className="h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1">{badge.title}</h3>
                <p className="text-xs text-muted-foreground">{badge.description}</p>
              </div>
            )
          })}
        </div>

        {/* Trust Statement */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-muted-foreground leading-relaxed">
            Alpha One Nutrition is committed to high-quality research compounds manufactured with 
            strict standards and transparency. Every product undergoes rigorous third-party testing 
            to ensure purity, potency, and consistency.
          </p>
        </div>
      </div>
    </section>
  )
}
