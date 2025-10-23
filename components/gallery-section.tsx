import Image from "next/image"

const galleryItems = [
  {
    title: "Precision Engraving",
    image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=600&h=600&fit=crop&q=80",
  },
  {
    title: "Rotary Tool Crafting",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&h=600&fit=crop&q=80",
  },
  {
    title: "Detail Work",
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=600&h=600&fit=crop&q=80",
  },
  {
    title: "Hobby Projects",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&h=600&fit=crop&q=80",
  },
]

export function GallerySection() {
  return (
    <section className="relative py-32 px-4 bg-muted/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-center mb-16">
          Makers in <span className="text-secondary">Motion</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div key={item.title} className="relative group overflow-hidden rounded-lg glow-border aspect-square">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={400}
                height={400}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />

              {/* Animated border overlay */}
              <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-primary">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
