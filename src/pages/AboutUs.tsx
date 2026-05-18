import { motion } from 'framer-motion'
import { Linkedin, Target, Shield, Eye, Users2, Sparkles, ArrowUpRight } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: "Precision over Hype",
    description: "Finance demands accuracy. We hold our AI to the same standard your auditors hold your accounts."
  },
  {
    icon: Eye,
    title: "Transparency Always",
    description: "Every output is explainable. We don't believe in black-box AI for financial decisions."
  },
  {
    icon: Users2,
    title: "Partnership, Not Products",
    description: "We succeed when our clients succeed. We embed with teams, not just deploy software."
  },
  {
    icon: Sparkles,
    title: "Continuous Improvement",
    description: "Finance evolves. Our platform evolves with it — constantly trained on new regulations, frameworks, and market conditions."
  }
]

export default function AboutPage() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#050505] text-white border-t border-white/10 overflow-hidden">
      {/* Structural Line Grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="h-[1px] w-8 bg-white/40" />
            <span className="text-xs tracking-[0.3em] uppercase text-gray-400">Our Profile</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-light tracking-tight leading-tight text-white"
          >
            We built Zoron because <br />
            we <span className="italic font-serif text-gray-400">lived the problem.</span>
          </motion.h2>
        </div>

        {/* Narrative Split: Story & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-24 border-b border-white/10 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-4"
          >
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-white/50">Our Story</h3>
            <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">
              Zoron was founded by finance and technology professionals who had spent careers in investment banking, private equity, and enterprise technology. We saw firsthand how much time talented people wasted on manual data work, and we knew AI had reached the point where that could change — permanently. We built Zoron to give finance teams back the time and mental space to do the work that actually matters.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-5 p-8 border border-white/10 bg-white/[0.01] flex flex-col justify-between"
          >
            <div className="flex items-center gap-2 text-white/60 mb-6">
              <Target size={14} />
              <h3 className="text-xs font-mono uppercase tracking-[0.2em]">Our Mission</h3>
            </div>
            <p className="text-base font-light font-serif italic text-gray-300 leading-relaxed">
              "To make every finance professional more effective, every transaction more informed, and every investment decision better supported — through the intelligent use of AI."
            </p>
          </motion.div>
        </div>

        {/* Corporate Values Matrix Grid */}
        <div className="mb-24">
          <div className="flex items-center gap-2 mb-12">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-white/50">Core Values</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
            {values.map((val, idx) => {
              const Icon = val.icon
              return (
                <div 
                  key={idx} 
                  className="p-8 border-r border-b border-white/10 bg-white/[0.005] hover:bg-white/[0.015] transition-colors flex flex-col justify-start min-h-[220px]"
                >
                  <div className="text-white/40 mb-4">
                    <Icon size={16} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-md font-medium tracking-tight text-white mb-3">
                    {val.title}
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed font-light">
                    {val.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* NEW NARRATIVE CTA: WANNA WORK WITH US?                                    */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative border border-white/10 bg-gradient-to-r from-white/[0.01] to-transparent p-8 md:p-12 hover:border-white/20 transition-colors group overflow-hidden"
        >
          {/* Subtle abstract background flare */}
          <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-white/[0.01] blur-[80px] pointer-events-none group-hover:bg-white/[0.02] transition-colors" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse" />
                <span className="text-[10px] font-mono tracking-[0.25em] text-white/40 uppercase">Careers & Ecosystem</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-light tracking-tight text-white mb-3">
                Want to build the future of agentic finance?
              </h3>
              <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed max-w-2xl">
                We are actively looking for quantitative engineers, finance specialists, and systems designers who want to rewrite workflows for enterprise investments and M&A infrastructure.
              </p>
            </div>

            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <a 
                href="/contact" 
                className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 font-mono text-xs uppercase tracking-wider font-semibold hover:bg-gray-200 active:scale-[0.99] transition-all w-full sm:w-auto justify-between sm:justify-start group/btn"
              >
                <span>Connect With Us</span>
                <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}