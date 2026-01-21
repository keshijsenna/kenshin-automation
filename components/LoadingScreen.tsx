import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent(v => (v < 100 ? v + 1 : 100));
    }, 20);
    const completeTimer = setTimeout(() => onComplete(), 3000);
    return () => {
      clearInterval(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.5 } }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 tech-grid"></div>
      
      <div className="relative z-10 flex flex-col items-center">
        {/* DETAILED FLOATING ENTITY */}
        <motion.div
          animate={{ y: [-15, 15, -15], rotateY: [0, 360] }}
          transition={{ 
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            rotateY: { duration: 12, repeat: Infinity, ease: "linear" }
          }}
          className="relative w-72 h-72 mb-24 flex items-center justify-center"
        >
          {/* Main Mechanical Body Core */}
          <div className="absolute w-52 h-64 bg-white rounded-[4rem] shadow-[0_0_100px_rgba(255,255,255,0.15)] flex items-center justify-center border border-zinc-200 overflow-hidden">
             <div className="w-full h-full bg-gradient-to-br from-white via-zinc-50 to-zinc-200"></div>
             
             {/* Internal Visor Segment */}
             <div className="absolute z-10 w-40 h-16 bg-black rounded-2xl flex items-center justify-center gap-10 shadow-2xl overflow-hidden border border-zinc-800">
                <div className="scanline"></div>
                <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-10 h-1.5 bg-white rounded-full shadow-[0_0_15px_white]" />
                <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }} className="w-10 h-1.5 bg-white rounded-full shadow-[0_0_15px_white]" />
             </div>
          </div>

          {/* Orbital Neural Rings */}
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} className="absolute inset-[-40px] border-2 border-dashed border-white/10 rounded-full" />
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute inset-[-70px] border border-zinc-900 rounded-full border-dashed" />
        </motion.div>

        {/* Progress System */}
        <div className="w-96 h-1 bg-zinc-900 relative rounded-full overflow-hidden mb-10 shadow-3xl">
          <motion.div initial={{ width: 0 }} animate={{ width: `${percent}%` }} className="absolute inset-0 bg-white" />
        </div>
        
        <div className="font-mono text-[11px] text-zinc-500 tracking-[0.8em] uppercase flex gap-5 items-center">
          <span className="animate-pulse">Initializing_Neural_Sequence...</span>
          <span className="text-white font-bold">{percent}%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;