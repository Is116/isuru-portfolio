import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Articles from '@/components/Articles'
import Experience from '@/components/Experience'
import BusinessCard from '@/components/BusinessCard'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Articles />
      <BusinessCard />
      <Contact />
    </>
  )
}
