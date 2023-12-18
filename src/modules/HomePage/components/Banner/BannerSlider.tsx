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

type CheckPosition = (direction: 'right' | 'left', width: number) => void;

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
  const [frameWidth, setFrameWidth] = useState(0);

  const windowWidth = useRef(window.innerWidth);
  const finalPosition = -frameWidth * 2;
  const elementRef = useRef<HTMLDivElement | null>(null);

  const isActiveDot = (slide: number) => {
    return slide === scrollImage;
  };

  const handleScroll: CheckPosition = useCallback(
    (direction: string, width: number) => {
      if (direction === 'right') {
        const scrollRight = scrollImage + -width;

        if (scrollImage === finalPosition) {
          setScrollImage(0);

          return;
        }

        if (scrollImage < finalPosition) {
          setScrollImage(finalPosition);
        } else {
          setScrollImage(scrollRight);
        }
      }

      if (direction === 'left') {
        const scrollLeft = scrollImage + width;

        if (scrollImage === 0) {
          setScrollImage(finalPosition);

          return;
        }

        if (scrollLeft > 0) {
          setScrollImage(0);
        } else {
          setScrollImage(scrollLeft);
        }
      }
    },
    [finalPosition, scrollImage],
  );

  useEffect(() => {
    const handleResize = () => {
      if (elementRef.current) {
        setFrameWidth(elementRef.current.offsetWidth);
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
      handleScroll('right', frameWidth);
    }, 15000);

    return () => clearInterval(interval);
  }, [scrollImage, frameWidth, handleScroll]);

  const styles = {
    carouselList: {
      width: frameWidth * 3,
      transition: 'transform 1000ms ease-in-out',
      transform: `translateX(${scrollImage}px)`,
    },
  };

  return (
    <div className={style.pictureSlider}>
      <div className={style.sliderContainer}>
        <button
          type="button"
          className={style.sliderBtn}
          onClick={() => handleScroll('left', frameWidth)}
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
          onClick={() => handleScroll('right', frameWidth)}
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
            onClick={() => handleScroll('left', frameWidth)}
          />
        </li>
        <li className={style.dotContainer}>
          <button
            type="button"
            aria-label="Pagination dots"
            className={cn([style.dot], {
              [style.dotActive]: isActiveDot(-frameWidth),
            })}
            onClick={() => handleScroll('left', frameWidth)}
          />
        </li>
        <li className={style.dotContainer}>
          <button
            type="button"
            aria-label="Pagination dots"
            className={cn([style.dot], {
              [style.dotActive]: isActiveDot(finalPosition),
            })}
            onClick={() => handleScroll('left', frameWidth)}
          />
        </li>
      </ul>
    </div>
  );
};
