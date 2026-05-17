

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function PlatformTeaser() {
  return (
    <section id="platform-teaser" className="relative pt-12 pb-12 md:pt-16 md:pb-16 bg-[#050505] text-white border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Structural Framework Border Box */}
        <div className="border border-white/10 p-8 md:p-12 bg-white/[0.005] relative">
          <div className="absolute top-0 left-0 w-[2px] h-full bg-white/20" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Hand: Anchor Header */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-gray-500">Core Architecture</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-tight text-white">
                Built for Finance. <br />
                <span className="italic font-serif text-gray-400">Powered by Agentic AI.</span>
              </h2>
            </div>

            {/* Right Hand: Core Narrative Ledger */}
            <div className="lg:col-span-7 space-y-6 lg:pt-6">
              <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed max-w-2xl">
                The Zoron platform is not a general-purpose AI tool bolted onto a financial workflow. It was engineered from the ground up for the specific demands of corporate finance, M&A, and private equity — combining large language models, agentic orchestration, and deep financial domain knowledge into a single, secure, enterprise-grade platform.
              </p>
              
              <div className="pt-2">
                <motion.a 
                  href="/platform"
                  whileHover={{ gap: '10px' }}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-white border-b border-white/20 pb-1.5 transition-all group"
                >
                  Explore Platform Specs 
                  <ArrowUpRight size={12} className="text-white/40 group-hover:text-white transition-colors" />
                </motion.a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}