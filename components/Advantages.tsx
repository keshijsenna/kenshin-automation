import React from 'react';
import { motion } from 'framer-motion';
import { ADVANTAGES_DATA } from '../constants';

const Advantages: React.FC = () => {
  return (
    <section className="py-24 bg-black relative border-t border-zinc-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white font-['Space_Grotesk'] tracking-tight"
          >
            Why Choose <span className="text-zinc-600">Kenshin?</span>
          </motion.h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto font-light">
            Infrastruktur server premium yang membedakan kualitas kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ADVANTAGES_DATA.map((adv, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-zinc-900/20 border border-zinc-800 hover:border-zinc-600 transition-all group flex flex-col items-center text-center hover:bg-zinc-900/40"
            >
              <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center mb-6 group-hover:border-white/20 transition-colors duration-300 border border-zinc-800">
                <adv.icon className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 font-['Space_Grotesk']">{adv.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">
                {adv.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;