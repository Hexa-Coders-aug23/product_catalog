import classNames from 'classnames';
import styles from './Loader.module.scss';

type Props = {
  times: number;
  className: string;
  isGrid: boolean;
};

export const Loader: React.FC<Props> = ({ times, className, isGrid }) => {
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
    <div className={classNames({
      [styles.loadContainer]: isGrid,
      [styles.flexContainer]: !isGrid,
    })}
    >
      {boxes}
    </div>
  );
};
