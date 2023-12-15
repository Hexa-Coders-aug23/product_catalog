import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FavouritesPage.module.scss';

import homeIcon from '../../static/icons/Home.svg';
import vectorIcon from '../../static/icons/Chevron_Arrow_Right.svg';

export const FavouritesPage: React.FC = () => {
  return (
    <main className={styles.container}>
      <div className={styles.favourites}>
        <Link to="/home">
          <img src={homeIcon} alt="icon" className={styles.favouriteIcon} />
          <img src={vectorIcon} alt="icon" className={styles.favouriteIcon} />
        </Link>

        <p className={styles.textFavourites}>Favourites</p>
      </div>

      <h1 className={styles.main_favourites}>Favourites</h1>

      <p className={styles.itemsAmount}>5 items</p>

      <section className={styles.phones}>#</section>
    </main>
  );
};
