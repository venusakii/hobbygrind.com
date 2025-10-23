"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const lines: Array<{
      x1: number
      y1: number
      x2: number
      y2: number
      speed: number
      angle: number
    }> = []

    // Create diagonal lines
    for (let i = 0; i < 20; i++) {
      lines.push({
        x1: Math.random() * canvas.width,
        y1: Math.random() * canvas.height,
        x2: Math.random() * canvas.width,
        y2: Math.random() * canvas.height,
        speed: 0.2 + Math.random() * 0.5,
        angle: Math.random() * Math.PI * 2,
      })
    }

    let animationId: number

    function animate() {
      if (!ctx || !canvas) return

      ctx.fillStyle = "rgba(10, 10, 12, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      lines.forEach((line) => {
        // Update line position
        line.x1 += Math.cos(line.angle) * line.speed
        line.y1 += Math.sin(line.angle) * line.speed
        line.x2 += Math.cos(line.angle) * line.speed
        line.y2 += Math.sin(line.angle) * line.speed

        // Wrap around screen
        if (line.x1 > canvas.width) line.x1 = 0
        if (line.x1 < 0) line.x1 = canvas.width
        if (line.y1 > canvas.height) line.y1 = 0
        if (line.y1 < 0) line.y1 = canvas.height

        if (line.x2 > canvas.width) line.x2 = 0
        if (line.x2 < 0) line.x2 = canvas.width
        if (line.y2 > canvas.height) line.y2 = 0
        if (line.y2 < 0) line.y2 = canvas.height

        // Draw line with glow
        ctx.strokeStyle = "#00c2ff"
        ctx.lineWidth = 1
        ctx.shadowBlur = 10
        ctx.shadowColor = "#00c2ff"
        ctx.beginPath()
        ctx.moveTo(line.x1, line.y1)
        ctx.lineTo(line.x2, line.y2)
        ctx.stroke()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-30" style={{ zIndex: 0 }} />
}
