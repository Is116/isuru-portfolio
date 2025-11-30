'use client'

import { ExternalLink, Code2 } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Projects = () => {
  const projects = [
    {
      title: 'NFC Business Card',
      description: 'Flutter mobile app for instant contact sharing using NFC and QR codes. Share portfolio, WhatsApp link, contact info, and full vCard with customizable settings and local data storage.',
      tags: ['Flutter', 'Dart', 'NFC', 'HCE', 'Kotlin'],
      github: 'https://github.com/Is116/portfolio-flutter-app',
      demo: null,
      images: [
        '/projects/portfolio/nfc_share.jpeg',
        '/projects/portfolio/qr_codes.jpeg',
        '/projects/portfolio/settings.jpeg'
      ]
    },
    {
      title: 'Thé Party',
      description: 'Modern landing page for a music social networking platform. Features responsive design, smooth animations, and comprehensive sections showcasing community forums, event ticketing, and music streaming.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/Is116/the-party-web',
      demo: 'https://the-party-web.vercel.app/',
      images: [
        '/projects/the_party-app/the_party.png'
      ]
    },
    {
      title: 'Literary Chat — AI Book Character Conversations',
      description: 'A full-stack AI web application for dynamic conversations with literary characters. Users upload PDF books; the system uses Google Gemini AI for automatic character and metadata extraction, leveraging RAG for context-aware, multilingual chats with detailed, opinionated character personas.',
      tags: ['Gemini AI', 'Chat', 'React', 'Node.js', 'Express', 'SQLite', 'Tailwind CSS'],
      github: 'https://github.com/Is116/ai-chat-fin-stories',
      // demo: 'https://ai-chat-fin-stories.vercel.app',
      images: [
        '/projects/ai_chat/ai_chat.jpeg'
      ]
    }
  ]

  return (
    <section id="projects" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div 
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Building in public and contributing to the developer community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="card group hover:border-accent-300 dark:hover:border-accent-700 transition-all hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
              }}
            >
              {/* Project Images */}
              {project.images && project.images.length > 0 && (
                <div className="mb-4 -mt-2">
                  <div className={`flex gap-2 ${project.images.length > 1 ? 'overflow-x-auto scrollbar-hide' : ''} snap-x snap-mandatory`}>
                    {project.images.map((img, imgIdx) => (
                      <div 
                        key={imgIdx}
                        className={`relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex-shrink-0 snap-center ${
                          project.images.length === 3 ? 'w-[120px] aspect-[9/16]' : 'w-full aspect-[16/9]'
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`${project.title} screenshot ${imgIdx + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Header */}
              <div className="mb-4">
                <div className="p-2 bg-accent-50 dark:bg-accent-900/20 rounded-lg inline-block">
                  <Code2 size={20} className="text-accent-600 dark:text-accent-400" />
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-3 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="badge"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="pt-3 mt-auto flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 font-medium transition-colors"
                    >
                      <Code2 size={16} />
                      View Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 font-medium transition-colors"
                    >
                      <ExternalLink size={16} />
                      View Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
