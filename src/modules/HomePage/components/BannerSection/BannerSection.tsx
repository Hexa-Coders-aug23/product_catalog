import React from 'react';
import styles from './BannerSection.module.scss';
import { BannerSlider } from '../Banner/BannerSlider';
import { Banner } from '../../../../types/Banner';

import banner1Mob from '../../../../static/banner/Now_Avaliable_mobile.png';
import banner1Dsk from '../../../../static/banner/Now_Avaliable_desktop.png';
import banner2Mob from '../../../../static/banner/i_Watch_banner_mobile.jpg';
import banner2Dsk from '../../../../static/banner/i_Watch_banner_tablet.jpg';
import banner3Mob from '../../../../static/banner/iPad_Pro_banner_mobile.png';
import banner3Dsk from '../../../../static/banner/iPad_Pro_banner_desktop.jpg';

const Banners: Banner[] = [
  {
    id: 0,
    imgMobile: banner1Mob,
    imgDesktop: banner1Dsk,
    title: 'Phones banner',
  },
  {
    id: 1,
    imgMobile: banner2Mob,
    imgDesktop: banner2Dsk,
    title: 'Accessories banner',
  },
  {
    id: 2,
    imgMobile: banner3Mob,
    imgDesktop: banner3Dsk,
    title: 'Tablets banner',
  },
];

export const BannerSection: React.FC = () => {
  return (
    <div className={styles.bannerSection}>
      <BannerSlider Banners={Banners} />
    </div>
  );
};
