import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Code2, Zap, Terminal, ShieldAlert, Cpu, Globe, Users, Star } from 'lucide-react';
import { STANDARD_PLANS, ADVANCED_PLANS, VIP_PLANS, SCRIPT_PLAN, CONTACT_INFO } from '../constants';
import { PricingPlan } from '../types';
import { generateWALink, getOrderMessage } from '../services/whatsapp';

const Pricing: React.FC = () => {
  const [tier, setTier] = useState<'standard' | 'premium' | 'vip'>('premium');

  const plans = tier === 'standard' ? STANDARD_PLANS : tier === 'premium' ? ADVANCED_PLANS : VIP_PLANS;

  const handleManualBuy = (plan: PricingPlan) => {
     const msg = getOrderMessage(plan.name, plan.price, plan.type);
     const link = generateWALink(CONTACT_INFO.ownerPhone, msg);
     window.open(link, '_blank');
  };

  return (
    <section id="pricing" className="bg-black py-40 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="text-7xl md:text-[10rem] font-bold text-white font-display tracking-tighter-extra mb-12"
          >
            ACCESS <span className="text-zinc-800 uppercase">Tiers</span>
          </motion.h2>

          <div className="inline-flex p-2.5 bg-zinc-950 border border-zinc-900 rounded-[3rem] shadow-3xl">
            {(['standard', 'premium', 'vip'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTier(t)}
                className={`px-14 py-4 rounded-[2.5rem] text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500 ${tier === t ? 'bg-white text-black shadow-2xl' : 'text-zinc-600 hover:text-white'}`}
              >
                {t}
              </button>
            ))}
          </div>
          
          {tier === 'vip' && (
             <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-8 text-zinc-500 text-sm font-mono tracking-widest uppercase flex items-center justify-center gap-3">
                <Star className="w-4 h-4 text-yellow-500 fill-current" /> Auto-Premium for ALL Group Members <Star className="w-4 h-4 text-yellow-500 fill-current" />
             </motion.p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 items-stretch mb-40">
          <AnimatePresence mode="wait">
            {plans.map((plan, i) => (
              <motion.div
                key={`${tier}-${plan.id}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -15 }}
                className={`relative p-12 rounded-[5rem] border flex flex-col h-full bg-zinc-950 border-zinc-900 hover:border-zinc-600 transition-all duration-700 group shadow-3xl overflow-hidden`}
              >
                {plan.isPopular && <div className="absolute top-0 right-10 bg-white text-black text-[9px] font-bold px-10 py-3 rounded-b-3xl uppercase tracking-widest shadow-2xl">Optimal Tier</div>}
                
                <div className="mb-14">
                  <div className="flex items-center gap-3 mb-8">
                      <Terminal className="w-4 h-4 text-zinc-800" />
                      <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-zinc-700 font-mono">{plan.name}</span>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <span className="text-7xl font-bold text-white tracking-tighter-extra font-display">{plan.price}</span>
                    <span className="text-zinc-800 text-xs font-mono">/{plan.duration}</span>
                  </div>
                </div>

                <div className="space-y-8 mb-16 flex-1">
                  <div className="text-[10px] text-zinc-800 uppercase font-bold tracking-[0.3em] border-b border-zinc-900/50 pb-5 flex justify-between">
                      <span>Neural Permissions</span>
                      <span className="text-zinc-700">v4.5.1</span>
                  </div>
                  <ul className="space-y-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-6">
                        <div className="w-1.5 h-1.5 bg-zinc-800 rounded-full mt-2 group-hover:bg-white transition-colors" />
                        <span className="text-zinc-500 text-sm font-light leading-relaxed group-hover:text-zinc-300 transition-colors font-sans">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button onClick={() => handleManualBuy(plan)} className="w-full py-8 bg-transparent border border-zinc-800 text-white rounded-[3rem] font-bold uppercase text-[10px] tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center gap-5 group">
                  Initialize Node <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* MARCELINE SCRIPT CORE */}
        <div id="script" className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-16 md:p-32 bg-white rounded-[6rem] relative overflow-hidden shadow-3xl">
                <div className="absolute top-0 right-0 p-20 opacity-[0.05] rotate-12">
                    <Cpu className="w-[35rem] h-[35rem] text-black" />
                </div>

                <div className="grid md:grid-cols-2 gap-24 items-center relative z-10">
                    <div>
                        <div className="inline-flex items-center gap-4 px-8 py-4 bg-black text-white rounded-full mb-12 text-[10px] font-bold uppercase tracking-widest shadow-2xl">
                            <ShieldAlert className="w-4 h-4" /> REPOSITORY_LICENSE_ACTIVE
                        </div>
                        <h2 className="text-6xl md:text-[8.5rem] font-bold text-black mb-10 font-display tracking-tighter-extra leading-[0.85]">MARCELINE<br />CORE_SRC</h2>
                        <p className="text-zinc-500 text-xl font-light mb-16 leading-relaxed max-w-lg">
                            Dapatkan akses tak terbatas ke seluruh arsitektur Marceline Assistant. Modular, cepat, dan siap untuk deployment mandiri selamanya.
                        </p>
                        <div className="flex flex-wrap gap-6">
                            {['No_Encryption', 'Native_NodeJS', 'ESM_Module', 'Low_Memory'].map(tag => (
                                <span key={tag} className="px-8 py-3 bg-zinc-100 rounded-3xl text-[11px] font-mono text-zinc-500 font-bold uppercase tracking-widest border border-zinc-200">{tag}</span>
                            ))}
                        </div>
                    </div>
                    
                    <div className="bg-black p-16 md:p-24 rounded-[5rem] text-center shadow-3xl flex flex-col items-center">
                        <span className="text-[10px] text-zinc-800 uppercase tracking-[0.5em] block mb-14 font-mono">Infrastructure Acquisition</span>
                        <div className="text-8xl lg:text-[11rem] font-bold text-white font-display tracking-tighter-extra mb-20">{SCRIPT_PLAN.price}</div>
                        <button onClick={() => handleManualBuy(SCRIPT_PLAN)} className="w-full py-9 bg-white text-black rounded-[3rem] font-bold uppercase text-[11px] tracking-[0.5em] hover:bg-zinc-200 transition-all flex items-center justify-center gap-8 shadow-2xl">
                            ACQUIRE CORE <Globe className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;