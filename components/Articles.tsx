'use client'

import { ExternalLink, Calendar, Clock, BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Articles = () => {
  const articles = [
    {
      title: 'Why Your Tap-to-Pay Card Is Way Smarter Than You Think',
      description: 'A deep dive into the cryptographic architecture protecting your contactless payments. From NFC power transfer to quantum-resistant algorithms, discover how tokenization, secure elements, and multi-layer encryption work together to secure every tap.',
      date: '2025-12-21',
      readTime: '18 min read',
      link: '/articles/tap-to-pay-security',
      tags: ['Payment Security', 'NFC', 'Cryptography', 'Fintech'],
      image: '/articles/NFC_article.png'
    }
  ]

  return (
    <section id="articles" className="py-20 md:py-32 bg-white dark:bg-gray-950">
      <div className="container-custom">
        <motion.div 
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="section-title">
            Latest <span className="gradient-text">Articles</span>
          </h2>
          <p className="section-subtitle">
            Thoughts, tutorials, and insights about web development, programming, and technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              className="card group hover:border-accent-300 dark:hover:border-accent-700 transition-all hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
              }}
            >
              {/* Article Image */}
              {article.image && (
                <div className="mb-4 -mt-2">
                  <div className="relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 w-full aspect-[16/9]">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              )}

              {/* Article Icon */}
              <div className="mb-4">
                <div className="p-2 bg-accent-50 dark:bg-accent-900/20 rounded-lg inline-block">
                  <BookOpen size={20} className="text-accent-600 dark:text-accent-400" />
                </div>
              </div>

              {/* Article Content */}
              <div className="space-y-3 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                  {article.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 flex-1 line-clamp-3">
                  {article.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-500 pt-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <time dateTime={article.date}>
                      {new Date(article.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </time>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {article.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="badge"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read Link */}
                <div className="pt-3 mt-auto">
                  {article.link.startsWith('http') ? (
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 font-medium transition-colors"
                    >
                      Read Article
                      <ExternalLink size={16} />
                    </a>
                  ) : (
                    <a
                      href={article.link}
                      className="inline-flex items-center gap-1.5 text-sm text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 font-medium transition-colors"
                    >
                      Read Article
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Articles
