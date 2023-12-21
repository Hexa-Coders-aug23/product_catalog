/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';

import cartStyles from '../../shared/components/Card/Card.module.scss';
import styles from './ProductCard.module.scss';
import { PhoneDetailed } from '../../../types/Phone';

import { PhonesContext } from '../../../context/GlobalProvider';
import defaultIcon from '../../shared/components/Card/Favourites.png';
import favoritedIcon from '../../shared/components/Card/Union.png';

type Props = {
  phone: PhoneDetailed;
  newColor: string;
  setNewColor: React.Dispatch<React.SetStateAction<string>>;
  newCapacity: string;
  setNewCapacity: React.Dispatch<React.SetStateAction<string>>;
  setPhoneLink: React.Dispatch<React.SetStateAction<string>>;
  updateUrl: (newLink: string) => void;
};

export const ProductCard: React.FC<Props> = ({
  phone,
  newColor,
  setNewColor,
  newCapacity,
  setNewCapacity,
  setPhoneLink,
  updateUrl,
}) => {
  const navigate = useNavigate();
  const [currentMainPhoto, setCurrentMainPhoto] = useState('');

  useEffect(() => {
    if (phone) {
      setCurrentMainPhoto(phone.images[0]);
    }
  }, [phone, newColor, newCapacity]);

  const handleColorButtonClick = (colorOption: string) => {
    setPhoneLink((prevPhoneLink) => {
      setNewColor(colorOption);
      const newPhoneLinkBase = prevPhoneLink.split('-').slice(0, -2).join('-');
      const newLink = `${newPhoneLinkBase}-${(newCapacity.toLowerCase()) || (phone.capacity.toLowerCase())}-${colorOption}`;

      updateUrl(newLink);

      return newLink;
    });
  };

  const handleCapacityButtonClick = (capacityOption: string) => {
    setPhoneLink((prevPhoneLink) => {
      setNewCapacity(capacityOption);
      const newPhoneLinkBase = prevPhoneLink.split('-').slice(0, -2).join('-');
      const newLink = `${newPhoneLinkBase}-${(capacityOption.toLowerCase())}-${newColor || phone.color}`;

      updateUrl(newLink);

      return newLink;
    });
  };

  const {
    addToCart,
    handleFavorite,
    favoriteItems,
    cartItems,
  } = useContext(PhonesContext);

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
    screen,
    resolution,
    processor,
    ram,
    phoneId,
  } = phone;

  const isAlreadyAddedToCart = cartItems.some((item) => item.id === phoneId);
  const isAlreadyFavorited = favoriteItems.includes(phoneId);

  return (
    <div className={styles.productCard}>
      <div className={styles.photosBlock}>
        <div className={styles.altPhotos}>
          {images.map((image, imageNum) => (
            <div
              key={imageNum}
              className={`${styles.altPhotoBlock} ${
                image === currentMainPhoto && styles.activeColor
              }`}
              onClick={() => setCurrentMainPhoto(image)}
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
              type="button"
              className={cn(cartStyles.addToCartButton, {
                [cartStyles.alreadyAddedToCartButton]: isAlreadyAddedToCart,
              })}
              onClick={
                !isAlreadyAddedToCart
                  ? () => addToCart(phoneId)
                  : () => navigate('/cart')
              }
              data-qa="hover"
            >
              {isAlreadyAddedToCart ? 'Added to cart' : 'Add to cart'}
            </button>
            <button
              className={cartStyles.addToCompareButton}
              type="button"
              onClick={() => handleFavorite(phoneId)}
            >
              <img
                className={cartStyles.addToCompareIcon}
                src={isAlreadyFavorited ? favoritedIcon : defaultIcon} // Checks if added to favorites and conditional render
                alt="iconToCompare"
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
  );
};
