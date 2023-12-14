/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-console */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as phoneService from '../../api/phones';

import heartIcon from '../../static/icons/Favourites_Heart.svg';
import styles from './PhonePage.module.scss';
import { PhoneDetailed } from '../../types/Phone';

const handleButtonClick = (section: string, option: string, color: string) => {
  console.log(
    `Запит до серверу для розділу ${section} та опції ${option}/ ${color}`,
  );
};

const addTo = (id: string, place: string) => {
  console.log(`Запит до серверу для додавання продукту з id ${id} в ${place}`);
};

export const PhonePage: React.FC = () => {
  const [phone, setPhone] = useState<PhoneDetailed | null>(null);
  // const { id } = useParams<{ id: string }>();

  const fetchPhoneById = async () => {
    try {
      const data = await phoneService.getPhone(
        'apple-iphone-11-pro-max-64gb-spacegray',
      ); // (id)

      console.log(data);

      setPhone(data);
    } catch (error) {
      console.error('Error fetching phone:', error);
    }
  };

  useEffect(() => {
    fetchPhoneById();
  }, []);

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
              <img
                key={imageNum}
                src={image}
                alt={namespaceId}
                className={styles.altPhoto}
              />
            ))}
          </div>
          <div className={styles.mainPhotoSpaceLeft} />
          <img src={images[0]} alt={name} className={styles.mainPhoto} />
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
                      onClick={() => handleButtonClick('color', colorOption, color)}
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
                    onClick={() => handleButtonClick('capacity', capacityOption, capacity)}
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
      <article className={styles.aboutArticle}>
        <h2 className={styles.articleHeader}>About</h2>
        <section className={styles.aboutSection}>
          <h3 className={styles.aboutSectionHeader}>{description[0].title}</h3>
          <p className={styles.aboutSectionText}>{description[0].text[0]}</p>
          <br />
          <p className={styles.aboutSectionText}>{description[0].text[1]}</p>
        </section>
        <section className={styles.aboutSection}>
          <h3 className={styles.aboutSectionHeader}>{description[1].title}</h3>
          <p className={styles.aboutSectionText}>{description[1].text}</p>
        </section>
        <section className={styles.aboutSection}>
          <h3 className={styles.aboutSectionHeader}>{description[2].title}</h3>
          <p className={styles.aboutSectionText}>{description[2].text}</p>
        </section>
      </article>
      <article className={styles.techSpecsArticle}>
        <div className={styles.techSpecsContainer}>
          <h2 className={styles.articleHeader}>Tech specs</h2>
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
      <article className={styles.recomendsArticle}>
        <h2 className={styles.articleHeader}>You may also like</h2>
        <div className={styles.cards}>some cards and slider</div>
      </article>
    </main>
  );
};
