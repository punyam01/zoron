import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, CheckCircle2, ArrowUpRight, Building2, Briefcase, BarChart4 } from 'lucide-react'

// Dynamic Content Ledger matching the precise data requirements
const solutionsRegistry = {
  "corporate-finance": {
    id: "corporate-finance",
    title: "Corporate Finance",
    icon: Building2,
    subtitle: "Intelligent automation for financial planning, analysis, and reporting.",
    description: "Zoron's AI agents handle variance analysis, forecasting, board pack preparation, and management reporting — freeing your finance team to focus on strategic decision support.",
    capabilities: [
      "Financial planning & analysis (FP&A) automation",
      "Management reporting and board pack generation",
      "Cash flow modelling and scenario analysis",
      "Regulatory and compliance reporting",
      "AI-assisted CFO insights and commentary"
    ]
  },
  "transactions-advisory": {
    id: "transactions-advisory",
    title: "Transactions Advisory",
    icon: Briefcase,
    subtitle: "Accelerate every stage of the M&A lifecycle with AI.",
    description: "From initial screening and financial due diligence to valuation modelling and SPA review, Zoron's agentic AI works alongside your deal team to reduce cycle times, improve accuracy, and surface risks that human reviewers miss.",
    capabilities: [
      "Deal screening and target identification",
      "AI-powered financial due diligence",
      "Automated valuation and LBO modelling",
      "Data room analysis and document extraction",
      "Risk and red flag identification",
      "SPA and contract review assistance"
    ]
  },
  "private-equity": {
    id: "private-equity",
    title: "Private Equity",
    icon: BarChart4,
    subtitle: "Give your investment team an AI edge at every stage — from origination to exit.",
    description: "Zoron aggregates portfolio data, automates LP reporting, monitors covenant compliance, and identifies value-creation opportunities across your entire book layout dynamically.",
    capabilities: [
      "Deal origination and market scanning",
      "Portfolio company performance monitoring",
      "Automated LP and investor reporting",
      "Covenant and KPI tracking",
      "Exit readiness and value bridge analysis",
      "ESG data aggregation and reporting"
    ]
  }
}

type TabKeys = "corporate-finance" | "transactions-advisory" | "private-equity"

export default function SolutionPage() {
  const [activeTab, setActiveTab] = useState<TabKeys>("corporate-finance")
  const currentData = solutionsRegistry[activeTab]

  // Our verified luxury easing curve configuration
  const premiumEase = [0.16, 1, 0.3, 1]

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-28 pb-20 relative overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`, backgroundSize: '100px 100px' }} />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        
        

        {/* Premium Dark Navigation Tabs Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 mb-16">
          {(Object.keys(solutionsRegistry) as TabKeys[]).map((key) => {
            const tab = solutionsRegistry[key]
            const TabIcon = tab.icon
            const isSelected = activeTab === key

            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`relative p-5 text-left transition-colors flex items-center justify-between group outline-none ${
                  isSelected ? 'bg-[#0d0d0d]' : 'bg-[#050505] hover:bg-white/[0.01]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`transition-colors ${isSelected ? 'text-white' : 'text-white/30 group-hover:text-white/60'}`}>
                    <TabIcon size={14} strokeWidth={1.5} />
                  </div>
                  <span className={`text-xs uppercase tracking-wider transition-colors ${isSelected ? 'text-white font-medium' : 'text-gray-400'}`}>
                    {tab.title}
                  </span>
                </div>
                
                {/* Micro layout indicator line inside selected tab button */}
                {isSelected && (
                  <motion.div 
                    layoutId="activeTabBorder" 
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-white"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* Content & Capabilities Display Segment */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: premiumEase }}
          >
            {/* Header Content Detail Panel */}
            <div className="max-w-4xl border-b border-white/10 pb-12 mb-12">
              <span className="text-[10px] font-mono tracking-[0.3em] text-gray-500 uppercase block mb-4">
                // SYSTEM_MODULES / {activeTab.replace('-', '_').toUpperCase()}
              </span>
              <h1 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-6">
                {currentData.title}
              </h1>
              <p className="text-md md:text-lg font-light text-gray-300 font-serif italic border-l border-white/20 pl-6 leading-relaxed mb-6">
                "{currentData.subtitle}"
              </p>
              <p className="text-xs md:text-sm font-light text-gray-400 leading-relaxed max-w-3xl">
                {currentData.description}
              </p>
            </div>

            {/* Technical Capability Grid Ledger */}
            <div className="space-y-6">
              <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-white/50">
                Functional Execution Parameters
              </h2>
              
              <div className="border-t border-l border-white/5 bg-[#050505]">
                {currentData.capabilities.map((capability, idx) => (
                  <div 
                    key={idx} 
                    className="px-6 py-4 border-r border-b border-white/5 flex items-center justify-between hover:bg-white/[0.01] transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <CheckCircle2 size={13} strokeWidth={1.5} className="text-white/30 group-hover:text-white/60 transition-colors shrink-0" />
                      <span className="text-xs font-light text-gray-300 group-hover:text-white transition-colors tracking-wide">
                        {capability}
                      </span>
                    </div>
                    <span className="text-white/10 font-mono text-[9px] tracking-widest hidden sm:inline">
                      [ CAP_0{idx + 1} ]
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Action Call to Action Segment */}
        <div className="mt-16 border-t border-white/10 pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-xs font-medium text-white tracking-wide">Request technical implementation schema?</h3>
            <p className="text-[11px] text-gray-500 font-light mt-0.5">Explore security parameters, role mapping arrangements, and local deployment blueprints.</p>
          </div>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 text-xs font-mono uppercase tracking-wider hover:bg-gray-200 transition-colors shrink-0"
          >
            Initiate Call <ArrowUpRight size={12} />
          </a>
        </div>

      </div>
    </main>
  )
}