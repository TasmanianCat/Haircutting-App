// src/components/layout/Header/Header.tsx
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import MobileMenu from '../MobileMenu/MobileMenu'; // Import the new component
import styles from './Header.module.scss';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* 1. Logo */}
        <a href='/' className={styles.logo}>
          BARBER<span className={styles.logoAccent}>PRO</span>
        </a>

        {/* 2. Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            <li>
              <a href='#home' className={styles.navLink}>
                Home
              </a>
            </li>
            <li>
              <a href='#about' className={styles.navLink}>
                About
              </a>
            </li>
            <li>
              <a href='#services' className={styles.navLink}>
                Services
              </a>
            </li>
            <li>
              <a href='#gallery' className={styles.navLink}>
                Gallery
              </a>
            </li>
            <li>
              <a href='#contacts' className={styles.navLink}>
                Contacts
              </a>
            </li>
          </ul>
        </nav>

        {/* 3. Call to Action Button (Desktop) */}
        <a href='#booking' className={styles.ctaButton}>
          Book Now
        </a>

        {/* 4. Mobile Hamburger Button */}
        <button
          className={styles.mobileMenuBtn}
          onClick={toggleMobileMenu}
          aria-label='Open menu'
        >
          <FiMenu size={28} />
        </button>
      </div>

      {/* 5. Render the actual MobileMenu component */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </header>
  );
};

export default Header;
