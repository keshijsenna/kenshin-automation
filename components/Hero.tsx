import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Terminal, Wifi, Users, Activity, Shield, Cpu, Zap } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const RobotEntity: React.FC = () => {
  return (
    <motion.div
      animate={{ 
        y: [-15, 15, -15], 
        rotateY: [-5, 5, -5],
        rotateX: [-3, 3, -3]
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="relative z-20 group"
    >
      {/* DETAILED ROBOT HEAD ASSEMBLY */}
      <div className="relative w-80 h-96 bg-zinc-950 rounded-[6rem] shadow-[0_60px_150px_-20px_rgba(0,0,0,0.95)] flex flex-col items-center border border-white/5">
        
        {/* Ceramic Top Shell */}
        <div className="absolute top-1.5 left-1.5 right-1.5 h-[48%] bg-white rounded-[5.5rem] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-zinc-50 to-zinc-200"></div>
          {/* Detailed Panel Lines */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-zinc-200/50"></div>
          <div className="absolute top-0 left-1/2 w-[1px] h-full bg-zinc-200/50"></div>
          <div className="absolute top-8 left-1/4 w-32 h-1 bg-white rounded-full opacity-40 blur-sm"></div>
        </div>

        {/* OBSIDIAN VISOR WITH NEURAL BLINK */}
        <div className="mt-28 relative z-10 w-64 h-32 bg-black rounded-[2.5rem] border border-zinc-800/50 overflow-hidden flex flex-col items-center justify-center shadow-inner">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.03),_transparent)]"></div>
          <div className="scanline"></div>
          
          <div className="flex gap-14 relative z-10">
            {/* Blinking Neural Eyes */}
            {[0, 1].map((i) => (
              <motion.div 
                key={i}
                animate={{ 
                  scaleY: [1, 1, 0.05, 1, 1],
                  boxShadow: [
                    "0 0 20px rgba(255,255,255,0.5)",
                    "0 0 40px rgba(255,255,255,0.8)",
                    "0 0 5px rgba(255,255,255,0.2)",
                    "0 0 20px rgba(255,255,255,0.5)"
                  ]
                }} 
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  repeatDelay: 1 + Math.random() * 2,
                  times: [0, 0.9, 0.93, 0.96, 1] 
                }} 
                className="w-16 h-2 bg-white rounded-full" 
              />
            ))}
          </div>
          <div className="absolute bottom-3 font-mono text-[7px] text-zinc-800 uppercase tracking-widest animate-pulse">Neural_Sync_Active</div>
        </div>

        {/* Internal Mechanical Details */}
        <div className="mt-14 flex flex-col items-center gap-4">
           <div className="w-24 h-2 bg-zinc-900 rounded-full border border-white/5"></div>
           <div className="w-32 h-1 bg-zinc-900 rounded-full opacity-50"></div>
           {/* Internal Status LEDs */}
           <div className="flex gap-4 mt-4">
              <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 2, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_blue]"></motion.div>
              <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} className="w-1.5 h-1.5 rounded-full bg-zinc-700"></motion.div>
              <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white]"></motion.div>
           </div>
        </div>

        {/* Floating Side Fins */}
        <motion.div 
          animate={{ x: [-10, 0, -10] }} 
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute -left-14 top-1/4 w-12 h-44 bg-white rounded-[2rem] border border-zinc-100 shadow-2xl flex flex-col justify-around py-8 items-center"
        >
          <div className="w-2 h-2 bg-black rounded-full opacity-20"></div>
          <div className="w-1.5 h-16 bg-zinc-200 rounded-full"></div>
          <div className="w-2 h-2 bg-black rounded-full opacity-20"></div>
        </motion.div>

        <motion.div 
          animate={{ x: [10, 0, 10] }} 
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute -right-14 top-1/4 w-12 h-44 bg-white rounded-[2rem] border border-zinc-100 shadow-2xl flex flex-col justify-around py-8 items-center"
        >
          <div className="w-2 h-2 bg-black rounded-full opacity-20"></div>
          <div className="w-1.5 h-16 bg-zinc-200 rounded-full"></div>
          <div className="w-2 h-2 bg-black rounded-full opacity-20"></div>
        </motion.div>
      </div>

      {/* Orbiting Data Shards */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ 
            y: [0, -60, 0], 
            opacity: [0, 0.6, 0],
            scale: [0.8, 1, 0.8]
          }}
          transition={{ duration: 4 + i, repeat: Infinity }}
          className="absolute font-mono text-[9px] text-zinc-500 p-2.5 border border-white/10 rounded-lg bg-zinc-950/80 backdrop-blur-md"
          style={{ 
            top: `${18 * i}%`, 
            left: i % 2 === 0 ? '-100px' : '320px',
            zIndex: 30
          }}
        >
          {i % 2 === 0 ? "0x" + Math.random().toString(16).slice(2, 6).toUpperCase() : "SYNCING"}
        </motion.div>
      ))}

      {/* Neural Circles */}
      <div className="absolute inset-[-100px] border border-white/5 rounded-full -z-10 animate-[spin_40s_linear_infinite]" />
      <div className="absolute inset-[-160px] border border-dashed border-zinc-900 rounded-full -z-10 animate-[spin_60s_linear_infinite_reverse]" />
    </motion.div>
  );
};

