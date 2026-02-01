'use client'

import { Calendar, Clock, ArrowLeft, Radio, Zap, Shield, Cpu, Target, AlertTriangle, Lock, Waves, Activity, Database, CircuitBoard, Server, Wifi } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function EMIArticle() {
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
          {/* Topic Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm font-medium mb-6"
          >
            <AlertTriangle size={16} />
            HARDWARE SECURITY DEEP DIVE
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            How Electromagnetic Interference Stops, Crashes, and Compromises Integrated Circuits
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            A Technical Analysis of Frequency Injection Attacks, Chip-Backside Vulnerabilities, Timing Jitter Models, and Real-World Exploitation
          </p>
          
          <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <time dateTime="2025-02-01">February 2025</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>24 min read</span>
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
              src="/articles/emi_security.png"
              alt="Electromagnetic Interference Security"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Research Attribution */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-semibold">Research Sources:</p>
            <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed">
              IEEE Transactions on Electromagnetic Compatibility | CHES 2009 (Springer LNCS) | Kobe University (2024) | NDSS 2023 | ACM CCS 2024
            </p>
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
          {/* Executive Summary */}
          <motion.div variants={fadeInUp} className="mb-16 bg-gradient-to-r from-accent-50 to-blue-50 dark:from-accent-900/20 dark:to-blue-900/20 border-l-4 border-accent-500 p-8 rounded-r-2xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Executive Summary</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              This article synthesizes findings from three landmark research papers, two active patents, and documented real-world attacks to explain how <strong>Intentional Electromagnetic Interference (IEMI)</strong>   also called Frequency Injection Attacks   can disable, crash, or compromise integrated circuits without a single wire being touched. We move beyond surface-level explanations to examine the precise physical mechanisms: how PCB traces act as antennas, how injected frequencies lock internal oscillators, how high-voltage pulses flip individual bits inside a silicon substrate, and how a mathematical model can predict, to within a few nanoseconds, exactly when a digital circuit will fail. We close with an analysis of real-world attacks against EV charging infrastructure and autonomous vehicle cameras, and a three-layer defense framework grounded in current industry standards.
            </p>
          </motion.div>

          {/* Section 1: The Physics of Unintended Antennas */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-12 bg-gradient-to-b from-accent-500 to-accent-600 rounded-full"></span>
              1. The Physics of Unintended Antennas
            </h2>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Every printed circuit board is, unintentionally, an antenna farm. The copper traces etched into the board   the highways that carry clock signals, data, and power   have a dual nature. During normal operation, they are conductors. When an external electromagnetic field sweeps across the board, they become receivers. The physics here is straightforward: a time-varying magnetic field induces a voltage in any conducting loop, a principle established by Faraday in 1831. On a modern PCB, even a trace that is two centimeters long and a fraction of a millimeter wide can develop a measurable induced voltage if the external field oscillates at a frequency whose wavelength is commensurate with the trace length.
              </p>

              <p>
                The critical insight   and the one that separates a nuisance from a weapon   is that not all frequencies are equally dangerous. A 60 Hz power line hum couples weakly into a 3 GHz digital system. But a signal at or near the system clock frequency, or at a harmonic or sub-harmonic of it, couples with extraordinary efficiency. The traces are not merely passively receiving noise; they are being <em>tuned</em>, like the antenna of a radio, to resonate with the injected signal. This is the foundational principle behind every IEMI attack discussed in this article.
              </p>

              {/* Icon Card */}
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                  <Radio className="text-accent-600 dark:text-accent-400 mb-3" size={32} />
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Radiated Coupling</h4>
                  <p className="text-base text-gray-600 dark:text-gray-400">
                    EM waves travel through air and impinge on the board. Distance-dependent, drops with square of range.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                  <Zap className="text-accent-600 dark:text-accent-400 mb-3" size={32} />
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Conducted Coupling</h4>
                  <p className="text-base text-gray-600 dark:text-gray-400">
                    Interference travels along shared wires (power, ground, I/O). Can travel meters with minimal loss.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-12">1.1 Coupling Pathways: Radiated vs. Conducted</h3>
            
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Interference enters a circuit through two channels. <strong>Radiated coupling</strong> occurs when an EM wave travels through free space and impinges on the board or its enclosure. <strong>Conducted coupling</strong> occurs when the interference travels along a shared wire   a power cable, a ground bus, or an I/O line that connects to an external system. Both pathways ultimately convert field energy into a voltage on an internal signal line, but they have different characteristics. Radiated coupling is distance-dependent and drops off with the square of the range. Conducted coupling, by contrast, can travel meters along a cable with minimal loss, making it particularly dangerous for power supply lines and long-run communication buses.
              </p>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-xl my-8">
                <h4 className="font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                  <AlertTriangle size={20} />
                  Real-World Case: Brokenwire
                </h4>
                <p className="text-gray-800 dark:text-gray-200">
                  The <strong>Brokenwire attack</strong> on EV charging infrastructure, presented at NDSS 2023 by Köhler, Baker, Strohmeier, and Martinovic, is a textbook example of conducted coupling exploited at scale. The CCS charging cable   unshielded and several meters long   acts as an efficient antenna. The researchers demonstrated that transmitting a signal at just <strong>10 mW</strong> was sufficient to disrupt charging communication from 10 meters away, and that a power budget under 1 watt could halt charging sessions from <strong>47 meters</strong>, even through building walls and between floors of a parking structure. The attack worked against eight different vehicles and twenty chargers in real-world deployments.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 2: Oscillator Locking */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-12 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full"></span>
              2. Mechanism I   Oscillator Locking and the Death of Entropy
            </h2>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                The most elegant IEMI attack does not try to overpower a chip. It <em>seduces</em> it. This mechanism was first rigorously demonstrated by A. Theodore Markettos and Simon W. Moore of the University of Cambridge, published in the proceedings of the Cryptographic Hardware and Embedded Systems conference (CHES 2009, Springer LNCS, vol. 5747, pp. 317–331). Their paper, "The Frequency Injection Attack on Ring-Oscillator-Based True Random Number Generators," remains one of the most cited works in hardware security.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-12">2.1 How Ring Oscillators Generate Randomness</h3>
            
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                A True Random Number Generator (TRNG) is the bedrock of cryptographic security on any secure microcontroller. Without genuinely unpredictable numbers, encryption keys are guessable, and the entire security model collapses. The most common implementation of a TRNG on a chip uses <strong>ring oscillators</strong>   closed loops of an odd number of inverter gates. Because of tiny manufacturing variations and thermal noise, each ring oscillator runs at a slightly different speed, and the phase relationship between two rings drifts unpredictably over time. A TRNG samples this drift to produce random bits. The security of the system is entirely dependent on the randomness of the <em>jitter</em>   the small, stochastic timing variations   in these oscillators.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-12">2.2 The Injection Lock: Turning Chaos into Clockwork</h3>
            
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Markettos and Moore demonstrated that when an external signal at a frequency close to the natural oscillation frequency of a ring oscillator is injected into the power supply of the chip, the oscillator does not simply add noise to its output. It <strong>locks</strong>. The phenomenon of injection locking   first described by Adler in 1946 for radio oscillators   means the oscillator's output frequency synchronizes to the injected signal. The random jitter that the TRNG depends on vanishes entirely. The oscillator is no longer random; it is deterministic.
              </p>

              <p>
                The consequences were devastating in their demonstration. By locking the oscillator, the researchers reduced the effective keyspace of a secure microcontroller from 2<sup>64</sup>   a number with nineteen digits   down to just <strong>3,300 possible values</strong>. They then successfully attacked a 2004 EMV "Chip and PIN" payment card, demonstrating that a random number that should have required 2<sup>32</sup> guesses could be cracked in only <strong>13 attempts</strong>.
              </p>

              {/* Research Highlight Box */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-2 border-purple-200 dark:border-purple-800 p-8 rounded-2xl my-8">
                <div className="flex items-start gap-4 mb-4">
                  <Database className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Research Highlight   Markettos & Moore (CHES 2009)
                    </h4>
                  </div>
                </div>
                <ul className="space-y-3 text-base text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <Target className="flex-shrink-0 mt-1 text-purple-500" size={18} />
                    <span><strong>Attack vector:</strong> External signal injected via the power supply rail into the chip's internal oscillator network.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="flex-shrink-0 mt-1 text-purple-500" size={18} />
                    <span><strong>Effect:</strong> Complete destruction of entropy in ring-oscillator-based TRNGs via injection locking.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="flex-shrink-0 mt-1 text-purple-500" size={18} />
                    <span><strong>Result:</strong> Keyspace of secure microcontroller reduced from 2<sup>64</sup> to 3,300. EMV card cracked in 13 guesses instead of 2<sup>32</sup>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lock className="flex-shrink-0 mt-1 text-purple-500" size={18} />
                    <span>Three independent implementations of the attack were described, along with optimization techniques.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Section 3: Bit-Flipping */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-12 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></span>
              3. Mechanism II   Bit-Flipping Through the Silicon Backside
            </h2>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                While oscillator locking exploits a subtle property of analog circuitry, the attack described in a 2024 paper from Kobe University is more brute-force in nature   but no less precise. Published in the <em>IEEE Transactions on Electromagnetic Compatibility</em> under the lead authorship of researchers at Kobe University's Graduate School of Science, Technology and Innovation (with Prof. Makoto Nagata as corresponding author), the paper "Chip-Backside Vulnerability to Intentional Electromagnetic Interference in Integrated Circuits" describes how high-voltage pulses delivered to the exposed backside of a flip-chip IC can cause individual bits to change state inside the chip.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-12">3.1 Why Flip-Chip Packaging Is an Attack Surface</h3>
            
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Modern high-performance chips are packaged in <strong>flip-chip assemblies</strong>, where the die is mounted upside down onto the substrate, with the active circuits facing down and bonded via tiny copper pillars or solder bumps. The backside of the silicon   the substrate itself   is left largely exposed, covered only by a thin heat spreader or a minimal resin layer. This is a deliberate engineering trade-off: it improves heat dissipation and signal routing. But it also means the silicon substrate is physically accessible without decapsulation. An attacker with a needle, a focused EM probe, or a high-voltage pulse generator can reach the substrate directly.
              </p>

              {/* Visual diagram placeholder */}
              <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 text-center my-8 border-2 border-dashed border-gray-300 dark:border-gray-700">
                <Cpu className="mx-auto text-gray-400 dark:text-gray-600 mb-4" size={64} />
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  Flip-chip package: Active circuits face down, silicon backside exposed
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-12">3.2 The Mechanism: From Pulse to Bit-Flip</h3>
            
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                The Kobe University team proposed and validated a circuit model explaining the bit-flip mechanism for the first time. When a high-voltage pulse is applied to a localized area of the Si substrate on the chip backside, the injected current does not simply flow into the chip's power distribution network. It also charges the gate capacitance of downstream transistors via the p-n junction diodes formed by the body-drain and body-source connections of N-channel MOSFETs in twin-well CMOS structures. This parasitic charging pathway can flip the state of a bistable circuit element   a flip-flop   from a logic 0 to a logic 1, or vice versa.
              </p>

              <p>
                Crucially, the researchers found that the error pattern is not random   it is strongly location-dependent and exhibits asymmetry between <strong>bit-set errors</strong> (0→1) and <strong>bit-reset errors</strong> (1→0). The direction of the error depends on the polarity of the pulse and the physical location of the flip-flop relative to the injection point. Using a three-dimensional RC network model of the IC, they simulated the voltage distribution across the chip and predicted which regions would experience bit-set vs. bit-reset errors, with results that matched their silicon experiments closely.
              </p>

              {/* Research Highlight Box */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-2 border-red-200 dark:border-red-800 p-8 rounded-2xl my-8">
                <div className="flex items-start gap-4 mb-4">
                  <CircuitBoard className="text-red-600 dark:text-red-400 flex-shrink-0 mt-1" size={32} />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Research Highlight   Kobe University (IEEE TEMC, 2024)
                    </h4>
                  </div>
                </div>
                <ul className="space-y-3 text-base text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <Target className="flex-shrink-0 mt-1 text-red-500" size={18} />
                    <span><strong>Attack vector:</strong> High-voltage pulse (HVP) injected via needle onto the exposed Si substrate backside of a flip-chip IC. Pulses ranging from <strong>+320 V to −120 V</strong> were used.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="flex-shrink-0 mt-1 text-red-500" size={18} />
                    <span><strong>Novel contribution:</strong> First complete circuit-level model explaining how HVP injection causes bit-flips in CMOS digital circuits via parasitic gate capacitance charging through NMOS body-drain/source junctions.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lock className="flex-shrink-0 mt-1 text-red-500" size={18} />
                    <span><strong>Security implication:</strong> Single bits in an AES cryptographic engine were intentionally flipped by aligning HVP timing with the engine's operation, enabling Differential Fault Analysis to extract secret keys.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Activity className="flex-shrink-0 mt-1 text-red-500" size={18} />
                    <span>Presented at IEEE FDTC 2024 and COSADE 2024, with simulation validated against silicon experiments.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Section 4: Jitter Model */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-12 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></span>
              4. Mechanism III   Predicting Failure with the Jitter Model
            </h2>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                The first two mechanisms describe attacks that destroy security or flip bits. The third mechanism answers a more fundamental engineering question: <em>at what point does electromagnetic interference cause a digital circuit to make an error?</em> The answer comes from a 2003 paper in the <em>IEEE Transactions on Electromagnetic Compatibility</em> by Martin P. Robinson, Katharina Fischer, Ian D. Flintoft, and Andrew C. Marvin, titled "A Simple Model of EMI-Induced Timing Jitter in Digital Circuits, its Statistical Distribution and its Effect on Circuit Performance."
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-12">4.1 The Core Principle: How Noise Becomes a Timing Error</h3>
            
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Consider a logic signal traveling from one gate to the next on a PCB. The signal has a rising edge   a transition from low voltage to high voltage   that crosses a logic threshold at a precise moment in time. If radio-frequency interference (RFI) is superimposed on this signal, the instantaneous value of the RFI shifts the waveform up or down. If the RFI is positive at the moment of switching, the signal crosses the threshold slightly earlier than intended. If negative, it crosses later. Over many switching events, this produces a distribution of timing variations   <strong>jitter</strong>   around the nominal delay.
              </p>

              <p>
                Robinson et al. modeled this effect using only two measurable parameters: the <strong>rise time</strong> of the logic gate and its <strong>switching amplitude</strong>. Their simple theory predicted that jitter would be proportional to the peak threat voltage divided by the switching amplitude, scaled by the rise time. This gave engineers, for the first time, a tool that did not require knowledge of the internal workings of a black-box IC   only parameters that could be measured from the outside.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-12">4.2 The Modified Model: Adding a Low-Pass Filter</h3>
            
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                The simple model, however, failed to account for two observed phenomena: jitter decreased at higher threat frequencies, and the statistical distribution of timing variations was asymmetric. Robinson and colleagues resolved both discrepancies by introducing a <strong>low-pass filter</strong> element into the model   representing the finite bandwidth of the logic gate's input. The filter's time constant was set empirically at roughly one-third of the gate's rise time. With this modification, the model correctly predicted that faster RFI signals would induce less jitter (because they are filtered before they can shift the threshold crossing), and that the distribution of delay times would be skewed   both effects confirmed by measurement across seven different logic families.
              </p>

              <p>
                The model also yielded a practical formula for <strong>dynamic immunity</strong>   the minimum pulse amplitude required to cause a logic gate to switch, as a function of pulse width. For short pulses, a much larger amplitude is needed. This is directly relevant to EMI shielding design: knowing the immunity curve allows an engineer to specify the required attenuation at each frequency.
              </p>

              {/* Research Highlight Box */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-200 dark:border-blue-800 p-8 rounded-2xl my-8">
                <div className="flex items-start gap-4 mb-4">
                  <Activity className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Research Highlight   Robinson, Fischer, Flintoft & Marvin (IEEE TEMC, 2003)
                    </h4>
                  </div>
                </div>
                <ul className="space-y-3 text-base text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <Database className="flex-shrink-0 mt-1 text-blue-500" size={18} />
                    <span><strong>Model inputs:</strong> Rise time, switching amplitude, and RFI waveform characteristics (amplitude, frequency, modulation depth). No internal IC knowledge required.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Target className="flex-shrink-0 mt-1 text-blue-500" size={18} />
                    <span><strong>Model outputs:</strong> Peak-to-peak jitter, full statistical distribution of timing delays, circuit immunity level, and bit error rate.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Activity className="flex-shrink-0 mt-1 text-blue-500" size={18} />
                    <span><strong>Validation:</strong> Confirmed against measurements across eight logic families (4000B CMOS through 74ACT), with measured immunity levels matching predictions to within the margin of experimental error.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="flex-shrink-0 mt-1 text-blue-500" size={18} />
                    <span><strong>Key design conclusion:</strong> Circuit immunity depends primarily on the logic threshold, not on the switching speed. Use the slowest logic family that meets timing requirements.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Section 5: Real-World Attacks */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-12 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full"></span>
              5. Real-World Attacks: From Labs to Roads
            </h2>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                The mechanisms described above are not theoretical. They have been weaponized in real-world attacks against critical infrastructure, autonomous vehicles, and payment systems.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-12">5.1 Brokenwire: Halting Electric Vehicle Charging</h3>
            
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Presented at NDSS 2023, <strong>Brokenwire</strong> exploits the Combined Charging System (CCS) used by most DC fast chargers. The CCS uses HomePlug GreenPHY power-line communication over the charging cable to exchange state-of-charge data and negotiate current levels between the EV and charger. The protocol uses CSMA/CA   carrier sense multiple access with collision avoidance   which means both the vehicle and the charger listen before transmitting. By continuously injecting a valid preamble signal into the cable's electromagnetic environment, the attacker makes both endpoints believe the cable is perpetually busy. Neither will transmit. The charging session times out and aborts.
              </p>

              <div className="bg-white dark:bg-gray-900 border-2 border-orange-200 dark:border-orange-800 rounded-xl p-6 my-8">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">10 mW</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Power needed from 10 meters</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">&lt;1 W</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Power needed from 47 meters</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">8/20</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Vehicles/chargers tested</p>
                  </div>
                </div>
              </div>

              <p>
                The attack requires only off-the-shelf software-defined radio hardware and a power budget under 1 watt for a range of 47 meters. It works through walls, between building floors, and can target individual vehicles or entire charging hubs simultaneously. The researchers demonstrated the attack against eight vehicles and twenty chargers. For electric ambulances or fleet vehicles, this represents a potential life-safety threat.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-12">5.2 ESIA: Attacking Autonomous Vehicle Cameras</h3>
            
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                <strong>Electromagnetic Signal Injection Attacks (ESIA)</strong> target the rolling shutter mechanism in camera sensors used by autonomous driving systems. By injecting electromagnetic signals into the camera's circuit board at frequencies synchronized to the shutter scan rate, an attacker can introduce color bands or distortion into the image being captured. Research published in 2023 and 2024 demonstrated that attack devices as small as a credit card could be deployed near a moving vehicle's camera to induce distortion while the car was in operation. Because autonomous driving AI systems trust the integrity of sensor data, even subtle image corruption can cause misclassification of road signs, lane boundaries, or other vehicles   with potentially catastrophic consequences.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-12">5.3 Tesla Autopilot: Fault Injection Against Automotive Chips</h3>
            
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                In research published at ACM CCS 2024, security researchers conducted fault injection attacks on all three subsystems of Tesla's car computer   the infotainment system, the Autopilot safety controller, and the Autopilot inference processor. Two subsystems were compromised via low-cost voltage glitching; the third was compromised through a non-invasive electromagnetic fault injection attack. The researchers extracted firmware, machine learning model weights, sensor data, and cryptographic credentials. Notably, the vulnerable chips were automotive-grade components manufactured by AMD and NXP/STM, meaning the same attack vectors are applicable to other vehicle manufacturers using identical hardware.
              </p>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-xl my-8">
                <p className="text-gray-800 dark:text-gray-200 font-semibold mb-2">Critical Insight:</p>
                <p className="text-gray-700 dark:text-gray-300">
                  These attacks targeted <em>automotive-grade</em> chips from AMD, NXP, and STM   the same components used across the industry. The vulnerabilities are not Tesla-specific; they're systemic.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 6: Patent Landscape */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-12 bg-gradient-to-b from-green-500 to-green-600 rounded-full"></span>
              6. The Patent Landscape: Defense and Detection
            </h2>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                The patent record reveals that both the attack and defense communities have been active. Two patents illustrate opposite sides of the problem.
              </p>

              <p>
                <strong>Patent WO2017201409A1</strong>   filed by the University of Michigan System   directly addresses the resonant injection problem. The underlying research, the <strong>WALNUT project</strong> (Waging Doubt on the Integrity of MEMS Accelerometers with Acoustic Injection Attacks), showed that MEMS accelerometers could be spoofed by playing acoustic signals at their resonant frequency. The patent proposes a defense: sample the sensor output at a frequency equal to or below the known resonant frequency, with each sample time offset by a random delay generated by a true random number generator. By randomizing the sampling phase, the aliased attack signal is averaged out and cannot produce a consistent false reading. This is a direct application of the principle that predictable sampling creates predictable vulnerabilities.
              </p>

              <p>
                The <strong>frequency-jittering strategy</strong> used in power converters   detailed in patents such as US9203293B2 and related works   applies the same randomization principle in reverse. Instead of randomizing the sampling clock, these designs randomize the switching frequency of the power converter itself. By varying the oscillator frequency pseudo-randomly around a nominal value, the converter's emissions are spread across a wider bandwidth rather than concentrated at a single harmonic. This makes it significantly harder for an external IEMI attack to lock onto a precise frequency and couple efficiently into downstream circuitry.
              </p>
            </div>
          </motion.section>

          {/* Section 7: Defense Framework */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-12 bg-gradient-to-b from-cyan-500 to-cyan-600 rounded-full"></span>
              7. A Three-Layer Defense Framework
            </h2>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Defending against IEMI requires thinking in layers. No single countermeasure is sufficient because the attack surface spans the physical enclosure, the PCB layout, and the circuit logic itself. The following framework, grounded in the research reviewed above and aligned with <strong>IEC 61000 electromagnetic immunity standards</strong>, provides a structured approach.
              </p>
            </div>

            {/* Three Layers */}
            <div className="space-y-8 mt-12">
              {/* Layer 1 */}
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border-l-4 border-cyan-500 p-8 rounded-r-2xl">
                <div className="flex items-start gap-4 mb-4">
                  <Shield className="text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-1" size={32} />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Layer 1: Physical Shielding</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      Faraday cages   enclosures made of conductive material such as aluminum or copper   block external electric and magnetic fields from reaching the interior. For consumer electronics, conductive sprays or shielding gaskets applied to the inside of plastic housings can provide meaningful attenuation. The Brokenwire researchers found that shielding the charging cable (replacing the unshielded power cable with a twisted-pair or coaxial alternative) significantly increased the power budget required to execute the attack.
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      For the chip-backside vulnerability described by Kobe University, packaging solutions including <strong>backside buried metal (BBM)</strong> layers and 3D chip stacking with shielding tiers have been proposed and validated on silicon.
                    </p>
                  </div>
                </div>
              </div>

              {/* Layer 2 */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-l-4 border-blue-500 p-8 rounded-r-2xl">
                <div className="flex items-start gap-4 mb-4">
                  <CircuitBoard className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={32} />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Layer 2: PCB Layout Discipline</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      At the board level, the primary defenses are <strong>via fences</strong> and <strong>differential signaling</strong>. Via fences are rows of grounded through-hole vias placed along the edges of high-speed signal traces. They create a low-impedance path to ground that intercepts coupling before it reaches the IC.
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      Differential signaling   transmitting each signal as a pair of complementary wires   causes any common-mode interference (noise that affects both wires equally) to cancel at the receiver. The Brokenwire attack exploits the fact that CCS uses single-ended, unbalanced wiring. Switching to balanced signaling would substantially reduce the attack's effectiveness.
                    </p>
                  </div>
                </div>
              </div>

              {/* Layer 3 */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-l-4 border-purple-500 p-8 rounded-r-2xl">
                <div className="flex items-start gap-4 mb-4">
                  <Cpu className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={32} />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Layer 3: Circuit-Level Resilience</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      Inside the chip, three classes of countermeasure are relevant. First, <strong>error-correcting code (ECC) memory</strong> can detect and correct single-bit errors caused by bit-flipping attacks. Second, <strong>watchdog timers</strong>   independent hardware circuits that monitor the main processor   can detect when the system has frozen due to clock jitter or oscillator locking and force a hard reset, preventing a denial-of-service condition from persisting.
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      Third, <strong>decoupling capacitors</strong>   small capacitors placed as close as possible to the IC's power pins   act as local energy reservoirs that absorb and neutralize voltage spikes induced by EMI before they can propagate into the chip's internal power rails. For TRNGs specifically, the injection-locking attack documented by Markettos and Moore can be mitigated by using multiple independent entropy sources and implementing online statistical tests that continuously verify the randomness of the output.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 8: Summary Table */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <span className="w-2 h-12 bg-gradient-to-b from-indigo-500 to-indigo-600 rounded-full"></span>
              8. Attack and Defense Summary
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              The table below consolidates the attack mechanisms, their frequency targets, underlying research, and the most effective countermeasures.
            </p>

            {/* Responsive Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                    <th className="p-4 text-left font-bold">Attack Mechanism</th>
                    <th className="p-4 text-left font-bold">Frequency / Signal Target</th>
                    <th className="p-4 text-left font-bold">Key Research</th>
                    <th className="p-4 text-left font-bold">Primary Defense</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="p-4 font-semibold text-gray-900 dark:text-white">Oscillator Locking</td>
                    <td className="p-4 text-gray-700 dark:text-gray-300">Near system clock frequency of ring oscillators</td>
                    <td className="p-4 text-gray-700 dark:text-gray-300">Markettos & Moore, CHES 2009</td>
                    <td className="p-4 text-gray-700 dark:text-gray-300">Multiple entropy sources + online randomness testing</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="p-4 font-semibold text-gray-900 dark:text-white">Bit-Flipping (HVP)</td>
                    <td className="p-4 text-gray-700 dark:text-gray-300">High-voltage pulse on Si substrate backside</td>
                    <td className="p-4 text-gray-700 dark:text-gray-300">Kobe University, IEEE TEMC 2024</td>
                    <td className="p-4 text-gray-700 dark:text-gray-300">ECC memory + backside buried metal (BBM) shielding</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="p-4 font-semibold text-gray-900 dark:text-white">Clock Jitter / Timing Error</td>
                    <td className="p-4 text-gray-700 dark:text-gray-300">Amplitude & frequency of RFI vs. gate switching parameters</td>
                    <td className="p-4 text-gray-700 dark:text-gray-300">Robinson et al., IEEE TEMC 2003</td>
                    <td className="p-4 text-gray-700 dark:text-gray-300">Low-pass filtering + slowest logic family + via fences</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="p-4 font-semibold text-gray-900 dark:text-white">Harmonic Coupling</td>
                    <td className="p-4 text-gray-700 dark:text-gray-300">Sub-harmonics (½, ¼) of target clock frequency</td>
                    <td className="p-4 text-gray-700 dark:text-gray-300">General EMC theory; Robinson et al. 2003</td>
                    <td className="p-4 text-gray-700 dark:text-gray-300">Low-pass filters on all signal lines</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="p-4 font-semibold text-gray-900 dark:text-white">PLC Disruption (Brokenwire)</td>
                    <td className="p-4 text-gray-700 dark:text-gray-300">HomePlug GreenPHY preamble frequency (~17 MHz)</td>
                    <td className="p-4 text-gray-700 dark:text-gray-300">Köhler et al., NDSS 2023</td>
                    <td className="p-4 text-gray-700 dark:text-gray-300">Shielded/balanced cabling + protocol-level timeout hardening</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="p-4 font-semibold text-gray-900 dark:text-white">Camera Signal Injection (ESIA)</td>
                    <td className="p-4 text-gray-700 dark:text-gray-300">Synchronized to camera rolling shutter rate</td>
                    <td className="p-4 text-gray-700 dark:text-gray-300">Jiang et al. 2023; Zhang et al. 2024</td>
                    <td className="p-4 text-gray-700 dark:text-gray-300">Image-level anomaly detection + sensor fusion</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Section 9: Conclusion */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-12 bg-gradient-to-b from-gray-500 to-gray-600 rounded-full"></span>
              9. Conclusion
            </h2>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Intentional electromagnetic interference is not a science-fiction threat. It is a documented, reproducible, and in some cases trivially executable attack vector. The research reviewed here   spanning from the cryptographic implications of oscillator locking to the circuit-level physics of bit-flipping to the mathematical prediction of timing failures   collectively demonstrates that the electromagnetic environment is a security boundary as real as any network firewall or encryption algorithm.
              </p>

              <p>
                What makes IEMI particularly challenging is its non-invasive nature. Unlike software exploits that can be patched or network attacks that can be firewalled, IEMI attacks operate on the <strong>physical layer</strong>   the substrate, the traces, the packaging. Defending against them requires a fundamentally different mindset: one that treats the electromagnetic environment as an adversary to be modeled, measured, and hardened against at every stage of the design process.
              </p>

              <p>
                As IoT devices proliferate in medical equipment, autonomous vehicles, industrial control systems, and critical infrastructure, the attack surface grows. The research cited in this article   and the patents that are already attempting to codify defenses   represents the current frontier. For engineers building systems that must be secure against physical-layer attacks, these are not optional reading. They are the map of the threat landscape.
              </p>

              <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 border-l-4 border-gray-500 p-8 rounded-r-2xl my-8">
                <p className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  The Electromagnetic Environment Is a Security Boundary
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 italic">
                  For systems that must be secure against physical-layer attacks, understanding IEMI isn't optional   it's the map of the threat landscape.
                </p>
              </div>
            </div>
          </motion.section>

          {/* References */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">References</h2>

            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8">
              <ol className="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed list-decimal list-inside">
                <li>
                  Markettos, A.T. & Moore, S.W. (2009). "The Frequency Injection Attack on Ring-Oscillator-Based True Random Number Generators." In: <em>Cryptographic Hardware and Embedded Systems   CHES 2009</em>. Lecture Notes in Computer Science, vol. 5747, pp. 317–331. Springer. DOI: 10.1007/978-3-642-04138-9_23
                </li>
                <li>
                  Hasegawa, R., Monta, K., Wadatsumi, T., Miki, T., & Nagata, M. (2024). "Chip-Backside Vulnerability to Intentional Electromagnetic Interference in Integrated Circuits." <em>IEEE Transactions on Electromagnetic Compatibility</em>. DOI: 10.1109/TEMC.2024.3440919
                </li>
                <li>
                  Robinson, M.P., Fischer, K., Flintoft, I.D., & Marvin, A.C. (2003). "A Simple Model of EMI-Induced Timing Jitter in Digital Circuits, its Statistical Distribution and its Effect on Circuit Performance." <em>IEEE Transactions on Electromagnetic Compatibility</em>, Vol. 45, No. 3, pp. 513–519. DOI: 10.1109/TEMC.2003.815529
                </li>
                <li>
                  Köhler, S., Baker, R., Strohmeier, M., & Martinovic, I. (2023). "Brokenwire: Wireless Disruption of CCS Electric Vehicle Charging." In: <em>Proceedings of the Network and Distributed System Security Symposium (NDSS 2023)</em>.
                </li>
                <li>
                  Trippel, T., Weisse, O., Xu, W., Honeyman, P., & Fu, K. (2017). "WALNUT: Waging Doubt on the Integrity of MEMS Accelerometers with Acoustic Injection Attacks." <em>IEEE European Symposium on Security and Privacy</em>.
                </li>
                <li>
                  Tesla Car Computer Security Research (2024). "Three Glitches to Rule One Car: Fault Injection Attacks on a Connected EV." <em>ACM Asia Conference on Computer and Communications Security (ACM CCS 2024)</em>.
                </li>
                <li>
                  Nagata, M. (2025). "Chip-Backside Vulnerability to Side Channel Attacks Exploiting Intentional Electromagnetic Interference." Presentation, <em>New England Hardware Security Day (NEHWS)</em>, Cambridge, MA.
                </li>
                <li>
                  Patent WO2017201409A1   "Protecting Motion Sensors from Acoustic Injection Attack." University of Michigan System. Filed 2017-05-19.
                </li>
                <li>
                  Patent US9203293B2   "Method of Suppressing Electromagnetic Interference Emission." Related frequency-jittering techniques in power converters.
                </li>
                <li>
                  Jiang et al. (2023). Electromagnetic Signal Injection Attack workflow and error modeling for automotive camera systems. Demonstrated credit-card-sized attack devices.
                </li>
                <li>
                  Zero Day Initiative / Automotive VR Team (2024). "MindShaRE: Decapping Chips for Electromagnetic Fault Injection (EMFI)." <em>Automotive Pwn2Own 2024</em>, Tokyo.
                </li>
              </ol>
            </div>
          </motion.section>

          {/* Back to Articles CTA */}
          <motion.div variants={fadeInUp} className="text-center pt-12 border-t border-gray-200 dark:border-gray-800">
            <Link 
              href="/#articles"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-600 hover:bg-accent-700 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <ArrowLeft size={20} />
              Back to All Articles
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </article>
  )
}
