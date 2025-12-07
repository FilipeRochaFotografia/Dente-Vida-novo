import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, hoverLift } from '../../utils/animations';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const Card: React.FC<CardProps> = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={hoverLift}
      // OTIMIZAÇÃO: 
      // 1. 'transform-gpu': Força renderização em camada separada
      // 2. 'will-change-transform': Evita travamento na primeira vez que passa o mouse
      className={`relative p-8 rounded-[2.5rem] bg-white border border-teal-100/50 shadow-glass backdrop-blur-sm overflow-hidden group transform-gpu will-change-transform ${className}`}
    >
      {/* Decorative top gradient line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-200 via-teal-500 to-teal-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* OTIMIZAÇÃO: z-10 explícito para garantir hierarquia de renderização */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Background ambient glow */}
      {/* OTIMIZAÇÃO: 'pointer-events-none' garante que o browser ignore cliques nesse elemento pesado (blur) */}
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-teal-100 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default Card;