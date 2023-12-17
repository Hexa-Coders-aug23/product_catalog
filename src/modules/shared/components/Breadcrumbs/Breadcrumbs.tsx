import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';
import { Breadcrumb } from '../../../../types/Breadcrumb';

type Props = {
  items: Breadcrumb[];
};

export const Breadcrumbs: React.FC<Props> = ({ items }) => (
  <nav className={styles.breadcrumbs}>
    {items.map((item, index) => {
      const firstItem = index === 0;
      const lastItem = index === items.length - 1;

      return (
        <React.Fragment
          key={item.label}
        >
          <Link
            to={item.url}
            className={classNames({
              [styles.homeIcon]: firstItem,
              [styles.step]: !firstItem,
              [styles.disabled]: lastItem,
            })}
          >
            {item.label}
          </Link>
          {!lastItem && <div className={styles.iconNext} />}
        </React.Fragment>
      );
    })}
  </nav>
);
