

// import { motion } from 'framer-motion'
// import { ArrowUpRight, Building2, Briefcase, BarChart4 } from 'lucide-react'

// const domains = [
//   {
//     id: "corporate-finance",
//     icon: Building2,
//     title: "Corporate Finance",
//     subtitle: "Intelligent automation for financial planning, analysis, and reporting.",
//     description: "Zoron's AI agents handle variance analysis, forecasting, board pack preparation, and management reporting — freeing your finance team to focus on strategic decision support.",
//     href: "/solutions/corporate-finance",
//     capabilities: [
//       "Financial planning & analysis (FP&A) automation",
//       "Management reporting and board pack generation",
//       "Cash flow modelling and scenario analysis",
//       "Regulatory and compliance reporting",
//       "AI-assisted CFO insights and commentary"
//     ]
//   },
//   {
//     id: "transactions-advisory",
//     icon: Briefcase,
//     title: "Transactions Advisory",
//     subtitle: "Accelerate every stage of the M&A lifecycle with AI.",
//     description: "From initial screening and financial due diligence to valuation modelling and SPA review, Zoron's agentic AI works alongside your deal team to reduce cycle times, improve accuracy, and surface risks that human reviewers miss.",
//     href: "/solutions/transactions-advisory",
//     capabilities: [
//       "Deal screening and target identification",
//       "AI-powered financial due diligence",
//       "Automated valuation and LBO modelling",
//       "Data room analysis and document extraction",
//       "Risk and red flag identification",
//       "SPA and contract review assistance"
//     ]
//   },
//   {
//     id: "private-equity",
//     icon: BarChart4,
//     title: "Private Equity",
//     subtitle: "Give your investment team an AI edge at every stage — from origination to exit.",
//     description: "Zoron aggregates portfolio data, automates LP reporting, monitors covenant compliance, and identifies value-creation opportunities across your entire book.",
//     href: "/solutions/private-equity",
//     capabilities: [
//       "Deal origination and market scanning",
//       "Portfolio company performance monitoring",
//       "Automated LP and investor reporting",
//       "Covenant and KPI tracking",
//       "Exit readiness and value bridge analysis",
//       "ESG data aggregation and reporting"
//     ]
//   }
// ]

// export default function Solutions() {
//   return (
//     <section id="solutions" className="relative py-24 md:py-32 bg-[#050505] text-white border-t border-white/10">
//       {/* Background Matrix lines */}
//       <div className="absolute inset-0 opacity-[0.01] pointer-events-none" 
//            style={{ backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`, backgroundSize: '120px 120px' }} />

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
//           {/* Left Column: Header (Sticky on desktop) */}
//           <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="flex items-center gap-2 mb-6"
//             >
//               <div className="h-[1px] w-8 bg-white/40" />
//               <span className="text-xs tracking-[0.3em] uppercase text-gray-400">Capabilities</span>
//             </motion.div>

//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-white mb-6"
//             >
//               Three Areas of Finance. <br />
//               One AI Platform. <br />
//               <span className="italic font-serif text-gray-400">Transformative Results.</span>
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.2 }}
//               className="text-gray-400 font-light leading-relaxed max-w-md"
//             >
//               Zoron delivers AI-powered tools, solutions, and services across three interconnected domains where the complexity is highest and the potential for impact is greatest.
//             </motion.p>
//           </div>

//           {/* Right Column: Deep-Dive Domain Blocks */}
//           <div className="lg:col-span-7 space-y-16">
//             {domains.map((domain, index) => {
//               const Icon = domain.icon
//               return (
//                 <motion.div
//                   key={domain.id}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, margin: "-100px" }}
//                   transition={{ duration: 0.6 }}
//                   className="pt-12 border-t border-white/10 first:border-t-0 first:pt-0 group"
//                 >
//                   {/* Title Area */}
//                   <div className="flex items-start gap-4 mb-6">
//                     <div className="p-2 border border-white/10 bg-white/[0.02] text-white/60 group-hover:text-white transition-colors">
//                       <Icon size={18} strokeWidth={1.5} />
//                     </div>
//                     <div>
//                       <h3 className="text-2xl font-normal tracking-tight text-white">
//                         {domain.title}
//                       </h3>
//                       <p className="text-sm text-gray-400 font-serif italic mt-1">
//                         {domain.subtitle}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Narrative Body */}
//                   <p className="text-gray-400 text-sm leading-relaxed font-light mb-8 max-w-2xl">
//                     {domain.description}
//                   </p>

