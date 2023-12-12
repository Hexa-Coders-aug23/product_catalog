import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  const tabs = [
    { to: '/', title: 'home' },
    { to: '/phones', title: 'phones' },
    { to: '/tablets', title: 'tablets' },
    { to: '/accessories', title: 'accessories' },
  ];

  return (
    <aside className={styles.menu}>
      {tabs.map((tab) => (
        <NavLink
          to={tab.to}
          className={({ isActive }) => cn(styles.page, {
            [styles.page__active]: isActive,
          })}
        >
          <div className={styles.page_name}>{tab.title}</div>
        </NavLink>
      ))}
    </aside>
  );
};
