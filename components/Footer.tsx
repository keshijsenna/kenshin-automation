import React from 'react';
import { Bot, Heart, Youtube, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-zinc-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Bot className="w-6 h-6 text-white" />
              <span className="text-xl font-bold text-white font-['Space_Grotesk']">KENSHIN</span>
            </div>
            <p className="text-zinc-500 max-w-sm mb-6 text-sm font-light">
              Platform bot WhatsApp tercanggih untuk kebutuhan manajemen grup dan automasi bisnis Anda. Cepat, Aman, dan Terjangkau.
            </p>
            <div className="flex gap-4">
              <a href={CONTACT_INFO.groupLink} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all text-zinc-400">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href={CONTACT_INFO.youtubeLink} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all text-zinc-400">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Produk</h4>
            <ul className="space-y-2 text-zinc-500 text-sm">
              <li><a href="#pricing" className="hover:text-white transition-colors">Sewa Bot</a></li>
              <li><a href="#premium" className="hover:text-white transition-colors">Paket Premium</a></li>
              <li><a href="#script" className="hover:text-white transition-colors">Source Code</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Fitur</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Support</h4>
            <ul className="space-y-2 text-zinc-500 text-sm">
              <li><a href="#guide" className="hover:text-white transition-colors">Panduan</a></li>
              <li><a href={CONTACT_INFO.groupLink} className="hover:text-white transition-colors">Komunitas</a></li>
              <li><a href={CONTACT_INFO.channelLink} className="hover:text-white transition-colors">Channel Update</a></li>
              <li><a href={`https://wa.me/${CONTACT_INFO.ownerPhone}`} className="hover:text-white transition-colors">Hubungi Owner</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Kenshin Bot. All rights reserved.
          </p>
          <p className="text-zinc-600 text-xs flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-zinc-500 fill-current" /> by Kenshin Dev
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;