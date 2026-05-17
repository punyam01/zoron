


import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function BottomCTA() {
  const premiumEase = [0.16, 1, 0.3, 1]

  return (
    <section className="relative w-full bg-[#050505] text-white pt-12 pb-12 md:pt-16 md:pb-16 border-t border-white/10 overflow-hidden">
      {/* Structural Line Grid to match the overall homepage design layout */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

      {/* Subtle giant background branding accent */}
      <div className="absolute right-0 bottom-0 opacity-[0.015] pointer-events-none font-mono text-[220px] font-bold text-white select-none translate-x-12 translate-y-20">
        ZN
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Full screen grid border box matching ProblemStatement style architecture */}
        <div className="border border-white/10 p-8 md:p-14 bg-white/[0.005] flex flex-col items-center text-center relative">
          
          {/* Subtle Top Border Corner Node Markings */}
          <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-white/20 -translate-x-[4px] -translate-y-[4px]" />
          <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-white/20 translate-x-[4px] -translate-y-[4px]" />

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: premiumEase }}
            className="space-y-4 max-w-2xl"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-gray-500">
                Next Steps // Deployment Vector
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight">
              Ready to See Zoron in Action?
            </h2>
            
            <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed max-w-xl mx-auto">
              Book a personalized 30-minute infrastructure demo and see how Zoron can actively transform your financial workflows — <span className="text-white font-normal underline underline-offset-4 decoration-white/20">within 90 days.</span>
            </p>
          </motion.div>

          {/* Minimal Action Pathways */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5, ease: premiumEase }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-8 w-full font-mono text-xs"
          >
            {/* Primary Solid Execution Action */}
            <motion.a
              href="/demo"
              whileHover={{ bg: '#ffffff', color: '#000000' }}
              className="w-full sm:w-auto border border-white text-white bg-transparent px-6 py-2.5 uppercase tracking-widest transition-colors flex items-center justify-center gap-2 font-medium"
            >
              Book a Demo
            </motion.a>
            
            {/* Secondary Router Asset */}
            <motion.a 
              href="/contact" 
              whileHover={{ gap: '8px' }}
              className="inline-flex items-center gap-1.5 uppercase tracking-widest text-gray-400 hover:text-white border-b border-white/10 hover:border-white pb-1 transition-all group"
            >
              Contact Direct 
              <ArrowUpRight size={12} className="text-white/40 group-hover:text-white transition-colors" />
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}