import { Button } from "@/components/ui/button"
import { FULL_SCHOOL_NAME } from "@/src/types"
import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80"
          alt="Students life"
          className="h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            {FULL_SCHOOL_NAME}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            Bizning maktabimizda kelajak bunyodkorlari zamonaviy ta'lim standartlari asosida bilim olishmoqda. Bilim ol - dunyoni o'zgartir!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg px-8">
              Batafsil ma'lumot <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 text-white border-white hover:bg-white/10">
              Biz bilan bog'lanish
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
