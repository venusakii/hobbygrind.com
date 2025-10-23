import { Card } from "@/components/ui/card"

const tutorials = [
  {
    icon: "✏️",
    title: "Engraving Basics",
    description: "Master the fundamentals of precision engraving",
  },
  {
    icon: "🔩",
    title: "Choosing Bits",
    description: "Find the perfect accessory for every project",
  },
  {
    icon: "🪚",
    title: "Precision Cutting",
    description: "Techniques for clean, accurate cuts",
  },
  {
    icon: "🎨",
    title: "Creative Projects",
    description: "Inspiration for your next masterpiece",
  },
]

export function TutorialsSection() {
  return (
    <section className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-center mb-4">
          Learn. Build. <span className="text-accent">Polish.</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">Expert guides to elevate your craft</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tutorials.map((tutorial, index) => (
            <Card
              key={tutorial.title}
              className="relative bg-card/30 backdrop-blur-sm border-border p-6 group hover:border-accent/50 transition-all duration-300 cursor-pointer"
            >
              <div className="text-5xl mb-4 transition-transform group-hover:scale-110">{tutorial.icon}</div>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">{tutorial.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{tutorial.description}</p>

              {/* Drawing line effect on hover */}
              <div className="absolute bottom-0 left-0 h-1 bg-accent w-0 group-hover:w-full transition-all duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
