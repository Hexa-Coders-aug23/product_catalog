/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-console */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useLocation, NavLink, useNavigate } from 'react-router-dom';
import * as phoneService from '../../api/phones';

import heartIcon from '../../static/icons/Favourites_Heart.svg';

import styles from './PhonePage.module.scss';
import { PhoneDetailed } from '../../types/Phone';
import { ProductsSlider } from '../shared/components/ProductsSliderLib';

const handleButtonClick = (section: string, option: string, color: string) => {
  console.log(
    `Запит до серверу для розділу ${section} та опції ${option}/ ${color}`,
  );
};

const addTo = (id: string, place: string) => {
  console.log(`Запит до серверу для додавання продукту з id ${id} в ${place}`);
};

let num = 1;

export const PhonePage: React.FC = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState<PhoneDetailed | null>(null);
  const [newColor, setNewColor] = useState('');
  const [newCapacity, setNewCapacity] = useState('');
  const [currentMainPhoto, setCurrentMainPhoto] = useState('');
  // const [currentSearch, setCurrentSearch] = useState('');
  const [recommended, setRecommended] = useState([]);

  const phonesSlug = useLocation().pathname.slice(8);

  const [phoneLink, setPhoneLink] = useState(phonesSlug);

  const phoneLinkBase = phonesSlug.split('-').slice(0, -2).join('-');

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

  // useEffect(() => {
  //   setCurrentSearch(window.location.href);
  //   console.log('Пошукова строка змінилася:', currentSearch);
  // }, []);

  // const handleLocationChange = () => {
  //   console.log('Пошукова строка змінилася:', currentSearch);
  // };

  // useEffect(() => {
  //   handleLocationChange();
  // }, [currentSearch]);

  const handleAltPhotoClick = (photo: string) => {
    setCurrentMainPhoto(photo);
  };

  const updateUrl = (newLink: string) => {
    navigate(`/phones/${newLink}`);
  };

  const handleColorButtonClick = (colorOption: string) => {
    handleButtonClick('color', colorOption, newColor);
    setNewColor(colorOption);
    setPhoneLink(
      `${phoneLinkBase}-${newCapacity.toLowerCase()}-${colorOption}`,
    );
    updateUrl(phoneLink);

    setPhoneLink((prevPhoneLink) => {
      const newPhoneLinkBase = prevPhoneLink.split('-').slice(0, -2).join('-');
      const newLink = `${newPhoneLinkBase}-${newCapacity.toLowerCase()}-${colorOption}`;

      updateUrl(newLink);

      return newLink;
    });
  };

  const handleCapacityButtonClick = (capacityOption: string) => {
    handleButtonClick('capacity', capacityOption, newCapacity);
    setNewCapacity(capacityOption);
    setPhoneLink((prevPhoneLink) => {
      const newPhoneLinkBase = prevPhoneLink.split('-').slice(0, -2).join('-');
      const newLink = `${newPhoneLinkBase}-${capacityOption.toLowerCase()}-${newColor}`;

      updateUrl(newLink);

      return newLink;
    });
  };

  if (!phone) {
    return <div>Loading...</div>;
  }

  const {
    // id,
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
    camera,
    zoom,
    cell,
  } = phone;

  if (num === 1) {
    setNewColor(phone.color);
    setNewCapacity(phone.capacity);
    num = 0;
  }

  return (
    <main>
      <div className={styles.breadcrumbs}>
        <NavLink to="/" className={styles.homeIcon} />
        <div className={styles.iconNext} />
        <NavLink to="phones" className={styles.prevStep}>
          Phones
        </NavLink>
        <div className={styles.iconNext} />
        <NavLink to="#" className={styles.step}>
          {name}
        </NavLink>
      </div>
      <h1 className={styles.mainHeader}>{name}</h1>
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
        <aside>
          <div className={styles.productSelect}>
            <section className={styles.selectParametrs}>
              <div className={styles.selectParametrsHeader}>
                <h3>Avalible colors</h3>
                <h3>id: 802390</h3>
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
      <div className={styles.articlesBlock}>
        <article className={styles.aboutArticle}>
          <div>
            <h2 className={styles.articleHeader}>About</h2>
            <div className={styles.articleLine} />
          </div>
          <section className={styles.aboutSection}>
            <h3 className={styles.aboutSectionHeader}>
              {description[0].title}
            </h3>
            <p className={styles.aboutSectionText}>{description[0].text[0]}</p>
            <br />
            <p className={styles.aboutSectionText}>{description[0].text[1]}</p>
          </section>
          <section className={styles.aboutSection}>
            <h3 className={styles.aboutSectionHeader}>
              {description[1].title}
            </h3>
            <p className={styles.aboutSectionText}>{description[1].text}</p>
          </section>
          <section className={styles.aboutSection}>
            <h3 className={styles.aboutSectionHeader}>
              {description[2].title}
            </h3>
            <p className={styles.aboutSectionText}>{description[2].text}</p>
          </section>
        </article>
        <article className={styles.techSpecsArticle}>
          <div className={styles.techSpecsContainer}>
            <h2 className={styles.articleHeader}>Tech specs</h2>
            <div className={styles.articleLine} />
          </div>
          <ul className={styles.techInfo}>
            <li className={styles.techInfoParametr}>
              <h3 className={styles.techSpecsKey}>Screen</h3>
              <h3 className={styles.techSpecsValue}>{screen}</h3>
            </li>
            <li className={styles.techInfoParametr}>
              <h3 className={styles.techSpecsKey}>Resolution</h3>
              <h3 className={styles.techSpecsValue}>{resolution}</h3>
            </li>
            <li className={styles.techInfoParametr}>
              <h3 className={styles.techSpecsKey}>Processor</h3>
              <h3 className={styles.techSpecsValue}>{processor}</h3>
            </li>
            <li className={styles.techInfoParametr}>
              <h3 className={styles.techSpecsKey}>RAM</h3>
              <h3 className={styles.techSpecsValue}>{ram}</h3>
            </li>
            <li className={styles.techInfoParametr}>
              <h3 className={styles.techSpecsKey}>Built in memory</h3>
              <h3 className={styles.techSpecsValue}>{capacity}</h3>
            </li>
            <li className={styles.techInfoParametr}>
              <h3 className={styles.techSpecsKey}>Camera</h3>
              <h3 className={styles.techSpecsValue}>{camera}</h3>
            </li>
            <li className={styles.techInfoParametr}>
              <h3 className={styles.techSpecsKey}>Zoom</h3>
              <h3 className={styles.techSpecsValue}>{zoom}</h3>
            </li>
            <li className={styles.techInfoParametr}>
              <h3 className={styles.techSpecsKey}>Cell</h3>
              <h3 className={styles.techSpecsValue}>{cell.join(', ')}</h3>
            </li>
          </ul>
        </article>
      </div>
      <ProductsSlider sectionTitle="You may also like" phones={recommended} />
    </main>
  );
};
