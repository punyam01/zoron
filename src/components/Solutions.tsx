// import { motion } from 'framer-motion'
// import { Zap, Brain, Shield } from 'lucide-react'

// export default function Solutions() {
//   const solutions = [
//     {
//       icon: Zap,
//       title: 'Unified Intelligence Layer',
//       description: 'Connect all enterprise data sources into a single, governed intelligence platform.',
//       features: ['Real-time data sync', 'Automated processing', 'Quality assurance'],
//     },
//     {
//       icon: Brain,
//       title: 'Precision Analysis',
//       description: 'Advanced algorithms synthesize complex information into actionable intelligence.',
//       features: ['Pattern recognition', 'Anomaly detection', 'Predictive modeling'],
//     },
//     {
//       icon: Shield,
//       title: 'Enterprise Grade',
//       description: 'Built for institutional requirements: governance, compliance, and security.',
//       features: ['Role-based access', 'Audit trails', 'SOC 2 Type II'],
//     },
//   ]

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6 },
//     },
//   }

//   return (
//     <section id="solutions" className="relative py-20 md:py-32 overflow-hidden">
//       {/* Background elements */}
//       <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

//       <div className="section-container relative z-10">
//         {/* Section Header */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <motion.div variants={itemVariants} className="mb-4">
//             <p className="text-primary font-semibold text-sm uppercase tracking-wider">
//               Our Approach
//             </p>
//           </motion.div>
//           <motion.h2
//             variants={itemVariants}
//             className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
//           >
//             Precision-First Intelligence
//           </motion.h2>
//           <motion.p
//             variants={itemVariants}
//             className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance"
//           >
//             ZORON solves enterprise intelligence challenges with proven, institutional-grade solutions.
//           </motion.p>
//         </motion.div>

//         {/* Solutions Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
//         >
//           {solutions.map((solution, idx) => {
//             const Icon = solution.icon
//             return (
//               <motion.div
//                 key={idx}
//                 variants={itemVariants}
//                 whileHover={{ y: -10 }}
//                 className="glass p-8 rounded-xl border border-border/50 group hover:border-primary/50 transition-all"
//               >
//                 <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-primary/50 transition-all">
//                   <Icon className="text-primary-foreground" size={24} />
//                 </div>
//                 <h3 className="text-xl font-semibold text-foreground mb-3">{solution.title}</h3>
//                 <p className="text-muted-foreground leading-relaxed mb-6">{solution.description}</p>

//                 {/* Features List */}
//                 <div className="space-y-2 pt-6 border-t border-border/30">
//                   {solution.features.map((feature, fIdx) => (
//                     <div key={fIdx} className="flex items-center space-x-2 text-sm text-muted-foreground">
//                       <div className="w-1.5 h-1.5 bg-primary rounded-full" />
//                       <span>{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             )
//           })}
//         </motion.div>

//         {/* How It Works */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mt-20"
//         >
//           <div className="text-center mb-16">
//             <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
//               The ZORON Difference
//             </p>
//             <h3 className="text-3xl md:text-4xl font-bold text-foreground">
//               Built for scale. Designed for precision.
//             </h3>
//           </div>