//                   {/* Capability List - Nested Matrix */}
//                   <div className="border-t border-l border-white/5 bg-white/[0.005] mb-8 font-mono text-xs">
//                     {domain.capabilities.map((capability, capIdx) => (
//                       <div 
//                         key={capIdx} 
//                         className="px-6 py-4 border-r border-b border-white/5 flex items-center justify-between hover:bg-white/[0.01] transition-colors group/item"
//                       >
//                         <span className="text-gray-400 group-hover/item:text-white transition-colors">
//                           {capability}
//                         </span>
//                         <span className="text-white/20 font-light font-sans text-[10px]">
//                           {(capIdx + 1).toString().padStart(2, '0')}
//                         </span>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Action Link */}
//                   {domain.href && (
//                     <div className="flex justify-start">
//                       <motion.a 
//                         href={domain.href}
//                         whileHover={{ gap: '10px' }}
//                         className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-white/60 hover:text-white border-b border-white/20 hover:border-white pb-1 transition-all"
//                       >
//                         Learn More <ArrowUpRight size={14} />
//                       </motion.a>
//                     </div>
//                   )}
//                 </motion.div>
//               )
//             })}
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }

import { motion } from 'framer-motion'
import { ArrowUpRight, Building2, Briefcase, BarChart4 } from 'lucide-react'
import { Link } from 'react-router-dom';
const MotionLink = motion.create(Link);

const domains = [
  {
    id: "corporate-finance",
    icon: Building2,
    title: "Corporate Finance",
    subtitle: "Intelligent automation for financial planning, analysis, and reporting.",
    description: "Zoron's AI agents handle variance analysis, forecasting, board pack preparation, and management reporting — freeing your finance team to focus on strategic decision support.",
    href: "/solutions"
  },
  {
    id: "transactions-advisory",
    icon: Briefcase,
    title: "Transactions Advisory",
    subtitle: "Accelerate every stage of the M&A lifecycle with AI.",
    description: "From initial screening and financial due diligence to valuation modelling and SPA review, Zoron's agentic AI works alongside your deal team to reduce cycle times and surface risks.",
    href: "/solutions"
  },
  {
    id: "private-equity",
    icon: BarChart4,
    title: "Private Equity",
    subtitle: "Give your investment team an AI edge from origination to exit.",
    description: "Zoron aggregates portfolio data, automates LP reporting, monitors covenant compliance, and identifies value-creation opportunities across your entire book layout dynamically.",
    href: "/solutions"
  }
]

export default function Solutions() {
  return (
    <section id="solutions" className="relative pt-12 pb-12 md:pt-16 md:pb-16 bg-[#050505] text-white border-t border-white/10">
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
              className="text-gray-400 font-light text-sm leading-relaxed max-w-md"
            >
              Zoron delivers AI-powered tools, solutions, and services across three interconnected domains where the complexity is highest and the potential for impact is greatest.
            </motion.p>
          </div>

          {/* Right Column: Clean Domain Teaser Blocks */}
          <div className="lg:col-span-7 space-y-12">
            {domains.map((domain, index) => {
              const Icon = domain.icon
              return (
                <motion.div
                  key={domain.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="pt-10 border-t border-white/10 first:border-t-0 first:pt-0 group"
                >
                  {/* Title Area */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 border border-white/10 bg-white/[0.02] text-white/40 group-hover:text-white group-hover:border-white/20 transition-all">
                      <Icon size={16} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-normal tracking-tight text-white">
                        {domain.title}
                      </h3>
                      <p className="text-xs text-gray-500 font-serif italic mt-0.5">
                        {domain.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Concise Narrative Body */}
                  <p className="text-gray-400 text-xs leading-relaxed font-light mb-6 max-w-2xl">
                    {domain.description}
                  </p>

                  {/* Dynamic Action Link */}
                  <div className="flex justify-start">
                    <MotionLink
                      to={domain.href}
                     
                      whileHover={{ gap: '10px' }}
                      className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] font-medium text-white/50 hover:text-white border-b border-white/10 hover:border-white pb-1 transition-all group/link"
                    >
                      Explore Full Capabilities <ArrowUpRight size={12} className="text-white/40 group-hover/link:text-white transition-colors" />
                    </MotionLink>
                  </div>
                </motion.div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}