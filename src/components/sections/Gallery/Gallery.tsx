import { motion } from 'framer-motion';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import type {
  FadeUpVariants,
  StaggerContainerVariants,
} from '@/types/animations';
import styles from './Gallery.module.scss';

// Import your local images
import img1 from '@/assets/images/gallery/gallery-1.webp';
import img2 from '@/assets/images/gallery/gallery-2.webp';
import img3 from '@/assets/images/gallery/gallery-3.webp';
import img4 from '@/assets/images/gallery/gallery-4.webp';
import img5 from '@/assets/images/gallery/gallery-5.webp';
import img6 from '@/assets/images/gallery/gallery-6.webp';

const galleryData = [
  { id: 1, src: img1, title: 'Classic Fade', category: 'Haircuts' },
  { id: 2, src: img2, title: 'Beard Sculpting', category: 'Grooming' },
  { id: 3, src: img3, title: 'Textured Crop', category: 'Styling' },
  { id: 4, src: img4, title: 'Hot Towel Shave', category: 'Relaxation' },
  { id: 5, src: img5, title: 'Pompadour', category: 'Styling' },
  { id: 6, src: img6, title: 'Precision Line-up', category: 'Detailing' },
];

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const itemVariants: FadeUpVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: springTransition },
  };

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <>
      <section className={styles.gallery} id='gallery'>
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
              OUR PORTFOLIO
            </motion.span>

            <motion.h2
              className={styles.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Masterpieces in Motion
            </motion.h2>
          </div>

          {/* Asymmetric Grid */}
          <motion.div
            className={styles.grid}
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.1 }}
          >
            {galleryData.map((item, index) => (
              <motion.div
                key={item.id}
                className={styles.item}
                variants={itemVariants}
                onClick={() => openLightbox(index)}
              >
                <img src={item.src} alt={item.title} className={styles.image} />
                <div className={styles.overlay}>
                  <span className={styles.category}>{item.category}</span>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ✅ Lightbox Component - OUTSIDE the section, at root level */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={galleryData.map((item) => ({
          src: item.src,
          title: item.title,
        }))}
      />
    </>
  );
};

export default Gallery;
