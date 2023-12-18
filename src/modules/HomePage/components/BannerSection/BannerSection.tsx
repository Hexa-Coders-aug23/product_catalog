import React from 'react';
import styles from './BannerSection.module.scss';
import { Slider } from '../Swiper/Slider';

export const BannerSection: React.FC = () => {
  return (
    <div className={styles.bannerSection}>
      <Slider />
    </div>
  );
};
