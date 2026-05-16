// import { motion } from 'framer-motion'

// export default function Team() {
//   const team = [
//     {
//       name: 'Alex Chen',
//       role: 'Chief Executive Officer',
//       bio: '20+ years in enterprise intelligence and institutional markets.',
//       image: '👤',
//     },
//     {
//       name: 'Maria Rodriguez',
//       role: 'Chief Technology Officer',
//       bio: 'Former Head of Engineering at leading data infrastructure company.',
//       image: '👩‍💼',
//     },
//     {
//       name: 'James Mitchell',
//       role: 'VP Product',
//       bio: 'Built intelligence platforms for Fortune 500 institutions.',
//       image: '👨‍💼',
//     },
//     {
//       name: 'Sarah Thompson',
//       role: 'VP Business Development',
//       bio: 'Deep relationships across institutional and enterprise markets.',
//       image: '👩‍💻',
//     },
//   ]

//   const advisors = [
//     'Former Head of Global M&A at Goldman Sachs',
//     'Director of Corporate Strategy at McKinsey',
//     'Chief Information Security Officer at major fintech',
//     'VP of Product at leading data analytics company',
//   ]

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.2,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5 },
//     },
//   }

//   return (
//     <section id="team" className="relative py-20 md:py-32 overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-transparent to-transparent pointer-events-none" />

//       <div className="section-container relative z-10">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-20"
//         >
//           <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
//             Our Team
//           </p>
//           <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
//             Built by Experts
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
//             ZORON's team brings decades of combined experience in enterprise, intelligence, and institutional markets.
//           </p>
//         </motion.div>

//         {/* Team Members */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
//         >
//           {team.map((member, idx) => (
//             <motion.div
//               key={idx}
//               variants={itemVariants}
//               whileHover={{ y: -8 }}
//               className="glass p-8 rounded-xl border border-border/50 group hover:border-primary/50 transition-all text-center"
//             >
//               <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
//                 {member.image}
//               </div>
//               <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
//               <p className="text-sm text-primary font-medium mb-4">{member.role}</p>
//               <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Advisors Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="glass p-12 rounded-2xl border border-border/50"
//         >
//           <div className="text-center mb-12">
//             <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
//               Advisory Board
//             </p>
//             <h3 className="text-2xl md:text-3xl font-bold text-foreground">
//               Supported by institutional leaders
//             </h3>
//           </div>

//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="grid grid-cols-1 md:grid-cols-2 gap-6"
//           >
//             {advisors.map((advisor, idx) => (
//               <motion.div
//                 key={idx}
//                 variants={itemVariants}
//                 className="flex items-center space-x-4 p-4 rounded-lg hover:bg-secondary/30 transition-colors"
//               >
//                 <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0" />
//                 <p className="text-foreground">{advisor}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>

//         {/* Credentials */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
//         >
//           {[
//             { stat: '150+', label: 'Years combined experience' },
//             { stat: '50+', label: 'Enterprise clients' },
//             { stat: '$100M+', label: 'Data processed daily' },
//             { stat: '99.99%', label: 'Platform uptime' },
//           ].map((item, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: idx * 0.1 }}
//             >
//               <p className="text-2xl md:text-3xl font-bold text-primary mb-2">{item.stat}</p>
//               <p className="text-sm text-muted-foreground">{item.label}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }
import { motion } from 'framer-motion'
import { Linkedin, Target, Shield, Eye, Users2, Sparkles } from 'lucide-react'

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

const team = [
  {
    name: "Alexander Vance",
    title: "Co-Founder & CEO",
    bio: "Former M&A Director at Goldman Sachs with over 15 years of transaction experience across technology and industrial sectors. Pioneered internal data-automation initiatives for cross-border private equity deals.",
    linkedin: "https://linkedin.com",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=800" // Premium, editorial professional headshot placeholder
  },
  {
    name: "Dr. Elena Rostova",
    title: "Co-Founder & Chief Scientist",
    bio: "Spent a decade building machine learning frameworks for high-frequency trading networks at quantitative funds. Holds a PhD in Computer Science with a specialization in Multi-Agent Reasoning Systems.",
    linkedin: "https://linkedin.com",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=800"
  },
  {
    name: "Marcus Sterling",
    title: "Head of Financial Architecture",
    bio: "Ex-CFO and Big 4 Audit Partner. Ensured financial models and automated reporting protocols map directly into strict international financial compliance standards including IFRS and GAAP.",
    linkedin: "https://linkedin.com",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600&h=800"
  }
]

export default function AboutSection() {
  return (
    <section id="team" className="relative py-24 md:py-32 bg-[#050505] text-white border-t border-white/10 overflow-hidden">
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
        <div className="mb-32">
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

        {/* Leadership Team Section */}
        <div>
          <div className="flex items-center gap-2 mb-12">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-white/50">Leadership Team</h3>
          </div>

          {/* Sharp, Editorial Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group border border-white/10 bg-white/[0.01] overflow-hidden hover:border-white/20 transition-colors flex flex-col"
              >
                {/* 3:4 Aspect Ratio Headshot Container */}
                <div className="aspect-[3/4] overflow-hidden bg-zinc-900 border-b border-white/10 relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700" 
                  />
                  {/* Subtle vignette layer overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                </div>

                {/* Identity Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-medium tracking-tight text-white">
                        {member.name}
                      </h4>
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-white/30 hover:text-white transition-colors"
                      >
                        <Linkedin size={14} />
                      </a>
                    </div>
                    <p className="text-xs tracking-wider text-gray-400 uppercase font-mono mb-4">
                      {member.title}
                    </p>
                    <p className="text-xs text-gray-400 leading-relaxed font-light">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
