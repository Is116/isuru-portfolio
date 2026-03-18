'use client'

import { Mail, Github, Linkedin, MapPin, Clock, MessageSquare } from 'lucide-react'
import { motion } from 'framer-motion'

const Contact = () => {
  const contactMethods = [
    { icon: Mail, label: 'Email', value: 'isuru2002@gmail.com', href: 'mailto:isuru2002@gmail.com' },
    { icon: Github, label: 'GitHub', value: 'Is116', href: 'https://github.com/Is116' },
    { icon: Linkedin, label: 'LinkedIn', value: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/isuru-abhiman-pathirathna-b3b9a4138' },
  ]

  const quickInfo = [
    { icon: Clock, label: 'Response Time', value: 'Within 24 hours' },
    { icon: MapPin, label: 'Location', value: 'Finland' },
    { icon: MessageSquare, label: 'Preferred', value: 'Email or LinkedIn' },
  ]

  return (
    <section id="contact" className="py-24 md:py-36 bg-stone-50 dark:bg-stone-950">
      <div className="container-custom">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Have a project in mind or just want to connect? I'm open to new opportunities and conversations.
          </p>
        </motion.div>

        <motion.div
          className="space-y-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Contact methods */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg border border-stone-200 dark:border-stone-800 hover:border-accent-300 dark:hover:border-accent-700 bg-white dark:bg-stone-900 transition-colors group"
                >
                  <method.icon size={16} className="text-stone-400 group-hover:text-accent-500 transition-colors flex-shrink-0" />
                  <div>
                    <p className="text-xs text-stone-400 dark:text-stone-500 mb-0.5">{method.label}</p>
                    <p className="text-sm font-medium text-stone-800 dark:text-stone-200">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick info */}
            <div className="space-y-3 pt-2 border-t border-stone-200 dark:border-stone-800">
              {quickInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-3">
                  <info.icon size={14} className="text-stone-400 flex-shrink-0" />
                  <span className="text-xs text-stone-500 dark:text-stone-400">{info.label}:</span>
                  <span className="text-xs font-medium text-stone-700 dark:text-stone-300">{info.value}</span>
                </div>
              ))}
            </div>

            {/* Availability */}
            <p className="text-xs font-mono text-accent-600 dark:text-accent-400 tracking-widest uppercase pt-2">
              · Currently available for opportunities
            </p>
          </motion.div>
      </div>
    </section>
  )
}

export default Contact
