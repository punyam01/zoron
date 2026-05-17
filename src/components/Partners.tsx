

import { motion } from 'framer-motion'
import { Layers, Briefcase, Database, Network, ArrowUpRight } from 'lucide-react'

const categories = [
  {
    icon: Network,
    title: "Technology Partners",
    subtitle: "CLOUD & PLATFORM VENDORS",
    description: "Core cloud infrastructure providers including Microsoft Azure, core enterprise ERP vendors, and proprietary client technology modules operating within verified secure parameters."
  },
  {
    icon: Briefcase,
    title: "Advisory & Services",
    subtitle: "CONSULTING & DEALS CO-DELIVERY",
    description: "Global accounting networks, tier-one law firms, and boutique financial advisory practices who actively refer, integrate, or co-deliver transactions utilizing the Zoron intelligence stack."
  },
  {
    icon: Database,
    title: "Data & Market Intelligence",
    subtitle: "FINANCIAL DATA PIPELINES",
    description: "Direct real-time API integrations with institutional financial database providers including Bloomberg, Refinitiv, and S&P Global for native data ingestion and processing."
  },
  {
    icon: Layers,
    title: "System Integration",
    subtitle: "ENTERPRISE DEPLOYMENT",
    description: "Certified technology consultancies and specialized enterprise integrators managing complex, multi-tenant deployments across global institutional infrastructures."
  }
]

// Named representations for integration wireframes
const integrationLogos = [
  "SAP Engine", "Oracle ERP", "Workday", "Salesforce", "Microsoft 365", "Excel API", "Intralinks", "Datasite", "Dealroom"
]

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="relative py-24 md:py-32 bg-[#050505] text-white border-t border-white/10 overflow-hidden">
      {/* Structural Line Grid Background */}
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
            <span className="text-xs tracking-[0.3em] uppercase text-gray-400">Connectivity</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-light tracking-tight leading-tight text-white mb-6"
          >
            Trusted Ecosystem. <br />
            <span className="italic font-serif text-gray-400">Zero Implementation Friction.</span>
          </motion.h2>
          
          <p className="text-sm font-light text-gray-400 max-w-2xl leading-relaxed">
            Zoron seamlessly embeds into your current enterprise workflows, securely reading data from environments your team already relies on without requiring legacy stack migration.
          </p>
        </div>

        {/* Integration Infinite Horizontal Logo Strip */}
        <div className="relative w-full border-t border-b border-white/10 bg-white/[0.01] py-8 mb-24 overflow-hidden mask-gradient">
          {/* Fading Edge Effects for Premium Appearance */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

          {/* Marquee Motion Element (duplicated array targets continuous visual layout loop) */}
          <div className="flex w-max gap-16 items-center animate-marquee font-mono text-[11px] tracking-[0.25em] uppercase text-gray-400">
            {[...integrationLogos, ...integrationLogos].map((logo, idx) => (
              <div key={idx} className="flex items-center gap-3 border border-white/5 bg-black px-6 py-2.5">
                <span className="w-1.5 h-1.5 bg-white/20" />
                <span className="text-white/60 font-sans font-medium tracking-wide">{logo}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ecosystem Categorization Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {categories.map((cat, idx) => {
            const Icon = cat.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-[#050505] p-10 flex flex-col justify-between group min-h-[260px]"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="text-white/40 group-hover:text-white transition-colors">
                      <Icon size={16} strokeWidth={1.5} />
                    </div>
                    <span className="text-[9px] font-mono tracking-widest text-white/30">
                      [ CATEGORY_0{idx + 1} ]
                    </span>
                  </div>

                  <span className="text-[9px] font-mono tracking-widest text-gray-500 uppercase block mb-1">
                    {cat.subtitle}
                  </span>
                  <h3 className="text-lg font-medium tracking-tight text-white mb-4">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-light">
                    {cat.description}
                  </p>
                </div>
                
                <div className="pt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-white tracking-wider uppercase">
                    View Integration Docs <ArrowUpRight size={10} />
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>

      {/* Tailwind Marquee Keyframes Injector */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
        }
      `}</style>
    </section>
  )
}
