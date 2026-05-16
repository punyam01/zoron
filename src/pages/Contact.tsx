import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Building,
  ArrowDownToLine,
  Briefcase,
} from "lucide-react";

export default function ContactPage() {
  const [activeForm, setActiveForm] = useState("demo");

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-24 relative overflow-hidden">
      {/* Structural Wiregrid Line Matrix Background */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Block */}
        <div className="max-w-4xl mb-20">
          <div className="flex items-center gap-3 mb-6">
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "24px", opacity: 0.4 }}
              transition={{ duration: 0.6 }}
              className="h-[1px] bg-white flex-shrink-0"
            />
            <span className="text-xs tracking-[0.25em] uppercase text-gray-400 font-mono">
              [ CONNECT PROTOCOL ]
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-tight text-white mb-6">
            Institutional Intake. <br />
            <span className="italic font-serif text-gray-400">
              Direct Communication Channels.
            </span>
          </h1>
        </div>

        {/* 12-Column Grid Wireline Mapping */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-white/10 pt-12">
          {/* Left Block Forms Framework (Takes 7 columns) */}
          <div className="lg:col-span-7 border border-white/10 bg-white/[0.002]">
            {/* Interactive Form Toggles Built into the Wireframe */}
            <div className="flex border-b border-white/10 font-mono text-[10px] tracking-[0.15em] uppercase">
              <button
                type="button"
                onClick={() => setActiveForm("demo")}
                className={`flex-1 py-4 px-6 border-r border-white/10 text-center transition-colors ${activeForm === "demo" ? "bg-white/5 text-white font-semibold" : "text-gray-500 hover:text-white"}`}
              >
                // 01 // Book a Demo
              </button>
              <button
                type="button"
                onClick={() => setActiveForm("general")}
                className={`flex-1 py-4 px-6 text-center transition-colors ${activeForm === "general" ? "bg-white/5 text-white font-semibold" : "text-gray-500 hover:text-white"}`}
              >
                // 02 // General Enquiry
              </button>
            </div>

            <div className="p-8 space-y-6">
              {activeForm === "demo" ? (
                /* INTAKE PROTOCOL 1: Book a Demo Form */
                <form
                  className="space-y-6"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
                    <div className="bg-[#050505] p-4 space-y-2">
                      <label className="text-[9px] font-mono uppercase tracking-wider text-gray-500 block">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-transparent text-xs text-white focus:outline-none font-light"
                      />
                    </div>
                    <div className="bg-[#050505] p-4 space-y-2">
                      <label className="text-[9px] font-mono uppercase tracking-wider text-gray-500 block">
                        Company *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-transparent text-xs text-white focus:outline-none font-light"
                      />
                    </div>
                    <div className="bg-[#050505] p-4 space-y-2">
                      <label className="text-[9px] font-mono uppercase tracking-wider text-gray-500 block">
                        Role *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-transparent text-xs text-white focus:outline-none font-light"
                      />
                    </div>
                    <div className="bg-[#050505] p-4 space-y-2">
                      <label className="text-[9px] font-mono uppercase tracking-wider text-gray-500 block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full bg-transparent text-xs text-white focus:outline-none font-light"
                      />
                    </div>
                  </div>

                  <div className="border border-white/10 bg-[#050505] p-4 space-y-2">
                    <label className="text-[9px] font-mono uppercase tracking-wider text-gray-500 block">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      className="w-full bg-transparent text-xs text-white focus:outline-none font-light"
                    />
                  </div>

                  <div className="border border-white/10 bg-[#050505] p-4 space-y-2 relative">
                    <label className="text-[9px] font-mono uppercase tracking-wider text-gray-500 block">
                      What are you looking to solve? *
                    </label>
                    <select
                      required
                      className="w-full bg-transparent text-xs text-white focus:outline-none font-light appearance-none native-select-custom pr-8"
                    >
                      <option
                        value=""
                        disabled
                        className="bg-black text-gray-600"
                      >
                        Select functional domain...
                      </option>
                      <option value="corp-finance" className="bg-black">
                        Corporate Finance Systemization
                      </option>
                      <option value="ma" className="bg-black">
                        M&A Transaction Automation
                      </option>
                      <option value="pe" className="bg-black">
                        Private Equity Intelligence
                      </option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white text-black p-4 text-xs font-semibold uppercase tracking-widest hover:bg-gray-200 transition-colors rounded-none"
                  >
                    Submit Demo Request
                  </button>
                </form>
              ) : (
                /* INTAKE PROTOCOL 2: General Enquiry Form */
                <form
                  className="space-y-6"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
                    <div className="bg-[#050505] p-4 space-y-2">
                      <label className="text-[9px] font-mono uppercase tracking-wider text-gray-500 block">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-transparent text-xs text-white focus:outline-none font-light"
                      />
                    </div>
                    <div className="bg-[#050505] p-4 space-y-2">
                      <label className="text-[9px] font-mono uppercase tracking-wider text-gray-500 block">
                        Company *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-transparent text-xs text-white focus:outline-none font-light"
                      />
                    </div>
                  </div>
                  <div className="border border-white/10 bg-[#050505] p-4 space-y-2">
                    <label className="text-[9px] font-mono uppercase tracking-wider text-gray-500 block">
                      Secure Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full bg-transparent text-xs text-white focus:outline-none font-light"
                    />
                  </div>
                  <div className="border border-white/10 bg-[#050505] p-4 space-y-2">
                    <label className="text-[9px] font-mono uppercase tracking-wider text-gray-500 block">
                      Message Parameters *
                    </label>
                    <textarea
                      rows={4}
                      required
                      className="w-full bg-transparent text-xs text-white focus:outline-none font-light resize-none"
                      placeholder="Transmit requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white text-black p-4 text-xs font-semibold uppercase tracking-widest hover:bg-gray-200 transition-colors rounded-none"
                  >
                    Transmit Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Block Channels & Location Framework (Takes 5 columns) */}
          <div className="lg:col-span-5 space-y-10">
            {/* Financial Ledger Table UI Routes */}
            <div className="border-t border-l border-white/5 font-mono text-[11px]">
              {/* Partnership Pipeline */}
              <div className="p-6 border-r border-b border-white/5 bg-white/[0.005] space-y-2">
                <div className="flex items-center gap-2 text-white/40 uppercase tracking-wider text-[10px]">
                  <Building size={12} /> <span>Partnership Enquiry</span>
                </div>
                <p className="font-sans text-xs text-gray-400 font-light">
                  Prospective ecosystem connections or advisory alignments:
                </p>
                <a
                  href="mailto:partnerships@zoron.ai"
                  className="text-white hover:underline block pt-1 font-mono"
                >
                  partnerships@zoron.ai
                </a>
              </div>

              {/* Media Desk */}
              <div className="p-6 border-r border-b border-white/5 bg-white/[0.005] space-y-2">
                <div className="flex items-center gap-2 text-white/40 uppercase tracking-wider text-[10px]">
                  <Mail size={12} /> <span>Press / Media Desk</span>
                </div>
                <p className="font-sans text-xs text-gray-400 font-light">
                  Communications channels or corporate asset library
                  documentation:
                </p>
                <div className="flex justify-between items-center pt-1">
                  <a
                    href="mailto:press@zoron.ai"
                    className="text-white hover:underline font-mono"
                  >
                    press@zoron.ai
                  </a>
                  <button
                    type="button"
                    className="text-[9px] uppercase tracking-wider border border-white/10 px-2 py-0.5 bg-black text-gray-400 hover:text-white flex items-center gap-1"
                  >
                    <ArrowDownToLine size={10} /> Press Kit
                  </button>
                </div>
              </div>

              {/* Recruitment */}
              <div className="p-6 border-r border-b border-white/5 bg-white/[0.005] space-y-2">
                <div className="flex items-center gap-2 text-white/40 uppercase tracking-wider text-[10px]">
                  <Briefcase size={12} /> <span>Careers Gateway</span>
                </div>
                <p className="font-sans text-xs text-gray-400 font-light">
                  Review open quantitative development profiles or machine
                  engineering streams:
                </p>
                <a
                  href="/careers"
                  className="text-white hover:underline block pt-1 font-mono"
                >
                  zoron.ai/careers →
                </a>
              </div>
            </div>

            {/* Registry Physical Footprint & Map Frame */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white/40 font-mono text-[10px] uppercase tracking-wider">
                <MapPin size={12} /> <span>Office / Location Details</span>
              </div>
              <div className="text-xs text-gray-400 font-light space-y-1">
                <p className="text-white font-medium">Zoron Systems Limited</p>
                <p>12 Lower Thames Street, EC3R 6EA</p>
                <p>London, United Kingdom</p>
                <p className="pt-2 font-mono text-[10px] text-gray-500">
                  T: +44 (0) 20 7946 0192 // E: general.enquiries@zoron.ai
                </p>
              </div>

              {/* Monochromatic Dark Embedded Map Integration */}
              <div className="w-full aspect-video border border-white/10 filter grayscale contrast-[1.1] brightness-[0.6] opacity-75">
                <iframe
                  title="Zoron HQ Map Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.2427847721864!2d-0.08630092337965997!3d51.50875707181347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876035186b86cf3%3A0x6bba843b17162b2e!2sLower%20Thames%20St%2C%20London!2e0!3m2!1sen!2suk!4v1710000000000!5m2!1sen!2suk"
                  className="w-full h-full border-none"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styled Native Vector Inserter */}
      <style>{`
        .native-select-custom {
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' h='12' fill='none' stroke='rgb(156,163,175)' stroke-width='1.5'><path d='M3 4.5l3 3 3-3'/></svg>");
          background-repeat: no-repeat;
          background-position: right 14px center;
        }
      `}</style>
    </main>
  );
}