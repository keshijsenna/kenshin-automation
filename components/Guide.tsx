import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, BookOpen } from 'lucide-react';

const GUIDE_STEPS = [
  {
    title: 'Cara Sewa Bot',
    steps: [
      'Pilih paket yang diinginkan di menu Harga.',
      'Klik tombol "Sewa" atau "Pilih Paket".',
      'Anda akan diarahkan ke WhatsApp Admin.',
      'Kirim pesan pemesanan otomatis.',
      'Lakukan pembayaran via QRIS/E-Wallet.',
      'Bot akan diaktifkan dalam < 5 menit.'
    ]
  },
  {
    title: 'Cara Upgrade Premium',
    steps: [
      'Pilih tab "Premium" di menu Harga.',
      'Pilih durasi paket (Mingguan/Bulanan/Tahunan).',
      'Lakukan pembayaran sesuai nominal.',
      'Fitur premium otomatis aktif setelah konfirmasi.',
      'Nikmati fitur unlimited dan AI advanced.'
    ]
  },
  {
    title: 'Cara Setup Group',
    steps: [
      'Invite nomor bot ke dalam grup.',
      'Jadikan bot sebagai Admin Grup (Wajib).',
      'Ketik !menu untuk memastikan bot aktif.',
      'Ketik !sewa cek untuk melihat masa aktif.',
      'Gunakan command !group open/close untuk tes.'
    ]
  },
  {
    title: 'Troubleshooting Dasar',
    steps: [
      'Bot tidak respon? Cek apakah bot sudah admin.',
      'Pastikan format command benar (gunakan prefix !).',
      'Bot offline? Cek info di channel update.',
      'Error command? Screenshot dan kirim ke support group.'
    ]
  }
];

const Guide: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="guide" className="py-24 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* Text Info */}
          <div className="sticky top-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-medium mb-6 uppercase tracking-widest">
                <BookOpen className="w-3 h-3" />
                <span>Dokumentasi</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-['Space_Grotesk'] mb-6">
              Panduan Lengkap <br />
              <span className="text-zinc-500">Penggunaan Bot</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-8 font-light">
                Ikuti langkah-langkah mudah berikut untuk mulai menggunakan Kenshin Bot di grup WhatsApp Anda. 
                Proses setup cepat dan tidak memerlukan keahlian teknis khusus.
            </p>
            <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800">
                <h4 className="text-white font-bold mb-2">Butuh Bantuan Langsung?</h4>
                <p className="text-sm text-zinc-500 mb-4">Tim support kami siap membantu kendala teknis Anda.</p>
                <button 
                    onClick={() => window.open('https://chat.whatsapp.com/H19gbX0a8mvAdNcTLiCJ1h', '_blank')}
                    className="text-white hover:text-zinc-300 font-medium text-sm flex items-center gap-2 transition-colors border-b border-white/20 pb-0.5"
                >
                    Hubungi Support via WhatsApp &rarr;
                </button>
            </div>
          </div>

          {/* Guide Accordion */}
          <div className="space-y-4">
              {GUIDE_STEPS.map((guide, index) => (
                <div key={index} className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900/20 hover:bg-zinc-900/50 transition-colors">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-bold text-white text-lg">{guide.title}</span>
                    <ChevronDown className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 pt-0 text-zinc-400 border-t border-zinc-800/50 mt-2">
                          <ol className="relative border-l border-zinc-800 ml-3 space-y-6 mt-4">
                            {guide.steps.map((step, idx) => (
                              <li key={idx} className="ml-6 relative">
                                <span className="absolute -left-[31px] flex items-center justify-center w-6 h-6 bg-black rounded-full border border-zinc-700 text-[10px] text-white font-bold">
                                    {idx + 1}
                                </span>
                                <span className="text-sm block py-1 font-light">{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Guide;