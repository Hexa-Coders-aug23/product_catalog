/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext } from 'react';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import styles from './Card.module.scss';
import defaultIcon from './Favourites.png';
import favoritedIcon from './Union.png';
import { PhonesContext } from '../../../../context/GlobalProvider';

type Props = {
  itemId: string;
  id: number;
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
  id,
  image,
  capacity,
  screen,
  ram,
  fullPrice,
  price,
  name,
}) => {
  const {
    addToCart, handleFavorite, favoriteItems, cartItems,
  }
    = useContext(PhonesContext);
  const isAlreadyAddedToCart = cartItems.some((item) => item.id === id);
  const navigate = useNavigate();
  const isAlreadyFavorited = favoriteItems.includes(id);

  return (
    <article className={styles.card} data-qa="card">
      <img
        className={styles.image}
        src={image}
        alt={name}
        onClick={() => navigate(`/phones/${itemId}`)}
      />

      <p className={styles.name} onClick={() => navigate(`/phones/${itemId}`)}>
        {name}
      </p>

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
          onClick={
            !isAlreadyAddedToCart
              ? () => addToCart(id)
              : () => navigate('/cart')
          }
          data-qa="hover"
        >
          {isAlreadyAddedToCart ? 'Added to cart' : 'Add to cart'}
        </button>

        <button
          className={styles.addToCompareButton}
          type="button"
          onClick={() => handleFavorite(id)}
        >
          <img
            className={styles.addToCompareIcon}
            src={isAlreadyFavorited ? favoritedIcon : defaultIcon} // Checks if added to favorites and conditional render
            alt="iconToCompare"
          />
        </button>
      </div>
    </article>
  );
};