const Hero: React.FC = () => {
  const [visitors, setVisitors] = useState(12840);
  const [logs, setLogs] = useState<string[]>([]);
  const { scrollY } = useScroll();
  const yRange = useTransform(scrollY, [0, 500], [0, -100]);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisitors(v => v + Math.floor(Math.random() * 2));
      const msgs = ["[AUTH] SESSION_SYNC", "[SYS] BUFFER_CLEARED", "[NET] PACKET_FILTER_ON", "[BOT] NEURAL_HANDSHAKE", "[SEC] GCM_AUTH_OK"];
      setLogs(prev => [msgs[Math.floor(Math.random() * msgs.length)], ...prev].slice(0, 4));
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center bg-black overflow-hidden">
      <div className="absolute inset-0 blur-glow opacity-30 pointer-events-none" />
      
      {/* Background Matrix/Hacker Stream */}
      <div className="absolute inset-0 pointer-events-none opacity-10 overflow-hidden font-mono text-[10px] text-white">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -100, x: Math.random() * 2000 }}
            animate={{ y: 1200 }}
            transition={{ duration: 15 + Math.random() * 15, repeat: Infinity, ease: "linear" }}
            className="absolute"
          >
            {Math.random().toString(16).slice(2, 20).toUpperCase()}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-6 mb-12">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white text-black text-[10px] font-bold uppercase tracking-widest shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                <Terminal className="w-3 h-3" />
                <span>MARCELINE_OS_4.5</span>
              </div>
              <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-950/50 border border-zinc-900 backdrop-blur-xl">
                 <Users className="w-3.5 h-3.5 text-zinc-500" />
                 <span className="text-[10px] font-mono font-bold text-white uppercase tracking-tighter">
                   {visitors.toLocaleString()} Activations
                 </span>
                 <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
              </div>
            </div>

            <h1 className="text-7xl md:text-9xl font-bold text-white leading-[0.8] font-display tracking-tighter-extra mb-8 group select-none">
              MARCELINE<br />
              <span className="text-zinc-800 group-hover:text-zinc-500 transition-colors duration-1000">INTERFACE</span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 max-w-lg leading-relaxed mb-12 font-light border-l-2 border-zinc-800 pl-8">
              Developed by <span className="text-white font-semibold">Kenshin</span>. Infrastruktur asisten virtual tercanggih dengan akselerasi neural dan keamanan absolut.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <a href="#pricing" className="px-12 py-5 bg-white text-black font-bold uppercase tracking-widest-extra text-[10px] hover:bg-zinc-200 transition-all flex items-center justify-center gap-4 shadow-2xl">
                BOOT NODE <ArrowRight className="w-4 h-4" />
              </a>
              <a href={CONTACT_INFO.channelLink} className="px-12 py-5 bg-transparent border border-zinc-800 text-white font-bold uppercase tracking-widest-extra text-[10px] hover:border-white transition-all flex items-center justify-center">
                INTERNAL_DATA
              </a>
            </div>

            {/* LIVE SYSTEM LOG HUD */}
            <motion.div 
              style={{ y: yRange }}
              className="p-8 bg-zinc-950/60 border border-zinc-900 rounded-[2.5rem] backdrop-blur-3xl font-mono text-[9px] text-zinc-600 uppercase tracking-widest relative overflow-hidden shadow-2xl"
            >
                <div className="flex flex-col gap-2.5">
                    {logs.map((log, i) => (
                        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} key={i} className="flex gap-4">
                            <span className="text-zinc-800">[{new Date().toLocaleTimeString('en-GB')}]</span>
                            <span className={log.includes('SYNC') || log.includes('OK') ? 'text-zinc-300' : 'text-zinc-700'}>{log}</span>
                        </motion.div>
                    ))}
                    <div className="mt-6 pt-6 border-t border-zinc-900 flex justify-between items-center text-[10px]">
                        <div className="flex gap-8">
                            <span className="flex items-center gap-2"><Activity className="w-3.5 h-3.5" /> LOAD: 4.8%</span>
                            <span className="flex items-center gap-2"><Shield className="w-3.5 h-3.5" /> GCM_AUTH_OK</span>
                        </div>
                        <div className="flex items-center gap-2">
                           <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]"></div>
                           <span className="text-white font-bold">NODE_ALPHA_READY</span>
                        </div>
                    </div>
                </div>
            </motion.div>
          </motion.div>

          {/* DETAILED ROBOT CONTAINER */}
          <div className="relative flex justify-center items-center h-[500px] lg:h-[700px]">
            <RobotEntity />
            <div className="absolute bottom-10 w-80 h-12 bg-zinc-800 blur-[120px] rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;