import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ShieldCheck, Smile, Activity, Layers, Scissors, Anchor, Disc, Plus, ChevronDown } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../utils/animations';

const treatments = [
  {
    id: 1,
    icon: <Disc className="w-6 h-6" />,
    title: "IMPLANTODONTIA",
    description: "Reabilitação segura com implantes de titânio para substituir raízes perdidas e devolver sua função mastigatória."
  },
  {
    id: 2,
    icon: <Plus className="w-6 h-6" />,
    title: "PRÓTESE",
    description: "Restauração de dentes destruídos ou reposição de dentes perdidos, visando conforto e naturalidade."
  },
  {
    id: 3,
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "PREVENÇÃO",
    description: "Protocolos de limpeza profunda e check-ups regulares para manter a saúde bucal sempre em dia."
  },
  {
    id: 4,
    icon: <Sparkles className="w-6 h-6" />,
    title: "ESTÉTICA DENTAL",
    description: "Lentes de contato, facetas e clareamento para transformar seu sorriso de forma harmoniosa."
  },
  {
    id: 5,
    icon: <Activity className="w-6 h-6" />,
    title: "ENDODONTIA",
    description: "Tratamento de canal com tecnologia rotatória avançada para curar lesões e salvar o dente."
  },
  {
    id: 6,
    icon: <Layers className="w-6 h-6" />,
    title: "PERIODONTIA",
    description: "Cuidados especializados para a saúde da gengiva e dos tecidos de sustentação dos dentes."
  },
  {
    id: 7,
    icon: <Smile className="w-6 h-6" />,
    title: "ODONTOPEDIATRIA",
    description: "Atendimento lúdico e especializado para acompanhar a saúde bucal das crianças desde cedo."
  },
  {
    id: 8,
    icon: <Scissors className="w-6 h-6" />,
    title: "CIRURGIA ORAL MENOR",
    description: "Extração de sisos e pequenos procedimentos cirúrgicos realizados com segurança e conforto."
  }
];

const Features = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section id="treatments" className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Background Image Otimizado */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <img 
          src="https://i.ibb.co/tPFjZRDD/equip3.png" 
          alt="Dental Equipment Background" 
          width="1920"
          height="1080"
          loading="lazy" // Não bloqueia o carregamento inicial
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span variants={fadeInUp} className="text-teal-600 font-semibold uppercase tracking-wider text-sm">
            Especialidades
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-6">
            Tratamentos Completos
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-600 text-lg">
            Clique nos cartões abaixo para saber mais sobre nossos procedimentos.
          </motion.p>
        </motion.div>

        {/* Grid Interativo */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 justify-items-center items-start"
        >
          {treatments.map((item) => {
            const isActive = activeId === item.id;
            
            return (
              <motion.div
                layout // Permite animação fluida ao mudar de tamanho
                variants={fadeInUp}
                key={item.id}
                onClick={() => setActiveId(isActive ? null : item.id)}
                transition={{ layout: { duration: 0.3, ease: "easeInOut" } }} // Transição firme para evitar "pulo"
                className={`
                  relative overflow-hidden rounded-2xl cursor-pointer transition-colors duration-300 border w-full max-w-xs transform-gpu will-change-transform
                  ${isActive 
                    ? 'bg-teal-600 border-teal-600 shadow-xl shadow-teal-900/20 z-10' 
                    : 'bg-white border-teal-100 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-100/50 z-0'
                  }
                `}
              >
                <motion.div layout="position" className="px-5 py-8">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className={`
                        p-2.5 rounded-lg transition-colors duration-300 shrink-0
                        ${isActive ? 'bg-white/20 text-white' : 'bg-teal-50 text-teal-600'}
                      `}>
                        {item.icon}
                      </div>
                      <h3 className={`font-bold text-sm tracking-wide uppercase leading-tight ${isActive ? 'text-white' : 'text-slate-800'}`}>
                        {item.title}
                      </h3>
                    </div>
                    
                    <motion.div
                      animate={{ rotate: isActive ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0"
                    >
                      <ChevronDown className={`w-5 h-5 ${isActive ? 'text-teal-200' : 'text-teal-300'}`} />
                    </motion.div>
                  </div>

                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-teal-50 text-sm leading-relaxed border-t border-teal-500/50 pt-4">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Features;