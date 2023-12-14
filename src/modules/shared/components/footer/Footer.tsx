import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';
import logoImg from '../../../../static/logo/Nice_Gadgets_logo_combined.svg';
import iconImg from '../../../../static/icons/Chevron_Arrow_Up.svg';

export const Footer: React.FC = () => {
  const scrollToTarget = (targetId: string) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div>
      <div className={styles.topLine} />
      <footer className={styles.footer}>
        <div>
          <NavLink to="/">
            <img src={logoImg} alt="Logo" className={styles.footerLogo} />
          </NavLink>
        </div>

        <div className={`${styles.footerBlock} ${styles.footerNav}`}>
          <ul className={styles.footerNav}>
            <li>
              <NavLink
                to="https://github.com/Hexa-Coders-aug23/product_catalog"
                className={styles.footerNavLink}
                target="_blank"
              >
                GITHUB
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacts" className={styles.footerNavLink}>
                CONTACTS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://www.president.gov.ua/documents/constitution"
                className={styles.footerNavLink}
                target="_blank"
              >
                RIGHTS
              </NavLink>
            </li>
          </ul>
        </div>

        <div className={styles.footerButton}>
          <p>Back to top</p>
          <button
            type="button"
            onClick={() => scrollToTarget('header')}
            className={styles.circleWithChevrone}
          >
            <img src={iconImg} alt="Chevrone" />
          </button>
        </div>
      </footer>
    </div>
  );
};
