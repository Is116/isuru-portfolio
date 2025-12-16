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
              <div className="absolute inset-0 bg-gradient-to-t from-accent-600/20 to-transparent"></div>
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
              a web and mobile developer who believes code should be open, accessible, and maybe a little fun. 
              I've been coding for over 3 years, diving into everything from React Native and Flutter apps to full-stack web platforms.
            </p>
          </motion.div>

          <motion.div variants={item} className="card">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Here's my philosophy: <span className="italic">if it works, break it intentionally</span>. Why? Because understanding 
              why something breaks teaches you way more than just watching it work. Then I build it back up, better and stronger. 
              It's like being a digital mechanic, but with fewer grease stains.
            </p>
          </motion.div>

          <motion.div variants={item} className="card">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm all about <span className="font-semibold text-accent-600 dark:text-accent-400">open-source development</span> and 
              writing reusable, clean code. Give me a new programming language and a couple of weeks, and I'll probably be building 
              something with it. Currently rocking <span className="font-mono text-sm">TypeScript, React, Next.js, Node.js, React Native, Expo, Express, Tailwind CSS, Flutter, Svelte, Vue,</span> and whatever else gets the job done.
            </p>
          </motion.div>

          <motion.div variants={item} className="card">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              When I'm not shipping code, I'm probably tinkering with electronics, exploring the latest tech gadgets, or 
              collaborating on open-source projects. I believe in writing code that's maintainable, scalable, and makes a 
              real impact.
            </p>
          </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
