export function AboutSection() {
  return (
    <section className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          {/* Flowing line decoration */}
          <div className="absolute left-0 top-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold mb-8 text-balance">
              From Lines to <span className="text-primary">Creations</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
              At <span className="text-accent font-semibold">HobbyGrind</span>, we bring precision tools to creators who
              shape the world — one detail at a time.
            </p>
          </div>

          {/* Abstract hand with tool illustration */}
          <div className="mt-16 flex justify-center">
            <svg viewBox="0 0 300 200" className="w-full max-w-md h-auto">
              <path
                d="M 50 150 Q 80 120, 100 100 L 120 80 L 140 90 L 160 70 L 180 85 L 200 60 L 220 80 Q 240 100, 250 130"
                fill="none"
                stroke="#00c2ff"
                strokeWidth="2"
                className="animate-glow-pulse"
              />
              <line
                x1="200"
                y1="60"
                x2="280"
                y2="40"
                stroke="#ff007a"
                strokeWidth="3"
                className="animate-glow-pulse"
                style={{ animationDelay: "0.5s" }}
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
