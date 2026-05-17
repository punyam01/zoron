
import { motion } from 'framer-motion'
import { Clock, BarChart3, Layers, ArrowUpRight, Shield } from 'lucide-react'

export default function ProblemStatement() {
  const problems = [
    {
      metric: "M&A SPEED-TO-CLOSE",
      title: "Deals take too long",
      description: "M&A due diligence and financial modelling consume weeks of analyst time on tasks that AI can automate in hours. Speed-to-close is a competitive advantage that most firms are leaving on the table.",
      icon: Clock,
    },
    {
      metric: "OPERATIONAL RISK",
      title: "Reporting is manual and error-prone",
      description: "Finance teams spend more time building spreadsheets and decks than analysing results. Manual processes introduce errors and delay decisions at the moment they matter most.",
      icon: BarChart3,
    },
    {
      metric: "DATA SILOS",
      title: "Portfolio intelligence is fragmented",
      description: "Private equity firms manage dozens of portfolio companies across disparate systems. Aggregating performance data, identifying risks, and generating reporting is expensive and inconsistent.",
      icon: Layers,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] }
    }
  }

  return (
    <section id="problem" className="relative py-24 md:py-32 bg-[#050505] text-white overflow-hidden border-t border-white/10">
      {/* Structural Line Grid to match Hero */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="h-[1px] w-8 bg-white/40" />
            <span className="text-xs tracking-[0.3em] uppercase text-gray-400">Market Context</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-light tracking-tight leading-tight text-white"
          >
            Finance teams are <span className="italic font-serif text-gray-400">drowning in data</span> <br />
            and starved of insight.
          </motion.h2>
        </div>

        {/* Problems Grid - Premium Interlocking Borders */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-white/10"
        >
          {problems.map((problem, idx) => {
            const Icon = problem.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-10 border-r border-b border-white/10 bg-white/[0.01] hover:bg-white/[0.02] transition-all group flex flex-col justify-between min-h-[320px]"
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-mono">
                      {problem.metric}
                    </span>
                    <div className="opacity-40 group-hover:opacity-100 group-hover:text-white transition-all">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-medium tracking-tight text-white mb-4">
                    {problem.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                    {problem.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Impact & Bridge Split Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 p-10 md:p-14 border border-white/10 bg-white/[0.02] relative"
        >
          {/* Accent Structural Line */}
          <div className="absolute top-0 left-0 w-[3px] h-full bg-white/30" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-8">
                Zoron was built to solve exactly these problems — not with another dashboard or reporting tool, but with <span className="text-white font-normal underline underline-offset-4 decoration-white/20">intelligent AI agents</span> that understand finance, work autonomously, and deliver the outputs your team actually needs.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-none" />
                  <p className="text-xs tracking-wider uppercase text-gray-400">Average analysis cycle: 6-12 weeks</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-none" />
                  <p className="text-xs tracking-wider uppercase text-gray-400">Market execution window: 24-48 hours</p>
                </div>
              </div>
            </div>

            {/* Right Side: High-End Financial Interface Mockup (No cheap charts) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-sm border border-white/10 bg-[#0A0A0A] p-6 font-mono text-[11px] text-gray-400 relative overflow-hidden">
                <div className="flex justify-between items-center pb-4 border-b border-white/5 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
                    <span className="text-white font-medium tracking-wider">ZORON_AGENT_LOG</span>
                  </div>
                  <Shield size={12} className="text-white/30" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-white/60">[01] EXTRACTING DATA</span>
                    <span className="text-emerald-400 font-bold">COMPLETED</span>
                  </div>
                  <div className="text-white/30 pl-3">↳ Parsed 1,400+ ledger lines across 4 legacy ERPs</div>
                  
                  <div className="flex justify-between">
                    <span className="text-white/60">[02] RISK SYNTHESIS</span>
                    <span className="text-emerald-400 font-bold">COMPLETED</span>
                  </div>
                  <div className="text-white/30 pl-3">↳ Identified 3 material discrepancies in Q3 EBITDA</div>
                  
                  <div className="flex justify-between items-center pt-2 border-t border-white/5">
                    <span className="text-white">EXECUTION TIME:</span>
                    <span className="bg-white/10 text-white px-2 py-0.5 font-bold">14.2 MIN</span>
                  </div>
                </div>

                {/* Micro CTA integrated right into the layout */}
                <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
                  <motion.button 
                    whileHover={{ x: 3 }}
                    className="flex items-center gap-2 text-[10px] tracking-widest uppercase font-bold text-white transition-all"
                  >
                    The Solution <ArrowUpRight size={12} />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}