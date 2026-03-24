'use client'

import { ArrowRight, Github, Linkedin, Mail, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-24 pb-20 bg-stone-50 dark:bg-stone-950"
    >
      <div className="container-custom w-full">
        <motion.div
          className="max-w-4xl space-y-10"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Availability indicator — text only, no pulsing */}
          <motion.p
            variants={item}
            className="text-xs font-mono text-accent-600 dark:text-accent-400 tracking-widest uppercase"
          >
            Available for opportunities
          </motion.p>

          {/* Name — serif, large */}
          <motion.div variants={item} className="space-y-4">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-medium leading-tight text-stone-900 dark:text-stone-100 tracking-tight">
              Isuru Pathirathna
            </h1>
            <p className="text-base sm:text-lg text-stone-500 dark:text-stone-400 leading-relaxed max-w-xl font-sans font-normal">
              Exploring why people do what they do — through data · <span className="text-stone-700 dark:text-stone-300 font-medium">Psychology</span> · <span className="text-stone-700 dark:text-stone-300 font-medium">Data Science &amp; Analytics</span> · <span className="text-stone-700 dark:text-stone-300 font-medium">Software Engineering</span> · <span className="text-accent-600 dark:text-accent-400 font-medium">Open to opportunities</span>
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
          >
            <a href="#contact" className="btn-primary gap-2 group">
              Get in Touch
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#projects" className="btn-secondary">
              View Projects
            </a>
          </motion.div>

          {/* Contact & Social row */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 pt-2 border-t border-stone-200 dark:border-stone-800"
          >
            {/* Contact links */}
            <div className="flex flex-col gap-2">
              <a
                href="mailto:isuru2002@gmail.com"
                className="flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
              >
                <Mail size={14} className="flex-shrink-0 text-stone-400" />
                isuru2002@gmail.com
              </a>
              <a
                href="tel:+358413671742"
                className="flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
              >
                <Phone size={14} className="flex-shrink-0 text-stone-400" />
                +358 41 367 1742
              </a>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-10 bg-stone-200 dark:bg-stone-800" />

            {/* Social links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Is116"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/isuru-abhiman-pathirathna-b3b9a4138"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex items-center gap-6 sm:ml-auto">
              <div>
                <div className="font-mono text-lg font-medium text-accent-600 dark:text-accent-400">3+</div>
                <div className="text-xs text-stone-400 dark:text-stone-500">Years</div>
              </div>
              <div className="w-px h-7 bg-stone-200 dark:bg-stone-800" />
              <div>
                <div className="font-mono text-lg font-medium text-accent-600 dark:text-accent-400">40+</div>
                <div className="text-xs text-stone-400 dark:text-stone-500">Projects</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
