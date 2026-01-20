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
    { name: 'Fitur', href: '#features' },
    { name: 'Harga', href: '#pricing' },
    { name: 'Premium', href: '#premium' },
    { name: 'Script', href: '#script' },
    { name: 'Panduan', href: '#guide' },
  ];

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md border-b border-zinc-800 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-wide font-['Space_Grotesk']">
              KENSHIN
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-zinc-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <a
               href="#pricing"
               className="bg-white hover:bg-zinc-200 text-black px-6 py-2 rounded-full text-sm font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              Sewa Sekarang
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-300 hover:text-white p-2"
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
            className="md:hidden bg-black border-b border-zinc-800 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-zinc-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;