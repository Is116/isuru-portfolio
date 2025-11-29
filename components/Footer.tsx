'use client'

import { Github, Linkedin, Mail, Code2 } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Is116', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/isuru-abhiman-pathirathna-b3b9a4138', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:isuru2002@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <Code2 size={20} className="text-accent-500" />
            <span className="font-mono font-bold text-gray-900 dark:text-white">dev</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} • Built with Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
