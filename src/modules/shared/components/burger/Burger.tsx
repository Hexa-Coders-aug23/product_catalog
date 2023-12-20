import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import logo from '../../../../static/logo/Nice_Gadgets_logo_combined.svg';
import styles from './BurgerMenu.module.scss';
import { PhonesContext } from '../../../../context/GlobalProvider';
import { Tabs } from '../../../../types/Tabs';

export const BurgerMenu: React.FC<Tabs> = ({ tabs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { favoriteItems, cartItems } = useContext(PhonesContext);

  const favoritesCount = favoriteItems.length;
  const cartItemsCount = cartItems.length;

  return (
    <>
      {isOpen ? (
        <aside className={styles.menu}>
          <div className={styles.header}>
            <NavLink to="/" className={styles.logo}>
              <img src={logo} alt="nice_gadgets_logo" />
            </NavLink>

            <button
              type="button"
              aria-label="Close Burger menu"
              onClick={() => setIsOpen(false)}
              className={styles.iconCloseContainer}
            >
              <i className={`${styles.icon} ${styles.menuClose}`} />
            </button>
          </div>

          <div className={styles.navigation} data-cy="Nav">
            {tabs.map((tab) => (
              <NavLink
                key={tab.title}
                to={tab.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => cn(styles.page, {
                  [styles.active]: isActive,
                })}
              >
                <div className={styles.pageName}>{tab.title}</div>
              </NavLink>
            ))}
            <NavLink
              to="account"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => cn(styles.page, {
                [styles.active]: isActive,
              })}
            >
              <div className={styles.pageName}>my account</div>
            </NavLink>
          </div>

          <div className={styles.buttonWrapper}>
            <NavLink
              to="favourites"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => cn([styles.iconWrapper], {
                [styles.active]: isActive,
              })}
            >
              {favoritesCount > 0 && (
                <span className={styles.count}>{favoritesCount}</span>
              )}
              <i className={`${styles.icon} ${styles.favourites}`} />
            </NavLink>

            <NavLink
              to="cart"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => cn([styles.iconWrapper], {
                [styles.active]: isActive,
              })}
            >
              {cartItemsCount > 0 && (
                <span className={styles.count}>{cartItemsCount}</span>
              )}
              <i className={`${styles.icon} ${styles.cart}`} />
            </NavLink>
          </div>
        </aside>
      ) : (
        <button
          type="button"
          aria-label="Open Burger menu"
          className={styles.mobile}
          onClick={() => setIsOpen(true)}
        >
          <i className={`${styles.iconMenu} ${styles.menuOpen}`} />
        </button>
      )}
    </>
  );
};
