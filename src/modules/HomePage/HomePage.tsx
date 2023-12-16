import React from 'react';
import styles from './HomePage.module.scss';
import { BannerSection } from './components/BannerSection';
import { BrandNewSection } from './components/BrandNewSection';
import { CategoriesSection } from './components/CategoriesSection';
import { HotPricesSection } from './components/HotPricesSection';

export const HomePage: React.FC = () => {
  return (
    <main className={styles.mainWrapper}>
      <BannerSection />
      <BrandNewSection />
      <CategoriesSection />
      <HotPricesSection />
    </main>
  );
};
