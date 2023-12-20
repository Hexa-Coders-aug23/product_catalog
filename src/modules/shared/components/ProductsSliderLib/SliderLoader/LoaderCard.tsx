import { FC } from 'react';
import styles from './LoaderCard.module.scss';

export const LoaderCard: FC = () => {
  return (
    <div className={styles.outer}>
      <div className={styles.inner} />
    </div>
  );
};
