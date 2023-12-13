import React from 'react';
import { NavLink } from 'react-router-dom';

import cn from 'classnames';
import logo from '../../../../static/logo/Nice_Gadgets_logo_combined.svg';
import styles from './Header.module.scss';
import { BurgerMenu } from '../burger';

export const Header: React.FC = () => {
  const tabs = [
    { to: '/', title: 'home' },
    { to: '/phones', title: 'phones' },
    { to: '/tablets', title: 'tablets' },
    { to: '/accessories', title: 'accessories' },
  ];

  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        <img src={logo} alt="nice_gadgets_logo" />
      </NavLink>

      <nav className={styles.navbar} data-cy="Nav">
        {tabs.map((tab) => (
          <NavLink
            key={tab.title}
            to={tab.to}
            className={({ isActive }) => cn(styles.page, {
              [styles.active]: isActive,
            })}
          >
            <div className={styles.pageName}>{tab.title}</div>
          </NavLink>
        ))}
      </nav>

      <div className={styles.buttonWrapper}>
        <NavLink
          to="favourites"
          className={({ isActive }) => cn([styles.fullscreen], {
            [styles.active]: isActive,
          })}
        >
          <i className={`${styles.wrapper} ${styles.favourites}`} />
        </NavLink>

        <NavLink
          to="cart"
          className={({ isActive }) => cn([styles.fullscreen], {
            [styles.active]: isActive,
          })}
        >
          <i className={`${styles.wrapper} ${styles.cart}`} />
        </NavLink>

        <BurgerMenu tabs={tabs} />
      </div>
    </header>
  );
};
