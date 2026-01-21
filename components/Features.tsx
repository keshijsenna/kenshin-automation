import React from 'react';
import { motion } from 'framer-motion';
import { TECHNICAL_SPECS } from '../constants';
import { Terminal, Command, Layers, Cpu } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-40 bg-black border-t border-zinc-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Header */}
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-end mb-40">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
                <div className="inline-flex items-center gap-4 px-5 py-2.5 bg-zinc-950 border border-zinc-900 rounded-full mb-10">
                    <Terminal className="w-5 h-5 text-white" />
                    <span className="text-[10px] font-mono uppercase tracking-widest-extra text-zinc-500">Infrastructure_Manifesto_v4</span>
                </div>
                <h2 className="text-5xl md:text-8xl font-bold text-white font-display mb-10 tracking-tighter-extra leading-[0.85]">
                    ENGINEERED FOR<br />
                    <span className="text-zinc-800">PERFECTION</span>
                </h2>
                <p className="text-zinc-500 text-xl font-light leading-relaxed max-w-xl font-sans">
                    Arsitektur Marceline Assistant dirancang dengan ketelitian tinggi. 
                    Setiap modul dioptimalkan untuk skalabilitas tanpa batas dan keamanan absolut.
                </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-10"
            >
                {[
                  { icon: Command, title: "Node Ready", desc: "Horizontal scaling across global VPS instances." },
                  { icon: Cpu, title: "Zero Leak", desc: "Atomic memory management for 100% stability." }
                ].map((item, idx) => (
                  <div key={idx} className="p-10 border border-zinc-900 rounded-[3rem] bg-zinc-950/30 hover:bg-white hover:border-white transition-all duration-700 group hover:shadow-[0_40px_100px_rgba(255,255,255,0.05)]">
                    <item.icon className="w-8 h-8 text-zinc-800 mb-8 group-hover:text-black transition-colors" />
                    <h4 className="text-white font-bold mb-3 font-display text-2xl group-hover:text-black tracking-tight">{item.title}</h4>
                    <p className="text-sm text-zinc-500 group-hover:text-zinc-700 leading-relaxed font-sans">{item.desc}</p>
                  </div>
                ))}
            </motion.div>
        </div>

        {/* SPECIFICATIONS MATRIX */}
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-zinc-950/50 border border-zinc-900 rounded-[4rem] p-12 lg:p-16 relative overflow-hidden shadow-2xl backdrop-blur-sm"
        >
            <div className="absolute top-0 right-0 p-16 opacity-[0.03]">
                <Layers className="w-80 h-80 text-white" />
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8 border-b border-zinc-900/50 pb-10">
              <h3 className="text-2xl font-bold text-white font-display tracking-tight flex items-center gap-5">
                  <span className="w-3 h-3 bg-white rounded-full animate-pulse shadow-[0_0_15px_white]"></span>
                  Marceline_Global_Inventory
              </h3>
              <div className="flex gap-4">
                <span className="px-5 py-2 bg-white text-black text-[9px] font-bold uppercase tracking-widest rounded-full font-mono">50+ Specs</span>
                <span className="px-5 py-2 border border-zinc-800 text-zinc-600 text-[9px] font-bold uppercase tracking-widest rounded-full font-mono">Verified_PROD</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-6 gap-x-12 relative z-10">
                {TECHNICAL_SPECS.map((spec, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: i * 0.01 }}
                        className="flex items-center gap-4 group"
                    >
                        <span className="text-[10px] font-mono text-zinc-800 group-hover:text-white transition-colors duration-500">{(i + 1).toString().padStart(2, '0')}</span>
                        <span className="text-xs text-zinc-500 group-hover:text-zinc-100 transition-all duration-500 cursor-default whitespace-nowrap font-sans font-light">{spec}</span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;