//           {/* Process Steps */}
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             {[
//               { step: 1, title: 'Integrate', desc: 'Connect all data sources' },
//               { step: 2, title: 'Process', desc: 'Automated quality assurance' },
//               { step: 3, title: 'Analyze', desc: 'Advanced intelligence synthesis' },
//               { step: 4, title: 'Act', desc: 'Informed decision-making' },
//             ].map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: idx * 0.1 }}
//                 className="relative"
//               >
//                 <div className="glass p-6 rounded-lg border border-border/50 text-center">
//                   <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
//                     {item.step}
//                   </div>
//                   <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
//                   <p className="text-sm text-muted-foreground">{item.desc}</p>
//                 </div>

//                 {/* Arrow to next step */}
//                 {idx < 3 && (
//                   <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 text-primary">
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
import { ArrowUpRight, Building2, Briefcase, BarChart4 } from 'lucide-react'

const domains = [
  {
    id: "corporate-finance",
    icon: Building2,
    title: "Corporate Finance",
    subtitle: "Intelligent automation for financial planning, analysis, and reporting.",
    description: "Zoron's AI agents handle variance analysis, forecasting, board pack preparation, and management reporting — freeing your finance team to focus on strategic decision support.",
    href: "/solutions/corporate-finance",
    capabilities: [
      "Financial planning & analysis (FP&A) automation",
      "Management reporting and board pack generation",
      "Cash flow modelling and scenario analysis",
      "Regulatory and compliance reporting",
      "AI-assisted CFO insights and commentary"
    ]
  },
  {
    id: "transactions-advisory",
    icon: Briefcase,
    title: "Transactions Advisory",
    subtitle: "Accelerate every stage of the M&A lifecycle with AI.",
    description: "From initial screening and financial due diligence to valuation modelling and SPA review, Zoron's agentic AI works alongside your deal team to reduce cycle times, improve accuracy, and surface risks that human reviewers miss.",
    href: "/solutions/transactions-advisory",
    capabilities: [
      "Deal screening and target identification",
      "AI-powered financial due diligence",
      "Automated valuation and LBO modelling",
      "Data room analysis and document extraction",
      "Risk and red flag identification",
      "SPA and contract review assistance"
    ]
  },
  {
    id: "private-equity",
    icon: BarChart4,
    title: "Private Equity",
    subtitle: "Give your investment team an AI edge at every stage — from origination to exit.",
    description: "Zoron aggregates portfolio data, automates LP reporting, monitors covenant compliance, and identifies value-creation opportunities across your entire book.",
    href: "/solutions/private-equity",
    capabilities: [
      "Deal origination and market scanning",
      "Portfolio company performance monitoring",
      "Automated LP and investor reporting",
      "Covenant and KPI tracking",
      "Exit readiness and value bridge analysis",
      "ESG data aggregation and reporting"
    ]
  }
]

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-24 md:py-32 bg-[#050505] text-white border-t border-white/10">
      {/* Background Matrix lines */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`, backgroundSize: '120px 120px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Header (Sticky on desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="h-[1px] w-8 bg-white/40" />
              <span className="text-xs tracking-[0.3em] uppercase text-gray-400">Capabilities</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-white mb-6"
            >
              Three Areas of Finance. <br />
              One AI Platform. <br />
              <span className="italic font-serif text-gray-400">Transformative Results.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 font-light leading-relaxed max-w-md"
            >
              Zoron delivers AI-powered tools, solutions, and services across three interconnected domains where the complexity is highest and the potential for impact is greatest.
            </motion.p>
          </div>

          {/* Right Column: Deep-Dive Domain Blocks */}
          <div className="lg:col-span-7 space-y-16">
            {domains.map((domain, index) => {
              const Icon = domain.icon
              return (
                <motion.div
                  key={domain.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="pt-12 border-t border-white/10 first:border-t-0 first:pt-0 group"
                >
                  {/* Title Area */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-2 border border-white/10 bg-white/[0.02] text-white/60 group-hover:text-white transition-colors">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-normal tracking-tight text-white">
                        {domain.title}
                      </h3>
                      <p className="text-sm text-gray-400 font-serif italic mt-1">
                        {domain.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Narrative Body */}
                  <p className="text-gray-400 text-sm leading-relaxed font-light mb-8 max-w-2xl">
                    {domain.description}
                  </p>

                  {/* Capability List - Nested Matrix */}
                  <div className="border-t border-l border-white/5 bg-white/[0.005] mb-8 font-mono text-xs">
                    {domain.capabilities.map((capability, capIdx) => (
                      <div 
                        key={capIdx} 
                        className="px-6 py-4 border-r border-b border-white/5 flex items-center justify-between hover:bg-white/[0.01] transition-colors group/item"
                      >
                        <span className="text-gray-400 group-hover/item:text-white transition-colors">
                          {capability}
                        </span>
                        <span className="text-white/20 font-light font-sans text-[10px]">
                          {(capIdx + 1).toString().padStart(2, '0')}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Action Link */}
                  {domain.href && (
                    <div className="flex justify-start">
                      <motion.a 
                        href={domain.href}
                        whileHover={{ gap: '10px' }}
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-white/60 hover:text-white border-b border-white/20 hover:border-white pb-1 transition-all"
                      >
                        Learn More <ArrowUpRight size={14} />
                      </motion.a>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}