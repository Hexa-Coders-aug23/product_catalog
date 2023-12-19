import styles from './Modal.module.scss';
import iconClose from '../../../static/icons/Close.svg';

type Props = {
  onClose: () => void;
};

export const Modal: React.FC<Props> = ({ onClose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal_window}>
        <h1 className={styles.modal_title}>Thank you</h1>

        <p className={styles.modal_text}>
          Your order was completed successfully
        </p>

        <button
          type="button"
          className={styles.cartItemButtonClose}
          onClick={onClose}
        >
          <img
            className={styles.cartItemIconClose}
            src={iconClose}
            alt="Icon Close"
          />
        </button>
      </div>

      <div className={styles.overlay} />
    </div>
  );
};
