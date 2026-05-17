
import { motion } from 'framer-motion'
import { CheckCircle2, TrendingUp, Clock, ShieldAlert, BarChart4 } from 'lucide-react'

export default function UseCases() {
  const cases = [
    {
      category: "Corporate Finance",
      title: "Closing the Monthly Books Faster",
      icon: Clock,
      narrative: "A FTSE 250 corporate finance team was spending 12 days each month consolidating results, running variance analysis, and producing the CFO dashboard pack. Zoron connected to their ERP, automated the data pull and variance commentary, and reduced the process to three days — with AI-generated CFO commentary reviewed and approved in one session.",
      outcomes: [
        "12-day close cycle reduced to 3 days",
        "Board pack draft generated automatically in house style",
        "Zero manual data reconciliation errors in six months"
      ]
    },
    {
      category: "Transactions Advisory",
      title: "Due Diligence at Deal Speed",
      icon: TrendingUp,
      narrative: "A mid-market M&A advisory team was under pressure to complete financial due diligence on a £150m acquisition target in two weeks. Zoron read the entire data room, extracted five years of financial data, benchmarked margins against sector peers, and produced a first-draft quality of earnings report — in 72 hours.",
      outcomes: [
        "72-hour first-draft QoE report",
        "200+ data room documents processed automatically",
        "Risk flags identified that were missed in initial management review"
      ]
    },
    {
      category: "Private Equity",
      title: "Portfolio Monitoring at Scale",
      icon: BarChart4,
      narrative: "A PE firm with 18 portfolio companies was struggling to produce timely LP quarterly reports. Data from each portco arrived in different formats, on different timelines, requiring a team of analysts to manually compile. Zoron standardised the data ingestion, automated KPI calculations, and generated LP report drafts in the firm's house style within 48 hours of quarter-end.",
      outcomes: [
        "LP reports produced 3 weeks earlier each quarter",
        "Analyst time saved: 120 hours per quarter",
        "Consistent, auditable data across all 18 portfolio companies"
      ]
    },
    {
      category: "Corporate Finance",
      title: "Scenario Planning for the Board",
      icon: ShieldAlert,
      narrative: "Ahead of a board strategy day, a corporate finance team needed five macroeconomic scenarios modelled across revenue, cost, and cash flow — each with management commentary. Zoron built the models, generated the commentary, and produced a scenario booklet ready for board review in one working day.",
      outcomes: [
        "5 scenarios modelled overnight",
        "Natural language summary for each scenario auto-generated",
        "Finance Director focused solely on reviewing, not building"
      ]
    }
  ]

  return (
    <section id="use-cases" className="relative pt-12 pb-12 md:pt-16 md:pb-16 bg-[#050505] text-white border-t border-white/10 overflow-hidden">
      {/* Structural Line Grid Background */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-[1px] w-8 bg-white/40" />
            <span className="text-xs tracking-[0.3em] uppercase text-gray-400">Proof of Value</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-4">
            Operational Realities. <br />
            <span className="italic font-serif text-gray-400">Anonymised Scenarios.</span>
          </h2>
          <p className="text-xs font-light text-gray-400 max-w-xl leading-relaxed">
            See exactly how the Zoron intelligence stack integrates natively to eliminate institutional friction across enterprise environments.
          </p>
        </div>

        {/* Stacked Ledger Rows */}
        <div className="border-t border-white/10 divide-y divide-white/10">
          {cases.map((useCase, idx) => {
            const Icon = useCase.icon
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group hover:bg-white/[0.005] transition-colors px-2"
              >
                {/* Meta & Left Narrative Column */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase">
                      {useCase.category}
                    </span>
                    <span className="text-white/20 text-xs">•</span>
                    <div className="flex items-center gap-1 text-[10px] font-mono text-white/40">
                      <Icon size={12} strokeWidth={1.5} />
                      <span>CASE_0{idx + 1}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-medium tracking-tight text-white">
                    {useCase.title}
                  </h3>
                  
                  <p className="text-xs font-light text-gray-400 leading-relaxed max-w-2xl">
                    {useCase.narrative}
                  </p>
                </div>

                {/* Right Outcomes Column */}
                <div className="lg:col-span-5 lg:pl-6 pt-2 lg:pt-6">
                  <div className="border-l border-white/10 pl-6 space-y-3.5">
                    <span className="text-[9px] font-mono tracking-widest text-white/30 block mb-1 uppercase">
                      [ Verified Metrics ]
                    </span>
                    {useCase.outcomes.map((outcome, oIdx) => (
                      <div key={oIdx} className="flex items-start gap-3">
                        <CheckCircle2 size={12} className="text-emerald-500/60 mt-0.5 shrink-0" />
                        <span className="text-xs text-gray-300 font-light leading-tight">
                          {outcome}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}