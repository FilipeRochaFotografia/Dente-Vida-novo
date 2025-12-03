
import React, { useState, useEffect } from 'react';
import { motion, PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const teamMembers = [
  {
    id: 1,
    name: "Dr. Alexandre Rodrigues Aragão",
    role: "Implantodontia - Clínica Geral - Endodontia - Prótese",
    realImage: "https://i.ibb.co/zWg2d56Z/Alexandre-site-2.png"
  },
  {
    id: 2,
    name: "Dr. Gleysson Alves",
    role: "Clínica Geral - Estética em resina - Odontopediatria",
    realImage: "https://i.ibb.co/S46Vq86x/Gleisson-site.png"
  },
  {
    id: 3,
    name: "Dra. Maísa Ladeia",
    role: "Pessoas com Comprometimento Sistêmico de dificil controle, com Deficiência e Idosos",
    realImage: "https://i.ibb.co/TBSyBrR2/Maisa-3.png"
  },
  {
    id: 4,
    name: "Dra. Jamile Aguiar",
    role: "Clínica Geral - Prótese - Odontopediatria",
    realImage: "https://i.ibb.co/GQk8bQ6Z/Jamile-Site.png"
  },
  {
    id: 5,
    name: "Leilane Silva",
    role: "Auxiliar de saúde bucal",
    realImage: "https://i.ibb.co/CyB1HBz/Leilane-4.png"
  },
  {
    id: 6,
    name: "Dra. Rachel Oitaven",
    role: "Ortodontia",
    realImage: "https://i.ibb.co/60qMxGzr/38c2258e-d039-11f0-a7ec-02202f98b364-0.png"
  }
];

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check initially
    checkMobile();

    // Add listener
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  // Handle swipe gestures
  const onDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50; // Drag distance threshold
    if (info.offset.x < -threshold) {
      nextSlide();
    } else if (info.offset.x > threshold) {
      prevSlide();
    }
  };

  const getCardVariant = (index: number) => {
    const total = teamMembers.length;
    const relativeIndex = (index - activeIndex + total) % total;

    if (relativeIndex === 0) return 'center';
    if (relativeIndex === 1) return 'right';
    if (relativeIndex === 2) return 'farRight';
    if (relativeIndex === total - 2) return 'farLeft';
    if (relativeIndex === total - 1) return 'left';
    return 'hidden';
  };

  const variants = {
    center: { x: '0%', scale: 1, zIndex: 50, opacity: 1, filter: 'blur(0px)', rotateY: 0 },
    left: { x: '-60%', scale: 0.8, zIndex: 30, opacity: 0.6, filter: 'blur(2px)', rotateY: 15 },
    right: { x: '60%', scale: 0.8, zIndex: 30, opacity: 0.6, filter: 'blur(2px)', rotateY: -15 },
    farLeft: { x: '-110%', scale: 0.6, zIndex: 10, opacity: 0.3, filter: 'blur(4px)', rotateY: 25 },
    farRight: { x: '110%', scale: 0.6, zIndex: 10, opacity: 0.3, filter: 'blur(4px)', rotateY: -25 },
    hidden: { opacity: 0, scale: 0, zIndex: 0 }
  };

  const mobileVariants = {
    center: { x: 0, opacity: 1, scale: 1, zIndex: 50, display: 'block' },
    left: { x: 0, opacity: 0, scale: 0.9, zIndex: 0, display: 'none' },
    right: { x: 0, opacity: 0, scale: 0.9, zIndex: 0, display: 'none' },
    farLeft: { x: 0, opacity: 0, scale: 0.9, zIndex: 0, display: 'none' },
    farRight: { x: 0, opacity: 0, scale: 0.9, zIndex: 0, display: 'none' },
    hidden: { display: 'none' }
  };

  return (
    <section id="team" className="py-12 relative overflow-hidden bg-teal-900">
      {/* Background Base */}
      <div className="absolute inset-0 bg-teal-900" />

      {/* Modern High-Visibility Gradient (White/Teal Light from Top) */}
      <div className="absolute inset-0 bg-[radial-gradient(100%_60%_at_50%_0%,_rgba(240,253,250,0.2)_0%,_rgba(45,212,191,0.1)_50%,_transparent_100%)] pointer-events-none" />

      {/* Decorative Blobs for Modern Hero Look */}
      <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-teal-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-teal-400/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <motion.span variants={fadeInUp} className="text-teal-400 font-semibold uppercase tracking-wider text-sm">
            Nossos Especialistas
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">
            Conheça Nossa Equipe
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-teal-100/80 text-lg max-w-2xl mx-auto">
            Profissionais dedicados e em constante atualização para oferecer<br />
            o melhor da odontologia moderna para você.
          </motion.p>
        </motion.div>

        {/* Carousel Container - Now Animated */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative h-[420px] md:h-[500px] flex items-center justify-center perspective-1000"
        >
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 md:left-10 z-50 p-2 md:p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-teal-900 transition-all border border-white/20"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 md:right-10 z-50 p-2 md:p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-teal-900 transition-all border border-white/20"
          >
            <ChevronRight size={24} />
          </button>

          {/* Cards */}
          <div className="relative w-[280px] xs:w-[300px] md:w-[340px] flex items-center justify-center">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                variants={isMobile ? mobileVariants : variants}
                animate={getCardVariant(index)}
                initial="hidden"
                transition={{ duration: 0.5, type: 'spring', stiffness: 100, damping: 20 }}
                className="absolute w-full aspect-[3/4] cursor-grab active:cursor-grabbing"
                drag={isMobile ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={onDragEnd}
              >
                {/* Image Card */}
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10 bg-teal-800">
                  <img 
                    src={member.realImage} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top"
                    draggable="false" // Prevent native image drag
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Info Text (Only for active index) - Now Animated */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-6 relative z-20"
        >
           {/* Replaced AnimatePresence with simple key change for smoother transitions matching carousel */}
           <motion.div
             key={activeIndex}
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.4 }}
             className="flex flex-col items-center"
           >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {teamMembers[activeIndex].name}
              </h3>
              <div className="inline-block px-4 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-200 text-sm font-medium">
                {teamMembers[activeIndex].role}
              </div>
           </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Team;
