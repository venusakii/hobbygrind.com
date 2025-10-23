"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-card/95 backdrop-blur-lg border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          🍪 This website uses cookies to improve your experience and analyze usage. By continuing, you consent to our
          use of cookies.
        </p>
        <Button
          onClick={handleAccept}
          className="bg-primary text-primary-foreground hover:bg-primary/90 whitespace-nowrap"
        >
          Accept & Continue ⚙️
        </Button>
      </div>
    </div>
  )
}
