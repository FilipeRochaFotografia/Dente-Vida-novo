
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Star, ShieldCheck, Instagram } from 'lucide-react';
import Button from '../components/ui/Button';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Hero = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center pt-28 lg:pt-20 overflow-hidden bg-soft-gradient">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-teal-200/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl flex flex-col items-center lg:items-start text-center lg:text-left mx-auto lg:mx-0"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-50 border border-teal-100 text-teal-800 text-base font-medium mb-6">
              📅 Agende sua visita
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl lg:text-6xl font-bold text-teal-900 leading-[1.1] tracking-tight mb-6">
              Seu melhor sorriso <br />
              começa na <br className="md:hidden" />
              <span className="text-teal-700">Dente</span> <span className="text-teal-500">Vida</span>
              <span className="hidden md:inline">.</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed">
              Proteja o sorriso de quem você ama com tecnologia de ponta e um atendimento que acolhe. <strong className="text-teal-700">Dr. Alexandre Rodrigues Aragão</strong> e equipe cuidando com carinho da sua família.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto justify-center lg:justify-start">
              <Button 
                variant="primary" 
                icon={<ChevronRight className="w-5 h-5" />}
                onClick={() => window.open('https://wa.link/5hltyy', '_blank')}
              >
                Agendar Consulta
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('treatments')}
              >
                Conhecer Tratamentos
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div variants={fadeInUp} className="flex flex-row flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-8 pt-8 border-t border-slate-200 w-full">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-teal-50 rounded-full text-teal-600">
                  <Star className="w-6 h-6 fill-current" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-lg text-slate-900">4.8/5</p>
                  <p className="text-sm text-slate-500">Google Reviews</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-teal-50 rounded-full text-teal-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-lg text-slate-900">Certificado</p>
                  <p className="text-sm text-slate-500">CRO BA 11439</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image Composition */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block max-w-[85%] mx-auto"
          >
            {/* Main Image Frame */}
            <div className="relative z-20 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-teal-900/20 aspect-[3/4] border-4 border-white group bg-slate-200">
              {/* Image with smooth loading transition */}
              <img 
                src="https://i.ibb.co/LdPT7Jfm/Sem-nome-Post-para-Instagram-45.png" 
                alt="Dr. Alexandre Rodrigues Aragão" 
                loading="eager"
                onLoad={() => setImgLoaded(true)}
                className={`
                  object-cover object-top w-full h-full transform group-hover:scale-105 
                  transition-all duration-1000 ease-out
                  ${imgLoaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-sm scale-105'}
                `}
              />
              
              {/* Subtle overlay to blend the dark photo bottom if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 via-transparent to-transparent opacity-50 pointer-events-none" />
            </div>

            {/* New Top-Right Image (No Container Box) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ 
                opacity: 1, 
                x: 0
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.5 },
                x: { duration: 0.8, delay: 0.5 }
              }}
              className="absolute -right-8 top-4 z-30"
            >
              <img 
                src="https://i.ibb.co/ZR6DHnFf/Design-sem-nome.png" 
                alt="Detalhe Dente Vida"
                className="w-24 h-auto drop-shadow-lg"
              />
            </motion.div>

            {/* Floating Name Card - Increased Size (approx 50%) */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ 
                x: 0, 
                opacity: 1
              }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.6 },
                x: { duration: 0.8, delay: 0.6 }
              }}
              className="absolute -left-12 bottom-8 z-30 bg-white/95 backdrop-blur-md p-6 pr-12 rounded-[2rem] shadow-xl border border-teal-100 flex items-center gap-5"
            >
               <div className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-3 rounded-xl text-white shadow-md">
                  <Instagram size={32} />
               </div>
               <div>
                  <p className="font-bold text-slate-900 text-xl leading-tight">dente.vida</p>
               </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
