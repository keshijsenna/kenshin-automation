import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Infinity as InfinityIcon } from 'lucide-react';
import { COMPARISON_DATA } from '../constants';

const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-black relative border-t border-zinc-900">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-3xl md:text-5xl font-bold text-white font-display mb-4"
          >
            Plan <span className="text-zinc-600">Comparison</span>
          </motion.h2>
          <p className="text-zinc-400 max-w-xl mx-auto font-light">
            Analisa perbedaan fitur antara paket Standard dan Premium.
          </p>
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/20"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-800 bg-zinc-900/50">
                <th className="p-6 text-zinc-300 font-bold tracking-wide uppercase text-xs">Features</th>
                <th className="p-6 text-center text-zinc-500 font-bold w-1/4 uppercase text-xs">Standard</th>
                <th className="p-6 text-center text-white font-bold w-1/4 uppercase text-xs bg-zinc-800/50">Premium VIP</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_DATA.map((row, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-zinc-800/50 hover:bg-zinc-900/30 transition-colors group"
                >
                  <td className="p-5 text-zinc-300 font-medium text-sm">{row.feature}</td>
                  
                  {/* Standard Column */}
                  <td className="p-5 text-center text-zinc-500">
                    {typeof row.sewa === 'boolean' ? (
                      row.sewa ? <Check className="w-4 h-4 text-zinc-600 mx-auto" /> : <X className="w-4 h-4 text-red-900/30 mx-auto" />
                    ) : (
                      <span className="text-xs font-mono">{row.sewa}</span>
                    )}
                  </td>
                  
                  {/* Premium Column */}
                  <td className="p-5 text-center bg-zinc-900/20 group-hover:bg-zinc-800/30 transition-colors border-l border-zinc-800/50">
                    {typeof row.premium === 'boolean' ? (
                      row.premium ? <Check className="w-4 h-4 text-white mx-auto" /> : <X className="w-4 h-4 text-red-500 mx-auto" />
                    ) : (
                      <span className="text-white font-bold text-xs flex items-center justify-center gap-2">
                         {row.premium === 'Unlimited' && <InfinityIcon className="w-3 h-3" />}
                         {row.premium}
                      </span>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;