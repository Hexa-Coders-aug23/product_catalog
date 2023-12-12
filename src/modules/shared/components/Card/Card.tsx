import React from 'react';
import cn from 'classnames';
import styles from './Card.module.scss';
import defaultIcon from './Favourites.png';
import favoritedIcon from './Union.png';

type Props = {
  itemId: string;
  image: string;
  name: string;
  price: number;
  fullPrice: number;
  screen: string;
  capacity: string;
  ram: string;
};

export const Card: React.FC<Props> = ({
  itemId,
  image,
  capacity,
  screen,
  ram,
  fullPrice,
  price,
  name,
}) => {
  const isAlreadyAddedToCart = false;
  const isAlreadyFavorited = false;

  return (
    <>
      <article className={styles.card} data-qa="card">
        <img className={styles.image} src={image} alt={name} />

        <p className={styles.name}>{name}</p>

        <div className={styles.prices}>
          <h2 className={styles.price}>{`$${price}`}</h2>

          {fullPrice !== price && (
            <h2 className={styles.oldPrice}>{`$${fullPrice}`}</h2>
          )}
        </div>

        <hr className={styles.solid} />

        <div className={styles.description}>
          <div className={styles.screen}>
            <p className={styles.screenName}>Screen</p>

            <p className={styles.screenValue}>{screen}</p>
          </div>

          <div className={styles.capacity}>
            <p className={styles.capacityName}>Capacity</p>

            <p className={styles.screenValue}>{capacity}</p>
          </div>

          <div className={styles.ram}>
            <p className={styles.ramName}>RAM</p>

            <p className={styles.screenValue}>{ram}</p>
          </div>
        </div>

        <div className={styles.buttons}>
          <button
            type="button"
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
              src={isAlreadyFavorited ? favoritedIcon : defaultIcon} // Checks if added to favorites and conditional render
              alt="iconToCompare"
            />
          </button>
        </div>
      </article>

      <p>{`Do something with itemId ${itemId}`}</p>
    </>
  );
};
