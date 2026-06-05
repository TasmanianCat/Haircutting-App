// src/components/sections/Hero/Hero.tsx
import { motion } from 'framer-motion';
import type {
  SpringTransition,
  StaggerContainerVariants,
  FadeUpVariants,
} from '@/types/animations';
import heroBg from '@/assets/images/hero-bg.webp';
import heroVideo from '@/assets/videos/hero-video.mp4';
import styles from './Hero.module.scss';

const Hero = () => {
  // ✅ Perfectly typed with no Framer Motion import conflicts
  const springTransition: SpringTransition = {
    type: 'spring',
    stiffness: 100,
    damping: 15,
  };

  const containerVariants: StaggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: FadeUpVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: springTransition,
    },
  };

  return (
    <section className={styles.hero}>
      {/* Background Layer */}
      <div className={styles.bgLayer}>
        <video
          className={styles.bgVideo}
          autoPlay
          muted
          loop
          playsInline
          preload='metadata'
          poster={heroBg} // ✅ This IS your fallback - no CSS needed
        >
          <source src={heroVideo} type='video/mp4' />
        </video>
        <div className={styles.overlay}></div>
      </div>

      {/* Content Layer */}
      <motion.div
        className={styles.content}
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <motion.h1 className={styles.title} variants={itemVariants}>
          Precision Cuts.
          <br />
          <span className={styles.accentText}>Timeless Style.</span>
        </motion.h1>

        <motion.p className={styles.subtitle} variants={itemVariants}>
          Experience premium grooming in a modern atmosphere. Where
          craftsmanship meets confidence.
        </motion.p>

        <motion.div className={styles.ctaGroup} variants={itemVariants}>
          <a href='#booking' className={styles.primaryBtn}>
            Book Appointment
          </a>
          <a href='#services' className={styles.secondaryBtn}>
            View Services
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className={styles.scrollLine}></span>
        <span className={styles.scrollText}>Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
