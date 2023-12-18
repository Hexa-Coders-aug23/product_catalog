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

import style from './BannerSlider.module.scss';

type CheckPosition = (direction: 'right' | 'left') => void;

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
  const finalPosition = -containerWidth * 2;
  const elementRef = useRef<HTMLDivElement | null>(null);

  const isActiveDot = (slide: number) => {
    return slide === slideNumber;
  };

  const handleScroll: CheckPosition = useCallback((direction: string) => {
    if (direction === 'right') {
      const scrollRight = scrollImage - containerWidth;

      if (scrollImage === finalPosition) {
        setScrollImage(0);
        setSlideNumber(0);

        return;
      }

      if (scrollImage > finalPosition) {
        setScrollImage(scrollRight);
        setSlideNumber(slideNumber + 1);
      }
    }

    if (direction === 'left') {
      const scrollLeft = scrollImage + containerWidth;

      if (scrollImage === 0) {
        setScrollImage(finalPosition);
        setSlideNumber(2);

        return;
      }

      if (scrollLeft <= 0) {
        setScrollImage(scrollLeft);
        setSlideNumber(slideNumber - 1);
      }
    }
  }, [finalPosition, scrollImage, containerWidth, slideNumber]);

  const handleDotSlide = (slideNum: number) => {
    setSlideNumber(slideNum);
    setScrollImage(-containerWidth * slideNum);
  };

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

  const styles = {
    carouselList: {
      width: containerWidth * 3,
      transition: 'transform 1000ms ease-in-out',
      transform: `translateX(${scrollImage}px)`,
    },
  };

  return (
    <div className={style.bannerSlider}>
      <div className={style.sliderContainer}>
        <button
          type="button"
          className={style.sliderBtn}
          onClick={() => handleScroll('left')}
        >
          <img src={arrowLeft} alt="button left" />
        </button>
        <div className={style.imagesContainer} ref={elementRef}>
          <ul className={style.imagesList} style={styles.carouselList}>
            {BANNERS.map((banner) => (
              <li className={style.imagesItem} key={banner.id}>
                <img
                  src={
                    windowWidth.current <= 640
                      ? banner.imgMobile
                      : banner.imgDesktop
                  }
                  alt={banner.title}
                  className={style.image}
                />
              </li>
            ))}
          </ul>
        </div>
        <button
          type="button"
          className={style.sliderBtn}
          onClick={() => handleScroll('right')}
        >
          <img src={arrowRight} alt="button right" />
        </button>
      </div>
      <ul className={style.dots}>
        <li className={style.dotContainer}>
          <button
            type="button"
            aria-label="Pagination dots"
            className={cn([style.dot], {
              [style.dotActive]: isActiveDot(0),
            })}
            onClick={() => handleDotSlide(0)}
          />
        </li>
        <li className={style.dotContainer}>
          <button
            type="button"
            aria-label="Pagination dots"
            className={cn([style.dot], {
              [style.dotActive]: isActiveDot(1),
            })}
            onClick={() => handleDotSlide(1)}
          />
        </li>
        <li className={style.dotContainer}>
          <button
            type="button"
            aria-label="Pagination dots"
            className={cn([style.dot], {
              [style.dotActive]: isActiveDot(2),
            })}
            onClick={() => handleDotSlide(2)}
          />
        </li>
      </ul>
    </div>
  );
};
