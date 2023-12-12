import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.scss';

import errorImage from '../../static/error/error_image.jpeg';

export const NotFoundPage: React.FC = () => {
  return (
    <article className={styles.error}>
      <h1 className={styles.error_type}>Page not found</h1>
      <p className={styles.error_discription}>
        Sorry, we couldn&apos;t find the page you&apos;re looking for. Perhabs
        you&apos;ve mistyped the URL?
      </p>

      <p className={styles.error_suggestion}>
        <p>Be sure to check your spelling or</p>
        <Link to="/home" className={styles.error_fix}>
          &nbsp;go to home page.
        </Link>
      </p>

      <img src={errorImage} alt="not found" className={styles.error_image} />
    </article>
  );
};
