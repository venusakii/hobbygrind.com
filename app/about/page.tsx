import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            ← Back to Home
          </Button>
        </Link>

        <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold mb-8 text-foreground">
          About HobbyGrind
        </h1>

        <div className="prose prose-neutral max-w-none space-y-8 text-foreground">
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              HobbyGrind was founded with a simple mission: to help makers, crafters, and DIY enthusiasts find the
              perfect rotary tools for their projects. We believe that having the right tool can transform a hobby from
              frustrating to fulfilling.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold mb-4">What We Do</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We provide comprehensive, unbiased reviews of rotary tools, mini-drills, and engravers. Our team tests
              each tool extensively, evaluating:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Performance and power</li>
              <li>Build quality and durability</li>
              <li>Ease of use and ergonomics</li>
              <li>Value for money</li>
              <li>Versatility and accessories</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold mb-4">Our Expertise</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our team consists of experienced makers, woodworkers, jewelry designers, and DIY enthusiasts who use these
              tools daily. We understand the needs of hobbyists because we are hobbyists ourselves.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold mb-4">Why Trust Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              We maintain editorial independence in all our reviews. While we participate in affiliate programs to
              support our work, our recommendations are based solely on our testing and experience. We never compromise
              our integrity for commissions.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold mb-4">Join Our Community</h2>
            <p className="text-muted-foreground leading-relaxed">
              HobbyGrind is more than just a review site—it's a community of makers who share tips, techniques, and
              inspiration. Whether you're engraving jewelry, carving wood, or working with metal, we're here to help you
              find the perfect tool for your craft.
            </p>
          </section>

          <div className="mt-12 p-6 bg-muted rounded-lg border border-border">
            <p className="text-center text-muted-foreground">
              Have questions or suggestions?{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Contact us
              </Link>{" "}
              — we'd love to hear from you!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
