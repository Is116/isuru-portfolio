'use client'

import { Calendar, Clock, ArrowLeft, TrendingDown, Users, AlertTriangle, HeartHandshake, RefreshCw } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function EmotionalAmplitudeArticle() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <article className="min-h-screen bg-stone-50 dark:bg-stone-950">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-stone-50 dark:bg-stone-950 border-b border-stone-200 dark:border-stone-800 sticky top-0 z-50 backdrop-blur-sm bg-white/90 dark:bg-stone-950/90"
      >
        <div className="container mx-auto px-4 md:px-8 py-6">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Articles
          </Link>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 md:px-8 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 dark:text-stone-100 mb-6 leading-tight">
            Emotional Amplitude: Why America and Sri Lanka Both Need Narrower, More Manageable Emotional Bands
          </h1>

          <p className="text-xl md:text-2xl text-stone-600 dark:text-stone-400 mb-8">
            Happiness and sadness are not isolated states. They are trends, and when the distance between promise and reality grows too wide, societies and nervous systems both begin to crack.
          </p>

          <div className="flex items-center gap-6 text-sm text-stone-600 dark:text-stone-400 mb-8">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <time dateTime="2026-05-14">May 14, 2026</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>14 min read</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 shadow-2xl"
          >
            <Image
              src="/articles/culture_difference.jpeg"
              alt="An illustration representing cultural and emotional differences"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-8 pb-20">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="mb-12">
            <p className="text-xl md:text-2xl text-stone-700 dark:text-stone-300 leading-relaxed font-light">
              The most important way to read both social science and psychology is the same: happiness and sadness are not independent targets. They are trends tied together by amplitude. When cultures promise a high ceiling of joy while leaving the sadness floor low and unmanaged, the result is not prosperity it is instability.
            </p>
          </motion.div>

          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-6 border-l-4 border-blue-500 pl-6">
              Trends Collapse When Amplitude Outpaces Anchors
            </h2>

            <div className="space-y-6 text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              <p>
                In both politics and personal emotion, the same dynamic plays out. A trend rises, expectations inflate, and if there is no corresponding support to hold the low end steady, the whole system becomes fragile.
              </p>

              <p>
                That is the spine of this article. The social science perspective sees it as structural: the state and culture that exaggerate how happy people should feel without shoring up how sad they can safely fall create a dangerous gap. The psychological perspective sees the same thing inside the nervous system: the body does better with a narrow, manageable emotional band than with extreme highs and lows.
              </p>
            </div>
          </motion.section>

          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-6 border-l-4 border-red-500 pl-6">
              The Social Science Case: USA and Sri Lanka
            </h2>

            <div className="space-y-6 text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              <p>
                In the United States, the national story has long promised opportunity, upward mobility, and unending progress. Yet the reality for many is a low sadness floor: economic insecurity, fragmented communities, affordable healthcare out of reach, and a social safety net that remains patchy.
              </p>

              <p>
                In Sri Lanka, the narrative moved quickly from a hopeful developmental dream to a collapse in trust. For years, politicians and influencers promised prosperity, national renewal, and peace, while the emotional and material supports needed to cushion the low end were neglected. When hardship arrived, the gap between the projected happiness ceiling and the lived struggle became unbearable.
              </p>

              <p>
                If both countries are failures, it is not because they were too unhappy. It is because they failed at amplitude management. They let the promise get too far ahead of the reality, and they failed to raise the sadness floor when the trend reversed.
              </p>
            </div>
          </motion.section>

          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-6 border-l-4 border-purple-500 pl-6">
              The Psychology Case: Emotional Regulation and Bandwidth
            </h2>

            <div className="space-y-6 text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              <p>
                Emotion is not a ladder you climb. It is a band you live inside. When your nervous system is asked to sustain extreme highs, it becomes more likely to overreact, burn out, or crash hard on the other side.
              </p>

              <p>
                A narrow, manageable emotional band is what helps people stay grounded. When joy is celebrated but the possibility of sadness is also acknowledged and buffered, individuals and communities can adapt. When the opposite happens, the system swings wider and wider until it breaks.
              </p>

              <p>
                That is why the same structural problem shows up in therapy and policy. In therapy, people are taught to tolerate discomfort, contain their lows, and avoid chasing artificial highs. In public policy, societies should do the same through reliable healthcare, mental health services, social trust, and honest narratives.
              </p>
            </div>
          </motion.section>

          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-6 border-l-4 border-green-500 pl-6">
              What Healthy Amplitude Management Looks Like
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              <div className="bg-stone-50 dark:bg-stone-800/50 rounded-2xl border border-stone-200 dark:border-stone-700 p-8">
                <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-4 flex items-center gap-3">
                  <HeartHandshake className="text-accent-600" size={24} />
                  In People
                </h3>
                <ul className="list-disc list-inside space-y-3">
                  <li>Normalizing grief and disappointment instead of medicalizing them.</li>
                  <li>Building resilience through routine, connection, and emotional education.</li>
                  <li>Avoiding performance pressure that makes every day feel either perfect or ruined.</li>
                </ul>
              </div>

              <div className="bg-stone-50 dark:bg-stone-800/50 rounded-2xl border border-stone-200 dark:border-stone-700 p-8">
                <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-4 flex items-center gap-3">
                  <RefreshCw className="text-accent-600" size={24} />
                  In Culture
                </h3>
                <ul className="list-disc list-inside space-y-3">
                  <li>Rewarding honesty about difficulty rather than only celebrating success.</li>
                  <li>Designing policies that protect people during downturns, not just amplify booms.</li>
                  <li>Helping communities see stability as the goal, not constant upward momentum.</li>
                </ul>
              </div>
            </div>
          </motion.section>

          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-6 border-l-4 border-yellow-500 pl-6">
              A Simple Argument With Big Consequences
            </h2>

            <div className="space-y-6 text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              <p>
                When you stop treating happiness and sadness as separate goals and start treating them as a shared amplitude, the diagnosis changes. The crisis becomes one of balance: the point where the emotional ceiling is promised too high for the system to sustain and the floor is left too low to catch the fall.
              </p>

              <p>
                America and Sri Lanka are not failures because they were not happy enough. They are failures because they let the trend take over without putting the supports in place to manage it. That is the same lesson for policy makers, organizers, therapists, and anyone trying to make sense of collective emotional change.
              </p>

              <p>
                If there is a better path forward, it begins with narrower promises, wider protections, and a recognition that stability is often more valuable than the next dramatic high.
              </p>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </article>
  )
}
