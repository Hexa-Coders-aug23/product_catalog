/* eslint-disable no-console */
import React, { useContext, useEffect, useState } from 'react';
import styles from './FavouritesPage.module.scss';
import { PhonesContext } from '../../context/GlobalProvider';
import { getFavorites } from '../../api/favoritePhones';
import { Phone } from '../../types/Phone';
import { ProductsList } from '../shared/components/ProductsList';
import { Breadcrumb } from '../../types/Breadcrumb';
import { Loader } from '../shared/components/Loader';
import { Breadcrumbs } from '../shared/components/Breadcrumbs';

const breadcrumbs: Breadcrumb[] = [
  { label: '', url: '/' },
  { label: 'Favourites', url: '/favourites' },
];

export const FavouritesPage: React.FC = () => {
  const { favoriteItems } = useContext(PhonesContext);
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const favoritesCount = favoriteItems.length;

  useEffect(() => {
    const getFavoriteItems = async () => {
      const data = await getFavorites(favoriteItems.toString());

      setIsLoading(false);
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
      <Breadcrumbs items={breadcrumbs} />

      <h1 className={styles.main_favourites}>Favourites</h1>

      <p className={styles.itemsAmount}>{countTitle}</p>

      {favoritesCount > 0
        && (isLoading ? (
          <Loader
            times={favoritesCount}
            className={styles.loader}
            isGrid
          />
        ) : (
          <ProductsList phones={phones} />
        ))}

      {favoritesCount === 0 && (
        <p className={styles.emptyFavoritesText}>
          Build your collection: Click the heart icon to save favorites.
        </p>
      )}
    </main>
  );
};
