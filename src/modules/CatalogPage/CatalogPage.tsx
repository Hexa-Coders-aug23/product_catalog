import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './CatalogPage.module.scss';

export const CatalogPage: React.FC = () => {
  return (
    <main className={styles.container}>
      <div className={styles.breadcrumbs}>
        <NavLink to="/" className={styles.homeIcon} />
        <div className={styles.iconNext} />
        <NavLink to="phones" className={styles.step}>Phones</NavLink>
      </div>
      <h1 className={styles.title}>Mobile phones</h1>
      <p className={styles.amount}>95 models</p>
      <div className={styles.selects}>
        <div className={styles.selectWrapper}>
          <label htmlFor="sort" className={styles.selectLabel}>
            Sort by
          </label>
          <select id="sort" className={styles.sort}>
            <option>Newest</option>
          </select>
        </div>
        <div className={styles.selectWrapper}>
          <label htmlFor="sort" className={styles.selectLabel}>
            Items on page
          </label>
          <select id="sort" className={styles.sort}>
            <option>16</option>
          </select>
        </div>
      </div>
      <div className={styles.itemsContainer}>
        <div className={styles.card} />
        <div className={styles.card} />
        <div className={styles.card} />
        <div className={styles.card} />
        <div className={styles.card} />
        <div className={styles.card} />
        <div className={styles.card} />
      </div>
    </main>
  );
};
