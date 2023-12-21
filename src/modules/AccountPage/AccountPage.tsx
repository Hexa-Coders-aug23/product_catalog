import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import styles from './AccountPage.module.scss';
import { AuthContext } from '../../context/AuthProvider';

export const AccountPage = () => {
  const { logout } = useContext(AuthContext);
  const isLoggedIn = localStorage.getItem('accessToken') !== null;
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (isLoggedIn) {
      logout();
      navigate('/');
    } else {
      navigate('/login', { state: { pathname }, replace: true });
    }
  };

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
            onClick={handleClick}
          >
            {isLoggedIn
              ? 'Logout'
              : 'Login'}
          </button>
        </div>
      </section>
    </main>
  );
};
