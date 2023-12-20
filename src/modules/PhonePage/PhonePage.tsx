/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-console */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as phoneService from '../../api/phones';

import heartIcon from '../../static/icons/Favourites_Heart.svg';

import styles from './PhonePage.module.scss';
import { PhoneDetailed } from '../../types/Phone';
import { HeaderComponent } from './Header';
import AboutArticle from './AboutArticle/AboutArticle';
import TechSpecsArticle from './TechArticle/TechArticle';
import { ProductsSlider } from '../shared/components/ProductsSliderLib';

const handleButtonClick = (section: string, option: string, color: string) => {
  console.log(
    `Запит до серверу для розділу ${section} та опції ${option}/ ${color}`,
  );
};

const addTo = (id: string, place: string) => {
  console.log(`Запит до серверу для додавання продукту з id ${id} в ${place}`);
};

export const PhonePage: React.FC = () => {
  const navigate = useNavigate();
  const [recommended, setRecommended] = useState([]);

  const [phone, setPhone] = useState<PhoneDetailed | null>(null);
  const [newColor, setNewColor] = useState('');
  const [newCapacity, setNewCapacity] = useState('');
  const [currentMainPhoto, setCurrentMainPhoto] = useState('');

  const phonesSlug = useLocation().pathname.slice(8);

  const [phoneLink, setPhoneLink] = useState(phonesSlug);

  const fetchPhoneById = async () => {
    try {
      const data = await phoneService.getPhone(phoneLink);

      console.log(data);

      setPhone(data);
    } catch (error) {
      console.error('Error fetching phone:', error);
    }
  };

  const fetchRecommended = async () => {
    try {
      const data = await phoneService.getRecommendedPhones(phoneLink);

      setRecommended(data);
    } catch (error) {
      console.error('Error fetching recommended phones:', error);
    }
  };

  useEffect(() => {
    fetchPhoneById();
    fetchRecommended();
  }, [phoneLink]);

  useEffect(() => {
    if (phone) {
      setCurrentMainPhoto(phone.images[0]);
    }
  }, [phone, newColor, newCapacity]);

  function monitorUrlChange() {
    let currentUrl = window.location.href;

    const intervalId = setInterval(() => {
      const newUrl = window.location.href;

      if (newUrl !== currentUrl) {
        console.log('Адресная строка изменилась:', window.location.hash.slice(9));
        setPhoneLink(window.location.hash.slice(9));
        setNewCapacity('');
        setNewColor('');

        clearInterval(intervalId);

        currentUrl = newUrl;

        monitorUrlChange();
      }
    }, 1000);
  }

  monitorUrlChange();

  if (!phone) {
    return <div>Loading...</div>;
  }

  const handleAltPhotoClick = (photo: string) => {
    setCurrentMainPhoto(photo);
  };

  const updateUrl = (newLink: string) => {
    navigate(`/phones/${newLink}`);
  };

  const handleColorButtonClick = (colorOption: string) => {
    handleButtonClick('color', colorOption, newColor);

    setPhoneLink((prevPhoneLink) => {
      setNewColor(colorOption);
      const newPhoneLinkBase = prevPhoneLink.split('-').slice(0, -2).join('-');
      const newLink = `${newPhoneLinkBase}-${(newCapacity.toLowerCase()) || (phone.capacity.toLowerCase())}-${colorOption}`;

      updateUrl(newLink);

      return newLink;
    });
  };

  const handleCapacityButtonClick = (capacityOption: string) => {
    handleButtonClick('capacity', capacityOption, newCapacity);
    setPhoneLink((prevPhoneLink) => {
      setNewCapacity(capacityOption);
      const newPhoneLinkBase = prevPhoneLink.split('-').slice(0, -2).join('-');
      const newLink = `${newPhoneLinkBase}-${(capacityOption.toLowerCase())}-${newColor || phone.color}`;

      updateUrl(newLink);

      return newLink;
    });
  };

  const {
    namespaceId,
    name,
    capacityAvailable,
    capacity,
    priceRegular,
    priceDiscount,
    colorsAvailable,
    color,
    images,
    description,
    screen,
    resolution,
    processor,
    ram,
  } = phone;

  return (
    <main className={styles.productPage}>
      <HeaderComponent name={name} />
      <div className={styles.productCard}>
        <div className={styles.photosBlock}>
          <div className={styles.altPhotos}>
            {images.map((image, imageNum) => (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
              <div
                key={imageNum}
                className={`${styles.altPhotoBlock} ${
                  image === currentMainPhoto && styles.activeColor
                }`}
                onClick={() => handleAltPhotoClick(image)}
              >
                <img
                  src={image}
                  alt={namespaceId}
                  className={styles.altPhoto}
                />
              </div>
            ))}
          </div>

          <div className={styles.mainPhotoSpaceLeft} />
          <img src={currentMainPhoto} alt={name} className={styles.mainPhoto} />
          <div className={styles.mainPhotoSpaceRight} />
        </div>
        <aside className={styles.asideMenu}>
          <div className={styles.productSelect}>
            <section className={styles.selectParametrs}>
              <div className={styles.selectParametrsHeader}>
                <h3>Avalible colors</h3>
                <h3 className={styles.asideId}>id: 802390</h3>
              </div>
              <div className={styles.selectParametrsOptions}>
                {colorsAvailable.map((colorOption) => (
                  <div
                    key={colorOption}
                    className={`${styles.selectColorContainer} ${
                      colorOption === color && styles.activeColor
                    }`}
                  >
                    <button
                      className={`${styles.selectColorOption} ${styles[colorOption]}`}
                      type="button"
                      onClick={() => handleColorButtonClick(colorOption)}
                    />
                  </div>
                ))}
              </div>
            </section>

            <section className={styles.selectParametrs}>
              <h3 className={styles.selectParametrsHeader}>Select capacity</h3>
              <div className={styles.selectParametrsOptions}>
                {capacityAvailable.map((capacityOption) => (
                  <button
                    key={capacityOption}
                    className={`${styles.selectCapacityOption} ${
                      capacityOption === capacity && styles.activeCapacity
                    }`}
                    type="button"
                    onClick={() => handleCapacityButtonClick(capacityOption)}
                  >
                    {capacityOption}
                  </button>
                ))}
              </div>
            </section>
          </div>
          <div className={styles.buySection}>
            <div className={styles.prices}>
              <h1 className={styles.currentPrice}>{`$${priceDiscount}`}</h1>
              {priceDiscount !== priceRegular && (
                <h2 className={styles.previousPrice}>{`$${priceRegular}`}</h2>
              )}
            </div>
            <div className={styles.buySectionButtons}>
              <button
                className={styles.addToCartButton}
                type="button"
                onClick={() => addTo('productId', 'cart')}
              >
                Add to cart
              </button>
              <button
                className={styles.addToFavouriteButton}
                type="button"
                onClick={() => addTo('productId', 'favourite')}
              >
                <img
                  className={styles.heartIcon}
                  src={heartIcon}
                  alt="heart icon"
                />
              </button>
            </div>
          </div>
          <ul className={styles.techInfo}>
            <li className={styles.techInfoParametr}>
              <h3 className={styles.asideInfoKey}>Screen</h3>
              <h3 className={styles.asideInfoValue}>{screen}</h3>
            </li>
            <li className={styles.techInfoParametr}>
              <h3 className={styles.asideInfoKey}>Resolution</h3>
              <h3 className={styles.asideInfoValue}>{resolution}</h3>
            </li>
            <li className={styles.techInfoParametr}>
              <h3 className={styles.asideInfoKey}>Processor</h3>
              <h3 className={styles.asideInfoValue}>{processor}</h3>
            </li>
            <li className={styles.techInfoParametr}>
              <h3 className={styles.asideInfoKey}>RAM</h3>
              <h3 className={styles.asideInfoValue}>{ram}</h3>
            </li>
          </ul>
        </aside>
      </div>
      {/* <ProductCard
        phone={phone}
        currentMainPhoto={currentMainPhoto}
        handleAltPhotoClick={handleAltPhotoClick}
        handleColorButtonClick={handleColorButtonClick}
        handleCapacityButtonClick={handleCapacityButtonClick}
        addTo={addTo}
        heartIcon={heartIcon}
      /> */}
      <div className={styles.articlesBlock}>
        <AboutArticle description={description} />
        <TechSpecsArticle phone={phone} />
      </div>
      <ProductsSlider sectionTitle="You may also like" phones={recommended} />
    </main>
  );
};
