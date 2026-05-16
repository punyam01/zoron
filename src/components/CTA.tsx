// import { motion } from 'framer-motion'
// import { ArrowRight, Check } from 'lucide-react'

// export default function CTA() {
//   const features = [
//     'Free tier includes up to 100K monthly operations',
//     'No credit card required to get started',
//     'Full access to core platform features',
//     'Community support and documentation',
//   ]

//   return (
//     <section className="relative py-20 md:py-32 overflow-hidden">
//       {/* Gradient background */}
//       <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-primary/5 to-accent/10 pointer-events-none" />

//       <div className="section-container relative z-10">
//         {/* Main CTA Box */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="glass p-12 md:p-20 rounded-2xl border border-border/50 overflow-hidden relative"
//         >
//           {/* Decorative elements */}
//           <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

//           <div className="relative z-10 max-w-3xl mx-auto text-center">
//             {/* Heading */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="mb-8"
//             >
//               <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
//                 Get Started
//               </p>
//               <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
//                 Ready to Transform Your Intelligence?
//               </h2>
//               <p className="text-lg text-muted-foreground text-balance">
//                 Start with a free tier and experience institutional-grade intelligence in minutes.
//               </p>
//             </motion.div>

//             {/* Features List */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
//             >
//               {features.map((feature, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, x: -10 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.4, delay: idx * 0.05 }}
//                   className="flex items-center space-x-3 justify-center md:justify-start"
//                 >
//                   <Check className="text-primary flex-shrink-0" size={20} />
//                   <span className="text-muted-foreground">{feature}</span>
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* CTA Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               className="flex flex-col sm:flex-row items-center justify-center gap-4"
//             >
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="btn-primary flex items-center space-x-2 group px-8 py-4 text-lg"
//               >
//                 <span>Start Free Trial</span>
//                 <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="btn-secondary px-8 py-4 text-lg"
//               >
//                 Schedule Demo
//               </motion.button>
//             </motion.div>

//             {/* Support text */}
//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="text-sm text-muted-foreground mt-8"
//             >
//               Questions? Our team is ready to help. Contact{' '}
//               <a href="mailto:hello@zoron.ai" className="text-primary hover:underline">
//                 hello@zoron.ai
//               </a>
//             </motion.p>
//           </div>
//         </motion.div>

//         {/* Trust indicators */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="mt-20 text-center"
//         >
//           <p className="text-sm text-muted-foreground mb-8">Trusted by leading institutions</p>
//           <div className="flex items-center justify-center gap-12 flex-wrap">
//             {['SOC 2 Type II', 'ISO 27001', 'GDPR Compliant', 'CCPA Ready'].map((cert, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.4, delay: idx * 0.1 }}
//                 className="flex items-center space-x-2 text-sm text-muted-foreground"
//               >
//                 <div className="w-2 h-2 bg-primary rounded-full" />
//                 <span>{cert}</span>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

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
