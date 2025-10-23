import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative py-16 px-4 border-t border-border">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-8">
          <div className="font-[family-name:var(--font-display)] text-2xl font-bold mb-4">
            <span className="text-primary">Hobby</span>
            <span className="text-accent">Grind</span>
          </div>
          <p className="text-sm text-muted-foreground text-center max-w-2xl mb-6">
            Your trusted source for rotary tool reviews and guides. We help makers find the perfect precision tools for
            their craft.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <span className="text-muted-foreground">|</span>
          <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
            Terms
          </Link>
          <span className="text-muted-foreground">|</span>
          <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
            Contact
          </Link>
          <span className="text-muted-foreground">|</span>
          <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
            About
          </Link>
        </div>

        <div className="text-center text-sm text-muted-foreground space-y-2">
          <p>© 2025 HobbyGrind.com — All Rights Reserved.</p>
          <p className="flex items-center justify-center gap-2">
            <span>Amazon Affiliate Partner 🛒</span>
          </p>
          <p className="text-xs">As an Amazon Associate, we earn from qualifying purchases.</p>
        </div>
      </div>
    </footer>
  )
}
