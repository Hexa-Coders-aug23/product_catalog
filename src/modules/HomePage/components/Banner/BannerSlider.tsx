import {
  useCallback, useEffect, useRef, useState,
} from 'react';
import cn from 'classnames';
import arrowLeft from '../../../../static/icons/Chevron_Arrow_Left.svg';
import arrowRight from '../../../../static/icons/Chevron_Arrow_Right.svg';
import styles from './BannerSlider.module.scss';
import { Banner } from '../../../../types/Banner';

type Direction = (direction: 'right' | 'left') => void;
type SlideNumber = (slideNum: number) => void;

export const BannerSlider: React.FC<{ Banners: Banner[] }> = ({ Banners }) => {
  const [transitionSpeed, setTransitionSpeed] = useState(1000);
  const [slideNumber, setSlideNumber] = useState(1);
  const [containerWidth, setContainerWidth] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const NUMBER_OF_SLIDES = Banners.length + 2;
  const windowWidth = useRef(window.innerWidth);
  const elementRef = useRef<HTMLDivElement | null>(null);

  const isActiveDot = (slide: number) => {
    return slide === slideNumber - 1;
  };

  const handleSlide: SlideNumber = useCallback(
    (slideNum: number) => {
      setSlideNumber(slideNum);
    }, [],
  );

  const handleScroll: Direction = useCallback(
    (direction: string) => {
      if (direction === 'right') {
        handleSlide((slideNumber + 1) % NUMBER_OF_SLIDES);
      }

      if (direction === 'left') {
        handleSlide((slideNumber - 1 + NUMBER_OF_SLIDES) % NUMBER_OF_SLIDES);
      }
    },
    [slideNumber, handleSlide, NUMBER_OF_SLIDES],
  );

  const handleTouchStart = (e: React.TouchEvent<HTMLLIElement>) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLLIElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      handleScroll('right');
    }

    if (touchStart - touchEnd < -75) {
      handleScroll('left');
    }
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
    }, 5000);

    return () => clearInterval(interval);
  }, [handleScroll]);

  const handleTransitionEnd = () => {
    if (slideNumber === NUMBER_OF_SLIDES - 1) {
      setTransitionSpeed(1);
      handleSlide(1);
    } else if (slideNumber === 0) {
      setTransitionSpeed(1);
      handleSlide(NUMBER_OF_SLIDES - 2);
    } else {
      setTransitionSpeed(1000);
    }
  };

  const sliderAnimation = {
    width: containerWidth * NUMBER_OF_SLIDES,
    transition: `transform ${transitionSpeed}ms ease-in-out`,
    transform: `translateX(${-slideNumber * (100 / NUMBER_OF_SLIDES)}%)`,
  };

  const newBanners = [
    { ...Banners[2], id: -1 },
    ...Banners,
    { ...Banners[0], id: NUMBER_OF_SLIDES },
  ];

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
          <ul
            className={styles.imagesList}
            style={sliderAnimation}
            onTransitionEnd={handleTransitionEnd}
          >
            {newBanners.map((banner) => (
              <li
                className={styles.imagesItem}
                key={banner.id}
                onTouchStart={(touchStrtEvt) => handleTouchStart(touchStrtEvt)}
                onTouchMove={(touchMoveEvt) => handleTouchMove(touchMoveEvt)}
                onTouchEnd={() => handleTouchEnd()}
              >
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
        {Banners.map((banner) => (
          <li key={banner.id} className={styles.dotContainer}>
            <button
              type="button"
              aria-label={banner.title}
              className={cn([styles.dot], {
                [styles.dotActive]: isActiveDot(banner.id),
              })}
              onClick={() => handleSlide(banner.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
