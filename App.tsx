import React, { useState } from 'react';
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
    <div className="min-h-screen bg-[#000000] text-slate-200 overflow-x-hidden font-sans selection:bg-white selection:text-black">
      <Navbar />
      <main>
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
      
      {/* Floating Action Button for Support */}
      <a
        href="https://wa.me/6288289338073"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-white hover:bg-zinc-200 text-black p-4 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] z-40 transition-transform hover:scale-110 flex items-center justify-center group"
      >
        <span className="absolute right-full mr-4 bg-zinc-900 text-white border border-zinc-800 px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
            Chat Owner
        </span>
        <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 fill-current"
        >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </a>
    </div>
  );
};

export default App;