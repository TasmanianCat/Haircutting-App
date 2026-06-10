import { useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import styles from './MobileMenu.module.scss';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  // Pro-tip: Lock body scroll when menu is open so the background doesn't scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function to ensure scroll is unlocked if component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // If the menu is closed, don't render anything
  if (!isOpen) return null;

  return (
    // The overlay catches clicks outside the menu to close it
    <div className={styles.overlay} onClick={onClose}>
      {/* The actual menu panel */}
      <nav className={styles.menu} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label='Close menu'
        >
          <FiX size={32} />
        </button>

        <ul className={styles.navList}>
          <li>
            <a href='#home' className={styles.navLink} onClick={onClose}>
              Home
            </a>
          </li>
          <li>
            <a href='#about' className={styles.navLink} onClick={onClose}>
              About
            </a>
          </li>
          <li>
            <a href='#services' className={styles.navLink} onClick={onClose}>
              Services
            </a>
          </li>
          <li>
            <a href='#gallery' className={styles.navLink} onClick={onClose}>
              Gallery
            </a>
          </li>
          <li>
            <a href='#contacts' className={styles.navLink} onClick={onClose}>
              Contacts
            </a>
          </li>
        </ul>

        <a href='#contacts' className={styles.ctaButton} onClick={onClose}>
          Book Now
        </a>
      </nav>
    </div>
  );
};

export default MobileMenu;
