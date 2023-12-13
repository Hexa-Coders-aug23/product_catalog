import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as phoneService from '../../api/phones';
import styles from './CatalogPage.module.scss';
import { Phone } from '../../types/Phone';
import { Card } from '../shared/components/Card';

export const CatalogPage: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  const getPhones = async () => {
    const data = await phoneService.getPhones();

    setPhones(data);
  };

  useEffect(() => {
    getPhones();
  }, []);

  return (
    <main className={styles.container}>
      <div className={styles.breadcrumbs}>
        <NavLink to="/" className={styles.homeIcon} />
        <div className={styles.iconNext} />
        <NavLink to="phones" className={styles.step}>Phones</NavLink>
      </div>
      <h1 className={styles.title}>Mobile phones</h1>
      <p className={styles.amount}>{`${phones.length} models`}</p>
      <div className={styles.selects}>
        <div className={styles.selectWrapper}>
          <label htmlFor="sort" className={styles.selectLabel}>
            Sort by
          </label>
          <select id="sort" className={styles.sort}>
            <option>Newest</option>
            <option>Alphabetically</option>
            <option>Cheapest</option>
          </select>
        </div>
        <div className={styles.selectWrapper}>
          <label htmlFor="sort" className={styles.selectLabel}>
            Items on page
          </label>
          <select id="sort" className={styles.sort}>
            <option>4</option>
            <option>8</option>
            <option>16</option>
            <option>all</option>
          </select>
        </div>
      </div>
      <div className={styles.itemsContainer}>
        {phones.map(({
          // itemId,
          image,
          name,
          price,
          fullPrice,
          screen,
          capacity,
          ram,
        }) => {
          return (
            <Card
              // itemId={itemId}
              image={image}
              name={name}
              price={price}
              fullPrice={fullPrice}
              screen={screen}
              capacity={capacity}
              ram={ram}
            />
          );
        })}
      </div>
    </main>
  );
};
