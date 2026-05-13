import { motion } from "motion/react"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function Gallery() {
  const images = [
    { src: "https://images.unsplash.com/photo-1577891729319-f4871c6dc208?auto=format&fit=crop&w=800&q=80", title: "Kimyo darsi" },
    { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80", title: "Kutubxonada" },
    { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80", title: "Ma'ruza zali" },
    { src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=800&q=80", title: "Sport musobaqasi" },
    { src: "https://images.unsplash.com/photo-1627556704302-624286467c65?auto=format&fit=crop&w=800&q=80", title: "Informatika xonasi" },
    { src: "https://images.unsplash.com/photo-1544531585-9847b68c8c86?auto=format&fit=crop&w=800&q=80", title: "Tanaffus payti" },
  ]

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Maktab hayotidan lavhalar</h2>
          <p className="text-muted-foreground">O'quvchilarimizning kundalik hayoti va tadbirlardan fotoreportajlar</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="relative group overflow-hidden rounded-xl"
            >
              <AspectRatio ratio={4 / 3}>
                <img
                  src={img.src}
                  alt={img.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">{img.title}</span>
                </div>
              </AspectRatio>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
