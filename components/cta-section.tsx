import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0">
        <svg viewBox="0 0 1000 400" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M 0 200 Q 250 100, 500 200 T 1000 200"
            fill="none"
            stroke="url(#ctaGradient)"
            strokeWidth="2"
            className="animate-glow-pulse"
          />
          <defs>
            <linearGradient id="ctaGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00c2ff" />
              <stop offset="50%" stopColor="#ff007a" />
              <stop offset="100%" stopColor="#d3ff6a" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-bold mb-8 text-balance">
          Every Line Tells a <span className="text-primary">Story</span>
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-pretty">
          Start your precision journey today. Find the perfect tool for your craft.
        </p>

        <Button
          asChild
          size="lg"
          className="bg-gradient-to-r from-primary via-secondary to-accent text-background hover:opacity-90 text-lg px-12 py-6 h-auto font-semibold"
        >
          <Link href="/get-started">Get Started →</Link>
        </Button>

        <div className="mt-16">
          <svg viewBox="0 0 200 100" className="w-48 h-24 mx-auto opacity-50">
            <text
              x="100"
              y="50"
              textAnchor="middle"
              fill="url(#logoGradient)"
              fontSize="24"
              fontFamily="var(--font-display)"
              className="animate-glow-pulse"
            >
              HobbyGrind
            </text>
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00c2ff" />
                <stop offset="100%" stopColor="#d3ff6a" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  )
}
