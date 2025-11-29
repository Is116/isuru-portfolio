'use client'

import { ExternalLink, Star, GitFork, Code2 } from 'lucide-react'
import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: 'React Native E-Commerce',
      description: 'Full-featured mobile shopping app with cart management, payment integration, and real-time order tracking. Built with modern React Native architecture.',
      tags: ['React Native', 'TypeScript', 'Redux', 'Firebase'],
      demo: null,
      stars: 142,
      forks: 28,
    },
    {
      title: 'Open Task Manager',
      description: 'Collaborative task management platform with team workspaces, real-time sync, and Kanban boards. Fully open-source and self-hostable.',
      tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Socket.io'],
      demo: 'https://demo.com',
      stars: 89,
      forks: 15,
    },
    {
      title: 'DevTools CLI',
      description: 'Command-line productivity toolkit for developers. Includes code generators, Git helpers, and deployment automation scripts.',
      tags: ['Node.js', 'TypeScript', 'Commander', 'Chalk'],
      demo: null,
      stars: 67,
      forks: 12,
    },
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
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-accent-50 dark:bg-accent-900/20 rounded-lg">
                  <Code2 size={20} className="text-accent-600 dark:text-accent-400" />
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Star size={14} />
                    <span className="font-mono text-xs">{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork size={14} />
                    <span className="font-mono text-xs">{project.forks}</span>
                  </div>
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

                {/* Demo Link */}
                {project.demo && (
                  <div className="pt-3 mt-auto">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 font-medium transition-colors"
                    >
                      <ExternalLink size={16} />
                      View Demo
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
