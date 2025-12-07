import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'white';
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', onClick, icon }) => {
  
  // OTIMIZAÇÃO: Adicionado 'transform-gpu' para processamento via placa de vídeo
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-semibold transition-all duration-300 rounded-[2rem] group transform-gpu";
  
  const variants = {
    primary: "bg-teal-500 text-white shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 hover:bg-teal-600",
    outline: "bg-transparent text-teal-700 border-2 border-teal-500/30 hover:border-teal-500 hover:bg-teal-50",
    white: "bg-white text-teal-700 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:scale-[1.02]"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      // OTIMIZAÇÃO: will-change-transform prepara o browser para a mudança de escala
      className={`${baseStyles} ${variants[variant]} ${className} will-change-transform`}
    >
      {/* Shine effect for primary buttons */}
      {/* OTIMIZAÇÃO: Substituído '-mt-1' por '-translate-y-1' para evitar layout thrashing (repintura da tela) */}
      {variant === 'primary' && (
        <span className="absolute top-0 left-0 w-full h-full transform -translate-y-1 transition-transform duration-500 opacity-0 rounded-[2rem] bg-gradient-to-b from-white/20 to-transparent group-hover:opacity-100 group-hover:translate-y-0"></span>
      )}

      <span className="relative flex items-center gap-2 z-10">
        {children}
        {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
      </span>
    </motion.button>
  );
};

export default Button;