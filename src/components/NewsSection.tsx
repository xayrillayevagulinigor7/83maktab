import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { NEWS } from "@/src/types"
import { motion } from "motion/react"
import { Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NewsSection() {
  return (
    <section id="news" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">So'nggi yangiliklar</h2>
            <p className="text-muted-foreground">Maktabimiz hayotidagi eng muhim voqealar</p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            Barcha yangiliklar <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {NEWS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col md:flex-row border-none shadow-md hover:shadow-lg transition-shadow">
                <div className="md:w-1/2 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="md:w-1/2 flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <Calendar className="h-3 w-3" /> {item.date}
                    </div>
                    <CardTitle className="text-xl leading-tight line-clamp-2">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-sm line-clamp-3 mb-4">
                      {item.summary}
                    </CardDescription>
                    <Button variant="link" className="p-0 h-auto text-primary">
                      Batafsil o'qish <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
