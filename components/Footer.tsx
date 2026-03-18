'use client'

import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Is116', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/isuru-abhiman-pathirathna-b3b9a4138', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:isuru2002@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="bg-stone-50 dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800">
      <div className="container-custom py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          {/* Brand */}
          <span className="font-serif text-lg font-medium text-stone-900 dark:text-stone-100 tracking-wide">
            Isuru Pathirathna
          </span>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-stone-400 dark:text-stone-500 font-mono">
            © {currentYear} · Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
