import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Crown, Code2, MessageCircle, ArrowRight } from 'lucide-react';
import { PRICING_PLANS, PREMIUM_PLANS, SCRIPT_PLAN, CONTACT_INFO } from '../constants';
import { PricingPlan } from '../types';
import { generateWALink, getOrderMessage } from '../services/whatsapp';

const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sewa' | 'premium'>('sewa');

  const handleManualBuy = (plan: PricingPlan) => {
     const msg = getOrderMessage(plan.name, plan.price, plan.type);
     const link = generateWALink(CONTACT_INFO.ownerPhone, msg);
     window.open(link, '_blank');
  };

  const renderCard = (plan: PricingPlan, index: number) => {
    const isPremium = plan.type === 'premium';
    const isYearly = plan.duration.includes('365');
    
    return (
      <motion.div
        key={plan.id}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -10 }}
        className={`relative p-8 rounded-[2rem] border flex flex-col h-full group transition-all ${
          plan.isPopular
            ? 'bg-zinc-900 border-zinc-600 shadow-2xl z-10'
            : 'bg-black border-zinc-800 hover:border-zinc-600'
        }`}
      >
        {plan.isPopular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="flex items-center gap-1 bg-white text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
              <Crown className="w-3 h-3" /> Most Popular
            </span>
          </div>
        )}

        <div className="mb-8 pt-4">
          <h3 className={`text-xs font-bold mb-3 uppercase tracking-[0.2em] ${isPremium ? 'text-zinc-300' : 'text-zinc-500'}`}>
            {plan.name}
          </h3>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-white font-display tracking-tight">{plan.price}</span>
            <span className="text-zinc-600 text-sm font-mono">/{plan.duration}</span>
          </div>
          {isYearly && (
             <div className="mt-3 inline-block px-3 py-1 bg-zinc-800 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
                Save 73%
             </div>
          )}
        </div>

        <ul className="space-y-4 mb-10 flex-1">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="mt-0.5 p-0.5 rounded-full shrink-0 bg-zinc-800">
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-zinc-400 text-sm font-medium">{feature}</span>
            </li>
          ))}
          {isYearly && (
              <li className="flex items-start gap-3">
              <div className="mt-0.5 p-0.5 rounded-full shrink-0 bg-zinc-700">
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-white font-bold text-sm">Lifetime Feature Updates</span>
            </li>
          )}
        </ul>

        <button
            onClick={() => handleManualBuy(plan)}
            className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 uppercase text-xs tracking-widest ${
            plan.isPopular
                ? 'bg-white text-black hover:bg-zinc-200 shadow-lg'
                : 'bg-zinc-900 text-white hover:bg-zinc-800 border border-zinc-800'
            }`}
        >
            {isPremium ? <Zap className="w-4 h-4" /> : <MessageCircle className="w-4 h-4" />}
            {isPremium ? 'Get Premium' : 'Order Now'}
        </button>
      </motion.div>
    );
  };

  return (
    <div className="bg-black py-24 border-t border-zinc-900">
    {/* Rent & Premium Section */}
    <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
      <div className="text-center mb-20">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white font-display mb-8 tracking-tight"
        >
          Investment <span className="text-zinc-600">Plans</span>
        </motion.h2>
        
        {/* Toggle Switch */}
        <div className="inline-flex p-1.5 bg-zinc-900 rounded-full border border-zinc-800 relative">
          <div className={`absolute top-1.5 bottom-1.5 w-[50%] bg-zinc-700 rounded-full transition-all duration-300 shadow-lg ${activeTab === 'premium' ? 'left-[49%]' : 'left-[1%]'}`}></div>
          <button
            onClick={() => setActiveTab('sewa')}
            className={`relative z-10 px-10 py-3 rounded-full text-sm font-bold transition-all uppercase tracking-wide ${
              activeTab === 'sewa' ? 'text-white' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Standard
          </button>
          <button
            onClick={() => setActiveTab('premium')}
            className={`relative z-10 px-10 py-3 rounded-full text-sm font-bold transition-all uppercase tracking-wide ${
              activeTab === 'premium' ? 'text-white' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Premium VIP
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {activeTab === 'sewa' 
          ? PRICING_PLANS.map((plan, i) => renderCard(plan, i))
          : PREMIUM_PLANS.map((plan, i) => renderCard(plan, i))
        }
      </div>
    </section>

    {/* Script Sale Section */}
    <section id="script" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-zinc-900 rounded-[3rem] p-8 md:p-16 border border-zinc-800 relative overflow-hidden group hover:border-zinc-600 transition-all"
        >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -z-10"></div>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black border border-zinc-700 text-white text-xs font-bold mb-8 uppercase tracking-widest">
                        <Code2 className="w-4 h-4" />
                        <span>Developers Edition</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">Source Code Ownership</h2>
                    <p className="text-zinc-400 mb-10 leading-relaxed text-lg font-light">
                        Miliki kontrol penuh atas infrastruktur Anda. 
                        Termasuk modul lengkap, dokumentasi API, dan <strong>Update Fitur Selamanya</strong> secara gratis.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-8">
                        {SCRIPT_PLAN.features.map((feat, i) => (
                            <span key={i} className="flex items-center gap-3 text-sm text-zinc-300 font-medium">
                                <div className="p-1 bg-zinc-800 rounded-full">
                                    <Check className="w-3 h-3 text-white" />
                                </div>
                                {feat}
                            </span>
                        ))}
                    </div>
                </div>
                
                <div className="bg-black p-10 rounded-[2.5rem] border border-zinc-800 flex flex-col items-center text-center relative shadow-2xl">
                    <p className="text-zinc-500 text-xs mb-3 font-bold uppercase tracking-widest">One-Time License</p>
                    <div className="mb-8">
                        <span className="text-6xl font-bold text-white tracking-tighter font-display">{SCRIPT_PLAN.price}</span>
                        <span className="text-cyan-400 text-xs font-bold block mt-3 tracking-[0.2em] uppercase">Lifetime Access</span>
                    </div>
                    
                    <button 
                         onClick={() => handleManualBuy(SCRIPT_PLAN)}
                        className="w-full py-5 bg-white hover:bg-zinc-200 text-black rounded-2xl font-bold transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] flex items-center justify-center gap-3 uppercase tracking-wide text-sm"
                    >
                        <MessageCircle className="w-5 h-5" /> Buy Source Code
                    </button>
                    <p className="mt-4 text-xs text-zinc-600">Secure payment via WhatsApp</p>
                </div>
            </div>
        </motion.div>
    </section>
    </div>
  );
};

export default Pricing;