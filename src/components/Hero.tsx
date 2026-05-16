// import { motion } from 'framer-motion'
// import { ArrowRight } from 'lucide-react'
// import gsap from 'gsap'
// import { useEffect, useRef } from 'react'

// export default function Hero() {
//   const containerRef = useRef<HTMLDivElement>(null)
//   const glowRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       if (!glowRef.current) return

//       const rect = containerRef.current?.getBoundingClientRect()
//       if (!rect) return

//       const x = e.clientX - rect.left
//       const y = e.clientY - rect.top

//       gsap.to(glowRef.current, {
//         x: x - 100,
//         y: y - 100,
//         duration: 0.3,
//         overwrite: 'auto',
//       })
//     }

//     document.addEventListener('mousemove', handleMouseMove)
//     return () => document.removeEventListener('mousemove', handleMouseMove)
//   }, [])

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
//       transition: { duration: 0.8, ease: 'easeOut' },
//     },
//   }

//   return (
//     <section
//       ref={containerRef}
//       className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center justify-center"
//     >
//       {/* Animated gradient glow */}
//       <div
//         ref={glowRef}
//         className="absolute w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl pointer-events-none"
//       />

//       {/* Grid background */}
//       <div className="absolute inset-0 bg-grid-pattern opacity-5" />

//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="relative z-10 text-center max-w-4xl mx-auto px-4"
//       >
//         {/* Badge */}
//         <motion.div variants={itemVariants} className="mb-8 flex justify-center">
//           <div className="glass px-4 py-2 rounded-full">
//             <p className="text-sm text-primary font-medium">
//               Intelligence for Finance. Precision for Deals
//             </p>
//           </div>
//         </motion.div>

//         {/* Main Heading */}
//         <motion.h1
//           variants={itemVariants}
//           className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance"
//         >
//           The AI Brain Behind Your Most Complex {' '}
//           <span className="relative">
//             <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent blur-lg opacity-75" />
//             <span className="relative bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//               Financial Decisions
//             </span>
//           </span>
//         </motion.h1>

//         {/* Subheading */}
//         <motion.p
//           variants={itemVariants}
//           className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance leading-relaxed"
//         >
//           ZORON brings institutional-grade intelligence to complex decision-making. No hype, no shortcuts, just precision-first solutions for enterprise challenges.
//         </motion.p>

//         {/* CTA Buttons */}
//         <motion.div
//           variants={itemVariants}
//           className="flex flex-col sm:flex-row items-center justify-center gap-4"
//         >
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="btn-primary flex items-center space-x-2 group"
//           >
//             <span>Get Started</span>
//             <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
//           </motion.button>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="btn-secondary flex items-center space-x-2"
//           >
//             <span>Watch Demo</span>
//           </motion.button>
//         </motion.div>

//         {/* Stats Row */}
//         <motion.div
//           variants={itemVariants}
//           className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
//         >
//           {[
//             { value: '500+', label: 'Enterprise Clients' },
//             { value: '10B+', label: 'Data Points' },
//             { value: '99.99%', label: 'Uptime' },
//           ].map((stat, idx) => (
//             <div key={idx} className="text-center">
//               <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
//               <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
//             </div>
//           ))}
//         </motion.div>
//       </motion.div>

//       {/* Scroll indicator */}
//       <motion.div
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//         className="absolute bottom-10 left-1/2 -translate-x-1/2"
//       >
//         <div className="flex flex-col items-center space-y-2">
//           <p className="text-xs text-muted-foreground">Scroll to explore</p>
//           <div className="w-5 h-8 border-2 border-primary rounded-full flex items-start justify-center p-1">
//             <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   )
// }

import { motion } from 'framer-motion'
import { ArrowUpRight, Shield, Clock, BarChart3 } from 'lucide-react'

