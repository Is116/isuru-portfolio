'use client'

import { ExternalLink, Github, FileText, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Projects = () => {
  const [showAll, setShowAll] = useState(false)

  const projects = [
    {
      title: 'Literary Chat — AI Book Character Conversations',
      description: 'Full-stack AI web app for dynamic conversations with literary characters. Users upload PDF books; Gemini AI extracts characters and metadata, leveraging RAG for context-aware, multilingual chats.',
      tags: ['Gemini AI', 'React', 'Node.js', 'Express', 'SQLite', 'Tailwind CSS'],
      github: 'https://github.com/Is116/ai-chat-fin-stories',
      demo: null,
      link: '/projects/literary-chat',
      images: ['/projects/ai_chat/ai_chat.jpeg'],
    },
    {
      title: 'Gesture Works — Hand Gesture Control',
      description: 'Real-time hand gesture recognition using machine learning to control a ball on screen. Train custom gestures with TensorFlow.js and MediaPipe.',
      tags: ['Next.js', 'TypeScript', 'TensorFlow.js', 'MediaPipe'],
      github: 'https://github.com/Is116/gesture-works',
      demo: null,
      link: '/projects/gesture-works',
      images: ['/projects/gesture_works/manage.jpeg', '/projects/gesture_works/game.jpeg'],
    },
    {
      title: 'NFC Business Card',
      description: 'Flutter mobile app for instant contact sharing using NFC and QR codes. Share portfolio, WhatsApp link, contact info, and full vCard with customisable settings.',
      tags: ['Flutter', 'Dart', 'NFC', 'HCE', 'Kotlin'],
      github: 'https://github.com/Is116/portfolio-flutter-app',
      demo: null,
      link: null,
      images: [
        '/projects/portfolio/nfc_share.jpeg',
        '/projects/portfolio/qr_codes.jpeg',
        '/projects/portfolio/settings.jpeg',
      ],
    },
    {
      title: 'Thé Party',
      description: 'Modern landing page for a music social networking platform. Features responsive design, smooth animations, and sections for community forums and event ticketing.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/Is116/the-party-web',
      demo: 'https://the-party-web.vercel.app/',
      link: null,
      images: ['/projects/the_party-app/the_party.png'],
    },
  ]

  return (
    <section id="projects" className="py-24 md:py-36 bg-stone-50 dark:bg-stone-950">
      <div className="container-custom">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Selected work — building in public, contributing to the community</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(0, showAll ? projects.length : 4).map((project, index) => (
            <motion.div
              key={index}
              className="card flex flex-col"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {project.images && project.images.length > 0 && (
                <div className="mb-4">
                  <div className={`flex gap-2 ${project.images.length > 1 ? 'overflow-x-auto' : ''}`}>
                    {project.images.map((img, imgIdx) => (
                      <div
                        key={imgIdx}
                        className={`relative rounded overflow-hidden bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 flex-shrink-0 ${
                          project.images.length === 3 ? 'w-[110px] aspect-[9/16]' : 'w-full aspect-[16/9]'
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`${project.title} screenshot ${imgIdx + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex-1 flex flex-col space-y-3">
                <h3 className="font-sans text-base font-medium text-stone-900 dark:text-stone-100 leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="badge">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-4 pt-2 border-t border-stone-100 dark:border-stone-800">
                  {project.link && (
                    <Link
                      href={project.link}
                      className="inline-flex items-center gap-1.5 text-xs text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 font-medium transition-colors"
                    >
                      <FileText size={13} />
                      View Project
                    </Link>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 font-medium transition-colors"
                    >
                      <Github size={13} />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 font-medium transition-colors"
                    >
                      <ExternalLink size={13} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {projects.length > 4 && !showAll && (
          <motion.div
            className="flex justify-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <button onClick={() => setShowAll(true)} className="btn-secondary gap-2">
              Show More
              <ChevronDown size={16} />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects
