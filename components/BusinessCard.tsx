'use client'

import { motion } from 'framer-motion'
import { FiDownload, FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiGlobe, FiRadio } from 'react-icons/fi'
import { useState } from 'react'

const BusinessCard = () => {
  const [shareStatus, setShareStatus] = useState<string>('')

  const downloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Isuru Pathirathna
N:Pathirathna;Isuru;;;
TITLE:Full Stack Developer
EMAIL:isuru2002@gmail.com
TEL:+358413671742
ADR:;;Finland
URL:https://isurupathirathna.dev
NOTE:Web, Mobile & AI Development Specialist
END:VCARD`

    const blob = new Blob([vCardData], { type: 'text/vcard' })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'isuru-pathirathna.vcf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  }

  const shareWhatsApp = async () => {
    try {
      const whatsappUrl = 'https://wa.me/358413671742'
      
      if (navigator.share) {
        await navigator.share({
          title: 'Chat with Isuru on WhatsApp',
          text: 'Connect with me on WhatsApp for quick communication',
          url: whatsappUrl
        })
        setShareStatus('✅ Shared successfully!')
        setTimeout(() => setShareStatus(''), 3000)
      } else {
        // Fallback: open WhatsApp directly
        window.open(whatsappUrl, '_blank')
        setShareStatus('✅ Opening WhatsApp...')
        setTimeout(() => setShareStatus(''), 3000)
      }
    } catch (error: any) {
      console.error('Share Error:', error)
      if (error.name === 'AbortError') {
        setShareStatus('⚠️ Sharing cancelled')
      } else {
        setShareStatus('ℹ️ Opening WhatsApp directly...')
        window.open('https://wa.me/358413671742', '_blank')
      }
      setTimeout(() => setShareStatus(''), 3000)
    }
  }

  return (
    <section id="card" className="py-20 md:py-32">
      <div className="container-custom">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="section-title">
            Digital <span className="gradient-text">Business Card</span>
          </h2>
          <p className="section-subtitle">
            Save my contact information
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Business Card */}
          <div className="relative">
            {/* Card with gradient border effect */}
            <div className="card overflow-hidden">
              {/* Accent corner decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent-500/20 to-transparent rounded-bl-full"></div>
              
              <div className="relative p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                  {/* Left side - Profile */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        Isuru Pathirathna
                      </h3>
                      <p className="text-lg text-accent-600 dark:text-accent-400 font-medium">
                        Full Stack Developer
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Web, Mobile & AI Development Specialist
                      </p>
                    </div>

                    <div className="space-y-3">
                      <a 
                        href="mailto:isuru2002@gmail.com" 
                        className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center group-hover:bg-accent-200 dark:group-hover:bg-accent-900/50 transition-colors">
                          <FiMail className="w-5 h-5" />
                        </div>
                        <span className="text-sm md:text-base">isuru2002@gmail.com</span>
                      </a>

                      <a 
                        href="tel:+358413671742" 
                        className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center group-hover:bg-accent-200 dark:group-hover:bg-accent-900/50 transition-colors">
                          <FiPhone className="w-5 h-5" />
                        </div>
                        <span className="text-sm md:text-base">+358 41 367 1742</span>
                      </a>

                      <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                        <div className="w-10 h-10 rounded-lg bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center">
                          <FiMapPin className="w-5 h-5" />
                        </div>
                        <span className="text-sm md:text-base">Finland</span>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Links & QR Code placeholder */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                        Connect With Me
                      </h4>
                      <div className="space-y-3">
                        <a 
                          href="https://github.com/Is116" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-accent-100 dark:group-hover:bg-accent-900/30 transition-colors">
                            <FiGithub className="w-5 h-5" />
                          </div>
                          <span className="text-sm md:text-base">github.com/Is116</span>
                        </a>

                        <a 
                          href="https://www.linkedin.com/in/isuru-abhiman-pathirathna-b3b9a4138" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-accent-100 dark:group-hover:bg-accent-900/30 transition-colors">
                            <FiLinkedin className="w-5 h-5" />
                          </div>
                          <span className="text-sm md:text-base">linkedin.com/in/isuru-abhiman-pathirathna</span>
                        </a>

                        <a 
                          href="https://isurupathirathna.dev" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-accent-100 dark:group-hover:bg-accent-900/30 transition-colors">
                            <FiGlobe className="w-5 h-5" />
                          </div>
                          <span className="text-sm md:text-base">isurupathirathna.dev</span>
                        </a>
                      </div>
                    </div>

                    {/* QR Code Section */}
                    <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                      <div className="flex items-center justify-center md:justify-start gap-4">
                        <a 
                          href="https://wa.me/qr/OCY4T7QELQEFB1"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-24 h-24 rounded-lg bg-gradient-to-br from-accent-100 to-accent-50 dark:from-accent-900/30 dark:to-accent-900/10 flex items-center justify-center border-2 border-accent-200 dark:border-accent-800 hover:border-accent-400 dark:hover:border-accent-600 transition-colors overflow-hidden group"
                        >
                          <img 
                            src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://wa.me/qr/OCY4T7QELQEFB1" 
                            alt="WhatsApp QR Code"
                            className="w-20 h-20 group-hover:scale-110 transition-transform duration-300"
                          />
                        </a>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          <p className="font-medium text-gray-900 dark:text-white">Scan to chat</p>
                          <p>on WhatsApp</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Download vCard Button */}
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button onClick={downloadVCard} className="btn-primary flex-1 group justify-center gap-2">
                      <FiDownload className="w-5 h-5 group-hover:animate-bounce" />
                      <span>Download vCard</span>
                    </button>
                    
                    <button onClick={shareWhatsApp} className="btn-secondary flex-1 group justify-center gap-2">
                      <FiRadio className="w-5 h-5 group-hover:animate-pulse" />
                      <span>Chat on WhatsApp</span>
                    </button>
                  </div>
                  
                  {shareStatus && (
                    <motion.p 
                      className="mt-3 text-sm text-center text-gray-600 dark:text-gray-400"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      {shareStatus}
                    </motion.p>
                  )}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div 
              className="absolute -top-4 -left-4 px-4 py-2 bg-accent-600 text-white rounded-lg shadow-lg text-sm font-semibold"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Available for Work
            </motion.div>
          </div>

          {/* Quick Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="card text-center">
              <div className="text-3xl font-bold text-accent-600 dark:text-accent-400">3+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Years Experience</div>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-accent-600 dark:text-accent-400">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Projects Completed</div>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-accent-600 dark:text-accent-400">15+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Technologies</div>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-accent-600 dark:text-accent-400">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Client Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default BusinessCard
