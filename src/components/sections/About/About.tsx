import { motion } from 'framer-motion';
import type {
  FadeUpVariants,
  StaggerContainerVariants,
} from '@/types/animations';
import aboutImg from '@/assets/images/about-main.webp';
import styles from './About.module.scss';

const About = () => {
  // Reusing our perfectly typed animation variants
  const springTransition = {
    type: 'spring' as const,
    stiffness: 100,
    damping: 15,
  };

  const containerVariants: StaggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants: FadeUpVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: springTransition },
  };

  return (
    <section className={styles.about} id='about'>
      <div className={styles.container}>
        {/* 1. Image Column */}
        <motion.div
          className={styles.imageWrapper}
          variants={itemVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }} // Triggers when 30% visible
        >
          <div className={styles.imageFrame}>
            <img
              src={aboutImg}
              alt='Barber crafting a precise haircut'
              className={styles.image}
            />
          </div>
          {/* Decorative offset border */}
          <div className={styles.imageBorder}></div>
        </motion.div>

        {/* 2. Text Column */}
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span className={styles.subtitle} variants={itemVariants}>
            OUR STORY
          </motion.span>

          <motion.h2 className={styles.title} variants={itemVariants}>
            More Than Just a Haircut.
            <br />
            <span className={styles.titleAccent}>
              A Tradition of Excellence.
            </span>
          </motion.h2>

          <motion.p className={styles.description} variants={itemVariants}>
            Founded on the principles of classic craftsmanship and modern style,
            BarberPro has been redefining the grooming experience. We believe a
            haircut is not just a service, but a ritual that boosts confidence
            and sharpens your edge.
          </motion.p>

          <motion.p className={styles.description} variants={itemVariants}>
            Our master barbers bring decades of combined experience, ensuring
            every fade, taper, and beard trim is executed with surgical
            precision and artistic flair.
          </motion.p>

          {/* Feature List */}
          <motion.ul className={styles.features} variants={itemVariants}>
            <li>
              <span className={styles.featureIcon}>✓</span>
              Master Barbers with 10+ Years Experience
            </li>
            <li>
              <span className={styles.featureIcon}>✓</span>
              Premium Organic Grooming Products
            </li>
            <li>
              <span className={styles.featureIcon}>✓</span>
              Complimentary Beverages & Wi-Fi
            </li>
          </motion.ul>

          <motion.div variants={itemVariants}>
            <a href='#booking' className={styles.ctaButton}>
              Book Your Visit
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
