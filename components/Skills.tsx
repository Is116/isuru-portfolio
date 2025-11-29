'use client'

import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Web Development',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    },
    {
      category: 'Mobile Development',
      skills: ['React Native', 'Expo', 'Firebase', 'Redux', 'Native APIs'],
    },
    {
      category: 'Backend & AI Tools',
      skills: ['Laravel', 'Express', 'PostgreSQL', 'MongoDB', 'Gemini AI', 'Grok AI'],
    },
  ]

  const technologies = [
    'React', 'React Native', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js',
    'Express', 'Laravel', 'PHP', 'MongoDB', 'PostgreSQL', 'Firebase', 'Tailwind CSS', 'Redux',
    'Git', 'GitHub', 'Docker', 'REST API', 'GraphQL', 'Socket.io',
    'Jest', 'Vercel', 'Expo', 'Zustand', 'Gemini AI', 'Grok AI'
  ]

  return (
    <section id="skills" className="py-20 md:py-32 bg-white dark:bg-gray-950">
      <div className="container-custom">
        <motion.div 
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            Tools and frameworks I use to build modern applications
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              className="card hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{category.category}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 transition-colors hover:text-accent-600 dark:hover:text-accent-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-glow-pulse"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* All Technologies */}
        <motion.div 
          className="card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="badge hover-scale cursor-default transition-all hover:bg-accent-50 hover:border-accent-300 dark:hover:bg-accent-900/20 dark:hover:border-accent-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
