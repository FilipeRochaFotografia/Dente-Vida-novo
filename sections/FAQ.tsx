
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const faqs = [
  {
    question: "Aceitam convênios odontológicos?",
    answer: "Sim! Trabalhamos com os principais convênios do mercado. Entre em contato com nossa recepção pelo WhatsApp para verificar a cobertura do seu plano específico."
  },
  {
    question: "Quanto custa um implante dentário?",
    answer: "O valor varia dependendo da complexidade do caso e do material escolhido. Realizamos uma avaliação inicial completa para fornecer um orçamento preciso e transparente."
  },
  {
    question: "O clareamento dental causa sensibilidade?",
    answer: "Utilizamos técnicas modernas e produtos de alta qualidade que minimizam a sensibilidade. Além disso, oferecemos tratamentos dessensibilizantes prévios para garantir seu conforto."
  },
  {
    question: "Atendem emergências fora do horário comercial?",
    answer: "Entendemos que imprevistos acontecem. Temos um canal exclusivo para pacientes em tratamento que necessitam de suporte urgente."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-teal-900">
      {/* Background Base */}
      <div className="absolute inset-0 bg-teal-900" />

      {/* Modern High-Visibility Gradient (White/Teal Light from Top) - Matching Team Section */}
      <div className="absolute inset-0 bg-[radial-gradient(100%_60%_at_50%_0%,_rgba(240,253,250,0.2)_0%,_rgba(45,212,191,0.1)_50%,_transparent_100%)] pointer-events-none" />

      {/* Decorative Blobs for Modern Look */}
      <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-teal-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-teal-400/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>

      <div className="container mx-auto px-6 lg:px-12 max-w-4xl relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-white mb-4">
            Dúvidas Frequentes
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-teal-100/80">
            Esclareça suas principais dúvidas <br className="md:hidden" /> sobre nossos tratamentos.
          </motion.p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-md ${activeIndex === index ? 'bg-white/15 border-teal-400/40 shadow-lg shadow-teal-900/20' : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'}`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-bold text-lg ${activeIndex === index ? 'text-white' : 'text-teal-50'}`}>
                  {item.question}
                </span>
                <span className={`p-2 rounded-full transition-colors ${activeIndex === index ? 'bg-teal-400 text-teal-900' : 'bg-white/10 text-white'}`}>
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-teal-100 leading-relaxed border-t border-transparent">
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
