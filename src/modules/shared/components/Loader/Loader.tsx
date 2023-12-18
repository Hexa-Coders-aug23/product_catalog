import classNames from 'classnames';
import styles from './Loader.module.scss';

type Props = {
  times: number;
  className: string;
};

export const Loader: React.FC<Props> = ({ times, className }) => {
  const outerStyles = classNames(styles.outer, className);
  const innerStyles = classNames(styles.inner);

  const boxes = Array(times).fill(0).map((value, i) => {
    return (
      // eslint-disable-next-line react/no-array-index-key
      <div key={value + i} className={outerStyles}>
        <div className={innerStyles} />
      </div>
    );
  });

  return (
    <div className={styles.loadContainer}>
      {boxes}
    </div>
  );
};
