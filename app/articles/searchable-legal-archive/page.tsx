'use client'

import { Calendar, Clock, ArrowLeft, FileText, Database, Brain, Network, Cpu, Layers, Search, GitBranch, Globe, Filter, Zap, Target, Users, MapPin, Building2, TrendingUp, Code, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function SearchableLegalArchiveArticle() {
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6"
          >
            <FileText size={16} />
            AI + LEGAL TECH CASE STUDY
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Building a Searchable Archive: How AI Processes 8,000+ Legal Documents
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            A technical deep-dive into OCR technology, entity extraction (12,243 people, 5,709 organizations, 3,211 locations), AI deduplication systems, and the open-source Python pipeline that made it possible.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <time dateTime="2025-02-15">February 2025</time>
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
              src="/articles/document_search.png"
              alt="Searchable Legal Archive - AI Document Processing"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Project Context */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-semibold">📌 Disclaimer & Context:</p>
            <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed">
              This article examines the technical implementation of an open-source document processing system as a case study in AI-powered archival technology. The focus is on the engineering challenges of OCR, entity extraction, and deduplication at scale. This is a conceptual analysis of publicly available technology that has implications for legal transparency, investigative journalism, and public access to court records. The techniques discussed are applicable to any large-scale document digitization project.
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
          <motion.div variants={fadeInUp} className="mb-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-l-4 border-blue-500 p-8 rounded-r-2xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Executive Summary</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              When thousands of legal documents are released to the public, they often arrive as scanned images   unstructured, unsearchable, and locked away from meaningful analysis. This article examines an open-source project that transformed <strong>8,175 document images</strong> into a fully searchable, entity-indexed, AI-analyzed archive. Using a Python-based OCR pipeline, computer vision models, and advanced entity deduplication algorithms, the system extracted text from both printed and handwritten sources, identified <strong>12,243 people</strong>, <strong>5,709 organizations</strong>, and <strong>3,211 locations</strong>, and generated AI-powered summaries for every document. This is not just a technical achievement   it's a blueprint for democratizing access to legal information in the age of AI.
            </p>
          </motion.div>

          {/* Stats Overview */}
          <motion.div variants={fadeInUp} className="mb-16">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-900 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-6 text-center">
                <FileText className="mx-auto text-blue-600 dark:text-blue-400 mb-3" size={32} />
                <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">8,175</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Documents Processed</p>
              </div>
              <div className="bg-white dark:bg-gray-900 border-2 border-purple-200 dark:border-purple-800 rounded-xl p-6 text-center">
                <Users className="mx-auto text-purple-600 dark:text-purple-400 mb-3" size={32} />
                <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">12,243</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">People Identified</p>
              </div>
              <div className="bg-white dark:bg-gray-900 border-2 border-pink-200 dark:border-pink-800 rounded-xl p-6 text-center">
                <Building2 className="mx-auto text-pink-600 dark:text-pink-400 mb-3" size={32} />
                <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">5,709</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Organizations</p>
              </div>
              <div className="bg-white dark:bg-gray-900 border-2 border-green-200 dark:border-green-800 rounded-xl p-6 text-center">
                <MapPin className="mx-auto text-green-600 dark:text-green-400 mb-3" size={32} />
                <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">3,211</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Locations Mapped</p>
              </div>
            </div>
          </motion.div>

          {/* Section 1: The Problem */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-12 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></span>
              1. The Problem: Locked Knowledge in Scanned Images
            </h2>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Court documents, depositions, financial records, and legal filings are the raw material of transparency in democratic societies. When high-profile legal cases conclude or when freedom of information requests are fulfilled, thousands of pages are often released to the public. But there's a problem: <strong>these documents are almost always scanned images, not searchable text</strong>.
              </p>

              <p>
                A scanned PDF is, to a computer, just a collection of pixels   a photograph of a page. You cannot search for a person's name. You cannot extract dates. You cannot cross-reference mentions of a company across hundreds of documents. For journalists, researchers, and concerned citizens, this creates an insurmountable barrier. Reading 8,000 pages manually is impossible for a single person and impractical even for a team.
              </p>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-xl">
                <h4 className="font-bold text-red-900 dark:text-red-100 mb-3">The Scale of the Challenge</h4>
                <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                  <li>• <strong>8,175 document images</strong> requiring OCR processing</li>
                  <li>• Mixed content: printed text, handwritten notes, stamps, signatures</li>
                  <li>• Varying quality: some pages clear, others degraded or redacted</li>
                  <li>• No standardized naming: document numbers formatted inconsistently</li>
                  <li>• Multi-page documents split into individual scans needing reconstruction</li>
                </ul>
              </div>

              <p>
                The answer lies in <strong>Optical Character Recognition (OCR)</strong> powered by modern AI vision models. But OCR alone is not enough. To make a document archive truly useful, you need entity extraction, deduplication, document reconstruction, and semantic search. This is the story of how one open-source project solved all of these problems.
              </p>
            </div>
          </motion.section>

          {/* Section 2: The OCR Pipeline */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-12 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full"></span>
              2. The OCR Pipeline: From Pixels to Structured Data
            </h2>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Traditional OCR tools like Tesseract work well for clean, printed text. But legal documents are rarely clean. They contain:
              </p>

              <ul className="space-y-2 ml-6">
                <li>• <strong>Handwritten annotations</strong> in margins and on forms</li>
                <li>• <strong>Stamps and signatures</strong> overlaid on text</li>
                <li>• <strong>Multi-column layouts</strong> that confuse reading order</li>
                <li>• <strong>Redaction boxes</strong> covering sensitive information</li>
                <li>• <strong>Low-resolution scans</strong> from older fax or photocopy systems</li>
              </ul>

              <p>
                The solution: <strong>AI-powered computer vision models</strong> from OpenAI, Google, or similar providers. These models, originally designed for image understanding, excel at extracting text from complex documents. The project used a Python script (<code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">process_images.py</code>) that:
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-12">2.1 How the OCR Script Works</h3>
            
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-2 border-purple-200 dark:border-purple-800 p-8 rounded-2xl">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Code size={24} className="text-purple-600 dark:text-purple-400" />
                  OCR Processing Workflow
                </h4>
                <ol className="space-y-4 text-base text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                    <div>
                      <strong>Image Submission:</strong> Each scanned page image is sent to an AI vision API endpoint (OpenAI-compatible)
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                    <div>
                      <strong>Structured Extraction:</strong> The AI model returns a JSON object containing:
                      <ul className="ml-6 mt-2 space-y-1 text-sm">
                        <li>• Full text in reading order</li>
                        <li>• Document metadata (page/document numbers, dates)</li>
                        <li>• Named entities (people, organizations, locations)</li>
                        <li>• Text type annotations (printed, handwritten, stamps)</li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                    <div>
                      <strong>Auto-Fix Broken JSON:</strong> If the AI returns invalid JSON, the script automatically sends the error message <em>back to the AI</em> along with the original image, asking for a corrected response
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
                    <div>
                      <strong>Save Results:</strong> Each processed page is saved as a JSON file in <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">./results/&#123;folder&#125;/&#123;imagename&#125;.json</code>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">5</span>
                    <div>
                      <strong>Progress Tracking:</strong> The script maintains <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">processing_index.json</code> to track which files have been processed (resume-friendly)
                    </div>
                  </li>
                </ol>
              </div>

              <p>
                The script supports <strong>parallel processing</strong> with configurable workers (default: 5 concurrent requests) and can be limited to process only the first N images for testing. Failed files are logged for later retry using a cleanup script.
              </p>

              <div className="bg-gradient-to-r from-green-50 to-cyan-50 dark:from-green-900/20 dark:to-cyan-900/20 border-l-4 border-green-500 p-6 rounded-r-xl">
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                  <CheckCircle size={20} />
                  Key Innovation: Self-Healing JSON
                </h4>
                <p className="text-gray-800 dark:text-gray-200">
                  One of the most elegant features is the <strong>auto-fix broken JSON</strong> mechanism. Large language models occasionally return malformed JSON (missing commas, unclosed brackets). Rather than failing the job, the script catches the error, sends it back to the AI with instructions to fix it, and retries. This dramatically reduces manual intervention.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 3: Entity Extraction */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-12 bg-gradient-to-b from-pink-500 to-pink-600 rounded-full"></span>
              3. Entity Extraction: Finding 12,243 People, 5,709 Organizations, 3,211 Locations
            </h2>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                OCR gives you the text. But to make it <em>searchable by entity</em>, you need <strong>Named Entity Recognition (NER)</strong>. The AI vision model extracts entities directly from the document images during OCR processing:
              </p>

              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="bg-white dark:bg-gray-900 border-2 border-purple-200 dark:border-purple-800 rounded-xl p-6">
                  <Users className="text-purple-600 dark:text-purple-400 mb-3" size={32} />
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">People</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Names of individuals mentioned in any context: witnesses, defendants, attorneys, flight passengers, etc.
                  </p>
                  <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">12,243</p>
                </div>
                <div className="bg-white dark:bg-gray-900 border-2 border-pink-200 dark:border-pink-800 rounded-xl p-6">
                  <Building2 className="text-pink-600 dark:text-pink-400 mb-3" size={32} />
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Organizations</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Companies, law firms, government agencies, foundations, and other entities mentioned.
                  </p>
                  <p className="text-2xl font-bold text-pink-600 dark:text-pink-400">5,709</p>
                </div>
                <div className="bg-white dark:bg-gray-900 border-2 border-green-200 dark:border-green-800 rounded-xl p-6">
                  <MapPin className="text-green-600 dark:text-green-400 mb-3" size={32} />
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Locations</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Cities, addresses, properties, airports, and geographic references extracted from documents.
                  </p>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">3,211</p>
                </div>
              </div>

              <p>
                These entities are stored alongside the OCR text in each document's JSON file. The vision model also extracts <strong>dates</strong> (11,020 temporal references) and <strong>document types</strong> (41 categories like "Deposition", "Flight Log", "Email", etc.).
              </p>

              <p>
                But there's a critical problem that emerges at scale: <strong>inconsistent naming</strong>.
              </p>
            </div>
          </motion.section>

          {/* Section 4: Deduplication */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-12 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full"></span>
              4. The AI Deduplication System: Merging "Epstein" and "Jeffrey Epstein"
            </h2>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                When processing thousands of pages, the AI vision model does not maintain consistency across documents. One page might extract <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">"Epstein"</code>, another <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">"Jeffrey Epstein"</code>, and a third <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">"J. Epstein"</code>. Without deduplication, these would appear as three separate people in the index.
              </p>

              <p>
                The solution is a <strong>second AI pass</strong> dedicated to entity resolution. The script <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">deduplicate.py</code> collects all extracted entities, groups them in batches (default: 50 entities per batch), and sends them to the AI with instructions to identify duplicates and provide a canonical name for each cluster.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-12">4.1 How Deduplication Works</h3>

              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 border-2 border-orange-200 dark:border-orange-800 p-8 rounded-2xl">
                <ol className="space-y-4 text-base text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                    <div>
                      <strong>Collect Entities:</strong> Scan all JSON files in <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">./results/</code> and extract all people, organizations, and locations
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                    <div>
                      <strong>Batch Processing:</strong> Group entities into batches of 50 (configurable) to avoid overwhelming the AI context window
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                    <div>
                      <strong>AI Resolution:</strong> Send each batch to the AI with a prompt: "Identify which of these names refer to the same person/organization/location and provide the canonical form"
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
                    <div>
                      <strong>Generate Mapping:</strong> Create <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">dedupe.json</code> with mappings like:
                      <pre className="mt-2 p-3 bg-gray-900 text-gray-100 rounded text-xs overflow-x-auto">
{`{
  "people": {
    "Epstein": "Jeffrey Epstein",
    "J. Epstein": "Jeffrey Epstein",
    "Jeffrey Epstein": "Jeffrey Epstein"
  }
}`}
                      </pre>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">5</span>
                    <div>
                      <strong>Apply at Build Time:</strong> The static site generator automatically applies this mapping when building entity index pages
                    </div>
                  </li>
                </ol>
              </div>

              <p className="mt-6">
                The same process runs for <strong>document types</strong> (<code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">deduplicate_types.py</code>), merging variants like "deposition", "Deposition", and "DEPOSITION TRANSCRIPT" into a single canonical form. The result: <strong>41 document type categories</strong> instead of potentially hundreds of variations.
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-xl">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Why This Matters</h4>
                <p className="text-gray-800 dark:text-gray-200">
                  Without deduplication, the entity index would be fragmented and nearly useless. A researcher searching for "Jeffrey Epstein" would miss documents where he's referenced as just "Epstein". This AI-powered resolution step is what makes the archive <em>actually searchable</em>.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 5: Document Reconstruction */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-12 bg-gradient-to-b from-green-500 to-green-600 rounded-full"></span>
              5. Document Reconstruction: Grouping 2,000 Pages into Coherent Documents
            </h2>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Legal document releases typically arrive as a folder of individual page scans: <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">page_001.jpg</code>, <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">page_002.jpg</code>, and so on. But each document spans multiple pages. A deposition might be 50 pages. A financial record might be 200.
              </p>

              <p>
                During OCR processing, the AI extracts <strong>document numbers</strong> and <strong>page numbers</strong> from each page (if present). The build system uses these metadata fields to:
              </p>

              <ul className="space-y-2 ml-6">
                <li>• Group pages by document number</li>
                <li>• Sort pages within each document by page number</li>
                <li>• Reconstruct complete multi-page documents for display</li>
              </ul>

              <p>
                This is non-trivial because document numbers are not consistently formatted. Some pages show "Doc 123", others show "Document #123", and still others show "EPSTEIN-000123". The AI model is instructed to normalize these into a consistent format during extraction.
              </p>

              <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 border-2 border-green-200 dark:border-green-800 p-6 rounded-xl">
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                  <Layers size={20} />
                  Result: 8,175 Pages → ~400 Multi-Page Documents
                </h4>
                <p className="text-gray-800 dark:text-gray-200">
                  The system successfully reconstructed approximately 400 complete documents from over 8,000 individual page scans, handling inconsistencies in numbering and correctly ordering pages even when metadata was incomplete.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 6: AI Analysis */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-12 bg-gradient-to-b from-cyan-500 to-cyan-600 rounded-full"></span>
              6. The AI Analysis Layer: Summaries, Key Topics, and Significance
            </h2>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Having searchable text and entity indexes is powerful. But for a researcher trying to understand <em>which documents are important</em>, reading through hundreds of depositions is still overwhelming. The final layer of the pipeline adds <strong>AI-generated document analysis</strong>.
              </p>

              <p>
                The script <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">analyze_documents.py</code> groups pages into complete documents (using the reconstruction logic) and sends the <strong>full text of each document</strong> to an AI model with instructions to generate:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white dark:bg-gray-900 border border-cyan-200 dark:border-cyan-800 rounded-xl p-6">
                  <Brain className="text-cyan-600 dark:text-cyan-400 mb-3" size={28} />
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Executive Summary</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    2-3 paragraph overview of the document's contents, written in plain language
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-900 border border-cyan-200 dark:border-cyan-800 rounded-xl p-6">
                  <Target className="text-cyan-600 dark:text-cyan-400 mb-3" size={28} />
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Key Topics</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Array of main subjects discussed (e.g., "Flight logs", "Financial transactions", "Witness testimony")
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-900 border border-cyan-200 dark:border-cyan-800 rounded-xl p-6">
                  <Users className="text-cyan-600 dark:text-cyan-400 mb-3" size={28} />
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Key People</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    List of the most significant individuals mentioned, with brief role descriptions
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-900 border border-cyan-200 dark:border-cyan-800 rounded-xl p-6">
                  <TrendingUp className="text-cyan-600 dark:text-cyan-400 mb-3" size={28} />
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Significance</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Assessment of the document's importance and what makes it noteworthy
                  </p>
                </div>
              </div>

              <p>
                All analyses are saved to <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">analyses.json</code> and automatically incorporated into the searchable website. The script is resume-friendly   it skips documents already analyzed unless forced to re-run.
              </p>

              <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded-r-xl">
                <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">Example Analysis Output</h4>
                <pre className="text-xs bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto leading-relaxed">
{`{
  "document_type": "Deposition",
  "key_topics": [
    "Flight logs",
    "Private aircraft",
    "Passenger manifests"
  ],
  "key_people": [
    {
      "name": "Jeffrey Epstein",
      "role": "Aircraft owner"
    }
  ],
  "significance": "Documents flight records showing...",
  "summary": "This deposition contains testimony regarding..."
}`}
                </pre>
              </div>
            </div>
          </motion.section>

          {/* Section 7: Tech Stack */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-12 bg-gradient-to-b from-indigo-500 to-indigo-600 rounded-full"></span>
              7. The Open-Source Technology Stack
            </h2>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                The entire system is built on open-source tools and is itself open-source. Here's the technology breakdown:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Python Backend */}
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-2 border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
                  <Code className="text-yellow-600 dark:text-yellow-400 mb-3" size={32} />
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Python Processing Layer</h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">▸</span>
                      <span><strong>Python 3.x</strong> for all OCR and processing scripts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">▸</span>
                      <span><strong>OpenAI-compatible API</strong> (OpenAI, OpenRouter, local models via LM Studio)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">▸</span>
                      <span><strong>Concurrent processing</strong> with configurable worker pools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">▸</span>
                      <span><strong>JSON-based data storage</strong> for portability and simplicity</span>
                    </li>
                  </ul>
                </div>

                {/* Static Site Generator */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-6">
                  <Globe className="text-blue-600 dark:text-blue-400 mb-3" size={32} />
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Static Website Layer</h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">▸</span>
                      <span><strong>Eleventy (11ty)</strong> static site generator</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">▸</span>
                      <span><strong>Nunjucks templates</strong> for dynamic page generation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">▸</span>
                      <span><strong>GitHub Pages</strong> hosting (free, fast CDN)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">▸</span>
                      <span><strong>GitHub Actions</strong> for automated builds on every commit</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 border-l-4 border-indigo-500 p-6 rounded-r-xl mt-8">
                <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-3 flex items-center gap-2">
                  <GitBranch size={20} />
                  Fully Open Source
                </h4>
                <p className="text-gray-800 dark:text-gray-200 mb-3">
                  The entire codebase is on GitHub under the MIT license. Anyone can fork it, modify the prompts, use a different AI provider, or apply it to completely different document sets (corporate records, medical research, historical archives).
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Repository: <a href="https://github.com/epstein-docs/epstein-docs.github.io" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline font-mono">github.com/epstein-docs/epstein-docs.github.io</a>
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 8: Performance */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-12 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></span>
              8. Performance at Scale
            </h2>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Processing 8,000+ documents with AI is not instant. Here's what the performance profile looks like:
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-900 border-2 border-red-200 dark:border-red-800 rounded-xl p-6">
                  <Zap className="text-red-600 dark:text-red-400 mb-3" size={28} />
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">OCR Processing</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">~2-5 seconds per page with 5 concurrent workers. Total: several hours for full corpus.</p>
                </div>
                <div className="bg-white dark:bg-gray-900 border-2 border-orange-200 dark:border-orange-800 rounded-xl p-6">
                  <Filter className="text-orange-600 dark:text-orange-400 mb-3" size={28} />
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Deduplication</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Batches of 50 entities. ~10-30 seconds per batch. Runs once after OCR completes.</p>
                </div>
                <div className="bg-white dark:bg-gray-900 border-2 border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
                  <Brain className="text-yellow-600 dark:text-yellow-400 mb-3" size={28} />
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">AI Analysis</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">~10-20 seconds per multi-page document. Total: a few hours for ~400 documents.</p>
                </div>
              </div>

              <p>
                The system is <strong>resume-friendly</strong>. If processing is interrupted (network failure, rate limit, manual stop), the scripts automatically skip already-processed files on the next run. This is critical for large corpora where processing might take days.
              </p>

              <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border-l-4 border-red-500 p-6 rounded-r-xl">
                <h4 className="font-bold text-red-900 dark:text-red-100 mb-2">Cost Considerations</h4>
                <p className="text-gray-800 dark:text-gray-200">
                  Using cloud AI APIs (OpenAI GPT-4 Vision, Google Gemini) incurs per-token costs. For 8,000 images, expect costs in the range of $50-$200 depending on the model and provider. Using open-source local models (via LM Studio or Ollama) eliminates API costs but requires significant GPU resources.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 9: Impact */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-12 bg-gradient-to-b from-teal-500 to-teal-600 rounded-full"></span>
              9. Real-World Impact: Democratizing Access to Legal Information
            </h2>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                This project is a case study in how <strong>AI can democratize access to information that was previously locked away</strong>. Before this archive existed, these documents were technically "public" but practically inaccessible. A journalist could spend weeks reading through scans with no ability to search across documents. A researcher trying to map networks of individuals would have to manually cross-reference hundreds of pages.
              </p>

              <p>
                Now, anyone with a web browser can:
              </p>

              <ul className="space-y-2 ml-6">
                <li>• Search for any person, organization, or location across all documents</li>
                <li>• Read AI-generated summaries to identify relevant documents quickly</li>
                <li>• Browse by date, document type, or entity</li>
                <li>• Copy and quote exact text passages for analysis or reporting</li>
              </ul>

              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 border-2 border-teal-200 dark:border-teal-800 p-8 rounded-2xl">
                <h4 className="text-xl font-bold text-teal-900 dark:text-teal-100 mb-4 flex items-center gap-2">
                  <Globe size={24} />
                  Applications Beyond This Case Study
                </h4>
                <p className="text-gray-800 dark:text-gray-200 mb-4">
                  The techniques demonstrated here are applicable to any large-scale document digitization project:
                </p>
                <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="flex-shrink-0 text-teal-500 mt-1" size={18} />
                    <span><strong>Historical archives:</strong> Digitizing museum collections, old newspapers, handwritten letters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="flex-shrink-0 text-teal-500 mt-1" size={18} />
                    <span><strong>Corporate records:</strong> Making decades of internal documentation searchable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="flex-shrink-0 text-teal-500 mt-1" size={18} />
                    <span><strong>Medical research:</strong> Extracting data from patient records or clinical trial documents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="flex-shrink-0 text-teal-500 mt-1" size={18} />
                    <span><strong>Government transparency:</strong> FOIA releases, legislative records, meeting minutes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="flex-shrink-0 text-teal-500 mt-1" size={18} />
                    <span><strong>Investigative journalism:</strong> Analyzing leaked documents, financial records, correspondence</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Section 10: Future Work */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-12 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full"></span>
              10. Future Enhancement: Relationship Graphs
            </h2>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                The project maintainers have outlined an ambitious next phase: <strong>relationship graphs</strong>. Instead of just listing entities, the system could visualize <em>connections</em> between people, organizations, and locations based on co-occurrence in documents.
              </p>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-2 border-purple-200 dark:border-purple-800 p-8 rounded-2xl">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Network size={24} className="text-purple-600 dark:text-purple-400" />
                  Proposed Graph Types
                </h4>
                <ul className="space-y-3 text-base text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2"></span>
                    <div>
                      <strong>Co-occurrence network:</strong> People who appear together in the same documents. Edge weight = number of shared documents.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2"></span>
                    <div>
                      <strong>Timeline view:</strong> Documents plotted by date with entities connected to each point in time.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2"></span>
                    <div>
                      <strong>Organization membership:</strong> People connected to organizations they're associated with.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2"></span>
                    <div>
                      <strong>Location network:</strong> People and organizations connected by geographic references.
                    </div>
                  </li>
                </ul>
              </div>

              <p>
                Implementation would use client-side JavaScript graph libraries like <strong>D3.js</strong> or <strong>Cytoscape.js</strong> to render interactive visualizations. The data would be pre-generated during the build process and served as static JSON files, maintaining the project's philosophy of simple, fast, host-anywhere static sites.
              </p>

              <p>
                The deduplication step becomes even more critical here   without it, "Epstein" and "Jeffrey Epstein" would appear as separate, disconnected nodes in the graph.
              </p>
            </div>
          </motion.section>

          {/* Section 11: Conceptual Implications */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-12 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></span>
              11. Conceptual Theory: AI as a Tool for Transparency
            </h2>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                This project raises important questions about the role of AI in public interest technology. On one hand, AI-powered OCR and entity extraction dramatically reduce the barrier to accessing public records. On the other hand, there are legitimate concerns:
              </p>

              <div className="space-y-4 my-8">
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-xl">
                  <h4 className="font-bold text-yellow-900 dark:text-yellow-100 mb-2">⚠️ OCR Accuracy</h4>
                  <p className="text-gray-800 dark:text-gray-200 text-base">
                    AI vision models are not perfect. They can misread handwriting, misinterpret symbols, or fail to extract text from heavily redacted pages. Users must verify critical information against original images.
                  </p>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 rounded-r-xl">
                  <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-2">⚠️ Entity Extraction Bias</h4>
                  <p className="text-gray-800 dark:text-gray-200 text-base">
                    NER models are trained on datasets that may have cultural or linguistic biases. Less common names, non-Western names, or unconventional spellings may be missed or misclassified.
                  </p>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-xl">
                  <h4 className="font-bold text-red-900 dark:text-red-100 mb-2">⚠️ AI-Generated Summaries</h4>
                  <p className="text-gray-800 dark:text-gray-200 text-base">
                    Summaries are interpretations, not facts. The AI may emphasize certain aspects while omitting others. They are <em>aids to understanding</em>, not substitutes for reading source documents.
                  </p>
                </div>
              </div>

              <p>
                That said, the <strong>transparency of the process</strong> is a key strength. The code is open source. The prompts are visible. The raw OCR output (full JSON files) can be examined. And most importantly, the original document images are always linked   users can verify any claim against the source.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-800 p-8 rounded-2xl">
                <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">The Broader Principle</h4>
                <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                  <strong>Public documents should be publicly accessible</strong>   not just legally available, but <em>practically usable</em>. AI is a tool to bridge the gap between "technically public" and "actually transparent". This project demonstrates that modern AI makes it possible for a small team or even a single developer to process document corpora that would have required institutional resources a decade ago.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 12: Conclusion */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-12 bg-gradient-to-b from-gray-500 to-gray-600 rounded-full"></span>
              12. Conclusion: A Blueprint for Open Legal Archives
            </h2>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                This project is more than a technical demonstration. It's a <strong>proof of concept for a new model of legal transparency</strong>. In an era where courts are increasingly releasing documents as scanned PDFs, the ability to automatically process, index, and analyze these documents at scale is transformative.
              </p>

              <p>
                The tools are accessible: Python, OpenAI APIs, static site generators. The cost is manageable: hundreds of dollars, not tens of thousands. The results are profound: thousands of documents that would have remained practically inaccessible are now searchable by anyone with an internet connection.
              </p>

              <p>
                For developers, this is a template. The code is open source. You can fork it, adapt it, and apply it to any document corpus you care about. For journalists and researchers, it's a reminder that <strong>the tools to hold power accountable are getting better, faster, and more accessible</strong>.
              </p>

              <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 border-l-4 border-gray-500 p-8 rounded-r-2xl my-8">
                <p className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  From 8,000 Unreadable Images to a Living Archive
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  The transformation from a folder of scanned JPEGs to a fully searchable, entity-indexed, AI-analyzed archive represents what's possible when open-source tools, AI capabilities, and a commitment to transparency converge. This is the future of public records   and the code to build it is already available on GitHub.
                </p>
              </div>
            </div>
          </motion.section>

          {/* References */}
          <motion.section variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">References & Resources</h2>

            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8">
              <ol className="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed list-decimal list-inside">
                <li>
                  <strong>Epstein Files Archive</strong> – Live searchable archive at <a href="https://epstein-docs.github.io/" target="_blank" rel="noopener noreferrer" className="text-accent-600 dark:text-accent-400 hover:underline">epstein-docs.github.io</a>
                </li>
                <li>
                  <strong>GitHub Repository</strong> – Full source code, processing scripts, and documentation at <a href="https://github.com/epstein-docs/epstein-docs.github.io" target="_blank" rel="noopener noreferrer" className="text-accent-600 dark:text-accent-400 hover:underline">github.com/epstein-docs/epstein-docs.github.io</a>
                </li>
                <li>
                  <strong>OpenAI Vision API</strong> – Documentation for GPT-4 Vision model used for OCR: <a href="https://platform.openai.com/docs/guides/vision" target="_blank" rel="noopener noreferrer" className="text-accent-600 dark:text-accent-400 hover:underline">platform.openai.com/docs/guides/vision</a>
                </li>
                <li>
                  <strong>Eleventy (11ty) Static Site Generator</strong> – Official documentation: <a href="https://www.11ty.dev/" target="_blank" rel="noopener noreferrer" className="text-accent-600 dark:text-accent-400 hover:underline">11ty.dev</a>
                </li>
                <li>
                  <strong>D3.js Network Visualization</strong> – Force-directed graph examples: <a href="https://d3js.org/" target="_blank" rel="noopener noreferrer" className="text-accent-600 dark:text-accent-400 hover:underline">d3js.org</a>
                </li>
                <li>
                  <strong>Cytoscape.js</strong> – Graph theory library for network analysis: <a href="https://js.cytoscape.org/" target="_blank" rel="noopener noreferrer" className="text-accent-600 dark:text-accent-400 hover:underline">js.cytoscape.org</a>
                </li>
                <li>
                  <strong>GitHub Actions</strong> – CI/CD automation for static site deployment: <a href="https://docs.github.com/en/actions" target="_blank" rel="noopener noreferrer" className="text-accent-600 dark:text-accent-400 hover:underline">docs.github.com/en/actions</a>
                </li>
                <li>
                  <strong>Named Entity Recognition (NER)</strong> – Overview of NER techniques in NLP: <span className="italic">Jurafsky & Martin, Speech and Language Processing</span>, Chapter 8
                </li>
                <li>
                  <strong>Legal Technology and AI</strong> – Stanford CodeX report on AI applications in legal transparency (2024)
                </li>
                <li>
                  <strong>Open Source Intelligence (OSINT)</strong> – Techniques for investigative research using public records and documents
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
