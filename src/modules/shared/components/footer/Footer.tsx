import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';
// import logoImg from './Logo.png';
import iconImg from '../../../../static/icons/Chevron_Arrow_Up.svg';

export const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      <footer>
        <div>
          <NavLink to="#HomePage">
            {/* <img src={logoImg} alt="Logo" className={styles.footerLogo} /> */}
          </NavLink>
        </div>

        <div className={`${styles.footerBlock} ${styles.footerNav}`}>
          <ul className={styles.footerNav}>
            <li>
              <NavLink
                to="https://github.com/Hexa-Coders-aug23/product_catalog"
                className={styles.footerNavLink}
              >
                GITHUB
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://discord.gg/7PQTUGZS"
                className={styles.footerNavLink}
              >
                CONTACTS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://www.president.gov.ua/documents/constitution"
                className={styles.footerNavLink}
              >
                RIGHTS
              </NavLink>
            </li>
          </ul>
        </div>

        <div className={styles.footerButton}>
          <p>Back to top</p>
          <NavLink to="#header">
            <div className={styles.circleWithChevrone}>
              <img src={iconImg} alt="Chevrone" />
            </div>
          </NavLink>
        </div>
      </footer>
    </div>
  );
};
