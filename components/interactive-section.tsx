"use client"

import { useEffect, useRef } from "react"

export function InteractiveSection() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!svgRef.current) return

      const rect = svgRef.current.getBoundingClientRect()
      const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight))

      const paths = svgRef.current.querySelectorAll("path")
      paths.forEach((path) => {
        const length = path.getTotalLength()
        path.style.strokeDasharray = `${length}`
        path.style.strokeDashoffset = `${length * (1 - scrollProgress)}`
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-center mb-16">
          How Tools <span className="text-primary">Work</span>
        </h2>

        <div className="flex justify-center">
          <svg ref={svgRef} viewBox="0 0 600 300" className="w-full max-w-4xl h-auto">
            {/* Motor */}
            <circle cx="100" cy="150" r="40" fill="none" stroke="#00c2ff" strokeWidth="2" />
            <text x="100" y="155" textAnchor="middle" fill="#00c2ff" fontSize="12">
              Motor
            </text>

            {/* Connection line */}
            <path d="M 140 150 L 250 150" fill="none" stroke="#ff007a" strokeWidth="2" />

            {/* Rotating axis */}
            <circle cx="300" cy="150" r="30" fill="none" stroke="#ff007a" strokeWidth="2" />
            <line x1="300" y1="120" x2="300" y2="180" stroke="#ff007a" strokeWidth="2" />
            <text x="300" y="210" textAnchor="middle" fill="#ff007a" fontSize="12">
              Axis
            </text>

            {/* Connection to bit */}
            <path d="M 330 150 L 420 150" fill="none" stroke="#d3ff6a" strokeWidth="2" />

            {/* Engraving head */}
            <path d="M 420 150 L 480 130 L 480 170 Z" fill="none" stroke="#d3ff6a" strokeWidth="2" />
            <text x="480" y="200" textAnchor="middle" fill="#d3ff6a" fontSize="12">
              Bit
            </text>

            {/* Rotation indicators */}
            <circle
              cx="300"
              cy="150"
              r="25"
              fill="none"
              stroke="#ff007a"
              strokeWidth="1"
              opacity="0.3"
              strokeDasharray="5,5"
            />
          </svg>
        </div>

        <p className="text-center text-muted-foreground mt-8 text-lg">Scroll to see the animation unfold</p>
      </div>
    </section>
  )
}
