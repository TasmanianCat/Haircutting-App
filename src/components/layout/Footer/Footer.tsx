import { FiInstagram, FiFacebook, FiMapPin, FiPhone } from 'react-icons/fi';
import styles from './Footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* 1. Top Row: Logo, Links, Info */}
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.brandColumn}>
            <a href='/' className={styles.logo}>
              BARBER<span className={styles.logoAccent}>PRO</span>
            </a>
            <p className={styles.tagline}>
              Precision cuts and premium grooming for the modern gentleman.
            </p>
            <div className={styles.socialLinks}>
              <a
                href='https://instagram.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Instagram'
              >
                <FiInstagram size={20} />
              </a>
              <a
                href='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Facebook'
              >
                <FiFacebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li>
                <a href='#home'>Home</a>
              </li>
              <li>
                <a href='#about'>About Us</a>
              </li>
              <li>
                <a href='#services'>Services</a>
              </li>
              <li>
                <a href='#gallery'>Gallery</a>
              </li>
              <li>
                <a href='#contacts'>Contact</a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Services</h4>
            <ul className={styles.linkList}>
              <li>
                <a href='#services'>Classic Haircut</a>
              </li>
              <li>
                <a href='#services'>Beard Sculpting</a>
              </li>
              <li>
                <a href='#services'>Hot Towel Shave</a>
              </li>
              <li>
                <a href='#services'>The Full Package</a>
              </li>
            </ul>
          </div>

          {/* Contact Summary Column */}
          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Contact</h4>
            <ul className={styles.contactList}>
              <li>
                <FiMapPin className={styles.contactIcon} />
                123 Barber Street, NY
              </li>
              <li>
                <FiPhone className={styles.contactIcon} />
                <a href='tel:+15551234567'>+1 (555) 123-4567</a>
              </li>
            </ul>
          </div>
        </div>

        {/* 2. Bottom Row: Copyright */}
        <div className={styles.bottomRow}>
          <p className={styles.copyright}>
            &copy; {currentYear} BarberPro Studio. All rights reserved.
          </p>
          <p className={styles.credits}>
            Crafted with passion for the grooming industry.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
