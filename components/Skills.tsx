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
      category: 'Backend & AI',
      skills: ['Laravel', 'Express', 'PostgreSQL', 'MongoDB', 'Gemini AI', 'Grok AI'],
    },
  ]

  const technologies = [
    'React', 'React Native', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js',
    'Express', 'Laravel', 'PHP', 'MongoDB', 'PostgreSQL', 'Firebase', 'Tailwind CSS', 'Redux',
    'Git', 'GitHub', 'Docker', 'REST API', 'GraphQL', 'Socket.io',
    'Jest', 'Vercel', 'Expo', 'Zustand', 'Gemini AI', 'Grok AI',
  ]

  return (
    <section id="skills" className="py-24 md:py-36 bg-white dark:bg-stone-900">
      <div className="container-custom">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">Tools and frameworks I use to explore data and build meaningful software</p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              className="card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h3 className="font-sans text-sm font-medium text-stone-400 dark:text-stone-500 uppercase tracking-widest mb-4">
                {category.category}
              </h3>
              <ul className="space-y-2.5">
                {category.skills.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2.5 text-sm text-stone-700 dark:text-stone-300"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent-400 dark:bg-accent-500 flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Full tech stack */}
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h3 className="font-sans text-sm font-medium text-stone-400 dark:text-stone-500 uppercase tracking-widest mb-5">
            Full Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span key={index} className="badge">
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
