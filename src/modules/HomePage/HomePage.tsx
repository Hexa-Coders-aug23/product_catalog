import React from 'react';
import styles from './HomePage.module.scss';
import { BannerSection } from './components/BannerSection';
import { CategoriesSection } from './components/CategoriesSection';

export const HomePage: React.FC = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Welcome to Nice Gadgets store!</h1>
      <BannerSection />
      <div>Brand-New Section</div>
      <CategoriesSection />
      <div>Hot prices</div>
    </main>
  );
};
