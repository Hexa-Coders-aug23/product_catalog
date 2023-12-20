import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from '../PhonePage.module.scss';

type Props = {
  name: string;
};

export const HeaderComponent: React.FC<Props> = ({ name }) => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <>
      <div className={styles.breadcrumbs}>
        <NavLink to="/" className={styles.homeIcon} />
        <div className={styles.iconNext} />
        <NavLink to="../" className={styles.prevStep}>
          Phones
        </NavLink>
        <div className={styles.iconNext} />
        <NavLink to="#" className={styles.step}>
          {name}
        </NavLink>
      </div>
      <div className={styles.backButtonContainer}>
        <div className={styles.iconBack} />
        <button
          type="button"
          onClick={handleGoBack}
          className={styles.backButton}
        >
          Back
        </button>
      </div>

      <h1 className={styles.mainHeader}>{name}</h1>
    </>
  );
};
