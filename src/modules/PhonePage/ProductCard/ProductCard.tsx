/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import styles from '../PhonePage.module.scss';

interface ProductPhotosProps {
  images: string[];
  currentMainPhoto: string;
  handleAltPhotoClick: (photo: string) => void;
}

const ProductPhotos: React.FC<ProductPhotosProps> = ({
  images,
  currentMainPhoto,
  handleAltPhotoClick,
}) => (
  <div className={styles.photosBlock}>
    <div className={styles.altPhotos}>
      {images.map((image, imageNum) => (
        <div
          key={imageNum}
          className={`${styles.altPhotoBlock} ${
            image === currentMainPhoto && styles.activeColor
          }`}
          onClick={() => handleAltPhotoClick(image)}
        >
          <img src={image} alt="img" className={styles.altPhoto} />
        </div>
      ))}
    </div>

    <div className={styles.mainPhotoSpaceLeft} />
    <img src={currentMainPhoto} alt="img" className={styles.mainPhoto} />
    <div className={styles.mainPhotoSpaceRight} />
  </div>
);

interface ProductSelectProps {
  colorsAvailable: string[];
  color: string;
  handleColorButtonClick: (colorOption: string) => void;
  capacityAvailable: string[];
  capacity: string;
  handleCapacityButtonClick: (capacityOption: string) => void;
}

const ProductSelect: React.FC<ProductSelectProps> = ({
  colorsAvailable,
  color,
  handleColorButtonClick,
  capacityAvailable,
  capacity,
  handleCapacityButtonClick,
}) => (
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
);

interface ProductAsideProps {
  colorsAvailable: string[];
  color: string;
  handleColorButtonClick: (colorOption: string) => void;
  capacityAvailable: string[];
  capacity: string;
  handleCapacityButtonClick: (capacityOption: string) => void;
  priceDiscount: number;
  priceRegular: number;
  addTo: (id: string, place: string) => void;
  heartIcon: string;
}

const ProductAside: React.FC<ProductAsideProps> = ({
  colorsAvailable,
  color,
  handleColorButtonClick,
  capacityAvailable,
  capacity,
  handleCapacityButtonClick,
  priceDiscount,
  priceRegular,
  addTo,
  heartIcon,
}) => (
  <aside className={styles.asideMenu}>
    <ProductSelect
      colorsAvailable={colorsAvailable}
      color={color}
      handleColorButtonClick={handleColorButtonClick}
      capacityAvailable={capacityAvailable}
      capacity={capacity}
      handleCapacityButtonClick={handleCapacityButtonClick}
    />
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
    {/* Додатковий код для відображення технічної інформації, якщо потрібно */}
  </aside>
);

type Phone = {
  images: string[],
  colorsAvailable: string[],
  color: string,
  capacityAvailable: string[],
  capacity: string,
  priceDiscount: number,
  priceRegular: number,
};

interface ProductCardProps {
  phone: Phone;
  currentMainPhoto: string;
  handleAltPhotoClick: (photo: string) => void;
  handleColorButtonClick: (colorOption: string) => void;
  handleCapacityButtonClick: (capacityOption: string) => void;
  addTo: (id: string, place: string) => void;
  heartIcon: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  phone,
  currentMainPhoto,
  handleAltPhotoClick,
  handleColorButtonClick,
  handleCapacityButtonClick,
  addTo,
  heartIcon,
}) => {
  const {
    images,
    colorsAvailable,
    color,
    capacityAvailable,
    capacity,
    priceDiscount,
    priceRegular,
  } = phone;

  return (
    <div className={styles.productCard}>
      <ProductPhotos
        images={images}
        currentMainPhoto={currentMainPhoto}
        handleAltPhotoClick={handleAltPhotoClick}
      />
      <ProductAside
        colorsAvailable={colorsAvailable}
        color={color}
        handleColorButtonClick={handleColorButtonClick}
        capacityAvailable={capacityAvailable}
        capacity={capacity}
        handleCapacityButtonClick={handleCapacityButtonClick}
        priceDiscount={priceDiscount}
        priceRegular={priceRegular}
        addTo={addTo}
        heartIcon={heartIcon}
      />
    </div>
  );
};

export default ProductCard;
