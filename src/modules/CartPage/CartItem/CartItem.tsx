/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import iconClose from '../../../static/icons/Close.svg';
import iconMinus from '../../../static/icons/Minus.svg';
import iconPlus from '../../../static/icons/Plus.svg';
import { Phone } from '../../../types/Phone';

import styles from './CartItem.module.scss';
import {
  PhonesContext,
  QuantityOperation,
} from '../../../context/GlobalProvider';

type Props = Pick<Phone, 'id' | 'image' | 'name' | 'price' | 'phoneId'>;

export const CartItem: React.FC<Props> = ({
  id, image, name, price, phoneId,
}) => {
  const { removeFromCart, changeQuantity, cartItems }
    = useContext(PhonesContext);
  const foundItem = cartItems.find((item) => item.id === id);
  const quantity = foundItem ? foundItem.quantity ?? 0 : 0;
  const isDisabled = quantity !== undefined && quantity < 2;
  const navigate = useNavigate();

  return (
    <div className={styles.cartItem}>
      <div className={styles.firstRow}>
        <button
          type="button"
          className={styles.cartItemButtonClose}
          onClick={() => removeFromCart(id)}
        >
          <img
            className={styles.cartItemIconClose}
            src={iconClose}
            alt="Icon Close"
          />
        </button>

        <div className={styles.cartItemImageContainer}>
          <img
            className={styles.cartItemImage}
            src={image}
            alt="Item"
            onClick={() => navigate(`/phones/${phoneId}`)}
          />
        </div>

        <p
          className={styles.cartItemName}
          onClick={() => navigate(`/phones/${phoneId}`)}
        >
          {name}
        </p>
      </div>

      <div className={styles.secondRow}>
        <div className={styles.buttonsWrapper}>
          <button
            className={cn({
              [styles.cartButtonMinusPlus]: !isDisabled,
              [styles.cartButtonMinusDisabled]: isDisabled,
            })}
            type="button"
            onClick={() => changeQuantity(id, QuantityOperation.Decrease)}
            disabled={isDisabled}
          >
            <img
              className={cn({
                [styles.cartIconMinusPlus]: !isDisabled,
                [styles.cartIconMinusDisabled]: isDisabled,
              })}
              src={iconMinus}
              alt="Minus"
            />
          </button>

          <p className={styles.cartItemQuantity}>{quantity}</p>

          <button
            className={styles.cartButtonMinusPlus}
            type="button"
            onClick={() => changeQuantity(id, QuantityOperation.Increase)}
          >
            <img
              className={styles.cartIconMinusPlus}
              src={iconPlus}
              alt="Plus"
            />
          </button>
        </div>

        <h2 className={styles.cartItemPrice}>{`$${price}`}</h2>
      </div>
    </div>
  );
};
