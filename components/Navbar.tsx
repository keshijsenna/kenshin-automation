
import React, { useState, useEffect } from 'react';
import { Menu, X, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Specifications', href: '#features' },
    { name: 'Licensing', href: '#pricing' },
    { name: 'Depository', href: '#script' },
    { name: 'Documentation', href: '#guide' },
  ];

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-zinc-900 py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 group cursor-default">
            <div className="p-2.5 bg-white rounded-xl shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform">
              <Bot className="w-6 h-6 text-black" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white tracking-tighter font-display leading-none">
                MARCELINE
              </span>
              <span className="text-[9px] text-zinc-600 font-mono tracking-widest uppercase mt-1">
                Assistant_v4
              </span>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-zinc-500 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-all hover:tracking-[0.2em]"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <a
               href="#pricing"
               className="bg-white hover:bg-zinc-200 text-black px-10 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all shadow-xl active:scale-95"
            >
              Initialize Node
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-400 hover:text-white p-2"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-950 border-b border-zinc-900 overflow-hidden"
          >
            <div className="px-6 pt-6 pb-12 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-zinc-400 hover:text-white block text-xs font-bold uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#pricing"
                className="w-full bg-white text-black text-center block py-4 rounded-2xl text-xs font-bold uppercase tracking-widest"
              >
                Initialize Node
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
