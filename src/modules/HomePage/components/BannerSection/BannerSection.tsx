import React from 'react';
import styles from './BannerSection.module.scss';
import { BannerSlider } from '../Banner/BannerSlider';

export const BannerSection: React.FC = () => {
  return (
    <div className={styles.bannerSection}>
      <BannerSlider />
    </div>
  );
};
