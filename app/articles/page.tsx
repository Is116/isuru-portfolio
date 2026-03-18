import Link from 'next/link'
import Image from 'next/image'
import { Calendar } from 'lucide-react'

export default function ArticlesPage() {
  const articles = [
    {
      slug: 'searchable-legal-archive',
      title: 'Building a Searchable Archive: How AI Processes 8,000+ Legal Documents',
      description: 'A technical deep-dive into OCR, entity extraction, AI deduplication, and the open-source Python pipeline that powers legal transparency.',
      date: 'February 2026',
      image: '/articles/document_search.png',
      tags: ['AI', 'OCR', 'Legal Tech', 'Python'],
    },
    {
      slug: 'electromagnetic-interference-attacks',
      title: 'How Electromagnetic Interference Stops, Crashes, and Compromises Integrated Circuits',
      description: 'Frequency injection attacks, chip-backside vulnerabilities, timing jitter models, and real-world exploitation.',
      date: 'February 2026',
      image: '/articles/emi_security.png',
      tags: ['Hardware Security', 'EMI', 'Cryptography'],
    },
    {
      slug: 'democratizing-brain-machine-interfaces',
      title: 'Democratizing Brain-Machine Interfaces: What You Can Do With Affordable Devices',
      description: "How consumer-grade BCIs are making neurotechnology accessible — from meditation apps to creative tools.",
      date: 'January 2026',
      image: '/articles/human_brain.png',
      tags: ['Neurotechnology', 'BMI', 'EEG'],
    },
    {
      slug: 'from-coaxial-to-fiber',
      title: 'From Coaxial to Fiber: The Evolution of Broadband Infrastructure',
      description: 'The evolution of broadband — network architecture, signal processing, and the quest for better alternatives.',
      date: 'January 2026',
      image: '/articles/line_evolution.png',
      tags: ['Network Infrastructure', 'Broadband', 'Fiber Optics'],
    },
    {
      slug: 'c-language-enduring-legacy',
      title: "The Enduring Legacy of C: Why Half a Century Later, We Still Can't Live Without It",
      description: 'From Bell Labs in 1972 to your smartphone today — how C became the invisible foundation of modern computing.',
      date: 'December 2025',
      image: '/articles/c.png',
      tags: ['C', 'Systems Programming', 'History'],
    },
    {
      slug: 'tap-to-pay-security',
      title: 'Why Your Tap-to-Pay Card Is Way Smarter Than You Think',
      description: 'A deep dive into the cryptographic architecture protecting contactless payments.',
      date: 'December 2025',
      image: '/articles/NFC_article.png',
      tags: ['Payment Security', 'NFC', 'Cryptography'],
    },
    {
      slug: 'the-hidden-radio-inside-your-pocket',
      title: "The Hidden Radio Inside Your Pocket: Why Your Phone Can't Access Its Own Hardware",
      description: 'RF hardware lockdown, regulatory compliance, and the architecture preventing custom wireless transmission.',
      date: 'December 2024',
      image: '/articles/radio_article.png',
      tags: ['RF Security', 'Android', 'Hardware'],
    },
  ]

  return (
    <main className="min-h-screen bg-stone-50 dark:bg-stone-950 pt-24 pb-20">
      <div className="container-custom">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-mono text-accent-600 dark:text-accent-400 tracking-widest uppercase mb-3">Writing</p>
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-stone-900 dark:text-stone-100 mb-4">Articles</h1>
          <p className="text-stone-500 dark:text-stone-400 text-base leading-relaxed">
            Deep dives on technology, security, fintech, and the intersection of humans and machines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map(article => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="card group flex flex-col cursor-pointer"
            >
              <div className="relative w-full aspect-[16/9] bg-stone-100 dark:bg-stone-800 rounded overflow-hidden mb-4 -mx-6 -mt-6">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  priority={false}
                />
              </div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {article.tags.map(tag => (
                  <span key={tag} className="badge">{tag}</span>
                ))}
              </div>
              <h2 className="font-sans text-sm font-medium text-stone-900 dark:text-stone-100 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors leading-snug mb-2 flex-1">
                {article.title}
              </h2>
              <p className="text-xs text-stone-400 dark:text-stone-500 font-mono mt-auto">{article.date}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
