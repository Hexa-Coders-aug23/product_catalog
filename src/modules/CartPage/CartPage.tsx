import React from 'react';
import styles from './CartPage.module.scss';

import iconBack from '../../static/icons/Chevron_Arrow_Left.svg';
// import { CartItemsList } from './CartItemsList/CartItemsList';

export const CartPage: React.FC = () => {
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

      <div className={styles.cartContent}>
        {/* <CartItemsList phones={phones} /> */}

        <div className={styles.checkout}>
          <h2 className={styles.checkoutPrice}>$2997</h2>

          <p className={styles.checkoutAmountItems}>Total for 3 items</p>

          <hr className={styles.checkoutHr} />

          <button className={styles.checkoutButton} type="button">
            Checkout
          </button>
        </div>
      </div>
    </main>
  );
};
