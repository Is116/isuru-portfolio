'use client'

import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-24 md:py-36 bg-white dark:bg-stone-900">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[360px,1fr] gap-12 lg:gap-20 items-center max-w-5xl">

          {/* Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative w-72 lg:w-full aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src="/projects/profile_img.png"
                alt="Isuru Pathirathna"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          {/* About text open, no card boxes */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div>
              <h2 className="section-title mb-2">About</h2>
              <p className="text-xs font-mono text-stone-400 dark:text-stone-500 tracking-widest uppercase">The story behind the curiosity</p>
            </div>

            <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-base">
              I'm <span className="font-medium text-stone-900 dark:text-stone-100">Isuru Pathirathna</span>, a Software Engineering
              graduate from NSBM with Plymouth University (UK). I'm driven by one core question: why do people do what they do?
            </p>

            <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-base">
              My work spans{' '}
              <span className="text-accent-600 dark:text-accent-400 font-medium">full-stack web development, mobile applications, and IoT systems</span>.
              I build end-to-end products using Next.js and Laravel on the web, React Native with Firebase for mobile, and C/C++ for embedded and IoT applications. I'm currently open to new opportunities in these spaces.
            </p>

            <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-base">
              Whether it's designing a PostgreSQL-backed API, wiring up a Gemini AI integration, or deploying a Redux-powered mobile app, I approach
              every problem with the same focus:{' '}
              <span className="text-accent-600 dark:text-accent-400 font-medium">lightweight, clean architecture and real-world impact</span>.
              I prioritise lean, efficient solutions minimal overhead, maximum reliability especially for resource-constrained IoT and embedded systems.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
