import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FEATURES } from '../constants';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 50 } }
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 relative bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white font-display tracking-tight"
          >
            Core <span className="text-zinc-500">Capabilities</span>
          </motion.h2>
          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto text-lg font-light">
            Dibangun dengan teknologi automasi tercanggih untuk efisiensi maksimal.
          </p>
        </div>

        <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900/60 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-bl-3xl -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              
              <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-black border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-white/20 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-display">{feature.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                    {feature.description}
                  </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;