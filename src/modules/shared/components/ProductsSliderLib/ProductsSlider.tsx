/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { FC } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './ProductsSlider.module.scss';
import { Card } from '../Card';
import { Phone } from '../../../../types/Phone';

type Props = {
  sectionTitle: string;
  phones: Phone[];
};

export const ProductsSlider: FC<Props> = ({ sectionTitle, phones }) => {
  return (
    <section className={styles.slider}>
      <div className={`${styles['slider-header']}`}>
        <h2 className={`${styles['slider-title']}`}>{sectionTitle}</h2>
        <div className={styles.buttons}>
          <button
            type="button"
            className={`${styles['slider-button']} ${styles['slider-button__prev']}`}
          />
          <button
            type="button"
            className={`${styles['slider-button']} ${styles['slider-button__next']}`}
          />
        </div>
      </div>
      <Swiper
        navigation={{
          nextEl: `.${styles['slider-button__next']}`,
          prevEl: `.${styles['slider-button__prev']}`,
        }}
        wrapperClass={styles.content}
        modules={[Navigation]}
        spaceBetween={16}
        breakpoints={{
          300: {
            slidesPerView: 1.2,
          },
          400: {
            slidesPerView: 1.55,
          },
          500: {
            slidesPerView: 1.6,
          },
          600: {
            slidesPerView: 2.16,
            slidesPerGroup: 2,
          },
          700: {
            slidesPerView: 2.47,
            slidesPerGroup: 2,
          },
          800: {
            slidesPerView: 2.78,
            slidesPerGroup: 2,
          },
          900: {
            slidesPerView: 3.09,
            slidesPerGroup: 3,
          },
          1000: {
            slidesPerView: 3.4,
            slidesPerGroup: 3,
          },
          1100: {
            slidesPerView: 3.7,
            slidesPerGroup: 3,
          },
          1200: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }}
      >
        {phones.map((phone) => (
          <SwiperSlide key={phone.id}>
            <Card
              key={phone.id}
              itemId={phone.itemId}
              id={phone.id}
              image={phone.image}
              capacity={phone.capacity}
              screen={phone.screen}
              ram={phone.ram}
              fullPrice={phone.fullPrice}
              price={phone.price}
              name={phone.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
