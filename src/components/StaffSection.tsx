import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TEACHERS } from "@/src/types"
import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"

export default function StaffSection() {
  return (
    <section id="staff" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Bizning pedagogik jamoamiz</h2>
          <p className="text-muted-foreground">
            Tajribali va fidoyi o'qituvchilarimiz o'quvchilarga nafaqat bilim, balki to'g'ri tarbiya berishda ham namuna bo'lishadi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEACHERS.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-none shadow-sm text-center">
                <CardHeader className="p-0">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-2">
                    {teacher.subject}
                  </Badge>
                  <CardTitle className="text-xl mb-2">{teacher.name}</CardTitle>
                  <p className="text-sm text-muted-foreground italic mb-0">
                    "{teacher.bio}"
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
