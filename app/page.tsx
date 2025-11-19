'use client'

import { useState } from 'react'
import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import About from '@/components/about'
import Education from '@/components/education'
import Experience from '@/components/experience'
import Publications from '@/components/publications'
import Presentations from '@/components/presentations'
import Skills from '@/components/skills'
import Contact from '@/components/contact'

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/95">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        
        <div id="about" className="py-20">
          <About />
        </div>

        <div id="education" className="py-20">
          <Education />
        </div>

        <div id="experience" className="py-20">
          <Experience />
        </div>

        <div id="publications" className="py-20">
          <Publications />
        </div>

        <div id="presentations" className="py-20">
          <Presentations />
        </div>

        <div id="skills" className="py-20">
          <Skills />
        </div>

        <div id="contact" className="py-20">
          <Contact />
        </div>
      </main>
    </div>
  )
}
