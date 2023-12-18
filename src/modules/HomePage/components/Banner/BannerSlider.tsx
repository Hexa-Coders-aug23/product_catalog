import {
  useCallback, useEffect, useRef, useState,
} from 'react';
import cn from 'classnames';
import arrowLeft from '../../../../static/icons/Chevron_Arrow_Left.svg';
import arrowRight from '../../../../static/icons/Chevron_Arrow_Right.svg';
import banner1Mob from '../../../../static/banner/Now_Avaliable_mobile.png';
import banner1Dsk from '../../../../static/banner/Now_Avaliable_desktop.png';
import banner2Mob from '../../../../static/banner/i_Watch_banner_mobile.jpg';
import banner2Dsk from '../../../../static/banner/i_Watch_banner_tablet.jpg';
import banner3Mob from '../../../../static/banner/iPad_Pro_banner_mobile.png';
import banner3Dsk from '../../../../static/banner/iPad_Pro_banner_desktop.jpg';

import styles from './BannerSlider.module.scss';

type Direction = (direction: 'right' | 'left') => void;
type SlideNumber = (slideNum: number) => void;

const BANNERS = [
  {
    id: 1,
    imgMobile: banner1Mob,
    imgDesktop: banner1Dsk,
    title: 'Phones banner',
  },
  {
    id: 2,
    imgMobile: banner2Mob,
    imgDesktop: banner2Dsk,
    title: 'Accessories banner',
  },
  {
    id: 3,
    imgMobile: banner3Mob,
    imgDesktop: banner3Dsk,
    title: 'Tablets banner',
  },
];

export const BannerSlider = () => {
  const [scrollImage, setScrollImage] = useState(0);
  const [slideNumber, setSlideNumber] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const windowWidth = useRef(window.innerWidth);
  const elementRef = useRef<HTMLDivElement | null>(null);

  const isActiveDot = (slide: number) => {
    return slide === slideNumber;
  };

  const handleSlide: SlideNumber = useCallback(
    (slideNum: number) => {
      setSlideNumber(slideNum);
      setScrollImage(-containerWidth * slideNum);
    },
    [containerWidth],
  );

  const handleScroll: Direction = useCallback(
    (direction: string) => {
      if (direction === 'right') {
        handleSlide((slideNumber + 1) % 3);
      }

      if (direction === 'left') {
        handleSlide((slideNumber - 1 + 3) % 3);
      }
    },
    [slideNumber, handleSlide],
  );

  useEffect(() => {
    const handleResize = () => {
      if (elementRef.current) {
        setContainerWidth(elementRef.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleScroll('right');
    }, 15000);

    return () => clearInterval(interval);
  }, [scrollImage, handleScroll]);

  const sliderAnimation = {
    width: containerWidth * 3,
    transition: 'transform 1000ms ease-in-out',
    transform: `translateX(${scrollImage}px)`,
  };

  return (
    <div className={styles.bannerSlider}>
      <div className={styles.sliderContainer}>
        <button
          type="button"
          className={styles.sliderBtn}
          onClick={() => handleScroll('left')}
        >
          <img src={arrowLeft} alt="button left" />
        </button>
        <div className={styles.imagesContainer} ref={elementRef}>
          <ul className={styles.imagesList} style={sliderAnimation}>
            {BANNERS.map((banner) => (
              <li className={styles.imagesItem} key={banner.id}>
                <img
                  src={
                    windowWidth.current <= 640
                      ? banner.imgMobile
                      : banner.imgDesktop
                  }
                  alt={banner.title}
                  className={styles.image}
                />
              </li>
            ))}
          </ul>
        </div>
        <button
          type="button"
          className={styles.sliderBtn}
          onClick={() => handleScroll('right')}
        >
          <img src={arrowRight} alt="button right" />
        </button>
      </div>
      <ul className={styles.dots}>
        <li className={styles.dotContainer}>
          <button
            type="button"
            aria-label="Pagination dots"
            className={cn([styles.dot], {
              [styles.dotActive]: isActiveDot(0),
            })}
            onClick={() => handleSlide(0)}
          />
        </li>
        <li className={styles.dotContainer}>
          <button
            type="button"
            aria-label="Pagination dots"
            className={cn([styles.dot], {
              [styles.dotActive]: isActiveDot(1),
            })}
            onClick={() => handleSlide(1)}
          />
        </li>
        <li className={styles.dotContainer}>
          <button
            type="button"
            aria-label="Pagination dots"
            className={cn([styles.dot], {
              [styles.dotActive]: isActiveDot(2),
            })}
            onClick={() => handleSlide(2)}
          />
        </li>
      </ul>
    </div>
  );
};
