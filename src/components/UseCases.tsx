// import { motion } from 'framer-motion'
// import { TrendingUp, DollarSign, Briefcase, Target } from 'lucide-react'

// export default function UseCases() {
//   const useCases = [
//     {
//       icon: TrendingUp,
//       title: 'Strategic Intelligence',
//       description: 'Board-level insights for long-term strategic planning and market positioning.',
//       points: ['Competitive landscape analysis', 'Market trend synthesis', 'Strategic risk assessment'],
//     },
//     {
//       icon: DollarSign,
//       title: 'M&A Intelligence',
//       description: 'Comprehensive due diligence and deal intelligence for M&A and corporate development.',
//       points: ['Target identification', 'Financial analysis', 'Integration planning'],
//     },
//     {
//       icon: Briefcase,
//       title: 'Operational Excellence',
//       description: 'Day-to-day intelligence to optimize business operations and efficiency.',
//       points: ['Supply chain optimization', 'Risk monitoring', 'Performance tracking'],
//     },
//     {
//       icon: Target,
//       title: 'Market Development',
//       description: 'Tactical intelligence for go-to-market and customer engagement strategies.',
//       points: ['Customer insights', 'Market segmentation', 'Campaign optimization'],
//     },
//   ]

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.2,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5 },
//     },
//   }

//   return (
//     <section id="use-cases" className="relative py-20 md:py-32 overflow-hidden">
//       {/* Background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-t from-accent/5 via-transparent to-transparent pointer-events-none" />

//       <div className="section-container relative z-10">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-20"
//         >
//           <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
//             Real-World Applications
//           </p>
//           <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
//             Intelligence Across the Enterprise
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
//             From boardroom strategy to operational efficiency, ZORON powers intelligence across every function.
//           </p>
//         </motion.div>

//         {/* Use Cases Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-2 gap-8"
//         >
//           {useCases.map((useCase, idx) => {
//             const Icon = useCase.icon
//             return (
//               <motion.div
//                 key={idx}
//                 variants={itemVariants}
//                 whileHover={{ y: -8 }}
//                 className="glass p-8 rounded-xl border border-border/50 group hover:border-primary/50 transition-all"
//               >
//                 <div className="flex items-start space-x-4 mb-4">
//                   <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
//                     <Icon className="text-primary" size={24} />
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-xl font-semibold text-foreground">{useCase.title}</h3>
//                   </div>
//                 </div>

//                 <p className="text-muted-foreground leading-relaxed mb-6">{useCase.description}</p>

//                 {/* Points */}
//                 <div className="space-y-2 pt-6 border-t border-border/30">
//                   {useCase.points.map((point, pIdx) => (
//                     <motion.div
//                       key={pIdx}
//                       initial={{ opacity: 0, x: -10 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.3, delay: pIdx * 0.05 }}
//                       className="flex items-center space-x-2 text-sm text-muted-foreground"
//                     >
//                       <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
//                       <span>{point}</span>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//             )
//           })}
//         </motion.div>

//         {/* Implementation Timeline */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mt-20"
//         >
//           <div className="text-center mb-16">
//             <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
//               Implementation
//             </p>
//             <h3 className="text-3xl md:text-4xl font-bold text-foreground">
//               From pilot to scale in weeks, not months
//             </h3>
//           </div>

//           {/* Timeline */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               { title: 'Week 1-2', desc: 'Integration setup and data onboarding' },
//               { title: 'Week 3-4', desc: 'Configuration and initial analysis' },
//               { title: 'Week 5+', desc: 'Production deployment and optimization' },
//             ].map((phase, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: idx * 0.1 }}
//                 className="glass p-6 rounded-lg border border-border/50 text-center relative"
//               >
//                 <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-lg">
//                   {idx + 1}
//                 </div>
//                 <h4 className="font-semibold text-foreground mb-2">{phase.title}</h4>
//                 <p className="text-sm text-muted-foreground">{phase.desc}</p>

//                 {/* Connection arrow */}
//                 {idx < 2 && (
//                   <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-primary">
//                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                       <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" />
//                     </svg>
//                   </div>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
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