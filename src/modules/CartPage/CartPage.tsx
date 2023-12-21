/* eslint-disable no-console */
import React, {
  useCallback, useContext, useEffect, useState,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './CartPage.module.scss';

import iconBack from '../../static/icons/Chevron_Arrow_Left.svg';
import emptyCartImage from './1942770.png';
import { CartItem } from '../../types/CartItem';
import { requests } from '../../utils/fetchClient';
import { PhonesContext } from '../../context/GlobalProvider';
import { CartItemsList } from './CartItemsList/CartItemsList';

import { Phone } from '../../types/Phone';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { AuthContext } from '../../context/AuthProvider';

export const CartPage: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const { pathname } = useLocation();
  const { checkAuth } = useContext(AuthContext);
  const { cartItems, setCartItems } = useContext(PhonesContext);
  const navigate = useNavigate();

  const checkoutTotalAmount = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );

  const checkoutSum = cartItems.reduce((acc, item) => {
    const phoneItem = phones.find((phone) => phone.id === item.id);
    const itemTotal = (phoneItem?.price ?? 0) * item.quantity;

    return acc + itemTotal;
  }, 0);

  const loadPhones = useCallback(async () => {
    if (cartItems.length) {
      const ids = cartItems.map((item: CartItem) => item.id).join(',');

      return requests.get(`/phones/many/${ids}`);
    }

    return true;
  }, [cartItems]);

  useEffect(() => {
    const fetchData = async () => {
      const phonesData = await loadPhones();

      setPhones(phonesData);
      setIsLoading(false);
    };

    fetchData();
  }, [loadPhones]);

  const handleCheckout = async () => {
    if (!await checkAuth()) {
      navigate('/login', { state: { pathname }, replace: true });
    }

    setModal(true);
  };

  const handleCloseModal = () => {
    setCartItems([]);
    localStorage.removeItem('cart');
    setModal(false);
    navigate('/');
  };

  return (
    <main className={styles.container}>
      <button
        type="button"
        className={styles.goBackButton}
        onClick={() => window.history.back()}
      >
        <img
          className={styles.goBackButtonIcon}
          src={iconBack}
          alt="Icon Back"
        />

        <p className={styles.goBackButtonText}>Back</p>
      </button>

      <h2 className={styles.title}>Cart</h2>

      {cartItems.length > 0
        && (isLoading ? (
          <Loader />
        ) : (
          <div className={styles.cartContent}>
            <CartItemsList phones={phones} />

            <div className={styles.checkout}>
              <h2 className={styles.checkoutPrice}>{`$${checkoutSum}`}</h2>

              <p className={styles.checkoutAmountItems}>
                {`Total for ${checkoutTotalAmount} items`}
              </p>

              <hr className={styles.checkoutHr} />

              <button
                className={styles.checkoutButton}
                type="button"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </div>
        ))}

      {cartItems.length === 0 && (
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
      )}

      {modal && <Modal onClose={handleCloseModal} />}
    </main>
  );
};
