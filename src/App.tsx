/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Shield, Smartphone, Zap, AlertTriangle, ChevronRight, Activity, Database } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans flex flex-col selection:bg-red-600 selection:text-white">
      {/* Header / Nav Area */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-6 border-b border-white/10 sticky top-0 bg-[#050505]/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-red-600 rounded-sm flex items-center justify-center font-black text-xs shadow-[0_0_20px_rgba(220,38,38,0.4)]">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="uppercase tracking-[0.2em] text-[10px] font-black leading-none mb-1">SHIELD</span>
            <span className="uppercase tracking-widest text-[8px] font-bold opacity-50">AI Defense Protocol</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 text-[10px] uppercase tracking-[0.2em] font-bold">
          <div className="flex items-center gap-2 text-red-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            Emergency Alert: Status Active
          </div>
          <div className="opacity-40">Sync Protocol: Secure</div>
        </div>
      </nav>

      <main className="flex-1 flex flex-col lg:flex-row">
        {/* Left Column: Bold Hook */}
        <section className="w-full lg:w-7/12 p-8 md:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10 relative overflow-hidden">
          {/* Subtle background text */}
          <div className="absolute -left-10 -top-10 text-[20vw] font-black opacity-[0.02] select-none pointer-events-none uppercase tracking-tighter leading-none">
            DEFEND
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 bg-red-600/10 border border-red-600/30 text-red-500 text-[11px] px-4 py-1.5 uppercase tracking-[0.2em] font-black w-fit"
          >
            <AlertTriangle className="w-3 h-3" />
            Security Intelligence Report
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[12vw] lg:text-[72px] xl:text-[92px] font-black leading-[0.88] tracking-tighter uppercase mb-10"
          >
            Every day, AI scammers steal <br />
            <span className="text-red-600 drop-shadow-[0_0_30px_rgba(220,38,38,0.2)]">₹4 crore</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl lg:text-2xl text-neutral-400 font-medium max-w-xl leading-snug"
          >
            People who thought they were too smart to fall for it are losing everything. 
            <span className="text-white block mt-2">Expose them in 5 minutes.</span>
          </motion.p>

          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 flex items-center gap-6"
          >
            <div className="h-[2px] w-20 bg-red-600"></div>
            <span className="text-[12px] uppercase tracking-[0.25em] text-red-500 font-black italic">
              Download the 27-point checklist below
            </span>
          </motion.div>
        </section>

        {/* Right Column: Benefits & Form */}
        <section className="w-full lg:w-5/12 bg-neutral-900/10 flex flex-col relative">
          <div className="flex-1 p-8 md:p-20 flex flex-col justify-center gap-12">
            <div className="space-y-10">
              <BenefitItem 
                icon={<Shield className="w-6 h-6 text-red-600" />}
                title="Catch Any Scam" 
                description="Scan websites, WhatsApp messages, or 'AI investments' using 27 forensic red flags." 
                delay={0.7}
              />
              <BenefitItem 
                icon={<Smartphone className="w-6 h-6 text-red-600" />}
                title="Outsmart Deepfakes" 
                description="Identify fake voice calls and AI tools that even major banks don't warn you about." 
                delay={0.8}
              />
              <BenefitItem 
                icon={<Zap className="w-6 h-6 text-red-600" />}
                title="Instant Verdict" 
                description="No technical skills required. Get results in 5 minutes. Print it or share it instantly." 
                delay={0.9}
              />
            </div>

            {/* CTA Section */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="relative"
            >
              <form className="flex flex-col gap-4">
                <div className="relative group">
                  <input 
                    type="email" 
                    placeholder="ENTER YOUR EMAIL FOR THE CHECKLIST"
                    className="w-full bg-neutral-900 border border-white/10 px-6 py-5 text-sm text-white placeholder:text-neutral-700 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all uppercase tracking-widest font-bold"
                  />
                  <div className="absolute top-0 right-0 h-full flex items-center pr-4 opacity-30 group-focus-within:opacity-100 transition-opacity">
                    <ChevronRight className="w-4 h-4 text-red-600" />
                  </div>
                </div>
                <button className="relative overflow-hidden group bg-red-600 hover:bg-red-700 text-white font-black uppercase py-6 text-sm tracking-[0.2em] shadow-[0_10px_40px_rgba(220,38,38,0.3)] transition-all">
                  <span className="relative z-10">Send the 27-Point Checklist →</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                </button>
              </form>
              <p className="text-[10px] text-center mt-6 text-neutral-600 uppercase tracking-[0.2em] font-bold">
                🔒 Secure Infrastructure. Zero Third-Party Sharing.
              </p>
            </motion.div>
          </div>
          
          {/* Micro-data bottom rail */}
          <div className="p-8 border-t border-white/5 grid grid-cols-2 gap-8 bg-[#050505]/40">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex items-center gap-3"
            >
              <Database className="w-4 h-4 text-neutral-600" />
              <div>
                <div className="text-[9px] text-neutral-600 uppercase font-black tracking-widest">Active DB</div>
                <div className="text-[11px] font-mono opacity-80 uppercase">SCAN_ENGINE_v4.2.1</div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="flex items-center gap-3 justify-end text-right"
            >
              <div>
                <div className="text-[9px] text-neutral-600 uppercase font-black tracking-widest">Live Detections</div>
                <div className="text-[11px] font-mono text-red-500 font-bold">142,892 CASES</div>
              </div>
              <Activity className="w-4 h-4 text-red-600 animate-pulse" />
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer Bar */}
      <footer className="bg-red-600 px-6 md:px-12 py-4 flex flex-col md:row justify-between items-center gap-4 md:gap-0 sticky bottom-0 z-50">
        <span className="text-[11px] font-black uppercase tracking-[0.3em] text-black">
          AI SCAM DETECTOR / AI POWERED SCANNER / OFFICIAL CHECKLIST
        </span>
        <div className="flex gap-8 text-black font-black text-[11px] uppercase tracking-[0.1em]">
          <span className="flex items-center gap-2 hover:opacity-80 cursor-pointer transition-opacity">
            <span className="w-2 h-2 rounded-full bg-black"></span>
            Real-Time Updates
          </span>
          <span className="flex items-center gap-2 hover:opacity-80 cursor-pointer transition-opacity">
            <span className="w-2 h-2 rounded-full bg-black"></span>
            Verified Intelligence
          </span>
        </div>
      </footer>
    </div>
  );
}

function BenefitItem({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex gap-6 group"
    >
      <div className="flex-shrink-0 w-12 h-12 bg-neutral-900 border border-white/5 flex items-center justify-center transition-all group-hover:border-red-600/50 group-hover:bg-red-600/5">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-black uppercase tracking-[0.15em] mb-2 group-hover:text-red-500 transition-colors">{title}</h3>
        <p className="text-[13px] md:text-sm text-neutral-500 leading-relaxed font-medium group-hover:text-neutral-400 transition-colors">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
