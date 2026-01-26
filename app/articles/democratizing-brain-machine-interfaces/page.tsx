'use client'

import { Calendar, Clock, ArrowLeft, Target, Zap, DollarSign, Cpu, Brain, Waves, Code, ChevronRight, Lightbulb, Users, TrendingUp, Rocket } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function BrainMachineInterfaceArticle() {
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
    <article className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 backdrop-blur-sm bg-white/90 dark:bg-gray-950/90"
      >
        <div className="container mx-auto px-4 md:px-8 py-6">
          <Link 
            href="/#articles" 
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors group"
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Democratizing Brain-Machine Interfaces
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
            What You Can Do With Affordable Devices and Circuits
          </p>
          
          <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <time dateTime="2026-01-26">January 26, 2026</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>18 min read</span>
            </div>
          </div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl"
          >
            <Image
              src="/articles/human_brain.png"
              alt="Human Brain - Brain-Machine Interface"
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
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
              Brain-Machine Interfaces (BMIs), also known as Brain-Computer Interfaces (BCIs), are no longer confined to expensive research laboratories or science fiction. Thanks to technological advances and the democratization of neurotechnology, you can now explore the fascinating world of direct brain-to-computer communication with devices and circuits that cost anywhere from under $30 for DIY solutions to around $300 for consumer-grade devices. This revolution is putting the power of neurotechnology into the hands of students, hobbyists, and independent researchers worldwide.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.section variants={fadeInUp} className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { number: '$30', label: 'Starting Price for DIY BMI' },
                { number: '40Hz', label: 'EEG Sampling Rate Achievable' },
                { number: '5+', label: 'Brain Wave Frequency Bands' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800/50 border border-accent-200 dark:border-accent-500/30 rounded-xl p-8 text-center hover:transform hover:-translate-y-1 transition-all shadow-lg hover:shadow-accent-500/20">
                  <div className="text-5xl font-bold text-accent-600 dark:text-accent-400 mb-2">{stat.number}</div>
                  <div className="text-gray-700 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Understanding BMI Section */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-accent-500 pl-6">
              Understanding Brain-Machine Interfaces
            </h2>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                A brain-machine interface creates a direct communication pathway between the brain&apos;s electrical activity and an external device. Most affordable BMI systems use electroencephalography (EEG), which detects electrical signals generated by neurons through electrodes placed on the scalp. These non-invasive systems are safe, portable, and increasingly accessible to hobbyists, students, and researchers worldwide.
              </p>
              <p>
                The brain generates distinct patterns of electrical activity in different frequency bands: Delta (0.5-4 Hz) for deep sleep, Theta (4-8 Hz) for drowsiness and meditation, Alpha (8-13 Hz) for relaxed awareness, Beta (13-30 Hz) for active thinking and focus, and Gamma (30+ Hz) for high-level cognitive processing. By detecting and interpreting these patterns, affordable BMI systems enable various applications from meditation training to device control.
              </p>
            </div>

            {/* Brain Waves Visualization */}
            <div className="bg-white dark:bg-gray-800/50 border-2 border-accent-200 dark:border-accent-500/30 rounded-2xl p-6 md:p-10 my-12 shadow-2xl">
              <h3 className="text-xl font-bold text-center text-accent-600 dark:text-accent-400 mb-8">Brain Wave Frequency Bands</h3>
              
              <svg viewBox="0 0 800 500" className="w-full h-auto">
                {/* Delta */}
                <rect className="fill-blue-50 dark:fill-blue-900/20 stroke-blue-500 stroke-2" x="50" y="50" width="700" height="80" rx="8"/>
                <text className="fill-blue-700 dark:fill-blue-400 font-bold" x="80" y="80" textAnchor="start">Delta (0.5-4 Hz)</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-sm" x="80" y="105" textAnchor="start">Deep Sleep, Unconscious</text>
                <path d="M 400 70 Q 420 60, 440 70 T 480 70 T 520 70 T 560 70" className="stroke-blue-500 fill-none stroke-2"/>
                
                {/* Theta */}
                <rect className="fill-purple-50 dark:fill-purple-900/20 stroke-purple-500 stroke-2" x="50" y="150" width="700" height="80" rx="8"/>
                <text className="fill-purple-700 dark:fill-purple-400 font-bold" x="80" y="180" textAnchor="start">Theta (4-8 Hz)</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-sm" x="80" y="205" textAnchor="start">Drowsiness, Meditation, Creativity</text>
                <path d="M 400 170 Q 410 160, 420 170 T 440 170 T 460 170 T 480 170 T 500 170 T 520 170 T 540 170 T 560 170" className="stroke-purple-500 fill-none stroke-2"/>
                
                {/* Alpha */}
                <rect className="fill-green-50 dark:fill-green-900/20 stroke-green-500 stroke-2" x="50" y="250" width="700" height="80" rx="8"/>
                <text className="fill-green-700 dark:fill-green-400 font-bold" x="80" y="280" textAnchor="start">Alpha (8-13 Hz)</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-sm" x="80" y="305" textAnchor="start">Relaxed Awareness, Eyes Closed</text>
                <path d="M 400 270 Q 405 260, 410 270 T 420 270 T 430 270 T 440 270 T 450 270 T 460 270 T 470 270 T 480 270 T 490 270 T 500 270 T 510 270 T 520 270 T 530 270 T 540 270 T 550 270 T 560 270" className="stroke-green-500 fill-none stroke-2"/>
                
                {/* Beta */}
                <rect className="fill-orange-50 dark:fill-orange-900/20 stroke-orange-500 stroke-2" x="50" y="350" width="700" height="80" rx="8"/>
                <text className="fill-orange-700 dark:fill-orange-400 font-bold" x="80" y="380" textAnchor="start">Beta (13-30 Hz)</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-sm" x="80" y="405" textAnchor="start">Active Thinking, Focus, Concentration</text>
                <path d="M 400 370 Q 402 365, 404 370 T 408 370 T 412 370 T 416 370 T 420 370 T 424 370 T 428 370 T 432 370 T 436 370 T 440 370 T 444 370 T 448 370 T 452 370 T 456 370 T 460 370 T 464 370 T 468 370 T 472 370 T 476 370 T 480 370 T 484 370 T 488 370 T 492 370 T 496 370 T 500 370 T 504 370 T 508 370 T 512 370 T 516 370 T 520 370 T 524 370 T 528 370 T 532 370 T 536 370 T 540 370 T 544 370 T 548 370 T 552 370 T 556 370 T 560 370" className="stroke-orange-500 fill-none stroke-2"/>
              </svg>
            </div>
          </motion.section>

          {/* Affordable BMI Landscape */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-accent-500 pl-6">
              The Affordable BMI Landscape
            </h2>

            {/* Price Tiers */}
            <div className="space-y-8">
              {/* Ultra-Budget DIY */}
              <div className="bg-white dark:bg-gray-800/50 border-2 border-accent-200 dark:border-accent-500/30 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <DollarSign className="w-12 h-12 text-green-600 dark:text-green-400" />
                  <div>
                    <h3 className="text-2xl font-bold text-accent-600 dark:text-accent-400">Ultra-Budget DIY Solutions</h3>
                    <p className="text-gray-600 dark:text-gray-400">$20 - $100</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    The most affordable entry point involves building your own device using Arduino microcontrollers and salvaged or inexpensive components. Research from the University of Houston (2023) demonstrates that commercial off-the-shelf components can create wireless EEG headsets capable of processing data at 40 Hz with machine learning capabilities.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 border border-accent-200 dark:border-accent-500/30">
                      <h4 className="font-bold text-accent-600 dark:text-accent-400 mb-2">Modified MindFlex Hack</h4>
                      <p className="text-sm">Repurpose the Mattel MindFlex toy ($20-40 used) containing a NeuroSky TGAM chip. Interface with Arduino to extract raw EEG data and control external devices.</p>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 border border-accent-200 dark:border-accent-500/30">
                      <h4 className="font-bold text-accent-600 dark:text-accent-400 mb-2">AD8232-Based EEG Monitor</h4>
                      <p className="text-sm">Build a functional EEG monitor for under $30 using the AD8232 heart monitor module with circuit modifications for brainwave detection.</p>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 border border-accent-200 dark:border-accent-500/30">
                      <h4 className="font-bold text-accent-600 dark:text-accent-400 mb-2">PiEEG & ardEEG</h4>
                      <p className="text-sm">Complete kits for measuring EEG, EMG, and ECG with Raspberry Pi or Arduino. Modular designs support 8-64 channels at low cost.</p>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 border border-accent-200 dark:border-accent-500/30">
                      <h4 className="font-bold text-accent-600 dark:text-accent-400 mb-2">What You Can Build</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Real-time brainwave visualization</li>
                        <li>• Meditation tracking</li>
                        <li>• Simple control interfaces</li>
                        <li>• Educational projects</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consumer Entry-Level */}
              <div className="bg-white dark:bg-gray-800/50 border-2 border-accent-200 dark:border-accent-500/30 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <Users className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                  <div>
                    <h3 className="text-2xl font-bold text-accent-600 dark:text-accent-400">Consumer Entry-Level Devices</h3>
                    <p className="text-gray-600 dark:text-gray-400">$100 - $300</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6 border border-blue-300 dark:border-blue-600/30">
                    <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-3 text-lg">NeuroSky MindWave Mobile 2</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">~$100</p>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                      <li>• Single-channel EEG</li>
                      <li>• Attention & meditation metrics</li>
                      <li>• Free developer SDK</li>
                      <li>• Brain-training games</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-purple-300 dark:border-purple-600/30">
                    <h4 className="font-bold text-purple-700 dark:text-purple-400 mb-3 text-lg">Muse Headband</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">~$250-$350</p>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                      <li>• 4-7 EEG channels</li>
                      <li>• Heart rate, breathing sensors</li>
                      <li>• Real-time audio feedback</li>
                      <li>• 20% sleep quality improvement</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-300 dark:border-green-600/30">
                    <h4 className="font-bold text-green-700 dark:text-green-400 mb-3 text-lg">PiEEG-16</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">~$200-$300</p>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                      <li>• 16 EEG channels</li>
                      <li>• Open-source platform</li>
                      <li>• Raspberry Pi compatible</li>
                      <li>• Custom BCI development</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Mid-Range Research */}
              <div className="bg-white dark:bg-gray-800/50 border-2 border-accent-200 dark:border-accent-500/30 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <TrendingUp className="w-12 h-12 text-orange-600 dark:text-orange-400" />
                  <div>
                    <h3 className="text-2xl font-bold text-accent-600 dark:text-accent-400">Mid-Range Research-Friendly</h3>
                    <p className="text-gray-600 dark:text-gray-400">$300 - $1,000</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6 border border-accent-200 dark:border-accent-500/30">
                    <h4 className="font-bold text-accent-600 dark:text-accent-400 mb-3">OpenBCI Systems</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">$500-$1,500</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Modular, open-source biosensing platforms measuring EEG, EMG, and ECG. The Cyton Board offers 8-16 channels with 3D-printable headsets, providing research-grade quality at a fraction of traditional costs.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6 border border-accent-200 dark:border-accent-500/30">
                    <h4 className="font-bold text-accent-600 dark:text-accent-400 mb-3">Emotiv Insight</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">~$500</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      5-channel semi-dry electrode system providing raw EEG data and preprocessed metrics for attention, stress, engagement, and emotions. Ideal for UX research and neuromarketing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Real-World Applications */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-accent-500 pl-6">
              Real-World Applications of Affordable BMIs
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Target,
                  title: 'Neurorehabilitation',
                  desc: 'Low-cost BMI systems support upper-limb rehabilitation through closed-loop control exercises. University of Houston research demonstrates clinical-grade functionality for rehabilitation at affordable prices.'
                },
                {
                  icon: Lightbulb,
                  title: 'Cognitive Enhancement',
                  desc: 'Carnegie Mellon studies show 8 weeks of mindfulness training significantly improves BCI control. Affordable devices enable stress reduction, sleep optimization, and mental fatigue monitoring.'
                },
                {
                  icon: Brain,
                  title: 'Education & Research',
                  desc: 'Powerful tools for understanding neuroscience, signal processing, machine learning, and biomedical engineering. Low barriers enable students worldwide to conduct meaningful experiments.'
                },
                {
                  icon: Waves,
                  title: 'Creative Expression',
                  desc: 'Artists create thought-controlled music synthesis, brainwave-responsive visual art, and interactive installations. The Illumino project transforms brainwaves into LED displays in wearable beanies.'
                },
                {
                  icon: Cpu,
                  title: 'Gaming & Entertainment',
                  desc: 'Mind-controlled game characters, attention-based difficulty adjustment, immersive VR/AR experiences, and competitive brain-training applications using consumer-grade BCIs.'
                },
                {
                  icon: Code,
                  title: 'Personal Biometrics',
                  desc: 'Monitor mental states throughout the day, track lifestyle effects on brain activity, quantify meditation practice, and correlate cognitive performance with external factors.'
                }
              ].map((app, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800/50 border border-accent-200 dark:border-accent-500/30 rounded-xl p-6 hover:border-accent-500 dark:hover:border-accent-400 transition-all shadow-sm hover:shadow-lg">
                  <app.icon className="w-10 h-10 text-accent-600 dark:text-accent-400 mb-4" />
                  <h3 className="text-xl font-bold text-accent-600 dark:text-accent-400 mb-3">{app.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{app.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* DIY Guide Section */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-accent-500 pl-6">
              Building Your Own Affordable BMI
            </h2>

            <div className="bg-gradient-to-br from-accent-50 to-blue-50 dark:from-accent-900/20 dark:to-blue-900/20 border-2 border-accent-500 rounded-2xl p-8 shadow-xl mb-8">
              <h3 className="text-2xl font-bold text-accent-700 dark:text-accent-400 mb-6">Starting Points Based on Goals & Budget</h3>
              
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 border border-accent-300 dark:border-accent-600/30">
                  <h4 className="font-bold text-lg text-green-700 dark:text-green-400 mb-3">For Absolute Beginners ($20-$50)</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                      <span>Purchase a used MindFlex or Force Trainer toy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                      <span>Obtain an Arduino Uno R3 ($20-30)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                      <span>Follow documented tutorials for hacking the headset</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                      <span>Download free Brain library for Arduino</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 border border-accent-300 dark:border-accent-600/30">
                  <h4 className="font-bold text-lg text-blue-700 dark:text-blue-400 mb-3">For Serious Hobbyists ($100-$300)</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                      <span>NeuroSky MindWave Mobile 2 for simplicity and SDK access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                      <span>Muse headband for meditation/wellness focus</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                      <span>PiEEG-16 for maximum flexibility and channels</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 border border-accent-300 dark:border-accent-600/30">
                  <h4 className="font-bold text-lg text-purple-700 dark:text-purple-400 mb-3">For Makers & Researchers ($300-$1,000)</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                      <span>OpenBCI Cyton Board + electrode setup for research</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                      <span>Emotiv Insight for preprocessed performance metrics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                      <span>Custom builds using multiple biosensing modules</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Safety Considerations */}
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-xl shadow-lg">
              <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-4">⚠️ Critical Safety Considerations</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Research from Cornell University emphasizes non-negotiable safety protocols:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• <strong>Electrical isolation:</strong> Use optocouplers to separate circuits</li>
                <li>• <strong>Battery power only:</strong> Never connect to AC while wearing electrodes</li>
                <li>• <strong>Voltage limits:</strong> Ensure signals stay within safe ranges (0-5V)</li>
                <li>• <strong>Ground loop prevention:</strong> Maintain complete power domain isolation</li>
                <li>• <strong>User awareness:</strong> Never touch electrical devices while connected</li>
              </ul>
            </div>
          </motion.section>

          {/* Machine Learning */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-accent-500 pl-6">
              Machine Learning & Affordable BMIs
            </h2>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              <p>
                Modern affordable BMI systems leverage machine learning to extract meaningful information from noisy signals. The University of Houston&apos;s low-cost system successfully implemented Support Vector Machines (SVMs) for real-time classification, demonstrating that sophisticated algorithms can run on modest hardware.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800/50 border border-accent-200 dark:border-accent-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-accent-600 dark:text-accent-400 mb-4">Classification Algorithms</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li><strong className="text-accent-600 dark:text-accent-400">Support Vector Machines:</strong> Excellent for separating mental states with limited training data</li>
                  <li><strong className="text-accent-600 dark:text-accent-400">Deep Learning:</strong> Pre-trained networks on edge devices for motor imagery, attention prediction, sleep staging</li>
                  <li><strong className="text-accent-600 dark:text-accent-400">Transfer Learning:</strong> Reducing calibration time between users</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800/50 border border-accent-200 dark:border-accent-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-accent-600 dark:text-accent-400 mb-4">Signal Processing</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li><strong className="text-accent-600 dark:text-accent-400">Bandpass Filtering:</strong> Isolating relevant frequency bands</li>
                  <li><strong className="text-accent-600 dark:text-accent-400">Artifact Removal:</strong> Eliminating eye blinks and muscle noise</li>
                  <li><strong className="text-accent-600 dark:text-accent-400">Feature Extraction:</strong> Computing spectral power, entropy, wavelets</li>
                  <li><strong className="text-accent-600 dark:text-accent-400">Normalization:</strong> Adjusting for individual differences</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-gray-50 dark:bg-gray-950 rounded-xl p-6 border-l-4 border-accent-500 overflow-x-auto">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-mono">Example: EEG Signal Processing Pipeline</div>
              <pre className="text-gray-800 dark:text-accent-300 font-mono text-sm leading-relaxed">
{`import numpy as np
from scipy import signal
from sklearn.svm import SVC

# Bandpass filter for Alpha waves (8-13 Hz)
def bandpass_filter(data, lowcut=8, highcut=13, fs=250):
    nyq = 0.5 * fs
    low = lowcut / nyq
    high = highcut / nyq
    b, a = signal.butter(4, [low, high], btype='band')
    return signal.filtfilt(b, a, data)

# Extract features
def extract_features(eeg_signal):
    # Compute power spectral density
    freqs, psd = signal.welch(eeg_signal, fs=250)
    return psd

# Train classifier
clf = SVC(kernel='rbf')
clf.fit(features_train, labels_train)
prediction = clf.predict(features_test)`}
              </pre>
            </div>
          </motion.section>

          {/* Current Limitations & Future */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-accent-500 pl-6">
              Current Limitations & Future Directions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white dark:bg-gray-800/50 border border-red-200 dark:border-red-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-4">Present Constraints</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Higher noise levels vs. medical-grade equipment</li>
                  <li>• Environmental interference (60 Hz power line noise)</li>
                  <li>• Limited spatial resolution with few channels</li>
                  <li>• User variability in skull thickness and conductivity</li>
                  <li>• Calibration requirements for each session</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800/50 border border-green-200 dark:border-green-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-4">Emerging Improvements</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Flexible sensors conforming to scalp contours</li>
                  <li>• Dry electrode technologies eliminating gel</li>
                  <li>• Multi-modal systems (EEG + fNIRS)</li>
                  <li>• Deep learning improving classification</li>
                  <li>• IEEE P2731 standards published in 2024</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-2 border-accent-500 rounded-2xl p-8 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <Rocket className="w-12 h-12 text-accent-600 dark:text-accent-400" />
                <h3 className="text-2xl font-bold text-accent-700 dark:text-accent-400">The Future of Affordable BMI</h3>
              </div>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  As technology continues advancing with improved sensors, better algorithms, and growing standardization, the gap between affordable and professional-grade systems continues narrowing. The IEEE P2731 Working Group published BCI standards in 2024, with ISO/IEC developing data format specifications for 2026.
                </p>
                <p>
                  Recent research in flexible brain electronic sensors (Nature, 2025) demonstrates wearable systems achieving high spatial and temporal resolution. Combined with edge AI processing and improved wireless protocols, the next generation of affordable BMIs will offer capabilities previously limited to research laboratories.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Community Resources */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-accent-500 pl-6">
              Community Resources & Getting Started
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800/50 border border-accent-200 dark:border-accent-500/30 rounded-xl p-6">
                <h3 className="text-lg font-bold text-accent-600 dark:text-accent-400 mb-4">Online Communities</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li>• OpenBCI Forum</li>
                  <li>• NeuroTechX Network</li>
                  <li>• Reddit r/neuroscience</li>
                  <li>• GitHub BCI Projects</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800/50 border border-accent-200 dark:border-accent-500/30 rounded-xl p-6">
                <h3 className="text-lg font-bold text-accent-600 dark:text-accent-400 mb-4">Educational Resources</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li>• BCI2000 Software Platform</li>
                  <li>• Coursera & edX Courses</li>
                  <li>• arXiv & bioRxiv Papers</li>
                  <li>• YouTube Tutorials</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800/50 border border-accent-200 dark:border-accent-500/30 rounded-xl p-6">
                <h3 className="text-lg font-bold text-accent-600 dark:text-accent-400 mb-4">Development Tools</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li>• Lab Streaming Layer (LSL)</li>
                  <li>• BrainFlow API</li>
                  <li>• OpenViBE Platform</li>
                  <li>• MNE-Python Library</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Conclusion */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-accent-500 pl-6">
              Conclusion: The Neurotechnology Revolution
            </h2>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                The democratization of brain-machine interface technology represents one of the most exciting developments in modern neuroscience and human-computer interaction. What once required million-dollar laboratories is now accessible to students, hobbyists, and independent researchers for under $300 — or even under $30 for determined DIY enthusiasts.
              </p>

              <div className="bg-accent-50 dark:bg-accent-900/20 border-l-4 border-accent-500 p-8 rounded-r-xl my-8 shadow-xl">
                <p className="text-xl italic text-gray-800 dark:text-gray-200">
                  &quot;The barrier to entry has never been lower. The question is no longer &apos;Can I afford a brain-machine interface?&apos; but rather &apos;What will I create with one?&apos;&quot;
                </p>
              </div>

              <p>
                While affordable BMI systems have limitations compared to clinical-grade equipment, they offer remarkable capabilities for personal wellness, education, creative expression, assistive technology prototyping, and genuine research contributions. The key is matching your goals with the appropriate device and setting realistic expectations.
              </p>

              <p>
                As research cited throughout demonstrates, low-cost BMI systems are not mere toys — they represent legitimate tools for exploration, innovation, and practical applications. Whether you&apos;re a student curious about neuroscience, a maker pushing technological boundaries, an artist seeking new mediums, or someone interested in personal cognitive enhancement, affordable brain-machine interfaces offer an unprecedented opportunity to directly engage with your own neural activity.
              </p>

              <div className="bg-gradient-to-r from-accent-50 to-blue-50 dark:from-accent-900/20 dark:to-blue-900/20 border-2 border-accent-500 rounded-2xl p-8 text-center my-8 shadow-xl">
                <p className="text-2xl font-bold text-accent-700 dark:text-accent-400 mb-4">
                  Join the Neurotechnology Revolution
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  From $30 Arduino projects to $300 consumer headsets, the tools to read and interact with your brain are now in your hands. The future of human-computer interaction is being built today — by hobbyists, students, and independent researchers just like you.
                </p>
              </div>
            </div>
          </motion.section>

          {/* References */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-accent-500 pl-6">
              References & Further Reading
            </h2>

            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
              <ol className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <li>1. University of Houston (2023). &quot;Design and Validation of a Low-Cost Mobile EEG-Based Brain–Computer Interface.&quot; <em>Sensors</em>, 23(13), 5930.</li>
                <li>2. Carnegie Mellon University (2020). &quot;Mindfulness Improves Brain–Computer Interface Performance by Increasing Control Over Neural Activity.&quot;</li>
                <li>3. Western University, Cambridge Brain Science (2021). &quot;EEG-Sleep Support Technology Study&quot; - Muse S device efficacy research.</li>
                <li>4. Cornell University ECE Department. &quot;Brain-Computer Interface Using Single-Channel Electroencephalography&quot; - Student project documentation.</li>
                <li>5. Nature npj Biomedical Innovations (2025). &quot;Flexible brain electronic sensors advance wearable brain-computer interface.&quot;</li>
                <li>6. NeurotechJP. &quot;Consumer BCI Review: 5 EEG Headsets for Developers.&quot;</li>
                <li>7. OpenBCI Documentation and Community Forum - https://openbci.com/</li>
                <li>8. NeuroSky Developer Program - Free SDKs and technical documentation</li>
                <li>9. PiEEG Project - https://pieeg.com/ - Open-source EEG hardware and tutorials</li>
                <li>10. GitHub repositories: Brain Library, MindFlex hacks, Arduino EEG projects</li>
              </ol>
            </div>

            <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-xl">
              <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                <strong>Note:</strong> This article is for educational and informational purposes. DIY brain-machine interface projects should be undertaken with appropriate safety precautions. Consult with medical professionals before using any BMI technology for health-related purposes.
              </p>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </article>
  )
}