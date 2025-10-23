import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            ← Back to Home
          </Button>
        </Link>

        <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold mb-8 text-foreground">
          Privacy Policy
        </h1>

        <div className="prose prose-neutral max-w-none space-y-6 text-foreground">
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold mb-4">
              Information We Collect
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              At HobbyGrind, we collect information that you provide directly to us, such as when you subscribe to our
              newsletter, contact us, or interact with our content. This may include your name, email address, and any
              other information you choose to provide.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold mb-4">
              How We Use Your Information
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We use the information we collect to provide, maintain, and improve our services, send you updates and
              marketing communications, respond to your comments and questions, and monitor and analyze trends and
              usage.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold mb-4">
              Amazon Affiliate Disclosure
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              HobbyGrind is a participant in the Amazon Services LLC Associates Program, an affiliate advertising
              program designed to provide a means for sites to earn advertising fees by advertising and linking to
              Amazon.com. We may earn a commission from qualifying purchases made through our affiliate links.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold mb-4">Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our website and hold certain
              information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
              sent.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us through our contact page.
            </p>
          </section>

          <p className="text-sm text-muted-foreground mt-8">Last updated: January 2025</p>
        </div>
      </div>
    </div>
  )
}
