import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  useEffect(() => {
    // Simulate loading time, then finish
    const timer = setTimeout(() => {
      onComplete();
    }, 2500); // 2.5 seconds purely for the animation showcase

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_0%,_transparent_50%)]"></div>
      
      {/* Floating Robot Container */}
      <motion.div
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* ROBOT HEAD */}
        <div className="relative w-32 h-32">
            
            {/* Main Face Shape */}
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-800 to-black rounded-[2rem] border border-zinc-800 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden">
                {/* Glass Reflection */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent"></div>
                
                {/* Eyes Container */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 flex justify-between items-center">
                    {/* Left Eye */}
                    <motion.div 
                        initial={{ height: 2 }}
                        animate={{ height: [2, 12, 2, 2, 2] }} // Blink sequence
                        transition={{ duration: 4, repeat: Infinity, times: [0, 0.1, 0.2, 0.8, 1] }}
                        className="w-6 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee]"
                    />
                    {/* Right Eye */}
                    <motion.div 
                        initial={{ height: 2 }}
                        animate={{ height: [2, 12, 2, 2, 2] }} 
                        transition={{ duration: 4, repeat: Infinity, times: [0, 0.1, 0.2, 0.8, 1] }}
                        className="w-6 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee]"
                    />
                </div>

                {/* Mouth/Voice Line */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1">
                    <motion.div animate={{ height: [4, 10, 4] }} transition={{ duration: 0.5, repeat: Infinity }} className="w-1 bg-zinc-600 rounded-full" />
                    <motion.div animate={{ height: [6, 14, 6] }} transition={{ duration: 0.6, repeat: Infinity }} className="w-1 bg-zinc-600 rounded-full" />
                    <motion.div animate={{ height: [4, 10, 4] }} transition={{ duration: 0.5, repeat: Infinity }} className="w-1 bg-zinc-600 rounded-full" />
                </div>
            </div>

            {/* Floating "Ear" Pieces */}
            <motion.div 
                animate={{ y: [2, -2, 2] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute -left-4 top-1/2 -translate-y-1/2 w-3 h-16 bg-zinc-900 border border-zinc-800 rounded-l-lg"
            />
            <motion.div 
                animate={{ y: [2, -2, 2] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute -right-4 top-1/2 -translate-y-1/2 w-3 h-16 bg-zinc-900 border border-zinc-800 rounded-r-lg"
            />
        </div>

        {/* Shadow underneath */}
        <motion.div
            animate={{ scale: [0.8, 1, 0.8], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="mt-12 w-20 h-4 bg-black rounded-[100%] blur-md"
        ></motion.div>

      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;