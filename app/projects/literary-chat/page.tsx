'use client'

import { Calendar, Clock, ArrowLeft, Target, Zap, Brain, Play, Settings, Github, ExternalLink, Database, Gauge, FileCode, AlertCircle, Chrome, Code2, Terminal, BookOpen, MessageSquare, Users, Sparkles, Globe, Upload, ShieldCheck } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function LiteraryChatProject() {
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
            Literary Chat AI Book Character Conversations
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
            A full-stack AI web application for dynamic conversations with literary characters. Users upload PDF books; the system uses Google Gemini AI for automatic character and metadata extraction, leveraging RAG for context-aware, multilingual chats with detailed, opinionated character personas.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <div className="flex flex-wrap gap-2">
              {['Gemini AI', 'React', 'Node.js', 'Express', 'SQLite', 'Prisma', 'RAG', 'Tailwind CSS'].map((tag, index) => (
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
              href="https://github.com/Is116/ai-chat-fin-stories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-800 hover:bg-gray-800 dark:hover:bg-gray-700 text-white font-semibold rounded-xl transition-all hover:scale-105 shadow-lg"
            >
              <Github size={20} />
              View Code
            </a>
          </div>

          {/* Featured Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl"
            >
              <Image
                src="/projects/ai_chat/ai_chat.jpeg"
                alt="Literary Chat Interface"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl"
            >
              <Image
                src="/projects/ai_chat/landing.jpeg"
                alt="Literary Chat Landing Page"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Additional Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl"
          >
            <Image
              src="/projects/ai_chat/book_single.jpeg"
              alt="Literary Chat Book Details"
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
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Literary Chat is a full-stack web application that revolutionizes how readers engage with literature by enabling AI-powered conversations with book characters. The platform combines cutting-edge AI technology with intuitive design to create authentic, context-aware interactions with literary personas.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Built with Google Gemini AI and powered by Retrieval-Augmented Generation (RAG), the system automatically extracts characters from uploaded PDFs, generates detailed personas, and facilitates natural conversations in multiple languages. Each character maintains their unique voice, opinions, and personality traits, creating engaging dialogues that feel true to the source material.
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
                    <Upload className="text-accent-600 dark:text-accent-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">PDF Book Upload</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Upload books in PDF format. The system extracts text, generates cover images, and automatically extracts metadata including title, author, genre, and publication year.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-accent-300 dark:hover:border-accent-700 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent-100 dark:bg-accent-900/30 rounded-lg">
                    <Brain className="text-accent-600 dark:text-accent-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">AI Character Extraction</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Google Gemini AI automatically identifies main characters from uploaded books, extracting names, descriptions, and relationships for seamless character discovery.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-accent-300 dark:hover:border-accent-700 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent-100 dark:bg-accent-900/30 rounded-lg">
                    <Sparkles className="text-accent-600 dark:text-accent-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Opinionated Character Personas</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Characters express strong opinions, emotions, and personality traits. Each persona is deeply analyzed for voice, manner of speech, worldview, and emotional patterns.
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
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">RAG Integration</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Retrieval-Augmented Generation ensures context-aware responses. Book content is chunked and stored for precise, relevant character interactions based on source material.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-accent-300 dark:hover:border-accent-700 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent-100 dark:bg-accent-900/30 rounded-lg">
                    <Globe className="text-accent-600 dark:text-accent-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Multilingual Support</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Chat in English, Sinhala, Finnish, and more. Characters respond in the same language as the user&apos;s message, powered by i18next internationalization.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-accent-300 dark:hover:border-accent-700 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent-100 dark:bg-accent-900/30 rounded-lg">
                    <MessageSquare className="text-accent-600 dark:text-accent-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Conversation History</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Persistent chat history allows users to continue conversations across sessions. All messages are stored and retrievable for each character interaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Technical Architecture */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">System Architecture</h2>
            <div className="space-y-6">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Book Processing Pipeline</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-600 dark:text-accent-400 mt-1">1.</span>
                    <span>PDF uploaded → Book record created (status: pending)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-600 dark:text-accent-400 mt-1">2.</span>
                    <span>Text extraction from PDF using pdf-parse library</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-600 dark:text-accent-400 mt-1">3.</span>
                    <span>Content split into chunks (500-1000 bytes each) → BookChunk records</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-600 dark:text-accent-400 mt-1">4.</span>
                    <span>AI extracts metadata (title, author, genre, year, language)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-600 dark:text-accent-400 mt-1">5.</span>
                    <span>AI extracts main characters → ExtractedCharacter records</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-600 dark:text-accent-400 mt-1">6.</span>
                    <span>Admin reviews and approves characters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-600 dark:text-accent-400 mt-1">7.</span>
                    <span>AI generates detailed personas → CharacterPersona records</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Chat Conversation Flow</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-600 dark:text-accent-400 mt-1">1.</span>
                    <span>User selects character → Conversation record created</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-600 dark:text-accent-400 mt-1">2.</span>
                    <span>User sends message → Message record created</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-600 dark:text-accent-400 mt-1">3.</span>
                    <span>Backend retrieves relevant book chunks (RAG)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-600 dark:text-accent-400 mt-1">4.</span>
                    <span>Character persona + context + chat history sent to Gemini AI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-600 dark:text-accent-400 mt-1">5.</span>
                    <span>AI generates response matching character&apos;s voice and personality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-600 dark:text-accent-400 mt-1">6.</span>
                    <span>Response stored → Message record created</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Database Schema</h3>
                <div className="space-y-3 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                    <span><strong className="text-gray-900 dark:text-white">User:</strong> Authentication and profile data</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-purple-500 rounded"></div>
                    <span><strong className="text-gray-900 dark:text-white">Book:</strong> Metadata, cover image, processing status</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-pink-500 rounded"></div>
                    <span><strong className="text-gray-900 dark:text-white">BookChunk:</strong> Text segments for RAG retrieval</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded"></div>
                    <span><strong className="text-gray-900 dark:text-white">Character:</strong> Character info, avatar, book reference</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                    <span><strong className="text-gray-900 dark:text-white">CharacterPersona:</strong> Detailed AI-generated personality</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded"></div>
                    <span><strong className="text-gray-900 dark:text-white">Conversation:</strong> Chat session between user and character</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-indigo-500 rounded"></div>
                    <span><strong className="text-gray-900 dark:text-white">Message:</strong> Individual messages with timestamps</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Advanced Features */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Advanced Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Users className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">User Authentication</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Secure local authentication with bcrypt password hashing. Optional Google OAuth integration for social login with Passport.js middleware.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <ShieldCheck className="text-purple-600 dark:text-purple-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Admin Dashboard</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Comprehensive admin panel to manage users, books, characters, and AI prompts. Monitor book processing status and review extracted characters before publishing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Sparkles className="text-green-600 dark:text-green-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Auto-Generated Avatars</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Unique character avatars generated using DiceBear API. Beautiful, consistent visual representation for each literary character.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl border border-orange-200 dark:border-orange-800">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <FileCode className="text-orange-600 dark:text-orange-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Image Analysis</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Upload images during conversations for character analysis. Characters provide insights and opinions about images in their unique voice.
                    </p>
                  </div>
                </div>
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
                    React 18.2
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent-600 dark:bg-accent-400 rounded-full"></span>
                    React Router DOM 7.9
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent-600 dark:bg-accent-400 rounded-full"></span>
                    Vite 4.3
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent-600 dark:bg-accent-400 rounded-full"></span>
                    Tailwind CSS 3.3
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent-600 dark:bg-accent-400 rounded-full"></span>
                    i18next
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent-600 dark:bg-accent-400 rounded-full"></span>
                    Lucide React Icons
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Backend</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent-600 dark:bg-accent-400 rounded-full"></span>
                    Node.js
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent-600 dark:bg-accent-400 rounded-full"></span>
                    Express 5.1
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent-600 dark:bg-accent-400 rounded-full"></span>
                    SQLite (Better-SQLite3)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent-600 dark:bg-accent-400 rounded-full"></span>
                    Prisma ORM
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent-600 dark:bg-accent-400 rounded-full"></span>
                    Passport.js
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent-600 dark:bg-accent-400 rounded-full"></span>
                    PDF-Parse
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">AI & Services</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent-600 dark:bg-accent-400 rounded-full"></span>
                    Google Gemini AI
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent-600 dark:bg-accent-400 rounded-full"></span>
                    RAG Architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent-600 dark:bg-accent-400 rounded-full"></span>
                    DiceBear API
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent-600 dark:bg-accent-400 rounded-full"></span>
                    Multer (File Uploads)
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
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Create Account & Upload Books</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Sign up with email or Google OAuth. Admins upload PDF books which are processed to extract text, generate metadata, and identify characters automatically using Google Gemini AI.
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
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Browse & Select Characters</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Explore a rich library of characters from classic and contemporary literature. Filter by book, genre, or author. Each character has a unique avatar and detailed description.
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
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Start Conversations</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Chat with characters in any supported language. The AI maintains character authenticity using RAG to reference book content, creating engaging, context-aware dialogues with strong opinions and emotional depth.
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
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Continue & Explore</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      All conversations are saved. Return anytime to continue discussions with your favorite characters. Upload images for analysis or explore new characters and books.
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
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Character Authenticity</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  <strong className="text-gray-900 dark:text-white">Challenge:</strong> Creating AI personas that truly capture each character&apos;s unique voice, opinions, and personality from the source material.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong className="text-gray-900 dark:text-white">Solution:</strong> Implemented detailed persona generation with Google Gemini AI analyzing voice patterns, worldview, emotional expressions, and relationships. RAG integration ensures responses reference actual book content for accuracy.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Multilingual Consistency</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  <strong className="text-gray-900 dark:text-white">Challenge:</strong> Maintaining character personality and context across multiple languages while detecting and matching user language automatically.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong className="text-gray-900 dark:text-white">Solution:</strong> AI prompts include language-matching instructions. Frontend uses i18next for UI translation while backend ensures characters respond in the same language as user messages.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Efficient Book Processing</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  <strong className="text-gray-900 dark:text-white">Challenge:</strong> Processing large PDF files, extracting text, chunking for RAG, and extracting metadata efficiently without blocking the system.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong className="text-gray-900 dark:text-white">Solution:</strong> Implemented background processing pipeline with status tracking. Books are chunked into 500-1000 byte segments optimized for vector retrieval and AI context windows.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Usage Guide */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Usage Guide</h2>
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Users className="text-blue-600 dark:text-blue-400" size={24} />
                  For Users
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">1.</span>
                    <span>Sign up with email or Google account</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">2.</span>
                    <span>Browse available characters from the home page</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">3.</span>
                    <span>Select a character to start chatting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">4.</span>
                    <span>Type messages in any supported language</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">5.</span>
                    <span>View conversation history and switch between characters</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <ShieldCheck className="text-purple-600 dark:text-purple-400" size={24} />
                  For Admins
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">1.</span>
                    <span>Access admin dashboard at /admin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">2.</span>
                    <span>Upload PDF books with cover images</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">3.</span>
                    <span>Monitor book processing status</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">4.</span>
                    <span>Review and approve extracted characters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">5.</span>
                    <span>Manage AI prompts and system settings</span>
                  </li>
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
git clone https://github.com/Is116/ai-chat-fin-stories.git
cd ai-chat-fin-stories

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your API keys and configuration

# Initialize database
npx prisma migrate dev
npx prisma db seed

# Run development servers
npm run dev        # Frontend (http://localhost:3000)
npm run server     # Backend (http://localhost:3001)`}</code>
              </pre>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Settings className="text-accent-600 dark:text-accent-400" size={20} />
                Environment Configuration
              </h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <p><code className="text-accent-600 dark:text-accent-400 font-mono">PORT</code> - Backend server port (default: 3001)</p>
                <p><code className="text-accent-600 dark:text-accent-400 font-mono">DATABASE_PATH</code> - SQLite database file path</p>
                <p><code className="text-accent-600 dark:text-accent-400 font-mono">GEMINI_API_KEY</code> - Google Gemini AI API key</p>
                <p><code className="text-accent-600 dark:text-accent-400 font-mono">SESSION_SECRET</code> - Express session secret</p>
                <p><code className="text-accent-600 dark:text-accent-400 font-mono">GOOGLE_CLIENT_ID</code> - Google OAuth client ID (optional)</p>
                <p><code className="text-accent-600 dark:text-accent-400 font-mono">GOOGLE_CLIENT_SECRET</code> - Google OAuth secret (optional)</p>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Code2 className="text-accent-600 dark:text-accent-400" size={20} />
                Key Scripts
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <code className="text-accent-600 dark:text-accent-400 font-mono">npm run dev</code>
                  <span className="text-gray-600 dark:text-gray-400">Start frontend development server</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <code className="text-accent-600 dark:text-accent-400 font-mono">npm run server</code>
                  <span className="text-gray-600 dark:text-gray-400">Start backend server</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <code className="text-accent-600 dark:text-accent-400 font-mono">npm run build</code>
                  <span className="text-gray-600 dark:text-gray-400">Build frontend for production</span>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <code className="text-accent-600 dark:text-accent-400 font-mono">npx prisma studio</code>
                  <span className="text-gray-600 dark:text-gray-400">Open Prisma database GUI</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Future Enhancements */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Future Enhancements</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20 rounded-xl border border-accent-200 dark:border-accent-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Multi-Character Conversations</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Enable conversations with multiple characters simultaneously, allowing users to witness character interactions and debates.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20 rounded-xl border border-accent-200 dark:border-accent-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Voice Conversations</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Add speech-to-text and text-to-speech capabilities for voice-based conversations with character-specific voice synthesis.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20 rounded-xl border border-accent-200 dark:border-accent-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Advanced Analytics</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Track conversation patterns, popular characters, user engagement metrics, and provide insights to improve the experience.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20 rounded-xl border border-accent-200 dark:border-accent-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">PostgreSQL Migration</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Migrate from SQLite to PostgreSQL for better scalability, concurrent access, and support for large-scale deployments.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div variants={fadeInUp}>
            <div className="p-8 bg-gradient-to-r from-accent-600 to-accent-700 dark:from-accent-500 dark:to-accent-600 rounded-2xl text-white">
              <h2 className="text-2xl font-bold mb-4">Explore the Project</h2>
              <p className="mb-6 opacity-90">
                Dive into the world of literary conversations. Chat with your favorite book characters powered by cutting-edge AI technology!
              </p>
              <a
                href="https://github.com/Is116/ai-chat-fin-stories"
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
