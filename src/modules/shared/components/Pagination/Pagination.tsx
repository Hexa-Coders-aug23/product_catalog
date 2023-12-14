import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';
import classNames from 'classnames';
import styles from './Pagination.module.scss';
import prevArrow from '../../../../static/icons/Chevron_Arrow_Left.svg';
import nextArrow from '../../../../static/icons/Chevron_Arrow_Right.svg';

type Props = {
  page: number;
  offset: number;
  newRows: string | number;
  totalCount: number;
  onPageChange: (event: PaginatorPageChangeEvent) => void;
};

export const Pagination: React.FC<Props> = ({
  page,
  offset,
  newRows,
  totalCount,
  onPageChange,
}) => {
  const template = {
    layout: 'PrevPageLink PageLinks NextPageLink',
    PrevPageLink: (options: any) => {
      return (
        <button
          type="button"
          className={styles.circleWithChevrone}
          onClick={options.onClick}
          disabled={options.disabled}
        >
          <img
            alt="Prev"
            src={prevArrow}
            className={styles.arrow}
          />
        </button>
      );
    },
    NextPageLink: (options: any) => {
      return (
        <button
          type="button"
          className={styles.circleWithChevrone}
          onClick={options.onClick}
          disabled={options.disabled}
        >
          <img
            alt="Next"
            src={nextArrow}
            className={styles.arrow}
          />
        </button>
      );
    },
    PageLinks: (options: any) => {
      return (
        <button
          type="button"
          className={classNames(styles.circleButton, {
            [styles.activeButton]: options.page === page,
          })}
          onClick={options.onClick}
        >
          {options.page + 1}
        </button>
      );
    },
  };

  return (
    <Paginator
      template={template}
      first={offset}
      rows={newRows as number}
      totalRecords={totalCount}
      onPageChange={onPageChange}
    />
  );
};
