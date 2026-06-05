import type { TargetAndTransition } from 'framer-motion';

export interface SpringTransition {
  type: 'spring';
  stiffness: number;
  damping: number;
}

// Add [key: string] index signature to satisfy Framer Motion's Variants type
export interface FadeUpVariants {
  hidden: { y: number; opacity: number };
  visible: {
    y: number;
    opacity: number;
    transition: SpringTransition;
  };
  [key: string]: TargetAndTransition; // Allows any additional variant keys
}

export interface StaggerContainerVariants {
  hidden: { opacity: number };
  visible: {
    opacity: number;
    transition?: {
      staggerChildren: number;
      delayChildren: number;
    };
  };
  [key: string]: TargetAndTransition; // Same fix here
}
