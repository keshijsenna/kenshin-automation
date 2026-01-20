import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ShieldCheck, ArrowRight, Wallet } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const PaymentSection: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-20 items-center">
            
            {/* Left Info */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                 <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-6">
                    Secure <span className="text-zinc-600">Transactions</span>
                </h2>
                <p className="text-zinc-400 text-lg mb-8 leading-relaxed font-light">
                    Kami menggunakan sistem verifikasi manual melalui WhatsApp untuk menjamin keamanan 100% dan aktivasi yang personal.
                </p>

                <div className="space-y-6">
                    <div className="flex items-start gap-5 p-4 rounded-xl hover:bg-zinc-900/30 transition-colors border border-transparent hover:border-zinc-800">
                        <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800">
                            <ShieldCheck className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg mb-1">Direct Verification</h4>
                            <p className="text-zinc-500 text-sm">Pembayaran langsung diverifikasi oleh Owner.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-5 p-4 rounded-xl hover:bg-zinc-900/30 transition-colors border border-transparent hover:border-zinc-800">
                        <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800">
                            <Wallet className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg mb-1">Multi-Payment Support</h4>
                            <p className="text-zinc-500 text-sm">Menerima Dana, OVO, GoPay, ShopeePay, & QRIS.</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Right Card */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="relative bg-zinc-900 rounded-[2.5rem] p-1 overflow-hidden shadow-2xl border border-zinc-800"
            >
                <div className="bg-black rounded-[2.3rem] p-10 h-full relative z-10 flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-zinc-900 rounded-2xl flex items-center justify-center mb-8 border border-zinc-800">
                        <MessageCircle className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-4 font-display">Chat to Pay</h3>
                    <p className="text-zinc-500 mb-10 text-sm leading-relaxed max-w-sm">
                        Klik tombol di bawah untuk terhubung langsung ke WhatsApp Owner. Kirim format order dan bukti transfer.
                    </p>

                    <a 
                        href={`https://wa.me/${CONTACT_INFO.ownerPhone}`}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-5 bg-white hover:bg-zinc-200 text-black rounded-2xl font-bold transition-all flex items-center justify-center gap-3 group shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                    >
                        Hubungi Owner <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    
                    <div className="mt-6 flex items-center gap-2 text-xs text-zinc-600">
                         <ShieldCheck className="w-3 h-3" />
                         <span>End-to-End Encrypted Chat</span>
                    </div>
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PaymentSection;