'use client'

import {
  ArrowRight, Github, Linkedin, Mail, Phone,
  Brain, BarChart3, Code2, Database, Cpu,
  Users, Sparkles, LineChart, Terminal, FlaskConical,
} from 'lucide-react'
import { motion } from 'framer-motion'

const floatingIcons = [
  // top row
  { Icon: Brain,       style: { top: '6%',  left: '5%'  }, y: [0,-20, 8,-14,0], x: [0, 10,-8, 12,0], duration: 9,  delay: 0,   size: 26, color: 'text-accent-400 dark:text-accent-300' },
  { Icon: BarChart3,   style: { top: '4%',  left: '28%' }, y: [0,-12,16, -8,0], x: [0,  8,-12, 6,0], duration: 10, delay: 0.6, size: 20, color: 'text-teal-400 dark:text-teal-300'   },
  { Icon: Sparkles,    style: { top: '7%',  left: '50%' }, y: [0,-18,10,-12,0], x: [0,-10, 14,-8,0], duration: 8,  delay: 1.2, size: 22, color: 'text-accent-300 dark:text-accent-400' },
  { Icon: Cpu,         style: { top: '5%',  left: '72%' }, y: [0, 10,-12, 6,0], x: [0, -8,  6,-12,0], duration: 9,  delay: 1.8, size: 20, color: 'text-teal-300 dark:text-teal-400'   },
  { Icon: Code2,       style: { top: '6%',  left: '90%' }, y: [0,-16,10,-18,0], x: [0, 12, -6,  8,0], duration: 11, delay: 0.9, size: 24, color: 'text-accent-400 dark:text-accent-300' },
  // second row
  { Icon: Database,    style: { top: '26%', left: '3%'  }, y: [0, 14,-10,18,0], x: [0,-10,  8, -6,0], duration: 12, delay: 1.4, size: 22, color: 'text-teal-400 dark:text-teal-300'   },
  { Icon: Users,       style: { top: '28%', left: '38%' }, y: [0,-14, 10,-8,0], x: [0,  8,-14, 10,0], duration: 10, delay: 0.4, size: 22, color: 'text-accent-300 dark:text-accent-200' },
  { Icon: LineChart,   style: { top: '24%', left: '62%' }, y: [0, 12,-8, 14,0], x: [0,-12, 10, -8,0], duration: 9,  delay: 2.0, size: 20, color: 'text-teal-300 dark:text-teal-200'   },
  { Icon: Terminal,    style: { top: '27%', left: '85%' }, y: [0,-10,14, -6,0], x: [0,  6,-10,  8,0], duration: 11, delay: 1.1, size: 20, color: 'text-accent-400 dark:text-accent-300' },
  // middle row
  { Icon: FlaskConical,style: { top: '48%', left: '2%'  }, y: [0,-16,10,-12,0], x: [0,  8,-12,  6,0], duration: 10, delay: 1.6, size: 22, color: 'text-teal-400 dark:text-teal-300'   },
  { Icon: Brain,       style: { top: '46%', left: '55%' }, y: [0, 18,-10,14,0], x: [0,-10, 12, -8,0], duration: 12, delay: 0.7, size: 24, color: 'text-accent-300 dark:text-accent-400' },
  { Icon: Sparkles,    style: { top: '50%', left: '78%' }, y: [0,-12, 8,-18,0], x: [0, 10,-8,  14,0], duration: 9,  delay: 2.2, size: 20, color: 'text-teal-300 dark:text-teal-400'   },
  // fourth row
  { Icon: BarChart3,   style: { top: '68%', left: '8%'  }, y: [0, 10,-16, 8,0], x: [0, -8, 14,-10,0], duration: 11, delay: 0.5, size: 20, color: 'text-accent-400 dark:text-accent-300' },
  { Icon: Cpu,         style: { top: '70%', left: '32%' }, y: [0,-14, 8,-10,0], x: [0, 12, -8,  6,0], duration: 10, delay: 1.3, size: 22, color: 'text-teal-400 dark:text-teal-300'   },
  { Icon: Code2,       style: { top: '66%', left: '62%' }, y: [0, 16,-10,12,0], x: [0, -6, 10, -8,0], duration: 13, delay: 1.9, size: 20, color: 'text-accent-300 dark:text-accent-400' },
  { Icon: Users,       style: { top: '72%', left: '88%' }, y: [0,-10, 14,-8,0], x: [0,  8,-12, 10,0], duration: 8,  delay: 0.3, size: 22, color: 'text-teal-300 dark:text-teal-200'   },
  // bottom row
  { Icon: Terminal,    style: { top: '88%', left: '5%'  }, y: [0,-12, 8,-16,0], x: [0, 10,-10, 12,0], duration: 10, delay: 2.3, size: 20, color: 'text-teal-400 dark:text-teal-300'   },
  { Icon: FlaskConical,style: { top: '86%', left: '30%' }, y: [0, 14,-8, 10,0], x: [0, -8, 12, -6,0], duration: 11, delay: 0.8, size: 20, color: 'text-accent-300 dark:text-accent-400' },
  { Icon: LineChart,   style: { top: '90%', left: '55%' }, y: [0,-10,16, -8,0], x: [0,  6,-14,  8,0], duration: 9,  delay: 1.5, size: 22, color: 'text-accent-400 dark:text-accent-300' },
  { Icon: Database,    style: { top: '85%', left: '80%' }, y: [0, 12,-14, 8,0], x: [0,-10,  8,-12,0], duration: 12, delay: 2.1, size: 20, color: 'text-teal-300 dark:text-teal-400'   },
]

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
      className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-24 pb-20 bg-stone-50 dark:bg-stone-950 overflow-hidden"
    >
      {/* Floating identity icons — clipped above the bottom info bar */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        {floatingIcons.map(({ Icon, style, y, x, duration, delay, size, color }, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={style}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: delay + 0.6, ease: 'easeOut' }}
          >
            <motion.div
              animate={{ y, x }}
              transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className={`p-2.5 rounded-xl bg-white/50 dark:bg-stone-900/40 border border-stone-200/50 dark:border-stone-700/30 backdrop-blur-sm shadow-sm ${color} opacity-50 dark:opacity-40`}>
                <Icon size={size} strokeWidth={1.4} />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="container-custom w-full relative z-10">
        <motion.div
          className="max-w-4xl space-y-10"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={item}
            className="text-xs font-mono text-accent-600 dark:text-accent-400 tracking-widest uppercase"
          >
            Available for opportunities
          </motion.p>

          <motion.div variants={item} className="space-y-4">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-medium leading-tight text-stone-900 dark:text-stone-100 tracking-tight">
              Isuru Pathirathna
            </h1>
            <p className="text-base sm:text-lg text-stone-500 dark:text-stone-400 leading-relaxed max-w-xl font-sans font-normal">
              Exploring why people do what they do through data ·{' '}
              <span className="text-stone-700 dark:text-stone-300 font-medium">AI & Behaviour</span> ·{' '}
              <span className="text-stone-700 dark:text-stone-300 font-medium">Data Science &amp; Analytics</span> ·{' '}
              <span className="text-stone-700 dark:text-stone-300 font-medium">Software Engineering</span> ·{' '}
              <span className="text-accent-600 dark:text-accent-400 font-medium">Open to opportunities</span>
            </p>
          </motion.div>

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

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 pt-2 border-t border-stone-200 dark:border-stone-800"
          >
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

            <div className="hidden sm:block w-px h-10 bg-stone-200 dark:bg-stone-800" />

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
