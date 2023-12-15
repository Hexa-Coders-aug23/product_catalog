import React from 'react';
import styles from './CartPage.module.scss';

import iconBack from '../../static/icons/Chevron_Arrow_Left.svg';
import emptyCartImage from './1942770.png';
// import { CartItemsList } from './CartItemsList/CartItemsList';

export const CartPage: React.FC = () => {
  // const phones = [
  //   {
  //     id: '1',
  //     category: 'phones',
  //     phoneId: 'apple-iphone-7-32gb-black',
  //     itemId: 'apple-iphone-7-32gb-black',
  //     name: 'Apple iPhone 7 32GB Black',
  //     fullPrice: 400,
  //     price: 375,
  //     screen: "4.7' IPS",
  //     capacity: '32GB',
  //     color: 'black',
  //     ram: '2GB',
  //     year: 2016,
  //     image: 'img/phones/apple-iphone-7/black/00.jpg',
  //   },
  //   {
  //     id: '2',
  //     category: 'phones',
  //     phoneId: 'apple-iphone-7-plus-32gb-black',
  //     itemId: 'apple-iphone-7-plus-32gb-black',
  //     name: 'Apple iPhone 7 Plus 32GB Black',
  //     fullPrice: 540,
  //     price: 500,
  //     screen: "5.5' IPS",
  //     capacity: '32GB',
  //     color: 'black',
  //     ram: '3GB',
  //     year: 2016,
  //     image: 'img/phones/apple-iphone-7-plus/black/00.jpg',
  //   },
  //   {
  //     id: '3',
  //     category: 'phones',
  //     phoneId: 'apple-iphone-8-64gb-gold',
  //     itemId: 'apple-iphone-8-64gb-gold',
  //     name: 'Apple iPhone 8 64GB Gold',
  //     fullPrice: 600,
  //     price: 550,
  //     screen: "4.7' IPS",
  //     capacity: '64GB',
  //     color: 'gold',
  //     ram: '2GB',
  //     year: 2017,
  //     image: 'img/phones/apple-iphone-8/gold/00.jpg',
  //   }];

  return (
    <main className={styles.container}>
      <button type="button" className={styles.goBackButton}>
        <img
          className={styles.goBackButtonIcon}
          src={iconBack}
          alt="Icon Back"
        />

        <p className={styles.goBackButtonText}>Back</p>
      </button>

      <h2 className={styles.title}>Cart</h2>

      {/* {!phones.length ? ( */}
      <div className={styles.emptyCart}>
        <img
          className={styles.emptyCartImage}
          src={emptyCartImage}
          alt="Empty Cart"
        />

        <h2 className={styles.emptyCartTitle}>
          Whoops... Looks like your cart is empty!
        </h2>

        <p className={styles.emptyCartText}>
          Check out our HOT topic and hurry up to get something that has the
          hottest discount
        </p>
      </div>
      {/* ) : ( */}
      {/* <div className={styles.cartContent}>
        <CartItemsList phones={phones} />

        <div className={styles.checkout}>
          <h2 className={styles.checkoutPrice}>$2997</h2>

          <p className={styles.checkoutAmountItems}>Total for 3 items</p>

          <hr className={styles.checkoutHr} />

          <button className={styles.checkoutButton} type="button">
            Checkout
          </button>
        </div>
      </div> */}
      {/* )} */}
    </main>
  );
};
