import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ReviewsSection } from "@/components/reviews-section"

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <ReviewsSection />
      </div>
    </div>
  )
}
