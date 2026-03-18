'use client'

import { Briefcase, GraduationCap, Award } from 'lucide-react'
import { motion } from 'framer-motion'

const Experience = () => {
  const workExperience = [
    {
      title: 'Software Developer Trainee',
      company: 'CDB Bank',
      companyUrl: 'https://www.cdb.lk/',
      period: '2023 – Present',
      type: 'Training',
      description: 'Training at Citizens Development Business Finance PLC, focused on digital banking solutions. Working with the CDB Self mobile app and digital banking platforms.',
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
      period: '2022 – 2023',
      type: 'Project-Based',
      description: 'Developed comprehensive ERP solutions specialising in JAPRA ERP with integrated modules for POS, inventory, CRM, and business intelligence.',
      achievements: [
        'Built features for Smart POS & Inventory management system',
        'Developed mobile applications for sales representatives',
        'Created dashboard analytics and promotion modules',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Codezela',
      companyUrl: 'https://codezela.com/',
      period: '2022',
      type: 'Project-Based',
      description: 'Developed web and mobile applications at a UK-based software company serving 500+ global clients across healthcare, finance, and e-commerce.',
      achievements: [
        'Built e-commerce platforms and CMS solutions using Next.js and React',
        'Developed AI-powered features and mobile applications',
        'Implemented responsive designs with Tailwind CSS',
      ],
    },
  ]

  const certifications = [
    {
      title: 'Innovations in Investment Technology: Artificial Intelligence',
      issuer: 'University of Michigan',
      platform: 'Coursera',
      date: 'March 2026',
      url: 'https://www.coursera.org/account/accomplishments/verify/NLSSSEXY1N3I',
      skills: ['AI', 'FinTech', 'Portfolio Management', 'Machine Learning', 'Investment Management'],
    },
  ]

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Plymouth',
      period: '2019 – 2022',
      description: 'Studied software engineering, web development, and computer science fundamentals with focus on modern development practices.',
    },
  ]

  return (
    <section id="experience" className="py-24 md:py-36 bg-stone-50 dark:bg-stone-950">
      <div className="container-custom">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">My professional journey and academic background</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-2.5 mb-8">
              <Briefcase size={16} className="text-accent-500" />
              <h3 className="font-sans text-xs font-medium text-stone-400 dark:text-stone-500 uppercase tracking-widest">Work Experience</h3>
            </div>

            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <div
                  key={index}
                  className="relative pl-6 pb-6 border-l border-stone-200 dark:border-stone-800 last:pb-0"
                >
                  <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-accent-400 dark:bg-accent-500 rounded-full border-2 border-stone-50 dark:border-stone-950" />
                  <div className="card">
                    <div className="mb-3">
                      <h4 className="font-sans text-base font-medium text-stone-900 dark:text-stone-100 mb-0.5">
                        {job.title}
                      </h4>
                      <div className="flex items-center gap-2 flex-wrap">
                        <a
                          href={job.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-accent-600 dark:text-accent-400 hover:underline underline-offset-4"
                        >
                          {job.company}
                        </a>
                        <span className="text-stone-300 dark:text-stone-700">·</span>
                        <span className="text-xs text-stone-400 dark:text-stone-500 font-mono">{job.period}</span>
                      </div>
                    </div>
                    <p className="text-sm text-stone-500 dark:text-stone-400 mb-3 leading-relaxed">{job.description}</p>
                    <ul className="space-y-1.5">
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-xs text-stone-500 dark:text-stone-400 flex items-start gap-2">
                          <span className="text-accent-400 mt-1 flex-shrink-0">✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-2.5 mb-8">
              <GraduationCap size={16} className="text-accent-500" />
              <h3 className="font-sans text-xs font-medium text-stone-400 dark:text-stone-500 uppercase tracking-widest">Education</h3>
            </div>

            <div className="space-y-6 mb-10">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l border-stone-200 dark:border-stone-800"
                >
                  <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-accent-400 dark:bg-accent-500 rounded-full border-2 border-stone-50 dark:border-stone-950" />
                  <div className="card">
                    <h4 className="font-sans text-base font-medium text-stone-900 dark:text-stone-100 mb-0.5">{edu.degree}</h4>
                    <p className="text-sm text-accent-600 dark:text-accent-400 mb-0.5">{edu.institution}</p>
                    <p className="text-xs text-stone-400 dark:text-stone-500 font-mono mb-3">{edu.period}</p>
                    <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2.5 mb-6">
              <Award size={16} className="text-accent-500" />
              <h3 className="font-sans text-xs font-medium text-stone-400 dark:text-stone-500 uppercase tracking-widest">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <a
                  key={index}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card block group"
                >
                  <h4 className="font-sans text-sm font-medium text-stone-900 dark:text-stone-100 mb-1 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-accent-600 dark:text-accent-400 mb-0.5">{cert.issuer}</p>
                  <p className="text-xs text-stone-400 dark:text-stone-500 font-mono mb-3">
                    {cert.platform} · {cert.date}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, idx) => (
                      <span key={idx} className="badge">{skill}</span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience
