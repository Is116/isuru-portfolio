'use client'

import { ArrowRight, Github, Linkedin, Mail, Code2, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { FiRadio } from 'react-icons/fi'
import { useState } from 'react'

const Hero = () => {
  const [shareStatus, setShareStatus] = useState<string>('')

  const shareWhatsApp = async () => {
    try {
      const whatsappUrl = 'https://wa.me/358413671742'
      
      if (navigator.share) {
        await navigator.share({
          title: 'Chat with Isuru on WhatsApp',
          text: 'Connect with me on WhatsApp for quick communication',
          url: whatsappUrl
        })
        setShareStatus('✅ Shared!')
        setTimeout(() => setShareStatus(''), 2000)
      } else {
        // Fallback: open WhatsApp directly
        window.open(whatsappUrl, '_blank')
        setShareStatus('✅ Opening WhatsApp...')
        setTimeout(() => setShareStatus(''), 2000)
      }
    } catch (error: any) {
      console.error('Share Error:', error)
      if (error.name === 'AbortError') {
        setShareStatus('⚠️ Cancelled')
      } else {
        setShareStatus('ℹ️ Opening WhatsApp...')
        window.open(whatsappUrl, '_blank')
      }
      setTimeout(() => setShareStatus(''), 2000)
    }
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16 bg-white dark:bg-gray-950">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[1fr,auto] gap-8 lg:gap-12 items-center">
            {/* Content */}
            <motion.div 
              className="space-y-8 md:space-y-12"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {/* Status Badge */}
              <motion.div variants={item} className="inline-flex items-center gap-2 px-3.5 py-2 bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-400 rounded-full text-xs sm:text-sm font-medium border border-accent-200 dark:border-accent-800">
              <div className="relative flex">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
              </div>
              Available for opportunities
            </motion.div>
            
            {/* Name & Description */}
            <div className="space-y-4 md:space-y-6">
              <motion.h1 variants={item} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 dark:text-white">
                Isuru Pathirathna
              </motion.h1>
              
              <motion.p variants={item} className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                AI enthusiast building web & mobile apps. Breaking things to understand them, then building them better.
              </motion.p>
            </div>

            {/* Contact Info */}
            <motion.div variants={item} className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a 
                href="mailto:isuru2002@gmail.com" 
                className="flex items-center gap-2.5 px-4 py-2.5 bg-white/50 dark:bg-gray-900/50 hover:bg-white dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group backdrop-blur-sm"
              >
                <Mail size={18} className="text-gray-500 dark:text-gray-400 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate">isuru2002@gmail.com</span>
              </a>

              <a 
                href="tel:+358413671742" 
                className="flex items-center gap-2.5 px-4 py-2.5 bg-white/50 dark:bg-gray-900/50 hover:bg-white dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group backdrop-blur-sm"
              >
                <Phone size={18} className="text-gray-500 dark:text-gray-400 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">+358 41 367 1742</span>
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={item} className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <a href="#contact" className="btn-primary group justify-center">
                Get in Touch
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <a href="#projects" className="btn-secondary justify-center">
                View Projects
              </a>
            </motion.div>

            {/* Social Links & Stats */}
            <motion.div variants={item} className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-800">
              {/* Social */}
              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  href="https://github.com/Is116"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-white/80 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/isuru-abhiman-pathirathna-b3b9a4138"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-white/80 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-6 sm:gap-8">
                <div className="hover-lift">
                  <div className="font-mono text-xl sm:text-2xl font-bold gradient-text">3+</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Years Exp</div>
                </div>
                <div className="w-px h-8 sm:h-10 bg-gray-200 dark:bg-gray-800"></div>
                <div className="hover-lift">
                  <div className="font-mono text-xl sm:text-2xl font-bold gradient-text">40+</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Projects</div>
                </div>
                <div className="w-px h-8 sm:h-10 bg-gray-200 dark:bg-gray-800"></div>
                <div className="hover-lift">
                  <div className="font-mono text-xl sm:text-2xl font-bold gradient-text">∞</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Coffee</div>
                </div>
              </div>
              </motion.div>
            </motion.div>

            {/* QR Code Card */}
            <motion.div
              className="lg:block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="card p-6 text-center space-y-4">
                <a 
                  href="https://wa.me/qr/OCY4T7QELQEFB1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-36 h-36 mx-auto rounded-lg bg-gradient-to-br from-accent-100 to-accent-50 dark:from-accent-900/30 dark:to-accent-900/10 items-center justify-center border-2 border-accent-200 dark:border-accent-800 hover:border-accent-400 dark:hover:border-accent-600 transition-all duration-300 overflow-hidden group hover:shadow-lg hover:-translate-y-1"
                >
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=128x128&data=https://wa.me/qr/OCY4T7QELQEFB1" 
                    alt="WhatsApp QR Code"
                    className="w-32 h-32 group-hover:scale-110 transition-transform duration-300"
                  />
                </a>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <p className="font-semibold text-gray-900 dark:text-white">Scan to chat</p>
                  <p className="text-xs">on WhatsApp</p>
                </div>
                
                {/* WhatsApp Share Button */}
                <button 
                  onClick={shareWhatsApp}
                  className="btn-secondary w-full group text-sm gap-2"
                >
                  <FiRadio className="w-4 h-4 group-hover:animate-pulse" />
                  <span>Chat on WhatsApp</span>
                </button>
                
                {shareStatus && (
                  <motion.p 
                    className="text-xs text-gray-600 dark:text-gray-400"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {shareStatus}
                  </motion.p>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
