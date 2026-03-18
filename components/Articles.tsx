'use client'

import { ExternalLink, Calendar, Clock, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Articles = () => {
  const [showAll, setShowAll] = useState(false)

  const articles = [
    {
      title: 'Building a Searchable Archive: How AI Processes 8,000+ Legal Documents',
      description: 'A technical deep-dive into OCR technology, entity extraction, AI deduplication, and the open-source Python pipeline that powers legal transparency.',
      date: '2026-02-15',
      readTime: '18 min',
      link: '/articles/searchable-legal-archive',
      tags: ['AI', 'OCR', 'Legal Tech', 'Python', 'Open Source'],
      image: '/articles/document_search.png',
    },
    {
      title: 'How Electromagnetic Interference Stops, Crashes, and Compromises Integrated Circuits',
      description: 'A technical deep dive into frequency injection attacks, chip-backside vulnerabilities, timing jitter models, and real-world exploitation.',
      date: '2026-02-01',
      readTime: '24 min',
      link: '/articles/electromagnetic-interference-attacks',
      tags: ['Hardware Security', 'EMI', 'Cryptography', 'Automotive', 'IoT'],
      image: '/articles/emi_security.png',
    },
    {
      title: 'Democratizing Brain-Machine Interfaces: What You Can Do With Affordable Devices',
      description: "Discover how consumer-grade brain-machine interfaces are making neurotechnology accessible. From meditation apps to creative applications with affordable EEG devices.",
      date: '2026-01-26',
      readTime: '18 min',
      link: '/articles/democratizing-brain-machine-interfaces',
      tags: ['Neurotechnology', 'BMI', 'EEG', 'AI', 'Consumer Tech'],
      image: '/articles/human_brain.png',
    },
    {
      title: 'From Coaxial to Fiber: The Evolution of Broadband Infrastructure',
      description: 'Explore the evolution of broadband from coaxial cables to fiber optics — network architecture, signal processing, and the quest for better alternatives.',
      date: '2026-01-06',
      readTime: '35 min',
      link: '/articles/from-coaxial-to-fiber',
      tags: ['Network Infrastructure', 'Broadband', 'Telecommunications'],
      image: '/articles/line_evolution.png',
    },
    {
      title: "The Enduring Legacy of C: Why Half a Century Later, We Still Can't Live Without It",
      description: 'From Bell Labs in 1972 to your smartphone today — how C became the invisible foundation of modern computing.',
      date: '2025-12-25',
      readTime: '22 min',
      link: '/articles/c-language-enduring-legacy',
      tags: ['C', 'Systems Programming', 'History', 'Architecture'],
      image: '/articles/c.png',
    },
    {
      title: 'Why Your Tap-to-Pay Card Is Way Smarter Than You Think',
      description: 'A deep dive into the cryptographic architecture protecting contactless payments — tokenization, secure elements, and multi-layer encryption.',
      date: '2025-12-21',
      readTime: '18 min',
      link: '/articles/tap-to-pay-security',
      tags: ['Payment Security', 'NFC', 'Cryptography', 'Fintech'],
      image: '/articles/NFC_article.png',
    },
    {
      title: "The Hidden Radio Inside Your Pocket: Why Your Phone Can't Access Its Own Hardware",
      description: 'A deep technical exploration of RF hardware lockdown, regulatory compliance, and the architecture preventing custom wireless transmission.',
      date: '2024-12-23',
      readTime: '25 min',
      link: '/articles/the-hidden-radio-inside-your-pocket',
      tags: ['RF', 'Security', 'Android', 'Hardware', 'Regulation'],
      image: '/articles/radio_article.png',
    },
  ]

  return (
    <section id="articles" className="py-24 md:py-36 bg-white dark:bg-stone-900">
      <div className="container-custom">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="section-title">Articles</h2>
          <p className="section-subtitle">Thoughts and deep dives on technology, security, and engineering</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.slice(0, showAll ? articles.length : 3).map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link
                href={article.link}
                className="card group flex flex-col h-full cursor-pointer block"
              >
                {article.image && (
                  <div className="mb-4 -mx-6 -mt-6 rounded-t-lg overflow-hidden">
                    <div className="relative w-full aspect-[16/9] bg-stone-100 dark:bg-stone-800">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    </div>
                  </div>
                )}

                <div className="flex-1 flex flex-col space-y-3">
                  <div className="flex items-center gap-3 text-xs text-stone-400 dark:text-stone-500 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} />
                      {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-sans text-sm font-medium text-stone-900 dark:text-stone-100 leading-snug group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors flex-1">
                    {article.title}
                  </h3>

                  <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed line-clamp-3">
                    {article.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {article.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="badge">{tag}</span>
                    ))}
                  </div>

                  <div className="pt-2 mt-auto">
                    <span className="inline-flex items-center gap-1.5 text-xs text-accent-600 dark:text-accent-400 font-medium">
                      Read Article
                      <ExternalLink size={11} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {articles.length > 3 && !showAll && (
          <motion.div
            className="flex justify-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <button onClick={() => setShowAll(true)} className="btn-secondary gap-2">
              Show All Articles
              <ChevronDown size={16} />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Articles
