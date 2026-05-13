import { SCHOOL_NAME } from "@/src/types"
import { GraduationCap, Facebook, Instagram, Send, Youtube } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 text-white mb-6">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold tracking-tight">{SCHOOL_NAME}</span>
            </div>
            <p className="max-w-md mb-6 leading-relaxed">
              Bizning maktabimiz o'quvchilarga chuqur bilim va hayotga munosib tarbiya berish yo'lida tinmay mehnat qiladi. Kelajak avlodni birgalikda tarbiyalaymiz.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Send className="h-5 w-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Foydali havolalar</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#about" className="hover:text-primary transition-colors">Biz haqimizda</a></li>
              <li><a href="#news" className="hover:text-primary transition-colors">Yangiliklar</a></li>
              <li><a href="#staff" className="hover:text-primary transition-colors">Pedagoglar</a></li>
              <li><a href="https://kundalik.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Kundalik.com</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Xizmatlar</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Elektron kutubxona</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sinov testlari</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">To'garaklar</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Ota-onalar uchun</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div>
            <p>© {currentYear} {SCHOOL_NAME}. Barcha huquqlar himoyalangan.</p>
            <p className="mt-1 text-slate-500">Sayt yaratuvchisi: <span className="text-primary/80 font-medium">Xayrillayeva Gulinigor</span></p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Maxfiylik siyosati</a>
            <a href="#" className="hover:text-white transition-colors">Foydalanish shartlari</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
