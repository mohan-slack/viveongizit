
export const containerVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95
  },
  visible: (index: number) => ({ 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }),
  hover: {
    y: -8,
    scale: 1.02,
    rotateX: 5,
    rotateY: 2,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  selected: {
    y: -12,
    scale: 1.05,
    rotateX: 8,
    rotateY: 3,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  rest: {
    y: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.4
    }
  }
};

export const iconVariants = {
  hidden: { scale: 0, rotate: -45 },
  visible: { 
    scale: 1, 
    rotate: 0,
    transition: {
      delay: 0.3,
      duration: 0.5,
      ease: "backOut"
    }
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.2
    }
  }
};
