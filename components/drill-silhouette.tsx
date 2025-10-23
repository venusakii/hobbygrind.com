"use client"

export function DrillSilhouette() {
  return (
    <div className="relative w-full max-w-2xl mx-auto h-64 flex items-center justify-center">
      <svg viewBox="0 0 400 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Drill body outline */}
        <path
          d="M 50 100 L 150 100 L 150 80 L 200 80 L 200 70 L 250 70 L 280 100 L 250 130 L 200 130 L 200 120 L 150 120 L 150 100"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="2"
          strokeDasharray="1000"
          className="animate-line-draw"
        />

        {/* Drill bit */}
        <path
          d="M 280 100 L 350 100"
          fill="none"
          stroke="url(#gradient2)"
          strokeWidth="3"
          strokeDasharray="1000"
          className="animate-line-draw"
          style={{ animationDelay: "0.5s" }}
        />

        {/* Handle details */}
        <circle
          cx="100"
          cy="100"
          r="15"
          fill="none"
          stroke="url(#gradient3)"
          strokeWidth="2"
          strokeDasharray="100"
          className="animate-line-draw"
          style={{ animationDelay: "1s" }}
        />

        {/* Power indicator */}
        <circle
          cx="180"
          cy="100"
          r="5"
          fill="#d3ff6a"
          className="animate-glow-pulse"
          style={{ animationDelay: "1.5s" }}
        />

        {/* Gradients */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00c2ff" />
            <stop offset="100%" stopColor="#ff007a" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff007a" />
            <stop offset="100%" stopColor="#d3ff6a" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d3ff6a" />
            <stop offset="100%" stopColor="#00c2ff" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