export default function Hero() {
  const words = "Intelligence for Finance. Precision for Deals.".split(" ")

  // Animation Orchestration Containers
  const taglineContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    }
  }

  const taglineChild = {
    hidden: { opacity: 0, y: 4 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 120 }
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[#050505] text-white pt-28 overflow-hidden">
      {/* Background: Structural Architecture Fine Line Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`, 
          backgroundSize: '60px 60px' 
        }} 
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Core Narrative */}
          <div className="lg:col-span-7">
            
            {/* Meaningful AI Tagline Initialization Effect */}
            <div className="flex items-center gap-3 mb-8">
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "24px", opacity: 0.4 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="h-[1px] bg-white flex-shrink-0"
              />
              
              <motion.div 
                variants={taglineContainer}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap gap-x-2 text-[10px] sm:text-xs tracking-[0.25em] uppercase text-gray-400 font-mono"
              >
                {words.map((word, idx) => (
                  <motion.span variants={taglineChild} key={idx} className="inline-block">
                    {word}
                  </motion.span>
                ))}
                
                {/* Terminal Live Blip */}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "steps(2)" }}
                  className="inline-block w-1.5 h-3 bg-white/50 ml-0.5 self-center"
                />
              </motion.div>
            </div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[1.05] mb-8"
            >
              The AI Brain Behind Your <br /> Most <span className="italic font-serif text-gray-400">Complex</span> Financial Decisions.
            </motion.h1>

            {/* Subtext */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed mb-10 font-light"
            >
              Zoron applies the power of agentic AI to corporate finance, M&A transactions, and private equity — automating the work that slows your team down and surfacing the intelligence that drives the best outcomes.
            </motion.p>

            {/* Sharp Geometric CTA Grid Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <button className="bg-white text-black px-8 py-4 rounded-none text-xs font-semibold uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center gap-3">
                Book a Demo <ArrowUpRight size={14} />
              </button>
              <a href="#solutions" className="border border-white/10 px-8 py-4 rounded-none text-xs font-semibold uppercase tracking-widest hover:bg-white/[0.03] hover:border-white/30 transition-colors inline-flex items-center">
                Explore Our Solutions
              </a>
            </motion.div>
          </div>

          {/* Right Column: Premium Active AI Terminal Output */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="w-full max-w-md mx-auto border border-white/10 bg-[#0A0A0A] p-6 font-mono text-[11px] text-gray-400 relative overflow-hidden rounded-none"
            >
              {/* Terminal Top Window Deck */}
              <div className="flex justify-between items-center pb-4 border-b border-white/5 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
                  <span className="text-white font-medium tracking-wider text-[10px]">ZORON_KERNEL_INIT</span>
                </div>
                <Shield size={12} className="text-white/20" />
              </div>
              
              {/* Active Logging Stream Simulation */}
              <div className="space-y-3.5">
                <div className="flex justify-between">
                  <span className="text-white/60">[SYSTEM] AGENTIC SYNC</span>
                  <span className="text-emerald-400 font-bold">ONLINE</span>
                </div>
                <div className="text-white/30 pl-3 leading-relaxed">↳ Core neural engine reading target vectors across corporate databases.</div>
                
                <div className="flex justify-between pt-1">
                  <span className="text-white/60">[MODELS] COGNITIVE LAYER</span>
                  <span className="text-emerald-400 font-bold">READY</span>
                </div>
                <div className="text-white/30 pl-3 leading-relaxed">↳ Pre-trained parsing frameworks configured for M&A due diligence & PE book health tracking.</div>
                
                <div className="flex justify-between items-center pt-3 border-t border-white/5 mt-4 text-[10px] text-white/50 tracking-wider">
                  <span>SECURE CONNECTIVITY</span>
                  <span className="bg-white/5 px-2 py-0.5 font-bold border border-white/5 text-white">TLS 1.3 // AES-256</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Trust Signal bar - Ultra Minimal Corporate Footer Strip */}
      <div className="mt-auto border-t border-white/10 bg-black/60 backdrop-blur-md py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-white/40 font-mono text-[10px] tracking-[0.2em] uppercase">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-center md:text-left">
             <span>Private Equity</span>
             <span className="text-white/10">|</span>
             <span>Investment Banking</span>
             <span className="text-white/10">|</span>
             <span>Global Corporates</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
               <Clock size={12} strokeWidth={1.5} />
               <span>10x Speed</span>
            </div>
            <div className="h-3 w-[1px] bg-white/10" />
            <div className="flex items-center gap-2">
               <BarChart3 size={12} strokeWidth={1.5} />
               <span>80% Efficiency</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}