import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-black border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-zinc-900 rounded-full mb-4 border border-zinc-800">
            <HelpCircle className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-['Space_Grotesk']">
            Frequently Asked <span className="text-zinc-600">Questions</span>
          </h2>
          <p className="mt-4 text-zinc-400 font-light">
            Jawaban untuk pertanyaan yang paling sering diajukan oleh pengguna.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`border rounded-xl transition-all duration-300 ${
                openIndex === index 
                  ? 'bg-zinc-900 border-zinc-700' 
                  : 'bg-transparent border-zinc-800 hover:border-zinc-700'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`font-medium text-lg ${openIndex === index ? 'text-white' : 'text-zinc-400'}`}>
                  {item.question}
                </span>
                <div className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-white text-black' : 'bg-zinc-900 text-zinc-500'}`}>
                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-zinc-400 leading-relaxed border-t border-zinc-800 pt-4 font-light text-sm">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;