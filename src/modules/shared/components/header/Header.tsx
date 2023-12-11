import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import logo from '../../../../static/logo/Nice_Gadgets_logo_combined.svg';
import like from '../../../../static/icons/Favourites_Heart.svg';
import cart from '../../../../static/icons/Shopping_bag_Cart.svg';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  const tabs = [
    { to: '/', title: 'home' },
    { to: '/phones', title: 'phones' },
    { to: '/tablets', title: 'tablets' },
    { to: '/accessories', title: 'accessories' },
  ];

  const icons = [
    { to: '/favourites', title: 'favourites', src: like },
    { to: '/cart', title: 'cart', src: cart },
  ];

  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.header__logo}>
        <img src={logo} alt="nice_gadgets_logo" />
      </NavLink>

      <nav className={styles.navbar} data-cy="Nav">
        <div className={styles.navbar__container}>
          <div className={styles.navbar__block}>
            {tabs.map((tab) => (
              <NavLink
                to={tab.to}
                className={({ isActive }) => cn(styles.navbar__item, {
                  [styles.navbar__item__active]: isActive,
                })}
              >
                <div className={styles.navbar__item__name}>{tab.title}</div>
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      <div className={styles.navbar__icons}>
        {icons.map((icon) => (
          <NavLink
            to={icon.to}
            className={({ isActive }) => cn(styles.navbar__icon, {
              [styles.navbar__icon__active]: isActive,
            })}
          >
            <img src={icon.src} alt={`${icon.title} icon`} />
          </NavLink>
        ))}
      </div>
    </header>
  );
};
