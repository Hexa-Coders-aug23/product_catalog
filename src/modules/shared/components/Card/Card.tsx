/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import cn from 'classnames';
import styles from './Card.module.scss';

// eslint-disable-next-line max-len
const image = require('../../../../static/phones/apple-iphone-11-pro-max/gold/00.jpg');
const defaultIcon = require('./Favourites.png');
// const favoritedIcon = require('./Union.png');

// type Props = {
//   image: string;
//   productName: string;
//   price: number;
//   fullPrice: number;
//   screen: string;
//   capacity: number;
//   ram: number;
// };

export const Card: React.FC = () => {
  // eslint-disable-next-line max-len
  const isAlreadyAddedToCart = true;

  return (
    <article className={styles.card} data-qa="card">
      <img
        className={styles.image}
        // eslint-disable-next-line max-len
        src={image}
        alt="Apple iPhone 14 Pro 128GB Silver (MQ023)"
      />

      <p className={styles.name}>Apple iPhone 14 Pro 128GB Silver (MQ023)</p>

      <div className={styles.prices}>
        <h2 className={styles.price}>$999</h2>

        {/* // { {fullPrice !== price && ( */}
        <h2 className={styles.oldPrice}>$1000</h2>
        {/* )} } */}
      </div>

      <hr className={styles.solid} />

      <div className={styles.description}>
        <div className={styles.screen}>
          <p className={styles.screenName}>Screen</p>

          <p className={styles.screenValue}>6.1” OLED</p>
        </div>

        <div className={styles.capacity}>
          <p className={styles.capacityName}>Capacity</p>

          <p className={styles.screenValue}>128 GB</p>
        </div>

        <div className={styles.ram}>
          <p className={styles.ramName}>RAM</p>

          <p className={styles.screenValue}>6 GB</p>
        </div>
      </div>

      <div className={styles.buttons}>
        <button
          type="button"
          // className={styles.addToCartButton}
          className={cn(styles.addToCartButton, {
            [styles.alreadyAddedToCartButton]: isAlreadyAddedToCart,
          })}
          data-qa="hover"
        >
          {isAlreadyAddedToCart ? 'Added to cart' : 'Add to cart'}
        </button>

        <button className={styles.addToCompareButton} type="button">
          <img
            className={styles.addToCompareIcon}
            src={defaultIcon}
            // src={isAlreadyFavorited ? favoritedIcon : defaultIcon} // Checks if added to favorites and conditional render
            alt="iconToCompare"
          />
        </button>
      </div>
    </article>
  );
};
