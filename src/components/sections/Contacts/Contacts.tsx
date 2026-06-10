import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import type {
  FadeUpVariants,
  StaggerContainerVariants,
} from '@/types/animations';
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiExternalLink,
  FiInstagram,
  FiFacebook,
} from 'react-icons/fi';
import styles from './Contacts.module.scss';

// Contact Information
const contactInfo = {
  address: '123 Barber Street, Downtown District, NY 10001',
  phone1: '+1 (555) 123-4567',
  phone2: '+1 (555) 987-6543',
  email: 'bookings@barberpro.com',
  mapUrl:
    'https://www.openstreetmap.org/export/embed.html?bbox=-73.84428262710573%2C40.7067421788946%2C-73.8301205635071%2C40.71398022286554&layer=mapnik&marker=40.71036129922581%2C-73.8372015953064',
  mapLink:
    'https://www.openstreetmap.org/?mlat=40.710361&mlon=-73.837202#map=17/40.710361/-73.837202&layers=N',
  social: {
    instagram: 'https://instagram.com/barberpro',
    facebook: 'https://facebook.com/barberpro',
  },
};

// Opening Hours Data
const openingHours = [
  { day: 'Monday', open: '09:00', close: '20:00' },
  { day: 'Tuesday', open: '09:00', close: '20:00' },
  { day: 'Wednesday', open: '09:00', close: '20:00' },
  { day: 'Thursday', open: '09:00', close: '20:00' },
  { day: 'Friday', open: '09:00', close: '20:00' },
  { day: 'Saturday', open: '10:00', close: '18:00' },
  { day: 'Sunday', open: null, close: null }, // Closed
];

// Helper function to check if shop is open
const checkIfOpen = () => {
  const now = new Date();
  const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
  const currentHour = now.getHours();
  const currentMinutes = now.getMinutes();
  const currentTime = currentHour * 60 + currentMinutes; // Convert to minutes for easier comparison

  const todaySchedule = openingHours[currentDay];

  if (!todaySchedule.open || !todaySchedule.close) {
    return false; // Closed today
  }

  const [openHour, openMin] = todaySchedule.open.split(':').map(Number);
  const [closeHour, closeMin] = todaySchedule.close.split(':').map(Number);

  const openTime = openHour * 60 + openMin;
  const closeTime = closeHour * 60 + closeMin;

  return currentTime >= openTime && currentTime < closeTime;
};

const Contacts = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Check open/closed status on component mount and every minute
  useEffect(() => {
    setIsOpen(checkIfOpen());
    const interval = setInterval(() => {
      setIsOpen(checkIfOpen());
    }, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

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
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: springTransition },
  };

  return (
    <section className={styles.contacts} id='contacts'>
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
            GET IN TOUCH
          </motion.span>

          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Visit Our Studio
          </motion.h2>
        </div>

        {/* Split Layout: Map + Info */}
        <div className={styles.splitLayout}>
          {/* Left: Map */}
          <motion.div
            className={styles.mapWrapper}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.mapContainer}>
              <iframe
                src={contactInfo.mapUrl}
                title='BarberPro Location Map'
                className={styles.map}
                loading='lazy'
              />
            </div>
            <a
              href={contactInfo.mapLink}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.mapLink}
            >
              View Larger Map <FiExternalLink size={14} />
            </a>
          </motion.div>

          {/* Right: Contact Info */}
          <motion.div
            className={styles.infoWrapper}
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            {/* Open/Closed Badge */}
            <motion.div className={styles.statusBadge} variants={itemVariants}>
              <span
                className={styles.statusDot}
                style={{ backgroundColor: isOpen ? '#10b981' : '#ef4444' }}
              ></span>
              <span className={styles.statusText}>
                {isOpen ? 'Open Now' : 'Closed Now'}
              </span>
            </motion.div>

            {/* Address */}
            <motion.div className={styles.infoBlock} variants={itemVariants}>
              <div className={styles.infoIcon}>
                <FiMapPin size={20} />
              </div>
              <div className={styles.infoContent}>
                <h3 className={styles.infoTitle}>Address</h3>
                <p className={styles.infoText}>{contactInfo.address}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address)}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.directionsLink}
                >
                  Get Directions <FiExternalLink size={12} />
                </a>
              </div>
            </motion.div>

            {/* Phone Numbers */}
            <motion.div className={styles.infoBlock} variants={itemVariants}>
              <div className={styles.infoIcon}>
                <FiPhone size={20} />
              </div>
              <div className={styles.infoContent}>
                <h3 className={styles.infoTitle}>Phone</h3>
                <a
                  href={`tel:${contactInfo.phone1}`}
                  className={styles.phoneLink}
                >
                  {contactInfo.phone1}
                </a>
                <a
                  href={`tel:${contactInfo.phone2}`}
                  className={styles.phoneLink}
                >
                  {contactInfo.phone2}{' '}
                  <span className={styles.whatsappLabel}>(WhatsApp)</span>
                </a>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div className={styles.infoBlock} variants={itemVariants}>
              <div className={styles.infoIcon}>
                <FiMail size={20} />
              </div>
              <div className={styles.infoContent}>
                <h3 className={styles.infoTitle}>Email</h3>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className={styles.infoText}
                >
                  {contactInfo.email}
                </a>
              </div>
            </motion.div>

            {/* Opening Hours */}
            <motion.div className={styles.infoBlock} variants={itemVariants}>
              <div className={styles.infoIcon}>
                <FiClock size={20} />
              </div>
              <div className={styles.infoContent}>
                <h3 className={styles.infoTitle}>Opening Hours</h3>
                <ul className={styles.hoursList}>
                  {openingHours.map((schedule) => (
                    <li key={schedule.day} className={styles.hoursItem}>
                      <span className={styles.day}>{schedule.day}</span>
                      <span className={styles.time}>
                        {schedule.open && schedule.close
                          ? `${schedule.open} - ${schedule.close}`
                          : 'Closed'}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div className={styles.socialLinks} variants={itemVariants}>
              <a
                href={contactInfo.social.instagram}
                target='_blank'
                rel='noopener noreferrer'
                className={styles.socialIcon}
                aria-label='Instagram'
              >
                <FiInstagram size={24} />
              </a>
              <a
                href={contactInfo.social.facebook}
                target='_blank'
                rel='noopener noreferrer'
                className={styles.socialIcon}
                aria-label='Facebook'
              >
                <FiFacebook size={24} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
