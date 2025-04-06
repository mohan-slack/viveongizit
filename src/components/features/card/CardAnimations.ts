
import { Variants } from 'framer-motion';

// Container animations
export const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    }
  }),
  hover: {
    scale: 1.02,
    rotateY: 2,
    rotateX: 2,
    z: 10,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  },
  selected: {
    scale: 1.05,
    rotateY: 3,
    rotateX: 3,
    z: 15,
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  }
};

// Icon animations
export const iconVariants: Variants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.15,
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror"
    }
  },
  selected: {
    scale: 1.2,
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror"
    }
  }
};

// Pulse animations
export const pulseVariants: Variants = {
  rest: { opacity: 0.2, scale: 1 },
  hover: { 
    opacity: [0.2, 0.4, 0.2],
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity
    }
  },
  selected: {
    opacity: [0.3, 0.6, 0.3],
    scale: [1, 1.2, 1],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity
    }
  }
};

// Text animations
export const textVariants: Variants = {
  rest: { y: 0 },
  hover: { 
    y: -3,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  selected: {
    y: -5,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};
