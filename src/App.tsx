/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import NewsSection from "./components/NewsSection"
import AchievementsSection from "./components/AchievementsSection"
import Gallery from "./components/Gallery"
import StaffSection from "./components/StaffSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <NewsSection />
        <AchievementsSection />
        <Gallery />
        <StaffSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

