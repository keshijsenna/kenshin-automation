import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Zap, Shield, Globe, Cpu, Wifi, Clock as ClockIcon, Activity } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  const [visitors, setVisitors] = useState(1240);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Live visitor simulation
    const visitorInterval = setInterval(() => {
        setVisitors(prev => prev + (Math.random() > 0.5 ? 1 : -1));
    }, 3000);

    // Real-time clock
    const timeInterval = setInterval(() => {
        setTime(new Date());
    }, 1000);

    return () => {
        clearInterval(visitorInterval);
        clearInterval(timeInterval);
    };
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    });
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-black min-h-screen flex items-center">
      
      {/* Elegant Background - Minimalist */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,1))] z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-zinc-900/20 to-transparent blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Tech HUD Badges - Elegant Minimalist */}
            <div className="flex flex-wrap items-center gap-6 mb-10">
               {/* Visitor HUD */}
               <div className="flex items-center gap-3 group cursor-default">
                   <div className="relative">
                       <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-20 animate-ping"></span>
                       <div className="relative w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></div>
                   </div>
                   <div className="h-8 w-px bg-zinc-800 rotate-12 mx-1"></div>
                   <div className="flex flex-col">
                       <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Status</span>
                       <span className="text-xs font-mono text-zinc-300 flex items-center gap-2">
                          <span className="font-bold">{visitors.toLocaleString()}</span> ONLINE
                       </span>
                   </div>
               </div>

               {/* Clock HUD */}
               <div className="flex items-center gap-3 group cursor-default">
                   <ClockIcon className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" />
                   <div className="h-8 w-px bg-zinc-800 rotate-12 mx-1"></div>
                   <div className="flex flex-col">
                       <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">System Time</span>
                       <span className="text-xs font-mono text-zinc-300">
                          {formatTime(time)} <span className="text-zinc-600">UTC+7</span>
                       </span>
                   </div>
               </div>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold text-white leading-[1.0] font-display tracking-tight mb-8">
              FUTURE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600">
                AUTOMATION
              </span>
            </h1>
            
            <p className="text-lg text-zinc-400 max-w-lg leading-relaxed mb-12 font-light border-l border-zinc-800 pl-6">
              Kenshin Bot menghadirkan efisiensi tanpa batas. 
              Desain minimalis, performa maksimal, dan keamanan tingkat tinggi untuk komunitas eksklusif Anda.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="#pricing"
                className="group relative px-8 py-4 bg-white text-black font-bold rounded-none skew-x-[-10deg] hover:bg-zinc-200 transition-all overflow-hidden border border-white"
              >
                <div className="skew-x-[10deg] flex items-center gap-3">
                    DEPLOY NOW <ArrowRight className="w-5 h-5" />
                </div>
              </a>
              <a
                href={CONTACT_INFO.channelLink}
                target="_blank"
                rel="noreferrer"
                className="group relative px-8 py-4 bg-transparent text-white font-bold rounded-none skew-x-[-10deg] border border-zinc-700 hover:border-white transition-all overflow-hidden"
              >
                 <div className="skew-x-[10deg] flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" /> 
                    JOIN CHANNEL
                 </div>
              </a>
            </div>

            {/* Bottom Stats - Ultra Clean */}
            <div className="mt-20 flex gap-12 pt-8 border-t border-zinc-900">
                <div>
                    <div className="text-2xl font-bold text-white font-display">0.1s</div>
                    <div className="text-xs text-zinc-600 uppercase tracking-widest mt-1">Latency</div>
                </div>
                <div>
                    <div className="text-2xl font-bold text-white font-display">100%</div>
                    <div className="text-xs text-zinc-600 uppercase tracking-widest mt-1">Uptime</div>
                </div>
                <div>
                    <div className="text-2xl font-bold text-white font-display">256<span className="text-sm align-top">bit</span></div>
                    <div className="text-xs text-zinc-600 uppercase tracking-widest mt-1">Encrypted</div>
                </div>
            </div>
          </motion.div>

          {/* RIGHT: Floating Robot - NO BORDER, PURE FLOATING AESTHETIC */}
          <div className="relative flex justify-center items-center h-[600px] perspective-[1000px]">
             
             <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "circOut" }}
                className="relative z-20"
             >
                 {/* Infinite Float Animation */}
                 <motion.div
                    animate={{ y: [-30, 30, -30], rotate: [0, 2, -2, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="relative flex flex-col items-center"
                 >
                     {/* 1. THE HEAD - Sleek Black Glass Capsule */}
                     <div className="relative w-64 h-72 bg-gradient-to-br from-zinc-800 to-black rounded-[3rem] border-t border-l border-zinc-700/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center overflow-visible z-20">
                        
                        {/* Glossy Highlights */}
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-transparent to-white/5 rounded-[3rem] pointer-events-none"></div>

                        {/* Visor Area */}
                        <div className="mt-20 w-48 h-24 bg-black rounded-2xl border border-zinc-800 relative overflow-hidden flex items-center justify-center">
                             {/* Scanning Line */}
                             <motion.div 
                                className="absolute top-0 bottom-0 w-[2px] bg-cyan-500 opacity-50 blur-[2px]"
                                animate={{ left: ['0%', '100%', '0%'] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                             />
                             
                             {/* Eyes */}
                             <div className="flex gap-8 z-10">
                                 <motion.div 
                                    className="w-10 h-2 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)]"
                                    animate={{ opacity: [0.5, 1, 0.5], scaleX: [0.9, 1, 0.9] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                 />
                                 <motion.div 
                                    className="w-10 h-2 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)]"
                                    animate={{ opacity: [0.5, 1, 0.5], scaleX: [0.9, 1, 0.9] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                 />
                             </div>
                        </div>

                        {/* Audio Visualizer Mouth */}
                        <div className="mt-8 flex gap-1.5 items-end h-6">
                            {[1,2,3,4,5].map((i) => (
                                <motion.div
                                    key={i}
                                    className="w-1.5 bg-zinc-600 rounded-full"
                                    animate={{ height: [4, 16, 4] }}
                                    transition={{ duration: 0.5 + Math.random(), repeat: Infinity }}
                                />
                            ))}
                        </div>

                        {/* Detached Ears (Floating) */}
                        <motion.div 
                            className="absolute -left-6 top-20 w-4 h-24 bg-gradient-to-b from-zinc-800 to-black rounded-l-xl border-l border-zinc-700"
                            animate={{ x: [0, -5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                        />
                         <motion.div 
                            className="absolute -right-6 top-20 w-4 h-24 bg-gradient-to-b from-zinc-800 to-black rounded-r-xl border-r border-zinc-700"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                        />
                     </div>

                     {/* 2. NECK CONNECTOR */}
                     <div className="w-20 h-10 bg-zinc-900 border-x border-zinc-800 -mt-4 z-10 flex flex-col justify-center gap-1 items-center">
                        <div className="w-16 h-1 bg-zinc-800 rounded-full"></div>
                        <div className="w-16 h-1 bg-zinc-800 rounded-full"></div>
                     </div>

                     {/* 3. SHOULDER/BODY BASE - Abstract */}
                     <div className="w-48 h-16 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 rounded-t-[4rem] border-t border-zinc-700 shadow-2xl z-10"></div>

                     {/* 4. HOLOGRAPHIC RINGS (Subtle, elegant) */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent opacity-30"></div>
                     <motion.div 
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-zinc-800/50 rounded-full"
                        animate={{ rotateX: [60, 70, 60], rotateZ: 360 }}
                        transition={{ rotateX: { duration: 5, repeat: Infinity, ease: "easeInOut" }, rotateZ: { duration: 30, repeat: Infinity, ease: "linear" } }}
                     >
                        <div className="absolute top-0 left-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>
                     </motion.div>

                 </motion.div>

                 {/* Floating Data Chips */}
                 <motion.div 
                    className="absolute top-20 right-0 bg-black/80 backdrop-blur border border-zinc-800 p-3 rounded-lg shadow-xl"
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                 >
                     <Wifi className="w-5 h-5 text-zinc-500" />
                 </motion.div>
                 
                 <motion.div 
                    className="absolute bottom-40 left-0 bg-black/80 backdrop-blur border border-zinc-800 p-3 rounded-lg shadow-xl"
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
                 >
                     <Cpu className="w-5 h-5 text-zinc-500" />
                 </motion.div>

             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;