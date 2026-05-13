/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Teacher {
  id: string;
  name: string;
  subject: string;
  image: string;
  bio?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  image: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  year: string;
}

export const SCHOOL_NAME = "83-umumiy o’rta ta’lim maktabi";
export const FULL_SCHOOL_NAME = "Qashqadaryo viloyati Koson tumani 83-umumiy o’rta ta’lim maktabi";

export const TEACHERS: Teacher[] = [
  {
    id: "director",
    name: "Sattorova Orzigul",
    subject: "Maktab direktori",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    bio: "O'quvchilarga ta'lim-tarbiya berishda ko'p yillik tajribaga ega fidoyi rahbar."
  },
  {
    id: "1",
    name: "Toshpo'latova Lobar",
    subject: "O'zbek tili va adabiyot fani o'qituvchisi",
    image: "https://images.unsplash.com/photo-1544717297-fa154da09f9d?auto=format&fit=crop&w=400&q=80",
    bio: "Ona tili va adabiyot fanining bilimdoni."
  },
  {
    id: "2",
    name: "Toshpo'latova Lobar",
    subject: "Matematika va informatika fani o'qituvchisi",
    image: "https://images.unsplash.com/photo-1580894732230-28dd017bc386?auto=format&fit=crop&w=400&q=80",
    bio: "Aniq fanlar va zamonaviy texnologiyalar darig'i."
  },
  {
    id: "3",
    name: "Ortiqova Movjuda",
    subject: "Boshlang'ich sinf o'qituvchisi",
    image: "https://images.unsplash.com/photo-1567113463300-102550127965?auto=format&fit=crop&w=400&q=80",
    bio: "O'quvchilarga ilk bilim sirlarini o'rgatuvchi."
  },
  {
    id: "4",
    name: "Mamadiyeva Shahnoza",
    subject: "Fizika fani o'qituvchisi",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80",
    bio: "Tabiat qonuniyatlarini tushuntirishda mahoratli o'qituvchi."
  },
  {
    id: "5",
    name: "To'qsonova Aziza",
    subject: "Rus tili fani o'qituvchisi",
    image: "https://images.unsplash.com/photo-1484863137850-59afccd31198?auto=format&fit=crop&w=400&q=80",
    bio: "Rus tili va madaniyati bo'yicha mutaxassis."
  },
  {
    id: "6",
    name: "O'rinova Dildora",
    subject: "Ingliz tili o'qituvchisi",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bb8c?auto=format&fit=crop&w=400&q=80",
    bio: "Xorijiy tillarni o'rgatish orqali dunyo eshiklarini ochuvchi."
  }
];

export const NEWS: NewsItem[] = [
  {
    id: "1",
    title: "Bilimlar kuni munosabati bilan bayram tadbiri",
    date: "2024-09-02",
    summary: "Maktabimizda 1-sentabr - Bilimlar kuni munosabati bilan tantanali tadbir bo'lib o'tdi. O'quvchilar yangi o'quv yilini ko'tarinki ruhda kutib olishdi.",
    image: "https://images.unsplash.com/photo-1523050338392-06ba54431b72?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "2",
    title: "Yangi kompyuter xonasi foydalanishga topshirildi",
    date: "2024-10-15",
    summary: "Maktabimiz o'quvchilari uchun zamonaviy IT-texnologiyalar bilan jihozlangan yangi laboratoriya ochildi. Endi darslar yanada qiziqarli o'tadi.",
    image: "https://images.unsplash.com/photo-1547043817-74ff91799276?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "3",
    title: "Viloyat miqyosidagi sport musobaqasida g'alaba",
    date: "2024-11-20",
    summary: "Maktabimizning futbol jamoasi viloyat bosqichida faxrli 1-o'rinni qo'lga kiritib, respublika bosqichiga yo'llanma oldi.",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "4",
    title: "Respublika fan olimpiadasida yuksak natija",
    date: "2024-12-05",
    summary: "11-sinf o'quvchisi matematika fanidan respublika olimpiadasida kumush medal sohibi bo'ldi.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "a1",
    title: "Viloyatning 'Eng yaxshi maktabi'",
    description: "Ta'lim sifati va jamoat ishlari bo'yicha yuqori ko'rsatkichlar uchun.",
    year: "2023"
  },
  {
    id: "a2",
    title: "Sportdagi yutuqlar",
    description: "Voleybol bo'yicha tuman chempioni.",
    year: "2024"
  },
  {
    id: "a3",
    title: "IT-sohadagi muvaffaqiyat",
    description: "O'quvchilarimiz dasturlash tanlovida g'olib bo'lishdi.",
    year: "2023"
  }
];
