"use client"

import { Button } from "@/components/ui/button"
import { DrillSilhouette } from "@/components/drill-silhouette"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="mb-12">
          <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance">
            <span className="text-primary animate-glow-pulse">Craft.</span>{" "}
            <span className="text-secondary animate-glow-pulse" style={{ animationDelay: "0.3s" }}>
              Shape.
            </span>{" "}
            <span className="text-accent animate-glow-pulse" style={{ animationDelay: "0.6s" }}>
              Define.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            The finest rotary tools for every maker. Precision engineering meets creative freedom.
          </p>
        </div>

        <DrillSilhouette />

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border text-lg px-8">
            Explore Tools →
          </Button>
        </div>

        <div className="mt-16 text-sm text-muted-foreground">
          <p className="font-[family-name:var(--font-display)] tracking-wider">PRECISION IN MOTION</p>
        </div>
      </div>
    </section>
  )
}
