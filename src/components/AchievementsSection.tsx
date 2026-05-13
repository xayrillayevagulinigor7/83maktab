import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ACHIEVEMENTS } from "@/src/types"
import { motion } from "motion/react"
import { Trophy, Award, Star } from "lucide-react"

export default function AchievementsSection() {
  const icons = [Trophy, Award, Star]

  return (
    <section id="achievements" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">O'quvchilarimiz yutuqlari</h2>
          <p className="text-muted-foreground">
            Maktabimiz faxrlari — bizning o'quvchilar. Ularning ilm-fan, sport va san'at yo'nalishlaridagi yutuqlari maktabimiz nufuzini belgilaydi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ACHIEVEMENTS.map((item, index) => {
            const Icon = icons[index % icons.length]
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow bg-background">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                      <Icon className="h-8 w-8" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">{item.year} - yil</span>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
