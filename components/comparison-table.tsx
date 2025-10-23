import { Button } from "@/components/ui/button"

const tools = [
  {
    model: "Dremel 8220",
    power: "12V",
    battery: "Yes",
    rpm: "30,000",
    rating: 5,
  },
  {
    model: "Dremel Lite",
    power: "8V",
    battery: "Yes",
    rpm: "25,000",
    rating: 4,
  },
  {
    model: "Tacklife RTD37AC",
    power: "Wired",
    battery: "No",
    rpm: "35,000",
    rating: 4,
  },
]

export function ComparisonTable() {
  return (
    <section className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-center mb-16">
          Compare <span className="text-accent">Models</span>
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-6 font-[family-name:var(--font-display)] text-primary">Model</th>
                <th className="text-left py-4 px-6 font-[family-name:var(--font-display)] text-primary">Power</th>
                <th className="text-left py-4 px-6 font-[family-name:var(--font-display)] text-primary">Battery</th>
                <th className="text-left py-4 px-6 font-[family-name:var(--font-display)] text-primary">RPM</th>
                <th className="text-left py-4 px-6 font-[family-name:var(--font-display)] text-primary">Rating</th>
                <th className="text-left py-4 px-6 font-[family-name:var(--font-display)] text-primary">Link</th>
              </tr>
            </thead>
            <tbody>
              {tools.map((tool, index) => (
                <tr key={tool.model} className="border-b border-border/50 hover:bg-card/30 transition-colors group">
                  <td className="py-4 px-6 font-semibold">{tool.model}</td>
                  <td className="py-4 px-6 text-muted-foreground">{tool.power}</td>
                  <td className="py-4 px-6 text-muted-foreground">{tool.battery}</td>
                  <td className="py-4 px-6 text-muted-foreground">{tool.rpm}</td>
                  <td className="py-4 px-6">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className={i < tool.rating ? "text-accent" : "text-muted"}>
                          ⭐
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-secondary text-secondary hover:bg-secondary/10 bg-transparent"
                    >
                      View →
                    </Button>
                  </td>

                  {/* Glowing border on hover */}
                  <td className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
