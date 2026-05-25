'use client'

import {
  ArrowRight, Github, Linkedin, Mail, Phone,
  Brain, BarChart3, Code2, Database, Cpu,
  Users, Sparkles, LineChart, Terminal, FlaskConical,
} from 'lucide-react'
import { motion } from 'framer-motion'

const floatingIcons = [
  {
    Icon: Brain,
    label: 'AI & Behaviour',
    style: { top: '10%', right: '14%' },
    y: [0, -22, 8, -14, 0],
    x: [0, 10, -8, 14, 0],
    duration: 9,
    delay: 0,
    size: 28,
    color: 'text-accent-400 dark:text-accent-300',
  },
  {
    Icon: Users,
    label: 'Behavioural Science',
    style: { top: '28%', right: '6%' },
    y: [0, 14, -10, 18, 0],
    x: [0, -12, 8, -6, 0],
    duration: 11,
    delay: 1.4,
    size: 24,
    color: 'text-teal-400 dark:text-teal-300',
  },
  {
    Icon: BarChart3,
    label: 'Data Analytics',
    style: { top: '18%', right: '32%' },
    y: [0, -10, 16, -8, 0],
    x: [0, 8, -14, 6, 0],
    duration: 10,
    delay: 0.6,
    size: 22,
    color: 'text-accent-300 dark:text-accent-400',
  },
  {
    Icon: Code2,
    label: 'Software Engineering',
    style: { top: '52%', right: '10%' },
    y: [0, -16, 10, -20, 0],
    x: [0, 14, -6, 8, 0],
    duration: 12,
    delay: 0.9,
    size: 26,
    color: 'text-teal-300 dark:text-teal-400',
  },
  {
    Icon: Database,
    label: 'Data Science',
    style: { top: '68%', right: '28%' },
    y: [0, 12, -18, 8, 0],
    x: [0, -8, 14, -10, 0],
    duration: 13,
    delay: 2.1,
    size: 20,
    color: 'text-accent-400 dark:text-accent-300',
  },
  {
    Icon: Cpu,
    label: 'Machine Learning',
    style: { top: '6%', right: '28%' },
    y: [0, 10, -12, 6, 0],
    x: [0, -10, 6, -14, 0],
    duration: 8,
    delay: 1.8,
    size: 20,
    color: 'text-teal-400 dark:text-teal-300',
  },
  {
    Icon: LineChart,
    label: 'Analytics',
    style: { top: '80%', right: '8%' },
    y: [0, -14, 10, -8, 0],
    x: [0, 10, -12, 8, 0],
    duration: 10,
    delay: 0.4,
    size: 22,
    color: 'text-accent-300 dark:text-accent-400',
  },
  {
    Icon: Sparkles,
    label: 'Generative AI',
    style: { top: '40%', right: '22%' },
    y: [0, -18, 12, -10, 0],
    x: [0, 8, -16, 10, 0],
    duration: 9,
    delay: 1.1,
    size: 22,
    color: 'text-teal-300 dark:text-teal-200',
  },
  {
    Icon: Terminal,
    label: 'Engineering',
    style: { top: '62%', right: '4%' },
    y: [0, 16, -10, 14, 0],
    x: [0, -8, 12, -6, 0],
    duration: 11,
    delay: 1.6,
    size: 20,
    color: 'text-accent-200 dark:text-accent-400',
  },
  {
    Icon: FlaskConical,
    label: 'Research',
    style: { top: '88%', right: '18%' },
    y: [0, -10, 14, -8, 0],
    x: [0, 12, -8, 16, 0],
    duration: 12,
    delay: 2.4,
    size: 20,
    color: 'text-teal-400 dark:text-teal-300',
  },
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
      {/* Floating identity icons */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        {floatingIcons.map(({ Icon, label, style, y, x, duration, delay, size, color }) => (
          <motion.div
            key={label}
            className="absolute group"
            style={style}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: delay + 0.6, ease: 'easeOut' }}
          >
            <motion.div
              animate={{ y, x }}
              transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative flex flex-col items-center gap-1.5"
            >
              {/* Icon container */}
              <div className={`p-2.5 rounded-xl bg-white/60 dark:bg-stone-900/50 border border-stone-200/60 dark:border-stone-700/40 backdrop-blur-sm shadow-sm ${color} opacity-60 dark:opacity-50`}>
                <Icon size={size} strokeWidth={1.4} />
              </div>
              {/* Label */}
              <span className="text-[10px] font-mono text-stone-400 dark:text-stone-500 tracking-wide whitespace-nowrap opacity-70">
                {label}
              </span>
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
