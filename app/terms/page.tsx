import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            ← Back to Home
          </Button>
        </Link>

        <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold mb-8 text-foreground">
          Terms of Service
        </h1>

        <div className="prose prose-neutral max-w-none space-y-6 text-foreground">
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold mb-4">Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using HobbyGrind, you accept and agree to be bound by the terms and provision of this
              agreement. If you do not agree to these terms, please do not use our website.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold mb-4">Use of Content</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on HobbyGrind, including reviews, guides, images, and text, is provided for informational
              purposes only. We strive to provide accurate and up-to-date information, but we make no warranties about
              the completeness, reliability, or accuracy of this information.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold mb-4">Affiliate Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              HobbyGrind contains affiliate links to products on Amazon and other retailers. When you click on these
              links and make a purchase, we may earn a commission at no additional cost to you. This helps support our
              website and allows us to continue providing quality content.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold mb-4">User Conduct</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree not to use HobbyGrind for any unlawful purpose or in any way that could damage, disable,
              overburden, or impair our website. You may not attempt to gain unauthorized access to any portion of the
              website.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold mb-4">
              Limitation of Liability
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              HobbyGrind shall not be liable for any indirect, incidental, special, consequential, or punitive damages
              resulting from your use of or inability to use the website or any products purchased through our affiliate
              links.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these terms at any time. We will notify users of any material changes by
              posting the new terms on this page.
            </p>
          </section>

          <p className="text-sm text-muted-foreground mt-8">Last updated: January 2025</p>
        </div>
      </div>
    </div>
  )
}
