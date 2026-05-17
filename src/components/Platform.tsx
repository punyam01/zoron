
import { motion } from 'framer-motion'
import { Cpu, GraduationCap, ShieldCheck, Layers, Terminal, Database, ArrowUpRight } from 'lucide-react'

export default function PlatformOverview() {
  const pillars = [
    {
      icon: Cpu,
      title: "Agentic AI",
      metric: "AUTONOMOUS OP",
      description: "Zoron's AI agents don't just answer questions — they take action. They plan, reason, retrieve data, run calculations, and produce outputs autonomously, completing multi-step financial tasks end to end."
    },
    {
      icon: GraduationCap,
      title: "Domain Intelligence",
      metric: "FINANCIAL COGNITION",
      description: "Pre-trained on financial frameworks, accounting standards, deal structures, and sector benchmarks. Zoron understands EBITDA bridges, LBO mechanics, IFRS, and PE reporting conventions natively."
    },
    {
      icon: ShieldCheck,
      title: "Secure by Design",
      metric: "GOVERNANCE FRAMEWORK",
      description: "Enterprise-grade security with role-based access control, data encryption at rest and in transit, full audit trails, and no training on your confidential data. SOC 2 Type II compliant."
    },
    {
      icon: Layers,
      title: "Seamless Integration",
      metric: "DATA UNIFICATION",
      description: "Connects to your existing tools — ERP systems, Excel, data rooms, CRMs, and reporting platforms — via secure APIs and pre-built connectors, without requiring a full technology overhaul."
    }
  ]

  const complianceItems = [
    { label: "SOC 2 Type II Compliance", status: "Certified" },
    { label: "ISO 27001 Information Security", status: "Planned Architecture" },
    { label: "GDPR Privacy Framework", status: "Fully Aligned" },
    { label: "UK FCA Technology Guidelines", status: "Compliant" },
    { label: "Data Sovereignty (Azure UK South)", status: "UK / EU Hosted" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
    },
  }

  return (
    <section id="platform" className="relative pb-24 md:pb-32 bg-[#050505] text-white border-t border-white/10 overflow-hidden">
      {/* Fine Structural Grid Lines */}
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
            <span className="text-xs tracking-[0.3em] uppercase text-gray-400">Why ZORON..</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-light tracking-tight leading-tight text-white mb-8"
          >
            Built for Finance. <br />
            Designed for Enterprise. <br />
            <span className="italic font-serif text-gray-400">Powered by Agentic AI.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-3xl"
          >
            The Zoron platform is not a general-purpose AI tool bolted onto a financial workflow. It was engineered from the ground up for the specific demands of corporate finance, M&A, and private equity — combining large language models, agentic orchestration, and deep financial domain knowledge into a single, secure, enterprise-grade platform.
          </motion.p>
        </div>

        {/* 4-Column Interlocking Platform Pillars Matrix */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10 mb-28"
        >
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-8 border-r border-b border-white/10 bg-white/[0.005] hover:bg-white/[0.015] transition-colors flex flex-col justify-between min-h-[300px] group rounded-none"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[9px] tracking-[0.2em] uppercase text-white/30 font-mono">
                      {pillar.metric}
                    </span>
                    <div className="p-2 border border-white/5 bg-white/[0.01] text-white/40 group-hover:text-white group-hover:border-white/20 transition-all rounded-none">
                      <Icon size={14} strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-medium tracking-tight text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Technology Stack & Compliance Infrastructure Ledger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pt-16 border-t border-white/10">
          
          {/* Tech Stack Context Block */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="flex items-center gap-2">
              <Terminal size={12} className="text-white/40" />
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white/60">Technology Stack</h4>
            </div>
            <p className="text-sm font-light text-gray-400 leading-relaxed">
              Zoron is built on a modern, cloud-native architecture using leading foundation AI models, a proprietary financial reasoning layer, and a secure multi-tenant infrastructure. 
            </p>
            <p className="text-sm font-light text-gray-400 leading-relaxed">
              Available as a SaaS deployment or as a private cloud / on-premise installation for clients with specific data residency requirements.
            </p>
            
            <div className="pt-4">
              <motion.button 
                whileHover={{ gap: '10px' }}
                className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-white border-b border-white/20 pb-2 transition-all"
              >
                Request Architecture Brief <ArrowUpRight size={14} />
              </motion.button>
            </div>
          </motion.div>

          {/* Compliance Ledger Rows */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-2 mb-6">
              <Database size={12} className="text-white/40" />
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white/60">Compliance & Certifications</h4>
            </div>

            {/* Structured Financial Ledger Grid */}
            <div className="border-t border-l border-white/5 font-mono text-[11px]">
              {complianceItems.map((item, idx) => (
                <div 
                  key={idx} 
                  className="px-6 py-4 border-r border-b border-white/5 flex items-center justify-between hover:bg-white/[0.01] transition-colors group/row"
                >
                  <span className="text-gray-400 group-hover/row:text-white font-sans tracking-wide transition-colors">
                    {item.label}
                  </span>
                  <span className={`text-[9px] tracking-widest uppercase px-2 py-0.5 border font-mono font-medium ${
                    item.status === "Planned Architecture" 
                      ? "bg-amber-500/5 text-amber-400 border-amber-500/10" 
                      : "bg-emerald-500/5 text-emerald-400 border-emerald-500/10"
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}