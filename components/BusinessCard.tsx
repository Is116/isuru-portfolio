'use client'

import { motion } from 'framer-motion'

const BusinessCard = () => {
  const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Completed' },
    { value: '15+', label: 'Technologies' },
    { value: '100%', label: 'Client Satisfaction' },
  ]

  return (
    <section id="stats" className="py-12 bg-stone-50 dark:bg-stone-950 border-y border-stone-200 dark:border-stone-800">
      <div className="container-custom">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-stone-200 dark:divide-stone-800"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center py-4 px-6">
              <div className="font-mono text-2xl font-medium text-accent-600 dark:text-accent-400 mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-stone-400 dark:text-stone-500 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default BusinessCard
