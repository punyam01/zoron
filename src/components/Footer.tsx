
import { motion } from 'framer-motion'
import { Linkedin, Twitter, Youtube, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative w-full bg-[#050505] text-white border-t border-white/10 pt-20 pb-12 overflow-hidden">
      {/* Structural Background Line Matrix Grid */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          
          {/* Column 1 — Brand Matrix (Takes 4 spans) */}
          <div className="lg:col-span-4 space-y-6">
            <span className="text-lg font-bold tracking-[0.2em] text-white">ZORON</span>
            <p className="text-xs text-gray-400 font-light leading-relaxed max-w-xs">
              Intelligence for Finance. Precision for Deals.
            </p>
            {/* Social Channels */}
            <div className="flex items-center gap-4 text-gray-500">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Linkedin size={14} /></a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Twitter size={14} /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Youtube size={14} /></a>
            </div>
          </div>

          {/* Column 2 — Solutions (Takes 2 spans) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[10px] font-mono tracking-[0.25em] uppercase text-gray-500">Solutions</h4>
            <ul className="space-y-2 text-xs font-light text-gray-400">
              <li><a href="#corp" className="hover:text-white transition-colors">Corporate Finance</a></li>
              <li><a href="#advisory" className="hover:text-white transition-colors">Transactions Advisory</a></li>
              <li><a href="#pe" className="hover:text-white transition-colors">Private Equity</a></li>
              <li><a href="#platform" className="hover:text-white transition-colors">Platform Architecture</a></li>
            </ul>
          </div>

          {/* Column 3 — Company (Takes 2 spans) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[10px] font-mono tracking-[0.25em] uppercase text-gray-500">Company</h4>
            <ul className="space-y-2 text-xs font-light text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#insights" className="hover:text-white transition-colors">Insights Ledger</a></li>
              <li><a href="#cases" className="hover:text-white transition-colors">Use Cases</a></li>
              <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#partners" className="hover:text-white transition-colors">Partners</a></li>
              <li><a href="#press" className="hover:text-white transition-colors">Press Kit</a></li>
            </ul>
          </div>

          {/* Column 4 — Contact Matrix (Takes 4 spans) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-[10px] font-mono tracking-[0.25em] uppercase text-gray-500">Gateway Portal</h4>
            <ul className="space-y-2 text-xs font-light text-gray-400">
              <li><a href="/contact?mode=demo" className="hover:text-white transition-colors">Book a Personalised Demo</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact Operational Registry</a></li>
              <li><a href="#login" className="text-white flex items-center gap-1 hover:underline">Client Secure Login <ArrowUpRight size={10} /></a></li>
              <li><a href="#portal" className="text-white flex items-center gap-1 hover:underline">Partner Deployment Portal <ArrowUpRight size={10} /></a></li>
            </ul>
            <div className="pt-2">
              <span className="text-[9px] font-mono text-gray-500 block uppercase">Direct Vector:</span>
              <a href="mailto:hello@zoron.ai" className="text-xs font-mono text-white/80 hover:text-white transition-colors">hello@zoron.ai</a>
            </div>
          </div>

        </div>

        {/* Closing Structural Boundary Strip */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-gray-500 tracking-wider">
          <span>© {currentYear} ZORON SYSTEMS LTD. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">PRIVACY FRAMEWORK</a>
            <a href="#terms" className="hover:text-white transition-colors">TERMS OF DEPLOYMENT</a>
          </div>
        </div>
      </div>
    </footer>
  )
}