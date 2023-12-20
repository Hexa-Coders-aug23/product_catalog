import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.scss';

import errorImage from '../../static/error/robot_error.png';

export const NotFoundPage: React.FC = () => {
  return (
    <main className={`${styles.error} ${styles.container}`}>
      <img src={errorImage} alt="not found" className={styles.error_image} />

      <div className={styles.error_suggestion}>
        <h1 className={styles.error_type}>page not found</h1>
        <p className={styles.error_discription}>
          We Couldn&apos;t Find The Page You Were Looking For
        </p>

        <Link to="/home" className={styles.error_fix}>
          <p className={styles.error_fix_text}>Back To Home</p>
        </Link>
      </div>
    </main>
  );
};
