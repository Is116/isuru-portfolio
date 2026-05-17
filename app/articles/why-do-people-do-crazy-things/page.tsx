'use client'

import { Calendar, Clock, ArrowLeft, Brain, Scale, AlertTriangle, Heart, Building2, Users } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function WhyPeopleDoCrazyThingsArticle() {
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

  const factors = [
    {
      icon: Heart,
      title: 'No sense of self-worth',
      description: 'When a person genuinely believes they have no value, self-preservation weakens. Risky and destructive behavior becomes easier there is nothing to protect.',
      color: 'text-red-500',
    },
    {
      icon: Scale,
      title: 'Inequality & injustice',
      description: 'Feeling permanently below others in wealth, status, or opportunity generates deep shame and rage. Extreme acts can feel like the only way to restore a sense of power.',
      color: 'text-orange-500',
    },
    {
      icon: AlertTriangle,
      title: 'Unmet basic needs',
      description: "Maslow's hierarchy isn't just theory. People who lack food, safety, shelter, or belonging operate in survival mode and survival mode overrides long-term rational thinking.",
      color: 'text-yellow-500',
    },
    {
      icon: Brain,
      title: 'No viable future',
      description: 'Planning requires hope. When every path forward seems blocked by poverty, discrimination, or a broken system the future shrinks to the present moment only.',
      color: 'text-purple-500',
    },
    {
      icon: Building2,
      title: 'Institutional corruption',
      description: 'When governments, institutions, and systems are visibly corrupt, people lose faith in legitimate pathways. Why follow rules that the powerful openly ignore?',
      color: 'text-blue-500',
    },
    {
      icon: Users,
      title: 'Social disconnection',
      description: 'Isolation is not just uncomfortable it is clinically dangerous. Disconnected people are far more vulnerable to radicalization, addiction, and impulsive extremism.',
      color: 'text-green-500',
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
            {['Psychology', 'Society', 'Social Science'].map(tag => (
              <span key={tag} className="badge">{tag}</span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 dark:text-stone-100 mb-6 leading-tight">
            Why Do People Do &lsquo;Crazy&rsquo; Things?
          </h1>

          <p className="text-xl md:text-2xl text-stone-600 dark:text-stone-400 mb-8">
            It&apos;s not just loose rules or moral failure. Behind every extreme act lies a web of unmet needs, broken self-worth, social inequality, and a future that feels impossible to plan for.
          </p>

          <div className="flex items-center gap-6 text-sm text-stone-600 dark:text-stone-400 mb-8">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <time dateTime="2026-05-17">May 17, 2026</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>12 min read</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 shadow-2xl"
          >
            <Image
              src="/articles/corruption.jpeg"
              alt="An abstract representation of social breakdown and human behavior under pressure"
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
                When we witness someone doing something that seems irrational dangerous, destructive, or self-sabotaging our first instinct is often to judge. &ldquo;They must be crazy.&rdquo; &ldquo;There are no rules anymore.&rdquo; But psychology and social science tell a far more complex and compassionate story.
              </p>
              <p>
                Human behavior, even at its most extreme, is almost never random. It is a response to internal pain, to social conditions, to a world that has repeatedly communicated to someone that they do not matter.
              </p>
            </div>
          </motion.div>

          {/* Pull quote */}
          <motion.div variants={fadeInUp} className="mb-16">
            <blockquote className="border-l-4 border-accent-500 pl-8 py-2">
              <p className="text-2xl md:text-3xl font-serif italic text-stone-700 dark:text-stone-300">
                &ldquo;People don&apos;t lose their minds in a vacuum. They lose them in a context.&rdquo;
              </p>
            </blockquote>
          </motion.div>

          {/* Section 01 */}
          <motion.section variants={fadeInUp} className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-accent-600 dark:text-accent-400 tracking-widest uppercase">01 The rules argument</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-6 border-l-4 border-blue-500 pl-6">
              Is it really about loosened rules?
            </h2>

            <div className="space-y-6 text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              <p>
                Many people blame extreme behavior on the erosion of social norms fewer rules, less discipline, less respect for authority. And while social structure does shape behavior, this explanation alone is dangerously incomplete.
              </p>
              <p>
                Rules only work when people feel they have something to lose by breaking them. When someone sees no future, feels no belonging, and holds no self-worth, external rules lose their grip. You cannot scare someone into compliance who already feels they have nothing. Compliance is rooted in hope and hope requires a system that seems fair and reachable.
              </p>
            </div>

            <div className="mt-8 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-2xl p-6">
              <p className="text-base text-blue-800 dark:text-blue-300 leading-relaxed">
                Research consistently shows that crime, self-destruction, and social deviance spike not just when rules are absent, but when inequality is high and social trust collapses regardless of how strict the laws are.
              </p>
            </div>
          </motion.section>

          {/* Section 02 Six factors */}
          <motion.section variants={fadeInUp} className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-accent-600 dark:text-accent-400 tracking-widest uppercase">02 The deeper forces</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-8 border-l-4 border-purple-500 pl-6">
              Six psychological and social roots
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {factors.map((factor) => {
                const Icon = factor.icon
                return (
                  <div
                    key={factor.title}
                    className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-6"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Icon size={22} className={factor.color} />
                      <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">{factor.title}</h3>
                    </div>
                    <p className="text-base text-stone-600 dark:text-stone-400 leading-relaxed">{factor.description}</p>
                  </div>
                )
              })}
            </div>
          </motion.section>

          {/* Section 03 */}
          <motion.section variants={fadeInUp} className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-accent-600 dark:text-accent-400 tracking-widest uppercase">03 Self-worth</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-6 border-l-4 border-red-500 pl-6">
              The crisis of feeling worthless
            </h2>

            <div className="space-y-6 text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              <p>
                Self-worth is not vanity. It is the psychological foundation that allows a person to make decisions with a long-term perspective. When someone genuinely believes they are worthless not just as a passing thought, but as a deep conviction they stop naturally weighing consequences. The question &ldquo;what will this cost me later?&rdquo; only matters if you believe you have a &ldquo;later&rdquo; worth protecting.
              </p>
              <p>
                This is why shame is one of the most dangerous human emotions. Psychologist Brené Brown&apos;s research shows that shame unlike guilt is not about what you did, but who you are. And when a society constantly signals to certain groups that they are inferior, dispensable, or unworthy, it plants seeds of shame that can eventually explode outward or inward.
              </p>
            </div>
          </motion.section>

          {/* Section 04 */}
          <motion.section variants={fadeInUp} className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-accent-600 dark:text-accent-400 tracking-widest uppercase">04 Inequality</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-6 border-l-4 border-orange-500 pl-6">
              When the system feels rigged
            </h2>

            <div className="space-y-6 text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              <p>
                Social psychologists have studied what happens when people feel the playing field is permanently unfair. The results are consistent: people in highly unequal societies show higher rates of mental illness, violence, addiction, and distrust regardless of their absolute wealth level.
              </p>
              <p>
                It is not poverty alone that breaks people. It is the combination of poverty and the daily visibility of extreme wealth nearby. Inequality is not just an economic condition it is a psychological injury. It communicates, constantly, that some lives are worth more than others.
              </p>
            </div>

            {/* Pull quote */}
            <blockquote className="mt-10 border-l-4 border-accent-500 pl-8 py-2">
              <p className="text-2xl md:text-3xl font-serif italic text-stone-700 dark:text-stone-300">
                &ldquo;When people believe the system will never work for them, they stop working for the system.&rdquo;
              </p>
            </blockquote>
          </motion.section>

          {/* Section 05 */}
          <motion.section variants={fadeInUp} className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-accent-600 dark:text-accent-400 tracking-widest uppercase">05 Basic needs</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-6 border-l-4 border-yellow-500 pl-6">
              Survival mode hijacks rational thinking
            </h2>

            <div className="space-y-6 text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              <p>
                Neuroscience has confirmed what Maslow described decades ago: when the brain is operating under conditions of deprivation hunger, fear, unsafe housing, chronic stress the prefrontal cortex (responsible for planning, judgment, and impulse control) becomes effectively suppressed. The brain shifts to the limbic system, which governs fight-or-flight responses.
              </p>
              <p>
                In other words, a person who is constantly struggling to survive is literally working with reduced access to the parts of the brain that make careful, long-term decisions. This is not weakness of character. It is neurobiology. Blaming someone in survival mode for &ldquo;bad choices&rdquo; is like blaming someone running from a fire for not checking the weather forecast.
              </p>
            </div>
          </motion.section>

          {/* Section 06 */}
          <motion.section variants={fadeInUp} className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-accent-600 dark:text-accent-400 tracking-widest uppercase">06 Corruption &amp; society</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-6 border-l-4 border-green-500 pl-6">
              When the future is stolen by the system
            </h2>

            <div className="space-y-6 text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              <p>
                One of the most psychologically devastating forces in a society is visible, unpunished corruption. When people watch politicians steal openly, when justice is only for those who can afford it, when every institution seems captured by self-interest it does something profound to the human psyche.
              </p>
              <p>
                It destroys what psychologists call future orientation the ability to delay gratification and plan ahead. Why save money in a system that devalues your currency? Why build a career in a sector that rewards connections over merit? Why follow the law when those who write the laws break them freely? Corruption doesn&apos;t just steal money. It steals the psychological architecture of hope.
              </p>
            </div>

            <div className="mt-8 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-2xl p-6">
              <p className="text-base text-green-800 dark:text-green-300 leading-relaxed">
                Studies on countries with high corruption perception scores consistently show lower rates of civic trust, higher rates of psychological distress, and a tendency toward short-termism and risk-taking across the population not just among individuals directly harmed by corruption.
              </p>
            </div>
          </motion.section>

          {/* Section 07 */}
          <motion.section variants={fadeInUp} className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs text-accent-600 dark:text-accent-400 tracking-widest uppercase">07 What this means</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-6 border-l-4 border-stone-500 pl-6">
              A call for understanding, not excuses
            </h2>

            <div className="space-y-6 text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              <p>
                None of this is to excuse harmful behavior. People still bear responsibility for their actions. But understanding why people reach breaking points is not about giving them a pass it is about building societies that don&apos;t produce so many breaking points in the first place.
              </p>
              <p>
                The &ldquo;crazy&rdquo; person is often a person who ran out of options, ran out of hope, and ran out of reasons to believe the normal path would ever work for them. Address the self-worth crisis. Reduce inequality. Meet basic needs. Fight corruption. Rebuild social trust. The behavior will follow not because people changed, but because the conditions that produced the behavior changed first.
              </p>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </article>
  )
}
