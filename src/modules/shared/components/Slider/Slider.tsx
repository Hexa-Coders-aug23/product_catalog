import React from 'react';
// import './SliderNavigation.module.scss';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import styles from './Slider.module.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules

export const Slider: React.FC = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop
        pagination={{
          clickable: true,
        }}
        // navigation={{
        //   prevEl: styles.swiper_button_prev,
        //   nextEl: styles.swiper_button_next,
        // }}
        navigation
        modules={[Pagination, Navigation]}
        className={styles.swiper}
      >
        <SwiperSlide className={`${styles.bannerImg} ${styles.bannerImg1}`} />
        <SwiperSlide className={`${styles.bannerImg} ${styles.bannerImg2}`}>
          Slide 2
        </SwiperSlide>
        <SwiperSlide className={`${styles.bannerImg} ${styles.bannerImg3}`}>
          Slide 3
        </SwiperSlide>
      </Swiper>
    </>
  );
};
