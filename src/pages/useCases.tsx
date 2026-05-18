import React from 'react'
import { motion } from 'framer-motion'
import { FileText, TrendingUp, Cpu, PieChart, Layers, HelpCircle } from 'lucide-react'

const deepUseCases = [
  {
    category: "Corporate Finance",
    title: "Closing the Monthly Books Faster",
    scenario: "A FTSE 250 corporate finance team was spending 12 days each month consolidating results, running variance analysis, and producing the CFO dashboard pack.",
    solution: "Zoron connected directly via API infrastructure to their ERP systems, automating dynamic data retrieval pulls and variance commentary. This successfully engineered the workflow loop down to human-in-the-loop validation.",
    outcomes: [
      "12-day close cycle reduced down to 3 days flat",
      "Board pack draft generated automatically in pre-configured corporate house style",
      "Zero manual data reconciliation errors recorded over a six-month monitoring window"
    ]
  },
  {
    category: "Transactions Advisory",
    title: "Due Diligence at Deal Speed",
    scenario: "A mid-market M&A advisory team was under immense competitive pressure to complete thorough financial due diligence on a £150m acquisition target inside a strict two-week window.",
    solution: "Zoron scanned and ingested the complete virtual data room directory, extracted five years of foundational asset telemetry, algorithmically benchmarked margins against sector peers, and structured a comprehensive first-draft Quality of Earnings report.",
    outcomes: [
      "72-hour delivery of clean, first-draft Quality of Earnings report framework",
      "200+ multi-format data room documents automatically parsed, indexed, and cross-referenced",
      "Identified hidden balance sheet risk flags previously overlooked in original management review packages"
    ]
  },
  {
    category: "Private Equity",
    title: "Portfolio Monitoring at Scale",
    scenario: "A Tier-1 private equity firm overseeing 18 discrete portfolio companies encountered scaling bottlenecks producing operational LP quarterly performance briefings.",
    solution: "Data arrived continuously in asymmetrical, non-uniform formats on disconnected timelines. Zoron standardised raw ingestion frameworks, mapped isolated metric endpoints, executed core automated KPI routines, and pushed formatted drafts directly downstream.",
    outcomes: [
      "LP review decks completed and verified 3 weeks earlier every single quarter",
      "Saved an average of 120 senior analyst workload hours per reporting cycle",
      "Enforced uniform, completely auditable data integrity pipelines across all 18 portfolio architectures"
    ]
  },
  {
    category: "Corporate Finance",
    title: "Scenario Planning for the Board",
    scenario: "Prior to a high-visibility executive board strategy summit, a corporate finance team was tasked with building and detailing five complex macroeconomic scenario projections.",
    solution: "The prompt demanded rigorous modeling parameters spanning revenue variables, cost structures, and underlying cash flow liquidity. Zoron constructed the mathematical framework models overnight, ran variations, and compiled a narrative workbook.",
    outcomes: [
      "5 multi-variable macroeconomic conditions mapped and modelled overnight",
      "Contextual natural language summary portfolios auto-generated for every scenario track",
      "Finance Director resources repositioned entirely to advisory analysis instead of execution modeling"
    ]
  }
]

export default function UseCasesPage() {
  const premiumEase = [0.16, 1, 0.3, 1]

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-28 pb-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Narrative-Led Page Header */}
        <div className="max-w-4xl border-b border-white/10 pb-12 mb-16">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#00d9ff] block mb-4">
            Operational Proof of Concept
          </span>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white leading-tight mb-6">
            Realistic Scenarios. <br />
            <span className="italic font-serif text-gray-400">Deterministic Results.</span>
          </h1>
          <p className="text-xs md:text-sm font-light text-gray-400 leading-relaxed max-w-2xl">
            Zoron replaces standard speculative marketing templates with structured operational records. Explore how our domain-trained enterprise models translate directly into quantifiable corporate milestones.
          </p>
        </div>

        {/* Stacked Ledger Rows of In-Depth Cases */}
        <div className="space-y-16">
          {deepUseCases.map((caseItem, index) => (
            <div 
              key={index}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-12 border-t border-white/10 first:border-t-0 first:pt-0"
            >
              {/* Left Column: Context Identity */}
              <div className="lg:col-span-4 space-y-2">
                <span className="text-[9px] font-mono tracking-widest text-[#00d9ff] uppercase bg-[#00d9ff]/5 px-2 py-0.5 border border-[#00d9ff]/10">
                  {caseItem.category}
                </span>
                <h2 className="text-xl font-medium tracking-tight text-white pt-2">
                  {caseItem.title}
                </h2>
                <div className="text-[11px] font-mono text-gray-600 pt-1">
                  CASE SPECIFICATION // NO.00{index + 1}
                </div>
              </div>

              {/* Middle Column: Detailed Structural Narrative */}
              <div className="lg:col-span-4 space-y-4">
                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-wider text-gray-500 mb-1.5">Baseline Context</h4>
                  <p className="text-xs font-light text-gray-400 leading-relaxed">{caseItem.scenario}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-wider text-gray-500 mb-1.5">Engineered Solution</h4>
                  <p className="text-xs font-light text-gray-300 leading-relaxed">{caseItem.solution}</p>
                </div>
              </div>

              {/* Right Column: Quantitative Outcomes Table */}
              <div className="lg:col-span-4 bg-white/[0.005] border border-white/5 p-6 rounded-none flex flex-col justify-between">
                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-gray-400 border-b border-white/5 pb-2 mb-4">
                    Quantified Outcomes
                  </h4>
                  <ul className="space-y-3">
                    {caseItem.outcomes.map((outcome, oIdx) => (
                      <li key={oIdx} className="flex items-start gap-3 text-xs font-light text-gray-400 leading-snug">
                        <span className="text-[#00d9ff] font-mono text-[10px] mt-0.5">✓</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between font-mono text-[9px] text-gray-600">
                  <span>AUDIT STATE // DEPLOYED</span>
                  <span>STATUS: SECURE</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </main>
  )
}