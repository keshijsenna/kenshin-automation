import React from 'react';
import { motion } from 'framer-motion';
import { Users, Youtube, ExternalLink } from 'lucide-react';
import { STATISTICS, TESTIMONIALS, CONTACT_INFO } from '../constants';

const Community: React.FC = () => {
  return (
    <section className="py-24 bg-black relative border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Statistics Grid */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24"
        >
          {STATISTICS.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-zinc-900/20 border border-zinc-800 backdrop-blur-sm hover:border-zinc-600 transition-colors"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2 font-display tracking-tight">{stat.value}</div>
              <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Join Community */}
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-6">
              Join the <br />
              <span className="text-zinc-600">Ecosystem</span>
            </h2>
            <p className="text-zinc-400 mb-8 text-lg leading-relaxed font-light">
              Bergabunglah dengan ribuan administrator grup lainnya. Dapatkan akses ke update eksklusif, tutorial, dan dukungan langsung dari komunitas.
            </p>
            
            <div className="space-y-4">
              <a 
                href={CONTACT_INFO.groupLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:bg-zinc-900 transition-all group"
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-zinc-800 rounded-xl flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all text-white">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Official WhatsApp Group</h4>
                    <p className="text-zinc-500 text-sm">Community Discussion</p>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-zinc-600 group-hover:text-white" />
              </a>

              <a 
                href={CONTACT_INFO.youtubeLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:bg-zinc-900 transition-all group"
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-zinc-800 rounded-xl flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all text-white">
                    <Youtube className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">YouTube Channel</h4>
                    <p className="text-zinc-500 text-sm">Tutorials & Updates</p>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-zinc-600 group-hover:text-white" />
              </a>
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="relative"
          >
             <div className="absolute -inset-10 bg-zinc-800/20 rounded-[3rem] blur-3xl -z-10"></div>
             <div className="space-y-6">
                {TESTIMONIALS.map((testi, idx) => (
                    <motion.div 
                        key={idx}
                        whileHover={{ x: -10 }}
                        className="p-8 rounded-2xl bg-black border border-zinc-800 relative shadow-xl"
                    >
                        <div className="flex items-start gap-5">
                            <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white font-bold text-sm">
                                {testi.avatar}
                            </div>
                            <div>
                                <p className="text-zinc-300 italic mb-4 leading-relaxed text-sm font-light">"{testi.comment}"</p>
                                <h5 className="text-white font-bold text-base">{testi.name}</h5>
                                <span className="text-zinc-500 text-xs font-bold uppercase tracking-wider">{testi.role}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Community;