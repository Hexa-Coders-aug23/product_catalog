import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import classNames from 'classnames';
import styles from './LoginPage.module.scss';
import { AuthContext } from '../../context/AuthProvider';

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

  if (value?.length < 6) {
    return 'At least 6 characters';
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

    login(email, password)
      .then(() => {
        navigate(state?.pathname || '/', { replace: true });
      })
      .catch(error => setErrorMessage(error.response?.data?.message));
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
            <h1 className={styles.title}>Log in</h1>

            <div className="field">
              <label htmlFor="email" className="label">Email</label>

              <div className="control has-icons-left has-icons-right">
                <Field
                  validate={validateEmail}
                  name="email"
                  type="email"
                  id="email"
                  placeholder="e.g. bobsmith@gmail.com"
                  className={classNames('input', {
                    'is-danger': touched.email && errors.email,
                  })}
                />

                <span className="icon is-small is-left">
                  <i className="fa fa-envelope" />
                </span>

                {touched.email && errors.email && (
                  <span className="icon is-small is-right has-text-danger">
                    <i className="fas fa-exclamation-triangle" />
                  </span>
                )}
              </div>

              {touched.email && errors.email && (
                <p className="help is-danger">{errors.email}</p>
              )}
            </div>

            <div className="field">
              <label htmlFor="password" className="label">
                Password
              </label>

              <div className="control has-icons-left has-icons-right">
                <Field
                  validate={validatePassword}
                  name="password"
                  type="password"
                  id="password"
                  placeholder="*******"
                  className={classNames('input', {
                    'is-danger': touched.password && errors.password,
                  })}
                />

                <span className="icon is-small is-left">
                  <i className="fa fa-lock" />
                </span>

                {touched.password && errors.password && (
                  <span className="icon is-small is-right has-text-danger">
                    <i className="fas fa-exclamation-triangle" />
                  </span>
                )}
              </div>

              {touched.password && errors.password ? (
                <p className="help is-danger">{errors.password}</p>
              ) : (
                <p className="help">At least 6 characters</p>
              )}
            </div>

            <div className="field">
              <button
                type="submit"
                className={classNames(
                  'button is-success has-text-weight-bold', {
                    'is-loading': isSubmitting,
                  },
                )}
                disabled={isSubmitting
                  || !!errors.email
                  || !!errors.password}
              >
                Log in
              </button>
            </div>

            Do not have an account?
            {' '}
            <Link to="/sign-up">Sign up</Link>
          </Form>
        )}
      </Formik>

      {errorMessage && (
        <p className="notification is-danger is-light">{errorMessage}</p>
      )}
    </main>
  );
};
