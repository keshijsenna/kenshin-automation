import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Comparison from './components/Comparison';
import Advantages from './components/Advantages';
import Guide from './components/Guide';
import PaymentSection from './components/PaymentSection';
import Community from './components/Community';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-black text-zinc-400 overflow-x-hidden font-sans selection:bg-white selection:text-black">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Features />
        <Pricing />
        <Advantages />
        <Comparison />
        <Guide />
        <PaymentSection />
        <Community />
        <FAQ />
      </main>
      <Footer />
      
      {/* Floating Action Button */}
      <motion.a
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="https://wa.me/6288289338073"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-8 right-8 bg-white text-black px-8 py-4 rounded-full shadow-[0_20px_60px_rgba(255,255,255,0.1)] z-40 transition-all flex items-center gap-4 group border border-white"
      >
        <div className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-30"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-black"></span>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest-extra">Support Core</span>
      </motion.a>
    </div>
  );
};

export default App;