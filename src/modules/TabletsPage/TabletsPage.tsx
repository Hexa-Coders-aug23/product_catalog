import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './TabletsPage.module.scss';
import { EmptyPageContent } from '../shared/components/EmptyPageContent';

export const TabletsPage: React.FC = () => {
  return (
    <main className={styles.container}>
      <div className={styles.breadcrumbs}>
        <NavLink to="/" className={styles.homeIcon} />
        <div className={styles.iconNext} />
        <p className={styles.step}>Tablets</p>
      </div>
      <h1 className={styles.title}>Tablets</h1>
      <p className={styles.amount}>0 models</p>

      <EmptyPageContent gadgets="Tablets" />
    </main>
  );
};
