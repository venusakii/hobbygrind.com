"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const products = [
{
name: "Dremel 8220",
slug: "dremel-8220",
description: "Cordless brushless rotary tool with accessory kit for precision tasks",
features: ["Cordless Freedom", "Brushless Motor", "Versatile Accessories"],
rating: 4.5,
image: "https://m.media-amazon.com/images/I/81-gdRp9N2L.AC_SX679.jpg",
},
{
name: "PHALANX Rotary Tool",
slug: "phalanx-rotary-tool",
description: "Variable speed multi-tool from 8000-32000 RPM for DIY creations",
features: ["Variable Speed", "Multi-Tool Accessories", "For Crafting and Repairs"],
rating: 4,
image: "https://m.media-amazon.com/images/I/71j7l2CMjvL.AC_SX679.jpg",
},
{
name: "Bosch Professional Rotary",
slug: "bosch-professional-rotary",
description: "10.8V professional rotary tool for high-precision work",
features: ["Professional Grade", "Cordless Design", "High RPM"],
rating: 4.5,
image: "https://m.media-amazon.com/images/I/71i9PNn0EBL.SX522.jpg",
},
{
name: "Proxxon Model Building Kit",
slug: "proxxon-model-building",
description: "Precision tool kit for model building and engraving",
features: ["Ultra Precise", "Quiet Operation", "For Intricate Details"],
rating: 4.5,
image: "https://m.media-amazon.com/images/I/71DelyfwFTS.AC_SX679.jpg",
},
{
name: "Makita RT0701C",
slug: "makita-rt0701c",
description: "1-1/4 HP compact router for woodworking and edging",
features: ["Compact Design", "Variable Speed", "Soft Start Feature"],
rating: 4.7,
image: "https://m.media-amazon.com/images/I/511ag05cuDL.AC_SX679.jpg",
},
{
name: "WEN 2305",
slug: "wen-2305",
description: "Rotary tool with flexible shaft and accessories for versatile use",
features: ["Flexible Shaft", "Variable Speed", "100+ Accessories"],
rating: 4.3,
image: "https://m.media-amazon.com/images/I/91BEKi9aGqL.AC_SX679.jpg",
},
{
name: "RYOBI 12V Rotary Tool",
slug: "ryobi-12v-rotary",
description: "Cordless rotary tool for crafting, engraving, and DIY projects",
features: ["Cordless Convenience", "Compact Size", "USB Rechargeable"],
rating: 4.4,
image: "https://m.media-amazon.com/images/I/51IADdD61cL.AC_SX679.jpg",
},
{
name: "WORKPRO Cordless Tool",
slug: "workpro-cordless-tool",
description: "Rechargeable rotary tool for engraving, polishing, and sanding",
features: ["Rechargeable Battery", "Multiple Speeds", "Accessory Set Included"],
rating: 4.2,
image: "https://m.media-amazon.com/images/I/81L2Pw-a0AL.AC_SX679.jpg",
},
{
name: "Foredom K.2230",
slug: "foredom-k2230",
description: "Classic jewelers kit with H.30 handpiece for professional jewelry work",
features: ["High Torque Motor", "Flexible Shaft", "Accessory Kit"],
rating: 4.4,
image: "https://m.media-amazon.com/images/I/81NlDzaNI7L.AC_SX679.jpg",
},
]

export function ProductHighlights() {
  return (
    <section className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-center mb-16">
          Featured <span className="text-secondary">Tools</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={product.slug}
              className="relative bg-card/50 backdrop-blur-sm border-border glow-border overflow-hidden group hover:bg-card/80 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold mb-3 text-primary">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{product.description}</p>

                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <span className="text-accent">⚙️</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={i < product.rating ? "text-accent" : "text-muted"}>
                        ⭐
                      </span>
                    ))}
                  </div>
                  <Link href={`/products/${product.slug}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                    >
                      View Review →
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
