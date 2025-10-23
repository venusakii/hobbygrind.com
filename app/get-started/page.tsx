import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function GetStartedPage() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Craft",
      description:
        "Explore our curated selection of rotary tools perfect for jewelry, woodworking, metalwork, and more.",
    },
    {
      number: "02",
      title: "Read Expert Reviews",
      description: "Get detailed insights from experienced makers who have tested each tool extensively.",
    },
    {
      number: "03",
      title: "Find Your Perfect Tool",
      description: "Compare features, prices, and specifications to find the ideal rotary tool for your projects.",
    },
    {
      number: "04",
      title: "Start Creating",
      description: "Purchase through our trusted partners and begin your precision crafting journey.",
    },
  ]

  const toolCategories = [
    { name: "Cordless Rotary Tools", count: "12 models", link: "/products" },
    { name: "Corded Power Tools", count: "8 models", link: "/products" },
    { name: "Engraving Kits", count: "15 sets", link: "/products" },
    { name: "Accessories & Bits", count: "50+ items", link: "/products" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 px-4 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-bold mb-6 text-balance">
            Start Your <span className="text-primary">Precision Journey</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty">
            Follow these simple steps to find the perfect rotary tool for your craft
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step) => (
              <Card
                key={step.number}
                className="p-8 bg-card border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-6xl font-[family-name:var(--font-display)] text-primary/20 mb-4">
                  {step.number}
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-center mb-12">
            Explore Tool Categories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {toolCategories.map((category) => (
              <Link key={category.name} href={category.link}>
                <Card className="p-6 text-center bg-card border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-lg cursor-pointer group">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{category.count}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mb-6">
            Ready to Begin?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">Browse our complete collection of reviewed rotary tools</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary via-secondary to-accent text-background hover:opacity-90"
            >
              <Link href="/products">View All Products</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/reviews">Read Reviews</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
