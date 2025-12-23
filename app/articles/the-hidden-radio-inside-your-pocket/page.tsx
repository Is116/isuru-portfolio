'use client'

import { Calendar, Clock, ArrowLeft, Radio, Smartphone, Cpu, Lock, Shield, Zap, AlertTriangle, Server, Network, Key, FileCode, Terminal, Laptop } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function RFHardwareLockdownArticle() {
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
            The Hidden Radio Inside Your Pocket: Why Your Phone Can't Access Its Own Hardware
          </h1>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="flex-shrink-0" />
              <time dateTime="2024-12-23">Dec 23, 2024</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="flex-shrink-0" />
              <span>25 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Radio size={16} className="flex-shrink-0" />
              <span>RF Security</span>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone size={16} className="flex-shrink-0" />
              <span>Android</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={16} className="flex-shrink-0" />
              <span>Regulation</span>
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
              src="/articles/radio_article.png"
              alt="Radio Hardware Security"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <div className="mt-8">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
              A deep technical exploration of RF hardware lockdown, regulatory compliance, and the architecture preventing custom wireless transmission on modern smartphones.
            </p>
          </div>
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
              Your Google Pixel 9 Pro contains some of the most sophisticated radio frequency (RF) hardware ever created. With its Tensor G4 chip, it can simultaneously communicate across dozens of frequency bands from 5G millimeter wave at 39 GHz to Bluetooth Low Energy at 2.4 GHz, NFC at 13.56 MHz, and Ultra-Wideband (UWB) at 6-9 GHz.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="mb-12">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Yet, despite having this powerful transmitter in your pocket, you cannot write an app that transmits even the simplest custom RF signal. This article explores the technical, regulatory, and architectural reasons why modern smartphones are "locked down" at the radio level.
            </p>
          </motion.div>

          {/* Section 1: RF Hardware Architecture */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-12 bg-gradient-to-b from-accent-500 to-accent-600 rounded-full"></span>
              Part 1: The RF Hardware Architecture
            </h2>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 mt-12">
                Inside the Pixel 9 Pro's RF System
              </h3>

              <p>
                The Pixel 9 Pro's wireless capabilities are powered by several specialized chips working in a carefully isolated architecture:
              </p>

              {/* Architecture Diagram */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-2xl p-8 border-2 border-blue-300 dark:border-blue-700 shadow-xl my-8">
                <div className="space-y-4">
                  {/* Application Processor */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-blue-400 dark:border-blue-600">
                    <div className="flex items-center gap-3 mb-4">
                      <Cpu className="text-blue-600 dark:text-blue-400" size={32} />
                      <h4 className="text-xl font-bold text-blue-900 dark:text-blue-200">Google Tensor G4 SoC</h4>
                    </div>
                    <div className="ml-11 space-y-2">
                      <div className="bg-blue-50 dark:bg-blue-900/40 rounded-lg p-4">
                        <div className="font-bold text-blue-900 dark:text-blue-200 mb-2">Application Processor (ARM)</div>
                        <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                          <li className="flex items-center gap-2">
                            <span className="text-blue-500">•</span>
                            <span>Android OS</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-blue-500">•</span>
                            <span>Apps & Framework</span>
                          </li>
                        </ul>
                      </div>
                      <div className="flex justify-center py-2">
                        <div className="text-sm font-mono text-blue-600 dark:text-blue-400">↕ (HAL Interface)</div>
                      </div>
                      <div className="bg-purple-50 dark:bg-purple-900/40 rounded-lg p-4 border-2 border-purple-300 dark:border-purple-700">
                        <div className="font-bold text-purple-900 dark:text-purple-200 mb-2">Modem Processor (Exynos 5300)</div>
                        <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                          <li className="flex items-center gap-2">
                            <span className="text-purple-500">•</span>
                            <span>Baseband firmware</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-purple-500">•</span>
                            <span>Protocol stacks (5G/LTE/3G)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="text-blue-500 text-2xl">↓</div>
                  </div>

                  {/* RF Front-End Modules */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-green-400 dark:border-green-600">
                    <div className="flex items-center gap-3 mb-4">
                      <Radio className="text-green-600 dark:text-green-400" size={32} />
                      <h4 className="text-xl font-bold text-green-900 dark:text-green-200">RF Front-End Modules (RFFEs)</h4>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3 ml-11">
                      <div className="bg-green-50 dark:bg-green-900/40 rounded-lg p-3 text-sm">
                        <span className="text-green-700 dark:text-green-300">Qualcomm WCN7851 (WiFi 7/BT 5.4)</span>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/40 rounded-lg p-3 text-sm">
                        <span className="text-green-700 dark:text-green-300">Samsung S5400 (5G mmWave)</span>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/40 rounded-lg p-3 text-sm">
                        <span className="text-green-700 dark:text-green-300">NXP PN557 (NFC Controller)</span>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/40 rounded-lg p-3 text-sm">
                        <span className="text-green-700 dark:text-green-300">Qorvo QPM6375 (UWB)</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="text-green-500 text-2xl">↓</div>
                  </div>

                  {/* Power Amplifiers */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-yellow-400 dark:border-yellow-600">
                    <div className="flex items-center gap-3 mb-4">
                      <Zap className="text-yellow-600 dark:text-yellow-400" size={32} />
                      <h4 className="text-xl font-bold text-yellow-900 dark:text-yellow-200">Power Amplifiers & Filters</h4>
                    </div>
                    <div className="grid md:grid-cols-3 gap-3 ml-11 text-sm">
                      <div className="bg-yellow-50 dark:bg-yellow-900/40 rounded-lg p-3">
                        <span className="text-yellow-700 dark:text-yellow-300">Band-specific filters</span>
                      </div>
                      <div className="bg-yellow-50 dark:bg-yellow-900/40 rounded-lg p-3">
                        <span className="text-yellow-700 dark:text-yellow-300">Antenna tuners</span>
                      </div>
                      <div className="bg-yellow-50 dark:bg-yellow-900/40 rounded-lg p-3">
                        <span className="text-yellow-700 dark:text-yellow-300">Power management ICs</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="text-yellow-500 text-2xl">↓</div>
                  </div>

                  {/* Antennas */}
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-4 text-center">
                    <div className="text-white font-bold text-lg">[Antennas Array]</div>
                  </div>
                </div>

                <div className="mt-6 bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-red-300 dark:border-red-700">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="text-red-600 dark:text-red-400" size={24} />
                    <div>
                      <div className="font-bold text-red-900 dark:text-red-200 mb-2">Key Observation:</div>
                      <p className="text-gray-800 dark:text-gray-200">Notice the separation between the application processor (where your apps run) and the modem processor (which controls the radios). This architectural separation is the <strong>first line of defense</strong> against custom RF transmission.</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 mt-12">
                The Firmware Barrier
              </h3>

              <p>
                Each RF chip runs proprietary firmware that is cryptographically signed and verified during boot. This creates an impenetrable barrier that prevents any unsigned code from running on the RF hardware.
              </p>

              {/* Firmware Authentication Flow */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg my-8">
                <h4 className="text-xl font-bold text-accent-600 dark:text-accent-400 mb-6">
                  WiFi/Bluetooth Chip Firmware Authentication
                </h4>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-6 font-mono text-sm overflow-x-auto">
                  <pre className="text-gray-800 dark:text-gray-200">{`// Simplified firmware authentication flow
struct firmware_header {
    uint32_t magic;              // 0x57434E37 ("WCN7")
    uint32_t version;
    uint32_t code_size;
    uint8_t  signature[256];     // RSA-2048 signature
    uint8_t  cert_chain[2048];   // X.509 certificate chain
};

int verify_firmware(struct firmware_header *fw) {
    // 1. Verify certificate chain roots to OEM key
    if (!verify_cert_chain(fw->cert_chain, OEM_ROOT_KEY)) {
        return -EPERM;  // Unsigned firmware rejected
    }
    
    // 2. Verify firmware signature
    if (!rsa_verify(fw->signature, fw_data, OEM_PUBLIC_KEY)) {
        return -EINVAL;
    }
    
    // 3. Check version rollback protection
    if (fw->version < get_min_version_from_fuses()) {
        return -EVERSION;  // Rollback attack prevented
    }
    
    return 0;
}`}</pre>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-2 border-red-300 dark:border-red-700">
                    <span className="text-red-500 text-2xl">✗</span>
                    <span className="font-semibold text-gray-900 dark:text-white">You cannot load custom firmware</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-2 border-red-300 dark:border-red-700">
                    <span className="text-red-500 text-2xl">✗</span>
                    <span className="font-semibold text-gray-900 dark:text-white">You cannot modify existing firmware</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-2 border-red-300 dark:border-red-700">
                    <span className="text-red-500 text-2xl">✗</span>
                    <span className="font-semibold text-gray-900 dark:text-white">Even with root access, unsigned code won't run on the RF chip</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-2 border-red-300 dark:border-red-700">
                    <span className="text-red-500 text-2xl">✗</span>
                    <span className="font-semibold text-gray-900 dark:text-white">Rollback protection prevents loading older, vulnerable firmware</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 2: Regulatory Enforcement */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-12 bg-gradient-to-b from-accent-500 to-accent-600 rounded-full"></span>
              Part 2: Regulatory Enforcement Architecture
            </h2>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 mt-12">
                The FCC Equipment Authorization System
              </h3>

              <p>
                Before any phone can be sold in the US, it must pass FCC certification under Part 15 (unlicensed devices). This creates a multi-layered regulatory enforcement system built directly into the hardware and firmware.
              </p>

              {/* Regulatory Layers */}
              <div className="space-y-6 my-8">
                {/* Layer 1 */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/30 dark:to-orange-900/30 rounded-xl p-4 md:p-6 border-2 border-red-300 dark:border-red-700 shadow-lg">
                  <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-base md:text-lg">
                    1
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg md:text-xl font-bold text-red-900 dark:text-red-200 mb-2 md:mb-3">
                    Layer 1: Hardware Registers (Non-Volatile Memory)
                    </h4>
                    <p className="text-sm md:text-base text-gray-800 dark:text-gray-200 mb-3 md:mb-4">
                    Regulatory restrictions are burned into the chip at manufacturing time and cannot be modified:
                    </p>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-3 md:p-4 font-mono text-[10px] sm:text-xs overflow-x-auto">
                    <pre className="text-gray-800 dark:text-gray-200">{`// Burned into chip at manufacturing
        struct regulatory_domain {
          char country_code[2];        // "US", "EU", "JP", etc.
          uint32_t allowed_channels;   // Bitmask of legal channels
          int8_t max_power_dbm[40];    // Per-channel power limits
          uint32_t flags;              // DFS required, Indoor only, etc.
        };`}</pre>
                    </div>
                  </div>
                  </div>
                </div>

                {/* Layer 2 */}
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/30 dark:to-yellow-900/30 rounded-xl p-6 border-2 border-orange-300 dark:border-orange-700 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-orange-900 dark:text-orange-200 mb-3">
                        Layer 2: Firmware State Machine
                      </h4>
                      <p className="text-gray-800 dark:text-gray-200 mb-4">
                        Firmware enforces checks on every transmission attempt:
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg">
                          <span className="text-orange-500">✓</span>
                          <span className="text-gray-800 dark:text-gray-200">Frequency in allowed band?</span>
                        </div>
                        <div className="flex items-center gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg">
                          <span className="text-orange-500">✓</span>
                          <span className="text-gray-800 dark:text-gray-200">Power within limits?</span>
                        </div>
                        <div className="flex items-center gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg">
                          <span className="text-orange-500">✓</span>
                          <span className="text-gray-800 dark:text-gray-200">Protocol compliance?</span>
                        </div>
                        <div className="flex items-center gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg">
                          <span className="text-orange-500">✓</span>
                          <span className="text-gray-800 dark:text-gray-200">Duty cycle limits (LBT for Europe)?</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Layer 3 */}
                <div className="bg-gradient-to-br from-yellow-50 to-green-50 dark:from-yellow-900/30 dark:to-green-900/30 rounded-xl p-6 border-2 border-yellow-300 dark:border-yellow-700 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-yellow-900 dark:text-yellow-200 mb-3">
                        Layer 3: Driver-Level Enforcement
                      </h4>
                      <p className="text-gray-800 dark:text-gray-200">
                        The Linux kernel driver provides an additional layer of regulatory checks, including SAR (Specific Absorption Rate) limits to protect human health.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-accent-50 dark:bg-accent-900/20 border-l-4 border-accent-500 p-6 rounded-r-xl my-8">
                <p className="text-lg text-gray-800 dark:text-gray-200 font-medium">
                  <strong>The result:</strong> Even if you could somehow bypass one layer, the other layers would still block any unauthorized transmission. The system is designed with redundant enforcement at every level.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 3: Seven Layers of Lockdown */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-12 bg-gradient-to-b from-accent-500 to-accent-600 rounded-full"></span>
              The Seven Layers of RF Lockdown
            </h2>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Your Pixel 9 Pro is locked down at <strong className="text-accent-600 dark:text-accent-400">seven distinct layers</strong>. To transmit a custom RF signal, you would need to defeat ALL seven layers simultaneously which is effectively impossible:
              </p>

              <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-purple-200 dark:border-purple-800 shadow-lg my-8">
                <div className="space-y-4">
                  {/* Layer 7 */}
                  <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 border-l-4 border-purple-500 shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">7</div>
                      <h4 className="text-lg font-bold text-purple-900 dark:text-purple-200">Android Permission System</h4>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 ml-13 text-sm">No custom RF APIs exist</p>
                  </div>

                  <div className="flex justify-center">
                    <div className="text-purple-500">↓</div>
                  </div>

                  {/* Layer 6 */}
                  <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 border-l-4 border-blue-500 shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">6</div>
                      <h4 className="text-lg font-bold text-blue-900 dark:text-blue-200">HAL Restrictions</h4>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 ml-13 text-sm">Protocol enforcement at hardware abstraction layer</p>
                  </div>

                  <div className="flex justify-center">
                    <div className="text-blue-500">↓</div>
                  </div>

                  {/* Layer 5 */}
                  <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 border-l-4 border-cyan-500 shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold">5</div>
                      <h4 className="text-lg font-bold text-cyan-900 dark:text-cyan-200">Driver/Kernel Enforcement</h4>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 ml-13 text-sm">Regulatory checks in nl80211 driver</p>
                  </div>

                  <div className="flex justify-center">
                    <div className="text-cyan-500">↓</div>
                  </div>

                  {/* Layer 4 */}
                  <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 border-l-4 border-green-500 shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                      <h4 className="text-lg font-bold text-green-900 dark:text-green-200">Firmware Signature Verification</h4>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 ml-13 text-sm">Cryptographic authentication (RSA-2048/4096)</p>
                  </div>

                  <div className="flex justify-center">
                    <div className="text-green-500">↓</div>
                  </div>

                  {/* Layer 3 */}
                  <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 border-l-4 border-yellow-500 shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                      <h4 className="text-lg font-bold text-yellow-900 dark:text-yellow-200">Baseband Processor Isolation</h4>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 ml-13 text-sm">Separate security domain with Secure Element</p>
                  </div>

                  <div className="flex justify-center">
                    <div className="text-yellow-500">↓</div>
                  </div>

                  {/* Layer 2 */}
                  <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 border-l-4 border-orange-500 shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                      <h4 className="text-lg font-bold text-orange-900 dark:text-orange-200">Hardware Security (Titan M2)</h4>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 ml-13 text-sm">Root of trust with tamper resistance</p>
                  </div>

                  <div className="flex justify-center">
                    <div className="text-orange-500">↓</div>
                  </div>

                  {/* Layer 1 */}
                  <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 border-l-4 border-red-500 shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                      <h4 className="text-lg font-bold text-red-900 dark:text-red-200">Physical RF Filters</h4>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 ml-13 text-sm">Hardware bandpass filters block out-of-band signals</p>
                  </div>

                  <div className="flex justify-center">
                    <div className="text-red-500">↓</div>
                  </div>

                  {/* Hardware */}
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-xl p-4 text-center">
                    <div className="text-white font-bold text-lg">Actual Antennas & Amplifiers</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border-2 border-red-300 dark:border-red-700 rounded-xl p-6">
                <p className="text-lg text-gray-800 dark:text-gray-200 font-bold text-center">
                  🔒 Each layer independently enforces FCC/regulatory compliance, carrier requirements, security policies, and protocol standards.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 4: Why Even Root Access Doesn't Help */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-12 bg-gradient-to-b from-accent-500 to-accent-600 rounded-full"></span>
              Why Even Root Access Doesn't Help
            </h2>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Many technically-minded users assume that gaining root access would give them control over the RF hardware. Unfortunately, that's not how modern smartphone security works.
              </p>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 mt-12">
                The Titan M2: Hardware Root of Trust
              </h3>

              <p>
                The Pixel 9 Pro's Titan M2 chip enforces security even against root access. It's a separate processor that operates independently of Android:
              </p>

              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg my-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
                    <h5 className="font-bold text-green-900 dark:text-green-200 mb-4">✅ What root access DOES allow:</h5>
                    <ul className="space-y-2 text-sm text-green-800 dark:text-green-300">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>Flash custom ROM</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>Gain root access in Android</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>Modify system partition</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
                    <h5 className="font-bold text-red-900 dark:text-red-200 mb-4">❌ What root access DOESN'T allow:</h5>
                    <ul className="space-y-2 text-sm text-red-800 dark:text-red-300">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>Modify vendor partition (contains HAL)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>Modify firmware blobs (signed by Google)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>Modify modem firmware (separate secure boot)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>Bypass RF restrictions (enforced by firmware)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>Pass SafetyNet/Play Integrity checks</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <p>
                The Titan M2 chip stores cryptographic keys in tamper-resistant hardware. If it detects any attempt to extract these keys, it self-destructs. This same chip verifies firmware signatures and enforces rollback protection.
              </p>
            </div>
          </motion.section>

          {/* Section 5: Comparison with SDR */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-12 bg-gradient-to-b from-accent-500 to-accent-600 rounded-full"></span>
              What About Software Defined Radio?
            </h2>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Interestingly, you CAN do custom RF transmission with your phone just not using the phone's built-in radios. A $300 HackRF One connected via USB-C gives you complete RF control:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-300 dark:border-green-700 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-green-900 dark:text-green-200 mb-4">
                    ✅ External SDR (HackRF One)
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-800 dark:text-gray-200">Open-source firmware</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-800 dark:text-gray-200">No regulatory enforcement in hardware</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-800 dark:text-gray-200">Direct access to RF transceiver</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-800 dark:text-gray-200">User accepts legal responsibility</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-700 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-red-900 dark:text-red-200 mb-4">
                    ❌ Phone's Built-in Radios
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-800 dark:text-gray-200">Closed firmware with signature verification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-800 dark:text-gray-200">Multi-layer regulatory enforcement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-800 dark:text-gray-200">No API for raw RF access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span className="text-gray-800 dark:text-gray-200">Manufacturer liable for regulatory violations</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-accent-50 dark:bg-accent-900/20 border-l-4 border-accent-500 p-6 rounded-r-xl">
                <p className="text-lg text-gray-800 dark:text-gray-200">
                  <strong>The fundamental difference:</strong> With an SDR, YOU are legally responsible for compliance. With a phone, the MANUFACTURER is responsible so they lock down the hardware to prevent any possibility of violation.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Conclusion */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-12 bg-gradient-to-b from-accent-500 to-accent-600 rounded-full"></span>
              Key Takeaways
            </h2>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <div className="flex items-start gap-3 mb-3">
                    <Smartphone className="text-accent-500" size={24} />
                    <h5 className="font-bold text-gray-900 dark:text-white">Your phone is more capable than your apps can access</h5>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">The hardware can do far more than the software allows.</p>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <div className="flex items-start gap-3 mb-3">
                    <Lock className="text-accent-500" size={24} />
                    <h5 className="font-bold text-gray-900 dark:text-white">Restrictions are by design, not limitation</h5>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Manufacturers intentionally lock down RF to comply with regulations and limit liability.</p>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <div className="flex items-start gap-3 mb-3">
                    <Shield className="text-accent-500" size={24} />
                    <h5 className="font-bold text-gray-900 dark:text-white">Root access is not enough</h5>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Firmware, bootloaders, and hardware security chips enforce restrictions independently of Android.</p>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <div className="flex items-start gap-3 mb-3">
                    <Network className="text-accent-500" size={24} />
                    <h5 className="font-bold text-gray-900 dark:text-white">Regulatory compliance is multi-layered</h5>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">From international law to carrier requirements to device certification, restrictions come from many sources.</p>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <div className="flex items-start gap-3 mb-3">
                    <AlertTriangle className="text-accent-500" size={24} />
                    <h5 className="font-bold text-gray-900 dark:text-white">The gap is widening</h5>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">New technologies like WiFi 7, 5G Advanced, and eSIM introduce even more restrictions and remote control.</p>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <div className="flex items-start gap-3 mb-3">
                    <Radio className="text-accent-500" size={24} />
                    <h5 className="font-bold text-gray-900 dark:text-white">External SDR hardware remains the only option</h5>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">For custom RF transmission, you need separate hardware that doesn't have these restrictions.</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-accent-50 to-blue-50 dark:from-accent-900/20 dark:to-blue-900/20 border-l-4 border-accent-500 p-8 rounded-r-2xl my-8">
                <p className="text-xl text-gray-800 dark:text-gray-200 font-medium">
                  The sophisticated radio in your pocket represents an incredible engineering achievement not just in its capabilities, but in how thoroughly it's been locked down. This multi-layered security architecture protects both users and manufacturers, ensuring that the powerful RF hardware can only be used in ways that comply with global regulations and safety standards.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Sources */}
          <motion.section variants={fadeInUp} className="mb-16">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">References & Further Reading:</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">Official Documentation:</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-accent-500 mt-1">•</span>
                      <span>FCC Part 15 Regulations: https://www.ecfr.gov/current/title-47/chapter-I/subchapter-A/part-15</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-500 mt-1">•</span>
                      <span>Wi-Fi Alliance Certification: https://www.wi-fi.org/certification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-500 mt-1">•</span>
                      <span>3GPP Specifications: https://www.3gpp.org/specifications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-500 mt-1">•</span>
                      <span>Android HAL Documentation: https://source.android.com/docs/core/architecture/hal</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">Technical Papers:</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-accent-500 mt-1">•</span>
                      <span>"Shannon Baseband Security Analysis" - Comsecuris Research</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-500 mt-1">•</span>
                      <span>"Titan M: Google's Security Chip" - Google Security Blog</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-500 mt-1">•</span>
                      <span>"Android Verified Boot 2.0" - AOSP Documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-500 mt-1">•</span>
                      <span>"OpenRAN Security Considerations" - O-RAN Alliance</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">Legal Resources:</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-accent-500 mt-1">•</span>
                      <span>FCC Equipment Authorization Database: https://fccid.io</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-500 mt-1">•</span>
                      <span>ITU Radio Regulations: https://www.itu.int/pub/R-REG-RR</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-500 mt-1">•</span>
                      <span>ETSI Harmonized Standards: https://www.etsi.org</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Disclaimer */}
          <motion.section variants={fadeInUp} className="mb-16">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-300 dark:border-yellow-700 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-yellow-600 dark:text-yellow-400" size={24} />
                <div>
                  <p className="text-gray-800 dark:text-gray-200 font-semibold mb-2">Legal Disclaimer</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    This article is for educational purposes only. Modifying device firmware or transmitting on unauthorized frequencies is illegal and may result in significant fines or criminal penalties. Always comply with local regulations regarding RF transmission.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Closing */}
          <motion.section variants={fadeInUp} className="mb-16">
            <div className="bg-gradient-to-br from-accent-50 via-blue-50 to-purple-50 dark:from-accent-900/20 dark:via-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-accent-200 dark:border-accent-800">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 italic">
                Did this deep dive into smartphone RF architecture surprise you? What other technical topics would you like to see explored? Let me know in the comments below.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {['MobileSecurity', 'RFEngineering', 'Android', 'TechDeepDive', 'Cybersecurity'].map((tag) => (
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