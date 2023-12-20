import React from 'react';
import styles from '../CartPage.module.scss';
import { CartItem } from '../CartItem/CartItem';
import { Phone } from '../../../types/Phone';

type Props = {
  phones: Phone[];
};

export const CartItemsList: React.FC<Props> = ({ phones }) => {
  return (
    <div className={styles.cartItemsList}>
      {phones.map((phone) => (
        <CartItem
          key={phone.id}
          id={phone.id}
          name={phone.name}
          price={phone.price}
          image={phone.image}
          phoneId={phone.phoneId}
        />
      ))}
    </div>
  );
};
