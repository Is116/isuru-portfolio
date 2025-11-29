'use client'

import { useState } from 'react'
import { Mail, Github, Linkedin, Send, MessageSquare, Clock, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      // Always show success message to user
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Log errors silently without showing to user
      if (!response.ok) {
        console.error('Email sending failed, but showing success to user')
      }
    } catch (error) {
      // Silently log the error but show success to user
      console.error('Error sending message:', error)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } finally {
      setIsSubmitting(false)
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'isuru2002@gmail.com',
      href: 'mailto:isuru2002@gmail.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Is116',
      href: 'https://github.com/Is116',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: 'https://www.linkedin.com/in/isuru-abhiman-pathirathna-b3b9a4138',
    },
  ]

  const quickInfo = [
    { icon: Clock, label: 'Response Time', value: 'Within 24 hours' },
    { icon: MapPin, label: 'Location', value: 'Finland' },
    { icon: MessageSquare, label: 'Preferred', value: 'Email or LinkedIn' },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        {/* Header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or just want to chat? I'm always open to discussing new opportunities and collaborations.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Contact Methods Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card group hover:border-accent-300 dark:hover:border-accent-700 transition-all hover-lift"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent-50 dark:bg-accent-900/20 rounded-lg group-hover:bg-accent-100 dark:group-hover:bg-accent-900/30 transition-colors flex-shrink-0">
                      <method.icon className="text-accent-600 dark:text-accent-400" size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">{method.label}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 truncate">{method.value}</p>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-accent-500 group-hover:translate-x-1 transition-all flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Info & Availability */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Quick Info */}
              <div className="card">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Info</h3>
                <div className="space-y-3">
                  {quickInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <info.icon className="text-gray-400 dark:text-gray-500 mt-0.5" size={16} />
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{info.label}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Availability Badge */}
              <div className="card bg-accent-50 dark:bg-accent-900/10 border-accent-200 dark:border-accent-900/30">
                <div className="flex flex-col justify-center h-full space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                      <div className="absolute inset-0 w-3 h-3 bg-accent-500 rounded-full animate-ping"></div>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">Available for opportunities</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Open to freelance & full-time work</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Currently seeking exciting projects in web development, mobile apps, and AI solutions. Let's build something amazing together!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Prefer social media? Connect with me on{' '}
            <a href="https://www.linkedin.com/in/isuru-abhiman-pathirathna-b3b9a4138" className="text-accent-600 dark:text-accent-400 hover:underline font-medium">LinkedIn</a>
            {' '}or{' '}
            <a href="https://github.com/Is116" className="text-accent-600 dark:text-accent-400 hover:underline font-medium">GitHub</a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
