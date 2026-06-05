import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import styles from './Header.module.scss';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* 1.Logo */}
        <a href='/' className={styles.Logo}>
          BARBER<span className={styles.logoAccent}>PRO</span>
        </a>

        {/* 2. Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            <li className={styles.navLink}>
              <a href='#home'>Home</a>
            </li>
            <li className={styles.navLink}>
              <a href='#about'>About</a>
            </li>
            <li className={styles.navLink}>
              <a href='#services'>Services</a>
            </li>
            <li className={styles.navLink}>
              <a href='#gallery'>Gallery</a>
            </li>
            <li className={styles.navLink}>
              <a href='#contacts'>Contacts</a>
            </li>
          </ul>
        </nav>

        {/* 3. Call to action button (Desktop) */}
        <a href='#booking' className={styles.ctaButton}>
          Book Now
        </a>

        {/* 4. Mobile Hamburger button */}
        <button
          className={styles.mobileMenuBtn}
          onClick={toggleMobileMenu}
          aria-label='Toggle menu'
        >
          {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Note: We will render the actual MobileMenu slide-out here in the next step */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenuOverlay}>
          <p>Mobile Menu goes here...</p>
        </div>
      )}
    </header>
  );
};

export default Header;
