'use client'

import { Calendar, Clock, ArrowLeft, Zap, Radio, Globe, TrendingUp, AlertTriangle, Wifi, Cable, Server, Layers, Activity, CheckCircle, XCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function FromCoaxialToFiber() {
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
            From Coaxial to Fiber
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
            The Evolution of Broadband Infrastructure and the Quest for Better Alternatives
          </p>
          
          <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <time dateTime="2026-01-06">January 6, 2026</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>35 min read</span>
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
              src="/articles/line_evolution.png"
              alt="Evolution of Broadband Infrastructure - From Coaxial to Fiber"
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
              Your home internet connection has undergone a remarkable transformation over the past three decades. What began as a simple coaxial cable carrying television signals has evolved into a sophisticated hybrid fiber-coax network, and increasingly, pure fiber-to-the-home deployments. Yet despite fiber optics&apos; dominance in modern telecommunications, the technology carries inherent limitations that have researchers exploring alternatives. This deep dive explores the technical evolution from coaxial to fiber, examines the surprising resiliency of copper-based systems, and investigates cutting-edge alternatives that might define the next generation of broadband.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.section variants={fadeInUp} className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { number: '68%', label: 'Finnish households with fiber access (2024)' },
                { number: '$200', label: 'DOCSIS 4.0 upgrade cost per home' },
                { number: '10 Gbps', label: 'Maximum DOCSIS 4.0 downstream speed' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800/50 border border-accent-200 dark:border-accent-500/30 rounded-xl p-8 text-center hover:transform hover:-translate-y-1 transition-all shadow-lg hover:shadow-accent-500/20">
                  <div className="text-5xl font-bold text-accent-600 dark:text-accent-400 mb-2">{stat.number}</div>
                  <div className="text-gray-700 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Part 1: Coaxial Foundation */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-accent-500 pl-6">
              Part 1: The Coaxial Foundation
            </h2>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Coaxial cable, invented in 1880 and patented by Oliver Heaviside, became the backbone of cable television networks throughout the latter half of the 20th century. The basic architecture is elegantly simple yet highly effective for its purpose.
              </p>
            </div>

            {/* Coaxial Cable Diagram */}
            <div className="bg-white dark:bg-gray-800/50 border-2 border-accent-200 dark:border-accent-500/30 rounded-2xl p-6 md:p-10 my-12 shadow-2xl">
              <h3 className="text-xl font-bold text-center text-accent-600 dark:text-accent-400 mb-8">Coaxial Cable Cross-Section</h3>
              
              <svg viewBox="0 0 800 400" className="w-full h-auto">
                {/* Outer Jacket */}
                <circle cx="400" cy="200" r="180" className="fill-gray-300 dark:fill-gray-700 stroke-accent-500 stroke-3"/>
                <text className="fill-gray-900 dark:fill-gray-200 text-sm" x="400" y="50" textAnchor="middle">Outer Plastic Jacket</text>
                
                {/* Braided Shield */}
                <circle cx="400" cy="200" r="140" className="fill-amber-200 dark:fill-amber-800 stroke-accent-500 stroke-2"/>
                <text className="fill-gray-900 dark:fill-gray-200 text-sm" x="400" y="90" textAnchor="middle">Braided Copper Shield</text>
                
                {/* Dielectric */}
                <circle cx="400" cy="200" r="100" className="fill-blue-100 dark:fill-blue-900/30 stroke-accent-500 stroke-2"/>
                <text className="fill-gray-900 dark:fill-gray-200 text-sm" x="400" y="130" textAnchor="middle">Dielectric Insulator</text>
                
                {/* Core */}
                <circle cx="400" cy="200" r="40" className="fill-accent-500 stroke-accent-600 stroke-3"/>
                <text className="fill-white dark:fill-white text-sm font-bold" x="400" y="205" textAnchor="middle">Copper Core</text>
                
                {/* Specs */}
                <rect x="50" y="320" width="700" height="60" rx="8" className="fill-gray-50 dark:fill-gray-800 stroke-accent-300 dark:stroke-accent-600 stroke-2"/>
                <text className="fill-gray-700 dark:fill-gray-300 text-xs" x="100" y="345" textAnchor="start">• Core: Solid or stranded copper (18-22 AWG)</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-xs" x="400" y="345" textAnchor="start">• Impedance: 75Ω (video) or 50Ω (RF)</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-xs" x="100" y="365" textAnchor="start">• Frequency Range: 5 MHz - 1000 MHz (modern)</text>
              </svg>
            </div>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                The genius of coaxial cable lies in its electromagnetic shielding. The outer conductor acts as both a return path and an electromagnetic shield, protecting the inner conductor from external interference. This design allows coaxial cables to carry high-frequency signals over longer distances than twisted-pair wiring could manage.
              </p>
            </div>
          </motion.section>

          {/* HFC Network Topology */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              The Hybrid Fiber-Coax Revolution
            </h3>

            <div className="bg-white dark:bg-gray-800/50 border-2 border-accent-200 dark:border-accent-500/30 rounded-2xl p-6 md:p-10 my-12 shadow-2xl">
              <h3 className="text-xl font-bold text-center text-accent-600 dark:text-accent-400 mb-8">Hybrid Fiber-Coax Network Topology</h3>
              
              <svg viewBox="0 0 900 600" className="w-full h-auto">
                {/* Headend */}
                <rect x="50" y="50" width="200" height="100" rx="8" className="fill-accent-50 dark:fill-accent-900/30 stroke-accent-500 stroke-3"/>
                <text className="fill-accent-700 dark:fill-accent-400 font-bold text-lg" x="150" y="85" textAnchor="middle">HEADEND</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-xs" x="150" y="105" textAnchor="middle">• CMTS</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-xs" x="150" y="120" textAnchor="middle">• Video Servers</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-xs" x="150" y="135" textAnchor="middle">• Internet Gateway</text>
                
                {/* Fiber connection */}
                <line x1="250" y1="100" x2="400" y2="100" className="stroke-green-500" strokeWidth="4"/>
                <text className="fill-green-600 dark:fill-green-400 text-sm" x="325" y="90" textAnchor="middle">Fiber (10-40km)</text>
                
                {/* Hub */}
                <rect x="400" y="50" width="180" height="100" rx="8" className="fill-green-50 dark:fill-green-900/30 stroke-green-500 stroke-3"/>
                <text className="fill-green-700 dark:fill-green-400 font-bold text-lg" x="490" y="85" textAnchor="middle">HUB/NODE</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-xs" x="490" y="105" textAnchor="middle">Primary Node</text>
                
                {/* Optical Nodes */}
                <rect x="150" y="250" width="140" height="80" rx="8" className="fill-blue-50 dark:fill-blue-900/30 stroke-blue-500 stroke-2"/>
                <text className="fill-blue-700 dark:fill-blue-400 font-bold" x="220" y="280" textAnchor="middle">OPTICAL NODE</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-xs" x="220" y="300" textAnchor="middle">Fiber → RF</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-xs" x="220" y="315" textAnchor="middle">25-2000 homes</text>
                
                <rect x="450" y="250" width="140" height="80" rx="8" className="fill-blue-50 dark:fill-blue-900/30 stroke-blue-500 stroke-2"/>
                <text className="fill-blue-700 dark:fill-blue-400 font-bold" x="520" y="280" textAnchor="middle">OPTICAL NODE</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-xs" x="520" y="300" textAnchor="middle">Fiber → RF</text>
                
                {/* Fiber branches */}
                <line x1="490" y1="150" x2="220" y2="250" className="stroke-green-500" strokeWidth="3" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" from="0" to="-10" dur="0.5s" repeatCount="indefinite"/>
                </line>
                <line x1="490" y1="150" x2="520" y2="250" className="stroke-green-500" strokeWidth="3" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" from="0" to="-10" dur="0.5s" repeatCount="indefinite"/>
                </line>
                
                {/* Coax Distribution */}
                <line x1="220" y1="330" x2="220" y2="420" className="stroke-amber-500" strokeWidth="4"/>
                <text className="fill-amber-600 dark:fill-amber-400 text-sm" x="240" y="380" textAnchor="start">Coax</text>
                
                {/* Homes */}
                {[150, 220, 290].map((x, i) => (
                  <g key={i}>
                    <rect x={x - 25} y="450" width="50" height="50" rx="4" className="fill-purple-50 dark:fill-purple-900/30 stroke-purple-500 stroke-2"/>
                    <text className="fill-purple-700 dark:fill-purple-400 text-xs font-bold" x={x} y="480" textAnchor="middle">HOME</text>
                    <line x1="220" y1="420" x2={x} y2="450" className="stroke-amber-500" strokeWidth="2"/>
                  </g>
                ))}
                
                {/* Frequency allocation */}
                <rect x="650" y="250" width="200" height="120" rx="8" className="fill-gray-50 dark:fill-gray-800 stroke-accent-500 stroke-2"/>
                <text className="fill-accent-700 dark:fill-accent-400 font-bold text-sm" x="750" y="275" textAnchor="middle">FREQUENCY SPLIT</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-xs" x="670" y="300" textAnchor="start">Downstream:</text>
                <text className="fill-accent-600 dark:fill-accent-400 text-xs font-bold" x="750" y="300" textAnchor="start">54-1002 MHz</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-xs" x="670" y="325" textAnchor="start">Upstream:</text>
                <text className="fill-accent-600 dark:fill-accent-400 text-xs font-bold" x="750" y="325" textAnchor="start">5-42 MHz</text>
              </svg>
            </div>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                This architecture proved remarkably successful. By the early 2000s, HFC networks were delivering broadband speeds that embarrassed incumbent telephone companies still relying on DSL over copper telephone lines. The key innovation was pushing fiber deeper into the network, reducing the distance that signals traveled over lossy coaxial cable.
              </p>
            </div>
          </motion.section>

          {/* DOCSIS Evolution Table */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              DOCSIS: The Cable Modem Standard
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white dark:bg-gray-800/50 rounded-xl overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-accent-500 text-white">
                    <th className="p-4 text-left font-bold">Standard</th>
                    <th className="p-4 text-left font-bold">Year</th>
                    <th className="p-4 text-left font-bold">Downstream</th>
                    <th className="p-4 text-left font-bold">Upstream</th>
                    <th className="p-4 text-left font-bold">Key Feature</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { std: 'DOCSIS 1.0', year: '1997', down: '40 Mbps', up: '10 Mbps', feature: 'Basic cable internet' },
                    { std: 'DOCSIS 2.0', year: '2001', down: '40 Mbps', up: '30 Mbps', feature: 'Improved upstream' },
                    { std: 'DOCSIS 3.0', year: '2006', down: '1 Gbps', up: '200 Mbps', feature: 'Channel bonding' },
                    { std: 'DOCSIS 3.1', year: '2013', down: '10 Gbps', up: '1-2 Gbps', feature: 'OFDM modulation' },
                    { std: 'DOCSIS 4.0', year: '2023', down: '10 Gbps', up: '6 Gbps', feature: 'Full-duplex, extended spectrum to 1.8 GHz' }
                  ].map((row, idx) => (
                    <tr key={idx} className="border-t border-gray-200 dark:border-gray-700 hover:bg-accent-50 dark:hover:bg-accent-900/10 transition-colors">
                      <td className="p-4 font-semibold text-accent-700 dark:text-accent-400">{row.std}</td>
                      <td className="p-4 text-gray-700 dark:text-gray-300">{row.year}</td>
                      <td className="p-4 text-gray-700 dark:text-gray-300">{row.down}</td>
                      <td className="p-4 text-gray-700 dark:text-gray-300">{row.up}</td>
                      <td className="p-4 text-gray-700 dark:text-gray-300">{row.feature}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                The progression reveals an interesting asymmetry. Downstream speeds improved dramatically while upstream speeds lagged behind—a reflection of the original cable TV architecture&apos;s one-way design philosophy. DOCSIS 4.0 finally addresses this limitation with Full-Duplex DOCSIS (FDX) and Extended Spectrum DOCSIS (ESD) options.
              </p>
            </div>
          </motion.section>

          {/* Part 2: Fiber Optic Transformation */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-accent-500 pl-6">
              Part 2: The Fiber Optic Transformation
            </h2>

            {/* Fiber Cable Structure */}
            <div className="bg-white dark:bg-gray-800/50 border-2 border-accent-200 dark:border-accent-500/30 rounded-2xl p-6 md:p-10 my-12 shadow-2xl">
              <h3 className="text-xl font-bold text-center text-accent-600 dark:text-accent-400 mb-8">Fiber Optic Cable Structure</h3>
              
              <svg viewBox="0 0 900 600" className="w-full h-auto">
                {/* Cross-section view - Concentric circles */}
                <g transform="translate(200, 200)">
                  {/* Outer Jacket */}
                  <circle cx="0" cy="0" r="150" className="fill-gray-400 dark:fill-gray-600 stroke-gray-700 dark:stroke-gray-500 stroke-3"/>
                  <text className="fill-gray-900 dark:fill-gray-200 text-sm font-semibold" x="0" y="-160" textAnchor="middle">Outer Jacket</text>
                  <text className="fill-gray-700 dark:fill-gray-400 text-xs" x="0" y="-145" textAnchor="middle">(Polyethylene)</text>
                  
                  {/* Strength Members */}
                  <circle cx="0" cy="0" r="120" className="fill-yellow-300 dark:fill-yellow-700 stroke-yellow-600 dark:stroke-yellow-500 stroke-2"/>
                  <text className="fill-gray-900 dark:fill-gray-200 text-xs" x="85" y="-85" textAnchor="start">Strength Members (Kevlar)</text>
                  
                  {/* Buffer Coating */}
                  <circle cx="0" cy="0" r="80" className="fill-blue-300 dark:fill-blue-700 stroke-blue-600 dark:stroke-blue-500 stroke-2"/>
                  <text className="fill-gray-900 dark:fill-gray-200 text-xs" x="60" y="-55" textAnchor="start">Buffer Coating</text>
                  
                  {/* Cladding */}
                  <circle cx="0" cy="0" r="45" className="fill-green-300 dark:fill-green-700 stroke-green-600 dark:stroke-green-500 stroke-2"/>
                  <text className="fill-gray-900 dark:fill-gray-200 text-xs font-semibold" x="0" y="60" textAnchor="middle">Cladding</text>
                  <text className="fill-gray-700 dark:fill-gray-400 text-xs" x="0" y="73" textAnchor="middle">(n = 1.46)</text>
                  
                  {/* Core */}
                  <circle cx="0" cy="0" r="12" className="fill-accent-500 stroke-accent-700 stroke-2"/>
                  <text className="fill-white dark:fill-white text-xs font-bold" x="0" y="4" textAnchor="middle">Core</text>
                  <text className="fill-gray-900 dark:fill-gray-200 text-xs font-semibold" x="0" y="-20" textAnchor="middle">(n = 1.47)</text>
                </g>

                {/* Light Propagation Diagram */}
                <g transform="translate(500, 150)">
                  <rect x="0" y="0" width="350" height="120" rx="8" className="fill-gray-50 dark:fill-gray-800/50 stroke-accent-500 stroke-2"/>
                  <text className="fill-accent-700 dark:fill-accent-400 font-bold text-sm" x="175" y="25" textAnchor="middle">Light Propagation</text>
                  
                  {/* Fiber boundary lines */}
                  <line x1="20" y1="50" x2="330" y2="50" className="stroke-green-600 dark:stroke-green-400 stroke-2"/>
                  <line x1="20" y1="90" x2="330" y2="90" className="stroke-green-600 dark:stroke-green-400 stroke-2"/>
                  
                  {/* Bouncing light ray with animation */}
                  <path d="M 20 70 L 60 55 L 100 70 L 140 55 L 180 70 L 220 55 L 260 70 L 300 55 L 330 70" 
                        className="stroke-yellow-400 fill-none stroke-3">
                    <animate attributeName="stroke-dasharray" from="0,1000" to="1000,0" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
                  </path>
                  
                  {/* Arrow indicators */}
                  <polygon points="330,65 325,70 330,75" className="fill-yellow-400"/>
                  
                  <text className="fill-gray-700 dark:fill-gray-300 text-xs" x="175" y="110" textAnchor="middle">Total Internal Reflection</text>
                </g>

                {/* Fiber Types Comparison */}
                <g transform="translate(500, 300)">
                  <rect x="0" y="0" width="350" height="140" rx="8" className="fill-accent-50 dark:fill-accent-900/30 stroke-accent-500 stroke-2"/>
                  <text className="fill-accent-700 dark:fill-accent-400 font-bold text-sm" x="175" y="25" textAnchor="middle">Fiber Types</text>
                  
                  {/* Single-Mode */}
                  <g transform="translate(20, 45)">
                    <rect x="0" y="0" width="310" height="35" rx="4" className="fill-white dark:fill-gray-800 stroke-accent-400 stroke-1"/>
                    <circle cx="20" cy="17.5" r="4" className="fill-accent-500"/>
                    <text className="fill-gray-900 dark:fill-gray-200 text-xs font-bold" x="35" y="15">Single-Mode Fiber (SMF)</text>
                    <text className="fill-gray-700 dark:fill-gray-300 text-xs" x="35" y="28">Core: 8-10 μm • Long distance • High bandwidth</text>
                  </g>
                  
                  {/* Multi-Mode */}
                  <g transform="translate(20, 90)">
                    <rect x="0" y="0" width="310" height="35" rx="4" className="fill-white dark:fill-gray-800 stroke-accent-400 stroke-1"/>
                    <circle cx="20" cy="17.5" r="8" className="fill-blue-500"/>
                    <text className="fill-gray-900 dark:fill-gray-200 text-xs font-bold" x="35" y="15">Multi-Mode Fiber (MMF)</text>
                    <text className="fill-gray-700 dark:fill-gray-300 text-xs" x="35" y="28">Core: 50-62.5 μm • Short distance • Lower cost</text>
                  </g>
                </g>

                {/* Legend for refractive index */}
                <g transform="translate(50, 480)">
                  <text className="fill-gray-600 dark:fill-gray-400 text-xs italic" x="0" y="0">n = refractive index</text>
                  <text className="fill-gray-600 dark:fill-gray-400 text-xs italic" x="0" y="15">μm = micrometer (10⁻⁶ meters)</text>
                </g>
              </svg>
            </div>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                The physics behind fiber optics relies on total internal reflection. The core has a slightly higher refractive index than the cladding (1.47 vs 1.46), causing light to reflect at the boundary rather than escape. This allows light signals to travel vast distances with minimal loss—modern single-mode fibers achieve attenuation as low as 0.15 dB/km at 1550nm wavelength.
              </p>
            </div>
          </motion.section>

          {/* Finland Statistics */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Finland&apos;s Fiber Deployment
            </h3>

            <div className="bg-gradient-to-br from-accent-50 to-blue-50 dark:from-accent-900/20 dark:to-blue-900/20 border-2 border-accent-500 rounded-2xl p-8 mb-8 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <Globe className="w-12 h-12 text-accent-600 dark:text-accent-400" />
                <div>
                  <div className="text-5xl font-bold text-accent-600 dark:text-accent-400">68%</div>
                  <div className="text-gray-700 dark:text-gray-300">Finnish households with fiber access (Q3 2024)</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {[
                  { region: 'Åland', coverage: '98%', highlight: true },
                  { region: 'Ostrobothnia', coverage: '81%', highlight: false },
                  { region: 'North Ostrobothnia', coverage: '81%', highlight: false },
                  { region: 'Pirkanmaa', coverage: '78%', highlight: false }
                ].map((item, idx) => (
                  <div key={idx} className={`${item.highlight ? 'bg-accent-100 dark:bg-accent-900/40' : 'bg-white dark:bg-gray-800/50'} border border-accent-300 dark:border-accent-600/30 rounded-lg p-4`}>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-900 dark:text-gray-200 font-semibold">{item.region}</span>
                      <span className="text-accent-600 dark:text-accent-400 font-bold text-xl">{item.coverage}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Finland has emerged as a European leader in fiber optic deployment. As of September 2024, Finland&apos;s fiber-optic broadband network reaches nearly 2 million homes—68% of Finnish households. This represents a 7 percentage-point increase over a single year, demonstrating aggressive expansion.
              </p>
            </div>
          </motion.section>

          {/* Part 3: The Hidden Cost of Fiber */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-accent-500 pl-6">
              Part 3: The Hidden Cost of Fiber
            </h2>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-8 rounded-r-xl my-8 shadow-xl">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-yellow-600 dark:text-yellow-400 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-yellow-800 dark:text-yellow-300 mb-3">Critical Limitation: Fragility</h4>
                  <p className="text-gray-800 dark:text-gray-200">
                    Fiber optic cables made of glass are much more fragile than copper cables. The glass fibers can break if bent too sharply (typically bend radius &lt;15x cable diameter) or subjected to excessive pressure during installation or construction activities.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { title: 'Splicing Complexity', desc: 'Fusion splicing machines cost $3,000-$30,000 vs $50-$200 for copper tools', icon: XCircle },
                { title: 'Cleaning Requirements', desc: 'Professional cleaning equipment and training required for connector cleanliness', icon: XCircle },
                { title: 'Specialized Testing', desc: 'OTDR equipment costs $5,000-$50,000 vs $100-$500 for copper testers', icon: XCircle },
                { title: 'Environmental Sensitivity', desc: 'Affected by hydrogen gas, chemicals, extreme temperatures, and moisture', icon: XCircle }
              ].map((item, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800/50 border border-red-200 dark:border-red-500/30 rounded-xl p-6 shadow-sm">
                  <item.icon className="w-8 h-8 text-red-600 dark:text-red-400 mb-3" />
                  <h4 className="text-lg font-bold text-red-700 dark:text-red-400 mb-2">{item.title}</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Part 4: Copper's Resilience */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-accent-500 pl-6">
              Part 4: The Case for Copper&apos;s Resilience
            </h2>

            {/* DOCSIS 4.0 Diagram */}
            <div className="bg-white dark:bg-gray-800/50 border-2 border-accent-200 dark:border-accent-500/30 rounded-2xl p-6 md:p-10 my-12 shadow-2xl">
              <h3 className="text-xl font-bold text-center text-accent-600 dark:text-accent-400 mb-8">DOCSIS 4.0 Full-Duplex Operation</h3>
              
              <svg viewBox="0 0 900 500" className="w-full h-auto">
                {/* Spectrum bands */}
                <rect x="100" y="100" width="700" height="80" rx="8" className="fill-green-50 dark:fill-green-900/30 stroke-green-500 stroke-2"/>
                <text className="fill-green-700 dark:fill-green-400 font-bold" x="450" y="130" textAnchor="middle">5-85 MHz: Upstream (Legacy)</text>
                
                <rect x="100" y="200" width="700" height="80" rx="8" className="fill-purple-50 dark:fill-purple-900/30 stroke-purple-500 stroke-3"/>
                <text className="fill-purple-700 dark:fill-purple-400 font-bold" x="450" y="230" textAnchor="middle">108-684 MHz: Full-Duplex Band (FDX)</text>
                <text className="fill-purple-600 dark:fill-purple-400 text-sm" x="450" y="255" textAnchor="middle">Both upstream AND downstream simultaneously</text>
                
                <rect x="100" y="300" width="700" height="80" rx="8" className="fill-blue-50 dark:fill-blue-900/30 stroke-blue-500 stroke-2"/>
                <text className="fill-blue-700 dark:fill-blue-400 font-bold" x="450" y="330" textAnchor="middle">684-1002 MHz: Downstream</text>
                
                {/* Innovation callout */}
                <rect x="100" y="400" width="700" height="80" rx="8" className="fill-accent-50 dark:fill-accent-900/30 stroke-accent-500 stroke-2"/>
                <text className="fill-accent-700 dark:fill-accent-400 font-bold text-lg" x="450" y="430" textAnchor="middle">KEY INNOVATION: Echo Cancellation</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-sm" x="450" y="455" textAnchor="middle">Digital Signal Processing removes echo from simultaneous transmission</text>
              </svg>
            </div>

            {/* Cost Comparison */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white dark:bg-gray-800/50 rounded-xl overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-accent-500 text-white">
                    <th className="p-4 text-left font-bold">Technology</th>
                    <th className="p-4 text-left font-bold">Cost per Passing</th>
                    <th className="p-4 text-left font-bold">Deployment Time</th>
                    <th className="p-4 text-left font-bold">Infrastructure</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { tech: 'DOCSIS 4.0 Upgrade', cost: '$100-$200', time: 'Software + node upgrades', infra: 'Builds on existing' },
                    { tech: 'Fiber to Home', cost: '$500-$1,400', time: 'Complete new installation', infra: 'All-new infrastructure' }
                  ].map((row, idx) => (
                    <tr key={idx} className="border-t border-gray-200 dark:border-gray-700 hover:bg-accent-50 dark:hover:bg-accent-900/10 transition-colors">
                      <td className="p-4 font-semibold text-accent-700 dark:text-accent-400">{row.tech}</td>
                      <td className="p-4 text-gray-700 dark:text-gray-300">{row.cost}</td>
                      <td className="p-4 text-gray-700 dark:text-gray-300">{row.time}</td>
                      <td className="p-4 text-gray-700 dark:text-gray-300">{row.infra}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                The economics are compelling. Comcast reported that upgrading to DOCSIS 4.0 costs under $200 per passing—a fraction of fiber deployment costs. This cost advantage is why cable operators aren&apos;t rushing to abandon their HFC networks.
              </p>
            </div>
          </motion.section>

          {/* Part 5: Beyond Fiber */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-accent-500 pl-6">
              Part 5: Beyond Fiber—The Quest for Better Alternatives
            </h2>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-2 border-purple-500 rounded-2xl p-8 mb-8 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <Zap className="w-12 h-12 text-purple-600 dark:text-purple-400" />
                <div>
                  <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400">Hollow-Core Photonic Crystal Fiber</h3>
                  <p className="text-gray-700 dark:text-gray-300">Light travels through air instead of glass</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { feature: 'Lower Latency', value: '~33% faster (n ≈ 1.002 vs 1.47)', icon: CheckCircle },
                  { feature: 'Higher Power', value: 'Watt-level transmission demonstrated', icon: CheckCircle },
                  { feature: 'No Rayleigh Scattering', value: 'Potential <0.15 dB/km loss', icon: CheckCircle },
                  { feature: 'Manufacturing Cost', value: '10-100x higher than standard fiber', icon: AlertTriangle }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white dark:bg-gray-800/50 border border-purple-300 dark:border-purple-600/30 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <item.icon className={`w-6 h-6 flex-shrink-0 ${item.icon === CheckCircle ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'}`} />
                      <div>
                        <div className="font-bold text-gray-900 dark:text-gray-200">{item.feature}</div>
                        <div className="text-sm text-gray-700 dark:text-gray-300">{item.value}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Recent breakthroughs have been dramatic. In 2020, researchers at the University of Southampton published results showing hollow-core fibers with attenuation <strong>lower than solid-core fibers</strong> at multiple wavelengths—0.28 dB/km in the C and L telecommunication bands.
              </p>
            </div>
          </motion.section>

          {/* Conclusion */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-accent-500 pl-6">
              Conclusion: There Is No Silver Bullet
            </h2>

            <div className="bg-accent-50 dark:bg-accent-900/20 border-l-4 border-accent-500 p-8 rounded-r-xl my-8 shadow-xl">
              <div className="space-y-4">
                <p className="text-lg text-gray-800 dark:text-gray-200">
                  <strong>Fiber optics dominates</strong> long-distance and high-bandwidth applications because light in glass offers unmatched bandwidth-distance product. But fragility, installation complexity, and cost limit its universal deployment.
                </p>
                
                <p className="text-lg text-gray-800 dark:text-gray-200">
                  <strong>Coaxial and copper systems excel</strong> in durability, ease of installation, and leveraging existing infrastructure. But fundamental electromagnetic limits cap their bandwidth and distance.
                </p>
                
                <p className="text-lg text-gray-800 dark:text-gray-200">
                  <strong>Hollow-core fiber could theoretically</strong> combine the best of both worlds—but manufacturing challenges and cost make it impractical for mass deployment in the 2020s.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
              {[
                { title: 'Urban Core', tech: 'FTTH', icon: Server },
                { title: 'Suburban', tech: 'DOCSIS 4.0', icon: Cable },
                { title: 'Rural Villages', tech: 'Subsidized Fiber', icon: Radio },
                { title: 'Remote Areas', tech: '5G/6G Wireless', icon: Wifi }
              ].map((item, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800/50 border border-accent-200 dark:border-accent-500/30 rounded-xl p-6 text-center hover:border-accent-500 dark:hover:border-accent-400 transition-colors shadow-sm">
                  <item.icon className="w-12 h-12 text-accent-600 dark:text-accent-400 mx-auto mb-3" />
                  <div className="font-bold text-gray-900 dark:text-gray-200 mb-1">{item.title}</div>
                  <div className="text-sm text-gray-700 dark:text-gray-400">{item.tech}</div>
                </div>
              ))}
            </div>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                The quest for a cable &quot;more durable and faster&quot; than fiber at lower cost faces insurmountable physics. Speed is bounded by the speed of light in the medium—fiber already approaches this limit. Durability favors copper, but at severe bandwidth sacrifice. Cost favors leveraging existing infrastructure, which means HFC/DOCSIS for much of the world.
              </p>

              <p className="text-xl font-semibold text-center pt-8 text-accent-700 dark:text-accent-400">
                Perhaps the real innovation isn&apos;t finding a single technology to replace fiber, but rather building intelligent hybrid networks that dynamically select the optimal technology for each segment.
              </p>
            </div>
          </motion.section>

          {/* References */}
          <motion.section variants={fadeInUp} className="mb-16">
            <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">References & Further Reading</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-accent-600 dark:text-accent-400 mb-2">Fiber Optics Research:</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm ml-4">
                    <li>• Jasion et al., &quot;Hollow Core NANF with 0.28 dB/km Attenuation in the C and L Bands,&quot; <em>OFC 2020</em></li>
                    <li>• Debord et al., &quot;Ultralow transmission loss in inhibited-coupling guiding hollow fibers,&quot; <em>Optica</em>, Vol. 4, 2017</li>
                    <li>• Nature Communications, &quot;Hollow core optical fibres with comparable attenuation to silica fibres,&quot; 2020</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-accent-600 dark:text-accent-400 mb-2">Network Infrastructure:</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm ml-4">
                    <li>• Traficom, &quot;Fibre optic connections available to nearly 2 million households,&quot; 2024</li>
                    <li>• CableLabs, &quot;DOCSIS 4.0 Technology Specifications,&quot; 2023</li>
                    <li>• IEEE Spectrum, &quot;When Copper Broadband Beats Fiber Optics,&quot; 2022</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </article>
  )
}