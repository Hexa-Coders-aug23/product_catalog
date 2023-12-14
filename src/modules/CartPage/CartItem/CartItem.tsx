import iconClose from '../../../static/icons/Close.svg';
import iconMinus from '../../../static/icons/Minus.svg';
import iconPlus from '../../../static/icons/Plus.svg';

import styles from './CartItem.module.scss';

interface Phone {
  id: string;
  category: string;
  phoneId: string;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
}

type Props = Pick<Phone, 'image' | 'name' | 'price'>;

export const CartItem: React.FC<Props> = ({ image, name, price }) => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.firstRow}>
        <img
          className={styles.cartItemIconClose}
          src={iconClose}
          alt="Icon Close"
        />

        <div className={styles.cartItemImageContainer}>
          <img className={styles.cartItemImage} src={image} alt="Item" />
        </div>

        <p className={styles.cartItemName}>{name}</p>
      </div>

      <div className={styles.secondRow}>
        <div className={styles.buttonsWrapper}>
          <button className={styles.cartButtonMinusPlus} type="button">
            <img
              className={styles.cartIconMinusPlus}
              src={iconMinus}
              alt="Minus"
            />
          </button>

          <p>1</p>

          <button className={styles.cartButtonMinusPlus} type="button">
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
