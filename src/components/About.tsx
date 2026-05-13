import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Trophy, Computer } from "lucide-react"
import { motion } from "motion/react"

export default function About() {
  const stats = [
    { icon: Users, label: "O'quvchilar", value: "850+", color: "bg-blue-100 text-blue-600" },
    { icon: BookOpen, label: "O'qituvchilar", value: "65+", color: "bg-green-100 text-green-600" },
    { icon: Computer, label: "Kompyuterlar", value: "3 ta xona", color: "bg-purple-100 text-purple-600" },
    { icon: Trophy, label: "G'alabalar", value: "120+", color: "bg-yellow-100 text-yellow-600" },
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Subtle background image */}
      <div className="absolute inset-0 opacity-[0.03] -z-10">
        <img 
          src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1920&q=80" 
          alt="Library background" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Maktabimiz haqida</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Qashqadaryo viloyati Koson tumani 83-umumiy o'rta ta'lim maktabi uzoq yillik boy tarixga ega. Bizning asosiy maqsadimiz — har bir o'quvchining individual qobiliyatlarini ochish va ularga sifatli ta'lim berishdir.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Maktabimiz zamonaviy o'quv qurollari, keng va yorug' sinfxonalari, hamda yuqori malakali pedagogik jamoasi bilan faxrlanadi. Bizda fan to'garaklari bilan birga sport va san'at yo'nalishlarida ham munosib sharoitlar yaratilgan.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <Card key={i} className="border-none shadow-sm">
                  <CardContent className="p-4 flex flex-col items-center">
                    <div className={`p-3 rounded-full mb-3 ${stat.color}`}>
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <span className="text-2xl font-bold">{stat.value}</span>
                    <span className="text-sm text-muted-foreground text-center">{stat.label}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl skew-y-3">
              <img
                src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80"
                alt="Students studying"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute top-10 right-10 -z-0 bg-primary/20 w-full h-full rounded-2xl -rotate-3" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
