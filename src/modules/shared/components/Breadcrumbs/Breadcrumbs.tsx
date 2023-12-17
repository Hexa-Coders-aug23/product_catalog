import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';
import { Breadcrumb } from '../../../../types/Breadcrumb';

type Props = {
  items: Breadcrumb[];
};

export const Breadcrumbs: React.FC<Props> = ({ items }) => {
  return (
    <nav className={styles.breadcrumbs}>
      {items.map((item, index) => {
        return (
          <React.Fragment
            key={item.label}
          >
            <Link
              to={item.url}
              className={classNames({
                [styles.homeIcon]: index === 0,
                [styles.step]: index !== 0,
                [styles.disabled]: index === items.length - 1,
              })}
            >
              {item.label}
            </Link>
            {index !== items.length - 1 && <div className={styles.iconNext} />}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
