import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Cpu, CheckSquare, Gauge, Lock, Users } from 'lucide-react'

const differentiators = [
  {
    icon: Cpu,
    title: "Finance-First, Not Finance-Adjacent",
    description: "Unlike general AI platforms retrofitted for finance, Zoron was built by professionals who have lived the problems — bankers, FP&A leaders, and PE operators who know exactly what good financial analysis looks like."
  },
  {
    icon: Gauge,
    title: "Agentic, Not Just Generative",
    description: "Zoron's AI agents don't stop at generating text. They execute complex multi-step financial tasks — pulling data, running models, reconciling outputs, and producing finished deliverables — with minimal human input."
  },
  {
    icon: CheckSquare,
    title: "Outputs You Can Trust",
    description: "Every analysis includes cited sources, auditable reasoning, and confidence indicators. Zoron is designed for environments where errors have real financial and reputational consequences."
  },
  {
    icon: ShieldCheck,
    title: "Speed Without Compromise",
    description: "What takes an analyst team a week, Zoron completes in hours. Not by cutting corners — by eliminating manual assembly work so your experts can focus on the judgment calls that add value."
  },
  {
    icon: Lock,
    title: "Your Data Stays Yours",
    description: "Zoron operates on a strict zero-training policy. Your financial data is never used to train AI models, shared with third parties, or retained beyond the agreed processing window."
  },
  {
    icon: Users,
    title: "Implementation That Works",
    description: "We don't hand you a tool and walk away. Zoron's team works with yours to configure the platform, integrate your data sources, and ensure the system delivers measurable value within 90 days."
  }
]

const metrics = [
  { value: "10x", label: "Faster deal diligence versus traditional analyst teams" },
  { value: "80%", label: "Reduction in time spent on manual financial reporting" },
  { value: "90 Days", label: "Typical time to first measurable value post-implementation" },
  { value: "100%", label: "Audit trail on every single AI-generated output" }
]

export default function WhyZoron() {
  return (
    <section id="why-zoron" className="relative pt-24 pb-20 bg-[#050505] text-white overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#00d9ff] block mb-4">
            COMPETITIVE DIFFERENTIATION
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-tight">
            What Makes Zoron Different.
          </h2>
        </div>

        {/* 3-Column Features Matrix Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-28">
          {differentiators.map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className="space-y-4 group">
                <div className="flex items-center gap-3">
                  <div className="p-2 border border-white/10 bg-white/[0.02] text-gray-400 group-hover:text-[#00d9ff] group-hover:border-[#00d9ff]/30 transition-all duration-300">
                    <Icon size={16} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-medium tracking-tight text-white group-hover:text-gray-200 transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs font-light text-gray-400 leading-relaxed max-w-sm pl-0">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Full-Width Visual Metric Highlight Band
        <div className="border-t border-b border-white/10 bg-white/[0.005] backdrop-blur-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 sm:divide-x divide-white/10 text-center lg:text-left">
            {metrics.map((metric, mIdx) => (
              <div 
                key={mIdx} 
                className="p-8 flex flex-col justify-center min-h-[160px] hover:bg-white/[0.01] transition-colors group"
              >
                <div className="text-4xl lg:text-5xl font-mono font-light tracking-tighter text-[#00d9ff] group-hover:scale-105 origin-left transition-transform duration-300 mb-3">
                  {metric.value}
                </div>
                <div className="text-[11px] font-mono tracking-wide text-gray-400 uppercase leading-relaxed max-w-[220px] mx-auto lg:mx-0">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div> */}

      </div>
    </section>
  )
}