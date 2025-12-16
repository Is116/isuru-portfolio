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
    <section id="stats" className="py-12 md:py-16 bg-white dark:bg-gray-950">
      <div className="container-custom">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="card text-center">
              <div className="text-3xl font-bold text-accent-600 dark:text-accent-400">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
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
