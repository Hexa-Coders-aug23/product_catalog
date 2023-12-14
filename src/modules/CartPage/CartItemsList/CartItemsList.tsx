import React from 'react';
import styles from '../CartPage.module.scss';
import { CartItem } from '../CartItem/CartItem';

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

type Props = {
  phones: Phone[];
};

export const CartItemsList: React.FC<Props> = ({ phones }) => {
  return (
    <div className={styles.cartItemsList}>
      {phones.map((phone) => (
        <CartItem
          key={phone.id}
          name={phone.name}
          price={phone.price}
          image={phone.image}
        />
      ))}
    </div>
  );
};
