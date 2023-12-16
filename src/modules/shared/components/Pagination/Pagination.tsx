import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';
import classNames from 'classnames';
import styles from './Pagination.module.scss';
import prevArrow from '../../../../static/icons/Chevron_Arrow_Left.svg';
import nextArrow from '../../../../static/icons/Chevron_Arrow_Right.svg';

type Props = {
  activePage: number;
  offset: number;
  rows: string | number;
  totalCount: number;
  onPageChange: (event: PaginatorPageChangeEvent) => void;
};

export const Pagination: React.FC<Props> = ({
  activePage,
  offset,
  rows,
  totalCount,
  onPageChange,
}) => {
  const newRows = typeof rows === 'string' ? totalCount : rows;

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
          <img alt="Prev" src={prevArrow} className={styles.arrow} />
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
          <img alt="Next" src={nextArrow} className={styles.arrow} />
        </button>
      );
    },
    PageLinks: (options: any) => {
      if (
        (options.view.endPage === options.page
          && options.page !== activePage)
        || (options.view.startPage === options.page
          && options.view.endPage === activePage)
      ) {
        return (
          <span
            className={options.className}
            style={{ userSelect: 'none', display: 'none' }}
          />
        );
      }

      return (
        <button
          type="button"
          className={classNames(styles.circleButton, {
            [styles.activeButton]: options.page === activePage,
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
      rows={newRows}
      totalRecords={totalCount}
      onPageChange={onPageChange}
    />
  );
};
