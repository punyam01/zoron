

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function BottomCTA() {
  return (
    <section className="relative w-full bg-[#030a16] text-white py-24 border-t border-white/10 overflow-hidden">
      {/* Subtle background branding anchor */}
      <div className="absolute right-0 top-0 w-96 h-full opacity-5 pointer-events-none font-mono text-[180px] font-bold text-white select-none translate-x-20 translate-y-10">
        ZN
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 max-w-3xl"
        >
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-blue-400">
            Next Steps // Platform Deployment
          </span>
          
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight">
            Ready to See Zoron in Action?
          </h2>
          
          <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed max-w-xl mx-auto">
            Book a personalised 30-minute demo and see how Zoron can transform your financial workflows — <span className="text-white font-medium">within 90 days.</span>
          </p>
        </motion.div>

        {/* Action Pathways */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-6"
        >
          {/* Primary High-Contrast Electric Blue Button */}
          <button className="w-full sm:w-auto bg-[#0055ff] hover:bg-[#0044dd] text-white px-8 py-4 text-xs font-semibold uppercase tracking-widest transition-colors rounded-none flex items-center justify-center gap-2">
            Book a Demo
          </button>
          
          <a 
            href="/contact" 
            className="text-xs uppercase tracking-widest font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 py-2 group"
          >
            Or contact us directly 
            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
