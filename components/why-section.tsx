import { Card } from "@/components/ui/card"

const features = [
  {
    icon: "⚙️",
    title: "Power Precision",
    description: "Variable speed control for perfect results every time",
  },
  {
    icon: "🪶",
    title: "Lightweight Design",
    description: "Ergonomic tools that reduce fatigue during extended use",
  },
  {
    icon: "🔋",
    title: "Cordless Freedom",
    description: "Work anywhere without being tethered to an outlet",
  },
  {
    icon: "🧰",
    title: "Multi-Purpose Use",
    description: "From engraving to cutting, one tool does it all",
  },
]

export function WhySection() {
  return (
    <section className="relative py-32 px-4 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-center mb-16">
          Why <span className="text-accent">HobbyGrind</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="relative bg-card/30 backdrop-blur-sm border-border p-6 group hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-4xl mb-4 animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
                {feature.icon}
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>

              {/* Spark effect on hover */}
              <div className="absolute top-0 right-0 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-glow-pulse" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
