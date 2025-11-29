'use client'

import { Briefcase, GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'

const Experience = () => {
  const workExperience = [
    {
      title: 'Software Developer Trainee',
      company: 'CDB Bank',
      companyUrl: 'https://www.cdb.lk/',
      period: '2023 - Present',
      type: 'Training',
      description: 'Training at Citizens Development Business Finance PLC, a leading financial institution focused on sustainable financing and digital banking solutions. Working with the CDB Self mobile app and digital banking platforms.',
      achievements: [
        'Developing features for CDB Self digital banking app',
        'Learning fintech solutions including payment processing and e-passbook',
        'Working with secure financial transaction systems and APIs',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Veesoft',
      companyUrl: 'https://www.veesoft.lk/',
      period: '2022 - 2023',
      type: 'Project-Based',
      description: 'Developed comprehensive ERP solutions at Veesoft IT (Pvt) Ltd, specializing in JAPRA ERP system with integrated modules for POS, inventory, CRM, and business intelligence for retail and enterprise clients.',
      achievements: [
        'Built features for Smart POS & Inventory management system',
        'Developed mobile applications for sales representatives',
        'Created dashboard analytics and promotion modules using cloud technologies',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Codezela',
      companyUrl: 'https://codezela.com/',
      period: '2022',
      type: 'Project-Based',
      description: 'Developed professional web and mobile applications at Codezela Technologies, a UK-based software company serving 500+ global clients across healthcare, finance, e-commerce, and education sectors with cutting-edge digital solutions.',
      achievements: [
        'Built e-commerce platforms and CMS solutions using Next.js and React',
        'Developed AI-powered features and mobile applications for diverse industries',
        'Implemented responsive designs with Tailwind CSS and modern frameworks',
      ],
    },
  ]

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Plymouth',
      period: '2019 - 2022',
      description: 'Studied software engineering, web development, and computer science fundamentals with focus on modern development practices.',
    },
  ]

  return (
    <section id="experience" className="py-20 md:py-32 bg-white dark:bg-gray-950">
      <div className="container-custom">
        <motion.div 
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="section-title">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-accent-50 dark:bg-accent-900/20 rounded-lg hover-scale">
                <Briefcase className="text-accent-600 dark:text-accent-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Work Experience</h3>
            </div>

            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-800 last:pb-0 group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-accent-500 rounded-full border-4 border-white dark:border-gray-950 transition-all group-hover:scale-125 group-hover:animate-glow-pulse"></div>

                  <div className="card hover-lift">
                    <div className="mb-3">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {job.title}
                      </h4>
                      <a 
                        href={job.companyUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-accent-600 dark:text-accent-400 font-medium hover:underline"
                      >
                        {job.company}
                      </a>
                      <div className="flex items-center gap-2 mt-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">{job.period}</p>
                        <span className="text-gray-300 dark:text-gray-600">•</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{job.type}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">{job.description}</p>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                          <span className="text-accent-500 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-accent-50 dark:bg-accent-900/20 rounded-lg hover-scale">
                <GraduationCap className="text-accent-600 dark:text-accent-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-800 last:pb-0 group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-accent-500 rounded-full border-4 border-white dark:border-gray-950 transition-all group-hover:scale-125 group-hover:animate-glow-pulse"></div>

                  <div className="card hover-lift">
                    <div className="mb-3">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-accent-600 dark:text-accent-400 font-medium">{edu.institution}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{edu.period}</p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience
