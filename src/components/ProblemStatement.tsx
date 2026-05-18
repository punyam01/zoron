import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Clock, BarChart3, Layers, ArrowRight } from 'lucide-react'

export default function ProblemStatement() {
  const containerRef = useRef(null)
  const isSectionInView = useInView(containerRef, { once: true, margin: "-15%" })

  const problems = [
    {
      metric: "01 // SPEED",
      title: "Deals take too long",
      description: "Due diligence and financial modelling consume weeks of analyst time.",
      icon: Clock,
    },
    {
      metric: "02 // RISK",
      title: "Reporting is manual",
      description: "Teams spend more time building spreadsheets than analysing results.",
      icon: BarChart3,
    },
    {
      metric: "03 // SILOS",
      title: "Data is fragmented",
      description: "Managing systems across disparate platforms makes aggregation inconsistent.",
      icon: Layers,
    },
  ]

  return (
    <section 
      ref={containerRef}
      id="problem" 
      className="relative pt-16 pb-16 md:pt-20 md:pb-24 bg-[#030303] text-white overflow-hidden border-t border-b border-white/5"
    >
      {/* Background Matrix Mesh */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Compressed Header Group */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-white/5">
          <div>
            <span className="text-[9px] tracking-[0.3em] uppercase font-mono text-white/30 block mb-2">Market Reality</span>
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-4xl font-light tracking-tight leading-tight text-white"
            >
              Finance teams are <span className="italic font-serif text-gray-400">drowning in data</span> and starved of insight.
            </motion.h2>
          </div>
          <span className="text-[10px] font-mono text-white/20 hidden md:block tracking-widest">// SCROLL_NARRATIVE_SEQUENCE</span>
        </div>

        {/* The Horizontal Filmstrip Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch relative">
          
          {/* LEFT: The 3 Problem Steps (Compact Rows) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-4 relative">
            {problems.map((problem, idx) => {
              const Icon = problem.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="p-5 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-colors group flex flex-col justify-between min-h-[180px]"
                >
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[9px] font-mono text-white/30 tracking-wider">{problem.metric}</span>
                      <Icon size={14} className="text-white/40 group-hover:text-white transition-colors" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-base font-medium text-white mb-1.5 tracking-tight">{problem.title}</h3>
                    <p className="text-xs text-gray-400 font-light leading-relaxed">{problem.description}</p>
                  </div>
                </motion.div>
              )
            })}

            {/* Aesthetic Horizontal Laser Wire running under the steps */}
            <div className="absolute bottom-[-14px] left-0 right-0 h-[1px] bg-white/5 hidden lg:block">
              <motion.div 
                initial={{ left: "-10%", width: "0%" }}
                animate={isSectionInView ? { left: "100%", width: ["0%", "30%", "0%"] } : {}}
                transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
                className="absolute h-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
              />
            </div>
          </div>

          {/* MIDDLE NARRATIVE GAP: Tiny visual pipeline arrow */}
          <div className="hidden lg:flex lg:col-span-1 items-center justify-center">
            <motion.div
              animate={isSectionInView ? { x: [0, 4, 0] } : {}}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-white/20"
            >
              <ArrowRight size={18} strokeWidth={1.5} />
            </motion.div>
          </div>

          {/* RIGHT: The Solution Climax Card */}
          <div className="lg:col-span-4">
            <motion.div 
              initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
              animate={isSectionInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="h-full p-6 md:p-8 rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-md relative overflow-hidden flex flex-col justify-between min-h-[220px] lg:min-h-0"
            >
              {/* Internal micro flare aura */}
              <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-white/[0.02] blur-[50px] pointer-events-none" />

              <div>
                <span className="text-[9px] font-mono tracking-[0.25em] text-white/40 uppercase block mb-4">The Solution</span>
                <h3 className="text-lg md:text-xl font-light text-gray-300 leading-snug tracking-tight">
                  <span className="text-white font-normal block mb-2">Zoron solves exactly this.</span>
                  Not with more dashboards, but with{" "}
                  
                  {/* Subtle Shimmer text container */}
                  <span className="inline-block relative text-white font-medium px-1.5 py-0.5 rounded bg-white/[0.04]">
                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                      intelligent AI agents
                    </span>
                  </span>
                  
                  {" "}that work autonomously and deliver real financial outputs.
                </h3>
              </div>

              {/* Small terminal telemetry footer */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[8px] text-white/20">
                <span>CONDUIT SYSTEM: ACTIVE</span>
                <span>// READY</span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  )
}