import { motion } from 'framer-motion';
import type {
  FadeUpVariants,
  StaggerContainerVariants,
} from '@/types/animations';
import {
  FiScissors,
  FiUser,
  FiStar,
  FiAward,
  FiZap,
  FiDroplet,
} from 'react-icons/fi';
import styles from './Services.module.scss';

// Data array for easy maintenance
const servicesData = [
  {
    id: 1,
    title: 'Classic Haircut',
    price: '$35',
    description:
      'A precision cut tailored to your style, including wash and styling.',
    icon: <FiScissors />,
  },
  {
    id: 2,
    title: 'Beard Sculpting',
    price: '$25',
    description: 'Expert trimming, shaping, and lining to define your jawline.',
    icon: <FiUser />,
  },
  {
    id: 3,
    title: 'Hot Towel Shave',
    price: '$30',
    description:
      'The ultimate relaxation with a straight razor and essential oils.',
    icon: <FiDroplet />,
  },
  {
    id: 4,
    title: 'The Full Package',
    price: '$55',
    description:
      'Haircut, beard trim, and hot towel treatment. The complete experience.',
    icon: <FiAward />,
  },
  {
    id: 5,
    title: 'Kids Cut',
    price: '$25',
    description:
      'Patient and stylish cuts for the little gentlemen (under 12).',
    icon: <FiStar />,
  },
  {
    id: 6,
    title: 'Express Service',
    price: '$20',
    description: 'A quick trim and cleanup for when you are short on time.',
    icon: <FiZap />,
  },
];

const Services = () => {
  const springTransition = {
    type: 'spring' as const,
    stiffness: 100,
    damping: 15,
  };

  const containerVariants: StaggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const cardVariants: FadeUpVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: springTransition },
  };

  return (
    <section className={styles.services} id='services'>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <motion.span
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            OUR SERVICES
          </motion.span>

          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Premium Grooming Menu
          </motion.h2>
        </div>

        {/* Services Grid */}
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.1 }}
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              className={styles.card}
              variants={cardVariants}
            >
              <div className={styles.iconWrapper}>{service.icon}</div>

              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <span className={styles.price}>{service.price}</span>
                </div>
                <p className={styles.description}>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
