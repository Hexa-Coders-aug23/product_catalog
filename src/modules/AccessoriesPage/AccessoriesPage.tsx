import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AccessoriesPage.module.scss';

export const AccessoriesPage: React.FC = () => {
  return (
    <main className={styles.container}>
      <div className={styles.breadcrumbs}>
        <NavLink to="/" className={styles.homeIcon} />
        <div className={styles.iconNext} />
        <p className={styles.step}>Accessories</p>
      </div>
      <h1 className={styles.title}>Accessories</h1>
      <p className={styles.amount}>0 models</p>

      <h2 className={styles.outOfStockTitle}>
        Notice: Currently Out of Stock on Accessories
      </h2>

      <p className={styles.outOfStockText}>
        We&apos;re currently out of stock on accessories.
        <br />
        Our team is working hard to restock.
        <br />
        Apologies for any inconvenience.
        <br />
        Explore other exciting products in the meantime.
        <br />
        Thank you for your understanding.
        <br />
        <br />
        Nice Gadgets!
      </p>
    </main>
  );
};
