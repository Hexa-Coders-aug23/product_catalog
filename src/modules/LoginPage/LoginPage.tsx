import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import classNames from 'classnames';
import styles from './LoginPage.module.scss';
import { AuthContext } from '../../context/AuthProvider';
import iconBack from '../../static/icons/Chevron_Arrow_Left.svg';

const validateEmail = (value: string) => {
  if (!value) {
    return 'Email is required';
  }

  const emailPattern = /^[\w.+-]+@([\w-]+\.){1,3}[\w-]{2,}$/;

  if (!emailPattern.test(value)) {
    return 'Email is not valid';
  }

  return '';
};

const validatePassword = (value: string) => {
  if (!value) {
    return 'Password is required';
  }

  if (value?.length < 8) {
    return 'At least 8 characters';
  }

  return '';
};

export const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  const { state } = useLocation();

  const handleSubmit = (email: string, password: string) => {
    setErrorMessage('');

    login({ email, password })
      .then(() => {
        navigate(state?.pathname || '/', { replace: true });
      })
      .catch((error: any) => setErrorMessage(error.response?.data?.message));
  };

  return (
    <main className={styles.container}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validateOnChange
        onSubmit={({ email, password }) => handleSubmit(email, password)}
      >
        {({ touched, errors, isSubmitting }) => (
          <Form className={styles.form}>
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

            <h1 className={styles.title}>Log In</h1>

            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>Email</label>

              <div className={classNames(styles.control, {
                [styles.controlError]: touched.email && errors.email,
              })}
              >
                <Field
                  validate={validateEmail}
                  name="email"
                  type="email"
                  id="email"
                  placeholder="e.g. bobsmith@gmail.com"
                  className={styles.input}
                />
              </div>

              {touched.email && errors.email && (
                <p className={styles.error}>{errors.email}</p>
              )}
            </div>

            <div className={styles.field}>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>

              <div className={classNames(styles.control, {
                [styles.controlError]: touched.password && errors.password,
              })}
              >
                <Field
                  validate={validatePassword}
                  name="password"
                  type="password"
                  id="password"
                  placeholder="password"
                  className={styles.input}
                />
              </div>

              {touched.password && errors.password && (
                <p className={styles.error}>{errors.password}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className={classNames(styles.button, {
                  [styles.disabled]: isSubmitting
                    || errors.email
                    || errors.password,
                })}
                disabled={isSubmitting
                  || !!errors.email
                  || !!errors.password}
              >
                Log in
              </button>
            </div>

            Do not have an account?
            {' '}
            <Link to="/sign-up" className={styles.signup}>Sign up</Link>
          </Form>
        )}
      </Formik>

      {errorMessage && (
        <p className={styles.error}>{errorMessage}</p>
      )}
    </main>
  );
};
