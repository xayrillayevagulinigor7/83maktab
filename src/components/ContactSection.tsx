import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FULL_SCHOOL_NAME } from "@/src/types"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Biz bilan bog'lanish</h2>
            <p className="text-muted-foreground mb-8">
              Sizda savollar bormi yoki takliflaringiz? Quyidagi ma'lumotlar orqali biz bilan bog'lanishingiz yoki maktabimizga tashrif buyurishingiz mumkin.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold">Manzil</h4>
                  <p className="text-muted-foreground underline decoration-primary/30">
                    Qashqadaryo viloyati, Koson tumani, 83-maktab
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold">Telefon</h4>
                  <p className="text-muted-foreground">+998 (90) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold">Elektron pochta</h4>
                  <p className="text-muted-foreground">info@83maktab.uz</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold">Ish vaqti</h4>
                  <p className="text-muted-foreground">Dushanba - Shanba: 08:30 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="p-1 border-none shadow-xl overflow-hidden">
            <CardContent className="p-0 h-full min-h-[400px]">
              {/* This would be an iframe for Google Maps in a real app */}
              <div className="w-full h-full bg-muted flex items-center justify-center p-8 text-center">
                <div>
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4 opacity-50" />
                  <p className="font-medium text-lg mb-2">Google Xarita faqat real domenda ko'rinadi</p>
                  <p className="text-sm text-muted-foreground">
                    Xaritadan {FULL_SCHOOL_NAME}ni deb qidirsangiz chiqadi.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
