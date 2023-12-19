import loaderCartImage from '../orange-shopping-cart-10907.png';
import styles from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <img
        className={styles.loader_img}
        src={loaderCartImage}
        alt="Loader Cart"
      />
    </div>
  );
};
