'use client'

import { Calendar, Clock, ArrowLeft, TrendingDown, Users, Zap, AlertTriangle, RefreshCw, Building, Wheat, Hammer, Smartphone, Home, HeartHandshake, Sprout } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function SocialMediaCollapseArticle() {
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
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-stone-50 dark:bg-stone-950 border-b border-stone-200 dark:border-stone-800 sticky top-0 z-50 backdrop-blur-sm bg-white/90 dark:bg-stone-950/90"
      >
        <div className="container mx-auto px-4 md:px-8 py-6">
          <Link
            href="/#articles"
            className="inline-flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Articles
          </Link>
        </div>
      </motion.div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 dark:text-stone-100 mb-6 leading-tight">
            Why Social Media Will Fall Just Like Every Great Civilization Before It
          </h1>

          <p className="text-xl md:text-2xl text-stone-600 dark:text-stone-400 mb-8">
            The inevitable collapse of social media follows the same pattern that destroyed Rome, the Mayans, and the Soviet Union
          </p>

          <div className="flex items-center gap-6 text-sm text-stone-600 dark:text-stone-400 mb-8">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <time dateTime="2026-05-08">May 8, 2026</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>12 min read</span>
            </div>
          </div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 shadow-2xl"
          >
            <Image
              src="/articles/civilization_collapse.jpeg"
              alt="The collapse of civilizations throughout history"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 md:px-8 pb-20">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          {/* Lead Paragraph */}
          <motion.div variants={fadeInUp} className="mb-12">
            <p className="text-xl md:text-2xl text-stone-700 dark:text-stone-300 leading-relaxed font-light">
              Every big civilization in history has collapsed for one simple reason. The life people were promised stopped matching the life they were actually living. And when that gap got too big to ignore, people stopped believing, and the whole thing fell apart. This has happened before. Many times. And right now, it is happening again. This time, the thing falling apart is social media.
            </p>
          </motion.div>

          {/* The Gap That Kills Civilizations */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-6 border-l-4 border-red-500 pl-6">
              The Gap That Kills Civilizations
            </h2>

            <div className="space-y-6 text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              <p>
                Think about it simply. When you tell people &quot;life is great, things are getting better, trust the system,&quot; but their daily life tells a completely different story, something breaks inside them. Not immediately. Slowly. But eventually, they stop pretending.
              </p>

              <p>
                Rome did this. For centuries, Rome told its people they were part of something eternal and powerful. But behind that story, the roads were crumbling, food was expensive, leaders were corrupt, and ordinary people were struggling. The idea of Rome and the reality of Rome became two different things. People didn&apos;t just get defeated by an enemy. They simply stopped caring about defending a lie.
              </p>

              <p>
                The Mayan cities did this, too. The kings and priests told the people, &quot;We speak to the gods, we control the rain, we keep you safe.&quot; People believed it and worked hard, paid their taxes, and followed the rules. Then the rains stopped coming. The crops failed. The kings still held their ceremonies, still wore their gold, but the results were gone. When the promise no longer matched real life, the people walked away. Literally, they left entire cities empty.
              </p>

              <p>
                The Soviet Union did this in modern times. The government told citizens they were living in a perfect society, a worker&apos;s paradise. But everyone knew the truth: the empty shelves, the long lines, the fear, the lies on the news. For decades, people just played along. Then one day, they stopped. The whole system collapsed not because of a war, but because nobody believed the story anymore.
              </p>

              <p>
                The pattern is always the same. Promise one thing. Deliver another. Keep the gap hidden. Eventually, the gap gets too wide. Everything falls.
              </p>
            </div>

            {/* Civilization Collapse Timeline */}
            <motion.div
              variants={fadeInUp}
              className="my-12 bg-stone-50 dark:bg-stone-800/30 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-6 flex items-center gap-3">
                <TrendingDown className="text-red-500" size={24} />
                Historical Pattern of Collapse
              </h3>

              <div className="space-y-6">
                {[
                  { civilization: 'Roman Empire', year: '476 CE', cause: 'Gap between imperial glory and daily struggle', icon: Building },
                  { civilization: 'Mayan Civilization', year: '900 CE', cause: 'Gap between divine promises and environmental reality', icon: Wheat },
                  { civilization: 'Soviet Union', year: '1991', cause: 'Gap between communist ideals and economic reality', icon: Hammer },
                  { civilization: 'Social Media', year: '2020s', cause: 'Gap between curated perfection and authentic life', icon: Smartphone }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-white dark:bg-stone-800/50 rounded-lg border border-stone-200 dark:border-stone-700">
                    <item.icon className="text-2xl text-accent-600 dark:text-accent-400 mt-1" size={24} />
                    <div className="flex-1">
                      <div className="font-bold text-stone-900 dark:text-stone-100">{item.civilization}</div>
                      <div className="text-sm text-stone-600 dark:text-stone-400 mb-2">{item.year}</div>
                      <div className="text-stone-700 dark:text-stone-300">{item.cause}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.section>

          {/* Social Media Built the Same Trap */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-6 border-l-4 border-blue-500 pl-6">
              Social Media Built the Same Trap
            </h2>

            <div className="space-y-6 text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              <p>
                Social media did exactly what these old civilizations did. It created a version of life that looked amazing and told everyone that this was normal.
              </p>

              <p>
                You open your phone, and you see: perfect bodies, beautiful holidays, happy couples, successful careers, confident people living their best life every single day. The message your brain receives is clear: this is how other people are living. Why isn&apos;t your life like this?
              </p>

              <p>
                But here&apos;s the truth. Nobody&apos;s real life looks like their social media. The person posting the perfect holiday photo was stressed about money the week before. The couple that looks happy online had a big argument that morning. The fitness transformation took years and a professional photographer. The &quot;casual&quot; photo was taken forty times before it was posted.
              </p>

              <p>
                Social media was never real life. It was a performance of life. Everyone was showing their highlight reel while hiding their everyday reality.
              </p>

              <p>
                And slowly, this created the same gap that destroyed Rome and the Mayans. The expected life, the one you see on screen, looked nothing like the real life you were actually living. And that gap made people feel like failures, feel lonely, feel like they were somehow doing life wrong.
              </p>

              <p>
                The promise was: connect with people, feel inspired, share your life. The reality was: feel worse about yourself, compare constantly, perform for strangers who don&apos;t actually care about you.
              </p>
            </div>

            {/* Promise vs Reality Comparison */}
            <motion.div
              variants={fadeInUp}
              className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
                <h4 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
                  <Users className="text-green-600" size={20} />
                  The Promise
                </h4>
                <ul className="space-y-2 text-green-700 dark:text-green-300">
                  <li>• Connect with real people</li>
                  <li>• Share authentic moments</li>
                  <li>• Build meaningful relationships</li>
                  <li>• Feel inspired and motivated</li>
                  <li>• Discover new opportunities</li>
                </ul>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
                <h4 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4 flex items-center gap-2">
                  <AlertTriangle className="text-red-600" size={20} />
                  The Reality
                </h4>
                <ul className="space-y-2 text-red-700 dark:text-red-300">
                  <li>• Constant comparison and envy</li>
                  <li>• Perform for algorithm approval</li>
                  <li>• Shallow, fleeting connections</li>
                  <li>• Anxiety and self-doubt</li>
                  <li>• Privacy erosion and data exploitation</li>
                </ul>
              </div>
            </motion.div>
          </motion.section>

          {/* AI Is About to Make It Worse */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-6 border-l-4 border-purple-500 pl-6">
              AI Is About to Make It Worse Much Worse
            </h2>

            <div className="space-y-6 text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              <p>
                Just when social media was already starting to crack, AI arrived. And AI is going to do something that none of the old civilizations had to deal with; it is going to make it impossible to tell what is even real anymore.
              </p>

              <p>
                Right now, AI can:
              </p>

              <ul className="space-y-2 ml-6">
                <li>• Create photos of people who do not exist</li>
                <li>• Write captions and profiles that sound completely human</li>
                <li>• Make videos of things that never happened</li>
                <li>• Build fake accounts that feel like real communities</li>
              </ul>

              <p>
                Social media already had a problem with people showing fake versions of their lives. Now, with AI, there might not even be a real person behind the post at all.
              </p>

              <p>
                Think about what that means. The whole point of social media was that somewhere, behind all the filters and the perfect angles, there was a real human being who had a real experience. That was the foundation, even if everything looked polished, at least it was someone&apos;s real life.
              </p>

              <p>
                AI removes that foundation completely.
              </p>

              <p>
                When you can&apos;t tell if a photo is real or generated, if a comment came from a person or a bot, if the community you&apos;re in is made of real humans or fake accounts, why would you keep using it? What exactly are you participating in?
              </p>
            </div>

            {/* AI Impact Visualization */}
            <motion.div
              variants={fadeInUp}
              className="my-12 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-200 dark:border-purple-800 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-6 flex items-center gap-3">
                <Zap className="text-purple-500" size={24} />
                AI&apos;s Impact on Trust
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-6xl font-bold text-green-600 dark:text-green-400 mb-2">100%</div>
                  <div className="text-stone-700 dark:text-stone-300">Trust in Traditional Social Media</div>
                  <div className="text-sm text-stone-500 dark:text-stone-400 mt-1">At least someone real was behind it</div>
                </div>

                <div className="text-center">
                  <div className="text-6xl font-bold text-red-600 dark:text-red-400 mb-2">0%</div>
                  <div className="text-stone-700 dark:text-stone-300">Trust in AI-Generated Content</div>
                  <div className="text-sm text-stone-500 dark:text-stone-400 mt-1">No guarantee of human authenticity</div>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* People Are Already Quietly Walking Away */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-6 border-l-4 border-orange-500 pl-6">
              People Are Already Quietly Walking Away
            </h2>

            <div className="space-y-6 text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              <p>
                This hasn&apos;t fully happened yet. But the early signs are everywhere.
              </p>

              <p>
                Young people, the ones who grew up with social media, are the most burned out by it. They know better than anyone how fake it is, because they grew up making the fake content. They know how long the photo took. They know the caption was rewritten five times. They know the &quot;spontaneous&quot; moment was planned.
              </p>

              <p>
                Many of them are already quietly stepping back. Not making a big announcement about quitting. Just... using it less. Going out more. Calling friends instead of posting. Living moments without filming them first.
              </p>

              <p>
                This is exactly what happened before civilizations collapsed. People didn&apos;t always fight back loudly. They just quietly stopped participating. Roman citizens stopped enlisting in the army. Mayan farmers stopped going to ceremonies. Soviet citizens stopped repeating the government&apos;s words, even in private.
              </p>

              <p>
                When enough people quietly stop believing, the whole system loses its power even if it still technically exists.
              </p>
            </div>
          </motion.section>

          {/* What Comes After */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-6 border-l-4 border-teal-500 pl-6">
              What Comes After
            </h2>

            <div className="space-y-6 text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              <p>
                History is actually hopeful here. When one big false reality collapses, people don&apos;t just give up on life. They go back to something more honest. Something smaller, more real, more local.
              </p>

              <p>
                After the big systems failed, people built tighter communities. They valued things they could actually touch and verify. They trusted people they actually knew.
              </p>

              <p>
                That is probably where we are heading. Not the end of the internet, not the end of human connection, but the end of the specific machine that turned your life into content and your attention into a product.
              </p>

              <p>
                Something more real will replace it. It usually does.
              </p>
            </div>

            {/* Future Vision */}
            <motion.div
              variants={fadeInUp}
              className="my-12 bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-6 flex items-center gap-3">
                <RefreshCw className="text-teal-500" size={24} />
                The Future of Connection
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { icon: Home, title: 'Local Communities', desc: 'Real relationships with people nearby' },
                  { icon: HeartHandshake, title: 'Authentic Sharing', desc: 'Honest conversations without performance' },
                  { icon: Sprout, title: 'Meaningful Growth', desc: 'Personal development over social validation' }
                ].map((item, idx) => (
                  <div key={idx} className="text-center p-4 bg-white dark:bg-stone-800/50 rounded-lg">
                    <item.icon className="text-3xl text-accent-600 dark:text-accent-400 mb-2" size={32} />
                    <div className="font-bold text-stone-900 dark:text-stone-100 mb-1">{item.title}</div>
                    <div className="text-sm text-stone-600 dark:text-stone-400">{item.desc}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.section>

          {/* The Simple Truth */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-6 border-l-4 border-stone-500 pl-6">
              The Simple Truth
            </h2>

            <div className="space-y-6 text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              <p>
                Every civilization that ever collapsed was brought down by the same thing. The story being told stopped matching the life being lived. Social media told us a beautiful story for fifteen years. AI is now making that story impossible to believe at all.
              </p>

              <p>
                The gap has gotten too wide. And history is very clear about what happens next.
              </p>

              <p>
                People walk away. And then they build something better.
              </p>

              <p>
                The old civilizations didn&apos;t fall because people were weak. They fell because even the strongest person can only live inside a lie for so long.
              </p>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </article>
  )
}