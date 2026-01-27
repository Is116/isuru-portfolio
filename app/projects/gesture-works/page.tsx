'use client'

import { Calendar, Clock, ArrowLeft, Target, Zap, Brain, Play, Settings, Github, ExternalLink, Database, Gauge, FileCode, AlertCircle, Chrome, Code2, Terminal } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function GestureWorksProject() {
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
            href="/#projects" 
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
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
            Gesture Works Hand Gesture Control
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
            Real-time hand gesture recognition system using machine learning to control a ball on screen. Train custom gestures with TensorFlow.js and MediaPipe for low-latency detection and interactive gameplay.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <div className="flex flex-wrap gap-2">
              {['Next.js', 'TypeScript', 'TensorFlow.js', 'MediaPipe', 'Machine Learning'].map((tag, index) => (
                <span
                  key={index}
                  className="inline-block px-3 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <a
              href="https://github.com/Is116/gesture-works"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-800 hover:bg-gray-800 dark:hover:bg-gray-700 text-white font-semibold rounded-xl transition-all hover:scale-105 shadow-lg"
            >
              <Github size={20} />
              View Code
            </a>
          </div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl mb-8"
          >
            <Image
              src="/projects/gesture_works/game.jpeg"
              alt="Gesture Works Game Interface"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Secondary Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl"
          >
            <Image
              src="/projects/gesture_works/manage.jpeg"
              alt="Gesture Works Training Interface"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Project Content */}
      <div className="container mx-auto px-4 md:px-8 pb-20">
        <motion.div 
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          {/* Overview */}
          <motion.div variants={fadeInUp} className="mb-12">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Target className="text-accent-600 dark:text-accent-400" size={32} />
                Project Overview
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Gesture Works is an interactive machine learning project that demonstrates real-time hand gesture recognition using TensorFlow.js and MediaPipe. The application allows users to train custom gestures (UP, DOWN, LEFT, RIGHT, FREEZE) and use them to control a ball on the screen, showcasing the power of in-browser machine learning with low latency detection.
              </p>
            </div>
          </motion.div>

          {/* Key Features */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <Zap className="text-accent-600 dark:text-accent-400" size={32} />
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-accent-300 dark:hover:border-accent-700 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent-100 dark:bg-accent-900/30 rounded-lg">
                    <Brain className="text-accent-600 dark:text-accent-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Custom Gesture Training</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Train your own hand gestures with an intuitive interface. Capture multiple samples for each gesture direction to build a robust model.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-accent-300 dark:hover:border-accent-700 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent-100 dark:bg-accent-900/30 rounded-lg">
                    <Zap className="text-accent-600 dark:text-accent-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Real-Time Detection</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Experience low-latency hand tracking and gesture recognition powered by MediaPipe and TensorFlow.js running entirely in the browser.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-accent-300 dark:hover:border-accent-700 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent-100 dark:bg-accent-900/30 rounded-lg">
                    <Play className="text-accent-600 dark:text-accent-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Interactive Gameplay</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Control a ball on screen using your trained gestures. Move it up, down, left, right, or freeze it in place with hand movements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-accent-300 dark:hover:border-accent-700 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent-100 dark:bg-accent-900/30 rounded-lg">
                    <Settings className="text-accent-600 dark:text-accent-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Gesture Management</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      View and manage your trained gestures with a dedicated management interface. Clear individual gestures or retrain as needed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-accent-300 dark:hover:border-accent-700 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent-100 dark:bg-accent-900/30 rounded-lg">
                    <Database className="text-accent-600 dark:text-accent-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Data Persistence</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Auto-save training data to localStorage and server. Training data persists across sessions for seamless user experience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-accent-300 dark:hover:border-accent-700 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent-100 dark:bg-accent-900/30 rounded-lg">
                    <Gauge className="text-accent-600 dark:text-accent-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Performance Optimized</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      10fps video processing, 400ms prediction throttle, model warm-up with WebGL shader pre-compilation for smooth real-time performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ML Architecture */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">ML Model Architecture</h2>
            <div className="space-y-6">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Feature Extraction</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-600 dark:text-accent-400 mt-1">•</span>
                    <span>21 hand landmarks (x, y, z coordinates) = 63 base features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-600 dark:text-accent-400 mt-1">•</span>
                    <span>Enhanced with directional angles (sin/cos components)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-600 dark:text-accent-400 mt-1">•</span>
                    <span>Displacement vectors from palm center</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-600 dark:text-accent-400 mt-1">•</span>
                    <span>Total: ~80 features per sample</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Neural Network</h3>
                <div className="space-y-3 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                    <span><strong className="text-gray-900 dark:text-white">Input layer:</strong> 63+ features</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-purple-500 rounded"></div>
                    <span><strong className="text-gray-900 dark:text-white">Hidden layer 1:</strong> 64 units (ReLU)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-pink-500 rounded"></div>
                    <span><strong className="text-gray-900 dark:text-white">Hidden layer 2:</strong> 32 units (ReLU)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded"></div>
                    <span><strong className="text-gray-900 dark:text-white">Output layer:</strong> 5 units (Softmax)</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p><strong className="text-gray-900 dark:text-white">Training:</strong> 30 epochs, Adam optimizer</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Performance Optimizations</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <Gauge className="text-accent-600 dark:text-accent-400 mt-1 flex-shrink-0" size={16} />
                    <span>Model warm-up with 3 dummy predictions (WebGL shader compilation)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Gauge className="text-accent-600 dark:text-accent-400 mt-1 flex-shrink-0" size={16} />
                    <span>Prediction throttle: 400ms (2.5 predictions/sec)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Gauge className="text-accent-600 dark:text-accent-400 mt-1 flex-shrink-0" size={16} />
                    <span>Video rendering: 10fps (every 6th frame)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Gauge className="text-accent-600 dark:text-accent-400 mt-1 flex-shrink-0" size={16} />
                    <span>Confidence threshold: 0.3 (30%)</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Usage Guide */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Usage Guide</h2>
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Play className="text-blue-600 dark:text-blue-400" size={24} />
                  Playing the Game
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">1.</span>
                    <span>Visit the homepage - the game loads immediately</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">2.</span>
                    <span>Use your trained gestures to control the ball:
                      <ul className="ml-4 mt-2 space-y-1">
                        <li>• UP (↑): Move ball upward</li>
                        <li>• DOWN (↓): Move ball downward</li>
                        <li>• LEFT (←): Move ball left</li>
                        <li>• RIGHT (→): Move ball right</li>
                        <li>• FREEZE (■): Stop ball movement</li>
                      </ul>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">3.</span>
                    <span>Ball wraps around screen edges</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Brain className="text-purple-600 dark:text-purple-400" size={24} />
                  Training Custom Gestures
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">1.</span>
                    <span>Navigate to /manage or click &quot;Manage Gestures&quot; in the header</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">2.</span>
                    <span>Click a gesture button (UP, DOWN, LEFT, RIGHT, or FREEZE)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">3.</span>
                    <span>Perform your custom gesture in front of the camera</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">4.</span>
                    <span>System captures 15 samples automatically</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">5.</span>
                    <span>Repeat for all 5 gestures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">6.</span>
                    <span>Training data auto-saves to both localStorage and server</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-purple-200 dark:border-purple-800">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong className="text-gray-900 dark:text-white">Quick Start Gestures:</strong>
                    <br />• Point index finger in direction for UP/DOWN/LEFT/RIGHT
                    <br />• Open palm (all fingers) for FREEZE
                  </p>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Settings className="text-green-600 dark:text-green-400" size={24} />
                  Managing Training Data
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400">•</span>
                    <span><strong>Optimize Data:</strong> Reduces training samples from 30 to 15 per gesture for better performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400">•</span>
                    <span><strong>Reset Training:</strong> Deletes all training data to start fresh</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Technical Stack */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Technical Stack</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Frontend</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent-600 dark:bg-accent-400 rounded-full"></span>
                    Next.js 16 (App Router)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent-600 dark:bg-accent-400 rounded-full"></span>
                    React 19
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent-600 dark:bg-accent-400 rounded-full"></span>
                    TypeScript
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent-600 dark:bg-accent-400 rounded-full"></span>
                    CSS (Custom Properties)
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Machine Learning</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent-600 dark:bg-accent-400 rounded-full"></span>
                    TensorFlow.js
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent-600 dark:bg-accent-400 rounded-full"></span>
                    MediaPipe Hand Landmarker
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent-600 dark:bg-accent-400 rounded-full"></span>
                    Neural Network
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Runtime & Deployment</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent-600 dark:bg-accent-400 rounded-full"></span>
                    Bun (Node.js compatible)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent-600 dark:bg-accent-400 rounded-full"></span>
                    Vercel
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent-600 dark:bg-accent-400 rounded-full"></span>
                    Browser-based
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* How It Works */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">How It Works</h2>
            <div className="space-y-6">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border-l-4 border-accent-600 dark:border-accent-400">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-600 dark:bg-accent-400 text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Hand Tracking</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      MediaPipe Hands detects and tracks 21 hand landmarks in real-time, providing precise 3D coordinates for each finger joint and palm position.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border-l-4 border-accent-600 dark:border-accent-400">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-600 dark:bg-accent-400 text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Gesture Training</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Users capture multiple samples of each gesture (UP, DOWN, LEFT, RIGHT, FREEZE). The system stores the landmark coordinates for each sample, building a training dataset.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border-l-4 border-accent-600 dark:border-accent-400">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-600 dark:bg-accent-400 text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Classification</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      TensorFlow.js uses a K-Nearest Neighbors (KNN) classifier to match live hand positions against the trained gestures, providing instant classification with high accuracy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border-l-4 border-accent-600 dark:border-accent-400">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-600 dark:bg-accent-400 text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Ball Control</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Detected gestures translate into ball movement on the canvas. The system updates the ball&apos;s position in real-time based on the recognized gesture direction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Challenges & Solutions */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Challenges & Solutions</h2>
            <div className="space-y-6">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Performance Optimization</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  <strong className="text-gray-900 dark:text-white">Challenge:</strong> Maintaining 60fps while running hand tracking and gesture classification simultaneously.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong className="text-gray-900 dark:text-white">Solution:</strong> Optimized the model inference pipeline, reduced unnecessary re-renders, and used efficient data structures for landmark processing. The KNN classifier provides fast predictions without heavy computation.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Gesture Accuracy</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  <strong className="text-gray-900 dark:text-white">Challenge:</strong> Distinguishing between similar gestures and handling variations in hand positions.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong className="text-gray-900 dark:text-white">Solution:</strong> Implemented multiple training samples per gesture and normalized landmark coordinates. Users can retrain gestures to improve accuracy for their specific hand movements.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Cross-Browser Compatibility</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  <strong className="text-gray-900 dark:text-white">Challenge:</strong> Ensuring webcam access and WebGL support across different browsers.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong className="text-gray-900 dark:text-white">Solution:</strong> Implemented proper error handling and fallbacks. Used modern browser APIs with progressive enhancement and clear error messages for unsupported browsers.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Future Enhancements */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Browser Compatibility & Troubleshooting</h2>
            
            <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Chrome className="text-blue-600 dark:text-blue-400" size={24} />
                Browser Support
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">Chrome/Edge</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Full support (recommended)</p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">Firefox</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Full support</p>
                </div>
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">Safari</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Requires WASM polyfill</p>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">Requirements:</p>
                <ul className="space-y-1 ml-4">
                  <li>• WebGL 2.0 support</li>
                  <li>• Camera access permission</li>
                  <li>• Modern ES6+ JavaScript support</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <AlertCircle className="text-red-600 dark:text-red-400" size={20} />
                  Camera Not Working
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                  <li>• Grant camera permissions in browser settings</li>
                  <li>• Check if another app is using the camera</li>
                  <li>• Try Chrome/Edge for best compatibility</li>
                </ul>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <AlertCircle className="text-orange-600 dark:text-orange-400" size={20} />
                  Gestures Not Recognized
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                  <li>• Ensure all 5 gestures are trained (15 samples each)</li>
                  <li>• Check camera has good lighting</li>
                  <li>• Position hand clearly in frame</li>
                  <li>• Try retraining gestures with exaggerated movements</li>
                </ul>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <AlertCircle className="text-yellow-600 dark:text-yellow-400" size={20} />
                  Performance Issues
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                  <li>• Click &quot;Optimize Data&quot; in /manage</li>
                  <li>• Close other browser tabs</li>
                  <li>• Check GPU acceleration is enabled in browser</li>
                  <li>• Clear browser cache and reload</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Development */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Installation & Development</h2>
            
            <div className="p-6 bg-gray-900 dark:bg-gray-950 rounded-xl border border-gray-700 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="text-green-400" size={20} />
                <h3 className="text-lg font-semibold text-white">Installation</h3>
              </div>
              <pre className="text-green-400 text-sm overflow-x-auto">
                <code>{`# Clone the repository
git clone https://github.com/Is116/gesture-works.git
cd gesture-works

# Install dependencies
bun install

# Run development server
bun run dev`}</code>
              </pre>
              <p className="text-gray-400 text-sm mt-3">Open http://localhost:3000 in your browser.</p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Code2 className="text-accent-600 dark:text-accent-400" size={20} />
                Development Commands
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <code className="text-accent-600 dark:text-accent-400 font-mono">bun run dev</code>
                  <span className="text-gray-600 dark:text-gray-400">Start development server</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <code className="text-accent-600 dark:text-accent-400 font-mono">bun run build</code>
                  <span className="text-gray-600 dark:text-gray-400">Build for production</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <code className="text-accent-600 dark:text-accent-400 font-mono">bun run start</code>
                  <span className="text-gray-600 dark:text-gray-400">Start production server</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <code className="text-accent-600 dark:text-accent-400 font-mono">bun run lint</code>
                  <span className="text-gray-600 dark:text-gray-400">Run ESLint</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Future Enhancements */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Future Enhancements</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20 rounded-xl border border-accent-200 dark:border-accent-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">More Complex Gestures</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Add support for two-handed gestures and dynamic movement patterns for more sophisticated controls.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20 rounded-xl border border-accent-200 dark:border-accent-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Game Modes</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Implement various game modes like obstacle avoidance, target collection, and time challenges.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20 rounded-xl border border-accent-200 dark:border-accent-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Gesture Persistence</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Save trained gestures to local storage or cloud for persistence across sessions and devices.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20 rounded-xl border border-accent-200 dark:border-accent-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Advanced ML Models</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Explore neural network-based classifiers for improved accuracy and support for complex gesture sequences.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div variants={fadeInUp}>
            <div className="p-8 bg-gradient-to-r from-accent-600 to-accent-700 dark:from-accent-500 dark:to-accent-600 rounded-2xl text-white">
              <h2 className="text-2xl font-bold mb-4">Try It Yourself</h2>
              <p className="mb-6 opacity-90">
                Experience the power of hand gesture control in your browser. Train your own gestures and start playing!
              </p>
              <a
                href="https://github.com/Is116/gesture-works"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-accent-600 font-semibold rounded-xl transition-all hover:scale-105 shadow-lg"
              >
                <Github size={20} />
                View on GitHub
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </article>
  )
}
