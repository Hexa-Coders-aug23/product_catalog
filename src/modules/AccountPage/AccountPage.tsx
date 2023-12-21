import { Link } from 'react-router-dom';
import styles from './AccountPage.module.scss';

export const AccountPage = () => {
  return (
    <main className={styles.container}>
      <section className={styles.page}>
        <h2 className={styles.title}>Account Page Under Development</h2>
        <p className={styles.message}>
          We are working hard to bring you
          an awesome experience. Check back soon!
        </p>
        <p className={styles.message}>In the meantime, you can:</p>
        <ul className={styles.list}>
          <li>
            <Link
              to="/"
              className={styles.list_option}
            >
              Go to Home Page
            </Link>
          </li>
          <li>
            <Link
              to="/phones"
              className={styles.list_option}
            >
              Discover available phones!
            </Link>
          </li>
        </ul>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.logout}
          >
            Logout
          </button>
        </div>
      </section>
    </main>
  );
};
