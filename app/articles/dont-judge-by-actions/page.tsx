'use client'

import { Calendar, Clock, ArrowLeft, Brain, Eye, AlertCircle, Heart, Users, Scale } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function DontJudgeByActionsArticle() {
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

  const biases = [
    {
      icon: Eye,
      title: 'The Halo Effect',
      description: 'One admirable action makes us assume goodness in all dimensions. One negative action casts a permanent shadow across our entire perception of a person.',
      color: 'text-yellow-500',
    },
    {
      icon: AlertCircle,
      title: 'Confirmation Bias',
      description: 'Once we form a judgment, we selectively notice evidence that confirms it and dismiss everything that challenges it. The label sticks indefinitely.',
      color: 'text-red-500',
    },
    {
      icon: Scale,
      title: 'Actor-Observer Asymmetry',
      description: 'We judge ourselves by our intentions but judge others by their outcomes. We grant ourselves the context we deny to everyone else.',
      color: 'text-blue-500',
    },
  ]

  const frameworkPoints = [
    {
      icon: Brain,
      title: 'Observe patterns, not moments',
      description: 'One data point is noise. Ten data points begin to show signal. Reserve strong judgments for consistent patterns across time and context.',
      color: 'text-purple-500',
    },
    {
      icon: Heart,
      title: 'Separate context from character',
      description: 'Ask whether the behavior was situationally driven before attributing it to personality. Extraordinary circumstances produce uncharacteristic behavior in almost everyone.',
      color: 'text-red-500',
    },
    {
      icon: Users,
      title: 'Watch how they treat people with no power',
      description: 'How someone treats a waiter, a janitor, or a stranger reveals far more about character than how they treat a boss or someone they want to impress.',
      color: 'text-green-500',
    },
    {
      icon: Scale,
      title: 'Notice their values under pressure',
      description: 'Personality is most visible when someone is stressed or has something to lose. Kindness when it costs nothing is easy. Kindness when it costs something is character.',
      color: 'text-blue-500',
    },
  ]

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
          <div className="flex flex-wrap gap-2 mb-4">
            {['Psychology', 'Behavior', 'Social Science'].map(tag => (
              <span key={tag} className="badge">{tag}</span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 dark:text-stone-100 mb-6 leading-tight">
            Don&apos;t Judge a Person by Their Actions Judge by Their Character
          </h1>

          <p className="text-xl md:text-2xl text-stone-600 dark:text-stone-400 mb-8">
            The psychology behind why a single action is one of the least reliable windows into who a person actually is and what a fairer, more accurate way of seeing people looks like.
          </p>

          <div className="flex items-center gap-6 text-sm text-stone-600 dark:text-stone-400 mb-8">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <time dateTime="2026-05-26">May 26, 2026</time>
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
              src="/articles/judge.jpeg"
              alt="Abstract representation of human psychology and personality"
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
          {/* Introduction */}
          <motion.div variants={fadeInUp} className="mb-12">
            <div className="space-y-6 text-xl md:text-2xl text-stone-700 dark:text-stone-300 leading-relaxed font-light">
              <p>
                You see someone cut in line at a coffee shop. Immediately, a verdict forms in your mind: <em>rude, selfish, inconsiderate.</em> Within seconds, you&apos;ve constructed an entire personality from a single moment. This is one of the most deeply wired cognitive patterns in the human brain and one of the most misleading.
              </p>
              <p>
                Psychology calls it the <strong>Fundamental Attribution Error</strong>, first identified by social psychologist Lee Ross in 1977. It describes our tendency to overweight a person&apos;s character when explaining their behavior, while completely underweighting the situational factors that may have driven it.
              </p>
            </div>
          </motion.div>

          {/* Pull quote */}
          <motion.div variants={fadeInUp} className="mb-16">
            <blockquote className="border-l-4 border-accent-500 pl-8 py-2">
              <p className="text-2xl md:text-3xl font-serif italic text-stone-700 dark:text-stone-300">
                &ldquo;The person who cut the line? Maybe they just received a call that a family member collapsed. You will never know yet the judgment was instant, and it felt certain.&rdquo;
              </p>
            </blockquote>
          </motion.div>

          {/* Section 01 */}
          <motion.section variants={fadeInUp} className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-accent-600 dark:text-accent-400 tracking-widest uppercase">01 Snapshots vs albums</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-6 border-l-4 border-blue-500 pl-6">
              Actions are snapshots. Personality is the album.
            </h2>

            <div className="space-y-6 text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              <p>
                A single photograph doesn&apos;t define a life. Actions work the same way.
              </p>
              <p>
                Every action a person takes is the output of an enormous equation their current stress level, sleep deprivation, past trauma, cultural upbringing, emotional regulation capacity, and the specific pressures of that exact moment. When you judge someone solely by one action, you&apos;re reading one equation output and claiming to know the entire formula.
              </p>
              <p>
                <strong>Personality</strong>, on the other hand, is a pattern. It is consistent, stable across contexts, and reveals itself slowly over time. Psychologists define personality through frameworks like the <strong>Big Five (OCEAN)</strong> Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism. These traits are measured across <em>hundreds</em> of behaviors over <em>months</em> not from a single incident on a Tuesday morning.
              </p>
            </div>

            <div className="mt-8 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-2xl p-6">
              <p className="text-base text-blue-800 dark:text-blue-300 leading-relaxed">
                The Big Five are measured across hundreds of behaviors over months of observation. A single action contributes less than 1% of the signal needed to meaningfully characterize even one trait.
              </p>
            </div>
          </motion.section>

          {/* Section 02 Three biases */}
          <motion.section variants={fadeInUp} className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-accent-600 dark:text-accent-400 tracking-widest uppercase">02 Cognitive biases</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-6 border-l-4 border-red-500 pl-6">
              Why our brains default to harsh judgment
            </h2>

            <div className="space-y-6 text-lg text-stone-700 dark:text-stone-300 leading-relaxed mb-8">
              <p>
                Evolution hardwired us for speed over accuracy. In ancestral environments, quickly deciding whether someone was a threat or an ally was a survival advantage. But today, that same wiring causes what Daniel Kahneman describes in <em>Thinking, Fast and Slow</em> as <strong>System 1 thinking</strong> fast, automatic, and heavily biased.
              </p>
              <p>
                Three major cognitive biases compound this problem:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {biases.map((bias) => {
                const Icon = bias.icon
                return (
                  <div
                    key={bias.title}
                    className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-6"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Icon size={22} className={bias.color} />
                      <h3 className="text-base font-bold text-stone-900 dark:text-stone-100">{bias.title}</h3>
                    </div>
                    <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{bias.description}</p>
                  </div>
                )
              })}
            </div>
          </motion.section>

          {/* Section 03 */}
          <motion.section variants={fadeInUp} className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-accent-600 dark:text-accent-400 tracking-widest uppercase">03 Behavior vs identity</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-6 border-l-4 border-purple-500 pl-6">
              The difference between behavior and identity
            </h2>

            <div className="space-y-6 text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              <p>
                One of the most important distinctions in psychology and in human decency is separating <strong>what a person does</strong> from <strong>who a person is.</strong>
              </p>
              <p>
                A person who lies once is not a liar. A person who loses their temper once is not violent. A person who makes a selfish choice once is not selfish. Now, if those patterns repeat consistently, across contexts, without remorse or awareness <em>then</em> you are observing personality. The difference is evidence gathered over time, not a verdict rendered in a moment.
              </p>
              <p>
                This principle is foundational in <strong>Cognitive Behavioral Therapy (CBT)</strong>. Therapists are trained to help clients separate their <em>behaviors</em> from their <em>core self</em> because fusing the two leads to shame, which is one of the most psychologically destructive emotions a human being can experience. When you externally judge someone by a single action, you are applying to them exactly what CBT tries to undo.
              </p>
            </div>
          </motion.section>

          {/* Section 04 */}
          <motion.section variants={fadeInUp} className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-accent-600 dark:text-accent-400 tracking-widest uppercase">04 Empathy & mentalizing</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-6 border-l-4 border-green-500 pl-6">
              The role of empathy and mentalizing
            </h2>

            <div className="space-y-6 text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              <p>
                Neuroscience reveals that humans have a <strong>Theory of Mind</strong> the capacity to model other people&apos;s internal states, motivations, and experiences. The brain region responsible, the <strong>temporoparietal junction (TPJ)</strong>, activates when we try to understand <em>why</em> someone did something rather than simply <em>what</em> they did.
              </p>
              <p>
                People with high empathy and strong mentalizing capacity naturally pause before judging. They ask: <em>What might this person have been going through? What would drive me to act that way? Is this consistent with who they usually are?</em>
              </p>
              <p>
                This isn&apos;t naivety it&apos;s psychological sophistication. Research consistently shows that people who engage in mentalizing have stronger relationships, more effective leadership skills, and higher emotional intelligence.
              </p>
            </div>

            {/* Pull quote */}
            <blockquote className="mt-10 border-l-4 border-accent-500 pl-8 py-2">
              <p className="text-2xl md:text-3xl font-serif italic text-stone-700 dark:text-stone-300">
                &ldquo;Understanding is not the same as excusing. You can hold both truths at once.&rdquo;
              </p>
            </blockquote>
          </motion.section>

          {/* Section 05 Framework */}
          <motion.section variants={fadeInUp} className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-accent-600 dark:text-accent-400 tracking-widest uppercase">05 A fairer framework</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-8 border-l-4 border-orange-500 pl-6">
              How to actually assess someone&apos;s character
            </h2>

            <div className="space-y-6 text-lg text-stone-700 dark:text-stone-300 leading-relaxed mb-8">
              <p>
                If not by actions alone, then how should we assess people? Here is a psychologically grounded framework:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {frameworkPoints.map((point) => {
                const Icon = point.icon
                return (
                  <div
                    key={point.title}
                    className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-6"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Icon size={22} className={point.color} />
                      <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">{point.title}</h3>
                    </div>
                    <p className="text-base text-stone-600 dark:text-stone-400 leading-relaxed">{point.description}</p>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800 rounded-2xl p-6">
              <p className="text-base text-orange-800 dark:text-orange-300 leading-relaxed">
                <strong>One more signal:</strong> watch how they handle being wrong. Accountability, genuine apology, and behavior change after a mistake reveal more about a person&apos;s character than the mistake itself ever could.
              </p>
            </div>
          </motion.section>

          {/* Section 06 */}
          <motion.section variants={fadeInUp} className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-accent-600 dark:text-accent-400 tracking-widest uppercase">06 The real cost</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-6 border-l-4 border-stone-500 pl-6">
              The cost of getting this wrong
            </h2>

            <div className="space-y-6 text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              <p>
                The consequences of misjudging people by their actions are not merely philosophical they are deeply practical. In the workplace, premature judgments create <strong>toxic team dynamics</strong>, destroy psychological safety, and cause organizations to lose high-potential people who made early mistakes.
              </p>
              <p>
                In personal relationships, judgment-by-action is one of the primary drivers of <strong>social isolation</strong>. People who feel they are being reduced to their worst moments stop being authentic. They perform. They withdraw. Connection becomes impossible.
              </p>
              <p>
                In public life, our collective failure to distinguish actions from character fuels <strong>cancel culture, tribal polarization, and the erosion of nuance</strong> in discourse. We become a society that confuses accountability with permanent condemnation and loses the ability to believe in change.
              </p>
            </div>
          </motion.section>

          {/* Section 07 */}
          <motion.section variants={fadeInUp} className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-accent-600 dark:text-accent-400 tracking-widest uppercase">07 Conclusion</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-6 border-l-4 border-accent-500 pl-6">
              Slow down the verdict
            </h2>

            <div className="space-y-6 text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              <p>
                The philosopher Martin Buber described two modes of relating to others: <strong>I-It</strong> treating people as objects defined by their functions and behaviors and <strong>I-Thou</strong> relating to them as full, complex, irreducible human beings. Judging a person by their actions alone is an I-It relationship. It reduces them to data points.
              </p>
              <p>
                Seeking to understand their personality their fears, their values, their patterns, their potential is the I-Thou relationship. It is also, as psychology consistently demonstrates, the more accurate one.
              </p>
              <p>
                The next time someone&apos;s action triggers your judgment, treat that reaction as a <strong>hypothesis, not a conclusion.</strong> Ask what else might explain it. Ask whether you&apos;ve seen this behavior before, in other contexts. Ask what kind of person they appear to be across time not just in this moment.
              </p>
              <p>
                That pause that psychological breath is not weakness. It is one of the most sophisticated things the human mind is capable of. It is the difference between reacting and understanding. Between reducing people and actually knowing them.
              </p>
            </div>

            <blockquote className="mt-10 border-l-4 border-accent-500 pl-8 py-2">
              <p className="text-2xl md:text-3xl font-serif italic text-stone-700 dark:text-stone-300">
                &ldquo;Judge the pattern. Understand the person. Those two things are not the same.&rdquo;
              </p>
            </blockquote>

            <div className="mt-10 bg-stone-100 dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-6">
              <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed italic">
                Written through the lens of social psychology, cognitive science, and humanistic psychology. References: Fundamental Attribution Error (Ross, 1977), Big Five Personality Framework, Kahneman&apos;s System 1 &amp; 2 thinking, Brené Brown&apos;s shame research, CBT identity-behavior distinction, Martin Buber&apos;s I-Thou philosophy.
              </p>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </article>
  )
}
