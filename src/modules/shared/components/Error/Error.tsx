import styles from './Error.module.scss';
import iconClose from '../../../../static/icons/Close.svg';

type Props = {
  errorMessage: string;
  setErrorMessage: (value: string) => void;
};

export const Error: React.FC<Props> = ({ errorMessage, setErrorMessage }) => {
  return (
    <div
      className={styles.error}
    >
      <p>{errorMessage}</p>
      <button
        type="button"
        aria-label="hide error"
        className={styles.cartItemButtonClose}
        onClick={() => setErrorMessage('')}
      >
        <img
          className={styles.cartItemIconClose}
          src={iconClose}
          alt="Icon Close"
        />
      </button>
    </div>
  );
};
