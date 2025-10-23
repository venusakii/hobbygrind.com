"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            ← Back to Home
          </Button>
        </Link>

        <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold mb-4 text-foreground">Contact Us</h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Have questions about rotary tools or want to suggest a product review? We'd love to hear from you!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us more..."
                  rows={6}
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">Get in Touch</h2>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're a maker looking for tool recommendations or a brand interested in collaboration, we're
                here to help.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Response Time</h3>
              <p className="text-muted-foreground text-sm">We typically respond within 24-48 hours.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Topics We Cover</h3>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>• Product reviews and recommendations</li>
                <li>• Tool comparisons and buying guides</li>
                <li>• Technical support questions</li>
                <li>• Partnership opportunities</li>
                <li>• Content suggestions</li>
              </ul>
            </div>

            <div className="pt-6 border-t border-border">
              <h3 className="font-semibold mb-2">Follow Us</h3>
              <p className="text-muted-foreground text-sm">Stay updated with the latest tool reviews and maker tips.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
