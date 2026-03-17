'use client'

import { motion } from 'framer-motion'

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div 
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            The story behind the code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[300px,1fr] gap-8 lg:gap-12 max-w-6xl">
          {/* Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative w-64 h-64 lg:w-full lg:h-auto lg:aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/priofile_img.png" 
                alt="Isuru Pathirathna"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-accent-600/20 to-transparent"></div> */}
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div 
            className="space-y-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
          <motion.div variants={item} className="card">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Hey there! I'm <span className="font-semibold text-gray-900 dark:text-white">Isuru Pathirathna</span>, 
              a Software Engineering graduate from NSBM with Plymouth University (UK). I'm experienced in building mobile and web 
              applications from inception, collaborating with teams, and finding creative solutions to technical challenges.
            </p>
          </motion.div>

          <motion.div variants={item} className="card">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm drawn to the intersection of <span className="font-semibold text-accent-600 dark:text-accent-400">fintech and psychology</span> — 
              understanding how people think about and interact with money through technology. It's a space where human behaviour 
              meets product design, and I find it endlessly fascinating.
            </p>
          </motion.div>

          <motion.div variants={item} className="card">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm an active <span className="font-semibold text-accent-600 dark:text-accent-400">open source contributor</span>, 
              passionate about continuous learning and always exploring new technologies that make a real impact. 
              Give me a new challenge and I'll dive in headfirst.
            </p>
          </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
