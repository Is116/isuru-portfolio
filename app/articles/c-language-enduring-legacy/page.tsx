'use client'

import { Calendar, Clock, ArrowLeft, Target, Zap, Wrench, Car, Home, Heart, Plane, Factory, Radio, Hammer, BookOpen, Github, Database, Rocket } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function CLangEnduringLegacyArticle() {
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
            The Enduring Legacy of C
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
            Why Half a Century Later, We Still Can&apos;t Live Without It
          </p>
          
          <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <time dateTime="2025-12-25">December 25, 2025</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>22 min read</span>
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
              src="/articles/c.png"
              alt="C Programming Language"
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
              In the gleaming corridors of Bell Labs in 1972, a young computer scientist named Dennis Ritchie was quietly crafting something revolutionary. He couldn&apos;t have known that his creation the C programming language would become the invisible foundation upon which the entire digital world would be built. More than fifty years later, C remains not just relevant but indispensable, powering everything from the smartphone in your pocket to the aircraft soaring overhead.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.section variants={fadeInUp} className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { number: '50+', label: 'Years of Active Development' },
                { number: '90%', label: 'Of OS Kernels Use C' },
                { number: 'Billions', label: 'Of Devices Run C Code Daily' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800/50 border border-accent-200 dark:border-accent-500/30 rounded-xl p-8 text-center hover:transform hover:-translate-y-1 transition-all shadow-lg hover:shadow-accent-500/20">
                  <div className="text-5xl font-bold text-accent-600 dark:text-accent-400 mb-2">{stat.number}</div>
                  <div className="text-gray-700 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Genesis Section */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-accent-500 pl-6">
              The Genesis: From BCPL to C
            </h2>

            {/* Timeline */}
            <div className="relative pl-8 md:pl-12 my-12 bg-gray-50 dark:bg-gray-800/30 rounded-xl p-6">
              <div className="absolute left-8 md:left-9 top-6 bottom-6 w-1 bg-gradient-to-b from-accent-500 to-accent-600"></div>
              
              {[
                { year: '1969-1970', desc: 'Ken Thompson creates B language, derived from Martin Richards\'s BCPL' },
                { year: '1971-1973', desc: 'Dennis Ritchie transforms B into C, adding data types and modern syntax' },
                { year: '1972', desc: 'The most creative period - C takes its modern form' },
                { year: '1973', desc: 'Unix kernel rewritten in C, proving the concept of OS development in high-level language' },
                { year: '1978', desc: 'Kernighan & Ritchie publish "The C Programming Language" (K&R)' },
                { year: '1989', desc: 'ANSI standardizes C (C89/C90)' },
                { year: '2023', desc: 'C23 standard introduces modern features while maintaining backward compatibility' }
              ].map((item, idx) => (
                <div key={idx} className="relative mb-8 pl-8">
                  <div className="absolute -left-5 md:-left-6 top-1 w-4 h-4 rounded-full bg-accent-500 shadow-lg shadow-accent-500/50"></div>
                  <div className="font-bold text-xl text-accent-600 dark:text-accent-400 mb-2">{item.year}</div>
                  <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                The story of C begins between 1969 and 1973, evolving alongside the nascent Unix operating system, with its most creative period occurring during 1972. Dennis Ritchie began modifying B (created by his colleague Ken Thompson), adding data types and syntax characteristics that transformed it into C by 1972.
              </p>
              <p>
                Derived from the typeless language BCPL by Martin Richards, C evolved to include a type structure. What started as a tool to improve a limited programming environment on a tiny machine grew into one of the dominant languages of computing.
              </p>
              <p>
                C&apos;s design was based on Ritchie&apos;s experience with high-level languages for Multics implementation, but was significantly reduced in size because computers of that era had very limited capacity there simply wasn&apos;t enough memory or processing power to support large compilers for complex languages. This enforced minimality became one of C&apos;s greatest strengths.
              </p>
            </div>
          </motion.section>

          {/* Architecture Section with SVG */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-accent-500 pl-6">
              C Language Architecture: The Foundation of Modern Computing
            </h2>

            <div className="bg-white dark:bg-gray-800/50 border-2 border-accent-200 dark:border-accent-500/30 rounded-2xl p-6 md:p-10 my-12 shadow-2xl">
              <h3 className="text-xl font-bold text-center text-accent-600 dark:text-accent-400 mb-8">C Language Architecture - Layer Model</h3>
              
              <svg viewBox="0 0 800 600" className="w-full h-auto">
                <rect className="fill-gray-50 dark:fill-gray-800 stroke-accent-500 stroke-2 hover:fill-gray-100 dark:hover:fill-gray-700 transition-colors cursor-pointer" x="100" y="480" width="600" height="80" rx="8"/>
                <text className="fill-gray-900 dark:fill-gray-200 font-mono text-sm font-semibold" x="400" y="510" textAnchor="middle">HARDWARE LAYER</text>
                <text className="fill-gray-600 dark:fill-gray-400 text-xs" x="400" y="535" textAnchor="middle">CPU • Memory • I/O Devices • Registers</text>
                
                <rect className="fill-gray-50 dark:fill-gray-800 stroke-accent-500 stroke-2 hover:fill-gray-100 dark:hover:fill-gray-700 transition-colors cursor-pointer" x="100" y="380" width="600" height="80" rx="8"/>
                <text className="fill-gray-900 dark:fill-gray-200 font-mono text-sm font-semibold" x="400" y="410" textAnchor="middle">ASSEMBLY INTERFACE</text>
                <text className="fill-gray-600 dark:fill-gray-400 text-xs" x="400" y="435" textAnchor="middle">Direct Hardware Access • Inline Assembly Support</text>
                
                <rect className="fill-gray-50 dark:fill-gray-800 stroke-accent-500 stroke-2 hover:fill-gray-100 dark:hover:fill-gray-700 transition-colors cursor-pointer" x="100" y="250" width="600" height="110" rx="8"/>
                <text className="fill-gray-900 dark:fill-gray-200 font-mono text-sm font-semibold" x="400" y="280" textAnchor="middle">C LANGUAGE CORE</text>
                <text className="fill-gray-600 dark:fill-gray-400 text-xs" x="250" y="310" textAnchor="middle">Pointers</text>
                <text className="fill-gray-600 dark:fill-gray-400 text-xs" x="400" y="310" textAnchor="middle">Memory Management</text>
                <text className="fill-gray-600 dark:fill-gray-400 text-xs" x="550" y="310" textAnchor="middle">Type System</text>
                <text className="fill-gray-600 dark:fill-gray-400 text-xs" x="250" y="335" textAnchor="middle">Control Flow</text>
                <text className="fill-gray-600 dark:fill-gray-400 text-xs" x="400" y="335" textAnchor="middle">Data Structures</text>
                <text className="fill-gray-600 dark:fill-gray-400 text-xs" x="550" y="335" textAnchor="middle">Preprocessor</text>
                
                <rect className="fill-gray-50 dark:fill-gray-800 stroke-accent-500 stroke-2 hover:fill-gray-100 dark:hover:fill-gray-700 transition-colors cursor-pointer" x="100" y="140" width="600" height="90" rx="8"/>
                <text className="fill-gray-900 dark:fill-gray-200 font-mono text-sm font-semibold" x="400" y="170" textAnchor="middle">C STANDARD LIBRARY (libc)</text>
                <text className="fill-gray-600 dark:fill-gray-400 text-xs" x="200" y="195" textAnchor="middle">stdio.h</text>
                <text className="fill-gray-600 dark:fill-gray-400 text-xs" x="300" y="195" textAnchor="middle">stdlib.h</text>
                <text className="fill-gray-600 dark:fill-gray-400 text-xs" x="400" y="195" textAnchor="middle">string.h</text>
                <text className="fill-gray-600 dark:fill-gray-400 text-xs" x="500" y="195" textAnchor="middle">math.h</text>
                <text className="fill-gray-600 dark:fill-gray-400 text-xs" x="600" y="195" textAnchor="middle">time.h</text>
                <text className="fill-gray-600 dark:fill-gray-400 text-xs" x="300" y="215" textAnchor="middle">pthread.h</text>
                <text className="fill-gray-600 dark:fill-gray-400 text-xs" x="500" y="215" textAnchor="middle">errno.h</text>
                
                <rect className="fill-gray-50 dark:fill-gray-800 stroke-accent-500 stroke-2 hover:fill-gray-100 dark:hover:fill-gray-700 transition-colors cursor-pointer" x="100" y="40" width="600" height="80" rx="8"/>
                <text className="fill-gray-900 dark:fill-gray-200 font-mono text-sm font-semibold" x="400" y="70" textAnchor="middle">APPLICATIONS & SYSTEMS</text>
                <text className="fill-gray-600 dark:fill-gray-400 text-xs" x="200" y="95" textAnchor="middle">OS Kernels</text>
                <text className="fill-gray-600 dark:fill-gray-400 text-xs" x="350" y="95" textAnchor="middle">Embedded Systems</text>
                <text className="fill-gray-600 dark:fill-gray-400 text-xs" x="520" y="95" textAnchor="middle">Databases</text>
                <text className="fill-gray-600 dark:fill-gray-400 text-xs" x="620" y="95" textAnchor="middle">Drivers</text>
                
                <line className="stroke-accent-500 stroke-2" x1="400" y1="120" x2="400" y2="140" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" from="0" to="-10" dur="0.5s" repeatCount="indefinite"/>
                </line>
                <line className="stroke-accent-500 stroke-2" x1="400" y1="230" x2="400" y2="250" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" from="0" to="-10" dur="0.5s" repeatCount="indefinite"/>
                </line>
                <line className="stroke-accent-500 stroke-2" x1="400" y1="360" x2="400" y2="380" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" from="0" to="-10" dur="0.5s" repeatCount="indefinite"/>
                </line>
                <line className="stroke-accent-500 stroke-2" x1="400" y1="460" x2="400" y2="480" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" from="0" to="-10" dur="0.5s" repeatCount="indefinite"/>
                </line>
              </svg>
            </div>
          </motion.section>

          {/* Why C is Superior */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-accent-500 pl-6">
              Why C is Architecturally Superior
            </h2>

            <div className="space-y-6">
              {[
                { icon: Target, title: 'Minimal Abstraction', desc: 'C provides just enough abstraction from assembly language to be portable, while staying close enough to hardware for maximum performance. This sweet spot makes C ideal for systems programming.' },
                { icon: Zap, title: 'Direct Memory Control', desc: 'Unlike higher-level languages, C gives programmers complete control over memory allocation and deallocation. This enables optimization that\'s impossible in garbage-collected languages.' },
                { icon: Wrench, title: 'Hardware Access', desc: 'C can manipulate arbitrary memory addresses, read/write hardware registers, and use inline assembly when needed. This makes it indispensable for device drivers and embedded systems.' }
              ].map((feature, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800/50 border border-accent-200 dark:border-accent-500 rounded-xl p-8 hover:border-accent-500 dark:hover:border-accent-400 transition-colors shadow-sm">
                  <feature.icon className="w-10 h-10 text-accent-600 dark:text-accent-400 mb-4" />
                  <h3 className="text-xl font-bold text-accent-600 dark:text-accent-400 mb-3">{feature.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Embedded Systems Section */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-accent-500 pl-6">
              C in Embedded Systems: Architecture Deep Dive
            </h2>

            <div className="bg-white dark:bg-gray-800/50 border-2 border-accent-200 dark:border-accent-500/30 rounded-2xl p-6 md:p-10 my-12 shadow-2xl">
              <h3 className="text-xl font-bold text-center text-accent-600 dark:text-accent-400 mb-8">Embedded System Architecture with C</h3>
              
              <svg viewBox="0 0 900 700" className="w-full h-auto">
                {/* Microcontroller Box */}
                <rect className="fill-gray-50 dark:fill-gray-800 stroke-accent-500 stroke-2" x="50" y="50" width="800" height="600" rx="12"/>
                <text className="fill-gray-900 dark:fill-gray-200 font-bold text-lg" x="450" y="85" textAnchor="middle">MICROCONTROLLER / EMBEDDED SYSTEM</text>
                
                {/* CPU Core */}
                <rect className="fill-accent-50 dark:fill-accent-900/30 stroke-accent-500 stroke-2" x="80" y="120" width="220" height="120" rx="8"/>
                <text className="fill-accent-700 dark:fill-accent-400 font-bold" x="190" y="145" textAnchor="middle">CPU CORE</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-sm" x="190" y="170" textAnchor="middle">ARM Cortex / AVR / x86</text>
                <text className="fill-gray-600 dark:fill-gray-400 text-xs" x="190" y="190" textAnchor="middle">Executes C Code</text>
                <text className="fill-gray-600 dark:fill-gray-400 text-xs" x="190" y="210" textAnchor="middle">Clock: MHz range</text>
                <text className="fill-gray-600 dark:fill-gray-400 text-xs" x="190" y="230" textAnchor="middle">Real-time Processing</text>
                
                {/* Memory */}
                <rect className="fill-accent-50 dark:fill-accent-900/30 stroke-accent-500 stroke-2" x="320" y="120" width="220" height="120" rx="8"/>
                <text className="fill-accent-700 dark:fill-accent-400 font-bold" x="430" y="145" textAnchor="middle">MEMORY</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-sm" x="430" y="170" textAnchor="middle">Flash ROM: Program</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-sm" x="430" y="190" textAnchor="middle">SRAM: Variables</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-sm" x="430" y="210" textAnchor="middle">EEPROM: Config</text>
                <text className="fill-gray-600 dark:fill-gray-400 text-xs" x="430" y="230" textAnchor="middle">Stack & Heap</text>
                
                {/* Peripherals */}
                <rect className="fill-accent-50 dark:fill-accent-900/30 stroke-accent-500 stroke-2" x="560" y="120" width="260" height="120" rx="8"/>
                <text className="fill-accent-700 dark:fill-accent-400 font-bold" x="690" y="145" textAnchor="middle">PERIPHERALS</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-sm" x="690" y="170" textAnchor="middle">GPIO Pins</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-sm" x="690" y="190" textAnchor="middle">UART/SPI/I2C</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-sm" x="690" y="210" textAnchor="middle">ADC/DAC</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-sm" x="690" y="230" textAnchor="middle">Timers/PWM</text>
                
                {/* C Runtime Environment */}
                <rect className="fill-gray-100 dark:fill-gray-700/50 stroke-accent-500 stroke-2" x="80" y="270" width="740" height="80" rx="8"/>
                <text className="fill-accent-700 dark:fill-accent-400 font-bold" x="450" y="295" textAnchor="middle">C RUNTIME ENVIRONMENT</text>
                <text className="fill-gray-600 dark:fill-gray-400 text-sm" x="200" y="320" textAnchor="middle">Startup Code</text>
                <text className="fill-gray-600 dark:fill-gray-400 text-sm" x="350" y="320" textAnchor="middle">Stack Init</text>
                <text className="fill-gray-600 dark:fill-gray-400 text-sm" x="475" y="320" textAnchor="middle">BSS Clear</text>
                <text className="fill-gray-600 dark:fill-gray-400 text-sm" x="600" y="320" textAnchor="middle">main() Entry</text>
                <text className="fill-gray-600 dark:fill-gray-400 text-sm" x="200" y="340" textAnchor="middle">Interrupt Vectors</text>
                <text className="fill-gray-600 dark:fill-gray-400 text-sm" x="350" y="340" textAnchor="middle">ISR Handlers</text>
                
                {/* C Application Code */}
                <rect className="fill-green-50 dark:fill-green-900/20 stroke-green-500 stroke-2" x="80" y="380" width="360" height="140" rx="8"/>
                <text className="fill-green-700 dark:fill-green-400 font-bold" x="260" y="405" textAnchor="middle">C APPLICATION CODE</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-xs" x="110" y="430" textAnchor="start">• Control Algorithms</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-xs" x="110" y="450" textAnchor="start">• Sensor Reading</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-xs" x="110" y="470" textAnchor="start">• Data Processing</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-xs" x="110" y="490" textAnchor="start">• Communication Protocols</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-xs" x="110" y="510" textAnchor="start">• State Machines</text>
                
                {/* Hardware Abstraction */}
                <rect className="fill-blue-50 dark:fill-blue-900/20 stroke-blue-500 stroke-2" x="460" y="380" width="360" height="240" rx="8"/>
                <text className="fill-blue-700 dark:fill-blue-400 font-bold" x="640" y="405" textAnchor="middle">HARDWARE ABSTRACTION</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-xs font-mono" x="490" y="430" textAnchor="start">Register Definitions:</text>
                <text className="fill-accent-600 dark:fill-accent-400 text-xs font-mono" x="490" y="450" textAnchor="start">#define GPIO_PORT</text>
                <text className="fill-accent-600 dark:fill-accent-400 text-xs font-mono" x="490" y="470" textAnchor="start">  *(volatile uint8_t*)0x40</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-xs font-mono" x="490" y="500" textAnchor="start">Device Drivers:</text>
                <text className="fill-gray-600 dark:fill-gray-400 text-xs" x="490" y="520" textAnchor="start">• UART Driver</text>
                <text className="fill-gray-600 dark:fill-gray-400 text-xs" x="490" y="540" textAnchor="start">• SPI Driver</text>
                <text className="fill-gray-600 dark:fill-gray-400 text-xs" x="490" y="560" textAnchor="start">• I2C Driver</text>
                <text className="fill-gray-600 dark:fill-gray-400 text-xs" x="490" y="585" textAnchor="start">Direct Memory Mapped I/O</text>
                <text className="fill-gray-600 dark:fill-gray-400 text-xs" x="490" y="605" textAnchor="start">Bit Manipulation</text>
              </svg>
            </div>

            {/* Embedded Applications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {[
                { icon: Car, title: 'Automotive ECUs', desc: 'Engine control, ABS, airbag systems, infotainment. C provides deterministic timing crucial for safety-critical operations.' },
                { icon: Home, title: 'IoT Devices', desc: 'Smart home sensors, thermostats, security systems. Minimal memory footprint allows C to run on resource-constrained devices.' },
                { icon: Heart, title: 'Medical Devices', desc: 'Pacemakers, insulin pumps, monitoring equipment. C\'s reliability and real-time capabilities are life-critical.' },
                { icon: Plane, title: 'Avionics', desc: 'Flight control systems, navigation, autopilot. Meets DO-178C certification requirements for aviation software.' },
                { icon: Factory, title: 'Industrial Control', desc: 'PLCs, robotics, factory automation. Precise timing control for coordinated machinery.' },
                { icon: Radio, title: 'Communication', desc: 'Routers, switches, modems, cellular base stations. Handles high-speed packet processing efficiently.' }
              ].map((app, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800/50 border border-accent-200 dark:border-accent-500/30 rounded-xl p-6 hover:border-accent-500 dark:hover:border-accent-400 transition-colors shadow-sm">
                  <app.icon className="w-12 h-12 text-accent-600 dark:text-accent-400 mb-3" />
                  <h4 className="text-lg font-bold text-accent-600 dark:text-accent-400 mb-2">{app.title}</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{app.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Operating System Architecture */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-accent-500 pl-6">
              Operating System Architecture: C at the Core
            </h2>

            <div className="bg-white dark:bg-gray-800/50 border-2 border-accent-200 dark:border-accent-500/30 rounded-2xl p-6 md:p-10 my-12 shadow-2xl">
              <h3 className="text-xl font-bold text-center text-accent-600 dark:text-accent-400 mb-8">Operating System Kernel Architecture (Linux Example)</h3>
              
              <svg viewBox="0 0 900 800" className="w-full h-auto">
                {/* User Space */}
                <rect className="fill-blue-50 dark:fill-blue-900/20 stroke-blue-500 stroke-2" x="50" y="50" width="800" height="120" rx="8"/>
                <text className="fill-blue-700 dark:fill-blue-400 font-bold text-lg" x="450" y="85" textAnchor="middle">USER SPACE</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-sm" x="200" y="115" textAnchor="middle">Applications</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-sm" x="400" y="115" textAnchor="middle">Shell</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-sm" x="600" y="115" textAnchor="middle">GUI Services</text>
                <text className="fill-gray-600 dark:fill-gray-400 text-xs" x="450" y="140" textAnchor="middle">Python/Java/JavaScript (built on C runtime)</text>
                
                {/* System Call Interface */}
                <rect className="fill-accent-50 dark:fill-accent-900/30 stroke-accent-500 stroke-3" x="50" y="200" width="800" height="80" rx="8"/>
                <text className="fill-accent-700 dark:fill-accent-400 font-bold" x="450" y="230" textAnchor="middle">SYSTEM CALL INTERFACE (libc)</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-xs font-mono" x="450" y="255" textAnchor="middle">open() • read() • write() • fork() • exec() • socket() [Written in C]</text>
                
                {/* Arrow */}
                <text className="fill-accent-600 dark:fill-accent-400 text-2xl" x="450" y="295" textAnchor="middle">▼</text>
                
                {/* Kernel Space Label */}
                <rect className="fill-gray-100 dark:fill-gray-700/50 stroke-gray-400 dark:stroke-gray-600 stroke-2" x="50" y="310" width="800" height="40" rx="8"/>
                <text className="fill-gray-900 dark:fill-gray-200 font-bold" x="450" y="335" textAnchor="middle">KERNEL SPACE (Written in C)</text>
                
                {/* Kernel Components */}
                <rect className="fill-green-50 dark:fill-green-900/20 stroke-green-500 stroke-2" x="80" y="380" width="360" height="100" rx="8"/>
                <text className="fill-green-700 dark:fill-green-400 font-bold" x="260" y="405" textAnchor="middle">PROCESS MANAGEMENT</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-xs" x="110" y="430" textAnchor="start">• Scheduler (CFS)</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-xs" x="110" y="450" textAnchor="start">• Task Structures</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-xs" x="110" y="470" textAnchor="start">• Context Switching</text>
                <text className="fill-accent-600 dark:fill-accent-400 text-xs font-bold" x="340" y="450" textAnchor="start">Written in C</text>
                <text className="fill-accent-600 dark:fill-accent-400 text-xs font-bold" x="340" y="470" textAnchor="start">for performance</text>
                
                <rect className="fill-purple-50 dark:fill-purple-900/20 stroke-purple-500 stroke-2" x="460" y="380" width="360" height="100" rx="8"/>
                <text className="fill-purple-700 dark:fill-purple-400 font-bold" x="640" y="405" textAnchor="middle">MEMORY MANAGEMENT</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-xs" x="490" y="430" textAnchor="start">• Page Tables</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-xs" x="490" y="450" textAnchor="start">• Virtual Memory (VMM)</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-xs" x="490" y="470" textAnchor="start">• Slab Allocator</text>
                <text className="fill-purple-600 dark:fill-purple-400 text-xs font-bold" x="680" y="450" textAnchor="start">Direct memory</text>
                <text className="fill-purple-600 dark:fill-purple-400 text-xs font-bold" x="680" y="470" textAnchor="start">manipulation</text>
                
                <rect className="fill-orange-50 dark:fill-orange-900/20 stroke-orange-500 stroke-2" x="80" y="500" width="360" height="100" rx="8"/>
                <text className="fill-orange-700 dark:fill-orange-400 font-bold" x="260" y="525" textAnchor="middle">FILE SYSTEMS</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-xs" x="110" y="550" textAnchor="start">ext4 • XFS • Btrfs</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-xs" x="110" y="570" textAnchor="start">VFS Layer</text>
                <text className="fill-orange-600 dark:fill-orange-400 text-xs font-bold" x="340" y="560" textAnchor="start">C for</text>
                <text className="fill-orange-600 dark:fill-orange-400 text-xs font-bold" x="340" y="580" textAnchor="start">efficiency</text>
                
                <rect className="fill-cyan-50 dark:fill-cyan-900/20 stroke-cyan-500 stroke-2" x="460" y="500" width="360" height="100" rx="8"/>
                <text className="fill-cyan-700 dark:fill-cyan-400 font-bold" x="640" y="525" textAnchor="middle">NETWORKING</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-xs" x="490" y="550" textAnchor="start">TCP/IP Stack</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-xs" x="490" y="570" textAnchor="start">Socket Layer</text>
                <text className="fill-cyan-600 dark:fill-cyan-400 text-xs font-bold" x="680" y="560" textAnchor="start">Packet</text>
                <text className="fill-cyan-600 dark:fill-cyan-400 text-xs font-bold" x="680" y="580" textAnchor="start">processing</text>
                
                <rect className="fill-red-50 dark:fill-red-900/20 stroke-red-500 stroke-2" x="80" y="620" width="740" height="100" rx="8"/>
                <text className="fill-red-700 dark:fill-red-400 font-bold" x="450" y="645" textAnchor="middle">DEVICE DRIVERS</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-xs" x="200" y="670" textAnchor="middle">Hardware I/O</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-xs" x="450" y="670" textAnchor="middle">Interrupt Handlers</text>
                <text className="fill-gray-700 dark:fill-gray-300 text-xs" x="700" y="670" textAnchor="middle">DMA Control</text>
                
                {/* Hardware */}
                <rect className="fill-gray-200 dark:fill-gray-700 stroke-gray-500 dark:stroke-gray-500 stroke-2" x="50" y="750" width="800" height="40" rx="8"/>
                <text className="fill-gray-900 dark:fill-gray-200 font-bold" x="450" y="775" textAnchor="middle">HARDWARE (CPU • RAM • Devices)</text>
              </svg>
            </div>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                The Linux kernel is written mostly in C as supported by the GNU Compiler Collection (GCC), which includes extensions beyond standard C, with some assembly code for architecture-specific optimizations. C made it possible to undertake something never done successfully before: write an entire operating system in a high-level language.
              </p>
              <p>
                By 1973, Unix had been converted from its original assembly language into C, making it much easier to maintain and modify the system. C became the foundation for Unix&apos;s portability it was no longer necessary to translate the entire operating system for each new computer&apos;s assembly language by hand.
              </p>
            </div>
          </motion.section>

          {/* Why C Remains Unbeatable - Comparison Table */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-accent-500 pl-6">
              Why C Remains Unbeatable in 2025
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white dark:bg-gray-800/50 rounded-xl overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-accent-500 text-white">
                    <th className="p-4 text-left font-bold">Feature</th>
                    <th className="p-4 text-left font-bold">C Language</th>
                    <th className="p-4 text-left font-bold">Why It Matters</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Performance', clang: 'Near-assembly speed\nZero overhead', why: 'Critical for OS kernels, real-time systems, HFT algorithms' },
                    { feature: 'Memory Control', clang: 'Manual allocation\nPointer arithmetic', why: 'Embedded systems with KB of RAM, precise resource management' },
                    { feature: 'Hardware Access', clang: 'Memory-mapped I/O\nRegister manipulation', why: 'Device drivers, firmware, hardware initialization' },
                    { feature: 'Portability', clang: 'Cross-platform\nStandard compliance', why: 'Write once, compile anywhere - from MCU to supercomputer' },
                    { feature: 'Predictability', clang: 'Deterministic\nNo GC pauses', why: 'Real-time systems, aviation, medical devices requiring guaranteed response times' },
                    { feature: 'Ecosystem', clang: '50+ years\nBillions of LOC', why: 'Massive existing codebase, proven libraries, extensive tooling' }
                  ].map((row, idx) => (
                    <tr key={idx} className="border-t border-gray-200 dark:border-gray-700 hover:bg-accent-50 dark:hover:bg-accent-900/10 transition-colors">
                      <td className="p-4 font-semibold text-accent-700 dark:text-accent-400">{row.feature}</td>
                      <td className="p-4 text-gray-700 dark:text-gray-300 whitespace-pre-line">{row.clang}</td>
                      <td className="p-4 text-gray-700 dark:text-gray-300">{row.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Code Examples */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-accent-500 pl-6">
              What Can You Build With C?
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-950 rounded-xl p-6 border-l-4 border-accent-500 overflow-x-auto shadow-sm">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-mono">Memory-Mapped I/O in Embedded C</div>
                <pre className="text-gray-800 dark:text-accent-300 font-mono text-sm leading-relaxed">
{`#define UART_BASE_ADDR  0x40013800
#define UART_DR         (*(volatile uint32_t *)(UART_BASE_ADDR + 0x04))
#define UART_SR         (*(volatile uint32_t *)(UART_BASE_ADDR + 0x00))

void uart_send_char(char c) {
    // Wait until transmit data register is empty
    while (!(UART_SR & (1 << 7)));
    
    // Write character to data register
    UART_DR = c;
}

// This direct hardware manipulation is C's superpower
// No abstraction, maximum control, predictable timing`}
                </pre>
              </div>

              <div className="bg-gray-50 dark:bg-gray-950 rounded-xl p-6 border-l-4 border-accent-500 overflow-x-auto shadow-sm">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-mono">Linux Kernel Style Code</div>
                <pre className="text-gray-800 dark:text-accent-300 font-mono text-sm leading-relaxed">
{`struct task_struct {
    volatile long state;    // -1 unrunnable, 0 runnable, >0 stopped
    void *stack;
    atomic_t usage;
    unsigned int flags;
    int prio;
    // ... thousands more fields
};

// Direct memory management, no runtime overhead
static inline struct task_struct *get_current(void) {
    return current_thread_info()->task;
}`}
                </pre>
              </div>
            </div>
          </motion.section>

          {/* Modern C Development */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-accent-500 pl-6">
              Modern C Development: Tools & Practices
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800/50 border border-accent-200 dark:border-accent-500/30 rounded-xl p-6 shadow-sm">
                <Hammer className="w-12 h-12 text-accent-600 dark:text-accent-400 mb-4" />
                <h3 className="text-xl font-bold text-accent-600 dark:text-accent-400 mb-3">Development Tools</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>Compilers:</strong> GCC, Clang/LLVM, MSVC with advanced optimizations</li>
                  <li><strong>Debuggers:</strong> GDB, LLDB, rr (record & replay), Valgrind for memory analysis</li>
                  <li><strong>Build Systems:</strong> Make, CMake, Meson for complex project management</li>
                  <li><strong>Static Analysis:</strong> Clang Static Analyzer, Coverity, Cppcheck for code quality</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800/50 border border-accent-200 dark:border-accent-500/30 rounded-xl p-6 shadow-sm">
                <BookOpen className="w-12 h-12 text-accent-600 dark:text-accent-400 mb-4" />
                <h3 className="text-xl font-bold text-accent-600 dark:text-accent-400 mb-3">Standard Library Power</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p>
                    The C standard library provides macros, type definitions, and functions for string manipulation, mathematical computation, I/O processing, and memory management. On Unix-like systems, the C library is considered part of the operating system and cannot be erased without breaking system functionality.
                  </p>
                  <p className="text-sm">
                    Studies indicate that applications utilizing standard library functions can see performance boosts of up to 30% compared to custom implementations. These functions have been rigorously tested and optimized over decades.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Real-World Impact */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-accent-500 pl-6">
              Real-World Impact: Projects Powered by C
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Github, stat: '30M+', label: 'Lines in Linux Kernel' },
                { icon: Database, stat: 'PostgreSQL', label: 'Core Written in C' },
                { icon: Zap, stat: 'Redis', label: 'In-Memory DB in C' },
                { icon: Github, stat: 'Git', label: 'Version Control in C' }
              ].map((project, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800/50 border border-accent-200 dark:border-accent-500/30 rounded-xl p-6 text-center hover:border-accent-500 dark:hover:border-accent-400 transition-colors shadow-sm">
                  <project.icon className="w-16 h-16 text-accent-600 dark:text-accent-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-accent-600 dark:text-accent-400 mb-2">{project.stat}</div>
                  <div className="text-sm text-gray-700 dark:text-gray-400">{project.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                The list of influential software written in C reads like a who&apos;s who of computing infrastructure. PostgreSQL, a powerful object-relational database system, has most built-in functions written in C, as functions written in C offer the best performance. Redis, the popular in-memory key-value database, was initially prototyped in Tcl but the final product was rewritten in C for performance.
              </p>
              <p>
                SQLite, a lightweight database engine used in countless applications from mobile apps to embedded devices, is implemented in C, with its compact size, reliability, and speed stemming from C&apos;s efficient memory use and direct control over database file formats. The reference implementations of Python, Perl, Ruby, and PHP are all written in C.
              </p>
            </div>
          </motion.section>

          {/* Learning Curve */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-accent-500 pl-6">
              The Learning Curve: Why C Makes Better Programmers
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Learning C is admittedly challenging. Programming in C requires a defensive programmer&apos;s mindset since the language allows doing anything with the computer, meaning developers can break everything if not cautious. Yet this challenge creates exceptional developers.
                </p>
                <p>
                  The discipline required by C&apos;s minimal abstractions encourages developers to deeply understand underlying hardware and memory management concepts, which higher-level languages often obscure. Learning C first gives foundational knowledge that makes you a better programmer in any language.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800/50 border-2 border-accent-200 dark:border-accent-500/30 rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-center text-accent-600 dark:text-accent-400 mb-6">The C Programming Skillset</h3>
                <svg viewBox="0 0 400 400" className="w-full h-auto">
                  <circle cx="200" cy="200" r="180" className="fill-accent-50 dark:fill-accent-900/20 stroke-accent-500 stroke-2"/>
                  <circle cx="200" cy="200" r="140" className="fill-accent-100 dark:fill-accent-900/30 stroke-accent-500 stroke-2"/>
                  <circle cx="200" cy="200" r="100" className="fill-accent-200 dark:fill-accent-900/40 stroke-accent-500 stroke-2"/>
                  <circle cx="200" cy="200" r="60" className="fill-accent-500 stroke-accent-600 stroke-2"/>
                  
                  <text className="fill-white dark:fill-white font-bold text-lg" x="200" y="205" textAnchor="middle">C</text>
                  <text className="fill-white dark:fill-white font-bold text-lg" x="200" y="225" textAnchor="middle">Programmer</text>
                  
                  <text className="fill-gray-900 dark:fill-gray-200 text-sm font-semibold" x="200" y="130" textAnchor="middle">Memory</text>
                  <text className="fill-gray-900 dark:fill-gray-200 text-sm font-semibold" x="200" y="150" textAnchor="middle">Management</text>
                  
                  <text className="fill-gray-900 dark:fill-gray-200 text-sm font-semibold" x="200" y="270" textAnchor="middle">Hardware</text>
                  <text className="fill-gray-900 dark:fill-gray-200 text-sm font-semibold" x="200" y="290" textAnchor="middle">Understanding</text>
                  
                  <text className="fill-gray-900 dark:fill-gray-200 text-sm font-semibold" x="80" y="205" textAnchor="middle">Algorithms &</text>
                  <text className="fill-gray-900 dark:fill-gray-200 text-sm font-semibold" x="80" y="225" textAnchor="middle">Data Struct</text>
                  
                  <text className="fill-gray-900 dark:fill-gray-200 text-sm font-semibold" x="320" y="205" textAnchor="middle">Performance</text>
                  <text className="fill-gray-900 dark:fill-gray-200 text-sm font-semibold" x="320" y="225" textAnchor="middle">Optimization</text>
                  
                  <text className="fill-gray-900 dark:fill-gray-200 text-xs" x="100" y="80" textAnchor="middle">System</text>
                  <text className="fill-gray-900 dark:fill-gray-200 text-xs" x="100" y="95" textAnchor="middle">Programming</text>
                  
                  <text className="fill-gray-900 dark:fill-gray-200 text-xs" x="300" y="80" textAnchor="middle">Debugging</text>
                  <text className="fill-gray-900 dark:fill-gray-200 text-xs" x="300" y="95" textAnchor="middle">Skills</text>
                </svg>
              </div>
            </div>
          </motion.section>

          {/* The Future - C23 */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-accent-500 pl-6">
              The Future: C in 2025 and Beyond
            </h2>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              <p>
                Far from being a relic, C continues evolving. C23 is the latest major C language standard revision, introducing 14 new keywords and modern features including arbitrary-width integers via `_BitInt`, the `#embed` preprocessor directive for including binary data, and improved developer experience while maintaining C&apos;s core strengths.
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent-50 to-green-50 dark:from-accent-900/20 dark:to-green-900/20 border-2 border-accent-500 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-accent-700 dark:text-accent-400 mb-6 flex items-center gap-3">
                <Rocket className="w-8 h-8" />
                C23 New Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { feature: '_BitInt(N)', desc: 'Arbitrary-width integers for hardware registers' },
                  { feature: '#embed', desc: 'Direct binary file inclusion (images, fonts, certificates)' },
                  { feature: 'typeof', desc: 'Type inference and generic programming' },
                  { feature: 'constexpr', desc: 'Compile-time evaluation' },
                  { feature: '[[attributes]]', desc: 'Modern syntax for compiler hints' },
                  { feature: 'Binary literals', desc: '0b prefix for bit patterns' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white dark:bg-gray-800/50 border border-accent-300 dark:border-accent-600/30 rounded-lg p-4">
                    <code className="text-accent-700 dark:text-accent-400 font-bold">{item.feature}</code>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                C remains a cornerstone of the software world in 2025, with operating system kernels, modern compilers and interpreters choosing C as an implementation vehicle, leveraging its ability to produce efficient, portable executables serving as a widely accepted lowest common denominator on diverse platforms.
              </p>
              <p>
                The enormous amount of existing code written in C, combined with performance demands where every cycle counts, ensures C&apos;s continued relevance. As hardware continues evolving, the need for efficient programming will only increase, with the ever-growing landscape of embedded systems and IoT heavily relying on C.
              </p>
            </div>
          </motion.section>

          {/* Conclusion */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-accent-500 pl-6">
              Conclusion: The Invisible Infrastructure
            </h2>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                The next time you make a phone call, browse the web, drive a car, or board an airplane, remember: you&apos;re trusting your life to C code. The world is running on C-powered devices that we use every day whether we realize it or not.
              </p>

              <div className="bg-accent-50 dark:bg-accent-900/20 border-l-4 border-accent-500 p-8 rounded-r-xl my-8 shadow-xl">
                <p className="text-xl italic text-gray-800 dark:text-gray-200 mb-4">
                  C is quirky, flawed, and an enormous success. While accidents of history surely helped, C evidently satisfied a need for a system implementation language efficient enough to displace assembly language, yet sufficiently abstract and fluent to describe algorithms and interactions in a wide variety of environments.
                </p>
              </div>

              {/* From Atoms to Galaxies Diagram */}
              <div className="bg-white dark:bg-gray-800/50 border-2 border-accent-200 dark:border-accent-500/30 rounded-2xl p-8 my-12 shadow-2xl">
                <h3 className="text-xl font-bold text-center text-accent-600 dark:text-accent-400 mb-8">C&apos;s Domain: From Atoms to Galaxies</h3>
                
                <svg viewBox="0 0 900 400" className="w-full h-auto">
                  {/* Scale Line */}
                  <line x1="100" y1="200" x2="800" y2="200" className="stroke-accent-500" strokeWidth="4"/>
                  
                  {/* Nano Scale */}
                  <circle cx="150" cy="200" r="12" className="fill-accent-500"/>
                  <line x1="150" y1="200" x2="150" y2="100" className="stroke-accent-400" strokeWidth="2" strokeDasharray="4"/>
                  <rect x="90" y="40" width="120" height="50" rx="6" className="fill-accent-100 dark:fill-accent-900/30 stroke-accent-500 stroke-2"/>
                  <text x="150" y="70" textAnchor="middle" className="fill-gray-900 dark:fill-gray-200 text-sm font-bold">Nano</text>
                  <text x="150" y="120" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-xs">Embedded MCU</text>
                  <text x="150" y="140" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-xs">IoT Devices</text>
                  <text x="150" y="160" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-xs">Firmware</text>
                  
                  {/* Mid Scale */}
                  <circle cx="450" cy="200" r="16" className="fill-accent-500"/>
                  <line x1="450" y1="200" x2="450" y2="280" className="stroke-accent-400" strokeWidth="2" strokeDasharray="4"/>
                  <rect x="380" y="290" width="140" height="70" rx="6" className="fill-accent-100 dark:fill-accent-900/30 stroke-accent-500 stroke-2"/>
                  <text x="450" y="315" textAnchor="middle" className="fill-gray-900 dark:fill-gray-200 text-sm font-bold">Servers</text>
                  <text x="450" y="335" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-xs">OS</text>
                  <text x="450" y="352" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-xs">Databases</text>
                  
                  {/* Super Scale */}
                  <circle cx="750" cy="200" r="20" className="fill-accent-500"/>
                  <line x1="750" y1="200" x2="750" y2="100" className="stroke-accent-400" strokeWidth="2" strokeDasharray="4"/>
                  <rect x="680" y="40" width="140" height="50" rx="6" className="fill-accent-100 dark:fill-accent-900/30 stroke-accent-500 stroke-2"/>
                  <text x="750" y="65" textAnchor="middle" className="fill-gray-900 dark:fill-gray-200 text-sm font-bold">Super</text>
                  <text x="750" y="82" textAnchor="middle" className="fill-gray-900 dark:fill-gray-200 text-sm font-bold">computers</text>
                  <text x="750" y="120" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-xs">HPC</text>
                  
                  {/* Bottom Labels */}
                  <text x="450" y="245" textAnchor="middle" className="fill-accent-600 dark:fill-accent-400 font-bold text-lg">Scale of C Programming</text>
                  <text x="450" y="270" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-xs">Same Language, Unlimited Scale</text>
                  
                  {/* Stats at bottom */}
                  <text x="150" y="350" textAnchor="start" className="fill-gray-600 dark:fill-gray-400 text-xs">From 4KB RAM to 1TB RAM •</text>
                  <text x="150" y="370" textAnchor="start" className="fill-gray-600 dark:fill-gray-400 text-xs">From 1MHz to 5GHz •</text>
                  <text x="150" y="390" textAnchor="start" className="fill-gray-600 dark:fill-gray-400 text-xs">One portable codebase</text>
                </svg>
              </div>

              <p>
                From the depths of operating system kernels to the heights of spacecraft software, from the microscopic world of embedded processors to the massive scale of supercomputer clusters, C remains the common thread. It is simultaneously the language of the past, present, and future a testament to the genius of Dennis Ritchie&apos;s elegant design.
              </p>

              <div className="bg-accent-50 dark:bg-accent-900/20 border-l-4 border-accent-500 p-8 rounded-r-xl my-8 shadow-xl">
                <p className="text-2xl text-center font-semibold text-accent-700 dark:text-accent-400 italic">
                  &quot;C is the past, the present, and as far as we can see, still the future for many areas of software.&quot;
                </p>
              </div>

              <p className="text-center font-semibold text-xl pt-8">
                In an industry obsessed with the new and shiny, C&apos;s enduring dominance proves that sometimes, the old ways are simply the best ways. The language that Unix built continues building our digital world, one perfectly optimized line at a time.
              </p>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </article>
  )
}
