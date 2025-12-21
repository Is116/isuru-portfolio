'use client'

import { Calendar, Clock, ArrowLeft, DollarSign, Store, Monitor, Zap, Banknote, Globe, Dice5, Lock, Key, Hash, Radio, User, Tag, Smartphone, Building2, CreditCard, Network, Shield } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function TapToPayArticle() {
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
        <div className="container-custom py-6">
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
      <div className="container-custom py-12 md:py-20">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
            Why Your Tap-to-Pay Card Is Way Smarter Than You Think
          </h1>
          
          <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <time dateTime="2025-12-21">December 21, 2025</time>
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
              src="/articles/NFC_article.png"
              alt="NFC Payment Security"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Article Content */}
      <div className="container-custom pb-20">
        <motion.div 
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          {/* Lead Paragraph */}
          <motion.div variants={fadeInUp} className="mb-12">
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
              I was grabbing coffee last week when the person behind me asked the barista if contactless payment was "safe." The barista shrugged. The person paid with cash instead.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="mb-12">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              That got me thinking most of us use tap-to-pay every single day, but hardly anyone understands what's actually protecting their money. So I went down a rabbit hole, and what I found was honestly pretty mind-blowing.
            </p>
          </motion.div>

          {/* Section 1 */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-12 bg-gradient-to-b from-accent-500 to-accent-600 rounded-full"></span>
              The Question Everyone's Asking (But Nobody's Answering)
            </h2>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Here's what people worry about: when you wave your card near a reader, you're literally broadcasting payment data through the air. Can't someone with the right equipment just... catch it? And if they record enough of these transactions, couldn't they figure out the pattern?
              </p>

              <p>
                Turns out, this exact scenario has been studied extensively by security researchers. The answer is fascinating, and it's not what most people think.
              </p>
            </div>
          </motion.section>

          {/* Section 2 */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-12 bg-gradient-to-b from-accent-500 to-accent-600 rounded-full"></span>
              It's Not Encryption (And That's the Whole Point)
            </h2>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Most people assume tap-to-pay works like this: your card number gets encrypted, sent to the terminal, then decrypted. Like putting something in a locked box.
              </p>

              <p>
                That's not what happens at all.
              </p>

              <p>
                Instead, your card generates a completely different number a <strong className="text-accent-600 dark:text-accent-400">token</strong> that's basically useless to anyone who intercepts it. And here's the clever part: there's no "decryption key" that turns it back into your real card number. The token and your actual card number aren't connected by any mathematical formula that can be reversed.
              </p>

              <div className="bg-accent-50 dark:bg-accent-900/20 border-l-4 border-accent-500 p-6 rounded-r-xl my-8">
                <p className="text-lg text-gray-800 dark:text-gray-200 italic">
                  Think of it like this: <strong>Encryption is locking your front door. Tokenization is having a completely different address that only the post office knows leads to your house.</strong>
                </p>
              </div>

              <p>
                This isn't my theory it's straight from the technical documentation published by EMVCo, the organization that sets global payment standards. Researchers Francisco Corella and Karen Lewison put it clearly in their 2014 analysis: the token isn't created by encrypting your card number, it's a randomly generated substitute with no mathematical relationship to the original.
              </p>
            </div>
          </motion.section>

          {/* Section 3 */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-12 bg-gradient-to-b from-accent-500 to-accent-600 rounded-full"></span>
              What Actually Happens When You Tap
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              Every single time you tap your card, something interesting happens inside that little chip. Let me break down the entire architecture from start to finish, because once you see how all these pieces fit together, you'll understand why this system is so hard to break.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 mt-12">
              The Complete Transaction Architecture
            </h3>

            {/* Step 1 */}
            <div className="mb-12 bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg">
              <h4 className="text-xl font-bold text-accent-600 dark:text-accent-400 mb-4">
                Step 1: The Wake-Up (NFC Power Transfer)
              </h4>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                When you bring your card within about 4cm of the terminal, something cool happens the terminal is constantly broadcasting a radio frequency field (13.56 MHz). Your card literally has no battery, but that RF field induces a tiny electrical current in the card's antenna coil. This powers up the chip just enough to do its job.
              </p>

              <div className="space-y-4">
                <div className="relative bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl p-6 border-l-4 border-blue-500 shadow-md">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                    <h5 className="text-lg font-bold text-blue-900 dark:text-blue-200">Terminal RF Field</h5>
                  </div>
                  <p className="text-gray-800 dark:text-gray-200 ml-13">Broadcasting at 13.56 MHz</p>
                </div>

                <div className="flex justify-center">
                  <div className="text-blue-500 text-2xl">↓</div>
                </div>
                <div className="text-center text-sm text-gray-600 dark:text-gray-400 font-mono bg-blue-50 dark:bg-blue-900/20 py-2 rounded-lg">
                  [Electromagnetic Induction]
                </div>
                <div className="flex justify-center">
                  <div className="text-blue-500 text-2xl">↓</div>
                </div>

                <div className="relative bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-xl p-6 border-l-4 border-green-500 shadow-md">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                    <h5 className="text-lg font-bold text-green-900 dark:text-green-200">Card Antenna Coil</h5>
                  </div>
                  <p className="text-gray-800 dark:text-gray-200 ml-13">Generates ~5 microamps of current</p>
                </div>

                <div className="flex justify-center">
                  <div className="text-green-500 text-2xl">↓</div>
                </div>

                <div className="relative bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl p-6 border-l-4 border-purple-500 shadow-md">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                    <h5 className="text-lg font-bold text-purple-900 dark:text-purple-200">Card Chip Powers On</h5>
                  </div>
                  <p className="text-gray-800 dark:text-gray-200 ml-13">Ready to process transaction</p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="mb-12 bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg">
              <h4 className="text-xl font-bold text-accent-600 dark:text-accent-400 mb-4">
                Step 2: The Handshake
              </h4>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                The terminal and your card have a quick conversation:
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex justify-start">
                  <div className="bg-blue-100 dark:bg-blue-900/40 rounded-2xl rounded-tl-none p-4 max-w-md border-2 border-blue-300 dark:border-blue-700">
                    <div className="text-xs font-bold text-blue-700 dark:text-blue-300 mb-1">Terminal →</div>
                    <p className="text-gray-800 dark:text-gray-200">"Hey, what payment apps do you have?"</p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="bg-green-100 dark:bg-green-900/40 rounded-2xl rounded-tr-none p-4 max-w-md border-2 border-green-300 dark:border-green-700">
                    <div className="text-xs font-bold text-green-700 dark:text-green-300 mb-1 text-right">← Card</div>
                    <p className="text-gray-800 dark:text-gray-200">"I've got Visa/Mastercard, here's my info"</p>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="bg-blue-100 dark:bg-blue-900/40 rounded-2xl rounded-tl-none p-4 max-w-md border-2 border-blue-300 dark:border-blue-700">
                    <div className="text-xs font-bold text-blue-700 dark:text-blue-300 mb-1">Terminal →</div>
                    <p className="text-gray-800 dark:text-gray-200">"Cool, let's use that. Here's the transaction data"</p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                This handshake includes:
              </p>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-accent-200 dark:border-accent-800 shadow-lg">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-accent-50 dark:bg-accent-900/20 rounded-lg">
                    <DollarSign className="text-accent-500" size={24} />
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Transaction amount</div>
                      <div className="font-bold text-gray-900 dark:text-white">$4.50</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-accent-50 dark:bg-accent-900/20 rounded-lg">
                    <Store className="text-accent-500" size={24} />
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Merchant ID</div>
                      <div className="font-bold text-gray-900 dark:text-white text-sm">STARBUCKS_NYC_5TH_AVE</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-accent-50 dark:bg-accent-900/20 rounded-lg">
                    <Monitor className="text-accent-500" size={24} />
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Terminal ID</div>
                      <div className="font-bold text-gray-900 dark:text-white">T-847392</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-accent-50 dark:bg-accent-900/20 rounded-lg">
                    <Clock className="text-accent-500" size={24} />
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Timestamp</div>
                      <div className="font-bold text-gray-900 dark:text-white text-sm">2024-12-21 08:23:47</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-accent-50 dark:bg-accent-900/20 rounded-lg">
                    <Banknote className="text-accent-500" size={24} />
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Currency code</div>
                      <div className="font-bold text-gray-900 dark:text-white">USD (840)</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-accent-50 dark:bg-accent-900/20 rounded-lg">
                    <Globe className="text-accent-500" size={24} />
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Country code</div>
                      <div className="font-bold text-gray-900 dark:text-white">USA</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-2 border-purple-300 dark:border-purple-700">
                  <div className="flex items-center gap-3">
                    <Dice5 className="text-purple-500" size={24} />
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Unpredictable number (random)</div>
                      <div className="font-bold text-gray-900 dark:text-white font-mono">A7F3B2C8</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="mb-12 bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg">
              <h4 className="text-xl font-bold text-accent-600 dark:text-accent-400 mb-4">
                Step 3: Inside the Secure Element (The Magic Happens)
              </h4>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Now here's where it gets wild. Your card's chip has a secure element think of it as a tiny vault inside the chip. According to Akter's 2017 research, this is where all the secret keys live, and they NEVER leave.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The chip now has everything it needs:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
                  <h5 className="font-bold text-blue-900 dark:text-blue-200 mb-4">DATA IT KNOWS (Public):</h5>
                  <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Transaction amount: $4.50</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Merchant ID: STARBUCKS_NYC_5TH_AVE</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Unpredictable number from terminal: A7F3B2C8</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Current timestamp</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Application Transaction Counter (ATC): 1,547 (this is transaction #1,547 on this card)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
                  <h5 className="font-bold text-red-900 dark:text-red-200 mb-4">DATA ONLY IT KNOWS (Secret - stored in secure element):</h5>
                  <ul className="space-y-2 text-sm text-red-800 dark:text-red-300">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Card's real PAN (Primary Account Number): 4532 1234 5678 9000</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Master Key: K_MASTER (unique to this card)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Derived Keys: K_ENC, K_MAC (calculated from master key)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Card Verification Value (CVV for chip): Different from the one printed on your card</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="mb-12 bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg">
              <h4 className="text-xl font-bold text-accent-600 dark:text-accent-400 mb-4">
                Step 4: Token Generation
              </h4>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Here's the first layer of protection. The chip generates a token using what's called "Format-Preserving Encryption":
              </p>

              <div className="space-y-6">
                {/* Input Section */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/30 dark:to-orange-900/30 rounded-xl p-6 border-2 border-red-300 dark:border-red-700 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-red-500 text-white rounded-lg flex items-center justify-center font-bold text-lg">IN</div>
                    <h5 className="text-xl font-bold text-red-900 dark:text-red-200">INPUT</h5>
                  </div>
                  <div className="space-y-3 ml-15">
                    <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <CreditCard className="text-red-500" size={20} />
                      <div className="flex-1">
                        <div className="text-xs text-gray-500 dark:text-gray-400">Real PAN</div>
                        <div className="font-mono font-bold text-gray-900 dark:text-white">4532 1234 5678 9000</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <Key className="text-red-500" size={20} />
                      <div className="flex-1">
                        <div className="text-xs text-gray-500 dark:text-gray-400">Master Key</div>
                        <div className="font-mono font-bold text-red-600 dark:text-red-400">[Secret Key]</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <Store className="text-red-500" size={20} />
                      <div className="flex-1">
                        <div className="text-xs text-gray-500 dark:text-gray-400">Merchant ID</div>
                        <div className="font-mono font-bold text-gray-900 dark:text-white text-sm">STARBUCKS_NYC_5TH_AVE</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <Hash className="text-red-500" size={20} />
                      <div className="flex-1">
                        <div className="text-xs text-gray-500 dark:text-gray-400">Transaction Counter</div>
                        <div className="font-mono font-bold text-gray-900 dark:text-white">1547</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Algorithm Section */}
                <div className="flex justify-center">
                  <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 dark:from-yellow-900/40 dark:to-yellow-800/40 rounded-xl px-8 py-4 border-2 border-yellow-400 dark:border-yellow-600 shadow-md">
                    <div className="text-center">
                      <div className="text-sm text-yellow-700 dark:text-yellow-300 font-semibold mb-1">ALGORITHM</div>
                      <div className="text-lg font-bold text-yellow-900 dark:text-yellow-100">AES-128 in FPE mode</div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="text-yellow-500 text-3xl">↓</div>
                </div>

                {/* Output Section */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl p-6 border-2 border-green-300 dark:border-green-700 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-500 text-white rounded-lg flex items-center justify-center font-bold text-lg">OUT</div>
                    <h5 className="text-xl font-bold text-green-900 dark:text-green-200">OUTPUT</h5>
                  </div>
                  <div className="ml-15 p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl">✓</span>
                      <div className="flex-1">
                        <div className="text-xs text-gray-500 dark:text-gray-400">Token (NOT your real card number)</div>
                        <div className="font-mono font-bold text-2xl text-green-600 dark:text-green-400">4111 1111 2233 4455</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                This token looks like a card number (16 digits, passes basic validation) but it's completely different. The algorithm is one way you can go from PAN → Token, but not Token → PAN without the master key.
              </p>
            </div>

            {/* Step 5 */}
            <div className="mb-12 bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg">
              <h4 className="text-xl font-bold text-accent-600 dark:text-accent-400 mb-4">
                Step 5: Cryptogram Generation (The Unbreakable Part)
              </h4>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Now comes the second layer. The chip creates what's called an ARQC (Authorization Request Cryptogram). This is where the real security magic happens.
              </p>

              <div className="space-y-6">
                {/* Inputs Section */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-xl p-6 border-2 border-blue-300 dark:border-blue-700 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center font-bold text-lg">IN</div>
                    <h5 className="text-xl font-bold text-blue-900 dark:text-blue-200">INPUTS</h5>
                  </div>
                  <div className="grid md:grid-cols-2 gap-3 ml-15">
                    <div className="flex items-start gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <span className="text-blue-500 mt-1">├─</span>
                      <div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">ATC</div>
                        <div className="font-mono text-sm font-bold text-gray-900 dark:text-white">1547</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <span className="text-blue-500 mt-1">├─</span>
                      <div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Unpredictable Number</div>
                        <div className="font-mono text-sm font-bold text-gray-900 dark:text-white">A7F3B2C8</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <span className="text-blue-500 mt-1">├─</span>
                      <div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Transaction Amount</div>
                        <div className="font-mono text-sm font-bold text-gray-900 dark:text-white">450 (in cents)</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <span className="text-blue-500 mt-1">├─</span>
                      <div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Transaction Currency</div>
                        <div className="font-mono text-sm font-bold text-gray-900 dark:text-white">840 (USD)</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <span className="text-blue-500 mt-1">├─</span>
                      <div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Transaction Date</div>
                        <div className="font-mono text-sm font-bold text-gray-900 dark:text-white">20241221</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <span className="text-blue-500 mt-1">├─</span>
                      <div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Transaction Type</div>
                        <div className="font-mono text-sm font-bold text-gray-900 dark:text-white">00 (purchase)</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <span className="text-blue-500 mt-1">├─</span>
                      <div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Terminal Country</div>
                        <div className="font-mono text-sm font-bold text-gray-900 dark:text-white">840 (USA)</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                      <span className="text-red-500 mt-1">└─</span>
                      <div>
                        <div className="text-xs text-red-600 dark:text-red-400">Secret Session Keys</div>
                        <div className="font-mono text-sm font-bold text-red-700 dark:text-red-300">[Derived from master key]</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Algorithm Section */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl p-6 border-2 border-purple-300 dark:border-purple-700 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-500 text-white rounded-lg flex items-center justify-center font-bold">⚙️</div>
                    <h5 className="text-xl font-bold text-purple-900 dark:text-purple-200">ALGORITHM: AES-128 or Triple-DES</h5>
                  </div>
                  <div className="space-y-4 ml-15">
                    <div className="flex gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg border-l-4 border-purple-400">
                      <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white mb-1">Concatenate all data</div>
                        <div className="font-mono text-xs text-gray-600 dark:text-gray-400">Data Block: 060B450084020241221A7F3B2C8...</div>
                      </div>
                    </div>
                    <div className="flex gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg border-l-4 border-purple-400">
                      <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white mb-1">Encrypt with Session Key</div>
                        <div className="font-mono text-xs text-gray-600 dark:text-gray-400">AES-128 Encryption (128-bit key, 10 rounds)</div>
                      </div>
                    </div>
                    <div className="flex gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg border-l-4 border-purple-400">
                      <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white mb-1">Apply MAC (Message Authentication Code)</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Ensures data hasn't been tampered with</div>
                      </div>
                    </div>
                    <div className="flex gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg border-l-4 border-purple-400">
                      <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white mb-1">Extract cryptogram</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Typically 8 bytes</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="text-purple-500 text-3xl">↓</div>
                </div>

                {/* Output Section */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl p-6 border-2 border-green-300 dark:border-green-700 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-500 text-white rounded-lg flex items-center justify-center font-bold text-lg">OUT</div>
                    <h5 className="text-xl font-bold text-green-900 dark:text-green-200">OUTPUT</h5>
                  </div>
                  <div className="ml-15 p-6 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-3xl">✓</span>
                      <div className="flex-1">
                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">ARQC (Authorization Request Cryptogram)</div>
                        <div className="font-mono font-bold text-3xl text-green-600 dark:text-green-400">E7 F3 A9 82 B4 C1 D5 E6</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                This cryptogram is unique to THIS transaction. Even if you buy another $4.50 coffee at the same Starbucks one second later, the cryptogram will be completely different because:
              </p>

              <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-accent-500 mt-2">•</span>
                  <span>ATC is now 1548 (not 1547)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-500 mt-2">•</span>
                  <span>Terminal generates new unpredictable number</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-500 mt-2">•</span>
                  <span>Timestamp has changed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-500 mt-2">•</span>
                  <span>New random elements in the algorithm</span>
                </li>
              </ul>
            </div>

            {/* Step 6 */}
            <div className="mb-12 bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg">
              <h4 className="text-xl font-bold text-accent-600 dark:text-accent-400 mb-4">
                Step 6: The Data Package
              </h4>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                The card sends this package wirelessly to the terminal:
              </p>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-2xl p-8 border-2 border-blue-300 dark:border-blue-700 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <Radio className="text-blue-600 dark:text-blue-400" size={32} />
                  <h5 className="text-2xl font-bold text-blue-900 dark:text-blue-200">TRANSMITTED DATA (over NFC)</h5>
                </div>
                
                <div className="grid gap-3">
                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg border-2 border-green-300 dark:border-green-700">
                    <Hash className="text-green-500" size={20} />
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 dark:text-gray-400">Token</div>
                      <div className="font-mono font-bold text-lg text-gray-900 dark:text-white">4111 1111 2233 4455</div>
                    </div>
                    <span className="text-xs text-green-600 dark:text-green-400 font-semibold">← NOT your real card number</span>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <Calendar className="text-blue-500" size={20} />
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 dark:text-gray-400">Expiry Date</div>
                      <div className="font-mono font-bold text-gray-900 dark:text-white">12/27</div>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">← Real expiry</span>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <User className="text-blue-500" size={20} />
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 dark:text-gray-400">Cardholder Name</div>
                      <div className="font-mono font-bold text-gray-900 dark:text-white">[ENCRYPTED]</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <Tag className="text-blue-500" size={20} />
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 dark:text-gray-400">Service Code</div>
                      <div className="font-mono font-bold text-gray-900 dark:text-white">201</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg border-2 border-purple-300 dark:border-purple-700">
                    <Shield className="text-purple-500" size={20} />
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 dark:text-gray-400">ARQC</div>
                      <div className="font-mono font-bold text-lg text-gray-900 dark:text-white">E7F3A982B4C1D5E6</div>
                    </div>
                    <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold">← One-time cryptogram</span>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <Hash className="text-blue-500" size={20} />
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 dark:text-gray-400">ATC</div>
                      <div className="font-mono font-bold text-gray-900 dark:text-white">1547</div>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">← Transaction counter</span>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <Smartphone className="text-blue-500" size={20} />
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 dark:text-gray-400">Application ID</div>
                      <div className="font-mono text-sm font-bold text-gray-900 dark:text-white">A0000000031010</div>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">← Visa/Mastercard app</span>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <Building2 className="text-blue-500" size={20} />
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 dark:text-gray-400">Issuer Application Data</div>
                      <div className="font-mono font-bold text-gray-900 dark:text-white">[ENCRYPTED]</div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-8 mb-4">
                Notice what's NOT in there:
              </p>

              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-2 border-red-300 dark:border-red-700">
                  <span className="text-red-500 text-2xl">✗</span>
                  <span className="font-semibold text-gray-900 dark:text-white">Your real card number</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-2 border-red-300 dark:border-red-700">
                  <span className="text-red-500 text-2xl">✗</span>
                  <span className="font-semibold text-gray-900 dark:text-white">The CVV from the back of your card</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-2 border-red-300 dark:border-red-700">
                  <span className="text-red-500 text-2xl">✗</span>
                  <span className="font-semibold text-gray-900 dark:text-white">Any secret keys</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-2 border-red-300 dark:border-red-700">
                  <span className="text-red-500 text-2xl">✗</span>
                  <span className="font-semibold text-gray-900 dark:text-white">Anything that could be reused</span>
                </div>
              </div>
            </div>

            {/* Step 7 */}
            <div className="mb-12 bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg">
              <h4 className="text-xl font-bold text-accent-600 dark:text-accent-400 mb-4">
                Step 7: The Journey to Your Bank
              </h4>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Now this data package travels through multiple systems:
              </p>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl p-5 border-l-4 border-purple-500 shadow-md">
                  <div className="flex items-center gap-3">
                    <CreditCard className="text-purple-600 dark:text-purple-400" size={28} />
                    <div>
                      <div className="font-bold text-purple-900 dark:text-purple-200">YOUR CARD</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Generates token & cryptogram</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="bg-purple-100 dark:bg-purple-900/40 px-4 py-2 rounded-lg border border-purple-300 dark:border-purple-700">
                    <div className="text-sm font-mono text-purple-700 dark:text-purple-300">[NFC - Encrypted]</div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="text-purple-500 text-2xl">↓</div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl p-5 border-l-4 border-blue-500 shadow-md">
                  <div className="flex items-center gap-3">
                    <Monitor className="text-blue-600 dark:text-blue-400" size={28} />
                    <div>
                      <div className="font-bold text-blue-900 dark:text-blue-200">PAYMENT TERMINAL</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Receives encrypted data</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="bg-blue-100 dark:bg-blue-900/40 px-4 py-2 rounded-lg border border-blue-300 dark:border-blue-700">
                    <div className="text-sm font-mono text-blue-700 dark:text-blue-300">[TLS/SSL Encryption]</div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="text-blue-500 text-2xl">↓</div>
                </div>

                <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 dark:from-cyan-900/30 dark:to-cyan-800/30 rounded-xl p-5 border-l-4 border-cyan-500 shadow-md">
                  <div className="flex items-center gap-3">
                    <Store className="text-cyan-600 dark:text-cyan-400" size={28} />
                    <div>
                      <div className="font-bold text-cyan-900 dark:text-cyan-200">MERCHANT'S PAYMENT PROCESSOR</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Routes to card network</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="bg-cyan-100 dark:bg-cyan-900/40 px-4 py-2 rounded-lg border border-cyan-300 dark:border-cyan-700">
                    <div className="text-sm font-mono text-cyan-700 dark:text-cyan-300">[Secure Network - Encrypted]</div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="text-cyan-500 text-2xl">↓</div>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/30 dark:to-yellow-800/30 rounded-xl p-5 border-l-4 border-yellow-500 shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <Network className="text-yellow-600 dark:text-yellow-400" size={28} />
                    <div>
                      <div className="font-bold text-yellow-900 dark:text-yellow-200">CARD NETWORK (Visa/Mastercard)</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Token vault lookup & routing</div>
                    </div>
                  </div>
                  <div className="ml-10 space-y-2">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-yellow-300 dark:border-yellow-700">
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Token Vault Lookup</div>
                      <div className="flex items-center gap-2">
                        <div className="font-mono text-sm text-gray-900 dark:text-white">Token: 4111 1111 2233 4455</div>
                      </div>
                      <div className="flex items-center justify-center my-2">
                        <div className="text-yellow-500">↓ [Secure mapping]</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="font-mono text-sm text-green-600 dark:text-green-400">Real PAN: 4532 1234 5678 9000</div>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-yellow-300 dark:border-yellow-700">
                      <div className="text-xs text-gray-500 dark:text-gray-400">Routes to correct bank</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="bg-green-100 dark:bg-green-900/40 px-4 py-2 rounded-lg border border-green-300 dark:border-green-700">
                    <div className="text-sm font-mono text-green-700 dark:text-green-300">[Secure Banking Network]</div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="text-green-500 text-2xl">↓</div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-xl p-5 border-l-4 border-green-500 shadow-md">
                  <div className="flex items-center gap-3">
                    <Building2 className="text-green-600 dark:text-green-400" size={28} />
                    <div>
                      <div className="font-bold text-green-900 dark:text-green-200">YOUR BANK</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Final validation & approval</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 8 */}
            <div className="mb-12 bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg">
              <h4 className="text-xl font-bold text-accent-600 dark:text-accent-400 mb-4">
                Step 8: Bank Validation (The Security Check)
              </h4>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Your bank now does the heavy lifting:
              </p>

              <div className="space-y-6">
                {/* Step 1: Cryptogram Check */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl p-6 border-2 border-purple-300 dark:border-purple-700 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                    <h5 className="text-xl font-bold text-purple-900 dark:text-purple-200">CRYPTOGRAM CHECK</h5>
                  </div>
                  <div className="space-y-3 ml-15">
                    <div className="flex items-start gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <span className="text-purple-500 mt-1">✓</span>
                      <span className="text-gray-800 dark:text-gray-200">Bank has the same master keys (shared during card creation)</span>
                    </div>
                    <div className="flex items-start gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <span className="text-purple-500 mt-1">✓</span>
                      <span className="text-gray-800 dark:text-gray-200">Bank receives: ARQC, ATC, Transaction Data</span>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-300 dark:border-blue-700">
                      <div className="text-sm text-blue-900 dark:text-blue-200 mb-2 font-semibold">Bank calculates: "What SHOULD the ARQC be?"</div>
                      <div className="ml-4 space-y-2 text-sm">
                        <div className="text-gray-700 dark:text-gray-300">Uses same algorithm: <span className="font-mono">AES(ATC + Data + Keys)</span></div>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-600 dark:text-gray-400">Expected ARQC:</span>
                          <span className="font-mono font-bold text-blue-600 dark:text-blue-400">E7F3A982B4C1D5E6</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-600 dark:text-gray-400">Received ARQC:</span>
                          <span className="font-mono font-bold text-blue-600 dark:text-blue-400">E7F3A982B4C1D5E6</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border-2 border-green-400 dark:border-green-600">
                      <span className="text-green-500 text-2xl">✓</span>
                      <span className="font-bold text-green-700 dark:text-green-300">MATCH! Card is genuine</span>
                    </div>
                  </div>
                </div>

                {/* Step 2: Counter Check */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-xl p-6 border-2 border-blue-300 dark:border-blue-700 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                    <h5 className="text-xl font-bold text-blue-900 dark:text-blue-200">COUNTER CHECK</h5>
                  </div>
                  <div className="space-y-3 ml-15">
                    <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <span className="text-gray-600 dark:text-gray-400">Last ATC from this card:</span>
                      <span className="font-mono font-bold text-gray-900 dark:text-white">1546</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <span className="text-gray-600 dark:text-gray-400">Current ATC:</span>
                      <span className="font-mono font-bold text-gray-900 dark:text-white">1547</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border-2 border-green-400 dark:border-green-600">
                      <span className="text-green-500 text-2xl">✓</span>
                      <span className="font-bold text-green-700 dark:text-green-300">VALID! Counter increased by 1 (not a replay)</span>
                    </div>
                  </div>
                </div>

                {/* Step 3: Account Check */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl p-6 border-2 border-green-300 dark:border-green-700 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                    <h5 className="text-xl font-bold text-green-900 dark:text-green-200">ACCOUNT CHECK</h5>
                  </div>
                  <div className="grid md:grid-cols-2 gap-3 ml-15">
                    <div className="flex items-center gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <span className="text-green-500 text-xl">✓</span>
                      <span className="text-gray-800 dark:text-gray-200">Account active?</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <span className="text-green-500 text-xl">✓</span>
                      <span className="text-gray-800 dark:text-gray-200">Sufficient funds?</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <span className="text-green-500 text-xl">✓</span>
                      <span className="text-gray-800 dark:text-gray-200">Card not reported stolen?</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <span className="text-green-500 text-xl">✓</span>
                      <span className="text-gray-800 dark:text-gray-200">Transaction within normal patterns?</span>
                    </div>
                  </div>
                </div>

                {/* Step 4: Fraud Detection */}
                <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30 rounded-xl p-6 border-2 border-orange-300 dark:border-orange-700 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
                    <h5 className="text-xl font-bold text-orange-900 dark:text-orange-200">FRAUD DETECTION (AI/ML)</h5>
                  </div>
                  <div className="grid md:grid-cols-2 gap-3 ml-15">
                    <div className="flex items-center gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <span className="text-green-500 text-xl">✓</span>
                      <div>
                        <div className="text-gray-800 dark:text-gray-200">Location: New York</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">(where card is usually used)</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <span className="text-green-500 text-xl">✓</span>
                      <div>
                        <div className="text-gray-800 dark:text-gray-200">Merchant type: Coffee shop</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">(normal pattern)</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <span className="text-green-500 text-xl">✓</span>
                      <div>
                        <div className="text-gray-800 dark:text-gray-200">Amount: $4.50</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">(not suspicious)</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg">
                      <span className="text-green-500 text-xl">✓</span>
                      <div>
                        <div className="text-gray-800 dark:text-gray-200">Velocity check</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">(Not 50 transactions in 5 minutes)</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final Result */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-6 shadow-2xl">
                  <div className="text-center">
                    <div className="text-4xl mb-2">✓</div>
                    <div className="text-3xl font-bold text-white">RESULT: APPROVED</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 9 */}
            <div className="mb-12 bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg">
              <h4 className="text-xl font-bold text-accent-600 dark:text-accent-400 mb-4">
                Step 9: The Response Journey
              </h4>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Your bank sends back approval with its own cryptogram:
              </p>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-xl p-5 border-l-4 border-green-500 shadow-md">
                  <div className="flex items-center gap-3">
                    <Building2 className="text-green-600 dark:text-green-400" size={28} />
                    <div>
                      <div className="font-bold text-green-900 dark:text-green-200">BANK</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Generates ARPC - Authorization Response Cryptogram</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="text-green-500 text-2xl">↓</div>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/30 dark:to-yellow-800/30 rounded-xl p-5 border-l-4 border-yellow-500 shadow-md">
                  <div className="flex items-center gap-3">
                    <Network className="text-yellow-600 dark:text-yellow-400" size={28} />
                    <div>
                      <div className="font-bold text-yellow-900 dark:text-yellow-200">CARD NETWORK (Visa/Mastercard)</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Routes approval back</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="bg-yellow-100 dark:bg-yellow-900/40 px-4 py-2 rounded-lg border border-yellow-300 dark:border-yellow-700">
                    <div className="text-sm font-mono text-yellow-700 dark:text-yellow-300">[Secure Network]</div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="text-yellow-500 text-2xl">↓</div>
                </div>

                <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 dark:from-cyan-900/30 dark:to-cyan-800/30 rounded-xl p-5 border-l-4 border-cyan-500 shadow-md">
                  <div className="flex items-center gap-3">
                    <Store className="text-cyan-600 dark:text-cyan-400" size={28} />
                    <div>
                      <div className="font-bold text-cyan-900 dark:text-cyan-200">MERCHANT'S PROCESSOR</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Forwards to terminal</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="bg-cyan-100 dark:bg-cyan-900/40 px-4 py-2 rounded-lg border border-cyan-300 dark:border-cyan-700">
                    <div className="text-sm font-mono text-cyan-700 dark:text-cyan-300">[TLS/SSL]</div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="text-cyan-500 text-2xl">↓</div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl p-5 border-l-4 border-blue-500 shadow-md">
                  <div className="flex items-center gap-3">
                    <Monitor className="text-blue-600 dark:text-blue-400" size={28} />
                    <div>
                      <div className="font-bold text-blue-900 dark:text-blue-200">TERMINAL</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Transmits to card</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="bg-blue-100 dark:bg-blue-900/40 px-4 py-2 rounded-lg border border-blue-300 dark:border-blue-700">
                    <div className="text-sm font-mono text-blue-700 dark:text-blue-300">[NFC]</div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="text-blue-500 text-2xl">↓</div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl p-5 border-l-4 border-purple-500 shadow-md">
                  <div className="flex items-center gap-3">
                    <CreditCard className="text-purple-600 dark:text-purple-400" size={28} />
                    <div>
                      <div className="font-bold text-purple-900 dark:text-purple-200">YOUR CARD</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Validates ARPC cryptogram</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-300 dark:border-purple-700 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <Lock className="text-purple-600 dark:text-purple-400" size={24} />
                    <div>
                      <div className="font-bold text-purple-900 dark:text-purple-200 mb-2">Card validates ARPC to confirm:</div>
                      <div className="text-gray-800 dark:text-gray-200 italic">"Yes, this response is really from my bank, not an imposter"</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-accent-50 dark:bg-accent-900/20 border-l-4 border-accent-500 p-6 rounded-r-xl">
                <p className="text-lg text-gray-800 dark:text-gray-200 font-bold">
                  Total time for all of this? About 0.3 seconds.
                </p>
              </div>
            </div>

            {/* Multi-Layer Architecture */}
            <div className="mb-12 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-purple-200 dark:border-purple-800 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                The Multi-Layer Encryption Architecture
              </h3>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                What's brilliant is that there are multiple encryption layers, each protecting different things:
              </p>

              <div className="space-y-4">
                {/* Layer 1 */}
                <div className="relative bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/30 rounded-xl p-6 border-l-4 border-red-500 shadow-md hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-red-900 dark:text-red-200 mb-3">
                        Secure Element
                      </h4>
                      <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">✓</span>
                          <span>Hardware encryption</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">✓</span>
                          <span>Keys never leave the chip</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">✓</span>
                          <span>Tamper-resistant (self-destructs if opened)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Layer 2 */}
                <div className="relative bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 rounded-xl p-6 border-l-4 border-orange-500 shadow-md hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-orange-900 dark:text-orange-200 mb-3">
                        Token Generation <span className="text-sm font-normal">(FPE - Format Preserving Encryption)</span>
                      </h4>
                      <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">✓</span>
                          <span>One-way function</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">✓</span>
                          <span>PAN → Token (easy)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">✓</span>
                          <span>Token → PAN (impossible without vault)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Layer 3 */}
                <div className="relative bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/30 dark:to-yellow-800/30 rounded-xl p-6 border-l-4 border-yellow-500 shadow-md hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-yellow-900 dark:text-yellow-200 mb-3">
                        Cryptogram <span className="text-sm font-normal">(AES-128 or 3DES)</span>
                      </h4>
                      <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-500 mt-1">✓</span>
                          <span>Unique per transaction</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-500 mt-1">✓</span>
                          <span>Includes MAC for integrity</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-500 mt-1">✓</span>
                          <span>Time-limited validation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Layer 4 */}
                <div className="relative bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-xl p-6 border-l-4 border-green-500 shadow-md hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      4
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-green-900 dark:text-green-200 mb-3">
                        NFC Protocol Encryption
                      </h4>
                      <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">✓</span>
                          <span>Encrypted communication channel</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">✓</span>
                          <span>Short range (4cm) limits interception</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Layer 5 */}
                <div className="relative bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl p-6 border-l-4 border-blue-500 shadow-md hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      5
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-blue-900 dark:text-blue-200 mb-3">
                        Network Transport <span className="text-sm font-normal">(TLS 1.3)</span>
                      </h4>
                      <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1">✓</span>
                          <span>End-to-end encryption</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1">✓</span>
                          <span>Certificate validation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1">✓</span>
                          <span>Perfect forward secrecy</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Layer 6 */}
                <div className="relative bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl p-6 border-l-4 border-purple-500 shadow-md hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      6
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-purple-900 dark:text-purple-200 mb-3">
                        Token Vault Security
                      </h4>
                      <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                        <li className="flex items-start gap-2">
                          <span className="text-purple-500 mt-1">✓</span>
                          <span>HSM (Hardware Security Module)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-500 mt-1">✓</span>
                          <span>FIPS 140-2 Level 3 certified</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-500 mt-1">✓</span>
                          <span>Multi-party authentication</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-500 mt-1">✓</span>
                          <span>Geographically distributed</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-purple-300 dark:border-purple-700">
                <p className="text-lg text-gray-800 dark:text-gray-200 font-semibold text-center">
                  🔒 An attacker would need to break through ALL six layers simultaneously. Breaking one doesn't help you need them all.
                </p>
              </div>
            </div>

            {/* Why Genius */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Why This Architecture Is Genius
              </h3>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Here's what blew my mind about this whole system:
              </p>

              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <h5 className="font-bold text-gray-900 dark:text-white mb-2">It's stateless for the merchant:</h5>
                  <p className="text-gray-700 dark:text-gray-300">Starbucks never sees your real card number, never stores anything reusable, and has minimal PCI compliance burden.</p>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <h5 className="font-bold text-gray-900 dark:text-white mb-2">It's deterministic for the bank:</h5>
                  <p className="text-gray-700 dark:text-gray-300">Given the same inputs and keys, the cryptogram calculation is always the same. So the bank can independently verify without any back-and-forth with your card.</p>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <h5 className="font-bold text-gray-900 dark:text-white mb-2">It's impossible to replay:</h5>
                  <p className="text-gray-700 dark:text-gray-300">The counter ensures every transaction is unique and ordered.</p>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <h5 className="font-bold text-gray-900 dark:text-white mb-2">It's resistant to man in the middle attacks:</h5>
                  <p className="text-gray-700 dark:text-gray-300">Even if someone intercepts everything, they can't modify it (MAC verification fails) or reuse it (counter mismatch).</p>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <h5 className="font-bold text-gray-900 dark:text-white mb-2">It works offline (sometimes):</h5>
                  <p className="text-gray-700 dark:text-gray-300">For small amounts, the card can approve transactions even without reaching your bank, using risk management built into the chip.</p>
                </div>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-6">
                According to research published by Akter and colleagues in 2017, this architecture has been tested against every attack vector researchers could think of and the fundamental design has held up.
              </p>
            </div>
          </motion.section>

          {/* Additional Sections */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-12 bg-gradient-to-b from-accent-500 to-accent-600 rounded-full"></span>
              I Tried to Break It (On Paper)
            </h2>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                So I thought, okay, what if I'm a hacker and I capture, say, 1,000 transactions from the same card? Surely I could find a pattern, right?
              </p>

              <p>
                Researchers at MIT's Computer Science department actually studied this in 2018. The short version: no, you can't.
              </p>

              <p>
                Here's why: the token generation includes secret keys that are buried inside your card's chip. These chips are built to be tamper-resistant if you try to physically open one, it detects the tampering and erases the keys. We're talking serious hardware security here.
              </p>

              <p>
                A 2021 study by Al-Maliki and Al-Assam in the Information Security Journal went into detail about how these secure elements work. They're designed to self-destruct if someone tries to extract the keys, even with sophisticated equipment.
              </p>

              <p>
                Without those secret keys, you're basically trying to solve a math problem where half the equation is missing. It doesn't matter how many examples you have you still can't solve it.
              </p>
            </div>
          </motion.section>

          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-12 bg-gradient-to-b from-accent-500 to-accent-600 rounded-full"></span>
              But Wait, Don't Hackers Always Find a Way?
            </h2>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>This is where it gets interesting. Yes, attackers have tried. Extensively.</p>

              <p>
                The ESET security team published a threat report earlier this year showing that NFC-related attacks have increased 35 times. Sounds scary, right? But here's the thing they're not breaking the tokenization itself. They're using social engineering, tricking people into installing malware, or exploiting sloppy implementations by specific companies.
              </p>

              <p>
                The actual mathematics protecting the token? Still solid after more than a decade of researchers trying to crack it.
              </p>

              <p>
                Financial cryptography researcher Martin Emms and his team at Newcastle University spent years analyzing these systems. They found some specific vulnerabilities in how certain cards handled PIN verification, but the core tokenization held up.
              </p>
            </div>
          </motion.section>

          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-12 bg-gradient-to-b from-accent-500 to-accent-600 rounded-full"></span>
              The Secret Vault Nobody Talks About
            </h2>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>So if these tokens can't be "decrypted," how do legitimate transactions work?</p>

              <p>
                Visa and Mastercard (they launched nearly identical systems in 2014 Visa Token Service and Mastercard Digital Enablement Service) maintain what are basically ultra-secure vaults. When a token comes through, their systems look it up in these vaults to see which real card it corresponds to.
              </p>

              <p>
                The U.S. Payments Forum explained in their 2019 primer that these vaults run in Hardware Security Modules basically specialized computers designed specifically for security. They're certified to FIPS 140-2 Level 3, which is serious government-grade protection. We're talking multi-person authentication, constant monitoring, and physical security that would make a bank jealous.
              </p>

              <p>
                Even employees at Visa can't just casually look up a token. Every access is logged, requires multiple approvals, and triggers alerts.
              </p>
            </div>
          </motion.section>

          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-12 bg-gradient-to-b from-accent-500 to-accent-600 rounded-full"></span>
              Does This Actually Work in the Real World?
            </h2>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>Honestly? The data is pretty compelling.</p>

              <p>
                The Nilson Report tracks payment fraud globally, and they've documented a 67% drop in digital payment fraud since tokenization became widespread in 2020. That's not a small improvement that's a fundamental shift.
              </p>

              <p>
                McKinsey's 2025 Global Payments Report found another interesting stat: tokenized cross-border payments have 47% fewer compliance holds. So you're getting better security AND faster transactions.
              </p>

              <p>
                The Smart Card Alliance estimated that payment-related breaches cost about $1.7 trillion globally last year. Tokenization is one of the main reasons that number isn't higher.
              </p>
            </div>
          </motion.section>

          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-12 bg-gradient-to-b from-accent-500 to-accent-600 rounded-full"></span>
              What About Quantum Computers?
            </h2>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>I know someone's thinking this, so let me address it: won't quantum computers break all this?</p>

              <p>
                Eventually, maybe. But we're talking 10-20 years minimum before quantum computers are powerful enough, and the payment industry is already working on quantum-resistant algorithms. NIST (the National Institute of Standards and Technology) just released post-quantum cryptography standards in 2024.
              </p>

              <p>
                Plus, the type of encryption used in tokenization (AES) is significantly more resistant to quantum attacks than other common encryption methods. The systems will be upgraded long before quantum computers become a real threat.
              </p>
            </div>
          </motion.section>

          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-12 bg-gradient-to-b from-accent-500 to-accent-600 rounded-full"></span>
              Why This Matters
            </h2>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Look, I'm not saying the system is perfect. A recent comprehensive review by Ajisegiri and colleagues in 2024 pointed out that new attack methods keep emerging. Security is an ongoing arms race, not a solved problem.
              </p>

              <p>But what struck me while researching this is how much sophisticated mathematics is protecting that casual coffee purchase. When you tap your card:</p>

              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-accent-500 mt-2 text-xl">•</span>
                  <span>Your chip is doing cryptographic calculations that would take a supercomputer millions of years to reverse</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-500 mt-2 text-xl">•</span>
                  <span>Secret keys that have never left your card are being used</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-500 mt-2 text-xl">•</span>
                  <span>A unique, one-time code is being generated</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-500 mt-2 text-xl">•</span>
                  <span>Multiple secure systems are working together to validate everything</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-500 mt-2 text-xl">•</span>
                  <span>And nobody not the merchant, not someone nearby with an NFC reader, not even hackers who break into databases can get your real card number from the token</span>
                </li>
              </ul>

              <p>
                The person behind me in that coffee shop was worried about the wrong thing. The real magic isn't in what could go wrong it's in how much is going right, invisibly, every single time.
              </p>

              <div className="bg-gradient-to-r from-accent-50 to-blue-50 dark:from-accent-900/20 dark:to-blue-900/20 border-l-4 border-accent-500 p-8 rounded-r-2xl my-8">
                <p className="text-xl text-gray-800 dark:text-gray-200 font-medium">
                  Next time you tap your card, take a second to appreciate that you're using one of the most elegant applications of modern cryptography in everyday life. The math is protecting you, and it's doing a pretty incredible job.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Sources */}
          <motion.section variants={fadeInUp} className="mb-16">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Sources u can get more information from:</h3>
              <ul className="grid md:grid-cols-2 gap-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-accent-500 mt-1">•</span>
                  <span>EMVCo Payment Tokenisation Specification (2014)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-500 mt-1">•</span>
                  <span>Al-Maliki & Al-Assam, Information Security Journal (2021)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-500 mt-1">•</span>
                  <span>Akter et al., Proceedings of ARES (2017)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-500 mt-1">•</span>
                  <span>Smart Card Alliance, Payment Fraud Prevention White Paper (2014)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-500 mt-1">•</span>
                  <span>Corella & Lewison, EMV Tokenisation Analysis (2014)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-500 mt-1">•</span>
                  <span>U.S. Payments Forum, Tokenization Primer (2019)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-500 mt-1">•</span>
                  <span>Ajisegiri et al., NFC Cyber Threats Review, PMC (2024)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-500 mt-1">•</span>
                  <span>ESET Threat Report H1 (2025)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-500 mt-1">•</span>
                  <span>Emms et al., Financial Cryptography (2013)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-500 mt-1">•</span>
                  <span>Kumar et al., Computer Communications (2019)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-500 mt-1">•</span>
                  <span>McKinsey Global Payments Report (2025)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-500 mt-1">•</span>
                  <span>MIT Computer Science NFC Security Analysis (2018)</span>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Closing */}
          <motion.section variants={fadeInUp} className="mb-16">
            <div className="bg-gradient-to-br from-accent-50 via-blue-50 to-purple-50 dark:from-accent-900/20 dark:via-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-accent-200 dark:border-accent-800">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 italic">
                Have you ever worried about tap-to-pay security? Or am I the only one who goes down these research rabbit holes? Drop a comment I'd love to hear what security topics you're curious about.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {['PaymentSecurity', 'Fintech', 'Cybersecurity', 'Technology', 'Innovation'].map((tag) => (
                  <span key={tag} className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-900 rounded-full text-accent-600 dark:text-accent-400 font-medium border border-accent-200 dark:border-accent-800 hover:bg-accent-50 dark:hover:bg-accent-900/30 transition-colors">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.section>

        </motion.div>
      </div>
    </article>
  );
}