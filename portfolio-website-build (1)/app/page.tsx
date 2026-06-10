'use client'

import Hero from '@/components/hero'
import About from '@/components/about'
import Projects from '@/components/projects'
import TechStack from '@/components/tech-stack'
import Experience from '@/components/experience'
import Philosophy from '@/components/philosophy'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Experience />
      <Philosophy />
      <Contact />
      <Footer />
    </main>
  )
}
