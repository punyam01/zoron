


import { motion } from 'framer-motion'
import { Clock, BarChart3, Layers, ArrowUpRight } from 'lucide-react'

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
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <section id="problem" className="relative pt-12 pb-12 md:pt-16 md:pb-16 bg-[#050505] text-white overflow-hidden border-t border-white/10">
      {/* Structural Line Grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-16">
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
            className="text-3xl md:text-5xl font-light tracking-tight leading-tight text-white"
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
                className="p-8 border-r border-b border-white/10 bg-white/[0.01] hover:bg-white/[0.02] transition-all group flex flex-col justify-between min-h-[280px]"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-mono">
                      {problem.metric}
                    </span>
                    <div className="opacity-40 group-hover:opacity-100 group-hover:text-white transition-all">
                      <Icon size={16} strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-medium tracking-tight text-white mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed font-light">
                    {problem.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Full-Width Impact & Bridge Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 p-8 md:p-12 border border-white/10 bg-white/[0.01] relative"
        >
          {/* Accent Structural Line */}
          <div className="absolute top-0 left-0 w-[2px] h-full bg-white/30" />
          
          <div className="max-w-5xl space-y-8">
            <p className="text-lg md:text-2xl text-gray-300 font-light leading-relaxed">
              Zoron was built to solve exactly these problems — not with another dashboard or reporting tool, but with <span className="text-white font-normal underline underline-offset-4 decoration-white/20">intelligent AI agents</span> that understand finance, work autonomously, and deliver the outputs your team actually needs.
            </p>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-white/5">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                <div className="flex items-center gap-2.5">
                  <div className="w-1 h-1 bg-white/40 rounded-none" />
                  <p className="text-[10px] font-mono tracking-wider uppercase text-gray-400">Average analysis cycle: 6-12 weeks</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-1 h-1 bg-white/40 rounded-none" />
                  <p className="text-[10px] font-mono tracking-wider uppercase text-gray-400">Market execution window: 24-48 hours</p>
                </div>
              </div>

              <div className="flex justify-start sm:justify-end">
                <motion.a 
                href='/solution'
                  whileHover={{ gap: '8px' }}
                  className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.15em] text-white border-b border-white/20 pb-1 transition-all"
                >
                  The Solution <ArrowUpRight size={12} />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}