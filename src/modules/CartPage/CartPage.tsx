import React from 'react';
import styles from './CartPage.module.scss';

import iconBack from '../../static/icons/Chevron_Arrow_Left.svg';
import iconClose from '../../static/icons/Close.svg';
import iconMinus from '../../static/icons/Minus.svg';
import iconPlus from '../../static/icons/Plus.svg';
// eslint-disable-next-line max-len
import itemImage from '../../static/phones/apple-iphone-11-pro-max/midnightgreen/00.jpg';

export const CartPage: React.FC = () => {
  const itemName = 'Apple iPhone 11 Pro Max 64GB MidnightGreen (iMT9G2FS/A)';

  return (
    <div className={styles.container}>
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
        <div className={styles.cartItemsContent}>
          <div className={styles.cartItem}>
            <div className={styles.firstRow}>
              <img
                className={styles.cartItemIconClose}
                src={iconClose}
                alt="Icon Close"
              />

              <div className={styles.cartItemImageContainer}>
                <img
                  className={styles.cartItemImage}
                  src={itemImage}
                  alt="Item"
                />
              </div>

              <p className={styles.cartItemName}>{itemName}</p>
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

              <h2 className={styles.cartItemPrice}>$999</h2>
            </div>
          </div>

          <div className={styles.cartItem}>
            <div className={styles.firstRow}>
              <img
                className={styles.cartItemIconClose}
                src={iconClose}
                alt="Icon Close"
              />

              <div className={styles.cartItemImageContainer}>
                <img
                  className={styles.cartItemImage}
                  src={itemImage}
                  alt="Item"
                />
              </div>

              <p className={styles.cartItemName}>{itemName}</p>
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

              <h2 className={styles.cartItemPrice}>$999</h2>
            </div>
          </div>

          <div className={styles.cartItem}>
            <div className={styles.firstRow}>
              <img
                className={styles.cartItemIconClose}
                src={iconClose}
                alt="Icon Close"
              />

              <div className={styles.cartItemImageContainer}>
                <img
                  className={styles.cartItemImage}
                  src={itemImage}
                  alt="Item"
                />
              </div>

              <p className={styles.cartItemName}>{itemName}</p>
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

                <p className={styles.cartItemQuantity}>1</p>

                <button className={styles.cartButtonMinusPlus} type="button">
                  <img
                    className={styles.cartIconMinusPlus}
                    src={iconPlus}
                    alt="Plus"
                  />
                </button>
              </div>

              <h2 className={styles.cartItemPrice}>$999</h2>
            </div>
          </div>
        </div>

        <div className={styles.checkout}>
          <h2 className={styles.checkoutPrice}>$2997</h2>

          <p className={styles.checkoutAmountItems}>Total for 3 items</p>

          <hr className={styles.checkoutHr} />

          <button className={styles.checkoutButton} type="button">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
