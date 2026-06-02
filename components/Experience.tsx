'use client'

import { Briefcase, GraduationCap, Award } from 'lucide-react'
import { motion } from 'framer-motion'

const Experience = () => {
  const workExperience = [
    {
      title: 'Work Trial',
      company: 'Vaasan kaupunki – City of Vaasa',
      companyUrl: 'https://www.vaasa.fi/',
      period: 'May 2026 – Present',
      type: 'Work Trial',
      description: 'Conducting social media analytics to explore how Vaasa can raise international awareness of the International House project.',
      achievements: [
        'Analysing engagement data and channel performance to identify effective strategies for reaching internationally mobile residents and newcomers',
        'Exploring how to best promote International House Vaasa across digital platforms',
        'Benchmarking social media strategies of comparable cities to surface best practices for the International House project',
      ],
    },
    {
      title: 'Full-Stack Developer',
      company: 'Codezela Technologies UK',
      companyUrl: 'https://codezela.com/',
      period: '2022 – 2025',
      type: 'Contract',
      description: 'Designed and developed enterprise Information Systems including ERP, CRM, and POS platforms for retail and enterprise clients across global markets at a UK-based software company.',
      achievements: [
        'Built end-to-end ERP solutions covering inventory management, sales workflows, purchase orders, and financial reporting for retail and wholesale businesses',
        'Developed CRM modules to streamline customer lifecycle management, sales pipelines, and client communication for service-based businesses',
        'Implemented POS systems integrated with ERP backends, enabling real-time stock updates, transaction processing, and sales analytics',
        'Integrated ERP functionalities into e-commerce platforms, connecting online storefronts with inventory, order management, and customer data systems',
        'Delivered SITC campus management system using Laravel 8 and 9 covering student records, administration, and reporting',
        'Worked across the full development lifecycle using Flutter, .NET, React, Next.js, and Laravel',
      ],
    },
    {
      title: 'Software Developer Trainee',
      company: 'CDB Bank',
      companyUrl: 'https://www.cdb.lk/',
      period: '2022 – 2022',
      type: 'Training',
      description: 'Training at Citizens Development Business Finance PLC, focused on digital banking solutions. Working with the CDB Self mobile app and digital banking platforms.',
      achievements: [
        'Developing features for CDB Self digital banking app',
        'Learning fintech solutions including payment processing and e-passbook',
        'Working with secure financial transaction systems and APIs',
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
    {
      title: 'Raising Capital: Credit Tech, Coin Offerings, and Crowdfunding',
      issuer: 'University of Michigan',
      platform: 'Coursera',
      date: 'March 2026',
      url: 'https://coursera.org/share/c2ec9ff0a1eed5b75809de072751620c',
      skills: ['FinTech', 'Credit Risk', 'Blockchain', 'Fundraising', 'Capital Markets'],
    },
    {
      title: 'Google Data Analytics Professional Certificate (v.3)',
      issuer: 'Google',
      platform: 'Coursera',
      date: 'May 2026',
      url: 'https://coursera.org/share/f53a3c528486bb363d194fee5502d804',
      skills: ['Data Management With Spreadsheets', 'Data Analytics', 'Databases', 'Data Visualization', 'Python', 'Tableau', 'Google Data Studio', 'Storytelling Using Data', 'Data Cleaning'],
    },
  ]

  const badges = [
    {
      title: 'Google Data Analytics Professional Certificate (v.3)',
      issuer: 'Google',
      platform: 'Credly',
      date: 'May 2026',
      url: 'https://www.credly.com/badges/4172d6f8-2f34-4dcb-a18c-68f8b99e10a6',
      image: '/badges/google_data_badge.png',
      description: 'Awarded after completing all 9 Coursera courses in the Google Data Analytics Professional Certificate.',
      skills: ['Data Management With Spreadsheets', 'Data Analytics', 'Databases', 'Data Visualization', 'Python', 'Tableau', 'Google Data Studio', 'Storytelling Using Data', 'Data Cleaning'],
    },
  ]

  const education = [
    {
      degree: 'Bachelor of Science in Software Engineering',
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

            <div className="space-y-6">
              {Object.entries(
                certifications.reduce<Record<string, typeof certifications>>((groups, cert) => {
                  ;(groups[cert.issuer] ??= []).push(cert)
                  return groups
                }, {})
              ).map(([issuer, certs]) => (
                <div key={issuer}>
                  <p className="text-xs font-medium text-stone-400 dark:text-stone-500 uppercase tracking-widest mb-3 font-sans">
                    {issuer}
                  </p>
                  <div className="space-y-3">
                    {certs.map((cert, idx) => (
                      <a
                        key={idx}
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card block group"
                      >
                        <h4 className="font-sans text-sm font-medium text-stone-900 dark:text-stone-100 mb-1 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors leading-snug">
                          {cert.title}
                        </h4>
                        <p className="text-xs text-stone-400 dark:text-stone-500 font-mono mb-3">
                          {cert.platform} · {cert.date}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {cert.skills.map((skill, sidx) => (
                            <span key={sidx} className="badge">{skill}</span>
                          ))}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <div className="flex items-center gap-2.5 mb-6">
                <Award size={16} className="text-accent-500" />
                <h3 className="font-sans text-xs font-medium text-stone-400 dark:text-stone-500 uppercase tracking-widest">Badges</h3>
              </div>
              <div className="space-y-3">
                {badges.map((badge, idx) => (
                  <a
                    key={idx}
                    href={badge.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card block group"
                  >
                    <div className="md:grid md:grid-cols-[150px_minmax(0,1fr)] md:items-start md:gap-5">
                      <div className="mb-4 md:mb-0 md:w-[150px] md:flex-shrink-0">
                        <img
                          src={badge.image}
                          alt={`${badge.title} badge`}
                          className="w-full max-w-[150px] h-auto rounded-lg object-contain"
                        />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-sans text-sm font-semibold text-stone-900 dark:text-stone-100 mb-2 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors leading-snug">
                          {badge.title}
                        </h4>
                        <p className="text-[11px] uppercase tracking-[0.28em] text-stone-400 dark:text-stone-500 font-mono mb-2">
                          {badge.issuer} · {badge.platform} · {badge.date}
                        </p>
                        <p className="text-sm text-stone-500 dark:text-stone-400 mb-2 leading-relaxed">
                          {badge.description}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {badge.skills.map((skill, sidx) => (
                        <span key={sidx} className="badge">{skill}</span>
                      ))}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience
