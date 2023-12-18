/* eslint-disable no-console */
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './FavouritesPage.module.scss';

import homeIcon from '../../static/icons/Home.svg';
import vectorIcon from '../../static/icons/Chevron_Arrow_Right.svg';
import { PhonesContext } from '../../context/GlobalProvider';
import { getFavorites } from '../../api/favoritePhones';
import { Phone } from '../../types/Phone';
import { ProductsList } from '../shared/components/ProductsList';

export const FavouritesPage: React.FC = () => {
  const { favoriteItems } = useContext(PhonesContext);
  const [phones, setPhones] = useState<Phone[]>([]);
  const favoritesCount = favoriteItems.length;

  useEffect(() => {
    const getFavoriteItems = async () => {
      const data = await getFavorites(favoriteItems.toString());

      setPhones(data);
    };

    if (favoritesCount > 0) {
      getFavoriteItems();
    }
  }, [favoriteItems, favoritesCount]);

  const countTitle = `${favoritesCount} ${
    favoritesCount === 1 ? 'item' : 'items'
  }`;

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

      <p className={styles.itemsAmount}>{countTitle}</p>

      {favoritesCount > 0 ? (
        <ProductsList phones={phones} />
      ) : (
        <p className={styles.emptyFavoritesText}>
          Build your collection: Click the heart icon to save favorites.
        </p>
      )}
    </main>
  );
};
