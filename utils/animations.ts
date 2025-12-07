import { Variants, TargetAndTransition } from 'framer-motion';

export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    // OTIMIZAÇÃO: Blur removido pois causa queda drástica de FPS em mobile
    // OTIMIZAÇÃO: 'willChange' prepara a GPU para a animação
    willChange: 'transform, opacity'
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] // Custom cubic bezier (sensação de "peso" premium)
    }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1 // Reduzi de 0.2 para 0.1 para parecer mais rápido
    }
  }
};

export const fadeInScale: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95,
    willChange: 'transform, opacity'
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const slideInLeft: Variants = {
  hidden: { 
    x: -60, 
    opacity: 0,
    willChange: 'transform, opacity'
  },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export const hoverLift: TargetAndTransition = {
  y: -8,
  transition: { duration: 0.3, ease: "easeOut" }
};