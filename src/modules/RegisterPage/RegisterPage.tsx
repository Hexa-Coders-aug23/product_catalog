import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Field,
  Form,
  Formik,
  FormikHelpers,
} from 'formik';
import classNames from 'classnames';
import styles from './RegisterPage.module.scss';
import * as authService from '../../api/auth';
import { AuthContext } from '../../context/AuthProvider';
import { Register } from '../../types/Register';

const validateName = (value: string) => {
  if (!value) {
    return 'Name is required';
  }

  return '';
};

const validateEmail = (value: string) => {
  if (!value) {
    return 'Email is required';
  }

  const emailPattern = /^[\w.+-]+@([\w-]+\.){1,3}[\w-]{2,}$/;

  if (!emailPattern.test(value)) {
    return 'Email is not valid';
  }

  if (value?.length < 8) {
    return 'At least 8 characters';
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

export const RegisterPage = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  const { state } = useLocation();

  const handleSubmit = ({
    name,
    email,
    password,
  }: Register, formikHelpers: FormikHelpers<Register>) => {
    setErrorMessage('');
    formikHelpers.setSubmitting(true);

    authService.register({ name, email, password })
      .then(() => {
        login(email, password)
          .then(() => {
            navigate(state?.pathname || '/', { replace: true });
          })
          .catch(error => setErrorMessage(error.response?.data?.message));
      })
      .catch((error: any) => {
        if (error.message) {
          setErrorMessage(error.message);
        }

        if (!error.response?.data) {
          return;
        }

        const { errors, message } = error.response.data;

        formikHelpers.setFieldError('email', errors?.email);
        formikHelpers.setFieldError('password', errors?.password);

        if (message) {
          setErrorMessage(message);
        }
      })
      .finally(() => {
        formikHelpers.setSubmitting(false);
      });
  };

  return (
    <main className={styles.container}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validateOnChange
        onSubmit={({
          name,
          email,
          password,
        }, formikHelpers) => handleSubmit(
          { name, email, password },
          formikHelpers,
        )}
      >
        {({ touched, errors, isSubmitting }) => (
          <Form className={styles.form}>
            <h1 className={styles.title}>Sign In</h1>

            <div className={styles.field}>
              <label htmlFor="name" className={styles.label}>Name</label>

              <div className={classNames(styles.control, {
                [styles.controlError]: touched.name && errors.name,
              })}
              >
                <Field
                  validate={validateName}
                  name="name"
                  type="text"
                  id="name"
                  placeholder="e.g. Bob"
                  className={styles.input}
                />
              </div>

              {touched.name && errors.name && (
                <p className={styles.error}>{errors.name}</p>
              )}
            </div>

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

              {touched.password && errors.password ? (
                <p className={styles.error}>{errors.password}</p>
              ) : (
                <p className={styles.detail}>At least 8 characters</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className={classNames(styles.button, {
                  [styles.disabled]: isSubmitting
                    || errors.email
                    || errors.password
                    || errors.name,
                })}
                disabled={isSubmitting
                  || !!errors.email
                  || !!errors.password
                  || !!errors.name}
              >
                Sign in
              </button>
            </div>

            Forgot password?
            {' '}
            <Link to="/" className={styles.signup}>Change password</Link>
          </Form>
        )}
      </Formik>

      {errorMessage && (
        <p className={styles.error}>{errorMessage}</p>
      )}
    </main>
  );
};
